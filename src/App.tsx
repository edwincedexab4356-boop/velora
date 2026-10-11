/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Philosophy } from './components/Philosophy.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { ProjectModal } from './components/ProjectModal.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ProcessSection } from './components/ProcessSection.tsx';
import { StatsAndTestimonials } from './components/StatsAndTestimonials.tsx';
import { TeamSection } from './components/TeamSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { ScrollToTop } from './components/ScrollToTop.tsx';
import { Project } from './data/studioData.ts';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [inquirySubject, setInquirySubject] = useState<string>('');
  const [whatsappNumber, setWhatsappNumber] = useState<string>('+34 910 882 140');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    scrollToSection('contacto');
  };

  const handleExploreProjects = () => {
    scrollToSection('proyectos');
  };

  const handleInquireProject = (projectTitle: string) => {
    setInquirySubject(projectTitle);
    scrollToSection('contacto');
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setInquirySubject(serviceTitle);
    scrollToSection('contacto');
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#141413] selection:bg-[#141413] selection:text-[#FBFBF9] font-sans antialiased">
      {/* Top Bar Contract Compliant Header */}
      <Navbar onOpenContact={handleOpenContact} />

      <main id="main-content">
        {/* Hero Section */}
        <Hero
          onExploreProjects={handleExploreProjects}
          onOpenContact={handleOpenContact}
        />

        {/* Section 1: Philosophy & Manifesto */}
        <Philosophy />

        {/* Section 2: Featured Works & Filterable Gallery */}
        <ProjectsSection onSelectProject={setSelectedProject} />

        {/* Section 3: Disciplines & Services */}
        <ServicesSection onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* Section 4: Work Methodology & Phases */}
        <ProcessSection />

        {/* Section 5: Demonstration Stats & Client Testimonials */}
        <StatsAndTestimonials />

        {/* Section 6: Studio Leadership & Team */}
        <TeamSection />

        {/* Section 7: Lead Consultation & Direct Contact */}
        <ContactSection
          initialSubject={inquirySubject}
          whatsappNumber={whatsappNumber}
          onUpdateWhatsappNumber={setWhatsappNumber}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Lightbox Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireProject={handleInquireProject}
      />

      {/* Floating Interactive Controls */}
      <FloatingWhatsApp
        whatsappNumber={whatsappNumber}
        onUpdateWhatsappNumber={setWhatsappNumber}
      />
      <ScrollToTop />
    </div>
  );
}
