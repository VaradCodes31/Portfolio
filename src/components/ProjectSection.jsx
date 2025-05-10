import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Carbon Footprint Calculator",
    description: "A beautifully designed carbon footprint calculator built with React, Tailwind CSS, and TypeScript, helping users estimate their environmental impact.",
    image: "/Images/CFC_SS.jpg",
    tags: ["React", "TailwindCSS", "TypeScript"],
    demoUrl: "https://calculate-carbon-footprint.netlify.app/",
    githubUrl: "https://github.com/VaradCodes31/Carbon-Footprint-Calculator",
  },
  {
    id: 2,
    title: "F1 2025 Race Prediction Model",
    description:
      "Machine learning-powered F1 race prediction model that forecasts the winning driver using real-time and historical race data.",
    image: "/Images/F1.jpg",
    tags: ["Python", "scikit-learn", "pandas"],
    githubUrl: "https://github.com/VaradCodes31/F1-Race-Prediction",
  },
  {
    id: 3,
    title: "Stock Price Prediction Model",
    description:
      "This project involves building a stock price prediction model to forecast future prices of the Yahoo Finance ('yfinance') library stock using historical data and machine learning techniques.",
    image: "/Images/Stock-Price-Prediction.jpg",
    tags: ["Python", "scikit-learn", "yfinance"],
    githubUrl: "https://github.com/VaradCodes31/Stock-Prediction-Project",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/VaradCodes31"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};