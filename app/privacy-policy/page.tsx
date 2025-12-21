import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy – PixNivo',
  description: 'PixNivo privacy policy. Learn how we protect your privacy and handle your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Introduction</h2>
          <p>
            At PixNivo, we take your privacy seriously. This Privacy Policy explains how we handle 
            your information when you use our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">No File Uploads</h2>
          <p>
            <strong>Important:</strong> All image processing on PixNivo happens directly in your 
            web browser. We do not upload your files to our servers. Your images never leave your device.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          <p>
            Since all processing happens in your browser, we do not collect or store your image files. 
            We may collect:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Basic usage analytics (page views, tool usage) through standard web analytics</li>
            <li>Information provided through contact forms (if you contact us)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Information</h2>
          <p>
            Any information we collect is used solely to improve our services and user experience. 
            We do not sell or share your information with third parties.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookies</h2>
          <p>
            We may use cookies to improve your experience on our website. These cookies are used for 
            analytics and functionality purposes only.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
          <p>
            We may use third-party services for analytics (such as Google Analytics). These services 
            have their own privacy policies.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use our services without providing personal information</li>
            <li>Process images completely privately in your browser</li>
            <li>Contact us with any privacy concerns</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes 
            by posting the new Privacy Policy on this page.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please{' '}
            <a href="/contact" className="text-blue-600 hover:text-blue-700">contact us</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

