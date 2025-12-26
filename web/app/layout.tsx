import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const interFont = localFont({
  src: "../public/fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  display: "swap",
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
      <body className={`${interFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
