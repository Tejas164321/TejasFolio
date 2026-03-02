
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  metadataBase: new URL("https://tejasfolio.in"),
  title: {
    default: "Tejas Patil | IT Engineer | Software Developer | Pune",
    template: "%s | Tejas Patil",
  },
  description:
    "Tejas Patil is an IT Engineer and Software Developer based in Pune, India. Skilled in Python, Java, Machine Learning, Full Stack Development, and AI systems.",
  keywords: [
    "Tejas Patil",
    "TejasPatil",
    "Tejas Patil Pune",
    "Tejas Patil IT",
    "Tejas Patil Developer",
    "Tejas Patil SPPU",
    "Tejas Patil Portfolio",
    "Software Developer Pune",
    "IT Engineer Pune",
    "Machine Learning Developer India",
  ],
  authors: [{ name: "Tejas Patil" }],
  creator: "Tejas Patil",
  alternates: {
    canonical: "https://tejasfolio.in",
  },
  openGraph: {
    title: "Tejas Patil | IT Engineer | Software Developer | Pune",
    description:
      "Official portfolio of Tejas Patil - IT Engineer, AI Developer, and Full Stack Developer based in Pune.",
    url: "https://tejasfolio.in",
    siteName: "Tejas Patil Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejas Patil | Software Developer | Pune",
    description:
      "Official portfolio of Tejas Patil - IT Engineer and AI Developer.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tejas Patil",
  alternateName: "TejasPatil",
  url: "https://tejasfolio.in",
  image: "https://tejasfolio.in/profile.jpg",
  jobTitle: "IT Engineer and Software Developer",
  description:
    "Tejas Patil is an IT Engineer and Software Developer based in Pune, India, specializing in Full Stack Development, AI/ML, and Cloud Computing.",
  worksFor: {
    "@type": "Organization",
    name: "Savitribai Phule Pune University",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Savitribai Phule Pune University",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Java",
    "Python",
    "Machine Learning",
    "Full Stack Development",
    "MERN Stack",
    "Artificial Intelligence",
    "Cloud Computing",
    "RESTful APIs",
  ],
  sameAs: [
    "https://www.linkedin.com/in/tejaspatil1643b",
    "https://github.com/Tejas164321",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tejas Patil Portfolio",
  alternateName: "TejasFolio",
  url: "https://tejasfolio.in",
  description:
    "Official portfolio website of Tejas Patil - IT Engineer and Software Developer based in Pune, India.",
  author: {
    "@type": "Person",
    name: "Tejas Patil",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
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
      </body>
    </html>
  );
}
