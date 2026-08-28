import { ArrowRight, CheckCircle2, ChevronRight, Code2, Cpu, ExternalLink, FileCode, FolderGit2, Github, ShieldAlert, Sparkles } from "lucide-react";
import { useState } from "react";

const researchProjects = [
  {
    id: "syndrome-ai",
    folderNumber: "01",
    tag: "QUANTUM COMPUTING & XAI",
    title: "SyndromeAI — Quantum Error Detection & XAI System",
    date: "Feb 2026 – Apr 2026",
    status: "Published & Tested",
    summary:
      "A physics-informed deep learning and ensemble architecture designed to classify stochastic qubit errors across 4 quantum noise channels with complete SHAP explainability.",
    metrics: [
      { label: "Ensemble Soft-Voting Accuracy", value: "99.4%" },
      { label: "Quantum Noise Channels", value: "4 (Bit/Phase/Readout/Depol)" },
      { label: "M1/M2 Apple Silicon Training", value: "< 15s" },
      { label: "Shot Simulation Count", value: "1,024 Shots" },
    ],
    architecture: {
      type: "5-Model Soft-Voting Ensemble + Physics Likelihood Pipeline",
      components: [
        "Physics-Informed Feature Layer (Quantum Likelihood Ratios)",
        "5-Model Ensemble: Multi-Layer Perceptron (MLP) + Random Forest + Extra Trees + HistGradientBoosting + Gradient Boosting",
        "SHAP Feature Attribution: Correlating neuron activations directly to physical Hamiltonian error terms",
        "Qiskit Aer Noise Simulator: Stochastic Pauli channel & measurement jitter replication",
      ],
    },
    iterationLog:
      "Logbook Entry #42: Statistical overlap between gate-based and measurement noise resolved by baking theoretical likelihood ratios directly into the feature pipeline. Training time dropped to 14.2s on Apple Silicon using specialized Scikit-Learn solvers.",
    tags: ["Python", "Qiskit Aer", "PyTorch", "Scikit-learn", "SHAP (XAI)", "NumPy", "Pandas", "RobustScaler", "Streamlit"],
    githubUrl: "https://github.com/VaradCodes31/Quantum-Error-Detection",
  },
  {
    id: "netsage-ids",
    folderNumber: "02",
    tag: "CYBERSECURITY & QUANTUM ML",
    title: "NetSage IDS — Explainable Intrusion Detection & QML",
    date: "Feb 2026 – Mar 2026",
    status: "SOC Dashboard Deployed",
    summary:
      "An enterprise-grade, explainable network threat detection system evaluating 2.8M+ network flows, benchmarked with Hybrid Quantum Neural Networks (QNN) and Quantum Kernel SVM (QKSVM).",
    metrics: [
      { label: "CICIDS2017 Dataset Accuracy", value: "99.88%" },
      { label: "Dataset Scale", value: "2.8M+ Flows" },
      { label: "Attack Categories Detected", value: "15 Distinct Vectors" },
      { label: "Explainability Fidelity", value: "100% Glass-Box SHAP" },
    ],
    architecture: {
      type: "XGBoost Engine + Hybrid Quantum Machine Learning Benchmark",
      components: [
        "High-Throughput XGBoost Multi-Class Classifier on 2.8M+ stratified flows",
        "Quantum ML Research: Benchmarking Hybrid QNN and PennyLane/Qiskit Quantum Kernel SVMs",
        "Glass-Box XAI Forensics: Instant waterfall plots displaying exact payload byte triggers",
        "Full-Stack SOC Interface: React 19 + Vite frontend paired with FastAPI asynchronous engine",
      ],
    },
    iterationLog:
      "Logbook Entry #29: High precision on DDoS and Infiltration attacks achieved with zero data leakage. SHAP summary plots show Flow Duration and Backward Packet Length as primary global threat signals.",
    tags: ["Python", "XGBoost", "PennyLane", "Qiskit", "FastAPI", "React", "SHAP", "Tailwind CSS", "Chart.js"],
    githubUrl: "https://github.com/VaradCodes31/IntrusionDetectionSystem",
  },
  {
    id: "blockguard",
    folderNumber: "03",
    tag: "SMART CONTRACT DEFENSE",
    title: "BlockGuard — AI Smart Contract Vulnerability Detection",
    date: "Jan 2026 – Mar 2026",
    status: "Active CI/CD Tool",
    summary:
      "A hybrid deep sequence (LSTM) and heuristic ML engine that deconstructs Solidity bytecode to detect re-entrancy and arithmetic exploits in under 0.85 seconds.",
    metrics: [
      { label: "Classification Accuracy", value: "97.2% (vs 83% Baseline)" },
      { label: "P95 Inference Latency", value: "0.85s (200x > Mythril)" },
      { label: "Solidity Opcode Parsing", value: "Real-Time (Solc)" },
      { label: "Continuous Learning", value: "JSONL Active Pipeline" },
    ],
    architecture: {
      type: "Hybrid LSTM Deep Sequence + Random Forest Heuristic Classifier",
      components: [
        "Automated Solidity-to-Opcode Disassembler with instruction-level tokenization",
        "Bi-Directional LSTM sequence model extracting temporal control-flow exploit vectors",
        "Heuristic Random Forest ensemble preventing neural overconfidence on out-of-distribution code",
        "Asynchronous JSONL Active Learning telemetry for continuous zero-day rule retraining",
      ],
    },
    iterationLog:
      "Logbook Entry #17: Pure LSTM networks suffered overconfidence on obfuscated opcodes. Coupling sequence vectors with a tree-based heuristic filter boosted accuracy from 83% to 97.2% without sacrificing 0.85s P95 latency.",
    tags: ["Python (Flask)", "TensorFlow", "React", "Scikit-learn", "SHAP", "Solidity", "Recharts", "JSONL"],
    githubUrl: "https://github.com/VaradCodes31/BlockGuard",
  },
];

export const ProjectSection = () => {
  const [activeProjectId, setActiveProjectId] = useState("syndrome-ai");
  const activeProject = researchProjects.find((p) => p.id === activeProjectId) || researchProjects[0];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative grid-engineering">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#24344d]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              SECTION 03 // RESEARCH LAB FOLDERS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
              Applied AI & Quantum Research Projects
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-sm">
            Each research folder details the mathematical problem, architecture blueprint, iteration logs, and explainability breakdown.
          </p>
        </div>

        {/* Manila Folder Navigation Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 items-end mb-0 border-b border-[#283852] pl-2">
          {researchProjects.map((project) => {
            const isActive = activeProjectId === project.id;
            return (
              <button
                key={project.id}
                onClick={() => setActiveProjectId(project.id)}
                className={`manila-folder-tab px-4 sm:px-6 py-3 text-xs sm:text-sm font-mono flex items-center gap-2.5 transition-all ${
                  isActive ? "active" : "hover:bg-[#182337] hover:text-slate-200"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? "bg-amber-400" : "bg-slate-500"}`} />
                <span className="font-bold">{project.folderNumber}.</span>
                <span className="truncate max-w-[150px] sm:max-w-none">{project.id.toUpperCase()}</span>
                {isActive && <span className="text-[10px] text-amber-300 font-sans hidden md:inline">• OPEN DOSSIER</span>}
              </button>
            );
          })}
        </div>

        {/* Active Manila Research Folder Content Window */}
        <div className="bg-[#1a2336] border-x border-b border-[#283852] rounded-b-2xl p-6 sm:p-10 shadow-2xl relative">
          
          {/* Top Project Tag & Links */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#293b58]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  {activeProject.tag}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  // {activeProject.date}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans">
                {activeProject.title}
              </h3>
              <p className="text-sm text-slate-300 font-sans mt-2 max-w-3xl leading-relaxed">
                {activeProject.summary}
              </p>
            </div>

            {/* GitHub & Live Action Links */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs font-mono hover:bg-amber-400 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.25)]"
              >
                <Github size={15} />
                <span>Source Code</span>
              </a>
            </div>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-6">
            {activeProject.metrics.map((metric, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#121927] border border-[#23334d]">
                <div className="text-lg sm:text-xl font-bold font-mono text-amber-400">
                  {metric.value}
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Dual Architecture & Iteration Logbook */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 items-stretch">
            
            {/* Architecture Blueprint Card */}
            <div className="lg:col-span-7 p-5 rounded-xl bg-[#131c2c] border border-[#243752] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-amber-400 font-semibold uppercase flex items-center gap-1.5">
                    <Cpu size={14} /> System Architecture Blueprint
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    Glass-Box XAI
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-300 mb-3 font-semibold">
                  {activeProject.architecture.type}
                </div>

                <div className="space-y-2.5">
                  {activeProject.architecture.components.map((comp, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-300 font-sans leading-relaxed">
                      <ChevronRight size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hand-drawn SVG miniature workflow */}
              <div className="mt-4 pt-3 border-t border-[#23344d]">
                <div className="text-[10px] font-mono text-slate-400 mb-1">
                  // XAI Forensics Flow:
                </div>
                <div className="flex items-center justify-between gap-1 text-[10px] font-mono text-slate-300 bg-[#0d1421] p-2 rounded border border-[#1e2c40]">
                  <span className="text-slate-400">Raw Input Vector</span>
                  <span className="text-amber-400">→</span>
                  <span className="text-cyan-300">Feature Likelihoods</span>
                  <span className="text-amber-400">→</span>
                  <span className="text-emerald-300">SHAP Logic Breakdown</span>
                  <span className="text-amber-400">→</span>
                  <span className="text-amber-300 font-bold">Decision</span>
                </div>
              </div>
            </div>

            {/* Handwritten Iteration Logbook Note */}
            <div className="lg:col-span-5 sticky-note-amber rounded-xl p-5 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-amber-800/20 mb-3">
                  <div className="flex items-center gap-2 text-amber-900 font-mono text-xs font-bold">
                    <FileCode size={14} /> RESEARCH LOGBOOK
                  </div>
                  <span className="text-xs font-handwriting text-amber-800 font-bold">Field Notes</span>
                </div>
                <p className="font-serif text-amber-950 text-sm sm:text-base leading-relaxed italic">
                  "{activeProject.iterationLog}"
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-amber-800/20 flex items-center justify-between text-xs font-mono text-amber-900">
                <span className="font-handwriting text-base font-bold">~ Varad</span>
                <span>Verified Metric Output</span>
              </div>
            </div>

          </div>

          {/* Tools & Frameworks Pill Row */}
          <div className="pt-4 border-t border-[#293b58] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <span>Frameworks & Technologies:</span>
            <div className="flex flex-wrap gap-1.5">
              {activeProject.tags.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded bg-[#131c2c] text-slate-300 border border-[#2b3e5e]">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};