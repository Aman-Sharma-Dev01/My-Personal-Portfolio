import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Core CS",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "RESTful APIs", "System Design"],
  },
  {
    title: "Programming",
    skills: ["Java", "JavaScript"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React.js", "API Integration"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Socket.io"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Cloud & Deploy",
    skills: ["Supabase", "Google Cloud Platform", "Vercel", "Render", "Netlify"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git & GitHub", "CI/CD"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
            // skills
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-12">
            Arsenal
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * ci }}
              className="bg-card-gradient p-6 rounded-lg retro-border"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.15 * ci + 0.05 * si }}
                    className="px-3 py-1.5 text-sm bg-background/60 text-foreground/80 rounded border border-border/60 hover:border-accent/50 hover:text-accent transition-colors duration-300"
                    style={{ animationDelay: `${si * 0.5}s` }}
                    data-hover
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
