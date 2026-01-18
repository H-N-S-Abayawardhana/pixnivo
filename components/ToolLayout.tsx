import { ReactNode } from 'react';
import { LockClosedIcon } from '@heroicons/react/24/outline';

interface ToolLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function ToolLayout({ title, description, children }: ToolLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-8 pb-12 md:pt-12">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 text-center">
          {title}
        </h1>
        
        {/* Description */}
        <p className="text-lg text-gray-600 mb-6 text-center max-w-2xl mx-auto">
          {description}
        </p>

        {/* Trust Message */}
        <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800 flex items-start justify-center gap-2">
            <LockClosedIcon className="h-4 w-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <span className="text-center">
              <strong>Privacy First:</strong> All image processing happens directly in your browser. 
              Your files are never uploaded or stored on our servers.
            </span>
          </p>
        </div>

        {/* Main Content */}
        {children}
      </div>
    </div>
  );
}

