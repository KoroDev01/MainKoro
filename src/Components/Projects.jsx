import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Journal from "../assets/img/leJournalDuLundiThumbnail.png";
import ancienDesign from "../assets/img/ancienDesignThumbnail.png";
import beauteNails from "../assets/img/BeauteNails.png";
import ArtiPro from "../assets/img/artipro.png";
import SectionHeader from "./ui/SectionHeader";

function normalizeUrl(url) {
  if (!url || url === "#") return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `https://${url}`;
}

const statusConfig = {
  online: { label: "En ligne", className: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20" },
  progress: { label: "En cours", className: "bg-amber-500/15 text-amber-400 border-amber-500/20" },
  offline: { label: "Hors ligne", className: "bg-zinc-500/15 text-zinc-500 border-zinc-500/20" },
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
    <section id="projects" className="relative py-20 md:py-28">
      <div className="section-divider mb-20" />
      <div className="section-container">
        <SectionHeader
          label="Portfolio"
          title="Projets réalisés"
          description="Quelques réalisations qui illustrent mon savoir-faire en développement web."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => {
            const badge = statusConfig[project.status];
            const githubUrl = normalizeUrl(project.github);
            const demoUrl = normalizeUrl(project.demo);
            const isFeatured = project.status === "progress";

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`glass-card group flex flex-col overflow-hidden ${
                  isFeatured ? "sm:col-span-2 lg:grid lg:grid-cols-2" : ""
                }`}>
                <div className={`relative overflow-hidden ${isFeatured ? "lg:h-full" : "h-52"}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06060a] via-transparent to-transparent opacity-60" />
                  <span
                    className={`absolute right-4 top-4 rounded-full border px-3 py-1 text-xs font-semibold ${badge.className}`}>
                    {badge.label}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-500">
                    {project.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 border-t border-white/5 pt-4">
                    {githubUrl ? (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-white">
                        <Github size={16} />
                        GitHub
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm text-zinc-700">
                        <Github size={16} />
                        GitHub
                      </span>
                    )}

                    {demoUrl ? (
                      <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300">
                        <ExternalLink size={16} />
                        Voir le site
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm text-zinc-700">
                        <ExternalLink size={16} />
                        Voir le site
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
