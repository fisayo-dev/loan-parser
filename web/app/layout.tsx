import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/page/Header";

const interFont = localFont({
  src: "../public/fonts/Inter-font.ttf",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Loan Parser",
  description: "Simplify Complex loan Documents with AI-Powered Parsing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.variable} antialiased`}>
        <Header />
        <div className="app-container pt-40 min-h-[90vh]">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
