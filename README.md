# PixNivo - Free Online Image Converter & Tools

PixNivo is a modern, privacy-first web application that provides free online image conversion and optimization tools. All image processing happens directly in your browser - no uploads, no watermarks, and complete privacy.

## 🌟 Features

- **PNG to JPG Converter** - Convert PNG images to JPG format instantly
- **JPG to PNG Converter** - Convert JPG images to PNG format with transparency support
- **Image Compressor** - Reduce image file sizes without losing quality
- **Image Resizer** - Resize images to any dimensions while maintaining aspect ratio
- **100% Browser-Based** - All processing happens in your browser using Canvas API
- **Privacy-First** - Your files never leave your device
- **No Sign-Up Required** - Use all tools completely free
- **No Watermarks** - Clean, professional results
- **SEO Optimized** - Built with structured data and meta tags for better search visibility

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.1.0](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Image Processing**: 
  - Canvas API for format conversion and resizing
  - [browser-image-compression](https://www.npmjs.com/package/browser-image-compression) for compression
- **Analytics**: Vercel Analytics
- **Fonts**: Geist Sans & Geist Mono (via Next.js font optimization)

## 📁 Project Structure

```
pixnivo/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog posts
│   ├── contact/           # Contact page
│   ├── image-compressor/  # Image compression tool
│   ├── image-resizer/     # Image resizing tool
│   ├── jpg-to-png/        # JPG to PNG converter
│   ├── png-to-jpg/        # PNG to JPG converter
│   ├── privacy-policy/    # Privacy policy page
│   ├── terms/             # Terms of service page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── robots.ts          # Robots.txt generation
│   └── sitemap.ts         # Sitemap generation
├── components/            # React components
│   ├── Breadcrumbs.tsx
│   ├── FileUpload.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ImagePreview.tsx
│   ├── PrimaryButton.tsx
│   ├── StructuredData.tsx
│   └── ToolLayout.tsx
├── lib/                   # Utility functions
│   └── imageUtils.ts      # Image processing utilities
├── types/                 # TypeScript type definitions
│   └── schema.ts          # Structured data schemas
└── public/                # Static assets
    └── pixnivo_logo.png
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pixnivo
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Available Tools

### PNG to JPG Converter
Convert PNG images to JPG format to reduce file sizes and improve compatibility. Perfect for photos and images that don't need transparency.

### JPG to PNG Converter
Convert JPG images to PNG format with support for transparency. Ideal for graphics, logos, and images that need transparent backgrounds.

### Image Compressor
Reduce image file sizes without noticeable quality loss. Supports target sizes of 0.5MB, 1MB, 2MB, or 5MB. Perfect for web optimization and faster loading.

### Image Resizer
Resize images to specific dimensions while maintaining aspect ratio. Great for creating thumbnails, social media images, or fitting images to specific requirements.

## 🔒 Privacy & Security

- **100% Client-Side Processing**: All image processing happens in your browser using the Canvas API
- **No Server Uploads**: Your files never leave your device
- **No Data Storage**: We don't store, track, or log your images
- **No Cookies Required**: Works without tracking cookies
- **Open Source**: Transparent codebase for security auditing

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Image Processing Implementation

All image processing utilities are located in `lib/imageUtils.ts`:

- `convertImageFormat()` - Converts between PNG and JPG using Canvas API
- `compressImage()` - Compresses images using browser-image-compression library
- `resizeImage()` - Resizes images while maintaining aspect ratio
- `validateImageFile()` - Validates file type and size (max 10MB)
- `formatFileSize()` - Formats file size for display

### Supported File Formats

- JPEG/JPG
- PNG
- WebP

### File Size Limits

- Maximum upload size: 10MB per file
- Compression target sizes: 0.5MB, 1MB, 2MB, 5MB

## 📱 Browser Support

Works in all modern browsers that support:
- Canvas API
- FileReader API
- ES6+ JavaScript features

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy PixNivo is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

### Environment Variables

No environment variables are required for basic functionality. The app works out of the box.

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For questions or suggestions, please contact the project maintainers.

## 📞 Support

For support, visit the [Contact page](https://pixnivo.com/contact) or check out the [About page](https://pixnivo.com/about) for more information.

---

Built with ❤️ using Next.js and TypeScript
