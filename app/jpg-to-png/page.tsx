'use client';

import { useState } from 'react';
import ToolLayout from '@/components/ToolLayout';
import FileUpload from '@/components/FileUpload';
import ImagePreview from '@/components/ImagePreview';
import PrimaryButton from '@/components/PrimaryButton';
import { convertImageFormat, validateImageFile } from '@/lib/imageUtils';

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

  return (
    <ToolLayout
      title="JPG to PNG Converter"
      description="Convert JPG images to PNG format with transparency support. Ideal for graphics and logos."
    >
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

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
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
              Converting JPG to PNG doesn't automatically add transparency. JPG images don't have transparency information, so the converted PNG will have a solid background. If you need transparency, you'll need to edit the image separately.
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/png-to-jpg"
            className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-gray-900 mb-1">PNG to JPG</h3>
            <p className="text-sm text-gray-600">Convert PNG images to JPG format</p>
          </a>
          <a
            href="/image-compressor"
            className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-gray-900 mb-1">Image Compressor</h3>
            <p className="text-sm text-gray-600">Reduce image file sizes</p>
          </a>
          <a
            href="/image-resizer"
            className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-gray-900 mb-1">Image Resizer</h3>
            <p className="text-sm text-gray-600">Resize images to any dimensions</p>
          </a>
        </div>
      </section>
    </ToolLayout>
  );
}

