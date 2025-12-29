"use client";
import Button from "@/components/field/Button";
import {
  Clipboard,
  Download,
  Lightbulb,
  Repeat,
  ScanSearch,
  ScanText,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface LoanResult {
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

const ScanPage = () => {
  const [scanSubmitted, setScanSubmitted] = useState<
    "not-started" | "finished"
  >("not-started");
  const [isScanning, setIsScanning] = useState(false);
  const [scanType, setScanType] = useState<"JSON" | "CSV">("JSON");
  const [scanResult, setScanResult] = useState<LoanResult | null>(null);
  const [error, setError] = useState<string>("");

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsScanning(true);
    setError("");

    try {
      // Read file as text
      const fileText = await file.text();

      // Prepare payload
      const payload = {
        file_name: file.name,
        file_type: file.type,
        file_data: fileText,
      };

      // Call your Go API
      const response = await fetch(`${process.env.BACKEND_URL}/v1/scan-loan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const result: LoanResult = await response.json();
      setScanResult(result);
      setScanSubmitted("finished");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Error scanning loan:", err);
    } finally {
      setIsScanning(false);
    }
  };

  const handleRescan = () => {
    setScanSubmitted("not-started");
    setScanResult(null);
    setError("");
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

    await navigator.clipboard.writeText(dataStr);
    alert("Copied to clipboard!");
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
      data.borrower.name,
      `"${data.borrower.address}"`,
      data.lender.name,
      `"${data.lender.address}"`,
    ].join(",");

    return `${headers}\n${values}`;
  };

  return (
    <div className="grid gap-4">
      <h2 className="text-3xl lg:text-4xl mb-8 text-center font-bold">
        {scanSubmitted === "not-started"
          ? "Analyze your First Loan"
          : "Yay!! Your report is ready"}
      </h2>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          <p className="font-bold">Error:</p>
          <p>{error}</p>
        </div>
      )}

      {scanSubmitted === "finished" && scanResult && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10">
          <div className="lg:col-span-7">
            <div className="grid gap-8">
              <div className="flex items-center justify-between border border-gray-300 rounded-2xl p-4">
                <div className="inline-flex items-center gap-4">
                  <ScanText className="text-green-600" />
                  <h2>{scanResult.lender.name} Loan Document</h2>
                </div>
                <div className="inline-flex items-center space-x-2">
                  <Button
                    variant="outline"
                    text="Re-scan"
                    className="text-sm"
                    icon={Repeat}
                    onClick={handleRescan}
                  />
                </div>
              </div>

              <div className="block lg:hidden border border-gray-300 rounded-2xl p-4">
                <Button
                  text="Download CSV/JSON"
                  className="text-sm w-full"
                  icon={Download}
                  onClick={handleDownload}
                />
              </div>

              <div className="grid gap-8 border border-gray-300 rounded-2xl p-4">
                <div>
                  <div className="inline-flex items-center gap-4">
                    <ScanSearch className="text-blue-600" />
                    <h2>AI Summary</h2>
                  </div>
                  <div className="mt-2">
                    <p className="w-full overflow-x-auto max-h-96 bg-gray-50 p-4 rounded-lg text-sm wrap-break-words whitespace-pre-wrap">
                      {scanResult.ai_summary}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="inline-flex items-center gap-4">
                    <Lightbulb className="text-red-600" />
                    <h2>Risk Highlights</h2>
                  </div>
                  <div className="mt-2">
                    <p className="w-full overflow-x-auto max-h-96 bg-gray-50 p-4 rounded-lg text-sm wrap-break-words whitespace-pre-wrap">
                      {scanResult.risk_highlights}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-8">
              <div className="hidden lg:block border border-gray-300 rounded-2xl p-4">
                <Button
                  text="Download CSV/JSON"
                  className="text-sm w-full"
                  icon={Download}
                  onClick={handleDownload}
                />
              </div>

              <div className="border border-gray-300 rounded-2xl p-4">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {(["JSON", "CSV"] as const).map((type) => (
                        <p
                          key={type}
                          onClick={() => setScanType(type)}
                          className={`cursor-pointer ${
                            scanType === type
                              ? "font-bold border-b-2"
                              : "text-black/80 hover:text-black"
                          }`}
                        >
                          {type}
                        </p>
                      ))}
                    </div>
                    <div
                      className="cursor-pointer hover:bg-gray-100 rounded-lg p-2"
                      onClick={handleCopy}
                    >
                      <Clipboard className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    {scanType === "JSON" ? (
                      <pre className="w-full overflow-x-auto max-h-96 bg-gray-50 p-4 rounded-lg text-sm wrap-break-words whitespace-pre-wrap">
                        {JSON.stringify(scanResult, null, 2)}
                      </pre>
                    ) : (
                      <pre className="overflow-x-auto max-h-96 bg-gray-50 p-4 rounded-lg text-sm wrap-break-words whitespace-pre-wrap">
                        {convertToCSV(scanResult)}
                      </pre>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {scanSubmitted === "not-started" && (
        <div className="block">
          <Link href="/">
            <Button
              variant="outline"
              text="Back home"
              className="px-6 mb-4 lg:mb-0"
            />
          </Link>

          <div className="py-4 h-[80vh] grid place-content-center border border-gray-300 max-w-2xl mx-auto rounded-2xl my-10 relative">
            <input
              type="file"
              accept=".txt,.pdf,.doc,.docx"
              onChange={handleFileUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              disabled={isScanning}
            />
            <div className="flex flex-col space-y-2 text-center items-center pointer-events-none">
              <Image
                src="/assets/file_docs.jpg"
                alt="Document docs"
                height={100}
                width={100}
                className="h-50 w-50"
              />
              <div>
                <p>Upload documents OR</p>
                <p>Drag & Drop them</p>
              </div>
            </div>
          </div>

          <div className="grid">
            {isScanning && (
              <Button
                variant="outline"
                text="Scanning..."
                loading={true}
                className="px-6 mb-10 mx-auto"
              />
            )}
            <input
              id="file-upload"
              type="file"
              accept=".txt,.pdf,.doc,.docx"
              onChange={handleFileUpload}
              className="hidden"
              disabled={isScanning}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScanPage;
