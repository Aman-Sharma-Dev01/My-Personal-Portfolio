import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    { icon: Mail, label: "Email", value: "asharma8464@gmail.com", href: "mailto:asharma8464@gmail.com" },
    { icon: Phone, label: "Phone", value: "7217896449", href: "tel:+917217896449" },
    { icon: Github, label: "GitHub", value: "Aman-Sharma-Dev01", href: "https://github.com/Aman-Sharma-Dev01" },
    { icon: Linkedin, label: "LinkedIn", value: "aman-sharma-dev01", href: "https://linkedin.com/in/aman-sharma-dev01" },
  ];

  return (
    <section id="contact" className="section-padding bg-warm-gradient" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
            // contact
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
            Open for opportunities, collaborations, and conversations about software, hackathons, or anything creative.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-4 p-5 bg-card rounded-lg retro-border hover:retro-shadow hover:border-accent/40 transition-all duration-300 group"
              data-hover
              aria-label={`Contact via ${link.label}: ${link.value}`}
            >
              <link.icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              <div className="text-left">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{link.label}</p>
                <p className="text-foreground/80 text-sm">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 pt-8 border-t border-border/50"
        >
          <p className="font-mono text-xs text-muted-foreground">
            © 2025 Aman Sharma — Crafted with warmth and nostalgia
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
