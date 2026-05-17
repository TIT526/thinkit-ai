import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ThinkIt AI — AutoCount AI Solutions",
    template: "%s | ThinkIt AI",
  },
  description:
    "AI-powered tools for AutoCount 2.2 — receipt OCR, bank reconciliation, AR aging reminders, and more. Built for Malaysian SMEs.",
  keywords: ["AutoCount", "AI", "Malaysia", "accounting", "bank reconciliation", "OCR"],
  authors: [{ name: "ThinkIt AI" }],
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://thinkit-ai.com",
    siteName: "ThinkIt AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
