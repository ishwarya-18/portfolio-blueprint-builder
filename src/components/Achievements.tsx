import { Award, Trophy, GraduationCap, ExternalLink } from "lucide-react";
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

const certificates = [
  {
    title: "Introduction to Flutter",
    platform: "Simplilearn",
    image: "/images/flutter.jpg",
    link: "https://simpli-web.app.link/e/JsrDEPBsQYb",
  },
  {
    title: "Microsoft AI Skills Challenge",
    platform: "Microsoft",
    image: "/images/microsoft.jpg",
    link: "https://drive.google.com/file/d/1H7zkXek3y7YJBLk2CB6rxCbg9leATU8c/view?usp=drive_link",
  },
  {
    title: "Google Analytics for Beginners",
    platform: "Google",
    image: "/images/analytics.jpg",
    link: "https://drive.google.com/file/d/1P6ns7iw2tuSJrCixawNVGVVp2K4xFfwW/view?usp=drive_link",
  },
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

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-8"
        >
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
            Course Completions
          </p>
          <h3 className="font-display text-2xl md:text-3xl font-bold">Certificates</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group glass-card-hover overflow-hidden"
            >
              <div className="aspect-video bg-muted/50 relative overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="text-primary flex items-center gap-1 text-sm font-medium">
                    View Certificate <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold mb-1">{cert.title}</h4>
                <p className="text-sm text-muted-foreground">{cert.platform}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
