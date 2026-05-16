
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  metadataBase: new URL("https://tejasfolio.in"),
  title: {
    default: "Tejas Patil | Software Developer | Pune | SPPU",
    template: "%s | Tejas Patil | TejasFolio",
  },
  description:
    "Official Portfolio of Tejas Patil (TejasFolio) - A Software Developer based in Pune, India. Savitribai Phule Pune University (SPPU) alumni. Specializing in Python, Java, Machine Learning, Full Stack Development, and Building Intelligent Scalable Software.",
  keywords: [
    "Tejas Patil",
    "TejasPatil",
    "TejasFolio",
    "tejasfolio",
    "tejasfolio.in",
    "Tejas Patil Pune",
    "Tejas Patil SPPU",
    "Tejas Patil Software Developer",
    "Tejas Patil IT",
    "Tejas Patil Developer",
    "Tejas Patil Portfolio",
    "Tejas Patil GitHub",
    "tejas164321",
    "Tejas Patil LinkedIn",
    "tejasin",
    "Software Developer Pune",
    "Machine Learning Developer India",
    "Full Stack Developer Pune",
    "Building Intelligent Scalable Software",
    "Tejas Patil Medium",
    "tejas164321 medium"
  ],
  authors: [{ name: "Tejas Patil", url: "https://tejasfolio.in" }],
  creator: "Tejas Patil",
  publisher: "Tejas Patil",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tejas Patil | Software Developer | Pune",
    description:
      "Welcome to TejasFolio! Official portfolio of Tejas Patil - Software Developer and AI Developer based in Pune, India.",
    url: "https://tejasfolio.in",
    siteName: "Tejas Patil Portfolio (TejasFolio)",
    locale: "en_IN",
    type: "website",
    emails: ["tejaspatil164321@gmail.com"], // Good for rich cards if relevant
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejas Patil | Software Developer | Pune",
    description:
      "Official portfolio of Tejas Patil (TejasFolio). Software Developer and AI Developer building Intelligent Scalable Software.",
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
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tejas Patil",
  alternateName: ["TejasPatil", "Tejas164321", "tejasin"],
  url: "https://tejasfolio.in",
  image: "https://tejasfolio.in/profile.jpg",
  jobTitle: "Software Developer",
  description:
    "Tejas Patil is a Software Developer based in Pune, India, specializing in Full Stack Development, AI/ML, Cloud Computing, and Building Intelligent Scalable Software.",
  worksFor: {
    "@type": "Organization",
    name: "Savitribai Phule Pune University",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Savitribai Phule Pune University (SPPU)",
    url: "http://www.unipune.ac.in/"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Computer Engineering",
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
    "https://www.linkedin.com/in/tejasin",
    "https://github.com/Tejas164321",
    "https://tejas164321.medium.com/",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TejasFolio - Tejas Patil Portfolio",
  alternateName: ["TejasFolio", "Tejas Patil Portfolio", "Tejas Patil"],
  url: "https://tejasfolio.in",
  description:
    "Official portfolio website (TejasFolio) of Tejas Patil - Computer Engineer and Software Developer based in Pune, India.",
  author: {
    "@type": "Person",
    name: "Tejas Patil",
    url: "https://tejasfolio.in"
  },
  keywords: "Tejas Patil, TejasFolio, Tejas Patil Pune, Tejas Patil SPPU, software developer"
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
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
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
