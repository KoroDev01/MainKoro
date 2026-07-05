import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Journal from "../assets/img/leJournalDuLundiThumbnail.png";
import ancienDesign from "../assets/img/ancienDesignThumbnail.png";
import beauteNails from "../assets/img/BeauteNails.png";
import ArtiPro from "../assets/img/artipro.png";

function normalizeUrl(url) {
  if (!url || url === "#") return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `https://${url}`;
}

const statusConfig = {
  online: { label: "En ligne", className: "bg-green-500/20 text-green-400" },
  progress: { label: "En cours", className: "bg-amber-500/20 text-amber-400" },
  offline: { label: "Hors ligne", className: "bg-slate-500/20 text-slate-400" },
};

export default function Projects() {
  const projects = [
    {
      title: "ArtiPro",
      description:
        "Plateforme web pour mettre en relation des professionnels de l'artisanat avec des clients. Projet principal en cours de développement.",
      image: ArtiPro,
      status: "progress",
      tags: ["React", "Node.js", "Tailwind CSS", "MongoDB", "ExpressJs"],
      github: "https://github.com/KoroDev01/ArtiPro",
      demo: "https://www.artipro01.fr",
    },
    {
      title: "Le Journal du Lundi",
      description:
        "Site d'actualités hebdomadaires avec articles, images et vidéos intégrées.",
      image: Journal,
      status: "offline",
      tags: ["HTML", "CSS", "SASS"],
      github: null,
      demo: null,
    },
    {
      title: "Site Beauté Nails",
      description:
        "Site vitrine pour un salon de manucure avec galerie et formulaire de contact.",
      image: beauteNails,
      status: "offline",
      tags: ["HTML", "CSS", "SASS"],
      github: null,
      demo: null,
    },
    {
      title: "Ancien design du portfolio",
      description:
        "Première version de mon portfolio avec animations et transitions fluides.",
      image: ancienDesign,
      status: "offline",
      tags: ["HTML", "CSS", "SASS", "JavaScript"],
      github: null,
      demo: null,
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white mb-6">Projets réalisés</h2>
            <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-400">
              Quelques projets sur lesquels j&apos;ai travaillé
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => {
              const badge = statusConfig[project.status];
              const githubUrl = normalizeUrl(project.github);
              const demoUrl = normalizeUrl(project.demo);

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`bg-slate-900/50 backdrop-blur-sm border rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all group flex flex-col ${
                    project.status === "progress" ? "border-cyan-500/40 ring-1 ring-cyan-500/20" : "border-slate-800"
                  }`}>
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-xl text-white font-semibold">{project.title}</h3>
                      <span
                        className={`text-xs shrink-0 rounded-full px-3 py-1 ${badge.className}`}>
                        {badge.label}
                      </span>
                    </div>

                    <p className="text-slate-400 text-sm mb-4 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-cyan-500/20 text-cyan-400 rounded-full px-3 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-2 border-t border-slate-800">
                      {githubUrl ? (
                        <a
                          href={githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                          <Github size={16} />
                          GitHub
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-sm text-slate-600 cursor-not-allowed">
                          <Github size={16} />
                          GitHub
                        </span>
                      )}

                      {demoUrl ? (
                        <a
                          href={demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                          <ExternalLink size={16} />
                          Démo
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-sm text-slate-600 cursor-not-allowed">
                          <ExternalLink size={16} />
                          Démo
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
