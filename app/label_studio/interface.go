package labelstudio

import (
	"context"
	apperror "human_labs/appError"
)

type LabelStudioHelper interface {
	GetTask(appContext context.Context, taskId int) (*map[string]any, *apperror.AppError)
	AddAnnotationToTask(ctx context.Context, lsTaskId int, annotationPayload *[]map[string]any) *apperror.AppError
	UpdateAnnotation(update *map[string]any, annotationId int) *apperror.AppError
}
