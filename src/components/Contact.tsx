import { useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
            Let's connect
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Get In Touch</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-up animation-delay-100">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-4">
                Let's work together
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:your.email@example.com" className="font-medium hover:text-primary transition-colors">
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Your City, Country</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up animation-delay-200">
            <div>
              <Input
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-card border-border/50 focus:border-primary h-12 rounded-xl"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-card border-border/50 focus:border-primary h-12 rounded-xl"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-card border-border/50 focus:border-primary rounded-xl resize-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
