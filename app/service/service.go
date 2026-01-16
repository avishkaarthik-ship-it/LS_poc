package service

import (
	labelstudio "human_labs/label_studio"
	"human_labs/query"
)

type HumanLabsService struct {
	DbHelper query.DbHelper                // will be an interface to pg client
	LSHelper labelstudio.LabelStudioHelper // will be an interface to label studio client
}

func InitServiceInstance(
	db query.DbHelper,
	ls labelstudio.LabelStudioHelper,
) *HumanLabsService {
	return &HumanLabsService{
		DbHelper: db,
		LSHelper: ls,
	}
}
