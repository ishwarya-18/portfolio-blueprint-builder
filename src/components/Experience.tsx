import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Web Development Intern",
    company: "Tech Company",
    period: "Jan 2024 - Mar 2024",
    description: "Developed responsive web applications using React and collaborated with the design team to implement UI/UX improvements.",
    tools: ["React", "JavaScript", "Git", "Figma"],
  },
  {
    role: "Software Engineering Trainee",
    company: "Training Institute",
    period: "Jun 2023 - Dec 2023",
    description: "Completed intensive training in full-stack development, database management, and software engineering principles.",
    tools: ["Java", "Python", "MySQL", "HTML/CSS"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
            My journey so far
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Experience</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.role}
              className="glass-card-hover p-6 md:p-8 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm md:shrink-0">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
