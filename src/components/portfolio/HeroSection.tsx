import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Retro cityscape at sunset, portfolio background"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6"
        >
          Full-Stack Developer • Hackathon Winner
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-primary mb-6 leading-[0.9] animate-flicker"
        >
          Aman
          <br />
          <span className="text-gradient-warm">Sharma</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building scalable applications & winning hackathons.
          <br />
          Crafting meaningful software, one pixel at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex items-center justify-center gap-6 flex-wrap"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 retro-shadow"
            data-hover
          >
            View Work
          </a>
          <a
            href="/Aman_Sharma_Resume.pdf"
            download
            className="px-8 py-3 border-2 border-accent text-accent font-mono text-sm uppercase tracking-wider hover:bg-accent/10 transition-all duration-300"
            data-hover
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-primary text-primary font-mono text-sm uppercase tracking-wider hover:bg-primary/10 transition-all duration-300"
            data-hover
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-primary/40 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-primary/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
