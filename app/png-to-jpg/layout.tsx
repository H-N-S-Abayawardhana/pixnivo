import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convert PNG to JPG Online Free – No Login, No Watermark | PixNivo',
  description: 'Convert PNG images to JPG format instantly and for free. No sign-up required, no watermarks. All processing happens in your browser - your files never leave your device.',
  keywords: 'png to jpg, convert png to jpg, png to jpeg, image converter, free png to jpg converter',
};

export default function PngToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

