import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Trust Message */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/pixnivo_logo.png"
              alt="PixNivo Logo"
              width={120}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-gray-600 max-w-md">
              Free, fast, and secure image conversion tools. All processing happens in your browser - your files never leave your device.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/png-to-jpg"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  PNG to JPG
                </Link>
              </li>
              <li>
                <Link
                  href="/jpg-to-png"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  JPG to PNG
                </Link>
              </li>
              <li>
                <Link
                  href="/image-compressor"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Image Compressor
                </Link>
              </li>
              <li>
                <Link
                  href="/image-resizer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Image Resizer
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} PixNivo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

