import { Activity, Award, CheckCircle2, ChevronRight, Cpu, Layers, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

export const ExperienceSection = () => {
  const [selectedWorkflowStep, setSelectedWorkflowStep] = useState(0);

  const workflowSteps = [
    {
      title: "1. Voxelized Mesh & Boundary Preprocessing",
      formula: "u(x) ∈ ℝ^{3} // Geometry & Load Vectors",
      desc: "Transforms complex CAD and node geometries into standardized voxelized representations with spatial coordinate embeddings.",
    },
    {
      title: "2. 3D Fast Fourier Transform (FFT)",
      formula: "F(k) = ∭ u(x) e^{-2πi k·x} dx",
      desc: "Maps spatial domain inputs into the frequency domain to capture global multi-scale structural dependencies in O(N log N) time.",
    },
    {
      title: "3. Parametric Spectral Convolutions",
      formula: "(K(v))(x) = ℱ^{-1}(R(k) · (ℱv)(k))(x)",
      desc: "Applies learnable frequency-domain weight tensors R(k) with low-frequency truncation, allowing resolution-invariant learning.",
    },
    {
      title: "4. Residual Non-linear Bypass & IFFT",
      formula: "v_{t+1}(x) = σ(W v_t(x) + (K(v_t))(x))",
      desc: "Combines local spatial linear transforms with inverted spectral convolutions, followed by GeLU activations across residual layers.",
    },
    {
      title: "5. Prediction Output & Automated Validation",
      formula: "R² = 99.77% | Relative L2 Error = 4.75%",
      desc: "Outputs engineering-ready voxel-wise stress, displacement, and strain fields with sub-second inference runtime.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative grid-dots">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#24344d]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              SECTION 02 // RESEARCH EXPERIENCE DOSSIER
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
              Industrial AI & Computational Methodology
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-400">
            Dossier Ref: <span className="text-amber-400">RR-PS-2026-FNO</span>
          </div>
        </div>

        {/* Main Experience Dossier Card */}
        <div className="blueprint-card rounded-2xl p-6 sm:p-10 relative overflow-hidden mb-10">
          
          {/* Top Dossier Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#22334f]">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-amber-500/30 flex items-center justify-center text-white font-bold font-serif text-xl shadow-[0_0_20px_rgba(245,158,11,0.15)] flex-shrink-0">
                RR
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-2xl font-bold text-white font-sans">
                    Rolls Royce Power Systems
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    On-Site • Pune, Maharashtra
                  </span>
                </div>
                <div className="text-base text-amber-400 font-serif italic mt-0.5">
                  Computational Methodology Intern
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  Duration: July 2026 – Present (Active Investigation)
                </div>
              </div>
            </div>

            {/* Performance Badges */}
            <div className="flex items-center gap-3">
              <div className="px-4 py-2.5 rounded-xl bg-[#172235] border border-amber-500/30 text-center">
                <div className="text-xl font-mono font-bold text-amber-400">99.77%</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">R² Fit Metric</div>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-[#172235] border border-cyan-500/30 text-center">
                <div className="text-xl font-mono font-bold text-cyan-400">4.75%</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">Rel. L2 Error</div>
              </div>
            </div>
          </div>

          {/* Research Breakdown Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
            
            {/* Left: Core Contributions List */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <Award size={14} /> Key Engineering Deliverables
              </h4>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#141e30] border border-[#23334e] hover:border-amber-500/40 transition-colors">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="text-sm font-bold text-slate-100 font-sans">
                        3D Fourier Neural Operator (FNO) Pipeline
                      </h5>
                      <p className="text-xs text-slate-300 leading-relaxed mt-1 font-sans">
                        Architected an end-to-end voxel-wise surrogate model in PyTorch that maps complex geometrical boundary conditions and mechanical loading to physical structural responses in real-time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#141e30] border border-[#23334e] hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="text-sm font-bold text-slate-100 font-sans">
                        Residual Fourier Deep Architecture
                      </h5>
                      <p className="text-xs text-slate-300 leading-relaxed mt-1 font-sans">
                        Designed custom residual skip connections around spectral convolution layers, maintaining high gradient flow and achieving robust convergence on unseen geometry simulations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#141e30] border border-[#23334e] hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="text-sm font-bold text-slate-100 font-sans">
                        Active Frontier: Geometry-Agnostic FNO
                      </h5>
                      <p className="text-xs text-slate-300 leading-relaxed mt-1 font-sans">
                        Currently formulating a cross-mesh generalization framework to evaluate structural responses across varying voxel, tetrahedral, and node-based meshes without requiring model retraining.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive 3D FNO Architecture Breakdown */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="p-5 rounded-xl bg-[#101726] border border-[#202f48] h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-amber-400 font-semibold uppercase flex items-center gap-1.5">
                      <Cpu size={14} /> FNO Mathematical Flow
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Step {selectedWorkflowStep + 1} of {workflowSteps.length}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    {workflowSteps.map((step, idx) => (
                      <button
                        key={step.title}
                        onClick={() => setSelectedWorkflowStep(idx)}
                        className={`w-full text-left p-2.5 rounded-lg text-xs font-mono transition-all flex items-center justify-between ${
                          selectedWorkflowStep === idx
                            ? "bg-amber-500/20 text-amber-300 border border-amber-500/50 font-bold"
                            : "bg-[#162135] text-slate-300 border border-[#22334e] hover:bg-[#1c2942]"
                        }`}
                      >
                        <span className="truncate">{step.title}</span>
                        <ChevronRight size={14} className={selectedWorkflowStep === idx ? "text-amber-400" : "text-slate-500"} />
                      </button>
                    ))}
                  </div>

                  {/* Active Step Details */}
                  <div className="p-3.5 rounded-lg bg-[#0b101b] border border-[#263750] text-xs font-mono">
                    <div className="text-amber-300 font-bold mb-1 text-sm font-serif italic">
                      {workflowSteps[selectedWorkflowStep].formula}
                    </div>
                    <p className="text-slate-300 font-sans leading-relaxed text-xs">
                      {workflowSteps[selectedWorkflowStep].desc}
                    </p>
                  </div>
                </div>

                {/* Handwritten Field Note inside Dossier */}
                <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-dashed border-amber-500/30">
                  <div className="font-handwriting text-amber-200 text-base leading-snug">
                    "Field Note: Inverting Fourier modes directly on 3D manifolds cuts simulation runtime from 45 minutes of FEM solving to ~12 milliseconds."
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Tech Stack Footer */}
          <div className="pt-4 border-t border-[#22334f] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <span>Tech Stack & Tools:</span>
            <div className="flex flex-wrap gap-2">
              {["PyTorch", "Neural Operators (FNO)", "3D FFT", "NumPy", "Scientific ML", "GPU Acceleration", "Python"].map((tech) => (
                <span key={tech} className="px-2 py-0.5 rounded bg-[#182438] text-slate-300 border border-[#2c3e5d]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
