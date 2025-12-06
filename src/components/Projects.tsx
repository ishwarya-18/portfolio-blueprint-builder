import { ExternalLink, Github, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "LearnQuest – E-Learning Platform",
    description: "Interactive e-learning platform featuring quizzes, mini-games, video lessons, and gamification with XP points, badges, and streaks. Includes admin, teacher, and student dashboards.",
    fullDescription: "A comprehensive frontend e-learning platform designed to make learning engaging and fun. Features include interactive quizzes with instant feedback, educational mini-games for concept reinforcement, video lessons with progress tracking, and a complete gamification system. The platform includes three distinct dashboards for administrators, teachers, and students, each tailored to their specific needs.",
    tech: ["Next.js", "TypeScript", "React"],
    github: "https://github.com/ishwarya-18/LearnQuest",
    live: null,
    image: "/images/learn.png",
    efficiency: 92,
  },
  {
    title: "Loan Approval Prediction",
    description: "ML model that predicts loan approval status using applicant features like income, employment type, and credit history. Includes data preprocessing, encoding, and visualization.",
    fullDescription: "A machine learning project that leverages various classification algorithms to predict loan approval outcomes. The model analyzes applicant features including income levels, employment history, credit scores, and loan amounts. Comprehensive data preprocessing pipeline includes handling missing values, categorical encoding, feature scaling, and visualization of key patterns in the data.",
    tech: ["Python", "Scikit-Learn", "Pandas", "Seaborn"],
    github: "https://github.com/ishwarya-18/Loan-Approval-Prediction",
    live: "https://loanpredict-website.vercel.app/",
    image: "/images/loan.png",
    efficiency: 87,
  },
  {
    title: "Hall Booking Application",
    description: "Full-stack application for managing hall bookings with user authentication, real-time availability tracking, and a feedback system.",
    fullDescription: "A complete full-stack solution for managing hall reservations in educational institutions or corporate environments. Features secure user authentication, real-time hall availability checking, booking conflict prevention, and a comprehensive feedback system for continuous improvement. The application provides an intuitive interface for both administrators and end-users.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/ishwarya-18/Hall-booking-application",
    live: null,
    image: "/images/hall.png",
    efficiency: 85,
  },
  {
    title: "To-Do List with Admin Dashboard",
    description: "Task management app with user authentication, comprehensive task APIs, and database integration for persistent storage.",
    fullDescription: "A robust task management application featuring secure user authentication, RESTful APIs for complete CRUD operations, and PostgreSQL database integration for reliable data persistence. The admin dashboard provides oversight capabilities for managing users and monitoring system usage, while the user interface offers a clean and efficient task management experience.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/ishwarya-18/Todo_application",
    live: "https://todo-frontend-5pp0.onrender.com/",
    image: "/images/todo.png",
    efficiency: 80,
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application that fetches and displays weather data for any city using the OpenWeather API with a clean, responsive interface.",
    fullDescription: "A modern weather application providing real-time weather information for cities worldwide. Integrates with the OpenWeather API to fetch current conditions, temperature, humidity, wind speed, and weather forecasts. Features a clean, responsive design that adapts seamlessly across devices, with intuitive city search functionality.",
    tech: ["React", "Node.js", "OpenWeather API"],
    github: "https://github.com/ishwarya-18/Weather-Dashboard",
    live: "https://weather-dashboard-1-769j.onrender.com/",
    image: "/images/weather.png",
    efficiency: 88,
  },
];

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  github: string;
  live: string | null;
  image: string;
  efficiency: number;
}

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <h3 className="font-display text-2xl font-bold mb-4">{project.title}</h3>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            {project.fullDescription}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
            What I've built
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card-hover p-4 md:p-6 flex flex-col cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              {project.image && (
                <div className="overflow-hidden rounded-xl mb-4 w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Efficiency Meter */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-muted-foreground">Efficiency</span>
                  <span className="text-xs font-medium text-primary">{project.efficiency}%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-500"
                    style={{ width: `${project.efficiency}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-primary font-medium">
                <span>Click to view details</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
