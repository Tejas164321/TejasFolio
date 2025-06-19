
"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { GraduationCap, Award, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    type: "education",
    title: "Bachelor of Engineering in Computer Engineering",
    institution: "Savitribai Phule Pune University (Zeal College of Engineering and Research, Pune)",
    period: "2023 - 2026 (Expected)",
    description: "Focusing on core computer science principles, software development, and AI/ML.",
    icon: <GraduationCap className="h-5 w-5 text-primary" />,
  },
  {
    type: "certification",
    title: "Building Modern Web Applications with MERN Stack (Internship)",
    institution: "EY Global Delivery Services, AICTE & Edunet Foundation",
    period: "February 10, 2025 – March 21, 2025",
    description: "Successful completion of a 6-week internship on Building Modern Web Applications with MERN Stack under the Next Gen Employability Program.",
    icon: <Award className="h-5 w-5 text-primary" />,
    certificateUrl: "/certificates/ey-aicte-mern-internship.png",
    certificateHint: "mern internship"
  },
  {
    type: "certification",
    title: "AI: Transformative Learning with TechSaksham (Internship)",
    institution: "TechSaksham (Microsoft, SAP, Edunet Foundation)",
    period: "2024",
    description: "Completion of internship on AI: Transformative Learning with TechSaksham - A joint CSR initiative of Microsoft & SAP, implemented by Edunet Foundation.",
    icon: <Award className="h-5 w-5 text-primary" />,
    certificateUrl: "/certificates/techsaksham-ai-internship.png",
    certificateHint: "ai techsaksham internship"
  },
  {
    type: "certification",
    title: "Summer Intern - React JS",
    institution: "Celebal Technologies",
    period: "May 19, 2025 – July 20, 2025",
    description: "Gained industry-relevant exposure and hands-on experience in React JS through practical learning and industry-oriented projects during a remote summer internship.",
    icon: <Award className="h-5 w-5 text-primary" />,
    certificateUrl: "/certificates/celebal-react-internship.png",
    certificateHint: "react internship"
  },
  {
    type: "certification",
    title: "AI Azure Internship Program",
    institution: "Edunet Foundation",
    period: "Commences May 13, 2025 (4 Weeks)",
    description: "A 4-week program focusing on AI and Azure, covering Machine Learning, Deep Learning, Gen AI, Computer Vision, and Neural Networks. Includes hands-on projects, mentorship, and use of Microsoft Learn.",
    icon: <Award className="h-5 w-5 text-primary" />,
    certificateUrl: "/certificates/edunet-ai-azure-internship.png",
    certificateHint: "ai azure internship"
  },
  {
    type: "certification",
    title: "IBM SkillsBuild 6-Week Internship Program (AIML)",
    institution: "IBM SkillsBuild",
    period: "June 18, 2025 – July 30, 2025 (Expected)",
    description: "Participating in a 6-week internship program focusing on Artificial Intelligence & Machine Learning (AIML) domain.",
    icon: <Award className="h-5 w-5 text-primary" />,
    certificateUrl: "/certificates/ibm-skillsbuild-aiml-internship.png",
    certificateHint: "ibm aiml internship"
  },
  {
    type: "certification",
    title: "AI Virtual Internship (Shell & Edunet Foundation)",
    institution: "Edunet Foundation & Shell",
    period: "2025 (4 Weeks, Dates TBC)",
    description: "Selected for a 4-week virtual internship focusing on Artificial Intelligence, offered by Edunet Foundation in collaboration with Shell.",
    icon: <Award className="h-5 w-5 text-primary" />,
    certificateUrl: "/certificates/edunet-shell-ai-internship.png", 
    certificateHint: "edunet shell ai internship" 
  },
  {
    type: "certification",
    title: "Django Web Development Internship Program",
    institution: "Rubicon Foundation & Deutsche Bank (Future Skills for Youth Initiative)",
    period: "2024",
    description: "Completed an intensive Django web development internship, part of the 'Future Skills for Youth' initiative, focusing on building robust web applications and backend systems with Python and Django.",
    icon: <Award className="h-5 w-5 text-primary" />,
    certificateUrl: "/certificates/rubicon-deutsche-bank-foryouth.png",
    certificateHint: "django internship program"
  },
  {
    type: "certification",
    title: "Python for Data Science, AI & Development",
    institution: "IBM (offered through Coursera)",
    period: "June 2025",
    description: "Successfully completed an online non-credit course authorized by IBM and offered through Coursera, focusing on Python for data science and AI development.",
    icon: <Award className="h-5 w-5 text-primary" />,
    certificateUrl: "/certificates/ibm-python-data-science-ai.png",
    certificateHint: "python data science certificate"
  },
  {
    type: "certification",
    title: "Advanced Software Engineering Job Simulation",
    institution: "Walmart Global Tech (via Forage)",
    period: "April 2025",
    description: "Completed practical tasks in Advanced Data Structures, Software Architecture, Relational Database Design, and Data Munging as part of the job simulation program.",
    icon: <Award className="h-5 w-5 text-primary" />,
    certificateUrl: "/certificates/walmart-forage-ase-simulation.png",
    certificateHint: "software engineering simulation"
  }
];

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardPopInVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};


export default function EducationSection() {
  const [selectedCertificate, setSelectedCertificate] = React.useState<{ title: string; institution?: string; url: string | null; hint?: string } | null>(null);

  return (
    <section id="education" className="bg-background dark:bg-background py-16 md:py-24 overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Education & Certifications
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My academic background and professional qualifications. Click on a certificate to view.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-border transform -translate-x-1/2 h-full hidden md:block"></div>
          
          <motion.div 
            className="space-y-8 md:space-y-0"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {educationData.map((item, index) => {
              const isCardOnRight = index % 2 === 0;
              const isCertification = item.type === 'certification' && item.certificateUrl;

              return (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:items-stretch mb-8 md:mb-12 ${
                    isCardOnRight ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  variants={cardPopInVariant}
                >
                  <div className="hidden md:flex md:w-1/2 relative items-stretch">
                  </div>
                  <div className={`w-full md:w-1/2 md:px-6 lg:px-8`}>
                     <div className="md:hidden h-8 relative"> 
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>
                    </div>
                    <Card 
                      className={`w-full shadow-lg bg-card transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] ${isCertification ? 'cursor-pointer' : ''}`}
                      onClick={() => isCertification && setSelectedCertificate({ title: item.title, institution: item.institution, url: item.certificateUrl || null, hint: item.certificateHint })}
                      role={isCertification ? "button" : undefined}
                      tabIndex={isCertification ? 0 : undefined}
                      onKeyDown={(e) => {
                        if (isCertification && (e.key === 'Enter' || e.key === ' ')) {
                          e.preventDefault();
                          setSelectedCertificate({ title: item.title, institution: item.institution, url: item.certificateUrl || null, hint: item.certificateHint });
                        }
                      }}
                    >
                      <CardHeader className="flex flex-row items-start p-4 md:p-6 text-left">
                        <div className="flex-shrink-0 mr-3">
                          {React.cloneElement(item.icon as React.ReactElement, { className: "h-6 w-6 text-primary" })}
                        </div>
                        <div className="flex flex-col w-full items-start text-left">
                          <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                          <CardDescription className="text-sm text-muted-foreground pt-1">{item.institution}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 md:p-6 pt-0 text-left">
                        <div className="flex items-center text-xs text-muted-foreground mb-3 justify-start flex-row">
                           <CalendarDays className="h-4 w-4 mr-2" />
                           <span>{item.period}</span>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground text-left">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      {selectedCertificate && selectedCertificate.url && (
        <Dialog open={!!selectedCertificate} onOpenChange={(isOpen) => { if (!isOpen) setSelectedCertificate(null); }}>
          <DialogContent className="sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl p-0">
            <DialogHeader className="px-6 pt-6 pb-4">
              <DialogTitle>{selectedCertificate.title}</DialogTitle>
              {selectedCertificate.institution && <DialogDescription>Certificate Preview - {selectedCertificate.institution}</DialogDescription>}
            </DialogHeader>
            <div className="px-6 pb-6 pt-2 max-h-[80vh] overflow-y-auto">
              <Image
                src={selectedCertificate.url}
                alt={`Certificate for ${selectedCertificate.title}`}
                width={1200}
                height={850}
                className="w-full h-auto rounded-md object-contain"
                data-ai-hint={selectedCertificate.hint || "certificate document"}
                priority={true} 
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
