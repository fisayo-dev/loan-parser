import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scan Document",
  description: "Upload and analyze your loan documents instantly. AI-powered extraction of key terms, interest rates, and risk assessment.",
  openGraph: {
    title: "Scan Document - Loan Parser",
    description: "Upload and analyze your loan documents instantly. AI-powered extraction of key terms, interest rates, and risk assessment.",
    url: "https://loanparser.vercel.app/scan",
    siteName: "Loan Parser",
    images: [
      {
        url: "https://loanparser.vercel.app/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Loan Parser - Document Scanning Tool",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scan Document - Loan Parser",
    description: "Upload and analyze your loan documents instantly. AI-powered extraction of key terms.",
    images: ["https://loanparser.vercel.app/assets/og-image.png"],
    creator: "@loanparser",
  },
  alternates: {
    canonical: "https://loanparser.vercel.app/scan",
  },
};

export default function ScanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
