package service

func roleFromTskType(taskType string) string {
	switch taskType {
	case "annotation":
		return "annotator"
	case "review":
		return "reviewer"
	default:
		return ""
	}
}

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
