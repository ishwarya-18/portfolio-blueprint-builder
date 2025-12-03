import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="glass-card p-8 md:p-12 text-center max-w-2xl mx-auto animate-fade-up">
          <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
            <FileText className="w-10 h-10 text-primary" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Want to know more?
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Download my resume to see my complete experience, skills, and qualifications.
          </p>
          
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            asChild
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
