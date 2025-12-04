import { Award, Trophy, GraduationCap, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const achievements = [
  {
    title: "NPTEL – Introduction to IoT",
    description: "Completed NPTEL certification with 85/100, demonstrating strong IoT concepts understanding.",
    icon: Award,
    date: "Oct 2025",
  },
  {
    title: "Adobe India Hackathon",
    description: "Participated in Adobe's competitive hackathon, developing innovative solutions collaboratively.",
    icon: Trophy,
    date: "Aug 2025",
  },
  {
    title: "Academic Excellence",
    description: "Maintaining 8.68 CGPA in B.Tech AI & DS. HSC topper in Chemistry with 90.44%.",
    icon: GraduationCap,
    date: "Ongoing",
  },
];

const skills = [
  { name: "Java", color: "from-orange-500 to-red-500" },
  { name: "Python", color: "from-blue-500 to-yellow-500" },
  { name: "C", color: "from-blue-600 to-blue-400" },
  { name: "React", color: "from-cyan-400 to-blue-500" },
  { name: "Node.js", color: "from-green-500 to-green-400" },
  { name: "Express.js", color: "from-gray-600 to-gray-400" },
  { name: "PostgreSQL", color: "from-blue-600 to-cyan-500" },
  { name: "MySQL", color: "from-orange-500 to-blue-600" },
  { name: "HTML", color: "from-orange-500 to-orange-400" },
  { name: "CSS", color: "from-blue-500 to-blue-400" },
  { name: "Figma", color: "from-purple-500 to-pink-500" },
];

const Achievements = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="achievements" className="section-padding">
      <div className="container-custom" ref={ref}>
        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
            Recognition & Certifications
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Achievements</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-6 text-center"
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
            </motion.div>
          ))}
        </div>

        {/* Skills Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-8"
        >
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
            Technical Proficiency
          </p>
          <h3 className="font-display text-2xl md:text-3xl font-bold">Certified Skills</h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg`} />
              <div className="relative glass-card-hover px-5 py-3 rounded-xl flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-primary" />
                <span className="font-medium">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
