package handlers

import (
	"fmt"
	"net/http"

	"github.com/fisayo-dev/parser/api/utils"
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

	// params is now usable
}
