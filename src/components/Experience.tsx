import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    title: "Full Stack Development Intern",
    company: "Cognifyz Technologies",
    period: "Feb 2025 – Mar 2025",
    location: "Remote",
    description: "Enhanced frontend & backend development skills through hands-on projects. Built responsive web applications and RESTful APIs while collaborating with senior developers.",
    tools: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    title: "Web Development Intern",
    company: "CodSoft",
    period: "Oct 2024 – Nov 2024",
    location: "Remote",
    description: "Developed foundational web projects including a basic calculator, responsive landing page, and personal portfolio. Strengthened core HTML, CSS, and JavaScript skills.",
    tools: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"],
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
            Where I've Worked
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Experience</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card-hover p-6 md:p-8 rounded-2xl"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display text-xl font-semibold">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground md:text-right">
                  <span className="flex items-center gap-1 md:justify-end">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 md:justify-end">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
