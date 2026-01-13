import { LoanResult } from "@/lib/api/loanService";

export const mockLoanData: LoanResult[] = [
  {
    loan_amount: "$250,000.00",
    interest_rate: "4.75%",
    loan_term_months: 360,
    monthly_payment: "$1,304.12",
    total_payment: "$469,483.20",
    late_fee: "$50.00",
    prepayment_penalty: "None after 3 years",
    borrower: {
      name: "John Michael Anderson",
      address: "1234 Maple Street, Springfield, IL 62701"
    },
    lender: {
      name: "First National Bank of Illinois",
      address: "500 Financial Plaza, Chicago, IL 60601"
    },
    ai_summary: `This is a 30-year fixed-rate mortgage loan for $250,000 with a competitive interest rate of 4.75%. The loan features standard terms with reasonable monthly payments of $1,304.12.

Key highlights:
• Fixed interest rate provides payment stability over the loan term
• No prepayment penalty after the initial 3-year period
• Standard late fee structure of $50.00
• Total interest paid over the life of the loan: $219,483.20

The loan appears to be a conventional mortgage with favorable terms for the borrower. The interest rate is competitive for current market conditions, and the absence of prepayment penalties after year 3 provides flexibility for early payoff.`,
    risk_highlights: `Overall Risk Level: LOW TO MODERATE

Potential concerns to be aware of:

1. Long-term commitment: A 30-year term means significant total interest ($219,483.20) - nearly 88% of the original loan amount.

2. Early prepayment restrictions: Prepayment penalties apply during the first 3 years, which may limit refinancing options if rates drop.

3. Late payment impact: While the $50 late fee is standard, consistent late payments could damage credit score and potentially trigger default clauses.

Recommendations:
• Consider making additional principal payments after year 3 to reduce total interest
• Maintain an emergency fund covering 6+ months of payments
• Review loan documents for any balloon payment clauses or adjustable rate triggers
• Ensure adequate property insurance to protect the collateral`
  },
  {
    loan_amount: "$450,000.00",
    interest_rate: "6.25%",
    loan_term_months: 180,
    monthly_payment: "$3,842.67",
    total_payment: "$691,680.60",
    late_fee: "$75.00",
    prepayment_penalty: "2% of outstanding balance in first 2 years",
    borrower: {
      name: "Sarah Elizabeth Chen",
      address: "789 Ocean View Drive, San Francisco, CA 94102"
    },
    lender: {
      name: "Pacific Coast Mortgage Corporation",
      address: "1200 Market Street, Suite 500, San Francisco, CA 94103"
    },
    ai_summary: `This is a 15-year fixed-rate mortgage for $450,000 with a higher interest rate of 6.25%. The shorter term results in higher monthly payments but significantly less total interest paid.

Key highlights:
• 15-year term builds equity faster than traditional 30-year mortgages
• Monthly payment of $3,842.67 requires strong income stability
• Total interest of $241,680.60 - saves substantially compared to 30-year equivalent
• Fixed rate protects against future rate increases

This loan is ideal for borrowers with strong cash flow who want to build equity quickly and minimize long-term interest costs. The higher monthly payment requires careful budget planning.`,
    risk_highlights: `Overall Risk Level: MODERATE

Potential concerns to be aware of:

1. High monthly obligation: $3,842.67 monthly payment requires significant income stability and may strain budget during financial hardships.

2. Prepayment penalty: 2% penalty in first 2 years could cost up to $9,000 if refinancing becomes necessary.

3. Higher interest rate: 6.25% is above current market averages, suggesting either credit concerns or market timing issues.

4. Limited flexibility: Higher monthly payments leave less room for other investments or emergency savings.

Recommendations:
• Ensure monthly payment doesn't exceed 28% of gross monthly income
• Build emergency fund of 9-12 months expenses before committing
• Consider refinancing after 2-year penalty period if rates drop
• Verify income stability through multiple income streams if possible`
  },
  {
    loan_amount: "$125,000.00",
    interest_rate: "3.85%",
    loan_term_months: 240,
    monthly_payment: "$757.89",
    total_payment: "$181,893.60",
    late_fee: "$35.00",
    prepayment_penalty: "None",
    borrower: {
      name: "Marcus DeShawn Williams",
      address: "456 Peachtree Lane, Atlanta, GA 30303"
    },
    lender: {
      name: "Southern Community Credit Union",
      address: "2500 Piedmont Road NE, Atlanta, GA 30324"
    },
    ai_summary: `This is a 20-year fixed-rate mortgage for $125,000 with an excellent interest rate of 3.85%. The loan offers a balanced approach between monthly affordability and total interest costs.

Key highlights:
• Excellent interest rate of 3.85% - well below market average
• No prepayment penalties provides maximum flexibility
• Moderate monthly payment of $757.89 is highly affordable
• 20-year term balances equity building with payment comfort
• Total interest of $56,893.60 is reasonable for the loan amount

This loan represents an excellent financing opportunity with favorable terms across all metrics. The borrower has secured competitive terms that provide both affordability and flexibility.`,
    risk_highlights: `Overall Risk Level: LOW

Potential concerns to be aware of:

1. Minimal concerns: This loan has favorable terms with few red flags.

2. Market risk: If property values decline, the 20-year amortization means slower equity building than a 15-year term.

3. Opportunity cost: Low monthly payment might discourage additional principal payments that could save interest.

Recommendations:
• Consider making extra principal payments to reduce total interest further
• Take advantage of no prepayment penalty to pay off early if possible
• Maintain property value through regular maintenance and improvements
• Lock in this favorable rate for the full term - avoid refinancing unless absolutely necessary`
  },
  {
    loan_amount: "$750,000.00",
    interest_rate: "7.50%",
    loan_term_months: 360,
    monthly_payment: "$5,244.13",
    total_payment: "$1,887,886.80",
    late_fee: "$100.00",
    prepayment_penalty: "3% of outstanding balance in first 5 years",
    borrower: {
      name: "Jennifer Marie Thompson",
      address: "2100 Park Avenue, Penthouse B, New York, NY 10035"
    },
    lender: {
      name: "Metropolitan Trust & Lending",
      address: "350 Fifth Avenue, New York, NY 10118"
    },
    ai_summary: `This is a 30-year jumbo mortgage for $750,000 with a high interest rate of 7.50%. The loan carries significant costs and restrictive terms that warrant careful consideration.

Key highlights:
• Jumbo loan amount exceeds conforming loan limits
• High interest rate of 7.50% reflects either market conditions or credit risk
• Monthly payment of $5,244.13 requires substantial income
• Total interest of $1,137,886.80 - more than 150% of the principal
• 5-year prepayment penalty severely limits refinancing options

This loan has several concerning features including the high interest rate and lengthy prepayment penalty period. Borrowers should explore alternative financing options before committing.`,
    risk_highlights: `Overall Risk Level: HIGH

Potential concerns to be aware of:

1. Excessive interest costs: Total interest of $1,137,886.80 means paying $2.52 for every $1.00 borrowed.

2. Severe prepayment penalty: 3% penalty for 5 years could cost over $22,500, effectively trapping borrower in unfavorable terms.

3. High interest rate: 7.50% is significantly above market rates, suggesting subprime lending or predatory terms.

4. Affordability risk: $5,244.13 monthly payment requires annual income of approximately $225,000+ to maintain safe debt ratios.

5. Jumbo loan risks: Larger loan amounts face stricter qualification and higher risk in market downturns.

Recommendations:
• STRONGLY consider alternative lenders - this rate is unusually high
• Explore portfolio loans or credit union options for better terms
• Consider larger down payment to reduce loan amount below jumbo threshold
• If proceeding, plan aggressive prepayment strategy after year 5
• Consult with independent financial advisor before signing`
  },
  {
    loan_amount: "$85,000.00",
    interest_rate: "5.15%",
    loan_term_months: 120,
    monthly_payment: "$903.47",
    total_payment: "$108,416.40",
    late_fee: "$25.00",
    prepayment_penalty: "None",
    borrower: {
      name: "David Robert Martinez",
      address: "678 Desert Rose Court, Phoenix, AZ 85001"
    },
    lender: {
      name: "Southwest Regional Bank",
      address: "4400 North Central Avenue, Phoenix, AZ 85012"
    },
    ai_summary: `This is a 10-year fixed-rate mortgage for $85,000 with a moderate interest rate of 5.15%. The aggressive 10-year term results in higher monthly payments but minimal total interest.

Key highlights:
• Aggressive 10-year payoff builds equity extremely fast
• Monthly payment of $903.47 is manageable for the loan amount
• Total interest of only $23,416.40 - just 27.5% of principal
• No prepayment penalties provides complete flexibility
• Moderate interest rate reflects shorter loan term

This loan is excellent for borrowers who want to own their property outright quickly and can afford the higher monthly payment. The short term minimizes interest costs dramatically.`,
    risk_highlights: `Overall Risk Level: LOW TO MODERATE

Potential concerns to be aware of:

1. Payment pressure: $903.47 monthly payment on $85,000 loan is proportionally high - ensure income stability.

2. Cash flow constraints: Higher payments may limit ability to save for other goals or handle emergencies.

3. Opportunity cost: Money going to aggressive loan payoff could potentially earn higher returns if invested elsewhere.

Recommendations:
• Ensure emergency fund of 6+ months expenses before committing
• Verify that monthly payment doesn't exceed 30% of gross income
• Consider whether 15 or 20-year term might provide better balance
• Take advantage of no prepayment penalty if financial situation improves
• Maintain adequate insurance coverage throughout loan term`
  },
  {
    loan_amount: "$320,000.00",
    interest_rate: "4.25%",
    loan_term_months: 300,
    monthly_payment: "$1,746.32",
    total_payment: "$523,896.00",
    late_fee: "$60.00",
    prepayment_penalty: "1% of outstanding balance in first year",
    borrower: {
      name: "Amanda Grace Peterson",
      address: "1515 Lakeshore Boulevard, Seattle, WA 98101"
    },
    lender: {
      name: "Cascade Financial Services",
      address: "800 Fifth Avenue, Suite 4100, Seattle, WA 98104"
    },
    ai_summary: `This is a 25-year fixed-rate mortgage for $320,000 with a competitive interest rate of 4.25%. The loan offers a middle-ground approach between 15 and 30-year terms.

Key highlights:
• 25-year term provides balance between payment size and total interest
• Competitive 4.25% interest rate
• Monthly payment of $1,746.32 is reasonable for the loan amount
• Total interest of $203,896.00 - moderate for the term length
• Minimal prepayment penalty (only first year)

This loan represents a solid financing option with balanced terms. The 25-year amortization is less common but can be ideal for borrowers seeking middle ground between standard terms.`,
    risk_highlights: `Overall Risk Level: LOW TO MODERATE

Potential concerns to be aware of:

1. Uncommon term length: 25-year mortgages are less standard, which may complicate refinancing or comparison shopping.

2. Moderate total interest: $203,896.00 in interest is 63.7% of principal - significant but not excessive.

3. First-year penalty: 1% prepayment penalty could cost $3,200 if early refinancing needed.

Recommendations:
• Verify lender reputation and stability for non-standard loan terms
• Consider making extra principal payments after first year
• Compare total costs against standard 30-year and 15-year alternatives
• Ensure adequate property and income insurance
• Plan for potential refinancing after first year if better rates emerge`
  }
];

/**
 * Get a random loan data entry from the mock data array
 */
export const getRandomLoanData = (): LoanResult => {
  const randomIndex = Math.floor(Math.random() * mockLoanData.length);
  return mockLoanData[randomIndex];
};
