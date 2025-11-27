/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Journal from "../assets/img/leJournalDuLundiThumbnail.png";
import cv from "../assets/img/monCvThumbnail.png";
import ancienDesign from "../assets/img/ancienDesignThumbnail.png";
export default function Projects() {
  const projects = [
    {
      title: "Le Journal du Lundi",
      description:
        "Site d'actualités hebdomadaires avec articles, images et vidéos intégrées (site n'est plus actif).",
      image: Journal,
      tags: ["HTML", "CSS", "SASS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Mon CV en ligne",
      description:
        "CV interactif en ligne avec sections téléchargeables et design responsive (site n'est plus actif)",
      image: cv,
      tags: ["HTML", "CSS", "SASS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Ancien Design de Mon Portfolio",
      description:
        "Portfolio personnel avec animations et transitions fluides (site n'est plus actif).",
      image: ancienDesign,
      tags: ["HTML", "CSS", "SASS"," JavaScript"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 relative ">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <div className="text-center mb-16 ">
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Projets réalisés
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-400 ">
              Quelques projets sur lesquels j'ai travaillé
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto ">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all group ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 "
                />
                <div className="p-6"></div>
                <h3 className="text-2xl text-white mb-2 px-5">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 px-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap mb-4 px-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-cyan-500/20 text-cyan-400 rounded-full px-3 py-1 mr-2 mb-2 ">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 py-5 ">
                  <a
                    href={project.github}
                    className="text-blue-500 hover:underline px-5"
                    target="_blank"
                    rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer">
                    Démo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
