import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'Tejasfolio | Tejas Patil – Full Stack Developer Portfolio',
    template: '%s | Tejasfolio',
  },
  description: 'Tejasfolio is the professional portfolio of Tejas Patil, a Full Stack Developer specializing in AI, ML, and modern web technologies. Explore projects, skills, and experience.',
  keywords: ['Tejasfolio', 'Tejas Patil', 'Full Stack Developer', 'Software Engineer', 'Portfolio', 'AI', 'Machine Learning', 'Web Development', 'React', 'Next.js', 'Python', 'Java', 'MERN Stack', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'Genkit', 'Firebase', 'tejaspatil1643', 'tejas2382004', 'Tejas164321'],
  authors: [{ name: 'Tejas Patil', url: 'https://tejasfolio.site' }],
  creator: 'Tejas Patil',
  metadataBase: new URL('https://tejasfolio.site'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tejasfolio | Tejas Patil – Full Stack Developer Portfolio',
    description: 'Explore Tejasfolio, the professional portfolio of Tejas Patil, showcasing expertise in Full Stack Development, AI, and Machine Learning.',
    url: 'https://tejasfolio.site',
    siteName: 'Tejasfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png', // We will need to make sure this exists or use a default
        width: 1200,
        height: 630,
        alt: 'Tejasfolio - Tejas Patil Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tejasfolio | Tejas Patil – Full Stack Developer Portfolio',
    description: 'Explore Tejasfolio, the professional portfolio of Tejas Patil, showcasing expertise in Full Stack Development, AI, and Machine Learning.',
    creator: '@TejasPatil', // Replace with actual handle if known, otherwise generic or omit
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Tejasfolio',
  url: 'https://tejasfolio.site',
  author: {
    '@type': 'Person',
    name: 'Tejas Patil',
    url: 'https://tejasfolio.site',
    email: 'tejaspatil1643@gmail.com',
    sameAs: [
      'https://github.com/Tejas164321',
      'https://www.linkedin.com/in/tejaspatil1643b',
      'mailto:tejas2382004@gmail.com',
      'mailto:tejaspatil1643@gmail.com'
    ]
  },
  hasPart: [
    {
      '@type': 'SoftwareSourceCode',
      name: 'AI-Powered Resume Screening & Ranking System',
      description: 'NLP-based AI system to automate candidate evaluation.',
      programmingLanguage: 'Python',
      codeRepository: 'https://github.com/Tejas164321/AI-Powered-Resume-Parser-Rancker'
    },
    {
      '@type': 'SoftwareSourceCode',
      name: 'Personal Expense Manager',
      description: 'Full-stack finance tracker with JWT auth and MongoDB.',
      programmingLanguage: 'JavaScript',
      codeRepository: 'https://github.com/Tejas164321/MyExpenceManager-MERN-'
    },
    {
      '@type': 'SoftwareSourceCode',
      name: 'JavaFX Bus Booking Application',
      description: 'GUI-based booking system using JavaFX + MySQL.',
      programmingLanguage: 'Java',
      codeRepository: 'https://github.com/Tejas164321/Online-Bus-Booking-Platform'
    }
  ],
  description: 'Tejasfolio is the professional portfolio of Tejas Patil, a Full Stack Developer specializing in AI, ML, and modern web technologies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-body antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow animate-fadeInPage">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
