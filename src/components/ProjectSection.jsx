import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, ExternalLink, Github, Sparkles, Terminal, Cpu, Shield, ArrowUpRight, BarChart3, Atom, Layers } from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";
import { TiltCard } from "./ui/TiltCard";
import { ProjectModal } from "./ui/ProjectModal";

export const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Quantum ML", "Deep Learning", "Cybersecurity", "Blockchain"];

  const projects = [
    {
      id: "syndrome-ai",
      title: "SyndromeAI — Quantum Error Detection & XAI",
      subtitle: "5-Model Soft-Voting Ensemble with Physics-Informed Feature Engineering & Qiskit Hardware Noise Modeling",
      category: "Quantum ML",
      date: "Feb 2026 — Apr 2026",
      featured: true,
      borderColor: "hover:border-cyan-400/50",
      description:
        "Architected an explainable AI system classifying 4 quantum noise channels (Bit Flip, Phase Flip, Readout, Depolarizing noise) using physics-informed likelihood ratios to resolve gate/measurement error overlaps.",
      metrics: [
        { label: "Noise Channels", value: "4 Distinct" },
        { label: "Ensemble Time", value: "< 15s M1/M2" },
        { label: "Shot Sim", value: "1024 Shots" },
        { label: "Interpretability", value: "SHAP Logic" },
      ],
      highlights: [
        "Engineered a Physics-Informed Feature Pipeline integrating theoretical likelihood ratios from quantum mechanics into the training data.",
        "Constructed a 5-model soft-voting classifier (MLP, Random Forest, Extra Trees, Gradient Boosting) for high-accuracy noise channel classification.",
        "Built a real-time Explainable AI (XAI) dashboard with Streamlit and SHAP with a 'Logic Breakdown' correlating neural network decisions to quantum principles.",
        "Simulated quantum hardware noise using Qiskit Aer with stochastic noise modeling replicating superconducting qubit statistical jitter.",
      ],
      tech: ["Python", "Qiskit", "Scikit-learn", "SHAP", "NumPy", "Pandas", "RobustScaler", "Streamlit"],
      github: "https://github.com/VaradCodes31",
      liveUrl: null,
    },
    {
      id: "netsage-ids",
      title: "NetSage IDS — Explainable Threat Detection",
      subtitle: "Multi-Class Network IDS with XGBoost, Hybrid Quantum ML (QNN/QKSVM) & SOC Dashboard",
      category: "Cybersecurity",
      date: "Feb 2026 — Mar 2026",
      featured: true,
      borderColor: "hover:border-violet-400/50",
      description:
        "High-performance intrusion detection system evaluated on 2.8M+ CICIDS2017 flows achieving 99.88% detection accuracy across 15 attack classes with hybrid QNN research.",
      metrics: [
        { label: "Accuracy", value: "99.88%" },
        { label: "Flows Evaluated", value: "2.8M+" },
        { label: "Attack Classes", value: "15 Types" },
        { label: "Interface", value: "React + FastAPI" },
      ],
      highlights: [
        "Multi-Class Threat Classification: 99.88% accuracy across 15 distinct network attack categories using an optimized XGBoost engine.",
        "Quantum ML Research: Benchmarked Hybrid Quantum Neural Networks (QNN) and Quantum Kernel SVM (QKSVM) against classical baselines using PennyLane and Qiskit.",
        "Advanced XAI Forensics: SHAP-based explainability generating global feature importance and instance-level threat attribution.",
        "Full-Stack SOC Console: Real-time traffic simulation and interactive forensic reports built with React, Vite, Tailwind CSS, and FastAPI.",
      ],
      tech: ["Python", "XGBoost", "Scikit-learn", "SHAP", "Qiskit", "PennyLane", "React", "Vite", "FastAPI", "Tailwind CSS"],
      github: "https://github.com/VaradCodes31",
      liveUrl: null,
    },
    {
      id: "blockguard",
      title: "BlockGuard — Smart Contract AI Security",
      subtitle: "Hybrid LSTM + Random Forest Security Scanner with Sub-Second P95 Inference",
      category: "Blockchain",
      date: "Jan 2026 — Mar 2026",
      featured: false,
      borderColor: "hover:border-emerald-400/50",
      description:
        "Hybrid deep sequence and heuristic machine learning engine increasing smart contract vulnerability detection from 83% to 97.2% with 0.85s sub-second P95 response time.",
      metrics: [
        { label: "Accuracy", value: "97.2%" },
        { label: "P95 Latency", value: "0.85s" },
        { label: "Speedup vs Mythril", value: "200x" },
        { label: "Telemetry", value: "JSONL Lake" },
      ],
      highlights: [
        "Architected Hybrid AI Engine combining LSTM sequential opcode learning and Random Forest heuristic models to resolve neural overconfidence.",
        "Engineered Full-Stack Security Dashboard with React, Vite, and Flask featuring real-time Solidity compilation (Solc) and SHAP feature heatmaps.",
        "Achieved 0.85s P95 response time—outperforming traditional symbolic execution tools (like Mythril) by over 200x for DevSecOps CI/CD pipelines.",
        "Constructed an Active Learning Telemetry Pipeline continuously logging scans to a data lake for autonomous model retraining.",
      ],
      tech: ["Python (Flask)", "React", "TensorFlow", "Scikit-learn", "SHAP", "Solidity (Solc)", "Tailwind CSS", "Recharts"],
      github: "https://github.com/VaradCodes31",
      liveUrl: null,
    },
    {
      id: "rolls-royce-fno",
      title: "3D Fourier Neural Operator (FNO) Pipeline",
      subtitle: "Physics-Informed Deep Learning for Voxel-Wise Continuous Structural Mechanics",
      category: "Deep Learning",
      date: "Jul 2026 — Present",
      featured: false,
      borderColor: "hover:border-amber-400/50",
      description:
        "Industrial surrogate model developed at Rolls Royce Power Systems achieving 99.77% R² on unseen simulations for voxel-wise stress and structural deformation prediction.",
      metrics: [
        { label: "R² Score", value: "99.77%" },
        { label: "Relative L2 Error", value: "4.75%" },
        { label: "Architecture", value: "3D FNO" },
        { label: "Framework", value: "PyTorch" },
      ],
      highlights: [
        "Formulated a 3D Fourier Neural Operator pipeline mapping arbitrary continuous geometry and mechanical boundary conditions to voxel-wise stress fields.",
        "Engineered end-to-end PyTorch pipeline with automated data preprocessing, residual Fourier frequency layers, and inference benchmarking.",
        "Delivered 99.77% R² and 4.75% Relative L2 error on complex industrial geometries.",
        "Currently implementing geometry-agnostic transfer capabilities without retraining from scratch.",
      ],
      tech: ["Python", "PyTorch", "Fourier Neural Operators", "Deep Learning", "NumPy", "SciPy"],
      github: "https://github.com/VaradCodes31",
      liveUrl: null,
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2 flex items-center gap-2">
            <Cpu size={14} /> Featured Research & Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Applied Intelligence & Systems Craft
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Selected engineering milestones spanning Quantum ML, Explainable AI, Deep Learning, and Cybersecurity.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeCategory === cat
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25 scale-105"
                  : "bg-slate-900/80 hover:bg-slate-800/90 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 backdrop-blur-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Balanced 2-Column Grid */}
      <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="w-full"
            >
              <TiltCard className="h-full">
                <SpotlightCard
                  className={`h-full flex flex-col justify-between border-slate-800 ${project.borderColor} p-6 sm:p-7`}
                  spotlightColor="rgba(6, 182, 212, 0.15)"
                >
                  <div>
                    {/* Top Tag & Date */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        {project.date}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Live Metric Pills */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                      {project.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex flex-col justify-center"
                        >
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-tight truncate">
                            {m.label}
                          </span>
                          <span className="text-xs sm:text-sm font-bold font-mono text-cyan-400 mt-1 truncate">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action & Tech Badges */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/60 border border-slate-700/50 text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[11px] font-mono text-slate-500">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                    >
                      <span>Deep Dive Case Study</span>
                      <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </SpotlightCard>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};