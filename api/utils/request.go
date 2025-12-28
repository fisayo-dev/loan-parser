package utils

import (
	"encoding/json"
	"net/http"
)

func DecodeJSONRequest(r *http.Request, dst interface{}) error {
	decoder := json.NewDecoder(r.Body)
	decoder.DisallowUnknownFields()

	return decoder.Decode(dst)
}
