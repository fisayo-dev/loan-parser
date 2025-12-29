package services

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"time"
)

type LoanExtractionResult struct {
	Borrower      string   `json:"borrower"`
	Lenders       []string `json:"lenders"`
	LoanAmount    string   `json:"loan_amount"`
	InterestRate  string   `json:"interest_rate"`
	IssueDate     string   `json:"issue_date"`
	MaturityDate  string   `json:"maturity_date"`
}


func ScanLoanService(
	w http.ResponseWriter,
	fileName string,
	fileType string,
	fileData string,
) (*LoanExtractionResult, error) {

	// Get open ai key
	openAIURL := "https://api.openai.com/v1/responses"
	apiKey := os.Getenv("OPENAI_API_KEY")
	if apiKey == "" {
		return nil, fmt.Errorf("OPENAI_API_KEY not set")
	}

	// Request payload (Responses API)
	requestBody := map[string]interface{}{
		"model": "gpt-4.1",
		"input": []map[string]interface{}{
			{
				"role": "system",
				"content": []map[string]string{
					{
						"type": "text",
						"text": `
You are a loan agreement extractor.
Return ONLY valid JSON in this schema:

{
  "borrower": string,
  "lenders": string[],
  "loan_amount": string,
  "interest_rate": string,
  "issue_date": string,
  "maturity_date": string
}
`,
					},
				},
			},
			{
				"role": "user",
				"content": []map[string]string{
					{
						"type": "text",
						"text": fileData,
					},
				},
			},
		},
	}
	
	jsonBody, err := json.Marshal(requestBody)
	if err != nil {
		return nil, err
	}

	// Create a request
	req, err := http.NewRequest("POST", openAIURL, bytes.NewBuffer(jsonBody))
	if err != nil {
		return nil, err
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+apiKey)

	// Create client and do request
	client := &http.Client{Timeout: 60 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body)
		return nil, fmt.Errorf("openai error: %s", string(body))
	}

	var openAIResponse struct {
		Output []struct {
			Content []struct {
				Text string `json:"text"`
			} `json:"content"`
		} `json:"output"`
	}

	if err := json.NewDecoder(resp.Body).Decode(&openAIResponse); err != nil {
		return nil, err
	}

	// Check if open AI returned an empty response
	if len(openAIResponse.Output) == 0 ||
		len(openAIResponse.Output[0].Content) == 0 {
		return nil, fmt.Errorf("empty response from OpenAI")
	}

	// Parse the JSON returned by the model
	var result LoanExtractionResult
	err = json.Unmarshal(
		[]byte(openAIResponse.Output[0].Content[0].Text),
		&result,
	)
	if err != nil {
		return nil, err
	}

	return &result, nil
}
