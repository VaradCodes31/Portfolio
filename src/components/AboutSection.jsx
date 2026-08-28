import { BookOpen, Award, FileText, GraduationCap, Lightbulb, Sparkles, Users } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative grid-engineering">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#24344d]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              SECTION 01.5 // ACADEMIC FOUNDATIONS & LEADERSHIP
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
              The Journey: From Theory to High-Performance AI
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-400">
            Field Log: <span className="text-amber-400">#BIO-2026-ORIGIN</span>
          </div>
        </div>

        {/* 2-Column Academic & Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Academic & Technical Journey */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="blueprint-card rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#24344d] mb-4">
                  <span className="text-xs font-mono text-amber-400 uppercase font-semibold flex items-center gap-2">
                    <GraduationCap size={15} /> Academic Rigor & CS Foundations
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    CGPA 8.72
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans mb-3">
                  Dr. Vishwanath Karad MIT World Peace University
                </h3>
                <p className="text-xs font-mono text-amber-300 mb-4">
                  Bachelor of Technology in Computer Science • Pune, MH, India (2020 – 2023)
                </p>

                <p className="text-sm text-slate-300 font-sans leading-relaxed mb-4">
                  Built strong foundations in linear algebra, differential calculus, data structures, and computer architecture. This mathematical rigor directly powers my work today in formulating 3D Fourier Neural Operators and physics-informed quantum likelihood ratios.
                </p>

                {/* Key Coursework Pills */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-mono text-slate-400 uppercase">Core Coursework Mastery:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Linear Algebra",
                      "Differential Calculus",
                      "Operating Systems",
                      "Data Structures & Algorithms",
                      "Computer Networks",
                      "Deep Learning",
                      "BigData Technologies",
                      "Microprocessors",
                    ].map((c) => (
                      <span key={c} className="px-2.5 py-1 rounded text-xs font-mono bg-[#182337] text-slate-300 border border-[#2b3c5a]">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Research Philosophy Note */}
              <div className="p-4 rounded-xl bg-[#0f1624] border border-[#202d44] text-xs font-mono">
                <div className="text-amber-400 font-bold mb-1 flex items-center gap-1.5">
                  <Lightbulb size={13} /> Engineering Insight:
                </div>
                <p className="text-slate-300 font-sans leading-relaxed">
                  "When machine learning architectures respect the underlying symmetries and partial differential equations (PDEs) of physics, they achieve extreme generalization with far fewer training samples."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Leadership & Visual Technical Communication */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="blueprint-card rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#24344d] mb-4">
                  <span className="text-xs font-mono text-amber-400 uppercase font-semibold flex items-center gap-2">
                    <Users size={15} /> Community & Visual Leadership
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    GDGoC Lead
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-sans mb-1">
                  Google Developer Groups on Campus (GDGoC)
                </h3>
                <div className="text-xs font-mono text-amber-400 mb-4">
                  Design & Content Team Lead (June 2025 – Present)
                </div>

                <div className="space-y-3 text-xs text-slate-300 font-sans leading-relaxed">
                  <div className="p-3 rounded-lg bg-[#152033] border border-[#243754]">
                    <strong className="text-amber-300 block mb-0.5 font-mono">Visual Branding & Technical Communication:</strong>
                    Directing visual identity and creating developer-focused storytelling content for over 2 years, driving record engagement across community platforms.
                  </div>

                  <div className="p-3 rounded-lg bg-[#152033] border border-[#243754]">
                    <strong className="text-cyan-300 block mb-0.5 font-mono">Community Impact & Conferences:</strong>
                    Volunteered at major developer events including <em>WOW Pune</em> (city-wide developer conference), curating content tracks and coordinating speaker outreach.
                  </div>
                </div>
              </div>

              {/* Fast Download CV Link */}
              <div className="mt-6 pt-4 border-t border-[#24344d] flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Official Resume Dossier</span>
                <a
                  href="mailto:varadalshi7@gmail.com?subject=Resume%20Request%20-%20Varad%20Alshi"
                  className="px-3 py-1.5 rounded-lg bg-[#1a253a] hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-mono font-bold border border-[#2d3e5e] transition-all flex items-center gap-1.5"
                >
                  <FileText size={13} />
                  <span>Request Full PDF</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
