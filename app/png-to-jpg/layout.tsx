import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export function generateMetadata(): Metadata {
  const url = `${SITE_CONFIG.url}/png-to-jpg`;
  
  return {
    title: 'Convert PNG to JPG Online Free – No Login Required',
    description: 'Convert PNG to JPG instantly for free. No sign-up, no watermarks. Reduce file sizes and improve compatibility. All processing happens in your browser.',
    keywords: [
      'png to jpg',
      'convert png to jpg',
      'png to jpeg converter',
      'free png to jpg',
      'online png converter',
      'png to jpg converter free',
      'png to jpg online',
      'convert png to jpeg',
      'png converter',
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: 'Convert PNG to JPG Online Free – No Login Required | PixNivo',
      description: 'Convert PNG images to JPG format instantly and for free. No sign-up required, no watermarks. All processing happens in your browser.',
      url: url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: `${SITE_CONFIG.url}${SITE_CONFIG.defaultImage}`,
          width: 1200,
          height: 630,
          alt: 'PixNivo PNG to JPG Converter',
        },
      ],
      locale: SITE_CONFIG.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Convert PNG to JPG Online Free – No Login Required',
      description: 'Convert PNG images to JPG format instantly and for free. No sign-up required, no watermarks.',
      images: [`${SITE_CONFIG.url}${SITE_CONFIG.defaultImage}`],
      creator: SITE_CONFIG.twitterHandle,
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

export default function PngToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

