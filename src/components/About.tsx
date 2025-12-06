import { Code2, Lightbulb, Target, GraduationCap, Briefcase, School, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const journey = [
  { icon: School, title: "Girls' Higher Secondary School", subtitle: "HSC - 90.44% | Chemistry Topper", period: "2021 - 2023" },
  { icon: GraduationCap, title: "Bannari Amman Institute of Technology", subtitle: "B.Tech AI & Data Science | CGPA: 8.68", period: "2023 - 2027" },
  { icon: Building2, title: "CodSoft - Web Development Intern", subtitle: "HTML, CSS, JavaScript Projects", period: "Oct - Nov 2024" },
  { icon: Briefcase, title: "Cognifyz - Full Stack Intern", subtitle: "React.js, Node.js Development", period: "Feb - Mar 2025" },
];

const stats = [
  { value: "5+", label: "Projects" },
  { value: "10K+", label: "Lines of Code" },
  { value: "8.68", label: "CGPA" },
  { value: "2", label: "Internships" },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
<section id="about" className="section-padding" style={{ scrollMarginTop: "20px" }}>
      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">My Journey</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">From Student to Developer</h2>
            <div className="grid grid-cols-4 gap-3 mb-8">
              {stats.map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }} className="text-center glass-card p-3 rounded-xl">
                  <p className="font-display text-xl md:text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />
              
              <div className="space-y-6">
                {journey.map((item, i) => (
                  <motion.div 
                    key={item.title} 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={isVisible ? { opacity: 1, x: 0 } : {}} 
                    transition={{ delay: 0.3 + i * 0.1 }} 
                    className="relative flex items-start gap-4"
                  >
                    {/* Icon circle - perfectly aligned */}
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 flex items-center justify-center bg-card border-2 border-primary rounded-full shadow-lg shadow-primary/20">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    
                    {/* Content card */}
                    <div className="flex-1 glass-card-hover p-4 rounded-xl">
                      <p className="text-xs text-primary font-medium mb-1">{item.period}</p>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6">
            <div className="aspect-square max-w-xs mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 glass-card rounded-3xl flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                    <span className="text-3xl font-display font-bold text-primary-foreground">IR</span>
                  </div>
                  <h3 className="font-display text-lg font-bold">Ishwarya R</h3>
                  <p className="text-primary font-medium text-sm">She/Her</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">I'm a pre-final year B.Tech student in AI & Data Science at Bannari Amman Institute of Technology. My journey began with curiosity and evolved into a passion for building user-centric applications.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card-hover p-4 rounded-xl"><Target className="w-6 h-6 text-primary mb-2" /><h3 className="font-semibold mb-1">Goal-Oriented</h3><p className="text-sm text-muted-foreground">Production-ready apps</p></div>
              <div className="glass-card-hover p-4 rounded-xl"><Lightbulb className="w-6 h-6 text-primary mb-2" /><h3 className="font-semibold mb-1">Creative Thinker</h3><p className="text-sm text-muted-foreground">Intuitive UX design</p></div>
              <div className="glass-card-hover p-4 rounded-xl"><Code2 className="w-6 h-6 text-primary mb-2" /><h3 className="font-semibold mb-1">Full-Stack Dev</h3><p className="text-sm text-muted-foreground">End-to-end development</p></div>
              <div className="glass-card-hover p-4 rounded-xl"><GraduationCap className="w-6 h-6 text-primary mb-2" /><h3 className="font-semibold mb-1">Quick Learner</h3><p className="text-sm text-muted-foreground">Adapting fast</p></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
