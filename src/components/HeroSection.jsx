import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles, Terminal, Activity, Layers, Cpu } from "lucide-react";
import { HeroCanvas3D } from "./canvas/HeroCanvas3D";
import { MagneticButton } from "./ui/MagneticButton";
import { HaikeiWaves } from "./ui/HaikeiWaves";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden bg-tech-grid bg-radial-gradient"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
        {/* Top Status & Location Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-3 mb-8 text-xs font-mono"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-slate-300 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-semibold">ROLE:</span>
            <span>Computational Methodology Intern @ Rolls Royce</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-cyan-400" /> Pune, MH, India
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-400 font-mono">
              MIT-WPU (CGPA: 8.72)
            </span>
          </div>
        </motion.div>

        {/* Hero Grid: Main Pitch & 3D Interactive Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Human-Crafted Bio & Headlines */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <div>
              <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                <Sparkles size={14} /> AI & Scientific Machine Learning Engineer
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Engineering <br className="hidden sm:inline" />
                <span className="gradient-text-cyan-violet">
                  Physics-Informed AI
                </span>{" "}
                & Transparent Systems.
              </h1>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              I develop robust deep learning architectures that bridge physics and computation—from{" "}
              <strong className="text-white font-semibold">3D Fourier Neural Operators</strong> for structural response simulation at Rolls Royce to{" "}
              <strong className="text-white font-semibold">Explainable Quantum Error Detection</strong> (XAI) and real-time security forensics.
            </p>

            {/* Live Key Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-2">
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">
                  99.77%
                </div>
                <div className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">
                  R² FNO Score
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-violet-500/30 transition-colors">
                <div className="text-xl sm:text-2xl font-bold font-mono text-violet-400">
                  99.88%
                </div>
                <div className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">
                  IDS Threat Acc.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/30 transition-colors">
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                  0.85s
                </div>
                <div className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">
                  P95 Inference
                </div>
              </div>
            </div>

            {/* CTAs and Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <MagneticButton
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/20 gap-2"
              >
                Explore Projects <ArrowRight size={16} />
              </MagneticButton>

              <a
                href="#contact"
                className="px-5 py-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-sm border border-slate-700 transition-all hover:scale-105"
              >
                Get In Touch
              </a>

              <div className="flex items-center gap-2 sm:ml-3">
                <a
                  href="https://github.com/VaradCodes31"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/varadalshi"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:varadalshi7@gmail.com"
                  className="p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            <div className="w-full relative rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-2 sm:p-4 shadow-2xl shadow-cyan-500/5">
              {/* Header Label inside 3D Container */}
              <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Cpu size={13} /> 3D Neural/Qubit Interactive Canvas
                </span>
                <span className="text-slate-500">Rotate with Cursor</span>
              </div>

              {/* 3D Three.js Canvas */}
              <HeroCanvas3D />

              {/* Bottom Quick Specs */}
              <div className="flex items-center justify-between px-3 py-2 bg-slate-950/60 rounded-xl text-[11px] font-mono text-slate-400 border border-slate-800/80 mt-2">
                <span className="text-cyan-300 font-semibold">PyTorch • Qiskit • Scikit-learn</span>
                <span className="text-emerald-400">60 FPS WebGL</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Haikei SVG Wave Transition at Bottom */}
      <HaikeiWaves variant="bottom" className="mt-12 text-slate-900/40" />
    </section>
  );
};