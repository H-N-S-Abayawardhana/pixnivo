'use client';

import { useState } from 'react';
import Link from 'next/link';
import ToolLayout from '@/components/ToolLayout';
import FileUpload from '@/components/FileUpload';
import ImagePreview from '@/components/ImagePreview';
import PrimaryButton from '@/components/PrimaryButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import StructuredData from '@/components/StructuredData';
import { compressImage, validateImageFile } from '@/lib/imageUtils';
import { FAQPage } from '@/types/schema';

export default function ImageCompressorPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [compressedFile, setCompressedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [maxSizeMB, setMaxSizeMB] = useState(1);

  const handleFileSelect = (file: File) => {
    const validation = validateImageFile(file);
    if (!validation.valid) {
      setError(validation.error || 'Invalid file');
      return;
    }

    setError(null);
    setSelectedFile(file);
    setCompressedFile(null);
  };

  const handleCompress = async () => {
    if (!selectedFile) return;

    setIsProcessing(true);
    setError(null);

    try {
      const compressed = await compressImage(selectedFile, maxSizeMB, 1920);
      setCompressedFile(compressed);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to compress image. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!compressedFile) return;

    const url = URL.createObjectURL(compressedFile);
    const a = document.createElement('a');
    a.href = url;
    a.download = `compressed_${compressedFile.name}`;
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
        name: 'Will compression reduce image quality?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our compression uses smart algorithms to reduce file size while maintaining good visual quality. You can see both images side-by-side to compare quality before downloading.',
        },
      },
      {
        '@type': 'Question',
        name: 'What file sizes can I compress to?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can choose from 0.5MB, 1MB, 2MB, or 5MB target sizes. The actual result may vary slightly, but we\'ll get as close as possible while maintaining quality.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why should I compress images?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Compressed images load faster on websites, take up less storage space, and are easier to share via email or messaging. This is especially important for web optimization and mobile users.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I compress images multiple times?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, you can compress an image multiple times, but each compression may result in some quality loss. We recommend compressing once to your desired size rather than multiple times.',
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
        title="Image Compressor"
        description="Reduce image file sizes without losing quality. Perfect for web optimization and faster loading."
      >
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Image Compressor', href: '/image-compressor' },
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

      {/* Compression Settings */}
      {selectedFile && !compressedFile && (
        <div className="mb-8 p-6 bg-white border border-gray-200 rounded-lg">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target File Size (MB)
          </label>
          <select
            value={maxSizeMB}
            onChange={(e) => setMaxSizeMB(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value={0.5}>0.5 MB</option>
            <option value={1}>1 MB</option>
            <option value={2}>2 MB</option>
            <option value={5}>5 MB</option>
          </select>
          <p className="mt-2 text-sm text-gray-600">
            The image will be compressed to approximately this size while maintaining good quality.
          </p>
        </div>
      )}

      {/* Compress Button */}
      {selectedFile && !compressedFile && (
        <div className="mb-8 text-center">
          <PrimaryButton
            onClick={handleCompress}
            isLoading={isProcessing}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            }
          >
            Compress Image
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
            processedBlob={compressedFile || undefined}
            originalSize={selectedFile.size}
            processedSize={compressedFile?.size}
          />
        </div>
      )}

      {/* Download Button */}
      {compressedFile && (
        <div className="mb-12 text-center">
          <PrimaryButton
            onClick={handleDownload}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0L8 8m4-4v12" />
              </svg>
            }
          >
            Download Compressed Image
          </PrimaryButton>
        </div>
      )}

      {/* SEO Content Section */}
      <section className="mb-12 prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Compress Images Online - Free and Instant</h2>
        <p className="text-gray-700 mb-4">
          Need to reduce image file sizes? Our free online image compressor makes it easy to shrink image files 
          without noticeable quality loss. Whether you're optimizing images for your website, preparing photos for 
          email, or saving storage space, image compression can help you achieve smaller file sizes while maintaining 
          good visual quality.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What is Image Compression?</h3>
        <p className="text-gray-700 mb-4">
          Image compression is the process of reducing the file size of an image while maintaining acceptable visual 
          quality. Our compressor uses smart algorithms to analyze your image and remove unnecessary data, resulting 
          in smaller files that load faster and take up less storage space.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">When Should You Compress Images?</h3>
        <p className="text-gray-700 mb-4">
          Compress images when:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>You need faster website loading times</li>
          <li>You're sending images via email and want smaller attachments</li>
          <li>You want to save storage space on your device or server</li>
          <li>You're optimizing images for mobile users with limited data</li>
          <li>You need to meet file size requirements for uploads</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Benefits of Image Compression</h3>
        <p className="text-gray-700 mb-4">
          Compressing images offers several advantages:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Faster loading:</strong> Smaller files mean faster page load times and better user experience</li>
          <li><strong>Bandwidth savings:</strong> Reduced data usage for mobile users and lower hosting costs</li>
          <li><strong>Storage efficiency:</strong> Save space on your devices, servers, or cloud storage</li>
          <li><strong>Better SEO:</strong> Faster websites rank higher in search results</li>
          <li><strong>Email-friendly:</strong> Smaller files are easier to send via email without hitting size limits</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">How Our Image Compressor Works</h3>
        <p className="text-gray-700 mb-4">
          Our compressor uses advanced browser-based processing to reduce your image file sizes. The compression 
          happens entirely in your browser using optimized algorithms, which means:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>No file uploads to servers - complete privacy</li>
          <li>Instant processing - no waiting for uploads or downloads</li>
          <li>Smart compression maintaining visual quality</li>
          <li>Works offline after the initial page load</li>
          <li>Multiple target size options for flexibility</li>
        </ul>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use Our Image Compressor</h2>
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
              <h3 className="font-semibold text-gray-900 mb-1">Choose Target Size</h3>
              <p className="text-gray-600">
                Select your desired file size. Our smart compression will reduce the file size while maintaining good visual quality.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Download Compressed Image</h3>
              <p className="text-gray-600">
                Click the download button to save your compressed image. Compare the file sizes to see the savings!
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
            <h3 className="font-semibold text-gray-900 mb-2">Will compression reduce image quality?</h3>
            <p className="text-gray-600">
              Our compression uses smart algorithms to reduce file size while maintaining good visual quality. You can see both images side-by-side to compare quality before downloading.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">What file sizes can I compress to?</h3>
            <p className="text-gray-600">
              You can choose from 0.5MB, 1MB, 2MB, or 5MB target sizes. The actual result may vary slightly, but we'll get as close as possible while maintaining quality.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Why should I compress images?</h3>
            <p className="text-gray-600">
              Compressed images load faster on websites, take up less storage space, and are easier to share via email or messaging. This is especially important for web optimization and mobile users.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Can I compress images multiple times?</h3>
            <p className="text-gray-600">
              Yes, you can compress an image multiple times, but each compression may result in some quality loss. We recommend compressing once to your desired size rather than multiple times.
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

