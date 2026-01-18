'use client';

import { useEffect, useMemo, useState } from 'react';
import { formatFileSize } from '@/lib/imageUtils';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

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
  const [imageError, setImageError] = useState<string | null>(null);

  // Use useMemo to create URLs instead of useState in useEffect
  const previewUrl = useMemo(() => {
    return URL.createObjectURL(originalFile);
  }, [originalFile]);

  const processedUrl = useMemo(() => {
    if (processedBlob) {
      return URL.createObjectURL(processedBlob);
    }
    return null;
  }, [processedBlob]);

  useEffect(() => {
    // Cleanup
    return () => {
      URL.revokeObjectURL(previewUrl);
      if (processedUrl) {
        URL.revokeObjectURL(processedUrl);
      }
    };
  }, [previewUrl, processedUrl]);

  const compressionRatio = originalSize && processedSize
    ? ((1 - processedSize / originalSize) * 100).toFixed(1)
    : null;

  const handleImageError = () => {
    setImageError('Failed to load image. Please try again.');
  };

  return (
    <div className="space-y-6">
      {/* Original Image */}
      {previewUrl && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Original Image
          </h3>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            {imageError ? (
              <div className="text-center py-8">
                <p className="text-sm text-red-600">{imageError}</p>
              </div>
            ) : (
              <img
                src={previewUrl}
                alt={`Original image: ${originalFile.name}`}
                className="max-w-full h-auto rounded-lg mx-auto"
                onError={handleImageError}
                loading="lazy"
              />
            )}
            <p className="text-sm text-gray-600 mt-2 text-center">
              {originalFile.name} ({formatFileSize(originalFile.size)})
            </p>
          </div>
        </div>
      )}

      {/* Processed Image */}
      {processedBlob && processedUrl !== null && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            Processed Image
            <CheckCircleIcon className="h-5 w-5 text-green-600" aria-hidden="true" />
          </h3>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <img
              src={processedUrl}
              alt={`Processed image: ${originalFile.name}`}
              className="max-w-full h-auto rounded-lg mx-auto"
              loading="lazy"
            />
            <div className="mt-2 text-sm text-gray-600 text-center space-y-1">
              <p>
                {formatFileSize(processedSize || processedBlob.size)}
              </p>
              {compressionRatio && (
                <p className="text-green-600 font-medium flex items-center justify-center gap-1">
                  <CheckCircleIcon className="h-4 w-4" aria-hidden="true" />
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

