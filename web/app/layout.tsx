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
      <body className={`${mainFont.variable} antialiased`}>
        <Header />
        <div className="app-container pt-24 min-h-[90vh]">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
