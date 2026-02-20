import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-warm-gradient" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
            // about me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-8">
            The Story So Far
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div className="space-y-6">
            <p className="text-foreground/80 leading-relaxed text-lg">
              Aspiring Software Engineer with a strong foundation in{" "}
              <span className="text-primary font-semibold">Data Structures & Algorithms</span>,{" "}
              <span className="text-primary font-semibold">Object-Oriented Programming</span>, and{" "}
              <span className="text-primary font-semibold">System Design</span>.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Experienced in building scalable MERN applications, AI-powered platforms,
              and real-time systems. Recognized for innovation through national-level
              hackathons and driven to build meaningful, user-focused software.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { label: "Location", value: "Faridabad, Haryana, India" },
              { label: "Education", value: "B.Tech CSE — Manav Rachna University" },
              { label: "CGPA", value: "8.9" },
              { label: "Graduating", value: "2027" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex justify-between items-baseline border-b border-border/50 pb-3"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </span>
                <span className="text-foreground/80 font-medium">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
