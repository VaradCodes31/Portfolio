import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Users, Lightbulb, Compass, ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";

export const AboutSection = () => {
  const courses = [
    "Data Structures & Algorithms",
    "Machine Learning & Deep Learning",
    "Linear Algebra & Differential Calculus",
    "Operating Systems & DBMS",
    "Computer Networks",
    "BigData Technologies",
  ];

  const softSkills = [
    "Critical Problem Solving",
    "Technical Communication",
    "Adaptive Team Leadership",
    "First-Principles Thinking",
    "Time Management",
    "Cross-Domain Collaboration",
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2 flex items-center gap-2">
          <GraduationCap size={14} /> Background & Philosophy
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Education, Leadership & Core Foundations
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
          Rooted in strong mathematical fundamentals and committed to open technical community leadership.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Bento: Education Credentials */}
        <div className="lg:col-span-7">
          <SpotlightCard className="h-full border-slate-800" spotlightColor="rgba(6, 182, 212, 0.12)">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <GraduationCap size={22} />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">
                  Academic Degree
                </span>
                <h3 className="text-xl font-bold text-white">
                  Bachelor of Technology in Computer Science
                </h3>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <p className="text-slate-300 font-medium text-sm">
                Dr. Vishwanath Karad MIT World Peace University | Pune, MH, India
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">
                  Jun 2020 — Jun 2023
                </span>
                <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                  CGPA: 8.72 / 10.0
                </span>
              </div>
            </div>

            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-3">
              Core Coursework & Theoretical Foundations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {courses.map((course, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs font-mono text-slate-300 p-2 rounded bg-slate-950/60 border border-slate-800/80"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </div>

        {/* Right Bento: Leadership & Soft Skills */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <SpotlightCard className="border-slate-800" spotlightColor="rgba(139, 92, 246, 0.12)">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                <Users size={18} />
              </div>
              <div>
                <span className="text-xs font-mono text-violet-400 font-semibold uppercase">
                  Community Impact
                </span>
                <h3 className="text-base font-bold text-white">
                  Google Developer Groups (GDGoC)
                </h3>
              </div>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Serving as Design and Content Lead, driving community education, technical blogs, and large scale conferences like WOW Pune.
            </p>
          </SpotlightCard>

          <SpotlightCard className="flex-1 border-slate-800" spotlightColor="rgba(16, 185, 129, 0.12)">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Lightbulb size={18} />
              </div>
              <div>
                <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                  Engineering Mindset
                </span>
                <h3 className="text-base font-bold text-white">
                  Principles & Strengths
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {softSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-slate-800/80 border border-slate-700/60 text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};
