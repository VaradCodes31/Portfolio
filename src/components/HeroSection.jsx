import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Sparkles, Terminal } from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("manifesto");

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden grid-engineering"
    >
      {/* Warm Desk Lamp Ambient Glows */}
      <div className="desk-lamp-light" />
      <div className="desk-lamp-accent-right" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Top Field Journal Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#24344d]/80 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              CURRENT STATUS: COMPUTATIONAL METHODOLOGY INTERN @ ROLLS ROYCE
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1">
              <MapPin size={13} className="text-amber-400" /> Pune, India
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline font-mono">LAT: 18.5204° N, LON: 73.8567° E</span>
          </div>
        </div>

        {/* Dual Panel Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: The Open Leather-Bound Research Logbook */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="logbook-parchment rounded-xl p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden">
              <div className="logbook-margin-line hidden sm:block" />

              {/* Notebook Header */}
              <div className="sm:pl-8">
                <div className="flex items-center justify-between pb-3 border-b border-stone-300/80 mb-4">
                  <div className="flex items-center gap-2 text-stone-600 font-mono text-xs">
                    <span className="font-bold text-stone-800">VOL. IV</span>
                    <span>—</span>
                    <span>LOG ENTRY #084</span>
                  </div>
                  <span className="text-xs font-serif italic text-stone-500">Updated August 2026</span>
                </div>

                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 leading-tight mb-3">
                  "On Crafting Intelligent Systems, Scalable Pipelines & Transparent AI"
                </h2>

                {/* Handwritten Reflection Text */}
                <div className="font-serif text-stone-800 text-base sm:text-lg leading-relaxed space-y-3">
                  <p>
                    Building high-impact software isn't just about training neural networks in isolation—it's about the entire engineering lifecycle: from high-throughput ingestion pipelines to real-time inference and transparent interpretability.
                  </p>
                  <p>
                    Whether formulating <strong className="text-amber-900 font-semibold bg-amber-200/50 px-1 rounded">physics-informed surrogate models</strong>, parsing EVM bytecode for smart contract security, or building sub-second XAI dashboards, my goal is always the same:
                  </p>
                  <p className="italic text-stone-700">
                    "Build systems that are mathematically rigorous, scalable under pressure, and intuitive for humans to trust."
                  </p>
                </div>

                {/* Hand-Drawn SVG Architecture Sketch inside Logbook */}
                <div className="my-5 p-3 rounded bg-stone-100/80 border border-stone-300 relative">
                  <div className="text-[10px] font-mono text-stone-500 uppercase tracking-widest mb-1 flex items-center justify-between">
                    <span>// Sketch 1.2: End-to-End Intelligent Systems Architecture</span>
                    <span className="text-amber-700 font-bold">Data → ML → XAI</span>
                  </div>
                  <svg
                    viewBox="0 0 420 110"
                    className="w-full h-auto text-stone-800"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    {/* Data Stream Box */}
                    <rect x="10" y="25" width="70" height="60" rx="4" stroke="#475569" strokeDasharray="3 3" fill="#f8fafc" />
                    <text x="45" y="52" textAnchor="middle" fontSize="10" fontFamily="Newsreader" fontWeight="bold" fill="#1e293b">Data Ingestion</text>
                    <text x="45" y="68" textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono" fill="#64748b">2.8M+ Stream</text>
                    
                    {/* Arrow 1 */}
                    <path d="M85 55 L115 55" stroke="#8b5a2b" />
                    <path d="M110 50 L117 55 L110 60" fill="#8b5a2b" />
                    
                    {/* ML / Deep Learning Core */}
                    <rect x="120" y="20" width="80" height="70" rx="6" stroke="#b45309" fill="#fef3c7" />
                    <text x="160" y="46" textAnchor="middle" fontSize="11" fontFamily="Newsreader" fontWeight="bold" fill="#78350f">ML Engine</text>
                    <text x="160" y="62" textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono" fill="#92400e">FNO / Ensemble</text>
                    <text x="160" y="76" textAnchor="middle" fontSize="8" fontFamily="Caveat" fill="#b45309">99.77% R²</text>

                    {/* Arrow 2 */}
                    <path d="M205 55 L230 55" stroke="#8b5a2b" />
                    <path d="M225 50 L232 55 L225 60" fill="#8b5a2b" />

                    {/* SHAP & XAI Layer */}
                    <rect x="235" y="20" width="85" height="70" rx="6" stroke="#0369a1" fill="#e0f2fe" />
                    <text x="277" y="46" textAnchor="middle" fontSize="10" fontFamily="Newsreader" fontWeight="bold" fill="#0369a1">XAI Forensics</text>
                    <text x="277" y="62" textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono" fill="#0284c7">SHAP / Logic</text>
                    <text x="277" y="75" textAnchor="middle" fontSize="8" fontFamily="Caveat" fill="#075985">Glass-Box Trust</text>

                    {/* Arrow 3 */}
                    <path d="M325 55 L345 55" stroke="#8b5a2b" />
                    <path d="M340 50 L347 55 L340 60" fill="#8b5a2b" />

                    {/* Real-time Dashboard / UI */}
                    <rect x="350" y="25" width="60" height="60" rx="4" stroke="#15803d" fill="#dcfce7" />
                    <text x="380" y="52" textAnchor="middle" fontSize="10" fontFamily="Newsreader" fontWeight="bold" fill="#166534">Real-Time</text>
                    <text x="380" y="68" textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono" fill="#15803d">&lt; 0.85s UI</text>
                  </svg>
                </div>

                {/* Footer Signature */}
                <div className="flex items-center justify-between pt-2 border-t border-stone-300/60">
                  <div className="font-handwriting text-2xl text-stone-700">
                    ~ Varad Alshi
                  </div>
                  <div className="text-[11px] font-mono text-stone-500">
                    [MIT-WPU B.Tech • CGPA 8.72]
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Engineer Dossier Card */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="blueprint-card rounded-xl p-6 sm:p-8 flex flex-col justify-between h-full relative">
              
              {/* Pinned Washi Tape Accent */}
              <div className="washi-tape absolute -top-3.5 right-10 px-4 py-0.5 rounded text-[10px] font-mono text-amber-300 uppercase tracking-wider shadow-md">
                ★ Research Portfolio Dossier
              </div>

              <div>
                {/* Header Tag */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    PHYSICS-INFORMED AI
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    EXPLAINABLE AI (XAI)
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2 font-sans">
                  Varad Alshi
                </h1>
                <p className="text-lg text-amber-400 font-serif italic mb-6">
                  Computational Methodology Researcher & AI Systems Architect
                </p>

                {/* Featured Experience Box */}
                <div className="p-4 rounded-lg bg-[#182337] border border-[#2b3d5c] mb-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="text-xs font-mono text-amber-400/80 uppercase">Current Work</div>
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        Rolls Royce Power Systems
                        <span className="text-xs font-normal text-slate-400 font-mono">(On-site, Pune)</span>
                      </h3>
                      <p className="text-xs font-mono text-slate-300">Computational Methodology Intern // Jul 2026 – Present</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans mt-2">
                    Engineering a <strong>3D Fourier Neural Operator (FNO)</strong> pipeline in PyTorch for voxel-wise structural response predictions, reaching <strong>99.77% R²</strong> and <strong>4.75% Relative L2 error</strong>.
                  </p>
                </div>

                {/* Key Research Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-[#111726] border border-[#1e2a40] text-center">
                    <div className="text-xl sm:text-2xl font-bold text-amber-400 font-mono">99.77%</div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">3D FNO R² Score</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#111726] border border-[#1e2a40] text-center">
                    <div className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono">4.75%</div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">Relative L2 Error</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#111726] border border-[#1e2a40] text-center">
                    <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">&lt; 0.85s</div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">P95 Inference</div>
                  </div>
                </div>

                {/* Core Competencies Pills */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Research Focus Areas</div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Neural Operators (FNO)",
                      "Quantum Error Detection",
                      "Physics-Informed ML",
                      "SHAP / Glass-Box XAI",
                      "Qiskit Aer Noise Modeling",
                      "Hybrid QNN / QKSVM",
                      "PyTorch & Scikit-Learn",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-[#1c273e] text-slate-200 border border-[#2d3e5e]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons & Socials */}
              <div className="pt-4 border-t border-[#24344d] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <a
                    href="#experience"
                    className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs font-mono hover:bg-amber-400 transition-all shadow-[0_0_15px_rgba(245,158,11,0.25)] flex items-center gap-2"
                  >
                    <span>Read Research Dossier</span>
                    <ArrowDown size={14} />
                  </a>
                  <a
                    href="#contact"
                    className="px-4 py-2 rounded-lg bg-[#1b253b] text-slate-200 border border-[#2e3e5c] text-xs font-mono hover:bg-[#23304c] hover:text-white transition-all flex items-center gap-1.5"
                  >
                    <Mail size={14} className="text-amber-400" />
                    <span>Contact Desk</span>
                  </a>
                </div>

                {/* Social Icon Strip */}
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/VaradCodes31"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#141d2e] border border-[#24344d] text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="https://linkedin.com/in/varadalshi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#141d2e] border border-[#24344d] text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="mailto:varadalshi7@gmail.com"
                    className="p-2 rounded-lg bg-[#141d2e] border border-[#24344d] text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                    aria-label="Email Varad"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};