package service

import (
	"context"
	apperror "human_labs/appError"
	"net/http"
)

func (hls *HumanLabsService) AssignTaskToUser(ctx context.Context, platformUserId int, taskId int) (*map[string]any, *apperror.AppError) {

	// check if task is already assigned to user
	taskInfo, appErr := hls.DbHelper.GetTaskInfoById(ctx, taskId)
	if appErr != nil {
		return nil, appErr
	}

	// validating task status
	if (*taskInfo)["status"] != "open" {

		// if already assigned to the same user
		if (*taskInfo)["assigned_user_id"] != nil && int((*taskInfo)["assigned_user_id"].(int32)) == platformUserId {
			return &map[string]any{
				"status":   "Task already assigned to the user",
				"taskInfo": taskInfo,
			}, nil
		}

		return nil, &apperror.AppError{
			Err:        nil,
			Code:       apperror.INVALID_REQUEST,
			HttpStatus: http.StatusBadRequest,
			Message:    "Task is already assigned to another user",
		}
	}

	projectId := int((*taskInfo)["project_id"].(int32))
	taskType := (*taskInfo)["type"].(string)

	userRoleObj, appErr := hls.DbHelper.GetUserProjectRoles(ctx, platformUserId, projectId)
	if appErr != nil {
		return nil, appErr
	}
	if userRoleObj == nil {
		//assign a project role to user
		appErr = hls.DbHelper.AddProjectRoleToUser(ctx, platformUserId, projectId, roleFromTskType(taskType))

	}

	if userRoleObj != nil && !canUserDoTheTaskByRole((*userRoleObj)["role"].(string), taskType) {
		return nil, &apperror.AppError{
			Err:        nil,
			Code:       apperror.INVALID_REQUEST,
			HttpStatus: http.StatusBadRequest,
			Message:    "User does not have annotator role in the project",
		}
	}

	//assign task to user
	appErr = hls.DbHelper.AssignTaskToUser(ctx, platformUserId, taskId)
	if appErr != nil {
		return nil, appErr
	}

	return &map[string]any{
		"status":   "Task assigned successfully",
		"taskInfo": taskInfo,
	}, nil

}

func (hls *HumanLabsService) GetTaskById(
	ctx context.Context,
	taskId int,
	platformUserId int,
) (*map[string]any, *apperror.AppError) {

	// check if task is already assigned to user
	taskInfo, appErr := hls.DbHelper.GetTaskInfoById(ctx, taskId)
	if appErr != nil {
		return nil, appErr
	}

	// validating task status
	if (*taskInfo)["status"] != "open" && int((*taskInfo)["assigned_user_id"].(int32)) != platformUserId {
		return nil, &apperror.AppError{
			Err:        nil,
			Code:       apperror.INVALID_REQUEST,
			HttpStatus: http.StatusBadRequest,
			Message:    "Task is not open for annotation",
		}
	}

	projectId := int((*taskInfo)["project_id"].(int32))

	userRoleObj, appErr := hls.DbHelper.GetUserProjectRoles(ctx, platformUserId, projectId)
	if appErr != nil {
		return nil, appErr
	}
	if userRoleObj == nil {
		return nil, &apperror.AppError{
			Err:        nil,
			Code:       apperror.INVALID_REQUEST,
			HttpStatus: http.StatusBadRequest,
			Message:    "User does not have annotator role in the project",
		}
	}

	if !canUserDoTheTaskByRole((*userRoleObj)["role"].(string), (*taskInfo)["type"].(string)) {
		return nil, &apperror.AppError{
			Err:        nil,
			Code:       apperror.INVALID_REQUEST,
			HttpStatus: http.StatusBadRequest,
			Message:    "User does not have annotator role in the project",
		}
	}

	// get task details from Label Studio
	lsTask, appErr := hls.LSHelper.GetTask(ctx, int((*taskInfo)["annotator_task_id"].(int32)))
	if appErr != nil {
		return nil, appErr
	}

	return &map[string]any{
		"hl_task":          taskInfo,
		"labelStudio_task": lsTask,
	}, nil
}

func (hls *HumanLabsService) AddAnnotationToTask(
	ctx context.Context,
	taskId int, platformUserId int,
	annotation *[]map[string]any,
) (*map[string]any, *apperror.AppError) {

	// check if task is assigned to user

	taskInfo, appErr := hls.DbHelper.GetTaskInfoById(ctx, taskId)
	if appErr != nil {
		return nil, appErr
	}

	if taskInfo == nil || (*taskInfo)["status"] == "completed" {
		return nil, &apperror.AppError{
			Err:        nil,
			Code:       apperror.NOT_FOUND_ERROR,
			HttpStatus: http.StatusNotFound,
			Message:    "Task not found or already completed",
		}
	}

	if int((*taskInfo)["assigned_user_id"].(int32)) != platformUserId {
		return nil, &apperror.AppError{
			Err:        nil,
			Code:       apperror.INVALID_REQUEST,
			HttpStatus: http.StatusBadRequest,
			Message:    "Task is not assigned to the user",
		}
	}

	//Add annotation to Label Studio task and mark annotation task as completed
	//ideally this should be in a transaction but skipping for now
	//for simplicity and POC purposes
	appErr = hls.LSHelper.AddAnnotationToTask(
		ctx,
		int((*taskInfo)["annotator_task_id"].(int32)),
		annotation,
	)
	if appErr != nil {
		return nil, appErr
	}
	appErr = hls.DbHelper.MarkTaskAsCompleted(ctx, taskId)
	if appErr != nil {
		return nil, appErr
	}

	return &map[string]any{
		"status": "Annotation added successfully",
	}, nil

}

func (hls *HumanLabsService) ApproveTask(
	ctx context.Context,
	taskId int, platformUserId int,
) (*map[string]any, *apperror.AppError) {

	// check if task is already assigned to user
	taskInfo, appErr := hls.DbHelper.GetTaskInfoById(ctx, taskId)
	if appErr != nil {
		return nil, appErr
	}

	// validating task status
	if (*taskInfo)["status"] != "open" {

		// if already assigned to the same user
		if (*taskInfo)["assigned_user_id"] != nil && int((*taskInfo)["assigned_user_id"].(int32)) == platformUserId {
			return &map[string]any{
				"status":   "Task already assigned to the user",
				"taskInfo": taskInfo,
			}, nil
		}

		return nil, &apperror.AppError{
			Err:        nil,
			Code:       apperror.INVALID_REQUEST,
			HttpStatus: http.StatusBadRequest,
			Message:    "Task is already assigned to another user",
		}
	}

	projectId := int((*taskInfo)["project_id"].(int32))

	userRoleObj, appErr := hls.DbHelper.GetUserProjectRoles(ctx, platformUserId, projectId)
	if appErr != nil {
		return nil, appErr
	}
	if userRoleObj == nil {
		return nil, &apperror.AppError{
			Err:        nil,
			Code:       apperror.INVALID_REQUEST,
			HttpStatus: http.StatusBadRequest,
			Message:    "User does not have annotator role in the project",
		}
	}

	if !canUserDoTheTaskByRole((*userRoleObj)["role"].(string), (*taskInfo)["type"].(string)) {
		return nil, &apperror.AppError{
			Err:        nil,
			Code:       apperror.INVALID_REQUEST,
			HttpStatus: http.StatusBadRequest,
			Message:    "User does not have annotator role in the project",
		}
	}

	// approve task assignment to user
	appErr = hls.DbHelper.AddReviewResultToTask(ctx, taskId, "completed")
	if appErr != nil {
		return nil, appErr
	}

	return &map[string]any{
		"status":   "Task approved successfully",
		"taskInfo": taskInfo,
	}, nil

}

func (hls *HumanLabsService) RejectAnnotationOfTask(
	ctx context.Context,
	taskId int, platformUserId int, annotationId int, reason string,
) (*map[string]any, *apperror.AppError) {

	// TODO: checks to be implemented
	// juts a poc for now
	appErr := hls.LSHelper.UpdateAnnotation(&map[string]any{
		"was_cancelled": true,
		"meta": map[string]any{
			"rejectionReason": reason,
		},
	}, annotationId)
	if appErr != nil {
		return nil, appErr
	}

	return &map[string]any{
		"status": "Annotation rejected successfully",
	}, nil

}
