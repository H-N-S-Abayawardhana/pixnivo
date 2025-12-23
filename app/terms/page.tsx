import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service – PixNivo',
  description: 'PixNivo terms of service. Read our terms and conditions for using our free image tools.',
  keywords: [
    'pixnivo terms of service',
    'image converter terms',
    'terms and conditions',
    'image tools terms',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/terms`,
  },
  openGraph: {
    title: 'Terms of Service – PixNivo',
    description: 'PixNivo terms of service. Read our terms and conditions for using our free image tools.',
    url: `${SITE_CONFIG.url}/terms`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}${SITE_CONFIG.defaultImage}`,
        width: 1200,
        height: 630,
        alt: 'PixNivo Terms of Service',
      },
    ],
    locale: SITE_CONFIG.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service – PixNivo',
    description: 'PixNivo terms of service. Read our terms and conditions for using our free image tools.',
    images: [`${SITE_CONFIG.url}${SITE_CONFIG.defaultImage}`],
    creator: SITE_CONFIG.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
          <p>
            By accessing and using PixNivo, you accept and agree to be bound by the terms and 
            provision of this agreement.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Use License</h2>
          <p>
            Permission is granted to temporarily use PixNivo for personal, non-commercial use. 
            This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the service for any illegal purpose</li>
            <li>Attempt to reverse engineer or extract source code</li>
            <li>Use automated systems to access the service excessively</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Service Availability</h2>
          <p>
            PixNivo is provided &quot;as is&quot; without warranties of any kind. We strive to keep the service 
            available, but we do not guarantee uninterrupted access.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">User Responsibilities</h2>
          <p>
            You are responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ensuring you have the right to process any images you upload</li>
            <li>Complying with all applicable laws and regulations</li>
            <li>Not using the service to process illegal or harmful content</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
          <p>
            PixNivo shall not be liable for any indirect, incidental, special, consequential, or 
            punitive damages resulting from your use of the service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Privacy</h2>
          <p>
            Your use of PixNivo is also governed by our{' '}
            <a href="/privacy-policy" className="text-blue-600 hover:text-blue-700">Privacy Policy</a>. 
            Please review our Privacy Policy to understand our practices.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Your continued use of the service 
            after any changes constitutes acceptance of those changes.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please{' '}
            <a href="/contact" className="text-blue-600 hover:text-blue-700">contact us</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

