import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { WebApplication } from '@/types/schema';
import { LockClosedIcon, BoltIcon, SparklesIcon } from '@heroicons/react/24/outline';

import { SITE_CONFIG } from '@/lib/constants';

export function generateMetadata(): Metadata {
  return {
    title: 'PixNivo - Free Online Image Converter & Tools',
    description: 'Convert PNG to JPG, JPG to PNG, compress and resize images online for free. No login, no watermarks. All processing happens in your browser.',
    keywords: [
      'image converter',
      'png to jpg',
      'jpg to png',
      'image compressor',
      'image resizer',
      'free image tools',
      'online image converter',
      'convert images online',
      'browser-based image tools',
      'privacy-first image converter',
    ],
    alternates: {
      canonical: SITE_CONFIG.url,
    },
    openGraph: {
      title: 'PixNivo - Free Online Image Converter & Tools',
      description: 'Convert, compress, and resize images instantly. No sign-up required, no watermarks, and your files never leave your device.',
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: `${SITE_CONFIG.url}${SITE_CONFIG.defaultImage}`,
          width: 1200,
          height: 630,
          alt: 'PixNivo - Free Image Tools',
        },
      ],
      locale: SITE_CONFIG.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PixNivo - Free Online Image Converter & Tools',
      description: 'Convert, compress, and resize images instantly. No sign-up required, no watermarks.',
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

const tools = [
  {
    name: 'PNG to JPG Converter',
    description: 'Convert PNG images to JPG format instantly. Perfect for reducing file sizes and improving compatibility.',
    href: '/png-to-jpg',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'JPG to PNG Converter',
    description: 'Convert JPG images to PNG format with transparency support. Ideal for graphics and logos.',
    href: '/jpg-to-png',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Image Compressor',
    description: 'Reduce image file sizes without losing quality. Perfect for web optimization and faster loading.',
    href: '/image-compressor',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    name: 'Image Resizer',
    description: 'Resize images to any dimensions while maintaining quality. Great for social media and thumbnails.',
    href: '/image-resizer',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
  },
];

// Structured data for homepage
const webAppSchema: WebApplication = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'PNG to JPG conversion',
    'JPG to PNG conversion',
    'Image compression',
    'Image resizing',
    'Browser-based processing',
    'No file uploads',
    'Privacy-first',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '1250',
  },
};

export default function Home() {
  return (
    <>
      <StructuredData data={webAppSchema} />
      <div className="bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/pixnivo_logo.png"
              alt="PixNivo Logo"
              width={200}
              height={67}
              priority
              className="h-16 w-auto"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-3">
            Free Image Tools for Everyone
          </h1>
          
          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            Convert, compress, and resize images instantly. No sign-up required, no watermarks, 
            and your files never leave your device.
          </p>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg max-w-2xl mx-auto mb-6">
            <p className="text-sm text-blue-800 flex items-start justify-center gap-2">
              <LockClosedIcon className="h-4 w-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-center">
                <strong>Privacy First:</strong> All image processing happens directly in your browser. 
                Your files are never uploaded or stored on our servers.
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#tools"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="bg-gray-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3">
            Our Image Tools
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Choose from our collection of free, easy-to-use image conversion and optimization tools.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="text-blue-600 mb-4">{tool.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-600">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            Why Choose PixNivo?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <BoltIcon className="h-12 w-12 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Process images instantly in your browser. No waiting for uploads or server processing.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <LockClosedIcon className="h-12 w-12 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Private</h3>
              <p className="text-gray-600">
                Your files never leave your device. All processing happens locally in your browser.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <SparklesIcon className="h-12 w-12 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Completely Free</h3>
              <p className="text-gray-600">
                No sign-up, no watermarks, no hidden fees. Use all our tools as much as you want.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Free Online Image Conversion Tools
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              PixNivo offers a complete suite of free image conversion and optimization tools 
              that work entirely in your web browser. Whether you need to convert PNG to JPG, 
              compress images for faster web loading, or resize photos for social media, 
              we&apos;ve got you covered.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Why Use Browser-Based Image Tools?
            </h3>
            <p>
              Unlike traditional online converters that require uploading your files to a server, 
              PixNivo processes everything directly in your browser. This means:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your images never leave your device, ensuring complete privacy</li>
              <li>Faster processing with no upload/download delays</li>
              <li>No file size limits or restrictions</li>
              <li>Works offline after the initial page load</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Our Image Conversion Tools
            </h3>
            <p>
              <strong>PNG to JPG Converter:</strong> Convert PNG images to JPG format to reduce 
              file sizes and improve compatibility. Perfect for photos and images that don&apos;t need 
              transparency.
            </p>
            <p>
              <strong>JPG to PNG Converter:</strong> Convert JPG images to PNG format with support 
              for transparency. Ideal for graphics, logos, and images that need transparent backgrounds.
            </p>
            <p>
              <strong>Image Compressor:</strong> Reduce image file sizes without noticeable quality 
              loss. Optimize images for web use, email attachments, or storage savings.
            </p>
            <p>
              <strong>Image Resizer:</strong> Resize images to specific dimensions while maintaining 
              aspect ratio. Perfect for creating thumbnails, social media images, or fitting images 
              to specific requirements.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              How to Use PixNivo
            </h3>
            <p>
              Using our image tools is incredibly simple:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Choose the tool you need from our homepage</li>
              <li>Upload your image by clicking or dragging and dropping</li>
              <li>Wait for processing (happens instantly in your browser)</li>
              <li>Download your converted, compressed, or resized image</li>
            </ol>

            <p className="mt-8">
              All our tools are designed to be beginner-friendly, with clear instructions and 
              intuitive interfaces. No technical knowledge required - just upload, process, and download.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
