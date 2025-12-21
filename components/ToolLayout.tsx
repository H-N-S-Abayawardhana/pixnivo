import { ReactNode } from 'react';

interface ToolLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function ToolLayout({ title, description, children }: ToolLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          {title}
        </h1>
        
        {/* Description */}
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          {description}
        </p>

        {/* Trust Message */}
        <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800 text-center">
            <strong>🔒 Privacy First:</strong> All image processing happens directly in your browser. 
            Your files are never uploaded or stored on our servers.
          </p>
        </div>

        {/* Main Content */}
        {children}
      </div>
    </div>
  );
}

