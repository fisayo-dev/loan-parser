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

const ScanPage = () => {
  const [scanSubmitted, setScanSubmitted] = useState<
    "not-started" | "finished"
  >("not-started")
  const [isScanning, setIsScanning] = useState(false);
  const [scanType, setScanType] = useState<"JSON" | "CSV">("JSON");
  return (
    <div className="grid gap-4">
      <h2 className="text-3xl lg:text-4xl mb-8 text-center font-bold">
        {scanSubmitted == "not-started"
          ? "Analyze your First Loan"
          : "Yay!! Your report is ready"}
      </h2>
      {scanSubmitted == "finished" && (
        // Results ui
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10">
          <div className="lg:col-span-7">
            <div className="grid gap-8 ">
              <div className="flex items-center justify-between border border-gray-300 rounded-2xl p-4">
                <div className="inline-flex items-center gap-4 ">
                  <ScanText className="text-green-600" />
                  <h2>Fair Money Loan Document.</h2>
                </div>
                <div className="inline-flex-items-center space-x-2">
                  <Button
                    variant="outline"
                    text="Re-scan"
                    className="text-sm"
                    icon={Repeat}
                  />
                </div>
              </div>
              <div className="block lg:hidden border border-gray-300 rounded-2xl p-4">
                <Button
                  text="Download CSV/JSON"
                  className="text-sm w-full"
                  icon={Download}
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
                      This Loan Agreement (the &quot;Agreement&quot;) is made
                      and entered into as of this 1st day of January, 2023, by
                      and between Fair Money Lending, Inc., a Delaware
                      corporation with its principal place of business at 123
                      Finance Avenue, New York, NY 10001 (&quot;Lender&quot;),
                      and John Doe, residing at 456 Main Street, Springfield, IL
                      62701 (&quot;Borrower&quot;).
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
                      1. High Interest Rate: The loan carries an annual
                      percentage rate (APR) of 24%, which is significantly
                      higher than the average market rate for similar loans.
                      This could lead to substantial interest costs over the
                      life of the loan. 1. High Interest Rate: The loan carries
                      an annual percentage rate (APR) of 24%, which is
                      significantly higher than the average market rate for
                      similar loans. This could lead to substantial interest
                      costs over the life of the loan. 1. High Interest Rate:
                      The loan carries an annual percentage rate (APR) of 24%,
                      which is significantly higher than the average market rate
                      for similar loans. This could lead to substantial interest
                      costs over the life of the loan. 1. High Interest Rate:
                      The loan carries an annual percentage rate (APR) of 24%,
                      which is significantly higher than the average market rate
                      for similar loans. This could lead to substantial interest
                      costs over the life of the loan. 1. High Interest Rate:
                      The loan carries an annual percentage rate (APR) of 24%,
                      which is significantly higher than the average market rate
                      for similar loans. This could lead to substantial interest
                      costs over the life of the loan. 1. High Interest Rate:
                      The loan carries an annual percentage rate (APR) of 24%,
                      which is significantly higher than the average market rate
                      for similar loans. This could lead to substantial interest
                      costs over the life of the loan. 1. High Interest Rate:
                      The loan carries an annual percentage rate (APR) of 24%,
                      which is significantly higher than the average market rate
                      for similar loans. This could lead to substantial interest
                      costs over the life of the loan. 1. High Interest Rate:
                      The loan carries an annual percentage rate (APR) of 24%,
                      which is significantly higher than the average market rate
                      for similar loans. This could lead to substantial interest
                      costs over the life of the loan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 ">
            <div className="grid gap-8">
              <div className="hidden lg:block border border-gray-300 rounded-2xl p-4">
                <Button
                  text="Download CSV/JSON"
                  className="text-sm w-full"
                  icon={Download}
                />
              </div>
              <div className="border border-gray-300 rounded-2xl p-4">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {["JSON", "CSV"].map((type, index) => (
                        <p
                          key={index}
                          onClick={() => setScanType(type)}
                          className={`cursor-pointer ${
                            scanType == type
                              ? "font-bold border-b-2"
                              : "text-black/80 hover:text-black"
                          }`}
                        >
                          {type}
                        </p>
                      ))}
                    </div>
                    <div className="cursor-pointer hover:bg-gray-100 rounded-lg p-2">
                      <Clipboard className="h-5 w-5"/>
                    </div>
                  </div>
                  <div>
                    {scanType == "JSON" ? (
                      <pre className="w-full overflow-x-auto max-h-96 bg-gray-50 p-4 rounded-lg text-sm break-words whitespace-pre-wrap">
                        {`{
"loan_amount": 10000,
"interest_rate": 0.24,
"loan_term_months": 36,
"monthly_payment": 322.74,
"total_payment": 11618.64,
"late_fee": 25,
"prepayment_penalty": false,
"borrower": {
  "name": "John Doe",
  "address": "456 Main Street, Springfield, IL 62701"
},
"lender": {
  "name": "Fair Money Lending, Inc.",
  "address": "123 Finance Avenue, New York, NY 10001"
}
}`}
                      </pre>
                    ) : (
                      <pre className="overflow-x-auto max-h-96 bg-gray-50 p-4 rounded-lg text-sm wrap-break-words whitespace-pre-wrap">
                        {`Loan Amount,Interest Rate,Loan Term (Months),Monthly Payment,Total Payment,Late Fee,Prepayment Penalty,Borrower Name,Borrower Address,Lender Name,Lender Address
10000,0.24,36,322.74,11618.64,25,false,John Doe,"456 Main Street, Springfield, IL 62701",Fair Money Lending, Inc.,"123 Finance Avenue, New York, NY 10001"
`}
                      </pre>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {scanSubmitted == "not-started" && (
        //  Scan ui *
        <div className="block">
          <Link href="/">
            <Button variant="outline" text="Back home" className="px-6 mb-4 lg:mb-0" />
          </Link>
          <div className="py-4 h-[80vh] grid place-content-center border border-gray-300  max-w-2xl mx-auto rounded-2xl my-10">
            <div className="flex flex-col space-y-2 text-center items-center">
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
            {isScanning ? (
              <Button
                variant="outline"
                text="Scanning..."
                loading={true}
                className="px-6 mb-10 mx-auto"
              />
            ) : (
              <Button
                variant="outline"
                text="Upload Documents"
                className="px-6 mb-10 mx-auto"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScanPage;
