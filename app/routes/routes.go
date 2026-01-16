package routes

import (
	"human_labs/service"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type Resp struct {
	Message string `json:"message"`
	Data    any    `json:"data,omitempty"`
}

// sample rout
func PocRouter(serviceInstance *service.HumanLabsService) *gin.Engine {
	router := gin.Default()

	router.GET("/", func(c *gin.Context) {

		c.JSON(http.StatusOK, Resp{
			Message: "Human Labs POC is running!",
		})
	})

	// fetch task

	router.GET("/task/:id", DummyUserAuth, func(c *gin.Context) {
		taskId, err := strconv.Atoi(c.Param("id"))
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"message": "invalid task ID",
			})
			return
		}

		// get userId from headers (for demo purpose)
		userIdStr, _ := c.Get("x-platform-user-id")
		userId, err := strconv.Atoi(userIdStr.(string))
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"message": "invalid user ID",
			})
			return
		}

		hl_task, appErr := serviceInstance.GetTaskById(c.Request.Context(), taskId, userId)
		if appErr != nil {
			c.JSON(appErr.GetHttpStatus(), GenerateFailREspFromAppError(appErr))
			return
		}

		c.JSON(http.StatusOK, GenerateSuccessResponse("task fetched successfully", hl_task))
	})

	// assign task

	router.POST("/task/assign", func(c *gin.Context) {

		body := struct {
			TaskId         int `json:"taskId"`
			PlatformUserId int `json:"platformUserId"`
		}{}

		if err := c.ShouldBindJSON(&body); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"message": "invalid request body",
			})
			return
		}

		taskId := body.TaskId
		platformUserId := body.PlatformUserId

		assignResp, appErr := serviceInstance.AssignTaskToUser(c.Request.Context(), platformUserId, taskId)
		if appErr != nil {
			c.JSON(appErr.GetHttpStatus(), GenerateFailREspFromAppError(appErr))
			return
		}

		c.JSON(http.StatusOK, gin.H{
			"message":    "task assigned successfully",
			"assignResp": assignResp,
		})

	})

	// add annotation

	router.POST("/annotations", func(c *gin.Context) {
		payloadBody := struct {
			TaskId      int               `json:"taskId"`
			Annotations *[]map[string]any `json:"annotations"`
		}{}
		if err := c.ShouldBindJSON(&payloadBody); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"message": "invalid request body",
			})
			return
		}
		userIdStr := c.GetHeader("x-platform-user-id")
		userId, _ := strconv.Atoi(userIdStr)

		resp, appErr := serviceInstance.AddAnnotationToTask(
			c.Request.Context(),
			payloadBody.TaskId, userId,
			payloadBody.Annotations,
		)

		if appErr != nil {
			c.JSON(appErr.GetHttpStatus(), GenerateFailREspFromAppError(appErr))
			return
		}

		c.JSON(http.StatusOK, GenerateSuccessResponse("annotation added successfully", resp))

	})

	// approve annotation
	router.POST("/task/approve", func(c *gin.Context) {
		userIdStr := c.GetHeader("x-platform-user-id")
		userId, _ := strconv.Atoi(userIdStr)

		payloadBody := struct {
			TaskId int `json:"taskId"`
		}{}
		if err := c.ShouldBindJSON(&payloadBody); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"message": "invalid request body",
			})
			return
		}

		resp, err := serviceInstance.ApproveTask(
			c.Request.Context(),
			payloadBody.TaskId, userId,
		)
		if err != nil {
			c.JSON(err.GetHttpStatus(), GenerateFailREspFromAppError(err))
			return
		}

		c.JSON(http.StatusOK, GenerateSuccessResponse("task approved successfully", resp))
	})

	// reject an annotated task
	router.POST("/task/reject", func(c *gin.Context) {
		userIdStr := c.GetHeader("x-platform-user-id")
		userId, _ := strconv.Atoi(userIdStr)

		payloadBody := struct {
			TaskId       int    `json:"taskId"`
			AnnotationId int    `json:"annotationId"`
			Reason       string `json:"reason"`
		}{}

		if err := c.ShouldBindJSON(&payloadBody); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"message": "invalid request body",
			})
			return
		}
		resp, err := serviceInstance.RejectAnnotationOfTask(
			c.Request.Context(),
			payloadBody.TaskId,
			userId,
			payloadBody.AnnotationId,
			payloadBody.Reason,
		)
		if err != nil {
			c.JSON(err.GetHttpStatus(), GenerateFailREspFromAppError(err))
			return
		}

		c.JSON(http.StatusOK, GenerateSuccessResponse("task rejected successfully", resp))
	})

	return router
}
