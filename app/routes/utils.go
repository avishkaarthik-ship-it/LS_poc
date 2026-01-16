package routes

import apperror "human_labs/appError"

type AppGenericResp struct {
	SuccessStatus bool   `json:"successStatus"`
	Message       string `json:"message"`
	Data          any    `json:"data,omitempty"`
}

func GenerateSuccessResponse(message string, data any) AppGenericResp {
	return AppGenericResp{
		SuccessStatus: true,
		Message:       message,
		Data:          data,
	}
}

func GenerateFailureResponse(message string) AppGenericResp {
	return AppGenericResp{
		SuccessStatus: false,
		Message:       message,
	}
}

func GenerateFailREspFromAppError(appErr *apperror.AppError) AppGenericResp {
	return AppGenericResp{
		SuccessStatus: false,
		Message:       appErr.Error(),
	}
}
