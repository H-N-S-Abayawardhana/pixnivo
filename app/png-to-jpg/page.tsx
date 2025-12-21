'use client';

import { useState } from 'react';
import Link from 'next/link';
import ToolLayout from '@/components/ToolLayout';
import FileUpload from '@/components/FileUpload';
import ImagePreview from '@/components/ImagePreview';
import PrimaryButton from '@/components/PrimaryButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import StructuredData from '@/components/StructuredData';
import { convertImageFormat, validateImageFile, formatFileSize } from '@/lib/imageUtils';
import { FAQPage } from '@/types/schema';

export default function PngToJpgPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [processedBlob, setProcessedBlob] = useState<Blob | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    const validation = validateImageFile(file);
    if (!validation.valid) {
      setError(validation.error || 'Invalid file');
      return;
    }

    // Check if it's a PNG
    if (!file.type.includes('png')) {
      setError('Please upload a PNG image file.');
      return;
    }

    setError(null);
    setSelectedFile(file);
    setProcessedBlob(null);
  };

  const handleConvert = async () => {
    if (!selectedFile) return;

    setIsProcessing(true);
    setError(null);

    try {
      const blob = await convertImageFormat(selectedFile, 'image/jpeg', 0.92);
      setProcessedBlob(blob);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to convert image. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!processedBlob || !selectedFile) return;

    const url = URL.createObjectURL(processedBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = selectedFile.name.replace(/\.png$/i, '.jpg');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // FAQ structured data for SEO
  const faqSchema: FAQPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Will my PNG image lose quality when converted to JPG?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'JPG is a lossy format, so there may be a slight reduction in quality. However, we use high-quality settings (92% quality) to minimize any visible quality loss. The trade-off is usually a smaller file size, which is often beneficial for web use.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I convert PNG images with transparency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, you can convert PNG images with transparency to JPG. However, JPG doesn\'t support transparency, so transparent areas will be converted to white. If you need to preserve transparency, consider using our JPG to PNG converter in reverse, or keep your image as PNG.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a file size limit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we support PNG files up to 10MB. This limit ensures fast processing in your browser. If your file is larger, consider compressing it first using our Image Compressor tool.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are my images stored on your servers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, absolutely not. All image processing happens directly in your browser. Your files never leave your device, ensuring complete privacy and security.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why would I want to convert PNG to JPG?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'JPG files are typically smaller than PNG files, making them ideal for web use, email attachments, and saving storage space. JPG is also more widely supported across different platforms and applications.',
        },
      },
    ],
  };

  return (
    <>
      <StructuredData data={faqSchema} />
      <ToolLayout
        title="PNG to JPG Converter"
        description="Convert PNG images to JPG format instantly. Reduce file sizes and improve compatibility."
      >
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'PNG to JPG Converter', href: '/png-to-jpg' },
          ]}
        />
      {/* Upload Section */}
      <div className="mb-8">
        <FileUpload
          onFileSelect={handleFileSelect}
          accept="image/png"
          maxSizeMB={10}
        />
      </div>

      {/* Convert Button */}
      {selectedFile && !processedBlob && (
        <div className="mb-8 text-center">
          <PrimaryButton
            onClick={handleConvert}
            isLoading={isProcessing}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            }
          >
            Convert to JPG
          </PrimaryButton>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      {/* Preview Section */}
      {selectedFile && (
        <div className="mb-12">
          <ImagePreview
            originalFile={selectedFile}
            processedBlob={processedBlob || undefined}
            originalSize={selectedFile.size}
            processedSize={processedBlob?.size}
          />
        </div>
      )}

      {/* Download Button */}
      {processedBlob && (
        <div className="mb-12 text-center">
          <PrimaryButton
            onClick={handleDownload}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0L8 8m4-4v12" />
              </svg>
            }
          >
            Download JPG Image
          </PrimaryButton>
        </div>
      )}

      {/* SEO Content Section */}
      <section className="mb-12 prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Convert PNG to JPG Online - Free and Instant</h2>
        <p className="text-gray-700 mb-4">
          Need to convert PNG images to JPG format? Our free online PNG to JPG converter makes it easy. 
          Whether you're optimizing images for your website, reducing file sizes for email, or preparing 
          photos for social media, converting PNG to JPG can help you achieve smaller file sizes while 
          maintaining good visual quality.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What is PNG to JPG Conversion?</h3>
        <p className="text-gray-700 mb-4">
          PNG to JPG conversion is the process of changing an image file from PNG (Portable Network Graphics) 
          format to JPG (Joint Photographic Experts Group) format. PNG files are lossless and support transparency, 
          while JPG files use lossy compression and typically result in smaller file sizes. Converting PNG to JPG 
          is useful when you need smaller files for web use, email attachments, or storage optimization.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">When Should You Convert PNG to JPG?</h3>
        <p className="text-gray-700 mb-4">
          Convert PNG to JPG when:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>You need smaller file sizes for faster website loading</li>
          <li>You're sending images via email and want to reduce attachment size</li>
          <li>You're working with photographs (JPG is optimized for photos)</li>
          <li>You don't need transparency support</li>
          <li>You want better compatibility across different devices and platforms</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Benefits of Converting PNG to JPG</h3>
        <p className="text-gray-700 mb-4">
          Converting PNG to JPG offers several advantages:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Smaller file sizes:</strong> JPG files are typically 50-80% smaller than PNG files, making them ideal for web optimization</li>
          <li><strong>Faster loading:</strong> Smaller files mean faster page load times and better user experience</li>
          <li><strong>Better compatibility:</strong> JPG is supported by virtually all devices, browsers, and applications</li>
          <li><strong>Storage savings:</strong> Reduce storage space on your devices or servers</li>
          <li><strong>Email-friendly:</strong> Smaller files are easier to send via email without hitting size limits</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">How Our PNG to JPG Converter Works</h3>
        <p className="text-gray-700 mb-4">
          Our converter uses advanced browser-based processing to convert your PNG images to JPG format. 
          The conversion happens entirely in your browser using the Canvas API, which means:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>No file uploads to servers - complete privacy</li>
          <li>Instant processing - no waiting for uploads or downloads</li>
          <li>High-quality conversion at 92% quality setting</li>
          <li>Works offline after the initial page load</li>
          <li>No file size limits beyond browser capabilities</li>
        </ul>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use Our PNG to JPG Converter</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Upload Your PNG Image</h3>
              <p className="text-gray-600">
                Click or drag and drop your PNG image file. We support files up to 10MB.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Convert to JPG</h3>
              <p className="text-gray-600">
                Click the convert button. Your image is processed instantly in your browser.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Download Your JPG</h3>
              <p className="text-gray-600">
                Click the download button to save your converted JPG image to your device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Will my PNG image lose quality when converted to JPG?</h3>
            <p className="text-gray-600">
              JPG is a lossy format, so there may be a slight reduction in quality. However, we use high-quality settings (92% quality) to minimize any visible quality loss. The trade-off is usually a smaller file size, which is often beneficial for web use.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Can I convert PNG images with transparency?</h3>
            <p className="text-gray-600">
              Yes, you can convert PNG images with transparency to JPG. However, JPG doesn't support transparency, so transparent areas will be converted to white. If you need to preserve transparency, consider using our JPG to PNG converter in reverse, or keep your image as PNG.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Is there a file size limit?</h3>
            <p className="text-gray-600">
              Yes, we support PNG files up to 10MB. This limit ensures fast processing in your browser. If your file is larger, consider compressing it first using our Image Compressor tool.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Are my images stored on your servers?</h3>
            <p className="text-gray-600">
              No, absolutely not. All image processing happens directly in your browser. Your files never leave your device, ensuring complete privacy and security.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Why would I want to convert PNG to JPG?</h3>
            <p className="text-gray-600">
              JPG files are typically smaller than PNG files, making them ideal for web use, email attachments, and saving storage space. JPG is also more widely supported across different platforms and applications.
            </p>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Image Tools</h2>
        <p className="text-gray-600 mb-6">
          Need to work with images in different ways? Check out our other free image tools:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/jpg-to-png"
            className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-gray-900 mb-1">JPG to PNG Converter</h3>
            <p className="text-sm text-gray-600">Convert JPG images to PNG format with transparency support</p>
          </Link>
          <Link
            href="/image-compressor"
            className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-gray-900 mb-1">Image Compressor</h3>
            <p className="text-sm text-gray-600">Reduce image file sizes without losing quality</p>
          </Link>
          <Link
            href="/image-resizer"
            className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-gray-900 mb-1">Image Resizer</h3>
            <p className="text-sm text-gray-600">Resize images to any dimensions while maintaining quality</p>
          </Link>
        </div>
      </section>
    </ToolLayout>
    </>
  );
}

