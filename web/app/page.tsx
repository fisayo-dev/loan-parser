import Features from "@/components/page/Features";
import Footer from "@/components/page/Footer";
import Landing from "@/components/page/Landing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Smart Loan Analysis",
  description: "Experience the future of loan document analysis. Secure, fast, and accurate AI-powered insights for lenders and borrowers.",
  openGraph: {
    title: "Loan Parser - Smart Loan Analysis",
    description: "Experience the future of loan document analysis. Secure, fast, and accurate AI-powered insights for lenders and borrowers.",
    url: "https://loanparser.vercel.app/",
    siteName: "Loan Parser",
    images: [
      {
        url: "https://loanparser.vercel.app/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Loan Parser - AI Loan Analysis Tool",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Parser - Smart Loan Analysis",
    description: "Experience the future of loan document analysis. Secure, fast, and accurate AI-powered insights.",
    images: ["https://loanparser.vercel.app/assets/og-image.png"],
    creator: "@loanparser",
  },
  alternates: {
    canonical: "https://loanparser.vercel.app/",
  },
};

const page = () => {
  return (
    <div className="grid gap-30">
      <Landing />
      <Features />
      <Footer />
    </div>
  );
};

export default page;
