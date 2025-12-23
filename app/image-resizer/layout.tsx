import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export function generateMetadata(): Metadata {
  const url = `${SITE_CONFIG.url}/image-resizer`;
  
  return {
    title: 'Free Image Resizer Online – Resize Images to Any Size',
    description: 'Resize images online for free. Resize photos to any dimensions while maintaining quality. Perfect for social media. No sign-up required, all processing in your browser.',
    keywords: [
      'image resizer',
      'resize images',
      'resize photos',
      'image size changer',
      'free image resizer',
      'resize pictures online',
      'resize jpg',
      'resize png',
      'image dimensions',
      'resize image online',
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: 'Free Image Resizer Online – Resize Images to Any Size | PixNivo',
      description: 'Resize images online for free. Resize photos to any dimensions while maintaining quality. Perfect for social media.',
      url: url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: `${SITE_CONFIG.url}${SITE_CONFIG.defaultImage}`,
          width: 1200,
          height: 630,
          alt: 'PixNivo Image Resizer',
        },
      ],
      locale: SITE_CONFIG.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Free Image Resizer Online – Resize Images to Any Size',
      description: 'Resize images online for free. Resize photos to any dimensions while maintaining quality.',
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

export default function ImageResizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

