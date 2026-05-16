
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
    "Official Portfolio of Tejas Patil (TejasFolio) — Software Developer from Pune, India. SPPU alumni specializing in Full Stack Development (MERN, Next.js), Gen AI, Python, and building production-grade applications.",
  keywords: [
    // Core name variants
    "Tejas Patil",
    "TejasPatil",
    "Tejas Vijay Patil",
    "tejaspatil",
    "tejas patil pune",
    "tejas patil developer",
    "tejas patil software developer",
    "tejas patil portfolio",
    "tejas patil github",
    "tejas patil linkedin",
    "tejas patil medium",
    "tejas patil sppu",
    "tejas patil savitribai phule pune university",
    "tejas patil india",
    "tejas patil maharashtra",
    "patil tejas",
    "patil tejas vijay",

    // Social handle / ID based searches
    "TejasFolio",
    "tejasfolio",
    "tejasfolio.in",
    "tejas164321",
    "Tejas164321",
    "164321",
    "tejasin",
    "tejas164321 github",
    "tejas164321 linkedin",
    "tejas164321 medium",
    "Tejas164321 github",

    // Email based searches
    "tejas2382004",
    "tejaspatil1643",
    "tejas2382004@gmail.com",
    "tejaspatil1643@gmail.com",
    "tejaspatil164321@gmail.com",

    // Role & skill-based searches
    "Software Developer Pune",
    "Full Stack Developer Pune",
    "Full Stack Developer India",
    "Next.js Developer Pune",
    "MERN Stack Developer Pune",
    "React Developer Pune",
    "Gen AI Developer",
    "AI Developer India",
    "Machine Learning Developer India",
    "Python Developer Pune",
    "Firebase Developer",
    "Node.js Developer Pune",
    "Web Developer Pune",
    "App Developer Pune",

    // Natural search phrases
    "best portfolio site Pune developer",
    "tejas patil portfolio website",
    "who is tejas patil developer",
    "tejas patil projects",
    "tejas patil skills",
    "tejas patil resume",
    "tejas patil contact",
    "tejas patil open source",
    "tejas patil hackathon",
    "tejas patil sih",
    "tejas patil smart india hackathon",
    "tejas patil alkimi movefwd",
    "tejas patil finpal",
    "tejas patil mydinner",
    "tejas patil ai recruiter",
    "tejas patil dairy nine",

    // Brand / site keyword
    "Building Intelligent Scalable Software",
    "Gen AI Powered Applications",
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
      "Welcome to TejasFolio — Official portfolio of Tejas Patil (tejas164321). Software Developer from Pune building production-grade Full Stack & Gen AI powered applications.",
    url: "https://tejasfolio.in",
    siteName: "TejasFolio — Tejas Patil Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tejas Patil — Software Developer | TejasFolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejas Patil | Software Developer | Pune",
    description:
      "Official portfolio of Tejas Patil (TejasFolio | tejas164321). Software Developer building Full Stack & Gen AI powered applications from Pune, India.",
    images: ["/og-image.png"],
    creator: "@tejasin",
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
    // google: "your-google-search-console-code",
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tejas Patil",
  alternateName: [
    "TejasPatil",
    "Tejas Vijay Patil",
    "Tejas164321",
    "tejas164321",
    "tejasin",
    "TejasFolio",
  ],
  url: "https://tejasfolio.in",
  image: "https://tejasfolio.in/og-image.png",
  jobTitle: "Software Developer",
  description:
    "Tejas Patil (tejas164321) is a Software Developer from Pune, India, specializing in Full Stack Development, Gen AI, MERN Stack, Next.js, Python, and building production-grade scalable applications.",
  email: [
    "tejaspatil164321@gmail.com",
    "tejas2382004@gmail.com",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Savitribai Phule Pune University (SPPU)",
    url: "http://www.unipune.ac.in/",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Full Stack Development",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "Machine Learning",
    "Gen AI",
    "Large Language Models",
    "Firebase",
    "MongoDB",
    "REST APIs",
    "Cloud Computing",
    "Software Development",
  ],
  sameAs: [
    "https://www.linkedin.com/in/tejasin",
    "https://github.com/Tejas164321",
    "https://tejas164321.medium.com/",
    "https://tejasfolio.in",
  ],
  identifier: [
    {
      "@type": "PropertyValue",
      name: "GitHub Username",
      value: "Tejas164321",
    },
    {
      "@type": "PropertyValue",
      name: "LinkedIn Username",
      value: "tejasin",
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TejasFolio — Tejas Patil Portfolio",
  alternateName: ["TejasFolio", "Tejas Patil Portfolio", "tejasfolio.in"],
  url: "https://tejasfolio.in",
  description:
    "Official portfolio website (TejasFolio) of Tejas Patil (tejas164321) — Software Developer from Pune, India specializing in Full Stack Development and Gen AI.",
  author: {
    "@type": "Person",
    name: "Tejas Patil",
    url: "https://tejasfolio.in",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://tejasfolio.in/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Tejas Patil — Software Developer Portfolio",
  url: "https://tejasfolio.in",
  mainEntity: {
    "@type": "Person",
    name: "Tejas Patil",
    alternateName: ["Tejas164321", "tejasin", "TejasFolio"],
    url: "https://tejasfolio.in",
    jobTitle: "Software Developer",
    image: "https://tejasfolio.in/og-image.png",
    sameAs: [
      "https://www.linkedin.com/in/tejasin",
      "https://github.com/Tejas164321",
      "https://tejas164321.medium.com/",
    ],
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
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <meta name="author" content="Tejas Patil" />
        <meta name="theme-color" content="#FF4500" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
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
