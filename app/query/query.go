package query

import (
	"context"
	"fmt"
	apperror "human_labs/appError"
)

func (db *psqlDbHelperIns) GetTaskInfoById(ctx context.Context, id int) (*map[string]any, *apperror.AppError) {

	rows, err := db.PgClient.Query(ctx,
		`SELECT 
		t.id, t.name, t.type, t.project_id, t.annotator_task_id, t.status, 
		p.annotator_project_id,
		tu.platform_user_id as assigned_user_id, tu.assigned_at, tu.completed_at, tu.task_expiry
		FROM hl_task as t
		INNER JOIN hl_project as p ON t.project_id = p.id
		LEFT JOIN hl_user_task as tu ON t.id = tu.task_id
		WHERE t.id=$1
		LIMIT 1;
		`, id)

	if err != nil {
		fmt.Println(err.Error())
		return nil, &apperror.AppError{
			Err:        err,
			Code:       apperror.QUERY_ERROR,
			HttpStatus: 500,
			Message:    "Failed to fetch task by id",
		}
	}

	defer rows.Close()

	res := MapOfQueryResponse(rows)
	taskInfo := (*res)[0]
	return &taskInfo, nil

}

func (db *psqlDbHelperIns) GetTasksAssignedToUser(ctx context.Context, taskId int, userId int) (*[]map[string]any, *apperror.AppError) {

	row, err := db.PgClient.Query(ctx,
		`SELECT
		tu.platform_user_id, tu.task_id, tu.assigned_at, tu.completed_at, tu.task_expiry, 
		t.name, t.type, t.status, t.annotator_task_id, t.project_id
		FROM hl_user_task as tu
		INNER JOIN hl_task as t ON tu.task_id = t.id
		WHERE tu.task_id=$1 AND tu.platform_user_id=$2;
		`, taskId, userId)

	if err != nil {
		fmt.Println(err.Error())
		return nil, &apperror.AppError{
			Err:        err,
			Code:       apperror.QUERY_ERROR,
			HttpStatus: 500,
			Message:    "Failed to fetch tasks assigned to user",
		}
	}
	defer row.Close()

	res := MapOfQueryResponse(row)
	return res, nil

}

func (db *psqlDbHelperIns) GetUserProjectRoles(
	ctx context.Context,
	platformUserId int, projectId int,
) (*map[string]any, *apperror.AppError) {

	rows, err := db.PgClient.Query(ctx,
		`SELECT 
		*
		FROM hl_user_project_role
		WHERE platform_user_id=$1 AND project_id=$2
		LIMIT 1;
		`, platformUserId, projectId)

	if err != nil {
		return nil, &apperror.AppError{
			Err:        err,
			Code:       apperror.QUERY_ERROR,
			HttpStatus: 500,
			Message:    "Failed to fetch user project roles",
		}
	}
	defer rows.Close()

	res := MapOfQueryResponse(rows)
	if res == nil || len(*res) == 0 {
		return nil, nil
	}
	firstElement := (*res)[0]
	return &firstElement, nil

}

func (db *psqlDbHelperIns) AssignTaskToUser(ctx context.Context, platformUserId int, taskId int) *apperror.AppError {

	// Begin transaction
	tx, err := db.PgClient.Begin(ctx)
	if err != nil {
		return &apperror.AppError{
			Err:        err,
			Code:       apperror.QUERY_ERROR,
			HttpStatus: 500,
			Message:    "Failed to start transaction",
		}
	}

	// Defer rollback in case of error
	defer tx.Rollback(ctx)

	// Update task status to 'assigned'
	_, err = tx.Exec(ctx,
		`UPDATE hl_task SET status = 'assigned' WHERE id = $1;`,
		taskId)
	if err != nil {
		return &apperror.AppError{
			Err:        err,
			Code:       apperror.QUERY_ERROR,
			HttpStatus: 500,
			Message:    "Failed to update task status",
		}
	}

	// Insert task assignment
	_, err = tx.Exec(ctx,
		`INSERT INTO hl_user_task (platform_user_id, task_id, assigned_at, task_expiry) 
        VALUES ($1, $2, NOW(), NOW() + INTERVAL '7 days');`,
		platformUserId, taskId)
	if err != nil {
		return &apperror.AppError{
			Err:        err,
			Code:       apperror.QUERY_ERROR,
			HttpStatus: 500,
			Message:    "Failed to assign task to user",
		}
	}

	// Commit transaction
	if err := tx.Commit(ctx); err != nil {
		return &apperror.AppError{
			Err:        err,
			Code:       apperror.QUERY_ERROR,
			HttpStatus: 500,
			Message:    "Failed to commit transaction",
		}
	}

	return nil
}

func (db *psqlDbHelperIns) MarkTaskAsCompleted(ctx context.Context, taskId int) *apperror.AppError {

	_, err := db.PgClient.Exec(ctx,
		`UPDATE hl_task SET status = 'completed' WHERE id = $1;`,
		taskId)
	if err != nil {
		return &apperror.AppError{
			Err:        err,
			Code:       apperror.QUERY_ERROR,
			HttpStatus: 500,
			Message:    "Failed to mark task as completed",
		}
	}

	return nil
}

func (db *psqlDbHelperIns) AddReviewResultToTask(ctx context.Context, taskId int, reviewResults string) *apperror.AppError {

	_, err := db.PgClient.Exec(ctx,
		`UPDATE hl_task SET status = $1 WHERE id = $2;`,
		reviewResults, taskId)
	if err != nil {
		return &apperror.AppError{
			Err:        err,
			Code:       apperror.QUERY_ERROR,
			HttpStatus: 500,
			Message:    "Failed to add review results to task",
		}
	}

	return nil
}
