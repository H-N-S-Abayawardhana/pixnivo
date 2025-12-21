'use client';

import { useState, useEffect } from 'react';
import { formatFileSize } from '@/lib/imageUtils';

interface ImagePreviewProps {
  originalFile: File;
  processedBlob?: Blob | File;
  originalSize?: number;
  processedSize?: number;
}

export default function ImagePreview({
  originalFile,
  processedBlob,
  originalSize,
  processedSize,
}: ImagePreviewProps) {
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [processedUrl, setProcessedUrl] = useState<string>('');

  useEffect(() => {
    // Create preview URL for original
    const url = URL.createObjectURL(originalFile);
    setPreviewUrl(url);

    // Create preview URL for processed
    let processedUrlValue: string | null = null;
    if (processedBlob) {
      processedUrlValue = URL.createObjectURL(processedBlob);
      setProcessedUrl(processedUrlValue);
    } else {
      setProcessedUrl('');
    }

    // Cleanup
    return () => {
      URL.revokeObjectURL(url);
      if (processedUrlValue) {
        URL.revokeObjectURL(processedUrlValue);
      }
    };
  }, [originalFile, processedBlob]);

  const compressionRatio = originalSize && processedSize
    ? ((1 - processedSize / originalSize) * 100).toFixed(1)
    : null;

  return (
    <div className="space-y-6">
      {/* Original Image */}
      {previewUrl && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Original Image
          </h3>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <img
              src={previewUrl}
              alt="Original"
              className="max-w-full h-auto rounded-lg mx-auto"
            />
            <p className="text-sm text-gray-600 mt-2 text-center">
              {originalFile.name} ({formatFileSize(originalFile.size)})
            </p>
          </div>
        </div>
      )}

      {/* Processed Image */}
      {processedBlob && processedUrl && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Processed Image
          </h3>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <img
              src={processedUrl}
              alt="Processed"
              className="max-w-full h-auto rounded-lg mx-auto"
            />
            <div className="mt-2 text-sm text-gray-600 text-center space-y-1">
              <p>
                {formatFileSize(processedSize || processedBlob.size)}
              </p>
              {compressionRatio && (
                <p className="text-green-600 font-medium">
                  {compressionRatio}% smaller
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

