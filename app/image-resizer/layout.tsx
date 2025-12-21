import type { Metadata } from 'next';

export function generateMetadata(): Metadata {
  const baseUrl = 'https://pixnivo.com';
  const url = `${baseUrl}/image-resizer`;
  
  return {
    title: 'Free Image Resizer Online – Resize Images to Any Size',
    description: 'Resize images online for free. Resize photos to any dimensions while maintaining quality. Perfect for social media. No sign-up required, all processing in your browser.',
    keywords: 'image resizer, resize images, resize photos, image size changer, free image resizer, resize pictures online',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: 'Free Image Resizer Online – Resize Images to Any Size | PixNivo',
      description: 'Resize images online for free. Resize photos to any dimensions while maintaining quality. Perfect for social media.',
      url: url,
      siteName: 'PixNivo',
      images: [
        {
          url: `${baseUrl}/pixnivo_logo.png`,
          width: 1200,
          height: 630,
          alt: 'PixNivo Image Resizer',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Free Image Resizer Online – Resize Images to Any Size',
      description: 'Resize images online for free. Resize photos to any dimensions while maintaining quality.',
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

export default function ImageResizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

