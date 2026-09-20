import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Database, Wrench, Layers, Terminal, Sparkles, Globe2, Cpu, ArrowUpRight, CheckCircle2, ChevronRight, Info, Compass } from "lucide-react";
import { BallCanvas3D } from "./canvas/BallCanvas3D";
import { SpotlightCard } from "./ui/SpotlightCard";

export const SkillsSection = () => {
  const [selectedTech, setSelectedTech] = useState("Python");

  // Core 3D Interactive Floating Tech Balls
  const techBalls = [
    { name: "Python", iconName: "Python", color: "#38bdf8" },
    { name: "PyTorch", iconName: "PyTorch", color: "#f97316" },
    { name: "Qiskit", iconName: "Qiskit", color: "#8b5cf6" },
    { name: "Scikit-Learn", iconName: "Sklearn", color: "#f59e0b" },
    { name: "React", iconName: "React", color: "#06b6d4" },
    { name: "FastAPI", iconName: "FastAPI", color: "#10b981" },
    { name: "C++", iconName: "C++", color: "#6366f1" },
    { name: "PySpark", iconName: "PySpark", color: "#e11d48" },
  ];

  // Deep Details for each Technology
  const techDetails = {
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
    PyTorch: {
      name: "PyTorch",
      category: "Deep Learning & Neural Operators",
      experience: "Production Research & Development",
      color: "text-orange-400 border-orange-500/30 bg-orange-500/10",
      description:
        "Primary deep learning framework used to formulate 3D Fourier Neural Operator (FNO) surrogate models at Rolls Royce Power Systems and LSTM sequence learners for smart contract exploit detection.",
      keyProjects: [
        { name: "Rolls Royce 3D FNO Pipeline", metric: "99.77% R² on 3D continuous structural mechanics" },
        { name: "BlockGuard Guardrails", metric: "Real-time bytecode tensor classification" },
      ],
      coreLibraries: ["torch.nn", "SpectralConv3d", "CUDA Acceleration", "Autograd", "TorchVision"],
    },
    Qiskit: {
      name: "Qiskit & Quantum AI",
      category: "Quantum Computing & Clifford Fault-Tolerance",
      experience: "Advanced Syndrome Theory",
      color: "text-violet-400 border-violet-500/30 bg-violet-500/10",
      description:
        "Designing [[n, k, d]] quantum stabilizer codes and simulating Clifford noise gates to classify bit-flip and phase-flip error chains using classical ML ensembles.",
      keyProjects: [
        { name: "SyndromeAI Classical Decoder", metric: "Sub-microsecond syndrome pattern attribution" },
        { name: "Stabilizer Generator Circuits", metric: "Steane code & surface code noise modeling" },
      ],
      coreLibraries: ["QuantumCircuit", "AerSimulator", "StabilizerTableau", "PauliOperators", "Clifford"],
    },
    "Scikit-Learn": {
      name: "Scikit-Learn & ML Ensembles",
      category: "Explainable Classical ML & Optimization",
      experience: "Production XAI & Statistical Modeling",
      color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      description:
        "Formulating soft-voting ensembles (MLP, ExtraTrees, HistGradientBoosting) with SHAP tree explainers for glass-box interpretability and high-stakes anomaly isolation.",
      keyProjects: [
        { name: "DL_CCA Quantum Soft-Voting", metric: "99.2% recall with heuristic XAI overrides" },
        { name: "NetSage Network Anomaly Isolation", metric: "Zero feature leak with high precision" },
      ],
      coreLibraries: ["VotingClassifier", "ExtraTrees", "HistGradientBoosting", "SHAP", "Optuna"],
    },
    React: {
      name: "React & Modern Web UIs",
      category: "Full-Stack Frontends & Real-Time Dashboards",
      experience: "Production SPAs & Data Visualization",
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      description:
        "Crafting high-performance telemetry dashboards, interactive 3D WebGL visualizations, and responsive developer interfaces with smooth 60fps micro-animations.",
      keyProjects: [
        { name: "SyndromeAI Quantum Studio", metric: "Interactive error-chain debugger UI" },
        { name: "NetSage Network Traffic Visualizer", metric: "Real-time attack trace breakdown" },
      ],
      coreLibraries: ["React 19", "Framer Motion", "Tailwind CSS", "Three.js / WebGL", "Vite"],
    },
    FastAPI: {
      name: "FastAPI & Microservices",
      category: "Asynchronous APIs & Inference Backends",
      experience: "High-Throughput Model Serving",
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      description:
        "Building asynchronous REST endpoints with Pydantic type safety for streaming real-time network flow inferences and quantum error syndrome classifications.",
      keyProjects: [
        { name: "SyndromeAI Inference API", metric: "<15ms average P99 latency" },
        { name: "BlockGuard Contract Scanner", metric: "Sub-second static analysis pipeline" },
      ],
      coreLibraries: ["AsyncIO", "Pydantic V2", "Uvicorn", "Starlette", "WebSockets"],
    },
    "C++": {
      name: "C++ (Data Structures & Systems)",
      category: "Low-Level Performance & Algorithmic Rigor",
      experience: "Data Structures & Systems Optimization",
      color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
      description:
        "Solid foundations in object-oriented architecture, pointer arithmetic, memory management, and deterministic algorithms for high-speed algorithmic execution.",
      keyProjects: [
        { name: "Academic DSA & Systems Rigor", metric: "Core computer science course distinction at MIT-WPU" },
        { name: "Algorithmic Implementations", metric: "Optimized graph traversals, dynamic programming, OS primitives" },
      ],
      coreLibraries: ["STL (Vector, Map, Queue)", "Memory Management", "Pointers", "OOP Primitives"],
    },
    PySpark: {
      name: "PySpark & Big Data Technologies",
      category: "Distributed Computing & Large-Scale Processing",
      experience: "Big Data Pipelines & Distributed Analytics",
      color: "text-rose-400 border-rose-500/30 bg-rose-500/10",
      description:
        "Processing large-scale datasets, distributed ETL pipelining, and high-throughput transformations with PySpark and Hadoop ecosystem architectures.",
      keyProjects: [
        { name: "High-Throughput Log Processing", metric: "Distributed parallel aggregations and transformations" },
        { name: "Big Data Technologies Rigor", metric: "Coursework distinction in distributed data architectures at MIT-WPU" },
      ],
      coreLibraries: ["PySpark DataFrame API", "Spark SQL", "Hadoop HDFS", "MapReduce", "Resilient Distributed Datasets (RDD)"],
    },
    Java: {
      name: "Java",
      category: "Object-Oriented Programming & Enterprise Backends",
      experience: "Academic & Systems Development",
      color: "text-red-400 border-red-500/30 bg-red-500/10",
      description:
        "Strong foundation in OOP principles, design patterns, multithreading, and robust backend engineering with JDBC and database integrations.",
      keyProjects: [
        { name: "Academic Systems & OOP", metric: "Core software engineering distinction at MIT-WPU" },
      ],
      coreLibraries: ["OOP Principles", "Java Collections", "Multithreading", "JDBC", "Design Patterns"],
    },
    SQL: {
      name: "SQL & Relational Databases",
      category: "Relational Modeling & Query Optimization",
      experience: "Database Schema Design & Query Tuning",
      color: "text-teal-400 border-teal-500/30 bg-teal-500/10",
      description:
        "Designing ACID-compliant relational schemas, indexed relational queries, complex joins, and transactional database schemas across MySQL and PostgreSQL.",
      keyProjects: [
        { name: "Relational Telemetry Logs", metric: "Optimized multi-table query performance" },
      ],
      coreLibraries: ["Complex Joins", "Indexing Strategies", "Stored Procedures", "ACID Transactions", "MySQL"],
    },
    MongoDB: {
      name: "MongoDB & MongoDB Atlas",
      category: "NoSQL & Distributed Data Lake",
      experience: "Document Modeling & Telemetry",
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      description:
        "Handling unstructured scan metadata, telemetry streaming, and JSONL data lake repositories for continuous model retraining.",
      keyProjects: [
        { name: "BlockGuard Security Scanner", metric: "Autonomous model retraining data lake" },
      ],
      coreLibraries: ["MongoDB Atlas", "Aggregation Pipeline", "Mongoose / PyMongo", "Compass"],
    },
    Git: {
      name: "Git & Version Control",
      category: "DevOps & Team Collaboration",
      experience: "CI/CD & Source Management",
      color: "text-orange-400 border-orange-500/30 bg-orange-500/10",
      description:
        "Managing multi-branch research and full-stack repositories, semantic commit history, and GitHub CI/CD automation pipelines.",
      keyProjects: [
        { name: "Open-Source Repositories", metric: "Clean modular architectures on GitHub @VaradCodes31" },
      ],
      coreLibraries: ["Git CLI", "GitHub Actions", "Semantic Versioning", "Branch Workflows"],
    },
    Streamlit: {
      name: "Streamlit",
      category: "Rapid ML Prototyping & Dashboards",
      experience: "Real-Time Explainability Interfaces",
      color: "text-pink-400 border-pink-500/30 bg-pink-500/10",
      description:
        "Developing interactive research dashboards for real-time SHAP explainability, model breakdown, and quantum noise inspection.",
      keyProjects: [
        { name: "SyndromeAI Dashboard", metric: "Real-time XAI Logic Breakdown for researchers" },
      ],
      coreLibraries: ["Streamlit", "SHAP Plots", "Matplotlib", "Seaborn", "SessionState"],
    },
  };

  const currentDetail = techDetails[selectedTech] || techDetails["Python"];

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
        "Neural Operators",
        "Scikit-Learn",
        "FastAPI",
        "Flask",
        "Streamlit",
        "PennyLane",
        "Qiskit",
        "SHAP",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
      ],
      color: "text-violet-400",
    },
    {
      title: "Big Data & Storage",
      icon: Database,
      skills: ["PySpark", "Hadoop HDFS", "MapReduce", "Spark SQL", "MySQL", "MongoDB Atlas", "SQL"],
      color: "text-emerald-400",
    },
    {
      title: "Developer Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "PyCharm", "IntelliJ", "Vite", "Linux Shell"],
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
          Click any 3D floating ball or matrix skill tag below to inspect its applied role, key modules, and real-world metrics.
        </p>
      </div>

      <div className="space-y-8">
        {/* 1. Interactive 3D Tech Balls Stage */}
        <div className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
          <div className="text-center text-xs font-mono text-slate-400 mb-6 flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-cyan-400" />
            <span>Interactive 3D Tech Arsenal (Click to inspect • Drag to rotate)</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 justify-items-center">
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

        {/* 2. Interactive Technology Intelligence Card (Live Breakdown on Click) */}
        <AnimatePresence mode="wait">
          {currentDetail && (
            <motion.div
              key={selectedTech}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
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

        {/* 3. Comprehensive Categorized Skill Matrix */}
        <div>
          <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            <Compass size={14} className="text-cyan-400" />
            <span>Categorized Domain Competencies (Click any skill to inspect)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <SpotlightCard
                  key={idx}
                  className="border-slate-800/80 hover:border-cyan-500/30 flex flex-col justify-between p-5"
                  spotlightColor="rgba(6, 182, 212, 0.1)"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3.5">
                      <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700">
                        <Icon size={16} className={cat.color} />
                      </div>
                      <h3 className="font-semibold text-white text-sm">
                        {cat.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill, sIdx) => {
                        const isSkillSelected = selectedTech.toLowerCase() === skill.toLowerCase();
                        return (
                          <button
                            key={sIdx}
                            onClick={() => {
                              const match = Object.keys(techDetails).find(
                                (k) => k.toLowerCase() === skill.toLowerCase()
                              );
                              if (match) setSelectedTech(match);
                            }}
                            className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all ${
                              isSkillSelected
                                ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20 scale-105"
                                : "bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300"
                            }`}
                          >
                            {skill}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
