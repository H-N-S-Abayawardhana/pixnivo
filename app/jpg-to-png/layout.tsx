import type { Metadata } from 'next';

export function generateMetadata(): Metadata {
  const baseUrl = 'https://pixnivo.com';
  const url = `${baseUrl}/jpg-to-png`;
  
  return {
    title: 'Convert JPG to PNG Online Free – No Login Required',
    description: 'Convert JPG to PNG instantly for free. Support for transparency. No sign-up, no watermarks. All processing happens in your browser.',
    keywords: 'jpg to png, convert jpg to png, jpeg to png converter, free jpg to png, online jpg converter, jpg to png converter free',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: 'Convert JPG to PNG Online Free – No Login Required | PixNivo',
      description: 'Convert JPG images to PNG format instantly and for free. Support for transparency. No sign-up required, no watermarks.',
      url: url,
      siteName: 'PixNivo',
      images: [
        {
          url: `${baseUrl}/pixnivo_logo.png`,
          width: 1200,
          height: 630,
          alt: 'PixNivo JPG to PNG Converter',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Convert JPG to PNG Online Free – No Login Required',
      description: 'Convert JPG images to PNG format instantly and for free. Support for transparency.',
      images: [`${baseUrl}/pixnivo_logo.png`],
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
}

export default function JpgToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

