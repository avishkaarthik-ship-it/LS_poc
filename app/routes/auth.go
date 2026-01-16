package routes

import (
	"strings"

	"github.com/gin-gonic/gin"
)

func DummyUserAuth(c *gin.Context) {
	token := c.GetHeader("Authorization")
	if token == "" {
		c.JSON(401, GenerateFailureResponse("unauthorized"))
		c.Abort()
		return
	}

	userFromToken := strings.Split(token, "_")[1]
	if userFromToken == "" {
		c.JSON(401, GenerateFailureResponse("unauthorized"))
		c.Abort()
		return
	}

	c.Set("x-platform-user-id", userFromToken)
	c.Next()
}
