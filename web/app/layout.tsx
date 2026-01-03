import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/page/Header";
import Footer from "@/components/page/Footer";

const mainFont = localFont({
  src: "../public/fonts/PlusJakartaSans-VariableFont_wght.ttf",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://loanparser.vercel.app"),
  title: {
    default: "Loan Parser - AI Loan Analysis Tool",
    template: "%s | Loan Parser",
  },
  description: "Simplify complex loan documents with AI-powered parsing. Get instant analysis, risk assessment, and structured data extraction.",
  keywords: ["loan parser", "loan analysis", "ai loan tools", "document parsing", "fintech", "loan scanner", "contract analysis"],
  authors: [{ name: "Loan Parser Team" }],
  creator: "Loan Parser",
  publisher: "Loan Parser",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://loanparser.vercel.app",
    siteName: "Loan Parser",
    title: "Loan Parser - AI Loan Analysis Tool",
    description: "Simplify complex loan documents with AI-powered parsing. Get instant analysis.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Loan Parser - AI Loan Analysis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Parser - AI Loan Analysis Tool",
    description: "Simplify complex loan documents with AI-powered parsing.",
    images: ["/assets/og-image.png"],
    creator: "@loanparser",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mainFont.variable} antialiased`}>
        <Header />
        <div className="app-container pt-24 min-h-[90vh]">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
