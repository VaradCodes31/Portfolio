import { ArrowUp, BookOpen, Heart, Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#24344d] bg-[#080d14] relative z-10 text-xs font-mono text-slate-400">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Colophon Signature */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-200 font-bold mb-1">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Varad Alshi's Field Journal & Lab Notebook</span>
          </div>
          <p className="text-[11px] text-slate-400">
            Hand-crafted with React 19, Tailwind CSS & Vite • Powered by first-principles physics & ML.
          </p>
        </div>

        {/* Center Date Stamp */}
        <div className="text-center text-[11px] text-slate-400 font-mono">
          <span>// Edition 2026.08 • Pune, India</span>
        </div>

        {/* Right Action & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href="#hero"
            className="p-2.5 rounded-lg bg-[#141d2e] border border-[#24344d] text-amber-400 hover:text-white hover:bg-amber-500/20 transition-all flex items-center gap-1.5 shadow-sm"
            aria-label="Back to Top of Journal"
          >
            <span className="text-[10px] uppercase font-bold">Top</span>
            <ArrowUp size={14} />
          </a>
        </div>

      </div>
    </footer>
  );
};