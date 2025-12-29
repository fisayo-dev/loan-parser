// lib/api/loanService.ts
import axiosInstance from "@/config/axios";

export interface ScanLoanPayload {
  file_name: string;
  file_type: string;
  file_data: string;
}

export interface LoanResult {
  loan_amount: string;
  interest_rate: string;
  loan_term_months: string;
  monthly_payment: string;
  total_payment: string;
  late_fee: string;
  prepayment_penalty: boolean;
  borrower: {
    name: string;
    address: string;
  };
  lender: {
    name: string;
    address: string;
  };
  ai_summary: string;
  risk_highlights: string;
}

export const loanService = {
  // Scan loan document
  scanLoan: async (payload: ScanLoanPayload): Promise<LoanResult> => {
    try {
      const response = await axiosInstance.post<LoanResult>(
        "/scan-loan",
        payload
      );
      return response.data;
    } catch (err: any) {
      // Extract error message from server response
      const errorMessage =
        err.response?.data?.error ||
        err.response?.data?.message ||
        err.message ||
        "An unknown error occurred";

      // Throw a new error with the server message
      throw new Error(errorMessage);
    }
  },

  // Add more API methods here as needed
  // Example:
  // getLoanHistory: async (): Promise<LoanResult[]> => {
  //   const response = await axiosInstance.get<LoanResult[]>('/loans');
  //   return response.data;
  // },
};

export default loanService;
