import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ProjectSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSection";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { StarsCanvas3D } from "../components/canvas/StarsCanvas3D";

export const Home = () => {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 overflow-x-hidden font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative">
      {/* 3D Celestial Background Stars */}
      <StarsCanvas3D />

      {/* Floating Dynamic Island Navigation */}
      <Navbar />

      {/* Main Trajectory */}
      <main className="relative z-10">
        {/* 01. Hero with 3D Neural/Quantum Canvas */}
        <HeroSection />

        {/* 02. Industry Experience (Rolls-Royce & GDGoC) */}
        <ExperienceSection />

        {/* 03. Watermelon-UI Bento Projects (SyndromeAI, Netsage IDS, BlockGuard, Rolls-Royce FNO) */}
        <ProjectSection />

        {/* 04. Technical Stack & 3D Floating Tech Balls */}
        <SkillsSection />

        {/* 05. MIT-WPU Academic Rigor & Foundations */}
        <AboutSection />

        {/* 06. 3D Earth Celestial Globe & Direct Transmission */}
        <ContactSection />
      </main>

      {/* Modern Sleek Footer */}
      <Footer />
    </div>
  );
};