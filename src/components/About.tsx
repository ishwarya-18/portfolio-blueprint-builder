import { User, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
            Get to know me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center animate-fade-up animation-delay-100">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                <User className="w-24 h-24 text-primary/50" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-primary/30 -z-10" />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 animate-fade-up animation-delay-200">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a passionate developer with a strong foundation in web development and software engineering. 
              My journey began with curiosity about how things work, and it has evolved into a deep commitment 
              to building applications that solve real problems.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in continuous learning and pushing boundaries. Every project is an opportunity to 
              grow, and I embrace challenges that help me become a better developer.
            </p>

            <div className="grid gap-4 pt-4">
              <div className="glass-card p-4 flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1">Goal-Oriented</h4>
                  <p className="text-sm text-muted-foreground">
                    Focused on building impactful solutions that make a difference.
                  </p>
                </div>
              </div>

              <div className="glass-card p-4 flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1">Quick Learner</h4>
                  <p className="text-sm text-muted-foreground">
                    Adaptable and always eager to explore new technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
