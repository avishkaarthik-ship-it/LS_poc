package service

func canUserDoTheTaskByRole(userRole string, taskType string) bool {

	// Define role-based permissions
	rolePermissions := map[string]string{
		"annotator": "annotation",
		"reviewer":  "review",
	}

	allowedTaskType, roleExists := rolePermissions[userRole]
	if !roleExists {
		return false
	}

	return allowedTaskType == taskType
}
