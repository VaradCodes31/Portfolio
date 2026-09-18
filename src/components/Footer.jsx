import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp, Sparkles } from "lucide-react";

export const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-slate-950/80 py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Local Time */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center font-mono font-bold text-slate-950 text-sm">
            VA
          </div>
          <div>
            <div className="text-sm font-semibold text-white">
              Varad Alshi • Portfolio
            </div>
            <div className="text-xs font-mono text-slate-400 mt-0.5 flex items-center justify-center sm:justify-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Pune, IN Local Time: {time || "Loading..."}</span>
            </div>
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4 text-slate-400">
          <a
            href="https://github.com/VaradCodes31"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors p-2 rounded-lg bg-slate-900 border border-slate-800"
            aria-label="GitHub Profile"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/varadalshi"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors p-2 rounded-lg bg-slate-900 border border-slate-800"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:varadalshi7@gmail.com"
            className="hover:text-cyan-400 transition-colors p-2 rounded-lg bg-slate-900 border border-slate-800"
            aria-label="Send Email"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-400 hover:text-cyan-300 border border-slate-800 transition-colors"
        >
          <span>Back to Top</span>
          <ArrowUp size={13} />
        </button>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-900 text-center text-xs font-mono text-slate-500">
        © {new Date().getFullYear()} Varad Alshi. Designed with Three.js, Watermelon-UI, Motion-Primitives & Haikei.
      </div>
    </footer>
  );
};