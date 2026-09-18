import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles, Terminal, Activity, Layers, Cpu, Atom } from "lucide-react";
import { HeroCanvas3D } from "./canvas/HeroCanvas3D";
import { MagneticButton } from "./ui/MagneticButton";
import { HaikeiWaves } from "./ui/HaikeiWaves";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 sm:pt-32 pb-14 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden bg-tech-grid bg-radial-gradient"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
        {/* Top Status & Location Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-3 mb-8 text-xs font-mono"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-slate-300 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-semibold">STATUS:</span>
            <span>Machine Learning & Data Enthusiast • Open to Opportunities</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-cyan-400" /> Pune, MH, India
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-400 font-mono">
              MIT-WPU (CGPA: 8.74)
            </span>
          </div>
        </motion.div>

        {/* Hero Grid: Main Pitch & 3D Interactive Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Well-Rounded Human Summary */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <div>
              <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2.5 flex items-center gap-2">
                <Sparkles size={14} /> AI, Machine Learning & Systems Engineer
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Architecting <br className="hidden sm:inline" />
                <span className="gradient-text-cyan-violet">
                  Intelligent Systems
                </span>{" "}
                & Scalable ML Solutions.
              </h1>
            </div>

            {/* Generic, Well-Rounded Summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              I develop robust deep learning architectures and data-driven systems designed for mathematical rigor, real-world scalability, and transparent explainability. My work spans deep sequence modeling, physics-informed neural operators, quantum machine learning, and high-performance full-stack intelligence pipelines.
            </p>

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

          {/* Right Column: Functional 3D Interactive Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            <div className="w-full relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-4 shadow-2xl shadow-cyan-500/5">
              {/* Header Label inside 3D Container */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                  <Atom size={13} /> Interactive 3D Model Explorer
                </span>
                <span className="text-slate-500">Drag to Orbit</span>
              </div>

              {/* Functional 3D Three.js Canvas */}
              <HeroCanvas3D />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Haikei SVG Wave Transition at Bottom */}
      <HaikeiWaves variant="bottom" className="mt-8 text-slate-900/40" />
    </section>
  );
};