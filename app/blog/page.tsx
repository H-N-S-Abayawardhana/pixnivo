import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog – PixNivo Image Tools',
  description: 'Learn about image formats, optimization tips, and best practices for working with images.',
};

const blogPosts = [
  {
    title: 'PNG vs JPG: Which Format Should You Use?',
    description: 'Learn the differences between PNG and JPG formats and when to use each one.',
    href: '/blog/png-vs-jpg',
    date: '2024-01-15',
  },
  {
    title: 'How to Compress Images Without Losing Quality',
    description: 'Discover techniques for reducing image file sizes while maintaining visual quality.',
    href: '/blog/how-to-compress-images',
    date: '2024-01-10',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Blog</h1>
        <p className="text-lg text-gray-600 mb-12">
          Tips, guides, and insights about image formats, optimization, and best practices.
        </p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition-all"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-3">{post.description}</p>
              <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

