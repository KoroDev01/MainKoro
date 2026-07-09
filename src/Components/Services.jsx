import { motion } from "framer-motion";
import { Globe, Layout, RefreshCw, Search, MapPin } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Site vitrine",
    description:
      "Présentez votre activité avec un site moderne, responsive et optimisé pour Google. Idéal pour artisans, commerçants et indépendants à Rochefort.",
  },
  {
    icon: Globe,
    title: "Application web",
    description:
      "Développement sur mesure : plateformes, outils métier et interfaces interactives avec React et Node.js.",
  },
  {
    icon: RefreshCw,
    title: "Refonte & maintenance",
    description:
      "Modernisation de sites existants, corrections de bugs, mises à jour de sécurité et amélioration des performances.",
  },
  {
    icon: Search,
    title: "SEO & performance",
    description:
      "Référencement local (Rochefort, La Rochelle), optimisation des temps de chargement et structure technique pour Google.",
  },
];



export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Création de sites web à Rochefort
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Développeur web freelance basé à Rochefort — j&apos;accompagne les
            entreprises locales dans leur présence en ligne.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
                <div className="w-12 h-12 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={22} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          id="zone"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="text-cyan-400" size={22} />
            <h3 className="text-xl font-semibold text-white">Zone d&apos;intervention</h3>
          </div>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Je travaille avec des clients à Rochefort et dans toute la
            Charente-Maritime, en présentiel ou à distance.
          </p>
          
        </motion.div>
      </div>
    </section>
  );
}
