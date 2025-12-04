import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Resume = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="resume" className="section-padding bg-muted/30">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Want to know more?
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Download my resume to see my complete education, skills, projects, 
              and experience in detail.
            </p>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all hover:gap-3"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
