import { motion } from "framer-motion";
import { MapPin, CheckCircle2 } from "lucide-react";
import { LOCAL_SEO_CONTENT, SEO } from "../config/seo";
import SectionHeader from "./ui/SectionHeader";

const localBenefits = [
  "Basé à Rochefort (17300) — rendez-vous en présentiel possibles",
  "Sites optimisés pour le référencement local Google",
  "Accompagnement des artisans et PME de Charente-Maritime",
  "Disponible aussi à distance pour toute la France",
];

export default function LocalSeo() {
  return (
    <section
      id="rochefort"
      className="relative py-20 md:py-28"
      aria-labelledby="local-seo-heading">
      <div className="section-divider mb-20" />
      <div className="section-container">
        <SectionHeader
          id="local-seo-heading"
          label="Rochefort & Charente-Maritime"
          title={LOCAL_SEO_CONTENT.heading}
          description={LOCAL_SEO_CONTENT.intro}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8">
            <h3 className="mb-4 text-xl font-bold text-white">
              Pourquoi choisir un développeur web à Rochefort ?
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-zinc-400">
              {LOCAL_SEO_CONTENT.whyLocal}
            </p>
            <ul className="space-y-3">
              {localBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm text-zinc-300">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 sm:p-8">
            <h3 className="mb-4 text-xl font-bold text-white">
              Création de sites web à Rochefort — mes services
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-zinc-400">
              {LOCAL_SEO_CONTENT.services}
            </p>

            <div className="mb-6 flex items-center gap-2 text-sm font-medium text-indigo-400">
              <MapPin size={16} aria-hidden="true" />
              Zones desservies en priorité
            </div>
            <div className="flex flex-wrap gap-2">
              {SEO.localAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-sm text-indigo-300">
                  {area}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-primary mt-8 inline-flex text-sm"
              aria-label="Contacter le développeur web à Rochefort pour un devis">
              Devis développeur web Rochefort
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
