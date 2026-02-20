import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SurveyZen",
    description: "Full-stack MERN survey platform with anonymous survey creation, real-time analytics, secure backend APIs, and responsive UI.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: null,
  },
  {
    title: "MediCare+",
    description: "Centralized healthcare system with appointment scheduling, EHRs, teleconsultation, AI-powered report summarization, medical vault, and real-time emergency alerts via Socket.io.",
    tags: ["React", "Socket.io", "AI", "Node.js"],
    link: "https://smart-health-care-gamma.vercel.app",
  },
  {
    title: "Clan Event Manager",
    description: "Full-stack event portal for college DSW department with secure admin dashboard, public event browsing & registration, and scalable REST APIs.",
    tags: ["React", "Express", "MongoDB", "REST API"],
    link: "https://clan-event-manager-0-1-kgy7.vercel.app",
  },
  {
    title: "LegacyLink",
    description: "Alumni engagement and networking platform designed to strengthen long-term community connections. Built with robust backend APIs and responsive, accessible React interfaces.",
    tags: ["React", "Node.js", "MongoDB", "UX"],
    link: "https://legacy-link-project.vercel.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-warm-gradient" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
            // projects
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-12">
            Selected Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i }}
              className="group relative bg-card p-8 rounded-lg retro-border hover:retro-shadow transition-all duration-500"
            >
              {/* Number */}
              <span className="absolute top-4 right-4 font-mono text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-500">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors duration-300 mt-1"
                      data-hover
                      aria-label={`Visit ${project.title} project (opens in new tab)`}
                    >
                      <ExternalLink size={18} aria-hidden="true" />
                    </a>
                  )}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
