package handlers

import (
	"fmt"
	"net/http"

	"github.com/fisayo-dev/loan-parser/api/internal/services"
	"github.com/fisayo-dev/loan-parser/api/internal/utils"
)

func ScanLoan(w http.ResponseWriter, r *http.Request) {
	type ScanParameters struct {
		FileName string `json:"file_name"`
		FileType string `json:"file_type"`
		FileData string `json:"file_data"`
	}

	params := ScanParameters{}
	if err := utils.DecodeJSONRequest(r, &params); err != nil {
		utils.RespondWithError(w, 400, fmt.Sprintf("Error parsing JSON: %v", err))
		return
	}

	// Call scan loan service
	result, err := services.ScanLoanService(w,params.FileName,params.FileType,params.FileData)
	if err != nil {
		utils.RespondWithError(w,400,fmt.Sprintf("Error occured whie trying to scan loan: %v", err))
		fmt.Printf("Error occured whie trying to scan loan: %v", err)
		return
	}

	utils.RespondWithJSON(w, 201, result)
	
}
