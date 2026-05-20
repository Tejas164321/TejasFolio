import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';

// Skeleton loaders for lazy sections
const SectionSkeleton = () => (
  <div className="container py-12 md:py-24 animate-pulse">
    <div className="h-8 bg-muted rounded w-1/3 mx-auto mb-8" />
    <div className="space-y-4">
      <div className="h-4 bg-muted rounded w-3/4 mx-auto" />
      <div className="h-4 bg-muted rounded w-1/2 mx-auto" />
    </div>
  </div>
);

// Lazy-load all below-the-fold sections to reduce initial JS bundle
const ExperienceSection = dynamic(
  () => import('@/components/sections/experience-section'),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const ProjectsSection = dynamic(
  () => import('@/components/sections/projects-section'),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const SkillsSection = dynamic(
  () => import('@/components/sections/skills-section'),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const EducationSection = dynamic(
  () => import('@/components/sections/education-section'),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const FAQSection = dynamic(
  () => import('@/components/sections/faq-section'),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const ContactSection = dynamic(
  () => import('@/components/sections/contact-section'),
  { loading: () => <SectionSkeleton />, ssr: true }
);

export default function Home() {
  return (
    <>
      {/* Above fold: static imports for immediate LCP */}
      <HeroSection />
      <AboutSection />
      {/* Below fold: lazy loaded to reduce initial bundle */}
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
