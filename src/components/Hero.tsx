import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Ishwarya R";

  // Typing effect
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) clearInterval(interval);
    }, 150); // typing speed in ms
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      {/* Background orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse animation-delay-500" />

      <div className="container-custom relative z-10 text-center">
        <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4 animate-fade-up">
          Welcome to my portfolio
        </p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up animation-delay-100">
          Hi, I'm{" "}
          <span className="text-gradient glow-text">{displayText}</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-up animation-delay-200">
          Pre-final Year Student | UI/UX & Full-Stack Enthusiast
        </p>

        <p className="text-lg text-muted-foreground/80 max-w-xl mx-auto mb-10 animate-fade-up animation-delay-300">
          Passionate about crafting intuitive user experiences, building scalable web applications, and solving real-world problems through code.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up animation-delay-400">
          <Button 
            onClick={scrollToProjects}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            View My Projects
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
