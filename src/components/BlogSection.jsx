import { BookOpen, Calendar, Clock, Edit3, Eye, FileText, Filter, Heart, Plus, Search, Sparkles, Tag, X } from "lucide-react";
import { useState, useEffect } from "react";

const DEFAULT_LOGS = [
  {
    id: "log-086",
    entryNumber: "086",
    date: "August 2026",
    title: "Designing Asynchronous Telemetry Pipelines: Ingesting Millions of Event Streams Without Backpressure",
    category: "Data Engineering",
    readTime: "5 min read",
    summary:
      "How to architect high-throughput asynchronous ingestion pipelines using Python, FastAPI workers, and JSONL data lakes while eliminating memory buffer bottlenecks.",
    content: `### The Ingestion Bottleneck at Scale
When processing millions of high-frequency data packets (such as the 2.8M+ network flows in the CICIDS dataset), standard synchronous logging quickly overwhelms RAM and blocks network threads.

### The Asynchronous Buffer Strategy
To prevent system lockup, we built an asynchronous telemetry queue with decoupled producers and consumers:

1. **Non-Blocking Ingestion**: Incoming API requests write directly to an in-memory ring buffer with zero disk I/O latency.
2. **Batch Flusher**: Background worker coroutines aggregate chunks of 5,000 records and stream them into structured JSONL storage using compressed gzip streams.
3. **Active Learning Hook**: An event-driven listener flags anomalous flows directly to the model retraining pipeline.

### Engineering Takeaway
Decoupling disk writes from network listeners allowed the engine to process sustained spikes of 45,000 requests/sec with under 4ms latency jitter.`,
    tags: ["Data Pipelines", "FastAPI", "Python", "Systems"],
    marginalNote: "Rule of thumb: Never let disk I/O block your network event loop!",
  },
  {
    id: "log-085",
    entryNumber: "085",
    date: "July 2026",
    title: "Why Feature Attribution (SHAP) is the Antidote to Black-Box AI Hallucinations in Production",
    category: "Machine Learning & XAI",
    readTime: "6 min read",
    summary:
      "A deep dive into why accuracy metrics lie, and how computing Shapley values provides mathematically sound transparency into complex tree and neural architectures.",
    content: `### The Myth of 99% Accuracy
In high-stakes domains—like cybersecurity intrusion detection and automated smart contract auditing—a model claiming "99% accuracy" is often overfitted to trivial artifacts (e.g. timestamp correlation or compiler signatures).

### Computing Game-Theoretic Shapley Values
SHAP (SHapley Additive exPlanations) resolves this by evaluating every feature's marginal contribution across all possible feature subsets:

$$\\phi_i(x) = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|! (|F| - |S| - 1)!}{|F|!} \\Big( f(S \\cup \\{i\\}) - f(S) \\Big)$$

In NetSage IDS and SyndromeAI, this allowed us to generate instant "Glass-Box Waterfall Plots" that prove *why* an alert fired—correlating predictions directly to network anomaly metrics and physical noise principles.

### Key Lesson
Explainability isn't just a luxury for researchers; it is the fundamental bridge that allows human operators to trust machine intelligence.`,
    tags: ["SHAP", "Explainable AI", "Machine Learning", "XGBoost"],
    marginalNote: "If an AI decision can't be explained to an analyst in 10 seconds, it won't be used in production.",
  },
  {
    id: "log-084",
    entryNumber: "084",
    date: "June 2026",
    title: "Dissecting EVM Bytecode: What Opcodes Reveal About Re-Entrancy and Arithmetic Exploits",
    category: "Cybersecurity",
    readTime: "5 min read",
    summary:
      "Why analyzing compiled Solidity opcode instruction sequences using sequence models outperforms high-level source code parsing.",
    content: `### The Vulnerability Hiding in Compiled Bytecode
Source code can be easily obfuscated, but compiled Ethereum Virtual Machine (EVM) bytecode never lies. Every transfer of Ether boils down to an explicit sequence of low-level instructions: $CALLVALUE$, $SLOAD$, $JUMP$, and $SSTORE$.

### Tracking State Mutation Order
In BlockGuard, we deconstructed smart contract bytecode to identify the classic re-entrancy anti-pattern:
- A $CALL$ opcode executing *before* the internal balance $SSTORE$ instruction updates the state.

By pairing Bi-Directional LSTM sequence embeddings with heuristic random forests, we captured temporal instruction flows while keeping P95 scan times under 0.85 seconds—over 200x faster than traditional symbolic execution engines.`,
    tags: ["Solidity", "Smart Contracts", "Security", "Bytecode"],
    marginalNote: "Bytecode is the ground truth; high-level source code is just syntactic sugar.",
  },
  {
    id: "log-083",
    entryNumber: "083",
    date: "May 2026",
    title: "Architecting Real-Time SOC Dashboards: React 19, FastAPI & Forensic Visualizations",
    category: "Full-Stack Systems",
    readTime: "4 min read",
    summary:
      "Practical design patterns for building high-fidelity forensic dashboards that render live anomaly metrics, confusion matrices, and interactive ROC curves smoothly.",
    content: `### The UI Challenge: Density Without Overwhelm
Security Operations Center (SOC) dashboards are notorious for overwhelming analysts with walls of red alerts and unreadable data tables.

### Design Principles for Technical Tooling
1. **Hierarchical Card Architecture**: High-level anomaly gauges at the top, expandable forensic drilldowns on click.
2. **Zero-Lag Chart Rendering**: Utilizing canvas-backed Chart.js and Recharts with throttled state updates to prevent browser layout thrashing during live traffic simulations.
3. **Glass-Box Drilldowns**: Clicking any attack flow immediately renders the exact SHAP feature breakdown in a slide-out drawer.

### Takeaway
Great developer tooling blends high information density with intuitive spatial hierarchy.`,
    tags: ["React 19", "FastAPI", "Full-Stack", "Data Viz"],
    marginalNote: "Design for speed: security analysts make decisions in split seconds.",
  },
  {
    id: "log-082",
    entryNumber: "082",
    date: "April 2026",
    title: "From Navier-Stokes to Fourier Neural Operators: Continuous PDE Surrogates on 3D Manifolds",
    category: "Scientific ML",
    readTime: "6 min read",
    summary:
      "How learning frequency-domain kernels in Fourier space allows deep learning models to solve partial differential equations resolution-invariantly.",
    content: `### Breaking the Mesh Discretization Bottleneck
Classical finite-element methods (FEM) require discretizing continuous physical domains into millions of mesh elements, taking hours for complex 3D geometries.

### The Fourier Neural Operator (FNO) Formula
Unlike standard CNNs, Fourier Neural Operators learn mappings between continuous infinite-dimensional function spaces:

$$\\mathcal{K}(v)(x) = \\mathcal{F}^{-1}\\Big( R(k) \\cdot (\\mathcal{F}v)(k) \\Big)(x)$$

At Rolls Royce Power Systems, embedding residual connections around 3D spectral convolutions enabled real-time structural response evaluations with a 99.77% R² score in under 15ms.`,
    tags: ["Neural Operators", "PyTorch", "Scientific ML", "Physics"],
    marginalNote: "Spectral methods transform spatial convolutions into direct element-wise multiplications!",
  },
  {
    id: "log-081",
    entryNumber: "081",
    date: "March 2026",
    title: "The 3 AM Debugging Lesson: When the Bug Isn't Your Code, But Your Data Assumptions",
    category: "Data Engineering",
    readTime: "4 min read",
    summary:
      "A personal story on tracking down a subtle tensor dimension mismatch and why rigorous data sanity checks save weeks of wasted GPU training runs.",
    content: `### The Phantom Loss Spike
While training a multi-class classifier on 2.8M network records, the validation loss would randomly spike to NaN on epoch 14 without any obvious exception thrown.

### The Root Cause
After 6 hours of line-by-line debugging at 3 AM, the issue wasn't the neural architecture or gradient clipping—it was a single corrupted upstream CSV row where a comma in a user-agent string shifted all numerical columns by one index.

### The Golden Rule
Always validate data at ingestion with strict schema enforcement (Pydantic / Pandera) before a single tensor ever touches the GPU.`,
    tags: ["Debugging", "Best Practices", "Python", "Data Quality"],
    marginalNote: "Garbage in, NaN out. Always assert tensor shapes and check for NaNs at the pipeline boundary.",
  },
];

export const BlogSection = () => {
  const [logs, setLogs] = useState(() => {
    try {
      const saved = localStorage.getItem("varad_field_logs_v2");
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
    category: "Data Engineering",
    readTime: "5 min read",
    summary: "",
    content: "",
    marginalNote: "",
    tags: "Engineering, Systems, Python",
  });

  useEffect(() => {
    try {
      localStorage.setItem("varad_field_logs_v2", JSON.stringify(logs));
    } catch (e) {
      console.error(e);
    }
  }, [logs]);

  const categories = [
    "All",
    "Data Engineering",
    "Machine Learning & XAI",
    "Cybersecurity",
    "Full-Stack Systems",
    "Scientific ML",
  ];

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
      entryNumber: String(logs.length + 81).padStart(3, "0"),
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
      category: "Data Engineering",
      readTime: "5 min read",
      summary: "",
      content: "",
      marginalNote: "",
      tags: "Engineering, Systems, Python",
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
              SECTION 05 // RESEARCH FIELD NOTES & ENGINEERING LOGS
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 p-3 rounded-xl bg-[#121927] border border-[#24344d]">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full lg:w-auto">
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
          <div className="relative w-full lg:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by topic or tag..."
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
                <h3 className="text-base sm:text-lg font-bold text-white font-sans group-hover:text-amber-300 transition-colors leading-snug mb-3">
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
                  placeholder="e.g. Designing High-Throughput Stream Processing with FastAPI Workers"
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
                    <option>Data Engineering</option>
                    <option>Machine Learning & XAI</option>
                    <option>Cybersecurity</option>
                    <option>Full-Stack Systems</option>
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
                  placeholder="Document your architectural choices, debugging triumphs, or engineering takeaways here..."
                  value={newLogData.content}
                  onChange={(e) => setNewLogData({ ...newLogData, content: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0e1522] border border-[#243450] text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-amber-400 font-sans text-sm resize-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-semibold">// HANDWRITTEN MARGINAL NOTE</label>
                <input
                  type="text"
                  placeholder="e.g. Note: Always test edge cases with synthetic traffic before deployment."
                  value={newLogData.marginalNote}
                  onChange={(e) => setNewLogData({ ...newLogData, marginalNote: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0e1522] border border-[#243450] text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-semibold">// TAGS (COMMA SEPARATED)</label>
                <input
                  type="text"
                  placeholder="Data Engineering, Python, Systems"
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
