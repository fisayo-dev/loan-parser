package utils

import (
	"encoding/json"
	"net/http"
)

func DecodeJSONRequest(r *http.Request, dst interface{}) error {
	decoder := json.NewDecoder(r.Body)
	decoder.DisallowUnknownFields()

	// decoder.Decode() decoes the request params into the dst struct
	return decoder.Decode(dst)
}
