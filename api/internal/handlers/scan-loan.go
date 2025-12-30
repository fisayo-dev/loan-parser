package handlers

import (
	"fmt"
	"net/http"

	"github.com/fisayo-dev/loan-parser/api/internal/services"
	"github.com/fisayo-dev/loan-parser/api/internal/utils"
)

type ScanParameters struct {
	FileName string `json:"file_name"`
	FileType string `json:"file_type"`
	FileData string `json:"file_data"`
}

func ScanLoan(w http.ResponseWriter, r *http.Request) {
	var params ScanParameters

	if err := utils.DecodeJSONRequest(r, &params); err != nil {
		utils.RespondError(
			w,
			http.StatusBadRequest,
			"INVALID_JSON",
			"Invalid request payload",
		)
		return
	}

	result, err := services.ScanLoanService(
		w,
		params.FileName,
		params.FileType,
		params.FileData,
	)

	if err != nil {
		fmt.Printf("Error: %v", err)
		utils.RespondError(
			w,
			http.StatusUnprocessableEntity,
			"SCAN_FAILED",
			"Failed to scan loan document",
		)
		return
	}

	utils.RespondSuccess(w, http.StatusCreated, result)
}
