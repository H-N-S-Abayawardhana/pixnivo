import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export function generateMetadata(): Metadata {
  const url = `${SITE_CONFIG.url}/image-compressor`;
  
  return {
    title: 'Free Image Compressor Online – Reduce File Size',
    description: 'Compress images online for free. Reduce file sizes without losing quality. Perfect for web optimization. No sign-up required, all processing in your browser.',
    keywords: [
      'image compressor',
      'compress images',
      'reduce image size',
      'image optimization',
      'free image compressor',
      'compress photos online',
      'image size reducer',
      'compress jpg',
      'compress png',
      'optimize images',
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: 'Free Image Compressor Online – Reduce File Size | PixNivo',
      description: 'Compress images online for free. Reduce file sizes without losing quality. Perfect for web optimization.',
      url: url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: `${SITE_CONFIG.url}${SITE_CONFIG.defaultImage}`,
          width: 1200,
          height: 630,
          alt: 'PixNivo Image Compressor',
        },
      ],
      locale: SITE_CONFIG.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Free Image Compressor Online – Reduce File Size',
      description: 'Compress images online for free. Reduce file sizes without losing quality.',
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

export default function ImageCompressorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

