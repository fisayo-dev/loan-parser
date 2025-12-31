package utils

import (
	"encoding/json"
	"net/http"

	"github.com/fisayo-dev/loan-parser/api/internal/logger"
)

type ErrorBody struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type ErrorResponse struct {
	Success bool      `json:"success"`
	Error   ErrorBody `json:"error"`
}

type SuccessResponse struct {
	Success bool        `json:"success"`
	Data    interface{} `json:"data"`
}

func RespondJSON(w http.ResponseWriter, status int, payload interface{}) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)

	if err := json.NewEncoder(w).Encode(payload); err != nil {
		logger.Error.Println("failed to write response:", err)
	}
}

func RespondError(w http.ResponseWriter, status int, code, message string) {
	if status >= 500 {
		logger.Error.Printf("server error [%s]: %s\n", code, message)
	}

	RespondJSON(w, status, ErrorResponse{
		Success: false,
		Error: ErrorBody{
			Code:    code,
			Message: message,
		},
	})
}

func RespondSuccess(w http.ResponseWriter, status int, data interface{}) {
	RespondJSON(w, status, SuccessResponse{
		Success: true,
		Data:    data,
	})
}
