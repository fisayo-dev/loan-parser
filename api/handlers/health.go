package handlers

import (
	"net/http"

	"github.com/fisayo-dev/parser/api/utils"
)

func HealthStatus(w http.ResponseWriter, r *http.Request) {
	utils.RespondWithJSON(w, http.StatusOK, map[string]string{
		"message": "Applicaiton is successfully running",
	})
}