'use client';

import { useState } from 'react';
import Link from 'next/link';
import ToolLayout from '@/components/ToolLayout';
import FileUpload from '@/components/FileUpload';
import ImagePreview from '@/components/ImagePreview';
import PrimaryButton from '@/components/PrimaryButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import StructuredData from '@/components/StructuredData';
import { convertImageFormat, validateImageFile } from '@/lib/imageUtils';
import { FAQPage } from '@/types/schema';

export default function JpgToPngPage() {
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

    // Check if it's a JPG
    if (!file.type.includes('jpeg') && !file.type.includes('jpg')) {
      setError('Please upload a JPG image file.');
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
      const blob = await convertImageFormat(selectedFile, 'image/png', 1.0);
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
    a.download = selectedFile.name.replace(/\.(jpg|jpeg)$/i, '.png');
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
        name: 'Why convert JPG to PNG?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PNG format supports transparency, which is essential for logos, graphics, and images that need transparent backgrounds. PNG is also lossless, meaning no quality is lost during conversion.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will the file size increase?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, PNG files are typically larger than JPG files because PNG is a lossless format. However, PNG is better suited for graphics, logos, and images that require transparency or high quality.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I add transparency to my JPG image?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Converting JPG to PNG doesn\'t automatically add transparency. JPG images don\'t have transparency information, so the converted PNG will have a solid background. If you need transparency, you\'ll need to edit the image separately.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a file size limit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we support JPG files up to 10MB. This limit ensures fast processing in your browser. If your file is larger, consider using our Image Compressor tool first.',
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
    ],
  };

  return (
    <>
      <StructuredData data={faqSchema} />
      <ToolLayout
        title="JPG to PNG Converter"
        description="Convert JPG images to PNG format with transparency support. Ideal for graphics and logos."
      >
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'JPG to PNG Converter', href: '/jpg-to-png' },
          ]}
        />
      {/* Upload Section */}
      <div className="mb-8">
        <FileUpload
          onFileSelect={handleFileSelect}
          accept="image/jpeg,image/jpg"
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
            Convert to PNG
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
            Download PNG Image
          </PrimaryButton>
        </div>
      )}

      {/* SEO Content Section */}
      <section className="mb-12 prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Convert JPG to PNG Online - Free and Instant</h2>
        <p className="text-gray-700 mb-4">
          Need to convert JPG images to PNG format? Our free online JPG to PNG converter makes it simple. 
          Whether you&apos;re creating graphics with transparency, preparing logos for web use, or need lossless 
          image quality, converting JPG to PNG can help you achieve your goals.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What is JPG to PNG Conversion?</h3>
        <p className="text-gray-700 mb-4">
          JPG to PNG conversion is the process of changing an image file from JPG (Joint Photographic Experts Group) 
          format to PNG (Portable Network Graphics) format. JPG files use lossy compression and are optimized for 
          photographs, while PNG files are lossless and support transparency. Converting JPG to PNG is useful when 
          you need transparency support, lossless quality, or better compatibility for graphics and logos.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">When Should You Convert JPG to PNG?</h3>
        <p className="text-gray-700 mb-4">
          Convert JPG to PNG when:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>You need transparency support for logos or graphics</li>
          <li>You want lossless image quality without compression artifacts</li>
          <li>You&apos;re working with graphics, icons, or images with sharp edges</li>
          <li>You need to preserve image quality for professional use</li>
          <li>You&apos;re preparing images for print or high-quality displays</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Benefits of Converting JPG to PNG</h3>
        <p className="text-gray-700 mb-4">
          Converting JPG to PNG offers several advantages:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Transparency support:</strong> PNG supports alpha channels, allowing transparent backgrounds essential for logos and graphics</li>
          <li><strong>Lossless quality:</strong> PNG is a lossless format, preserving all image data without compression artifacts</li>
          <li><strong>Better for graphics:</strong> PNG is optimized for images with sharp edges, text, and limited colors</li>
          <li><strong>Professional quality:</strong> Ideal for print materials and high-resolution displays</li>
          <li><strong>No quality degradation:</strong> Unlike JPG, PNG doesn&apos;t lose quality with each save</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">How Our JPG to PNG Converter Works</h3>
        <p className="text-gray-700 mb-4">
          Our converter uses advanced browser-based processing to convert your JPG images to PNG format. 
          The conversion happens entirely in your browser using the Canvas API, which means:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>No file uploads to servers - complete privacy</li>
          <li>Instant processing - no waiting for uploads or downloads</li>
          <li>Lossless conversion preserving image quality</li>
          <li>Works offline after the initial page load</li>
          <li>No file size limits beyond browser capabilities</li>
        </ul>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use Our JPG to PNG Converter</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Upload Your JPG Image</h3>
              <p className="text-gray-600">
                Click or drag and drop your JPG image file. We support files up to 10MB.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Convert to PNG</h3>
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
              <h3 className="font-semibold text-gray-900 mb-1">Download Your PNG</h3>
              <p className="text-gray-600">
                Click the download button to save your converted PNG image to your device.
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
            <h3 className="font-semibold text-gray-900 mb-2">Why convert JPG to PNG?</h3>
            <p className="text-gray-600">
              PNG format supports transparency, which is essential for logos, graphics, and images that need transparent backgrounds. PNG is also lossless, meaning no quality is lost during conversion.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Will the file size increase?</h3>
            <p className="text-gray-600">
              Yes, PNG files are typically larger than JPG files because PNG is a lossless format. However, PNG is better suited for graphics, logos, and images that require transparency or high quality.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Can I add transparency to my JPG image?</h3>
            <p className="text-gray-600">
              Converting JPG to PNG doesn&apos;t automatically add transparency. JPG images don&apos;t have transparency information, so the converted PNG will have a solid background. If you need transparency, you&apos;ll need to edit the image separately.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Is there a file size limit?</h3>
            <p className="text-gray-600">
              Yes, we support JPG files up to 10MB. This limit ensures fast processing in your browser. If your file is larger, consider using our Image Compressor tool first.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Are my images stored on your servers?</h3>
            <p className="text-gray-600">
              No, absolutely not. All image processing happens directly in your browser. Your files never leave your device, ensuring complete privacy and security.
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
            href="/png-to-jpg"
            className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-gray-900 mb-1">PNG to JPG Converter</h3>
            <p className="text-sm text-gray-600">Convert PNG images to JPG format for smaller file sizes</p>
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

