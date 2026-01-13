package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/fisayo-dev/loan-parser/api/internal/config"
	"github.com/fisayo-dev/loan-parser/api/internal/logger"
	"github.com/fisayo-dev/loan-parser/api/internal/routes"
	"github.com/go-chi/chi/v5"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load("../../.env")
	port := os.Getenv("PORT") 

	if port == "" {
		logger.Warn.Println("PORT is not found in the environment, defaulting to 8080")
		port = "8080"
	}
	
	router := chi.NewRouter()
	router.Use(config.CORS())

	// Version 1 router
	v1 := chi.NewRouter()
	routes.Register(v1)
	router.Mount("/v1", v1)

	// Create the server - Only one instance that why we use &http.Server
	server := &http.Server{
		Handler: router,
		Addr:    fmt.Sprintf(":%s", port),
	}

	logger.Success.Printf("Server starting on Port: %v", port)
	
	err := server.ListenAndServe()
	if err != nil {
		log.Fatal(err)
	}
}