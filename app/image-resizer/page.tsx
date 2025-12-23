'use client';

import { useState } from 'react';
import Link from 'next/link';
import ToolLayout from '@/components/ToolLayout';
import FileUpload from '@/components/FileUpload';
import ImagePreview from '@/components/ImagePreview';
import PrimaryButton from '@/components/PrimaryButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import StructuredData from '@/components/StructuredData';
import { resizeImage, validateImageFile } from '@/lib/imageUtils';
import { FAQPage } from '@/types/schema';

export default function ImageResizerPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [resizedBlob, setResizedBlob] = useState<Blob | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [maxWidth, setMaxWidth] = useState(1920);
  const [maxHeight, setMaxHeight] = useState(1080);

  const handleFileSelect = (file: File) => {
    const validation = validateImageFile(file);
    if (!validation.valid) {
      setError(validation.error || 'Invalid file');
      return;
    }

    setError(null);
    setSelectedFile(file);
    setResizedBlob(null);
  };

  const handleResize = async () => {
    if (!selectedFile) return;

    if (maxWidth < 1 || maxHeight < 1) {
      setError('Width and height must be at least 1 pixel.');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const blob = await resizeImage(selectedFile, maxWidth, maxHeight, 0.92);
      setResizedBlob(blob);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to resize image. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!resizedBlob || !selectedFile) return;

    const url = URL.createObjectURL(resizedBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `resized_${selectedFile.name}`;
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
        name: 'Will resizing affect image quality?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We use high-quality resizing algorithms to minimize quality loss. Making images smaller generally maintains good quality, while enlarging images may result in some quality reduction.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does the image maintain its aspect ratio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the image will be resized to fit within your specified dimensions while maintaining its original aspect ratio. This prevents distortion and keeps your image looking natural.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I resize to exact dimensions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The resizer maintains aspect ratio, so the image will fit within your specified dimensions. If you need exact dimensions that may change the aspect ratio, you would need image editing software.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the preset sizes for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The preset sizes match common social media and web platform requirements, making it easy to resize images for Instagram, Facebook, Twitter, LinkedIn, and YouTube.',
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

  const presetSizes = [
    { name: 'Instagram Post', width: 1080, height: 1080 },
    { name: 'Instagram Story', width: 1080, height: 1920 },
    { name: 'Facebook Cover', width: 1200, height: 630 },
    { name: 'Twitter Header', width: 1500, height: 500 },
    { name: 'LinkedIn Post', width: 1200, height: 627 },
    { name: 'YouTube Thumbnail', width: 1280, height: 720 },
  ];

  const applyPreset = (width: number, height: number) => {
    setMaxWidth(width);
    setMaxHeight(height);
  };

  return (
    <>
      <StructuredData data={faqSchema} />
      <ToolLayout
        title="Image Resizer"
        description="Resize images to any dimensions while maintaining quality. Great for social media and thumbnails."
      >
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Image Resizer', href: '/image-resizer' },
          ]}
        />
      {/* Upload Section */}
      <div className="mb-8">
        <FileUpload
          onFileSelect={handleFileSelect}
          accept="image/*"
          maxSizeMB={10}
        />
      </div>

      {/* Resize Settings */}
      {selectedFile && !resizedBlob && (
        <div className="mb-8 p-6 bg-white border border-gray-200 rounded-lg space-y-6">
          {/* Preset Sizes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Quick Presets
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {presetSizes.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => applyPreset(preset.width, preset.height)}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-left"
                >
                  <div className="font-medium text-gray-900">{preset.name}</div>
                  <div className="text-xs text-gray-600">{preset.width} × {preset.height}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Dimensions */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Width (px)
              </label>
              <input
                type="number"
                value={maxWidth}
                onChange={(e) => setMaxWidth(Number(e.target.value))}
                min="1"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Height (px)
              </label>
              <input
                type="number"
                value={maxHeight}
                onChange={(e) => setMaxHeight(Number(e.target.value))}
                min="1"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <p className="text-sm text-gray-600">
            The image will be resized to fit within these dimensions while maintaining its aspect ratio.
          </p>
        </div>
      )}

      {/* Resize Button */}
      {selectedFile && !resizedBlob && (
        <div className="mb-8 text-center">
          <PrimaryButton
            onClick={handleResize}
            isLoading={isProcessing}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            }
          >
            Resize Image
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
            processedBlob={resizedBlob || undefined}
            originalSize={selectedFile.size}
            processedSize={resizedBlob?.size}
          />
        </div>
      )}

      {/* Download Button */}
      {resizedBlob && (
        <div className="mb-12 text-center">
          <PrimaryButton
            onClick={handleDownload}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0L8 8m4-4v12" />
              </svg>
            }
          >
            Download Resized Image
          </PrimaryButton>
        </div>
      )}

      {/* SEO Content Section */}
      <section className="mb-12 prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Resize Images Online - Free and Instant</h2>
        <p className="text-gray-700 mb-4">
          Need to resize images? Our free online image resizer makes it easy to change image dimensions 
          while maintaining quality. Whether you&apos;re preparing photos for social media, creating thumbnails, 
          or fitting images to specific requirements, our resizer can help you achieve the perfect size.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What is Image Resizing?</h3>
        <p className="text-gray-700 mb-4">
          Image resizing is the process of changing the dimensions (width and height) of an image. Our resizer 
          uses high-quality algorithms to resize your images while maintaining aspect ratio and minimizing quality 
          loss. This is essential for optimizing images for different platforms, devices, and use cases.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">When Should You Resize Images?</h3>
        <p className="text-gray-700 mb-4">
          Resize images when:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>You need specific dimensions for social media posts</li>
          <li>You&apos;re creating thumbnails or preview images</li>
          <li>You want to optimize images for faster loading</li>
          <li>You need to fit images to specific layout requirements</li>
          <li>You&apos;re preparing images for print or display</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Benefits of Image Resizing</h3>
        <p className="text-gray-700 mb-4">
          Resizing images offers several advantages:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Platform optimization:</strong> Resize images to match social media and web platform requirements</li>
          <li><strong>Faster loading:</strong> Smaller dimensions mean smaller file sizes and faster page loads</li>
          <li><strong>Storage efficiency:</strong> Smaller images take up less storage space</li>
          <li><strong>Better performance:</strong> Optimized images improve website performance and user experience</li>
          <li><strong>Consistent sizing:</strong> Ensure all images have uniform dimensions for professional appearance</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">How Our Image Resizer Works</h3>
        <p className="text-gray-700 mb-4">
          Our resizer uses advanced browser-based processing to resize your images. The resizing happens entirely 
          in your browser using the Canvas API with high-quality algorithms, which means:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>No file uploads to servers - complete privacy</li>
          <li>Instant processing - no waiting for uploads or downloads</li>
          <li>High-quality resizing maintaining aspect ratio</li>
          <li>Works offline after the initial page load</li>
          <li>Preset sizes for popular social media platforms</li>
        </ul>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use Our Image Resizer</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Upload Your Image</h3>
              <p className="text-gray-600">
                Click or drag and drop your image file. We support JPG, PNG, and WebP files up to 10MB.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Set Dimensions</h3>
              <p className="text-gray-600">
                Choose a preset size or enter custom dimensions. The image will be resized while maintaining its aspect ratio.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Download Resized Image</h3>
              <p className="text-gray-600">
                Click the download button to save your resized image. Compare the dimensions to see the changes!
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
            <h3 className="font-semibold text-gray-900 mb-2">Will resizing affect image quality?</h3>
            <p className="text-gray-600">
              We use high-quality resizing algorithms to minimize quality loss. Making images smaller generally maintains good quality, while enlarging images may result in some quality reduction.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Does the image maintain its aspect ratio?</h3>
            <p className="text-gray-600">
              Yes, the image will be resized to fit within your specified dimensions while maintaining its original aspect ratio. This prevents distortion and keeps your image looking natural.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Can I resize to exact dimensions?</h3>
            <p className="text-gray-600">
              The resizer maintains aspect ratio, so the image will fit within your specified dimensions. If you need exact dimensions that may change the aspect ratio, you would need image editing software.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">What are the preset sizes for?</h3>
            <p className="text-gray-600">
              The preset sizes match common social media and web platform requirements, making it easy to resize images for Instagram, Facebook, Twitter, LinkedIn, and YouTube.
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
            href="/jpg-to-png"
            className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-gray-900 mb-1">JPG to PNG Converter</h3>
            <p className="text-sm text-gray-600">Convert JPG images to PNG format with transparency</p>
          </Link>
          <Link
            href="/image-compressor"
            className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-gray-900 mb-1">Image Compressor</h3>
            <p className="text-sm text-gray-600">Reduce image file sizes without losing quality</p>
          </Link>
        </div>
      </section>
    </ToolLayout>
    </>
  );
}

