package models

import "time"

type HL_USER struct {
	CreatedAt      time.Time `db:"created_at" json:"createdAt"`
	UpdatedAt      time.Time `db:"updated_at" json:"updatedAt"`
	Id             int       `db:"id" json:"id"`
	PlatformUserId int       `db:"platform_user_id" json:"platformUserId"`
	Email          string    `db:"user_email" json:"userEmail"`
	Name           string    `db:"name" json:"name"`
}

type HL_USER_PROJECT_ROLE struct {
	CreatedAt      time.Time `db:"created_at" json:"createdAt"`
	UpdatedAt      time.Time `db:"updated_at" json:"updatedAt"`
	Id             int       `db:"id" json:"id"`
	PlatformUserId int       `db:"platform_user_id" json:"platformUserId"`
	ProjectId      int       `db:"project_id" json:"projectId"`
	Role           string    `db:"role" json:"role"`
}

type HL_PROJECT struct {
	CreatedAt          time.Time `db:"created_at" json:"createdAt"`
	UpdatedAt          time.Time `db:"updated_at" json:"updatedAt"`
	Id                 int       `db:"id" json:"id"`
	AnnotatorProjectId int       `db:"annotator_project_id" json:"annotatorProjectId"`
	Name               string    `db:"name" json:"name"`
	Desc               string    `db:"description" json:"description"`
	StageOrder         string    `db:"stage_order" json:"stageOrder"`
	CurrentStage       string    `db:"current_stage" json:"currentStage"`
}

type PROJECT_PIPELINE_STAGE struct {
	CreatedAt time.Time `db:"created_at" json:"createdAt"`
	UpdatedAt time.Time `db:"updated_at" json:"updatedAt"`
	Id        int       `db:"id" json:"id"`
	ProjectId int       `db:"project_id" json:"projectId"`
	Name      string    `db:"name" json:"name"`
	Desc      string    `db:"description" json:"description"`
	Type      string    `db:"type" json:"type"`
}

type HL_TASK_ASSIGNMENT struct {
	AssignedAt     time.Time `db:"assigned_at" json:"assignedAt"`
	TaskExpiry     time.Time `db:"task_expiry" json:"taskExpiry"`
	CompletedAt    time.Time `db:"completed_at" json:"completedAt"`
	Id             int       `db:"id" json:"id"`
	AnnotationId   int       `db:"annotation_id" json:"annotationId"`
	PlatformUserId int       `db:"platform_user_id" json:"platformUserId"`
	TaskId         int       `db:"task_id" json:"taskId"`
}

type HL_TASK struct {
	CreatedAt       time.Time `db:"created_at" json:"createdAt"`
	UpdatedAt       time.Time `db:"updated_at" json:"updatedAt"`
	Id              int       `db:"id" json:"id"`
	AnnotatorTaskId int       `db:"annotator_task_id" json:"annotatorTaskId"`
	ProjectId       int       `db:"project_id" json:"projectId"`
	Type            string    `db:"type" json:"type"` // annotation, review, collection
	Name            string    `db:"name" json:"name"`
	Desc            string    `db:"desc" json:"desc"`
	Status          string    `db:"status" json:"status"` // open, assigned, completed

}
