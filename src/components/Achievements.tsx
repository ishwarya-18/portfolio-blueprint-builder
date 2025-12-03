import { Award, Medal, Trophy } from "lucide-react";

const achievements = [
  {
    title: "NPTEL Certification",
    description: "Successfully completed NPTEL course in Data Structures and Algorithms with distinction.",
    icon: Award,
  },
  {
    title: "Web Development Certificate",
    description: "Completed comprehensive web development bootcamp covering modern frameworks and best practices.",
    icon: Medal,
  },
  {
    title: "Hackathon Participant",
    description: "Participated in multiple coding hackathons and developed innovative solutions under time constraints.",
    icon: Trophy,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
            Recognition & Certifications
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Achievements</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="glass-card-hover p-6 text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-4">
                <achievement.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
