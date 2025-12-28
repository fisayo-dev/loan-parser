package utils

import (
	"encoding/json"
	"net/http"
)

func DecodeJSONRequest(responseStruct *struct{}, r *http.Request) error {
	params := *responseStruct
	// Create a new decode of the request body value
	decoder := json.NewDecoder(r.Body)
	// Decode the value into the struct
	err := decoder.Decode(&params)
	if err != nil {
		return err
	}
	return nil
}