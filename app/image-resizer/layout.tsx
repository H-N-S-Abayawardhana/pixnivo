import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Image Resizer Online – Resize Images to Any Size | PixNivo',
  description: 'Resize images online for free. Resize photos to any dimensions while maintaining quality. Perfect for social media. No sign-up required, all processing in your browser.',
  keywords: 'image resizer, resize images, resize photos, image size changer, free image resizer',
};

export default function ImageResizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

