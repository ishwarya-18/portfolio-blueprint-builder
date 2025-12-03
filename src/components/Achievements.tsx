import { Award, Trophy, GraduationCap } from "lucide-react";

const achievements = [
  {
    title: "NPTEL – Introduction to IoT",
    description: "Completed NPTEL certification in Introduction to Internet of Things with a score of 85/100, demonstrating strong understanding of IoT concepts.",
    icon: Award,
    date: "Oct 2025",
  },
  {
    title: "Adobe India Hackathon",
    description: "Participated in the Adobe India Hackathon, developing innovative solutions and collaborating with talented developers under competitive conditions.",
    icon: Trophy,
    date: "Aug 2025",
  },
  {
    title: "Academic Excellence",
    description: "Maintaining a CGPA of 8.68 in B.Tech AI & Data Science. Topped Chemistry in HSC with 90.44% overall score.",
    icon: GraduationCap,
    date: "Ongoing",
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
              <p className="text-xs text-primary font-medium mb-2">{achievement.date}</p>
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
