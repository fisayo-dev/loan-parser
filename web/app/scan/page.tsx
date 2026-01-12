"use client";

import Button from "@/components/field/Button";
import {
  Clipboard,
  Download,
  FileIcon,
  FileText,
  Repeat,
  ScanSearch,
  UploadCloud,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import loanService, { LoanResult } from "@/lib/api/loanService";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const ScanPage = () => {
  const [scanSubmitted, setScanSubmitted] = useState<"not-started" | "finished">("not-started");
  const [isScanning, setIsScanning] = useState(false);
  const [scanType, setScanType] = useState<"JSON" | "CSV">("JSON");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [scanResult, setScanResult] = useState<LoanResult | null>(null);
  const [error, setError] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);

  // Mock scan API function that simulates a delay and returns mock data
  const mockScanLoan = async (fileName: string): Promise<LoanResult> => {
    // Simulate API delay of 2-3 seconds
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 1000));

    // Return mock loan data
    return {
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
    };
  };

  const handleScan = async () => {
    if (!selectedFile) {
      toast.error("Please select a file first");
      return;
    }

    setIsScanning(true);
    setError("");

    try {
      // Mock API response
      const result = await mockScanLoan(selectedFile.name);

      // Real API Response
      // const fileText = await selectedFile.text();
      // const result = await loanService.scanLoan({
      //   file_name: selectedFile.name,
      //   file_type: selectedFile.type,
      //   file_data: fileText,
      // });

      setScanResult(result);
      setScanSubmitted("finished");
      toast.success("Analysis complete!");
    } catch (err: any) {
      toast.error(err.message || "Failed to scan loan");
      console.error(err);
    } finally {
      setIsScanning(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
        setSelectedFile(file);
        setError("");
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(true);
  };
    
  const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files?.[0];
      if (file && (file.type === "application/pdf" || file.type === "text/plain" || file.name.endsWith(".doc") || file.name.endsWith(".docx"))) {
          setSelectedFile(file);
          setError("");
      } else {
          toast.error("Please upload a valid document (PDF, TXT, DOC)");
      }
  };


  const handleRescan = () => {
    setScanSubmitted("not-started");
    setScanResult(null);
    setError("");
    setSelectedFile(null);
  };

  const handleDownload = () => {
    if (!scanResult) return;

    const dataStr =
      scanType === "JSON"
        ? JSON.stringify(scanResult, null, 2)
        : convertToCSV(scanResult);

    const blob = new Blob([dataStr], {
      type: scanType === "JSON" ? "application/json" : "text/csv",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `loan-analysis.${scanType.toLowerCase()}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCopy = async () => {
    if (!scanResult) return;

    const dataStr =
      scanType === "JSON"
        ? JSON.stringify(scanResult, null, 2)
        : convertToCSV(scanResult);

    try {
      await navigator.clipboard.writeText(dataStr);
      toast.success("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
      toast.error("Failed to copy");
    }
  };

  const convertToCSV = (data: LoanResult): string => {
    const headers = [
      "Loan Amount",
      "Interest Rate",
      "Loan Term (Months)",
      "Monthly Payment",
      "Total Payment",
      "Late Fee",
      "Prepayment Penalty",
      "Borrower Name",
      "Borrower Address",
      "Lender Name",
      "Lender Address",
    ].join(",");

    const values = [
      data.loan_amount,
      data.interest_rate,
      data.loan_term_months,
      data.monthly_payment,
      data.total_payment,
      data.late_fee,
      data.prepayment_penalty,
      `"${data.borrower.name}"`,
      `"${data.borrower.address}"`,
      `"${data.lender.name}"`,
      `"${data.lender.address}"`,
    ].join(",");

    return `${headers}\n${values}`;
  };

  return (
    <div className="py-0 md:py-10 w-full max-w-7xl mx-auto pb-20 px-4 md:px-6 lg:px-8">
      {scanSubmitted === "not-started" ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pt-10 lg:pt-0">
             <div className="text-center space-y-4 px-4">
                 <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-2xl mb-4">
                     <FileText className="w-8 h-8 text-black" />
                 </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                    Analyze your Loan
                </h1>
                <p className="text-gray-500 max-w-md mx-auto text-base md:text-lg">
                    Upload your loan document to get an instant AI-powered analysis and structured data extraction.
                </p>
            </div>

          <div 
            className={cn(
                "w-full max-w-xl p-6 md:p-10 border-2 rounded-3xl transition-all duration-300 flex flex-col items-center justify-center gap-6 bg-white",
                isDragging ? "border-black bg-gray-50 scale-[1.02]" : "border-dashed border-gray-200 hover:border-gray-300"
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
           
            <div className="w-full text-center">
                 {!selectedFile ? (
                   <>
                     <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <UploadCloud className="w-8 h-8 md:w-10 md:h-10 text-gray-400" />
                     </div>
                     <p className="text-base md:text-lg font-medium mb-2">Click to upload or drag and drop</p>
                     <p className="text-xs md:text-sm text-gray-400">PDF, DOC, DOCX or TXT (MAX. 10MB)</p>
                   </>
                 ) : (
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-4 shadow-xl">
                            <FileIcon className="w-8 h-8" />
                        </div>
                        <p className="font-semibold text-lg max-w-[200px] truncate">{selectedFile.name}</p>
                        <p className="text-sm text-gray-400 mt-1">{(selectedFile.size / 1024).toFixed(2)} KB</p>
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedFile(null);
                            }}
                            className="mt-4 text-sm text-red-500 hover:text-red-600 font-medium"
                        >
                            Remove file
                        </button>
                    </div>
                 )}
            </div>
            
            <input
              type="file"
              accept=".txt,.pdf,.doc,.docx"
              onChange={handleFileSelect}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              disabled={isScanning || !!selectedFile} 
              style={{ display: selectedFile ? 'none' : 'block' }}
            />
          </div>

          <div className="flex flex-col items-center gap-4 w-full max-w-xs">
            {isScanning ? (
                 <Button
                    text="Analyzing Document..."
                    loading={true}
                    className="w-full py-4 md:py-6 text-base md:text-lg"
                 />
            ) : (
                 <Button
                    text="Start Analysis"
                    onClick={handleScan}
                    disabled={!selectedFile}
                    className="w-full py-4 md:py-6 text-base md:text-lg"
                 />
            )}
             <Link href="/" className="text-sm text-gray-500 hover:text-black transition-colors">
                Cancel and go back
             </Link>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
             <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                 <div className="flex items-center gap-4">
                     <Link href="/" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                     </Link>
                     <h1 className="text-2xl font-bold">Analysis Report</h1>
                 </div>
                 <div className="flex gap-2 w-full md:w-auto">
                     <Button 
                        text="New Scan" 
                        variant="outline" 
                        icon={Repeat} 
                        onClick={handleRescan}
                        className="text-sm flex-1 md:flex-none"
                     />
                     <Button 
                        text="Download" 
                        icon={Download} 
                        onClick={handleDownload}
                        className="text-sm flex-1 md:flex-none"
                     />
                 </div>
             </div>

            {scanResult && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column: Summary & Risks */}
                    <div className="lg:col-span-2 space-y-6">
                         {/* Header Info */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                             <div className="flex items-center gap-4">
                                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                                     <CheckCircle2 className="w-6 h-6" />
                                 </div>
                                 <div className="min-w-0">
                                     <h3 className="font-semibold text-lg truncate">{scanResult.lender.name}</h3>
                                     <p className="text-gray-500 text-sm">Successfully analyzed</p>
                                 </div>
                             </div>
                             <div className="text-left sm:text-right w-full sm:w-auto bg-gray-50 sm:bg-transparent p-4 sm:p-0 rounded-xl sm:rounded-none">
                                 <p className="text-sm text-gray-500 mb-1 sm:mb-0">Loan Amount</p>
                                 <p className="text-2xl font-bold tracking-tight text-green-600 sm:text-black">{scanResult.loan_amount}</p>
                             </div>
                        </div>

                         <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
                             <div className="flex items-center gap-3 mb-4">
                                 <ScanSearch className="w-5 h-5 text-blue-500" />
                                 <h3 className="font-bold text-lg">Executive Summary</h3>
                             </div>
                             <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm md:text-base">
                                 {scanResult.ai_summary}
                             </p>
                         </div>

                         <div className="bg-white p-6 md:p-8 rounded-3xl border border-red-200 shadow-sm">
                             <div className="flex items-center gap-3 mb-4">
                                 <AlertTriangle className="w-5 h-5 text-red-500" />
                                 <h3 className="font-bold text-lg text-red-700">Risk Assessment</h3>
                             </div>
                             <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm md:text-base">
                                 {scanResult.risk_highlights}
                             </p>
                         </div>
                    </div>

                    {/* Right Column: Key Data */}
                    <div className="space-y-6">
                        <div className="bg-black text-white p-6 md:p-8 rounded-3xl shadow-lg">
                            <h3 className="font-bold text-lg mb-6 border-b border-gray-800 pb-4">Key Terms</h3>
                            <div className="space-y-4">
                                <KeyTerm label="Interest Rate" value={scanResult.interest_rate} />
                                <KeyTerm label="Term Length" value={`${scanResult.loan_term_months} Months`} />
                                <KeyTerm label="Monthly Payment" value={scanResult.monthly_payment} />
                                <KeyTerm label="Total Payment" value={scanResult.total_payment} />
                                <KeyTerm label="Late Fee" value={scanResult.late_fee} />
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                                <h3 className="font-bold">Raw Data Export</h3>
                                <div className="flex bg-gray-100 p-1 rounded-lg">
                                    {(["JSON", "CSV"] as const).map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setScanType(type)}
                                            className={cn(
                                                "px-3 py-1 text-xs font-medium rounded-md transition-all",
                                                scanType === type ? "bg-white shadow-sm text-black" : "text-gray-500 hover:text-black"
                                            )}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>
                             <div className="relative group">
                                <pre className="w-full h-64 overflow-auto bg-gray-50 p-4 rounded-xl text-xs font-mono border border-gray-100">
                                    {scanType === "JSON" ? JSON.stringify(scanResult, null, 2) : convertToCSV(scanResult)}
                                </pre>
                                <button 
                                    onClick={handleCopy}
                                    className="absolute top-2 right-2 p-2 bg-white rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity border border-gray-200"
                                >
                                    <Clipboard className="w-4 h-4" />
                                </button>
                             </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
      )}
    </div>
  );
};

const KeyTerm = ({ label, value }: { label: string, value: string }) => (
    <div className="flex justify-between items-center">
        <span className="text-gray-400 text-sm">{label}</span>
        <span className="font-medium text-lg">{value}</span>
    </div>
);

export default ScanPage;
