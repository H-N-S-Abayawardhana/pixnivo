'use client';

import { useState, useEffect, useMemo } from 'react';
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
      {processedBlob && processedUrl !== null && (
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

