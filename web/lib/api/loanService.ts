import axiosInstance from "@/config/axios";

export interface ScanLoanPayload {
  file_name: string;
  file_type: string;
  file_data: string;
}

export interface ApiError {
  code: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
}

export interface LoanResult {
  loan_amount: string;
  interest_rate: string;
  loan_term_months: number;
  monthly_payment: string;
  total_payment: string;
  late_fee: string;
  prepayment_penalty: string;

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
  scanLoan: async <T>(payload: ScanLoanPayload): Promise<LoanResult> => {
    try {
      const res = await axiosInstance.post<ApiResponse<T>>(
        "/scan-loan",
        payload
      );

      if (!res.data.success) {
        throw new Error(res.data.error?.message || "Request failed");
      }

      return res.data.data as LoanResult;
    } catch (err: any) {
      const message =
        err.response?.data?.error?.message || err.message || "Network error";

      throw new Error(message);
    }
  },
};

export default loanService;
