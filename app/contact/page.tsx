import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us – PixNivo',
  description: 'Get in touch with PixNivo. We welcome your questions, feedback, and suggestions.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            We'd love to hear from you! Whether you have questions, feedback, or suggestions for 
            improving PixNivo, please don't hesitate to reach out.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-8 mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              For general inquiries, feedback, or support, please email us at:
            </p>
            <p className="text-lg">
              <a 
                href="mailto:contact@pixnivo.com" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                contact@pixnivo.com
              </a>
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h2>
          <p>
            Before contacting us, you might find answers to common questions in our tool pages 
            or on our <a href="/blog" className="text-blue-600 hover:text-blue-700">blog</a>.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Response Time</h2>
          <p>
            We aim to respond to all inquiries within 48 hours. Thank you for your patience!
          </p>
        </div>
      </div>
    </div>
  );
}

