import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'TejasFolio - Tejas Patil Portfolio',
        short_name: 'TejasFolio',
        description: 'Official portfolio of Tejas Patil - Computer Engineer, Software Developer, and AI Enthusiast in Pune, India.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#FF4500',
        icons: [
            {
                src: '/favicon.png',
                sizes: '16x16 32x32 48x48',
                type: 'image/x-icon',
            },
            // You can add more larger icons here if you add them to the public folder (e.g., 192x192, 512x512)
        ],
    }
}
