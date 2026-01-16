package apperror

type AppError struct {
	Err        error
	Code       int
	HttpStatus int
	Message    string
}

func (ae *AppError) Error() string {
	if ae.Message != "" {
		return ae.Message
	}
	return ae.Err.Error()
}

func (ae *AppError) GetHttpStatus() int {
	return ae.HttpStatus
}

func (ae *AppError) GetCode() int {
	return ae.Code
}
