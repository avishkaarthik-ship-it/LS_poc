package labelstudio

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	apperror "human_labs/appError"
	"net/http"
	"strconv"
)

type LabelStudioIns struct {
	accessToke string
	baseUrl    string
	httpClient *http.Client
}

func NewLabelStudioClient() *LabelStudioIns {
	return &LabelStudioIns{
		accessToke: "Token a5b0476f145242e117c7853b3436faaab7292801",
		baseUrl:    "http://localhost:8080",
		httpClient: &http.Client{},
	}
}

func (ls *LabelStudioIns) GetTask(appContext context.Context, taskId int) (*map[string]any, *apperror.AppError) {

	taskIdString := strconv.Itoa(taskId)
	req, err := http.NewRequestWithContext(appContext, "GET", ls.baseUrl+"/api/tasks/"+taskIdString, nil)
	if err != nil {
		fmt.Println("Error: Failed to initialize request")
		return nil, &apperror.AppError{
			Err:        err,
			Code:       apperror.LABEL_STUDIO_ERROR,
			HttpStatus: 500,
			Message:    "Failed to create request to fetch task from Label Studio",
		}
	}
	req.Header.Add("Authorization", ls.accessToke)

	resp, err := ls.httpClient.Do(req)
	if err != nil {
		fmt.Println("Error: Failed to perform request")
		return nil, &apperror.AppError{
			Err:        err,
			Code:       apperror.LABEL_STUDIO_ERROR,
			HttpStatus: 500,
			Message:    "Failed to perform request to fetch task from Label Studio",
		}
	}
	defer resp.Body.Close()

	//check status code
	if resp.StatusCode != http.StatusOK {
		return nil, &apperror.AppError{
			Err:        fmt.Errorf("unexpected status code: %d", resp.StatusCode),
			Code:       apperror.LABEL_STUDIO_ERROR,
			HttpStatus: resp.StatusCode,
			Message:    "Failed to fetch task from Label Studio",
		}
	}

	// read body
	result := make(map[string]any)
	err = json.NewDecoder(resp.Body).Decode(&result)
	if err != nil {
		fmt.Println("Error: Failed to decode response")
		return nil, &apperror.AppError{
			Err:        err,
			Code:       apperror.JSON_DECODE_ERROR,
			HttpStatus: 500,
			Message:    "Failed to decode response from Label Studio",
		}
	}

	return &result, nil
}

func (ls *LabelStudioIns) AddAnnotationToTask(
	ctx context.Context,
	lsTaskId int,
	annotationPayload *[]map[string]any,
) *apperror.AppError {

	// make body for request
	bodyPayload := map[string]any{
		"result": annotationPayload,
	}
	bodyBytes, err := json.Marshal(bodyPayload)
	if err != nil {
		return &apperror.AppError{
			Err:        err,
			Code:       apperror.JSON_ENCODE_ERROR,
			HttpStatus: 500,
			Message:    "Failed to encode annotation payload to JSON",
		}
	}

	// initialize request
	req, err := http.NewRequestWithContext(
		ctx,
		"POST", ls.baseUrl+"/api/tasks/"+strconv.Itoa(lsTaskId)+"/annotations",
		bytes.NewReader(bodyBytes),
	)
	// check for errors
	if err != nil {
		return &apperror.AppError{
			Err:        err,
			Code:       apperror.LABEL_STUDIO_ERROR,
			HttpStatus: 500,
			Message:    "Failed to create request to add annotation to Label Studio task",
		}
	}

	// set headers
	req.Header.Add("Authorization", ls.accessToke)
	req.Header.Add("Content-Type", "application/json")

	// do the request
	_, err = ls.httpClient.Do(req)
	if err != nil {
		return &apperror.AppError{
			Err:        err,
			Code:       apperror.LABEL_STUDIO_ERROR,
			HttpStatus: 500,
			Message:    "Failed to perform request to add annotation to Label Studio task",
		}
	}

	return nil
}

func (ls *LabelStudioIns) UpdateAnnotation(update *map[string]any, annotationId int) *apperror.AppError {

	// creating json marshalled body for request
	bodyPayload, err := json.Marshal(update)
	if err != nil {
		fmt.Println("Error: Failed to encode annotation update payload to JSON")
		return &apperror.AppError{
			Err:        err,
			Code:       apperror.JSON_ENCODE_ERROR,
			HttpStatus: 500,
			Message:    "Failed to encode annotation update payload to JSON",
		}
	}

	req, err := http.NewRequest(
		"PATCH", ls.baseUrl+"/api/annotations/"+strconv.Itoa(annotationId),
		bytes.NewReader(bodyPayload),
	)
	if err != nil {
		fmt.Println("Error: Failed to create request to update annotation")
		return &apperror.AppError{
			Err:        err,
			Code:       apperror.LABEL_STUDIO_ERROR,
			HttpStatus: 500,
			Message:    "Failed to create request to update annotation in Label Studio",
		}
	}
	req.Header.Add("Authorization", ls.accessToke)
	req.Header.Add("Content-Type", "application/json")

	res, err := ls.httpClient.Do(req)
	if err != nil {
		fmt.Println("Error: Failed to perform request to update annotation")
		return &apperror.AppError{
			Err:        err,
			Code:       apperror.LABEL_STUDIO_ERROR,
			HttpStatus: 500,
			Message:    "Failed to perform request to update annotation in Label Studio",
		}
	}
	defer res.Body.Close()

	// if res.StatusCode != http.StatusOK {
	// 	fmt.Println("Error: Unexpected status code while updating annotation:", res.Body)
	// 	return &apperror.AppError{
	// 		Err:        fmt.Errorf("unexpected status code: %d", res.StatusCode),
	// 		Code:       apperror.LABEL_STUDIO_ERROR,
	// 		HttpStatus: res.StatusCode,
	// 		Message:    "Failed to update annotation in Label Studio",
	// 	}
	// }
	// read body
	result := make(map[string]any)
	err = json.NewDecoder(res.Body).Decode(&result)
	if err != nil {
		fmt.Println("Error: Failed to decode response")
		return &apperror.AppError{
			Err:        err,
			Code:       apperror.JSON_DECODE_ERROR,
			HttpStatus: 500,
			Message:    "Failed to decode response from Label Studio",
		}
	}
	fmt.Println("uel ==> ", ls.baseUrl+"/api/annotations/"+strconv.Itoa(annotationId))
	fmt.Println("result ==> ", result)
	return nil
}
