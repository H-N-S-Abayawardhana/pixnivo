import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: 'PixNivo',
    description: SITE_CONFIG.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/pixnivo_logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
    categories: ['utilities', 'productivity'],
    lang: 'en',
    orientation: 'portrait-primary',
  };
}

