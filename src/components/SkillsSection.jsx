import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Database, Wrench, Layers, Terminal, Sparkles, Globe2, Cpu, ArrowUpRight, CheckCircle2, ChevronRight, Info } from "lucide-react";
import { BallCanvas3D } from "./canvas/BallCanvas3D";
import { SpotlightCard } from "./ui/SpotlightCard";

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("3d");
  const [selectedTech, setSelectedTech] = useState("PyTorch");

  // Core 3D Interactive Floating Tech Balls
  const techBalls = [
    { name: "PyTorch", iconName: "PyTorch", color: "#f97316" },
    { name: "Python", iconName: "Python", color: "#38bdf8" },
    { name: "Qiskit", iconName: "Qiskit", color: "#8b5cf6" },
    { name: "Scikit-Learn", iconName: "Sklearn", color: "#f59e0b" },
    { name: "React", iconName: "React", color: "#06b6d4" },
    { name: "FastAPI", iconName: "FastAPI", color: "#10b981" },
    { name: "C++", iconName: "C++", color: "#6366f1" },
    { name: "Docker", iconName: "Docker", color: "#0284c7" },
  ];

  // Deep Details for each Technology when clicked
  const techDetails = {
    PyTorch: {
      name: "PyTorch",
      category: "Deep Learning & Neural Operators",
      experience: "Production Research & Development",
      color: "text-orange-400 border-orange-500/30 bg-orange-500/10",
      description:
        "Primary deep learning framework used to formulate 3D Fourier Neural Operator (FNO) surrogate models at Rolls Royce Power Systems and LSTM sequence learners for smart contract exploit detection.",
      keyProjects: [
        { name: "Rolls Royce 3D FNO Pipeline", metric: "99.77% R² on 3D continuous structural mechanics" },
        { name: "BlockGuard Security Engine", metric: "Hybrid LSTM + RF bytecode vulnerability scanner" },
      ],
      coreLibraries: ["torch.nn", "torch.fft", "Custom Residual Blocks", "CUDA Acceleration", "TensorBoard"],
    },
    Python: {
      name: "Python",
      category: "Core Language & Scientific Computing",
      experience: "Advanced (Algorithms & Pipelines)",
      color: "text-sky-400 border-sky-500/30 bg-sky-500/10",
      description:
        "Foundational programming language across all research projects—from building high-throughput ETL data ingestion pipelines (2.8M+ flows) to implementing mathematical physics heuristics and XAI frameworks.",
      keyProjects: [
        { name: "NetSage IDS", metric: "CICIDS2017 high-throughput processing pipeline" },
        { name: "SyndromeAI", metric: "Likelihood-ratio physics-informed feature pipeline" },
      ],
      coreLibraries: ["NumPy", "Pandas", "SciPy", "Multiprocessing", "RobustScaler", "Matplotlib"],
    },
    Qiskit: {
      name: "Qiskit (IBM Quantum)",
      category: "Quantum Machine Learning & Noise Simulation",
      experience: "Applied Quantum Computing Research",
      color: "text-violet-400 border-violet-500/30 bg-violet-500/10",
      description:
        "Simulating quantum gate errors, readout errors, and depolarizing noise channels with AerSimulator and benchmarking hybrid Quantum Neural Networks (QNN) vs classical classifiers.",
      keyProjects: [
        { name: "SyndromeAI", metric: "Stochastic noise modeling & 1024 binomial shot simulation" },
        { name: "Hybrid QNN & QKSVM Research", metric: "Benchmarked quantum kernel SVM on cybersecurity flows" },
      ],
      coreLibraries: ["Qiskit Aer", "AerSimulator", "QuantumCircuit", "PennyLane QNode", "NoiseModel"],
    },
    "Scikit-Learn": {
      name: "Scikit-Learn",
      category: "Classical ML & Ensemble Modeling",
      experience: "Production Ensemble Architecture",
      color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      description:
        "Architecting 5-model soft-voting classifiers (Random Forest, Extra Trees, Gradient Boosting, HistGradientBoosting, MLP) with Apple Silicon optimizations for < 15s training cycles.",
      keyProjects: [
        { name: "SyndromeAI 5-Model Ensemble", metric: "Sub-15s training on M1/M2 Apple Silicon" },
        { name: "NetSage Threat Baseline", metric: "Multi-class stratified cross-validation and ROC metrics" },
      ],
      coreLibraries: ["VotingClassifier", "RandomForestClassifier", "ExtraTreesClassifier", "GridSearchCV"],
    },
    React: {
      name: "React & Vite",
      category: "Full-Stack Frontend & 3D WebGL Interfaces",
      experience: "Modern Interactive UI / UX",
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      description:
        "Crafting real-time cybersecurity SOC dashboards, interactive SHAP explainability visualizers, and 3D WebGL interfaces using Three.js, Tailwind CSS, and Framer Motion.",
      keyProjects: [
        { name: "NetSage SOC Dashboard", metric: "Live threat simulation & interactive confusion matrices" },
        { name: "BlockGuard Security Console", metric: "Real-time Solidity-to-Opcode inspection UI" },
      ],
      coreLibraries: ["React 19", "Three.js", "Framer Motion", "Tailwind CSS", "Recharts", "Lucide React"],
    },
    FastAPI: {
      name: "FastAPI & Flask",
      category: "High-Performance Backend & REST APIs",
      experience: "Sub-Second Microservices",
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      description:
        "Building asynchronous Python API microservices capable of sub-second inference response times (0.85s P95) and streaming real-time simulation data to web dashboards.",
      keyProjects: [
        { name: "NetSage Real-Time Detection API", metric: "Asynchronous traffic simulation endpoint" },
        { name: "BlockGuard Opcode Compiler API", metric: "Sub-second Solidity compilation & SHAP explainability" },
      ],
      coreLibraries: ["FastAPI", "Uvicorn", "Pydantic", "Flask", "CORS", "AsyncIO"],
    },
    "C++": {
      name: "C & C++",
      category: "Systems Programming & Performance Computing",
      experience: "Algorithms & Low-Level Architecture",
      color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
      description:
        "Academic and competitive programming foundations in memory management, data structures, pointer arithmetic, and high-performance algorithmic problem solving.",
      keyProjects: [
        { name: "Academic DSA & Systems Rigor", metric: "Core computer science course distinction at MIT-WPU" },
        { name: "Algorithmic Implementations", metric: "Optimized graph traversals, dynamic programming, OS primitives" },
      ],
      coreLibraries: ["STL (Vector, Map, Queue)", "Memory Management", "Pointers", "OOP Primitives"],
    },
    Docker: {
      name: "Docker & Cloud Platforms",
      category: "DevOps, Containerization & Tooling",
      experience: "Reproducible ML Environments",
      color: "text-sky-400 border-sky-500/30 bg-sky-500/10",
      description:
        "Containerizing machine learning models, FastAPI backends, and full-stack applications to ensure deterministic environments and reproducible GPU/CPU execution.",
      keyProjects: [
        { name: "Containerized ML Services", metric: "Multi-stage Docker builds for rapid deployment" },
        { name: "Database Integration", metric: "Local and cloud MongoDB Atlas / MySQL container orchestration" },
      ],
      coreLibraries: ["Dockerfile", "Docker Compose", "Git Version Control", "MongoDB Atlas", "Linux Shell"],
    },
  };

  const currentDetail = techDetails[selectedTech] || techDetails["PyTorch"];

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "Java", "C", "C++", "SQL", "R"],
      color: "text-cyan-400",
    },
    {
      title: "Frameworks & ML Libraries",
      icon: Cpu,
      skills: [
        "PyTorch",
        "Neural Operators (FNO)",
        "Scikit-learn",
        "FastAPI",
        "Flask",
        "Streamlit",
        "PennyLane",
        "Qiskit",
        "SHAP (XAI)",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
      ],
      color: "text-violet-400",
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: ["MySQL", "MongoDB", "MongoDB Atlas", "MongoDB Compass"],
      color: "text-emerald-400",
    },
    {
      title: "Developer Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "VS Code", "Visual Studio", "PyCharm", "IntelliJ", "Eclipse", "Docker", "Vite"],
      color: "text-amber-400",
    },
    {
      title: "Spoken Languages",
      icon: Globe2,
      skills: ["English (Professional)", "Marathi (Native)", "Hindi (Fluent)", "German (Basic)"],
      color: "text-pink-400",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2 flex items-center gap-2">
          <Layers size={14} /> Technical Arsenal & Core Stack
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Tools of Rigorous Engineering
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
          Click on any 3D ball or technology to inspect its applied role across my research and projects.
        </p>

        {/* View Switcher */}
        <div className="flex items-center gap-2 mt-6 p-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono">
          <button
            onClick={() => setActiveTab("3d")}
            className={`px-4 py-1.5 rounded-full transition-all ${
              activeTab === "3d"
                ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            3D Interactive Balls
          </button>
          <button
            onClick={() => setActiveTab("matrix")}
            className={`px-4 py-1.5 rounded-full transition-all ${
              activeTab === "matrix"
                ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Categorized Matrix
          </button>
        </div>
      </div>

      {/* 3D Floating Ball Canvas Grid & Interactive Inspector */}
      {activeTab === "3d" && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
            <div className="text-center text-xs font-mono text-slate-400 mb-6 flex items-center justify-center gap-2">
              <Sparkles size={14} className="text-cyan-400" />
              <span>Click on any 3D ball below to view its deep technical breakdown</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 justify-items-center">
              {techBalls.map((tech, idx) => (
                <BallCanvas3D
                  key={idx}
                  name={tech.name}
                  iconName={tech.iconName}
                  color={tech.color}
                  isSelected={selectedTech === tech.name}
                  onSelect={(name) => setSelectedTech(name)}
                />
              ))}
            </div>
          </div>

          {/* Interactive Technology Intelligence Drawer */}
          <AnimatePresence mode="wait">
            {currentDetail && (
              <motion.div
                key={selectedTech}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-cyan-500/5"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  {/* Left Detail Summary */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${currentDetail.color}`}>
                        {currentDetail.name}
                      </span>
                      <span className="text-xs font-mono text-cyan-400">
                        {currentDetail.category}
                      </span>
                      <span className="text-slate-500 hidden sm:inline">•</span>
                      <span className="text-xs font-mono text-slate-400">
                        {currentDetail.experience}
                      </span>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {currentDetail.description}
                    </p>

                    {/* Applied Projects */}
                    <div className="pt-2">
                      <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-2">
                        Applied In Real-World Projects:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {currentDetail.keyProjects.map((p, pIdx) => (
                          <div
                            key={pIdx}
                            className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between"
                          >
                            <span className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                              <CheckCircle2 size={13} className="text-cyan-400" />
                              {p.name}
                            </span>
                            <span className="text-xs font-mono text-slate-400 mt-1">
                              {p.metric}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Core Modules / Libraries */}
                  <div className="md:w-72 shrink-0 p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                    <h4 className="text-xs font-mono uppercase text-cyan-400 font-semibold flex items-center gap-1.5">
                      <Info size={13} /> Key Modules & Capabilities
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {currentDetail.coreLibraries.map((lib, lIdx) => (
                        <span
                          key={lIdx}
                          className="px-2.5 py-1 rounded text-xs font-mono bg-slate-900 border border-slate-700/60 text-slate-300"
                        >
                          {lib}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Categorized Matrix Grid */}
      {activeTab === "matrix" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <SpotlightCard
                key={idx}
                className="border-slate-800/80 hover:border-cyan-500/30 flex flex-col justify-between"
                spotlightColor="rgba(6, 182, 212, 0.1)"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                      <Icon size={18} className={cat.color} />
                    </div>
                    <h3 className="font-semibold text-white text-base">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        onClick={() => {
                          if (techDetails[skill]) {
                            setSelectedTech(skill);
                            setActiveTab("3d");
                          }
                        }}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/60 border border-slate-700/50 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 cursor-pointer transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      )}
    </section>
  );
};
