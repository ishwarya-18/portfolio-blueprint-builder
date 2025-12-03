import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "LearnQuest – E-Learning Platform",
    description: "Interactive e-learning platform featuring quizzes, mini-games, video lessons, and gamification with XP points, badges, and streaks. Includes admin, teacher, and student dashboards.",
    tech: ["Next.js", "TypeScript", "React"],
    github: "https://github.com/ishwarya-18",
    live: null,
  },
  {
    title: "Loan Approval Prediction",
    description: "ML model that predicts loan approval status using applicant features like income, employment type, and credit history. Includes data preprocessing, encoding, and visualization.",
    tech: ["Python", "Scikit-Learn", "Pandas", "Seaborn"],
    github: "https://github.com/ishwarya-18",
    live: null,
  },
  {
    title: "Hall Booking Application",
    description: "Full-stack application for managing hall bookings with user authentication, real-time availability tracking, and a feedback system.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/ishwarya-18",
    live: null,
  },
  {
    title: "To-Do List with Admin Dashboard",
    description: "Task management app with user authentication, comprehensive task APIs, and database integration for persistent storage.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/ishwarya-18",
    live: null,
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application that fetches and displays weather data for any city using the OpenWeather API with a clean, responsive interface.",
    tech: ["React", "Node.js", "OpenWeather API"],
    github: "https://github.com/ishwarya-18",
    live: "https://lnkd.in/g4_hs4b5",
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
