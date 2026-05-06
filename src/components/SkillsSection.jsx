import { cn } from "@/lib/utils";
import { Code2, Brain, BarChart3, Wrench, Terminal } from "lucide-react";

const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: <Code2 className="w-5 h-5 text-primary" />,
    filename: "languages.py",
    skills: ["Python", "SQL", "C++", "R", "JavaScript"]
  },
  {
    id: "ml",
    title: "Machine Learning & AI",
    icon: <Brain className="w-5 h-5 text-primary" />,
    filename: "models.pt",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "HuggingFace", "Computer Vision", "NLP"]
  },
  {
    id: "data",
    title: "Data Science & Analysis",
    icon: <BarChart3 className="w-5 h-5 text-primary" />,
    filename: "analysis.ipynb",
    skills: ["Pandas", "NumPy", "Statistics", "Time Series", "Optimization", "Matplotlib"]
  },
  {
    id: "tools",
    title: "Developer Tools & DevOps",
    icon: <Wrench className="w-5 h-5 text-primary" />,
    filename: "system.config",
    skills: ["Git/GitHub", "Docker", "Linux", "AWS", "Jupyter", "VS Code"]
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary glow-text-primary">Capabilities</span>
          </h2>
          <div className="flex items-center justify-center gap-2 font-mono text-sm text-muted-foreground">
            <Terminal className="w-4 h-4" />
            <span>ls ~/skills/core_competencies</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="terminal-window group card-hover flex flex-col h-full"
            >
              <div className="terminal-header flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="dot-red"></div>
                  <div className="dot-yellow"></div>
                  <div className="dot-green"></div>
                  <span className="ml-2 text-xs text-muted-foreground font-mono">
                    {category.filename}
                  </span>
                </div>
                {category.icon}
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                   {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group/skill"
                    >
                      <span className="text-sm font-mono text-foreground/80 group-hover/skill:text-primary transition-colors">
                        {skill}
                      </span>
                      <div className="mt-1 h-0.5 w-0 group-hover/skill:w-full bg-primary transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto px-8 pb-6 text-[10px] font-mono text-muted-foreground flex justify-between">
                <span>PERMISSION: READ_EXECUTE</span>
                <span>TYPE: SYSTEM_ASSET</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
