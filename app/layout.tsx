
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const BASE_URL = "https://tejasfolio.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Tejas Patil | Software Developer | Pune | SPPU",
    template: "%s | Tejas Patil | TejasFolio",
  },
  description:
    "Official Portfolio of Tejas Patil (TejasFolio | tejas164321) — Software Developer from Pune, India. SPPU alumni specializing in Full Stack Development (MERN, Next.js), Gen AI, Python, and building production-grade applications. LinkedIn: tejasin | GitHub: Tejas164321",
  keywords: [
    // ─── Core Name Variants ───────────────────────────────────────
    "Tejas Patil",
    "TejasPatil",
    "Tejas Vijay Patil",
    "tejas vijay patil",
    "tejaspatil",
    "tejas",
    "patil",
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
    "tejas patil website",
    "tejas patil official",
    "tejas patil blog",
    "patil tejas",
    "patil tejas vijay",
    "t patil developer",

    // ─── Social Handles & ID-based Searches ──────────────────────
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
    "github tejas164321",
    "github.com/Tejas164321",
    "linkedin tejasin",
    "linkedin.com/in/tejasin",
    "medium tejas164321",

    // ─── Email-based Searches ─────────────────────────────────────
    "tejas2382004",
    "tejaspatil1643",
    "tejas2382004@gmail.com",
    "tejaspatil1643@gmail.com",
    "tejaspatil164321@gmail.com",
    "tejas2382004 gmail",
    "tejaspatil1643 gmail",

    // ─── Role & Skill-based Searches ─────────────────────────────
    "Software Developer Pune",
    "Software Developer India",
    "Full Stack Developer Pune",
    "Full Stack Developer India",
    "Next.js Developer Pune",
    "Next.js Developer India",
    "MERN Stack Developer Pune",
    "MERN Stack Developer India",
    "React Developer Pune",
    "React Developer India",
    "Gen AI Developer India",
    "AI Developer India",
    "AI Developer Pune",
    "Machine Learning Developer India",
    "Python Developer Pune",
    "Firebase Developer India",
    "Node.js Developer Pune",
    "Web Developer Pune",
    "Web Developer India",
    "Backend Developer Pune",
    "Cloud Developer India",
    "LLM Developer India",
    "Generative AI Developer India",
    "Freelance Developer Pune",
    "Junior Developer Pune",
    "Software Engineer Pune",

    // ─── Project-specific Searches ───────────────────────────────
    "tejas patil finpal",
    "tejas patil mydinner",
    "tejas patil ai recruiter",
    "tejas patil dairy nine",
    "finpal tejasfolio",
    "mydinner tejasfolio",
    "ai recruiter tejas patil",

    // ─── Hackathon & Achievements ─────────────────────────────────
    "tejas patil hackathon",
    "tejas patil sih",
    "tejas patil smart india hackathon",
    "tejas patil alkimi movefwd",
    "tejas patil gfg hackathon",
    "tejas patil geeksforgeeks",
    "tejas patil open source",

    // ─── Natural Language / Question Searches ────────────────────
    "who is tejas patil developer",
    "tejas patil portfolio website",
    "tejas patil projects",
    "tejas patil skills",
    "tejas patil resume",
    "tejas patil contact",
    "tejas patil hire",
    "hire tejas patil",
    "tejas patil freelance",
    "tejas patil intern",
    "tejas patil work",
    "tejasfolio portfolio",
    "best portfolio site Pune developer",
    "top developer pune portfolio",

    // ─── Brand Keywords ───────────────────────────────────────────
    "Building Intelligent Scalable Software",
    "Gen AI Powered Applications",
    "TejasFolio portfolio site",
    "tejasfolio.in official",
  ],
  authors: [{ name: "Tejas Patil", url: BASE_URL }],
  creator: "Tejas Patil",
  publisher: "Tejas Patil",
  category: "technology",
  classification: "Software Development Portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tejas Patil | Software Developer | Pune — TejasFolio",
    description:
      "Welcome to TejasFolio — Official portfolio of Tejas Patil (tejas164321 | tejasin). Software Developer from Pune building production-grade Full Stack & Gen AI powered applications.",
    url: BASE_URL,
    siteName: "TejasFolio — Tejas Patil Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tejas Patil — Software Developer | TejasFolio | Pune",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejas Patil | Software Developer | Pune",
    description:
      "Official portfolio of Tejas Patil (TejasFolio | tejas164321 | tejasin). Software Developer building Full Stack & Gen AI powered applications from Pune, India.",
    images: [{ url: "/og-image.png", alt: "Tejas Patil — TejasFolio" }],
    creator: "@tejasin",
    site: "@tejasin",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-search-console-verification-code",
    // bing: "your-bing-webmaster-verification-code",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
};

// ─── JSON-LD: Person (Core Identity) ─────────────────────────────────────────
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: "Tejas Patil",
  givenName: "Tejas",
  familyName: "Patil",
  additionalName: "Vijay",
  alternateName: [
    "TejasPatil",
    "Tejas Vijay Patil",
    "Tejas164321",
    "tejas164321",
    "tejasin",
    "TejasFolio",
    "164321",
  ],
  url: BASE_URL,
  image: {
    "@type": "ImageObject",
    url: `${BASE_URL}/og-image.png`,
    width: 1200,
    height: 630,
    caption: "Tejas Patil — Software Developer from Pune, India",
  },
  jobTitle: "Software Developer",
  description:
    "Tejas Patil (tejas164321) is a Software Developer from Pune, India, specializing in Full Stack Development (MERN, Next.js), Gen AI, Python, Firebase, and building production-grade scalable applications.",
  email: "tejaspatil164321@gmail.com",
  nationality: {
    "@type": "Country",
    name: "India",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Savitribai Phule Pune University",
    alternateName: "SPPU",
    url: "http://www.unipune.ac.in/",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
    addressCountryCode: "IN",
  },
  knowsAbout: [
    "Full Stack Development",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "Machine Learning",
    "Generative AI",
    "Large Language Models",
    "Firebase",
    "Firestore",
    "Cloud Functions",
    "MongoDB",
    "REST APIs",
    "Cloud Computing",
    "Software Development",
    "SaaS Development",
    "Gen AI",
    "LLM Integration",
    "TypeScript",
    "JavaScript",
  ],
  sameAs: [
    "https://www.linkedin.com/in/tejasin",
    "https://github.com/Tejas164321",
    "https://tejas164321.medium.com/",
    BASE_URL,
  ],
  identifier: [
    { "@type": "PropertyValue", name: "GitHub", value: "Tejas164321" },
    { "@type": "PropertyValue", name: "LinkedIn", value: "tejasin" },
    { "@type": "PropertyValue", name: "Medium", value: "tejas164321" },
    { "@type": "PropertyValue", name: "Portfolio ID", value: "164321" },
  ],
};

// ─── JSON-LD: WebSite ─────────────────────────────────────────────────────────
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "TejasFolio — Tejas Patil Portfolio",
  alternateName: ["TejasFolio", "Tejas Patil Portfolio", "tejasfolio.in"],
  url: BASE_URL,
  description:
    "Official portfolio website (TejasFolio) of Tejas Patil (tejas164321) — Software Developer from Pune, India specializing in Full Stack Development and Gen AI.",
  author: { "@id": `${BASE_URL}/#person` },
  publisher: { "@id": `${BASE_URL}/#person` },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

// ─── JSON-LD: ProfilePage ─────────────────────────────────────────────────────
const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${BASE_URL}/#profilepage`,
  name: "Tejas Patil — Software Developer Portfolio",
  description: "Personal portfolio of Tejas Patil (tejas164321), Software Developer from Pune, India.",
  url: BASE_URL,
  inLanguage: "en-IN",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: { "@id": `${BASE_URL}/#person` },
  mainEntity: { "@id": `${BASE_URL}/#person` },
  dateModified: new Date().toISOString(),
};

// ─── JSON-LD: BreadcrumbList ──────────────────────────────────────────────────
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: `${BASE_URL}/#about` },
    { "@type": "ListItem", position: 3, name: "Projects", item: `${BASE_URL}/#projects` },
    { "@type": "ListItem", position: 4, name: "Skills", item: `${BASE_URL}/#skills` },
    { "@type": "ListItem", position: 5, name: "Education", item: `${BASE_URL}/#education` },
    { "@type": "ListItem", position: 6, name: "Contact", item: `${BASE_URL}/#contact` },
  ],
};

// ─── JSON-LD: ItemList (Projects) ─────────────────────────────────────────────
const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Tejas Patil's Projects",
  description: "List of software projects built by Tejas Patil (tejas164321)",
  url: `${BASE_URL}/#projects`,
  author: { "@id": `${BASE_URL}/#person` },
  itemListElement: [
    {
      "@type": "ListItem", position: 1,
      item: {
        "@type": "SoftwareApplication", name: "Dairy Nine",
        description: "Production-grade SaaS platform automating the dairy supply chain with multi-role dashboards and camera-based barcode scanning.",
        applicationCategory: "SaaS", operatingSystem: "Web",
        author: { "@id": `${BASE_URL}/#person` },
        url: "https://github.com/Piyush0930/9dairy-UI",
      },
    },
    {
      "@type": "ListItem", position: 2,
      item: {
        "@type": "SoftwareApplication", name: "AI Recruiter",
        description: "Intelligent talent engine using hybrid AI (Gemini Flash & Ollama Qwen) for resume analysis and automated screening.",
        applicationCategory: "AI Application", operatingSystem: "Web",
        author: { "@id": `${BASE_URL}/#person` },
        url: "https://airecruiter.tejasfolio.in/",
      },
    },
    {
      "@type": "ListItem", position: 3,
      item: {
        "@type": "SoftwareApplication", name: "FinPal",
        description: "Hybrid AI financial dashboard analyzing 1000+ UPI transactions with local LLMs and automated expense categorization.",
        applicationCategory: "FinTech", operatingSystem: "Web",
        author: { "@id": `${BASE_URL}/#person` },
        url: "https://finpal.tejasfolio.in/",
      },
    },
    {
      "@type": "ListItem", position: 4,
      item: {
        "@type": "SoftwareApplication", name: "MyDinner",
        description: "Mess operations platform with Firebase-powered backend for billing, attendance, and student management.",
        applicationCategory: "Management App", operatingSystem: "Web",
        author: { "@id": `${BASE_URL}/#person` },
        url: "https://mydinner.tejasfolio.in/",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>


        {/* ── Favicon ── */}
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* ── Identity & Social Verification (rel="me") ── */}
        <link rel="me" href="https://www.linkedin.com/in/tejasin" />
        <link rel="me" href="https://github.com/Tejas164321" />
        <link rel="me" href="https://tejas164321.medium.com/" />

        {/* ── Core Meta ── */}
        <meta name="author" content="Tejas Patil" />
        <meta name="theme-color" content="#FF4500" />
        <meta name="color-scheme" content="dark light" />
        <meta name="application-name" content="TejasFolio" />

        {/* ── Geo / Local SEO ── */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune, Maharashtra, India" />
        <meta name="geo.position" content="18.5204;73.8567" />
        <meta name="ICBM" content="18.5204, 73.8567" />

        {/* ── Open Graph Profile ── */}
        <meta property="profile:first_name" content="Tejas" />
        <meta property="profile:last_name" content="Patil" />
        <meta property="profile:username" content="tejas164321" />

        {/* ── Extended Open Graph ── */}
        <meta property="og:image" content={`${BASE_URL}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Tejas Patil — Software Developer | TejasFolio" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:locale:alternate" content="en_US" />

        {/* ── JSON-LD Structured Data ── */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }} />
      </head>
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
      </body>
    </html>
  );
}
