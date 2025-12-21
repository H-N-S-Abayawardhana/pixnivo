import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Image Compressor Online – Reduce File Size Without Quality Loss | PixNivo',
  description: 'Compress images online for free. Reduce file sizes without losing quality. Perfect for web optimization. No sign-up required, all processing in your browser.',
  keywords: 'image compressor, compress images, reduce image size, image optimization, free image compressor',
};

export default function ImageCompressorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

