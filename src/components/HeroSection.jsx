import { ArrowDown } from "lucide-react";
import { useTypewriter } from "../hooks/useTypewriter";

export const HeroSection = () => {
  const roles = [
    "Aspiring Machine Learning Engineer",
    "Computer Science Enthusiast",
    "Data Scientist",
    "Problem Solver",
  ];
  
  const currentRole = useTypewriter(roles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-8">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-4 animate-fade-in">
            system.init("Varad_Alshi")
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 block md:inline">
              {" "}
              Varad
            </span>
            <span className="text-glow text-foreground opacity-0 animate-fade-in-delay-2">
              {" "}
              Alshi
            </span>
          </h1>

          <div className="max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            <div className="terminal-window text-left overflow-hidden">
              <div className="terminal-header">
                <div className="dot-red"></div>
                <div className="dot-yellow"></div>
                <div className="dot-green"></div>
                <span className="ml-2 text-xs text-muted-foreground font-mono">bash — 80x24</span>
              </div>
              <div className="p-6 font-mono text-lg md:text-xl space-y-4">
                <div className="flex items-start gap-2">
                  <span className="text-primary">$</span>
                  <p className="text-foreground">
                    cat profile.txt
                  </p>
                </div>
                <div className="flex items-start gap-2 min-h-[3rem]">
                  <span className="text-muted-foreground ml-4">{">"}</span>
                  <p className="text-primary glow-text-primary">
                    {currentRole}
                    <span className="inline-block w-2 h-5 ml-1 bg-primary animate-cursor align-middle"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4 leading-relaxed">
            I uncover insights and build intelligent solutions using data.
            Specializing in data science and machine learning to build impactful tools.
          </p>

          <div className="pt-8 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Execute ViewMyWork.exe
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-0 animate-fade-in-delay-4">
        <span className="text-sm text-muted-foreground mb-2 font-mono"> scroll_down() </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};