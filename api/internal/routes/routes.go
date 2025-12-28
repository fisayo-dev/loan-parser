package routes

import (
	"github.com/go-chi/chi/v5"

	"github.com/fisayo-dev/loan-parser/api/internal/handlers"
)

func Register(r chi.Router) {
	r.Get("/health", handlers.HealthStatus)
	r.Head("/health", handlers.HealthStatus)
	r.Post("/scan-loan", handlers.ScanLoan)
}
