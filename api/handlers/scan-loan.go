package handlers

import (
	"fmt"
	"net/http"

	"github.com/fisayo-dev/parser/api/utils"
)

func scanLoan(w http.ResponseWriter, r *http.Request) {

	// Create scan parameter struct
	type ScanParameter struct{
		FileName string `json:"file_name"`
		FileType string `json:"file_type"`
		FileData string `json:"file_data"`
	}

	// Instantiate a scan parameter struct
	err := utils.DecodeJSONRequest(&ScanParameter{}, r)
	if err != nil {
		utils.RespondWithError(w,400,fmt.Sprintf("Error parsing JSON: %v", err))
	}
	
}