import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convert JPG to PNG Online Free – No Login, No Watermark | PixNivo',
  description: 'Convert JPG images to PNG format instantly and for free. Support for transparency. No sign-up required, no watermarks. All processing happens in your browser.',
  keywords: 'jpg to png, convert jpg to png, jpeg to png, image converter, free jpg to png converter',
};

export default function JpgToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

