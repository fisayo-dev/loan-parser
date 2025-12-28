package handlers

import (
	"fmt"
	"net/http"

	"github.com/fisayo-dev/parser/api/utils"
)

func scanLoan(w http.ResponseWriter, r *http.Request) {
	// Create scan parameter struct
	type ScanParameters struct{
		FileName string `json:"file_name"`
		FileType string `json:"file_type"`
		FileData string `json:"file_data"`
	}
	
	// Instantiate a scan parameter struct
	_, err := utils.DecodeJSONRequest(ScanParameters{}{c}, r)
	if err != nil {
		utils.RespondWithError(w,400,fmt.Sprintf("Error parsing JSON: %v", err))
		return
	}

	
}