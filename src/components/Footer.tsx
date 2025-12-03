import { Github, Linkedin, Code, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/ishwarya-18", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ishwarya-01i08s05h/", label: "LinkedIn" },
  { icon: Code, href: "https://leetcode.com/u/ishwarya_18/", label: "LeetCode" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-muted-foreground text-sm">
            © {currentYear} Ishwarya R.
          </div>


          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
