import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'TejasFolio — Tejas Patil Portfolio',
        short_name: 'TejasFolio',
        description: 'Official portfolio of Tejas Patil (tejas164321) — Software Developer from Pune, India. Specializing in Full Stack Development, Gen AI, and building production-grade applications.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a0a0a',
        theme_color: '#FF4500',
        icons: [
            {
                src: '/favicon.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/favicon.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
            },
        ],
    }
}
