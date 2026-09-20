import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Info, 
  Briefcase, 
  GraduationCap, 
  Users, 
  Trophy,
  Download, 
  Linkedin, 
  Github, 
  Mail, 
  Copy, 
  Check, 
  Sparkles, 
  MapPin
} from "lucide-react";

export const CandidateDossier = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("varadalshi7@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const primaryStack = [
    { name: "Python", color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
    { name: "PyTorch", color: "text-orange-400 bg-orange-500/10 border-orange-500/20" },
    { name: "Qiskit", color: "text-violet-400 bg-violet-500/10 border-violet-500/20" },
    { name: "Scikit-Learn", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
    { name: "FastAPI", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
    { name: "React", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
    { name: "PySpark", color: "text-red-400 bg-red-500/10 border-red-500/20" },
    { name: "Hadoop", color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20" },
    { name: "SQL", color: "text-teal-400 bg-teal-500/10 border-teal-500/20" },
  ];

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-5 sm:p-6 shadow-2xl shadow-cyan-500/5 text-slate-200">
      {/* 1. Header with 'Key Information' & Centered Status Badge */}
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 text-[11px] font-mono">
        <span className="flex items-center gap-1.5 text-cyan-400 font-bold uppercase tracking-wider">
          <Info size={14} /> Key Information
        </span>
        <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px] font-medium text-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="inline-block text-center leading-none">Available for Roles</span>
        </div>
      </div>

      {/* Identity Row */}
      <div className="flex items-center justify-between gap-3 pt-3.5 pb-4 border-b border-slate-800/60">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600 flex items-center justify-center text-slate-950 font-mono font-bold text-base shadow-lg shadow-cyan-500/20">
            VA
          </div>
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-1.5">
              Varad Alshi <Sparkles size={14} className="text-amber-400" />
            </h3>
            <p className="text-xs font-mono text-cyan-400">
              Machine Learning & Systems Enthusiast
            </p>
          </div>
        </div>

        <div className="text-right hidden sm:block text-xs font-mono text-slate-400">
          <div className="flex items-center justify-end gap-1">
            <MapPin size={12} className="text-cyan-400" /> Pune, MH, India
          </div>
          <span className="text-[10px] text-slate-500">Open to On-site / Hybrid</span>
        </div>
      </div>

      {/* 3. Key Career Pillars */}
      <div className="py-3.5 border-b border-slate-800/60 space-y-2.5">
        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
          Key Career Pillars
        </span>

        {/* Pillar 1: Industry */}
        <div className="flex items-start gap-2.5 text-xs p-2 rounded-lg bg-slate-950/60 border border-slate-800/70">
          <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-400 mt-0.5 shrink-0">
            <Briefcase size={13} />
          </div>
          <div className="w-full">
            <div className="flex flex-wrap items-center justify-between gap-1">
              <span className="font-bold text-white block">
                Computational Methodology Intern @ Rolls Royce
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                Jul 2026 — Present
              </span>
            </div>
            <span className="text-slate-400 text-[11px] leading-tight block mt-0.5">
              Formulating 3D Fourier Neural Operators (FNO) for voxel-wise structural response prediction.
            </span>
          </div>
        </div>

        {/* Pillar 2: Academics */}
        <div className="flex items-start gap-2.5 text-xs p-2 rounded-lg bg-slate-950/60 border border-slate-800/70">
          <div className="p-1.5 rounded bg-cyan-500/10 text-cyan-400 mt-0.5 shrink-0">
            <GraduationCap size={13} />
          </div>
          <div className="w-full">
            <div className="flex flex-wrap items-center justify-between gap-1">
              <span className="font-bold text-white block">
                B.Tech Computer Science @ MIT-WPU • <strong className="text-emerald-400 font-mono">CGPA: 8.74 / 10.0</strong>
              </span>
              <span className="text-[10px] font-mono text-cyan-400 font-semibold">
                Aug 2023 — Jul 2027
              </span>
            </div>
            <span className="text-slate-400 text-[11px] leading-tight block mt-0.5">
              Strong mathematical foundations, deep learning, algorithms & distributed systems.
            </span>
          </div>
        </div>

        {/* Pillar 3: Leadership */}
        <div className="flex items-start gap-2.5 text-xs p-2 rounded-lg bg-slate-950/60 border border-slate-800/70">
          <div className="p-1.5 rounded bg-violet-500/10 text-violet-400 mt-0.5 shrink-0">
            <Users size={13} />
          </div>
          <div className="w-full">
            <div className="flex flex-wrap items-center justify-between gap-1">
              <span className="font-bold text-white block">
                Head of Design & Content (2+ Yrs) @ GDGoC
              </span>
              <span className="text-[10px] font-mono text-violet-400 font-semibold">
                Feb 2024 — May 2026
              </span>
            </div>
            <span className="text-slate-400 text-[11px] leading-tight block mt-0.5">
              Spearheaded visual branding & conferences (WOW Pune) reaching 1,500+ student developers.
            </span>
          </div>
        </div>

        {/* Pillar 4: Chess Instructor */}
        <div className="flex items-start gap-2.5 text-xs p-2 rounded-lg bg-slate-950/60 border border-slate-800/70">
          <div className="p-1.5 rounded bg-amber-500/10 text-amber-400 mt-0.5 shrink-0">
            <Trophy size={13} />
          </div>
          <div className="w-full">
            <div className="flex flex-wrap items-center justify-between gap-1">
              <span className="font-bold text-white block">
                Chess Instructor @ Velankar Chess Institute
              </span>
              <span className="text-[10px] font-mono text-amber-400 font-semibold">
                Aug 2023 — Present
              </span>
            </div>
            <span className="text-slate-400 text-[11px] leading-tight block mt-0.5">
              Pune (On-site) • Delivered structured training to 50+ students across 5 batches (theory, problem-solving & strategic decision-making).
            </span>
          </div>
        </div>
      </div>

      {/* 4. Core Engineering Strengths */}
      <div className="py-3.5 border-b border-slate-800/60 space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
          Core Engineering Strengths
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
          <div className="flex items-center gap-1.5 text-slate-300 p-1.5 rounded bg-slate-950/40 border border-slate-800/50">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
            <span>Core ML Engineer</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300 p-1.5 rounded bg-slate-950/40 border border-slate-800/50">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
            <span>Explainable AI Systems</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300 p-1.5 rounded bg-slate-950/40 border border-slate-800/50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span>End-to-end Pipelining</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300 p-1.5 rounded bg-slate-950/40 border border-slate-800/50">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
            <span>Blockchain Enthusiast</span>
          </div>
        </div>
      </div>

      {/* 5. Primary Stack Chips (with Big Data Tools: PySpark & Hadoop) */}
      <div className="pt-3 pb-4">
        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
          Primary Technical Toolkit
        </span>
        <div className="flex flex-wrap gap-1.5">
          {primaryStack.map((tech, idx) => (
            <span
              key={idx}
              className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium border ${tech.color}`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      {/* Quick Recruiter Action Bar */}
      <div className="pt-3.5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <a
            href="/Varad_Alshi_Resume.pdf"
            download
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20 hover:scale-105"
          >
            <Download size={13} /> Resume
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-mono text-xs border border-slate-700 transition-colors"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
            <span>{copied ? "Copied Email!" : "Copy Email"}</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://linkedin.com/in/varadalshi"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 border border-slate-700 transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin size={14} />
          </a>
          <a
            href="https://github.com/VaradCodes31"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 border border-slate-700 transition-colors"
            title="GitHub Profile"
          >
            <Github size={14} />
          </a>
          <a
            href="mailto:varadalshi7@gmail.com"
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 border border-slate-700 transition-colors"
            title="Send Direct Email"
          >
            <Mail size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

