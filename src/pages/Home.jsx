import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ProjectSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSection";
import { BlogSection } from "../components/BlogSection";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  const [isQuickView, setIsQuickView] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f17] text-[#e2e8f0] overflow-x-hidden font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Field Journal Navigation Header */}
      <Navbar isQuickView={isQuickView} setIsQuickView={setIsQuickView} />

      {/* Main Journal Trajectory */}
      <main>
        {/* 01. Logbook & Hero Dossier */}
        <HeroSection />

        {/* 02. Rolls Royce Computational Methodology Experience */}
        <ExperienceSection />

        {/* 03. Applied Research Lab Manila Folders (SyndromeAI, NetSage IDS, BlockGuard) */}
        <ProjectSection />

        {/* 04. Technical Disciplines & Research Toolkit Bench */}
        <SkillsSection />

        {/* 05. Research Field Notes & Interactive Logbook */}
        <BlogSection />

        {/* 01.5. Academic Rigor at MIT-WPU & GDGoC Leadership */}
        <AboutSection />

        {/* 06. Field Memo & Direct Coordinate Transmission */}
        <ContactSection />
      </main>

      {/* Colophon & Footer */}
      <Footer />
    </div>
  );
};