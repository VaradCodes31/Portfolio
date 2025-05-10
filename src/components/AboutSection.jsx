import { DollarSign, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Data Scientist and Machine Learning Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I'm an aspiring Data Scientist with a strong foundation 
              in statistics, machine learning, and quantitative analysis. 
              I enjoy working with data to uncover insights and build 
              intelligent solutions using modern tools and technologies.
            </p>

            <p className="text-muted-foreground">
              As a college student passionate about crafting elegant solutions to complex problems,
              I focus on data science, machine learning, and quantitative finance to stay ahead in a
              fast-evolving tech landscape. While I may not yet have industry experience, I am actively
              building a strong foundation through academic projects, personal experimentation, and a dedication to lifelong learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Varad_Main.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Scientist</h4>
                  <p className="text-muted-foreground">
                    Focused on developing data-driven solutions using modern tools and frameworks, 
                    with growing proficiency shaped by practical projects and a commitment to continuous 
                    learning.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning Enthusiast</h4>
                  <p className="text-muted-foreground">
                    Experimenting with various algorithms and frameworks to build predictive models and
                    intelligent systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Quant Finance</h4>
                  <p className="text-muted-foreground">
                    Leading data-driven projects from conception to completion with agile 
                    methodologies in data science and quantitative finance.
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
