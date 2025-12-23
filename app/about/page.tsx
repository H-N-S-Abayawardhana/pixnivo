import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About PixNivo – Free Online Image Tools',
  description: 'Learn about PixNivo, a free online image conversion and optimization platform. All processing happens in your browser for complete privacy.',
  keywords: [
    'about pixnivo',
    'image tools',
    'free image converter',
    'privacy-first image tools',
    'browser-based image processing',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
  openGraph: {
    title: 'About PixNivo – Free Online Image Tools',
    description: 'Learn about PixNivo, a free online image conversion and optimization platform. All processing happens in your browser for complete privacy.',
    url: `${SITE_CONFIG.url}/about`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}${SITE_CONFIG.defaultImage}`,
        width: 1200,
        height: 630,
        alt: 'About PixNivo',
      },
    ],
    locale: SITE_CONFIG.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About PixNivo – Free Online Image Tools',
    description: 'Learn about PixNivo, a free online image conversion and optimization platform.',
    images: [`${SITE_CONFIG.url}${SITE_CONFIG.defaultImage}`],
    creator: SITE_CONFIG.twitterHandle,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About PixNivo</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            PixNivo is a free, privacy-focused platform for image conversion and optimization. 
            We believe that image tools should be simple, fast, and respect your privacy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
          <p>
            Our mission is to provide high-quality image tools that anyone can use, regardless of 
            technical expertise. We&apos;re committed to keeping our tools free, accessible, and 
            completely private.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Privacy First</h2>
          <p>
            Unlike many online tools that upload your files to servers, PixNivo processes everything 
            directly in your browser. This means:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your images never leave your device</li>
            <li>No files are stored on our servers</li>
            <li>No tracking or data collection</li>
            <li>Complete privacy and security</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Tools</h2>
          <p>
            PixNivo offers a range of image conversion and optimization tools:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>PNG to JPG Converter:</strong> Convert PNG images to JPG format</li>
            <li><strong>JPG to PNG Converter:</strong> Convert JPG images to PNG format</li>
            <li><strong>Image Compressor:</strong> Reduce image file sizes without losing quality</li>
            <li><strong>Image Resizer:</strong> Resize images to any dimensions</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why PixNivo?</h2>
          <p>
            We&apos;ve designed PixNivo to be the simplest, most user-friendly image tool platform. 
            No sign-ups, no watermarks, no complicated settings - just upload, process, and download.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p>
            Have questions or feedback? We&apos;d love to hear from you. Visit our{' '}
            <a href="/contact" className="text-blue-600 hover:text-blue-700">contact page</a> to get in touch.
          </p>
        </div>
      </div>
    </div>
  );
}

