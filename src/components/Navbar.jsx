import { cn } from "@/lib/utils";
import { BookOpen, Briefcase, Code2, Cpu, Mail, Menu, Sparkles, X, FileText } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "01. Logbook", href: "#hero", icon: BookOpen },
  { name: "02. Experience", href: "#experience", icon: Briefcase },
  { name: "03. Research Projects", href: "#projects", icon: Cpu },
  { name: "04. Toolkit", href: "#skills", icon: Code2 },
  { name: "05. Field Notes", href: "#blog", icon: FileText },
  { name: "06. Field Memo", href: "#contact", icon: Mail },
];

export const Navbar = ({ isQuickView, setIsQuickView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "experience", "projects", "skills", "blog", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Floating Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "py-2.5 bg-[#0b0f17]/90 backdrop-blur-md border-b border-[#243048]/80 shadow-lg shadow-black/40"
            : "py-4 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brandmark */}
          <a
            href="#hero"
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-9 h-9 rounded-md bg-[#182236] border border-amber-500/40 flex items-center justify-center text-amber-400 font-mono font-bold text-sm shadow-[0_0_12px_rgba(245,158,11,0.2)] group-hover:border-amber-400 transition-colors">
              VA
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-base tracking-wide text-slate-100 group-hover:text-amber-400 transition-colors">
                  Varad Alshi
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  v2026.1
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400 hidden sm:block">
                // Engineer's Field Journal & Lab Notebook
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-[#121927]/90 border border-[#24344d] px-3 py-1.5 rounded-full shadow-inner">
            {navItems.map((item) => {
              const Icon = item.icon;
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all duration-200",
                    isActive
                      ? "bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/40 shadow-[0_0_8px_rgba(245,158,11,0.15)]"
                      : "text-slate-300 hover:text-amber-200 hover:bg-slate-800/60"
                  )}
                >
                  <Icon size={13} className={isActive ? "text-amber-400" : "text-slate-400"} />
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Mode Switcher & Quick Links */}
          <div className="hidden sm:flex items-center gap-3">
            {setIsQuickView && (
              <button
                onClick={() => setIsQuickView(!isQuickView)}
                className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900/80 text-slate-300 hover:text-amber-300 hover:border-amber-500/40 transition-colors"
                title="Toggle between immersive storytelling and compact summary"
              >
                <Sparkles size={13} className="text-amber-400" />
                <span>{isQuickView ? "Story Mode" : "Recruiter View"}</span>
              </button>
            )}

            <a
              href="#hero"
              className="flex items-center gap-1 text-xs font-mono px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition-all shadow-[0_0_12px_rgba(245,158,11,0.3)] hover:scale-105 active:scale-95"
            >
              <FileText size={13} />
              <span>Log Entry</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 text-slate-300 hover:text-amber-400 transition-colors"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={cn(
            "fixed inset-x-0 top-[60px] bg-[#0d121c]/98 border-b border-[#24344d] p-6 transition-all duration-300 lg:hidden shadow-2xl backdrop-blur-xl",
            isMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-3 font-mono text-sm">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 p-2.5 rounded-lg text-slate-200 hover:bg-amber-500/15 hover:text-amber-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon size={16} className="text-amber-400" />
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </header>

      {/* Right Edge Tactile Binder Tabs (Desktop Only) */}
      <aside className="fixed right-0 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col space-y-2 select-none">
        {navItems.map((item) => {
          const sectionId = item.href.replace("#", "");
          const isActive = activeSection === sectionId;
          return (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "binder-tab px-3 py-4 text-[11px] font-mono tracking-widest uppercase transition-all duration-200 border-l border-t border-b",
                isActive
                  ? "bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-[-4px_0_12px_rgba(245,158,11,0.3)] pl-4"
                  : "bg-[#141c2c] text-slate-400 border-[#24344d] hover:bg-[#1c273e] hover:text-amber-300"
              )}
            >
              {item.name.replace(/^\d+\.\s*/, "")}
            </a>
          );
        })}
      </aside>
    </>
  );
};
