import { motion } from "framer-motion";
import { Globe, Layout, RefreshCw, Search, MapPin, ArrowUpRight } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const services = [
  {
    icon: Layout,
    title: "Site vitrine",
    description:
      "Présentez votre activité avec un site moderne, responsive et optimisé pour Google. Idéal pour artisans, commerçants et indépendants.",
    featured: true,
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
      "Référencement naturel, optimisation des temps de chargement et structure technique pour Google.",
  },
];

const modes = ["Rochefort", "La Rochelle", "Charente-Maritime", "Toute la France", "À distance"];

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28" aria-labelledby="services-heading">
      <div className="section-divider mb-20" />
      <div className="section-container">
        <SectionHeader
          id="services-heading"
          label="Services"
          title="Création de sites web à Rochefort"
          description="Développeur web freelance basé à Rochefort — sites vitrines, applications et SEO pour entreprises locales et clients partout en France."
        />

        <div className="mb-12 grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`glass-card group relative overflow-hidden p-6 sm:p-8 ${
                  service.featured ? "sm:col-span-2 sm:flex sm:items-center sm:gap-8" : ""
                }`}>
                {service.featured && (
                  <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-indigo-500/10 blur-2xl" />
                )}
                <div className={`${service.featured ? "sm:shrink-0" : ""}`}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-lg shadow-indigo-500/20">
                    <Icon className="text-white" size={22} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-500">{service.description}</p>
                </div>
                {service.featured && (
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-400 transition-colors hover:text-indigo-300 sm:mt-0">
                    Demander un devis
                    <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          id="zone"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <MapPin className="text-cyan-400" size={20} />
            <h3 className="text-lg font-bold text-white">Où je travaille</h3>
          </div>
          <p className="mx-auto mb-6 max-w-lg text-sm text-zinc-500">
            Basé à Rochefort, je collabore en priorité avec des clients en
            Charente-Maritime, tout en accompagnant des projets partout en France
            et à l&apos;international.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {modes.map((mode) => (
              <span
                key={mode}
                className="rounded-full border border-white/8 bg-white/3 px-4 py-1.5 text-sm text-zinc-400">
                {mode}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
