package main

import (
	"database/sql"
	"log"
	"os"

	"github.com/fisayo-dev/parser/api/handlers"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/cors"
	"github.com/joho/godotenv"
	// _ "gthub.com/lib/pq"
)

func main() {
	godotenv.Load()
	port := os.Getenv("PORT") // Default port

	// Check if PORT is set in environment variables; else set port to 8080
	if port == "" {
		log.Printf("⚠️ PORT is not found in the environment, defaulting to 8080")
		port = "8080"
	}

	// Connect to database
	dbURL := os.Getenv("DB_URL")
	if dbURL == "" {
		log.Fatal("DB_URL is not found in the environment")
	}

	_, err := sql.Open("postgres", dbURL)
	if err != nil {
		log.Fatal("Can't connect to databases:", err)
	}

	// Deifne a new router
	router := chi.NewRouter()

	// Add cors configuration to router
	router.Use(cors.Handler(cors.Options{
		AllowedOrigins: []string{"https://*", "http://*"},
		AllowedMethods: []string{"GET", "POST", "DELETE", "PUT", "OPTIONS"},
		AllowedHeaders: []string{"*"},
		ExposedHeaders: []string{"Link"},
		AllowCredentials: false,
		MaxAge: 300,
	}))


	// Version 1 router
	v1 := chi.NewRouter()

	// Define routes
	v1.Get("/health", handlers.HealthStatus)
	v1.Head("/health", handlers.HealthStatus)
}