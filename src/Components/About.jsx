/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Code2, Rocket, Users, Zap } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Code2,
      title: "Code de qualité",
      description: "J'écris du code propre, maintenable et bien documenté",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimisation des performances pour une expérience fluide",
    },
    {
      icon: Users,
      title: "UX/UI Design",
      description: "Interface intuitive centrée sur l'utilisateur",
    },
    {
      icon: Zap,
      title: "Réactivité",
      description: "Développement rapide et communication transparente",
    },
  ];

  return (
    <section
      id="about"
      className="relative flex items-center flex-col py-16 md:py-20 px-4 sm:px-6">
      <motion.div
        className="container mx-auto px-4 sm:px-6 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
          À propos de moi
        </h2>
        <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto mb-6 md:mb-8"></div>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl text-gray-300 leading-relaxed">
          Passionné par le développement web et toujours avide d'apprendre de
          nouvelles technologies, je m'efforce de créer des expériences
          utilisateur innovantes et engageantes. Mon objectif est de contribuer
          à des projets qui font une différence tout en continuant à évoluer
          professionnellement.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mt-12 md:mt-16 px-4 sm:px-6">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4 sm:p-6 hover:border-cyan-500/50 transition-all">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <IconComponent className="text-white" size={20} />
              </div>
              <h3 className="text-lg sm:text-xl text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
