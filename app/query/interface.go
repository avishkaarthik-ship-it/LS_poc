package query

import (
	"context"
	apperror "human_labs/appError"
)

type DbHelper interface {
	GetTaskInfoById(ctx context.Context, taskId int) (*map[string]any, *apperror.AppError)
	GetTasksAssignedToUser(ctx context.Context, taskId int, userId int) (*[]map[string]any, *apperror.AppError)
	GetUserProjectRoles(ctx context.Context, platformUserId int, projectId int) (*map[string]any, *apperror.AppError)

	AssignTaskToUser(ctx context.Context, platformUserId int, taskId int) *apperror.AppError
	MarkTaskAsCompleted(ctx context.Context, taskId int) *apperror.AppError
	AddReviewResultToTask(ctx context.Context, taskId int, reviewResults string) *apperror.AppError
}
