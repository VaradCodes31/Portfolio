import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Sparkles, Building2, Users2, TrendingUp, ShieldCheck } from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";

export const ExperienceSection = () => {
  const experiences = [
    {
      company: "Rolls Royce Power Systems",
      role: "Computational Methodology Intern",
      period: "Jul 2026 — Present",
      location: "Pune, Maharashtra (On-site)",
      badge: "Industrial Research",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      logoType: "rolls-royce",
      description:
        "Architecting deep learning surrogate models and neural operators to replace traditional computationally heavy finite element methods (FEM) for fast 3D continuous structural mechanics.",
      achievements: [
        "Developed a 3D Fourier Neural Operator (FNO) pipeline for voxel-wise prediction of structural responses from complex geometry and variable loading conditions.",
        "Designed an end-to-end PyTorch workflow encompassing raw simulation ingestion, data normalization, residual Fourier frequency layers, training, and automated evaluation.",
        "Achieved 99.77% R² and 4.75% Relative L2 error on unseen industrial test simulations with sub-second prediction generation.",
        "Pioneering a geometry-agnostic FNO framework to accurately predict stress and deformation fields across varying voxel and node-based geometries without retraining from scratch.",
      ],
      technologies: ["Python", "PyTorch", "Fourier Neural Operators", "Deep Learning", "NumPy", "SciPy"],
      metrics: [
        { label: "Model Fidelity", value: "99.77% R²", icon: TrendingUp },
        { label: "Relative L2 Error", value: "4.75%", icon: ShieldCheck },
      ],
    },
    {
      company: "Google Developer Groups on Campus (GDGoC)",
      role: "Design & Content Lead",
      period: "Feb 2024 — May 2026",
      location: "Pune, India",
      badge: "Leadership & Community",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      logoType: "gdgoc",
      description:
        "Promoted from Core Member (Feb 2024 — Jul 2025) to Head of the Design and Content Department (Jul 2025 — May 2026), spearheading visual identity, developer storytelling, and large-scale tech initiatives.",
      achievements: [
        "Head of Design & Content (Jul 2025 — May 2026): Directed visual branding, technical communications, and digital outreach campaigns, expanding community visibility across developer platforms.",
        "Core Member (Feb 2024 — Jul 2025): Created engaging technical content, curated workshops, and mentored junior student developers in AI and software engineering.",
        "Authored and published developer-focused explainers on AI, web development, and cloud computing.",
        "Volunteered and coordinated speaker management for WOW Pune, a premier city-wide developer conference hosting hundreds of engineers.",
      ],
      technologies: ["Visual Branding", "Technical Communication", "Community Leadership", "UI/UX Design"],
      metrics: [
        { label: "Community Reach", value: "1,500+ Devs", icon: Users2 },
        { label: "Tenure", value: "2+ Years", icon: Award },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2 flex items-center gap-2">
          <Briefcase size={14} /> Career & Industry Experience
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Where Engineering Meets Applied AI
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
          Deploying deep learning in mission-critical industrial applications and driving technical community initiatives.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <SpotlightCard
            key={idx}
            className="border border-white/10 hover:border-cyan-500/40 p-6 sm:p-8"
            spotlightColor="rgba(6, 182, 212, 0.12)"
          >
            <div className="flex flex-col space-y-6">
              {/* Card Header with Emblems & Metadata */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
                <div className="flex items-center gap-4">
                  {/* Organization Custom Emblem */}
                  {exp.logoType === "rolls-royce" ? (
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-700 flex items-center justify-center font-serif font-bold text-cyan-400 text-xl shadow-lg shadow-cyan-500/10 shrink-0">
                      RR
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-700 flex items-center justify-center shrink-0 shadow-lg">
                      <div className="grid grid-cols-2 gap-1 w-6 h-6">
                        <span className="rounded-full bg-red-500" />
                        <span className="rounded-full bg-blue-500" />
                        <span className="rounded-full bg-amber-500" />
                        <span className="rounded-full bg-emerald-500" />
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border ${exp.badgeColor}`}>
                        {exp.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <Calendar size={12} className="text-cyan-400" /> {exp.period}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <MapPin size={12} className="text-slate-500" /> {exp.location}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm font-mono mt-0.5">
                      @ {exp.company}
                    </p>
                  </div>
                </div>

                {/* Horizontal Key Impact KPIs */}
                <div className="flex items-center gap-3">
                  {exp.metrics.map((m, mIdx) => {
                    const Icon = m.icon;
                    return (
                      <div
                        key={mIdx}
                        className="px-3.5 py-2 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2.5 min-w-[130px]"
                      >
                        <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                          <Icon size={15} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-mono text-slate-400 uppercase leading-none">
                            {m.label}
                          </span>
                          <span className="text-sm font-bold font-mono text-white mt-1 leading-none">
                            {m.value}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Description & Accomplishments */}
              <div className="space-y-3">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {exp.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {exp.achievements.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 p-2.5 rounded-xl bg-slate-950/40 border border-slate-800/60">
                      <CheckCircle2 size={15} className="text-cyan-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">Skills / Tech Applied:</span>
                {exp.technologies.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 border border-slate-700/60 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};
