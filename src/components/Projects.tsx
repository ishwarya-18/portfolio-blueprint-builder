import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart functionality, user authentication, and payment integration.",
    tech: ["React", "Node.js", "MySQL", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "A productivity application for organizing tasks with drag-and-drop, categories, and deadline tracking.",
    tech: ["React", "JavaScript", "CSS", "Firebase"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with location-based forecasts, interactive maps, and data visualization.",
    tech: ["Python", "API", "HTML", "CSS"],
    github: "https://github.com",
    live: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
            What I've built
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="glass-card-hover p-6 flex flex-col animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View GitHub repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
