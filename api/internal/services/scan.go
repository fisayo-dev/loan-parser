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
	LoanAmount         string `json:"loan_amount"`
	InterestRate       string `json:"interest_rate"`
	LoanTermMonths     string `json:"loan_term_months"`
	MonthlyPayment     string `json:"monthly_payment"`
	TotalPayment       string `json:"total_payment"`
	LateFee            string `json:"late_fee"`
	PrepaymentPenalty  bool   `json:"prepayment_penalty"`
	Borrower           BorrowerInfo `json:"borrower"`
	Lender             LenderInfo   `json:"lender"`
	AISummary          string `json:"ai_summary"`
	RiskHighlights     string `json:"risk_highlights"`
}

type BorrowerInfo struct {
	Name    string `json:"name"`
	Address string `json:"address"`
}

type LenderInfo struct {
	Name    string `json:"name"`
	Address string `json:"address"`
}

func ScanLoanService(
	w http.ResponseWriter,
	fileName string,
	fileType string,
	fileData string,
) (*LoanExtractionResult, error) {

	// Get OpenAI key
	openAIURL := "https://api.openai.com/v1/chat/completions"
	apiKey := os.Getenv("OPENAI_API_KEY")
	if apiKey == "" {
		return nil, fmt.Errorf("OPENAI_API_KEY not set")
	}

	// Request payload (Chat Completions API)
	requestBody := map[string]interface{}{
		"model": "gpt-4.1",
		"messages": []map[string]interface{}{
			{
				"role": "system",
				"content": `You are a loan agreement extractor and analyzer.
Extract all relevant information from the loan document and return ONLY valid JSON in this exact schema:

{
  "loan_amount": "string (e.g., '10000')",
  "interest_rate": "string (e.g., '0.24')",
  "loan_term_months": "string (e.g., '36')",
  "monthly_payment": "string (e.g., '322.74')",
  "total_payment": "string (e.g., '11618.64')",
  "late_fee": "string (e.g., '25')",
  "prepayment_penalty": string,
  "borrower": {
    "name": "string",
    "address": "string"
  },
  "lender": {
    "name": "string",
    "address": "string"
  },
  "ai_summary": "string (2-3 paragraph summary of the loan agreement)",
  "risk_highlights": "string (numbered list of key risks and concerns)"
}`,
			},
			{
				"role": "user",
				"content": fileData,
			},
		},
		"temperature": 0.1,
	}

	jsonBody, err := json.Marshal(requestBody)
	if err != nil {
		return nil, err
	}

	// Create request
	req, err := http.NewRequest("POST", openAIURL, bytes.NewBuffer(jsonBody))
	if err != nil {
		return nil, err
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+apiKey)

	// Execute request
	client := &http.Client{Timeout: 60 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body) // I am using io.ReadAll cause i am not sending the JSON via stream or socket. I am logging it.
		return nil, fmt.Errorf("Openai error: %s", string(body))
	}

	var openAIResponse struct {
		Choices []struct {
			Message struct {
				Content string `json:"content"`
			} `json:"message"`
		} `json:"choices"`
	}

	if err := json.NewDecoder(resp.Body).Decode(&openAIResponse); err != nil {
		return nil, err
	}

	// Check for empty response
	if len(openAIResponse.Choices) == 0 {
		return nil, fmt.Errorf("Empty response from OpenAI")
	}

	// Parse the JSON from the model
	var result LoanExtractionResult
	err = json.Unmarshal(
		[]byte(openAIResponse.Choices[0].Message.Content),
		&result,
	)
	if err != nil {
		return nil, fmt.Errorf("Error parsing OpenAI response: %v", err)
	}

	return &result, nil
}