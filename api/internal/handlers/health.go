package handlers

import (
	"net/http"

	"github.com/fisayo-dev/loan-parser/api/internal/utils"
)

func HealthStatus(w http.ResponseWriter, r *http.Request) {
	utils.RespondWithJSON(w, http.StatusOK, map[string]string{
		"message": "Applicaiton is successfully running",
	})
}