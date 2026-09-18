import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Database, Wrench, Layers, Terminal, Sparkles, Globe2, Cpu } from "lucide-react";
import { BallCanvas3D } from "./canvas/BallCanvas3D";
import { SpotlightCard } from "./ui/SpotlightCard";

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("3d");

  // Core 3D Interactive Floating Tech Balls
  const techBalls = [
    { name: "Python", iconName: "Python", color: "#38bdf8" },
    { name: "PyTorch", iconName: "PyTorch", color: "#f97316" },
    { name: "Qiskit", iconName: "Qiskit", color: "#8b5cf6" },
    { name: "Scikit-Learn", iconName: "Sklearn", color: "#f59e0b" },
    { name: "React", iconName: "React", color: "#06b6d4" },
    { name: "FastAPI", iconName: "FastAPI", color: "#10b981" },
    { name: "C++", iconName: "C++", color: "#6366f1" },
    { name: "Docker", iconName: "Docker", color: "#0284c7" },
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "Java", "C", "C++", "SQL", "R"],
      color: "text-cyan-400",
    },
    {
      title: "Frameworks & ML Libraries",
      icon: Cpu,
      skills: [
        "PyTorch",
        "Neural Operators (FNO)",
        "Scikit-learn",
        "FastAPI",
        "Flask",
        "Streamlit",
        "PennyLane",
        "Qiskit",
        "SHAP (XAI)",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
      ],
      color: "text-violet-400",
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: ["MySQL", "MongoDB", "MongoDB Atlas", "MongoDB Compass"],
      color: "text-emerald-400",
    },
    {
      title: "Developer Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "VS Code", "Visual Studio", "PyCharm", "IntelliJ", "Eclipse", "Docker", "Vite"],
      color: "text-amber-400",
    },
    {
      title: "Spoken Languages",
      icon: Globe2,
      skills: ["English (Professional)", "Marathi (Native)", "Hindi (Fluent)", "German (Basic)"],
      color: "text-pink-400",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2 flex items-center gap-2">
          <Layers size={14} /> Technical Arsenal & Core Stack
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Tools of Rigorous Engineering
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
          Interactive 3D tech balls (drag & rotate) alongside categorized engineering competencies.
        </p>

        {/* View Switcher */}
        <div className="flex items-center gap-2 mt-6 p-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono">
          <button
            onClick={() => setActiveTab("3d")}
            className={`px-4 py-1.5 rounded-full transition-all ${
              activeTab === "3d"
                ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            3D Interactive Balls
          </button>
          <button
            onClick={() => setActiveTab("matrix")}
            className={`px-4 py-1.5 rounded-full transition-all ${
              activeTab === "matrix"
                ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Categorized Matrix
          </button>
        </div>
      </div>

      {/* 3D Floating Ball Canvas Grid */}
      {activeTab === "3d" && (
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
          <div className="text-center text-xs font-mono text-slate-400 mb-6 flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-cyan-400" />
            <span>Click and drag any 3D ball to interact and rotate in real-time</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 justify-items-center">
            {techBalls.map((tech, idx) => (
              <BallCanvas3D
                key={idx}
                name={tech.name}
                iconName={tech.iconName}
                color={tech.color}
              />
            ))}
          </div>
        </div>
      )}

      {/* Categorized Matrix Grid */}
      {activeTab === "matrix" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <SpotlightCard
                key={idx}
                className="border-slate-800/80 hover:border-cyan-500/30 flex flex-col justify-between"
                spotlightColor="rgba(6, 182, 212, 0.1)"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                      <Icon size={18} className={cat.color} />
                    </div>
                    <h3 className="font-semibold text-white text-base">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/60 border border-slate-700/50 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      )}
    </section>
  );
};
