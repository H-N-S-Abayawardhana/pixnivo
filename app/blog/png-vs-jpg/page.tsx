import type { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { Article } from '@/types/schema';
import { SITE_CONFIG, ORGANIZATION } from '@/lib/constants';

export function generateMetadata(): Metadata {
  const url = `${SITE_CONFIG.url}/blog/png-vs-jpg`;
  
  return {
    title: 'PNG vs JPG: Which Image Format Should You Use?',
    description: 'Learn the key differences between PNG and JPG image formats, when to use each, and how to convert between them. Complete guide with examples.',
    keywords: 'png vs jpg, png vs jpeg, image format comparison, when to use png, when to use jpg, image format guide',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: 'PNG vs JPG: Which Image Format Should You Use? | PixNivo Blog',
      description: 'Learn the key differences between PNG and JPG image formats, when to use each, and how to convert between them.',
      url: url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: `${SITE_CONFIG.url}${SITE_CONFIG.defaultImage}`,
          width: 1200,
          height: 630,
          alt: 'PNG vs JPG Guide',
        },
      ],
      locale: SITE_CONFIG.locale,
      type: 'article',
      publishedTime: '2024-01-15T00:00:00Z',
      modifiedTime: '2024-01-15T00:00:00Z',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PNG vs JPG: Which Image Format Should You Use?',
      description: 'Learn the key differences between PNG and JPG image formats, when to use each, and how to convert between them.',
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

// Article structured data for SEO
const articleSchema: Article = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'PNG vs JPG: Which Image Format Should You Use?',
  description: 'Learn the key differences between PNG and JPG image formats, when to use each, and how to convert between them.',
  image: `${SITE_CONFIG.url}${SITE_CONFIG.defaultImage}`,
  datePublished: '2024-01-15T00:00:00Z',
  dateModified: '2024-01-15T00:00:00Z',
  author: {
    '@type': 'Person',
    name: 'PixNivo Team',
  },
  publisher: {
    '@type': 'Organization',
    name: ORGANIZATION.name,
    logo: {
      '@type': 'ImageObject',
      url: ORGANIZATION.logo,
    },
  },
};

export default function PngVsJpgPage() {
  return (
    <>
      <StructuredData data={articleSchema} />
      <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/blog"
          className="text-blue-600 hover:text-blue-700 mb-6 inline-block"
        >
          ← Back to Blog
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 mt-4">
          PNG vs JPG: Which Format Should You Use?
        </h1>
        <p className="text-gray-600 mb-8">
          Published on {new Date('2024-01-15').toLocaleDateString()}
        </p>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            When working with images, choosing the right format can make a significant difference 
            in file size, quality, and compatibility. Two of the most common image formats are PNG 
            and JPG (also known as JPEG). In this guide, we'll explore the differences between these 
            formats and help you decide which one to use.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What is PNG?</h2>
          <p>
            PNG (Portable Network Graphics) is a lossless image format, meaning it preserves all 
            image data without compression artifacts. PNG supports transparency, making it ideal 
            for graphics, logos, and images that need transparent backgrounds.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">PNG Advantages:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Lossless compression - no quality loss</li>
            <li>Supports transparency (alpha channel)</li>
            <li>Excellent for graphics and text</li>
            <li>No compression artifacts</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">PNG Disadvantages:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Larger file sizes than JPG</li>
            <li>Not ideal for photographs</li>
            <li>Slower to load on websites</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What is JPG?</h2>
          <p>
            JPG (Joint Photographic Experts Group) is a lossy image format that uses compression 
            to reduce file sizes. JPG is optimized for photographs and images with many colors 
            and gradients.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">JPG Advantages:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Smaller file sizes</li>
            <li>Ideal for photographs</li>
            <li>Faster loading times</li>
            <li>Wide compatibility</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">JPG Disadvantages:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Lossy compression - some quality loss</li>
            <li>No transparency support</li>
            <li>Not ideal for graphics with sharp edges</li>
            <li>Compression artifacts at low quality</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">When to Use PNG</h2>
          <p>
            Use PNG when you need:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Transparent backgrounds (logos, graphics)</li>
            <li>Images with text or sharp edges</li>
            <li>Lossless quality (screenshots, diagrams)</li>
            <li>Images with few colors (icons, graphics)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">When to Use JPG</h2>
          <p>
            Use JPG when you need:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Smaller file sizes (web optimization)</li>
            <li>Photographs and images with many colors</li>
            <li>Faster loading times</li>
            <li>Images without transparency needs</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Converting Between Formats</h2>
          <p>
            Sometimes you need to convert between PNG and JPG formats. Here's when and how:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>PNG to JPG:</strong> Use when you want to reduce file size and don't need 
              transparency. Try our{' '}
              <a href="/png-to-jpg" className="text-blue-600 hover:text-blue-700">PNG to JPG converter</a>.
            </li>
            <li>
              <strong>JPG to PNG:</strong> Use when you need transparency or lossless quality. 
              Try our{' '}
              <a href="/jpg-to-png" className="text-blue-600 hover:text-blue-700">JPG to PNG converter</a>.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Conclusion</h2>
          <p>
            Both PNG and JPG have their place in digital imaging. PNG is best for graphics, 
            logos, and images requiring transparency, while JPG is ideal for photographs and 
            web optimization. Understanding these differences helps you choose the right format 
            for your specific needs.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <p className="text-blue-800">
              <strong>Need to convert between formats?</strong> Use our free{' '}
              <a href="/png-to-jpg" className="underline">PNG to JPG</a> or{' '}
              <a href="/jpg-to-png" className="underline">JPG to PNG</a> converters. 
              All processing happens in your browser - no uploads, no watermarks!
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

