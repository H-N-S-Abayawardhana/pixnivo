import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StructuredData from "@/components/StructuredData";
import { ORGANIZATION } from "@/lib/constants";
import { Organization } from "@/types/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "PixNivo - Free Online Image Converter & Tools",
    template: "%s | PixNivo",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "image converter",
    "png to jpg",
    "jpg to png",
    "image compressor",
    "image resizer",
    "free image tools",
    "online image converter",
    "convert images online",
    "image optimization",
    "browser-based image tools",
    "privacy-first image converter",
    "free png to jpg converter",
    "free jpg to png converter",
    "online image compressor",
    "image resizer online",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "PixNivo - Free Online Image Converter & Tools",
    description: SITE_CONFIG.description,
    images: [
      {
        url: `${SITE_CONFIG.url}${SITE_CONFIG.defaultImage}`,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Free Image Tools`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PixNivo - Free Online Image Converter & Tools",
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}${SITE_CONFIG.defaultImage}`],
    creator: SITE_CONFIG.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "technology",
};

// Organization structured data for all pages
const organizationSchema: Organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: ORGANIZATION.name,
  url: ORGANIZATION.url,
  logo: ORGANIZATION.logo,
  description: ORGANIZATION.description,
  email: ORGANIZATION.email,
  sameAs: [
    // Add your social media profiles here
    // 'https://twitter.com/pixnivo',
    // 'https://facebook.com/pixnivo',
  ],
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
        <StructuredData data={organizationSchema} />
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
