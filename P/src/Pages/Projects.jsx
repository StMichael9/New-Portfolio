import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import TaskMasterThumbnail from "../assets/TaskMasterThumbnail.jpeg";
import TensorFinanceAdvisor from "../assets/TensorFinanceAdvisor.jpeg";
const projects = [
  {
    id: 1,
    title: "WealthMate Banking App",
    description:
      "Full‑stack banking platform with JWT auth, Plaid integration, and real‑time charts.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "Prisma",
      "Tailwind.css,",
      "SQLite",
    ],
    repo: "https://github.com/StMichael9/WealthMate",
    demo: "https://wealthmate.app",
    cover: "https://placehold.co/600x400?text=WealthMate",
  },

  {
    id: 2,
    title: "TaskMaster",
    description:
      "Task management app with drag-and-drop, real-time sync, and offline support.",
    tech: ["React", "Node.js", "Express.js"],
    repo: "https://github.com/StMichael9/TaskMaster",
    demo: "https://task-master-teal-eta.vercel.app",
    cover: TaskMasterThumbnail,
  },
  {
    id: 3,
    title: "TensorFinance-Advisor",
    description:
      "TensorFinance Advisor is a machine learning application built with TensorFlow.js that provides personalized financial recommendations based on a user's income.",
    tech: ["React", "Node.js", "Express.js", "TensorFlow.js"],
    repo: "https://github.com/StMichael9/TensorFinance-Advisor",
    demo: "https://tensor-finance-advisor.vercel.app",
    cover: TensorFinanceAdvisor,
  },
];

const cardVariant = {
  initial: { opacity: 0, y: 30 },
  animate: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15 } }),
};

const Projects = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        My <span className="text-cyan-400">Projects</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <motion.article
            key={proj.id}
            custom={i}
            variants={cardVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="relative group overflow-hidden rounded-2xl shadow-lg"
          >
            {/* Image */}
            <img
              src={proj.cover}
              alt={`${proj.title} cover`}
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
              <h3 className="text-xl font-semibold mb-1">{proj.title}</h3>
              <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-white/10 px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={proj.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-400 hover:underline"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-400 hover:underline"
                >
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
