package main

import (
	"context"
	labelstudio "human_labs/label_studio"
	"human_labs/query"
	"human_labs/routes"
	"human_labs/service"
	"net/http"
)

// main entry point of the application
func main() {

	appContext := context.Background()

	DbHelperIns := query.InitPsqlHelper(appContext)
	LabelStudioClientIns := labelstudio.NewLabelStudioClient()

	serviceInstance := service.InitServiceInstance(
		DbHelperIns,
		LabelStudioClientIns,
	)
	server := http.Server{
		Addr:    ":3000",
		Handler: routes.PocRouter(serviceInstance),
	}

	server.ListenAndServe()
}
