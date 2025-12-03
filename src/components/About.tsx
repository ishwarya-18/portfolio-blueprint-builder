import { Code2, Lightbulb, Target, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <div className="relative animate-fade-up">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 glass-card rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                    <span className="text-5xl font-display font-bold text-primary-foreground">IR</span>
                  </div>
                  <p className="text-primary font-medium">She/Her</p>
                  <p className="text-muted-foreground text-sm mt-1">Greater Coimbatore Area</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 animate-fade-up animation-delay-200">
            <div>
              <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
                About Me
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Turning Ideas Into Reality
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a pre-final year B.Tech student in Artificial Intelligence & Data Science at 
              Bannari Amman Institute of Technology, maintaining a CGPA of 8.68. My journey in tech 
              began with a curiosity for how things work, and has evolved into a deep passion for 
              building user-centric applications.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              From designing interactive e-learning platforms to predicting loan approvals with ML models, 
              I love tackling challenges that blend creativity with technical problem-solving. When I'm not 
              coding, you'll find me exploring new frameworks or solving problems on LeetCode.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass-card-hover p-4 rounded-xl">
                <Target className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Goal-Oriented</h3>
                <p className="text-sm text-muted-foreground">Building production-ready applications</p>
              </div>
              <div className="glass-card-hover p-4 rounded-xl">
                <Lightbulb className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Creative Thinker</h3>
                <p className="text-sm text-muted-foreground">Designing intuitive user experiences</p>
              </div>
              <div className="glass-card-hover p-4 rounded-xl">
                <Code2 className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Full-Stack Dev</h3>
                <p className="text-sm text-muted-foreground">End-to-end application development</p>
              </div>
              <div className="glass-card-hover p-4 rounded-xl">
                <GraduationCap className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Quick Learner</h3>
                <p className="text-sm text-muted-foreground">Adapting to new technologies fast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
