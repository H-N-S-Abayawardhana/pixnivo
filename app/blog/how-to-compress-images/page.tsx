import type { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { Article } from '@/types/schema';

export function generateMetadata(): Metadata {
  const baseUrl = 'https://pixnivo.com';
  const url = `${baseUrl}/blog/how-to-compress-images`;
  
  return {
    title: 'How to Compress Images Without Losing Quality',
    description: 'Learn how to compress images effectively while maintaining visual quality. Tips and techniques for image optimization. Complete guide with best practices.',
    keywords: 'compress images, image compression, reduce image size, image optimization, compress photos, image quality',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: 'How to Compress Images Without Losing Quality | PixNivo Blog',
      description: 'Learn how to compress images effectively while maintaining visual quality. Tips and techniques for image optimization.',
      url: url,
      siteName: 'PixNivo',
      images: [
        {
          url: `${baseUrl}/pixnivo_logo.png`,
          width: 1200,
          height: 630,
          alt: 'How to Compress Images Guide',
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: '2024-01-10T00:00:00Z',
      modifiedTime: '2024-01-10T00:00:00Z',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'How to Compress Images Without Losing Quality',
      description: 'Learn how to compress images effectively while maintaining visual quality. Tips and techniques for image optimization.',
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

// Article structured data for SEO
const articleSchema: Article = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Compress Images Without Losing Quality',
  description: 'Learn how to compress images effectively while maintaining visual quality. Tips and techniques for image optimization.',
  image: 'https://pixnivo.com/pixnivo_logo.png',
  datePublished: '2024-01-10T00:00:00Z',
  dateModified: '2024-01-10T00:00:00Z',
  author: {
    '@type': 'Person',
    name: 'PixNivo Team',
  },
  publisher: {
    '@type': 'Organization',
    name: 'PixNivo',
    logo: {
      '@type': 'ImageObject',
      url: 'https://pixnivo.com/pixnivo_logo.png',
    },
  },
};

export default function HowToCompressImagesPage() {
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
          How to Compress Images Without Losing Quality
        </h1>
        <p className="text-gray-600 mb-8">
          Published on {new Date('2024-01-10').toLocaleDateString()}
        </p>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Image compression is essential for web optimization, faster loading times, and saving 
            storage space. However, many people worry that compressing images will result in 
            noticeable quality loss. In this guide, we'll show you how to compress images effectively 
            while maintaining good visual quality.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Compress Images?</h2>
          <p>
            Compressing images offers several benefits:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Faster website loading:</strong> Smaller images load faster, improving user experience</li>
            <li><strong>Reduced bandwidth:</strong> Less data usage for mobile users</li>
            <li><strong>Storage savings:</strong> More images in less space</li>
            <li><strong>Better SEO:</strong> Faster sites rank higher in search results</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Understanding Image Compression</h2>
          <p>
            There are two main types of image compression:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Lossless compression:</strong> Reduces file size without losing any quality. 
              Best for graphics and images with few colors.
            </li>
            <li>
              <strong>Lossy compression:</strong> Reduces file size by removing some image data. 
              When done well, the quality loss is barely noticeable. Best for photographs.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Best Practices for Image Compression</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Choose the Right Format</h3>
          <p>
            Different image formats compress differently:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>JPG:</strong> Best for photographs. Use quality settings between 80-90% for good balance.</li>
            <li><strong>PNG:</strong> Best for graphics. Use PNG-8 for simple graphics, PNG-24 for complex images.</li>
            <li><strong>WebP:</strong> Modern format offering better compression than JPG and PNG.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Resize Before Compressing</h3>
          <p>
            If your image is larger than needed, resize it first. There's no point in compressing 
            a 4000x3000 image if you only need 1920x1080. Use our{' '}
            <a href="/image-resizer" className="text-blue-600 hover:text-blue-700">Image Resizer</a> tool.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Use Appropriate Quality Settings</h3>
          <p>
            Higher quality means larger files. For web use, aim for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>80-90% quality for photographs</li>
            <li>90-100% quality for graphics and logos</li>
            <li>Test different settings to find the best balance</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Target File Sizes</h3>
          <p>
            Aim for these file sizes depending on use:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Web images:</strong> 100-500 KB</li>
            <li><strong>Thumbnails:</strong> 20-100 KB</li>
            <li><strong>Hero images:</strong> 200-800 KB</li>
            <li><strong>Email attachments:</strong> Under 1 MB</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Using PixNivo's Image Compressor</h2>
          <p>
            Our{' '}
            <a href="/image-compressor" className="text-blue-600 hover:text-blue-700">Image Compressor</a> tool 
            makes it easy to compress images:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Upload your image</li>
            <li>Choose your target file size (0.5MB, 1MB, 2MB, or 5MB)</li>
            <li>Click compress and compare the results</li>
            <li>Download when satisfied with the quality</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Tips for Maximum Compression</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Remove unnecessary metadata (EXIF data)</li>
            <li>Use progressive JPG for large images</li>
            <li>Consider using WebP format for modern browsers</li>
            <li>Compress images before uploading to websites</li>
            <li>Use responsive images for different screen sizes</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Common Mistakes to Avoid</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Compressing already compressed images multiple times</li>
            <li>Using too low quality settings (below 70%)</li>
            <li>Not comparing before and after results</li>
            <li>Forgetting to resize oversized images first</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Conclusion</h2>
          <p>
            Image compression is a balance between file size and quality. By choosing the right format, 
            using appropriate settings, and testing your results, you can significantly reduce file sizes 
            while maintaining good visual quality. Remember to always compare the compressed image with 
            the original to ensure the quality meets your needs.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <p className="text-blue-800">
              <strong>Ready to compress your images?</strong> Try our free{' '}
              <a href="/image-compressor" className="underline">Image Compressor</a> tool. 
              All processing happens in your browser - no uploads, no watermarks, completely private!
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

