import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Full Stack Web Developer Intern",
    company: "MR Impact",
    period: "Sep 2025 – Nov 2025",
    location: "Faridabad",
    points: [
      "Developed LegacyLink, an alumni engagement platform",
      "Built scalable backend services and frontend components",
      "Delivered SurveyZen as a production-grade application",
      "Improved platform performance and UX through iterative development",
    ],
  },
];

const education = [
  {
    degree: "B.Tech — Computer Science Engineering (Lateral Entry)",
    school: "Manav Rachna University, Faridabad",
    detail: "Graduation: 2027 | CGPA: 8.9",
  },
  {
    degree: "Diploma — Computer Science & Engineering",
    school: "Sheela Devi Institute of Management & Technology",
    detail: "Completed: 2024",
  },
];

const achievements = [
  {
    icon: "🥇",
    title: "NASA Space Apps Challenge 2025 — Noida",
    subtitle: "Winner (1st Position)",
    details: "Built weather prediction web app using 10–30 years of NASA climate data. Awarded for innovation & accuracy.",
  },
  {
    icon: "🏅",
    title: "Google Devs Sprint '25 Hackathon",
    subtitle: "Top 10 Finalist",
    details: "Smart healthcare platform with AI-based report summarization and real-time emergency alert system.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
            // experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-12">
            Journey
          </h2>
        </motion.div>

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative pl-8 border-l-2 border-primary/30 mb-16"
          >
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent border-2 border-background" />
            <p className="font-mono text-xs text-accent mb-1">{exp.period} · {exp.location}</p>
            <h3 className="font-display text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
            <p className="text-primary font-medium mb-4">{exp.company}</p>
            <ul className="space-y-2">
              {exp.points.map((point, pi) => (
                <li key={pi} className="text-muted-foreground text-sm flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
            // education
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="bg-card-gradient p-6 rounded-lg retro-border"
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{edu.degree}</h3>
                <p className="text-muted-foreground text-sm mb-2">{edu.school}</p>
                <p className="font-mono text-xs text-accent">{edu.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
            // achievements
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-12">
            Triumphs
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.15 }}
                className="relative bg-card p-8 rounded-lg retro-border retro-shadow overflow-hidden"
              >
                <span className="absolute top-4 right-4 text-4xl opacity-30">{ach.icon}</span>
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">{ach.title}</h3>
                  <p className="text-accent font-semibold text-sm mb-3">{ach.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{ach.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
