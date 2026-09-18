import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Cpu, Sparkles, Award } from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";

export const ExperienceSection = () => {
  const experiences = [
    {
      company: "Rolls Royce Power Systems",
      role: "Computational Methodology Intern",
      period: "Jul 2026 — Present",
      location: "Pune, Maharashtra (On-site)",
      badge: "Current Role",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      description:
        "Architecting deep learning surrogate models and neural operators to replace traditional computationally heavy finite element methods (FEM) for fast 3D continuous structural mechanics.",
      achievements: [
        "Developed a 3D Fourier Neural Operator (FNO) pipeline for voxel-wise prediction of structural responses from complex geometry and variable loading conditions.",
        "Designed an end-to-end PyTorch workflow encompassing raw simulation ingestion, data normalization, residual Fourier frequency layers, training, and automated evaluation.",
        "Achieved 99.77% R² and 4.75% Relative L2 error on unseen industrial test simulations with sub-second prediction generation.",
        "Pioneering a geometry-agnostic FNO framework to accurately predict stress and deformation fields across varying voxel and node-based geometries without retraining from scratch.",
      ],
      technologies: ["Python", "PyTorch", "Fourier Neural Operators", "Deep Learning", "NumPy", "SciPy"],
      metric: { label: "Model Fidelity", value: "99.77% R²" },
    },
    {
      company: "Google Developer Groups on Campus (GDGoC)",
      role: "Design & Content Lead",
      period: "Jun 2025 — Present",
      location: "Pune, India",
      badge: "Leadership & Community",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      description:
        "Leading visual identity, design engineering, and technical storytelling for one of the premier student developer communities in Pune.",
      achievements: [
        "Direct visual branding and technical communication campaigns, scaling developer engagement across university platforms.",
        "Authored engaging developer tutorials, workshops, and architecture explainers on AI, web development, and cloud computing.",
        "Key organizing team member and speaker coordinator for WOW Pune, a city-wide developer conference hosting hundreds of engineers.",
      ],
      technologies: ["Visual Branding", "Technical Writing", "Community Leadership", "UI/UX Design"],
      metric: { label: "Reach", value: "1,500+ Devs" },
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

      {/* Experience Timeline Grid */}
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <SpotlightCard
            key={idx}
            className="border border-white/10 hover:border-cyan-500/40"
            spotlightColor="rgba(6, 182, 212, 0.12)"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              {/* Left Details */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${exp.badgeColor}`}>
                    {exp.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar size={13} className="text-cyan-400" /> {exp.period}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <MapPin size={13} className="text-slate-500" /> {exp.location}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    {exp.role}
                  </h3>
                  <p className="text-cyan-400 font-medium text-base mt-0.5 font-mono">
                    @ {exp.company}
                  </p>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2.5 pt-2">
                  {exp.achievements.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-3">
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

              {/* Right Metric Callout */}
              <div className="lg:w-48 shrink-0 flex lg:flex-col justify-between items-center lg:items-end p-4 rounded-xl bg-slate-950/60 border border-slate-800 self-stretch justify-center">
                <div className="text-center lg:text-right">
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">
                    {exp.metric.label}
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">
                    {exp.metric.value}
                  </span>
                </div>
                <div className="mt-2 text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <Sparkles size={12} /> High Impact
                </div>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};
