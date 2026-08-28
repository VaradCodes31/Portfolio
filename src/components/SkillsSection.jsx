import { Binary, Box, CheckCircle2, Code2, Cpu, Database, Flame, Layers, Network, Sparkles, Terminal, Wrench } from "lucide-react";
import { useState } from "react";

const skillCategories = [
  {
    id: "scientific-ml",
    title: "Neural Operators & Scientific ML",
    icon: Network,
    description: "Surrogate modeling for continuous PDEs and high-dimensional physical field simulations.",
    skills: [
      { name: "3D Fourier Neural Operators (FNO)", level: "Production", desc: "Voxel & mesh response mapping at Rolls Royce" },
      { name: "Physics-Informed ML (PINNs)", level: "Advanced", desc: "Embedding theoretical likelihoods into loss" },
      { name: "Residual Fourier Layers", level: "Advanced", desc: "Non-linear spectral convolutions & bypass" },
      { name: "Surrogate Modeling", level: "Production", desc: "Sub-second structural & fluid estimations" },
    ],
  },
  {
    id: "quantum-qml",
    title: "Quantum Computing & Quantum ML",
    icon: Cpu,
    description: "Quantum circuit simulation, noise channel decoding, and hybrid classical-quantum models.",
    skills: [
      { name: "Qiskit Aer Noise Modeling", level: "Advanced", desc: "Stochastic Pauli noise & shot simulation" },
      { name: "Quantum Error Detection", level: "Research", desc: "5-model soft voting on 4 noise channels" },
      { name: "PennyLane Hybrid QNN", level: "Advanced", desc: "Parametric quantum neural circuits" },
      { name: "Quantum Kernel SVM (QKSVM)", level: "Advanced", desc: "Hilbert space feature mappings" },
    ],
  },
  {
    id: "deep-learning",
    title: "Core Deep Learning & Ensembles",
    icon: Flame,
    description: "Scalable machine learning pipelines, sequence architectures, and high-performance ensembles.",
    skills: [
      { name: "PyTorch & TensorFlow", level: "Expert", desc: "Custom layers, distributed training & GPU ops" },
      { name: "XGBoost & Scikit-Learn", level: "Expert", desc: "Multi-class classification on 2.8M+ flows" },
      { name: "LSTM Sequence Models", level: "Advanced", desc: "Bytecode instruction and exploit analysis" },
      { name: "Apple Silicon Solvers", level: "Advanced", desc: "Optimizing training on ARM architecture" },
    ],
  },
  {
    id: "xai-forensics",
    title: "Explainable AI (XAI) & Forensics",
    icon: Sparkles,
    description: "Glass-box interpretability, feature attributions, and mathematical prediction transparency.",
    skills: [
      { name: "SHAP (Shapley Explanations)", level: "Expert", desc: "Global & local instance-level attribution" },
      { name: "Physics Logic Breakdowns", level: "Advanced", desc: "Correlating neural outputs to physics laws" },
      { name: "Stratified ROC & Precision-Recall", level: "Expert", desc: "Forensic-grade statistical validation" },
      { name: "Glass-Box Threat Telemetry", level: "Production", desc: "JSONL asynchronous data lake pipelines" },
    ],
  },
  {
    id: "systems-languages",
    title: "Systems, Languages & Databases",
    icon: Binary,
    description: "High-performance programming languages, backends, compilers, and databases.",
    skills: [
      { name: "Python, C, C++, Java, SQL, R", level: "Proficient", desc: "Versatile systems & analytical coding" },
      { name: "FastAPI, Flask & React 19", level: "Full-Stack", desc: "Real-time SOC & ML forensic dashboards" },
      { name: "Solidity (Solc) Disassembly", level: "Specialized", desc: "Smart contract opcode parsing" },
      { name: "MySQL & MongoDB", level: "Proficient", desc: "Relational and document storage" },
    ],
  },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("scientific-ml");
  const selectedCat = skillCategories.find((c) => c.id === activeCategory) || skillCategories[0];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative grid-dots">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#24344d]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              SECTION 04 // RESEARCH TOOLKIT & LABORATORY BENCH
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
              Technical Disciplines & Core Craft
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-sm">
            Categorized toolkit spanning continuous physics surrogate models, quantum noise simulations, and forensic explainability.
          </p>
        </div>

        {/* Workbench Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Category Selector */}
          <div className="lg:col-span-4 space-y-2.5">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              // Select Research Domain
            </div>

            {skillCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                    isActive
                      ? "bg-[#1d273a] border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.15)] text-amber-300"
                      : "bg-[#121927] border-[#22334f] text-slate-300 hover:bg-[#182337] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isActive ? "bg-amber-500/20 text-amber-400" : "bg-[#1a2538] text-slate-400 group-hover:text-amber-400"}`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold font-sans">{cat.title}</div>
                      <div className="text-[11px] font-mono text-slate-400 mt-0.5">{cat.skills.length} Capabilities</div>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Pinned Note on Engineering Philosophy */}
            <div className="sticky-note-slate rounded-xl p-4 mt-6">
              <div className="text-xs font-mono text-amber-400 font-bold mb-1.5 flex items-center gap-2">
                <Wrench size={13} /> CRAFT PHILOSOPHY
              </div>
              <p className="font-serif italic text-xs text-slate-300 leading-relaxed">
                "Derive mathematical foundations first, optimize computational bottlenecks in PyTorch / C++, and never ship an AI model without transparent SHAP explainability."
              </p>
            </div>
          </div>

          {/* Right Detailed Capability Drawer */}
          <div className="lg:col-span-8">
            <div className="blueprint-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 border-b border-[#24344d] mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans flex items-center gap-2.5">
                    {selectedCat.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-sans mt-1">
                    {selectedCat.description}
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 text-xs font-mono border border-amber-500/20 hidden sm:inline">
                  DOMAIN ACTIVE
                </span>
              </div>

              {/* Skills Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedCat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-[#152033] border border-[#243754] hover:border-amber-500/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                          {skill.level}
                        </span>
                        <CheckCircle2 size={14} className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-100 font-sans group-hover:text-amber-300 transition-colors">
                        {skill.name}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-300 font-sans mt-2 pt-2 border-t border-[#1f304a] leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Languages & Soft Skills Footer Strip */}
              <div className="mt-8 pt-6 border-t border-[#24344d] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
                <div>
                  <span className="text-slate-300 font-bold">Languages Spoken:</span> English, Marathi, Hindi, German
                </div>
                <div>
                  <span className="text-slate-300 font-bold">Leadership:</span> GDGoC Design & Content Lead
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
