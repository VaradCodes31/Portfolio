import { BookOpen, Calendar, Clock, Edit3, Eye, FileText, Filter, Heart, Plus, Search, Sparkles, Tag, X } from "lucide-react";
import { useState, useEffect } from "react";

const DEFAULT_LOGS = [
  {
    id: "log-085",
    entryNumber: "085",
    date: "August 2026",
    title: "From Navier-Stokes to Fourier Neural Operators: How Spectral Convolutions Bypass FEM Bottlenecks",
    category: "Neural Operators",
    readTime: "6 min read",
    summary:
      "A deep dive into why classical finite-element simulations scale poorly on 3D manifolds, and how learning frequency-domain kernels in Fourier space yields resolution-invariant PDE surrogates.",
    content: `### The Classical FEM Scaling Problem
When evaluating structural response fields under arbitrary geometry constraints, standard finite-element solvers (FEM) discretize the domain into millions of mesh elements. For high-fidelity 3D structural analysis, solving the resulting linear system $K \\cdot u = f$ takes anywhere from 20 minutes to several hours per single geometry variation.

### Enter Fourier Neural Operators (FNO)
Unlike traditional CNNs which operate on fixed grid discretizations and cannot generalize to unseen mesh resolutions, Fourier Neural Operators parameterize the integral kernel directly in frequency space:

$$\\mathcal{K}(v)(x) = \\mathcal{F}^{-1}\\Big( R(k) \\cdot (\\mathcal{F}v)(k) \\Big)(x)$$

By mapping spatial domain representations into Fourier space via 3D FFT, multiplying by learnable complex weight tensors $R(k)$, and filtering high-frequency noise, FNO learns the mapping between continuous function spaces rather than discrete tensors.

### Key Engineering Takeaway
At Rolls Royce Power Systems, integrating residual connections around the spectral convolution layers boosted $R^2$ to 99.77% while dropping inference latency from 45 minutes to under 15 milliseconds.`,
    tags: ["Neural Operators", "PyTorch", "Physics-ML", "Rolls Royce"],
    marginalNote: "Key insight: low-frequency modes govern 98% of total mechanical strain energy!",
  },
  {
    id: "log-084",
    entryNumber: "084",
    date: "April 2026",
    title: "Resolving Gate vs Measurement Noise in Superconducting Qubits with Physics-Informed Likelihoods",
    category: "Quantum Computing",
    readTime: "5 min read",
    summary:
      "How injecting theoretical Pauli noise likelihood ratios into a 5-model soft-voting ensemble resolved statistical overlap between bit-flip and readout errors on Qiskit Aer simulations.",
    content: `### The Overlap Dilemma in Quantum Error Detection
In noisy intermediate-scale quantum (NISQ) devices, detecting syndrome errors is complicated by the fact that gate-level Pauli errors (Bit Flip $X$, Phase Flip $Z$) often produce syndrome measurement signatures indistinguishable from readout noise.

### Injecting Physical Likelihood Ratios
Rather than forcing a neural network to learn noise distributions from raw syndrome counts alone, we augmented the feature space with theoretical quantum mechanics likelihood ratios:

$$Q[i] = \\frac{\\mathcal{L}(x_i \\mid \\text{Gate Noise})}{\\mathcal{L}(x_i \\mid \\text{Readout Noise})}$$

This physics-informed feature layer gave our 5-model soft-voting ensemble (MLP, Random Forest, Extra Trees, HistGradientBoosting) the exact inductive bias needed to classify errors across all 4 noise channels with 99.4% accuracy.`,
    tags: ["Quantum Computing", "Qiskit", "XAI", "Ensemble ML"],
    marginalNote: "Tested on 1,024 shot simulations with binomial noise distributions.",
  },
  {
    id: "log-083",
    entryNumber: "083",
    date: "March 2026",
    title: "Demystifying Smart Contract Bytecode with Opcode Sequence Modeling & Glass-Box SHAP",
    category: "Security & XAI",
    readTime: "4 min read",
    summary:
      "Why combining LSTM temporal sequence models with tree-based heuristic filters prevents neural overconfidence when detecting re-entrancy bugs in compiled Solidity opcodes.",
    content: `### Why Symbolic Execution Tools Are Too Slow for CI/CD
Traditional formal verification tools like Mythril and Slither rely on symbolic execution, often taking 2–5 minutes per smart contract. In modern DevSecOps pipelines, security analysis needs to be sub-second.

### The Hybrid Architecture
In BlockGuard, we built a disassembler that parses Solidity bytecode directly into opcode instruction sequences ($JUMP$, $SLOAD$, $CALLVALUE$). Feeding these token streams into a bi-directional LSTM yielded high sensitivity, but tree-based heuristic filters were crucial to filter out neural hallucinations on out-of-distribution opcodes.

### The Result
Achieved 97.2% classification accuracy with an average P95 latency of 0.85s—more than 200x faster than symbolic execution baselines.`,
    tags: ["Solidity", "LSTM", "Security", "SHAP"],
    marginalNote: "Sub-second scanning means security checks can run on every single git push!",
  },
];

export const BlogSection = () => {
  const [logs, setLogs] = useState(() => {
    try {
      const saved = localStorage.getItem("varad_field_logs");
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_LOGS;
  });

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeReadingLog, setActiveReadingLog] = useState(null);
  const [isCreatingLog, setIsCreatingLog] = useState(false);

  // New Log Form State
  const [newLogData, setNewLogData] = useState({
    title: "",
    category: "Neural Operators",
    readTime: "5 min read",
    summary: "",
    content: "",
    marginalNote: "",
    tags: "Machine Learning, Deep Learning",
  });

  useEffect(() => {
    try {
      localStorage.setItem("varad_field_logs", JSON.stringify(logs));
    } catch (e) {
      console.error(e);
    }
  }, [logs]);

  const categories = ["All", "Neural Operators", "Quantum Computing", "Security & XAI", "Scientific ML"];

  const filteredLogs = logs.filter((log) => {
    const matchesCategory = selectedCategory === "All" || log.category === selectedCategory;
    const matchesSearch =
      log.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (!newLogData.title.trim() || !newLogData.content.trim()) return;

    const newEntry = {
      id: `log-${Date.now()}`,
      entryNumber: String(logs.length + 83).padStart(3, "0"),
      date: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
      title: newLogData.title,
      category: newLogData.category,
      readTime: newLogData.readTime || "4 min read",
      summary: newLogData.summary || newLogData.content.slice(0, 140) + "...",
      content: newLogData.content,
      marginalNote: newLogData.marginalNote || "Authored in Varad's Field Journal.",
      tags: newLogData.tags.split(",").map((t) => t.trim()).filter(Boolean),
    };

    setLogs([newEntry, ...logs]);
    setIsCreatingLog(false);
    setNewLogData({
      title: "",
      category: "Neural Operators",
      readTime: "5 min read",
      summary: "",
      content: "",
      marginalNote: "",
      tags: "Machine Learning, Deep Learning",
    });
  };

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 relative grid-engineering">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#24344d]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              SECTION 04.5 // RESEARCH FIELD NOTES & LOGBOOK
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
              Engineering Logs & Technical Writing
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCreatingLog(true)}
              className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.25)] hover:scale-105 active:scale-95"
            >
              <Plus size={15} />
              <span>+ New Log Entry</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 p-3 rounded-xl bg-[#121927] border border-[#24344d]">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  selectedCategory === cat
                    ? "bg-amber-500 text-slate-950 font-bold shadow-xs"
                    : "text-slate-300 hover:bg-[#1b253b] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search research logs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#0b101b] border border-[#22334e] text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
            />
          </div>
        </div>

        {/* Log Entries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLogs.map((log) => (
            <article
              key={log.id}
              onClick={() => setActiveReadingLog(log)}
              className="blueprint-card rounded-xl p-6 flex flex-col justify-between cursor-pointer group hover:border-amber-500/50 hover:shadow-[0_10px_25px_rgba(245,158,11,0.1)] transition-all duration-200"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#23334d] mb-4 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-amber-400">ENTRY #{log.entryNumber}</span>
                    <span>•</span>
                    <span>{log.date}</span>
                  </div>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Clock size={12} /> {log.readTime}
                  </span>
                </div>

                {/* Category Pill */}
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20 mb-3 inline-block">
                  {log.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-white font-sans group-hover:text-amber-300 transition-colors leading-snug mb-3">
                  {log.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-3 mb-4">
                  {log.summary}
                </p>
              </div>

              {/* Tags and Read CTA */}
              <div className="pt-4 border-t border-[#23334d] flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {log.tags.slice(0, 2).map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#152033] text-slate-400">
                      #{t}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-mono text-amber-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Log →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredLogs.length === 0 && (
          <div className="text-center py-16 blueprint-card rounded-2xl p-8">
            <p className="text-sm font-mono text-slate-400 mb-4">No field logs matched your search filter.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-lg bg-[#1a253a] text-amber-300 border border-amber-500/30 text-xs font-mono"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Full Article / Log Reader Modal */}
      {activeReadingLog && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="logbook-parchment rounded-2xl max-w-3xl w-full p-6 sm:p-10 relative my-8 text-stone-900 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="logbook-margin-line hidden sm:block" />

            {/* Close Button */}
            <button
              onClick={() => setActiveReadingLog(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-stone-300/80 hover:bg-stone-400 text-stone-800 transition-colors"
              aria-label="Close Log Entry"
            >
              <X size={18} />
            </button>

            {/* Article Content */}
            <div className="sm:pl-8">
              <div className="flex items-center gap-2 text-stone-600 font-mono text-xs mb-2">
                <span className="font-bold text-amber-800">FIELD LOG ENTRY #{activeReadingLog.entryNumber}</span>
                <span>—</span>
                <span>{activeReadingLog.date}</span>
                <span>•</span>
                <span>{activeReadingLog.readTime}</span>
              </div>

              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-stone-950 mb-4 leading-tight">
                {activeReadingLog.title}
              </h2>

              <div className="flex flex-wrap gap-2 mb-6">
                {activeReadingLog.tags.map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-stone-200 text-stone-700 text-xs font-mono">
                    #{t}
                  </span>
                ))}
              </div>

              {/* Body */}
              <div className="font-serif text-stone-800 text-base leading-relaxed space-y-4 whitespace-pre-line border-t border-stone-300 pt-6">
                {activeReadingLog.content}
              </div>

              {/* Marginal Handwritten Field Note */}
              {activeReadingLog.marginalNote && (
                <div className="my-6 p-4 rounded-lg bg-amber-100/80 border border-amber-300/80 text-amber-950 font-handwriting text-xl">
                  📌 {activeReadingLog.marginalNote}
                </div>
              )}

              {/* Author Sign-Off */}
              <div className="mt-8 pt-4 border-t border-stone-300 flex items-center justify-between text-xs font-mono text-stone-600">
                <div className="font-handwriting text-2xl text-stone-800">
                  ~ Varad Alshi
                </div>
                <div>// Field Verified in Pune, India</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create New Log Entry Modal */}
      {isCreatingLog && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="blueprint-card rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative my-8 shadow-2xl border border-amber-500/40">
            {/* Close Button */}
            <button
              onClick={() => setIsCreatingLog(false)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#1a253a] text-slate-300 hover:text-white"
              aria-label="Close Composer"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-amber-400">
              <Edit3 size={15} />
              <span>RESEARCH FIELD LOG COMPOSER</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-sans mb-4">
              Write a New Log Entry
            </h3>

            <form onSubmit={handleCreateSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-slate-300 mb-1 font-semibold">// ENTRY TITLE</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Scaling Spectral Convolutions to 3D High-Reynolds Manifolds"
                  value={newLogData.title}
                  onChange={(e) => setNewLogData({ ...newLogData, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0e1522] border border-[#243450] text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">// DOMAIN CATEGORY</label>
                  <select
                    value={newLogData.category}
                    onChange={(e) => setNewLogData({ ...newLogData, category: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#0e1522] border border-[#243450] text-slate-100 focus:outline-hidden focus:border-amber-400"
                  >
                    <option>Neural Operators</option>
                    <option>Quantum Computing</option>
                    <option>Security & XAI</option>
                    <option>Scientific ML</option>
                    <option>System Architecture</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">// READ TIME ESTIMATE</label>
                  <input
                    type="text"
                    placeholder="e.g. 5 min read"
                    value={newLogData.readTime}
                    onChange={(e) => setNewLogData({ ...newLogData, readTime: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0e1522] border border-[#243450] text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-semibold">// LOG ENTRY BODY (MARKDOWN / TEXT)</label>
                <textarea
                  required
                  rows="6"
                  placeholder="Document your mathematical derivation, experiment results, or engineering takeaways here..."
                  value={newLogData.content}
                  onChange={(e) => setNewLogData({ ...newLogData, content: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0e1522] border border-[#243450] text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-amber-400 font-sans text-sm resize-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-semibold">// HANDWRITTEN MARGINAL NOTE</label>
                <input
                  type="text"
                  placeholder="e.g. Note: Tested on NVIDIA A100 GPU cluster at 3 AM."
                  value={newLogData.marginalNote}
                  onChange={(e) => setNewLogData({ ...newLogData, marginalNote: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0e1522] border border-[#243450] text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-semibold">// TAGS (COMMA SEPARATED)</label>
                <input
                  type="text"
                  placeholder="Neural Operators, PyTorch, Physics"
                  value={newLogData.tags}
                  onChange={(e) => setNewLogData({ ...newLogData, tags: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0e1522] border border-[#243450] text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                />
              </div>

              <div className="pt-4 border-t border-[#24344d] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsCreatingLog(false)}
                  className="px-4 py-2 rounded-lg bg-[#141d2e] text-slate-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold flex items-center gap-2 shadow-md"
                >
                  <Plus size={15} />
                  <span>Publish to Logbook</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
