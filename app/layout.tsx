import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PixNivo - Free Online Image Converter & Tools",
  description: "Convert, compress, and resize images online for free. PNG to JPG, JPG to PNG, image compression, and resizing tools. All processing happens in your browser - no uploads, no watermarks.",
  keywords: "image converter, png to jpg, jpg to png, image compressor, image resizer, free image tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {/* Vercel Analytics - Tracks page views and visitor analytics */}
        <Analytics />
        {/* Vercel Speed Insights - Monitors Core Web Vitals and performance metrics */}
        <SpeedInsights />
      </body>
    </html>
  );
}
