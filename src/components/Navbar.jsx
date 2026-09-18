import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download, Github, Linkedin, Mail, Sparkles, Terminal } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "experience", "projects", "skills", "about", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Overview", href: "#hero", id: "hero" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "About", href: "#about", id: "about" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 py-4 sm:py-5 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`pointer-events-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-cyan-500/5 max-w-5xl w-full"
            : "bg-slate-900/40 backdrop-blur-md border border-white/5 max-w-5xl w-full"
        }`}
      >
        {/* Brand Logo & Live Status */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center font-mono font-bold text-slate-950 text-sm shadow-md group-hover:scale-105 transition-transform">
            VA
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm text-white tracking-tight group-hover:text-cyan-400 transition-colors">
              Varad Alshi
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Rolls-Royce Intern
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 bg-slate-800/50 p-1 rounded-full border border-slate-700/50">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeSection === item.id
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <a
            href="/Varad_Alshi_Resume.pdf"
            download
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-medium border border-slate-700 transition-all hover:scale-105"
          >
            <Download size={13} className="text-cyan-400" /> Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-cyan-500/20 hover:scale-105"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden pointer-events-auto fixed top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-2xl border border-slate-700/80 rounded-2xl p-5 shadow-2xl z-50 flex flex-col gap-3"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "bg-cyan-500/10 text-cyan-400 font-semibold"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              {item.label}
            </a>
          ))}

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <a
              href="/Varad_Alshi_Resume.pdf"
              download
              className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400"
            >
              <Download size={14} /> Download Resume
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/VaradCodes31"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com/in/varadalshi"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};
