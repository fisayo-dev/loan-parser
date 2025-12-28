package utils

import (
	"encoding/json"
	"net/http"
)

func DecodeJSONRequest(responseStruct struct{}, r *http.Request) (struct{}, error ){
	parameter := responseStruct
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&parameter)
	if err != nil {
		return struct{}{}, err
	}
	return parameter, nil
}