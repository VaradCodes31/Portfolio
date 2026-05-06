import { DollarSign, Code, User, Terminal } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            System <span className="text-primary glow-text-primary">Overview</span>
          </h2>
          <div className="flex items-center justify-center gap-2 font-mono text-sm text-muted-foreground">
            <Terminal className="w-4 h-4" />
            <span>whoami --verbose</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="dot-red"></div>
              <div className="dot-yellow"></div>
              <div className="dot-green"></div>
              <span className="ml-2 text-xs text-muted-foreground font-mono">biography.md</span>
            </div>
            <div className="p-8 space-y-6 font-sans">
              <h3 className="text-2xl font-bold text-primary font-mono">
                {">"} Varad Alshi
              </h3>

              <p className="text-foreground/80 leading-relaxed">
                I'm an aspiring Data Scientist with a solid foundation in statistics,
                machine learning, and quantitative analysis. I am passionate about turning
                data into actionable insights and building intelligent solutions using modern
                tools and technologies.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                As a college student focused on crafting elegant solutions to complex problems,
                I specialize in data science, machine learning, and quantitative finance. 
                I am actively building a strong foundation through academic projects, personal 
                experimentation, and a dedication to lifelong learning.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#contact" className="cosmic-button">
                  Initialize Contact
                </a>

                <a
                  href="/Varad_New.pdf"
                  download
                  className="px-6 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-all font-mono text-sm"
                >
                  ./download_cv.sh
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="terminal-window card-hover">
              <div className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg font-mono">01. Data Scientist</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Developing data-driven solutions using modern frameworks, 
                    with proficiency shaped by practical projects and continuous learning.
                  </p>
                </div>
              </div>
            </div>

            <div className="terminal-window card-hover">
              <div className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg font-mono">02. ML Enthusiast</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Experimenting with advanced algorithms and deep learning frameworks to build predictive 
                    models and intelligent systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="terminal-window card-hover">
              <div className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-bold text-lg font-mono">03. Quant Finance</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Applying data-driven insights and quantitative methodologies to finance, 
                    bridging the gap between algorithms and market analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
