import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle, Cpu, Activity, BarChart2, ShieldCheck } from "lucide-react";

export const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700/80 p-6 sm:p-8 shadow-2xl shadow-cyan-500/10 z-10 text-slate-200"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20">
                {project.date}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mb-6">
              {project.subtitle}
            </p>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {project.metrics?.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 flex flex-col"
                >
                  <span className="text-xs font-mono text-slate-400 uppercase">
                    {m.label}
                  </span>
                  <span className="text-lg sm:text-xl font-bold font-mono text-cyan-400 mt-1">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Deep Dive Breakdown */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-300 mb-6">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <Cpu size={18} className="text-cyan-400" /> Architectural Highlights
              </h3>
              <ul className="space-y-2.5">
                {project.highlights?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle
                      size={16}
                      className="text-cyan-400 mt-1 shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Used */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-slate-400 font-mono uppercase mb-3">
                Technologies & Tools Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech?.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 border border-slate-700 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors border border-slate-700"
                  >
                    <Github size={16} /> View Source on GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="text-xs font-mono text-slate-400 hover:text-white"
              >
                Press ESC or Click outside to close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
