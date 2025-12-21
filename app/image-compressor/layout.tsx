import type { Metadata } from 'next';

export function generateMetadata(): Metadata {
  const baseUrl = 'https://pixnivo.com';
  const url = `${baseUrl}/image-compressor`;
  
  return {
    title: 'Free Image Compressor Online – Reduce File Size',
    description: 'Compress images online for free. Reduce file sizes without losing quality. Perfect for web optimization. No sign-up required, all processing in your browser.',
    keywords: 'image compressor, compress images, reduce image size, image optimization, free image compressor, compress photos online',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: 'Free Image Compressor Online – Reduce File Size | PixNivo',
      description: 'Compress images online for free. Reduce file sizes without losing quality. Perfect for web optimization.',
      url: url,
      siteName: 'PixNivo',
      images: [
        {
          url: `${baseUrl}/pixnivo_logo.png`,
          width: 1200,
          height: 630,
          alt: 'PixNivo Image Compressor',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Free Image Compressor Online – Reduce File Size',
      description: 'Compress images online for free. Reduce file sizes without losing quality.',
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

export default function ImageCompressorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

