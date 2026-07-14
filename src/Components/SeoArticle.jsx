import { motion } from "framer-motion";
import { BookOpen, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { FAQ_ITEMS } from "../config/seo";

export default function SeoArticle() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="blog" className="relative py-20 md:py-28" aria-labelledby="faq-heading">
      <div className="section-divider mb-20" />
      <div className="section-container">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card mx-auto max-w-3xl overflow-hidden"
          itemScope
          itemType="https://schema.org/Article">
          <div className="border-b border-white/5 bg-gradient-to-r from-indigo-500/10 to-cyan-500/5 px-6 py-4 sm:px-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-indigo-400">
              <BookOpen size={16} aria-hidden="true" />
              Conseils & FAQ — Développement web
            </div>
          </div>

          <div className="px-6 py-8 sm:px-8">
            <h2
              id="faq-heading"
              className="mb-6 text-2xl font-bold leading-tight text-white sm:text-3xl"
              itemProp="headline">
              Pourquoi votre entreprise a besoin d&apos;un site web en 2026 ?
            </h2>

            <div className="space-y-5 text-base leading-relaxed text-zinc-400" itemProp="articleBody">
              <p>
                Partout en France, de plus en plus de clients cherchent un artisan,
                un restaurant ou un professionnel directement sur Google avant de se
                déplacer. Sans site web, votre entreprise reste invisible face à la
                concurrence, même si votre activité est excellente.
              </p>
              <p>
                Un <strong className="font-semibold text-white">site vitrine professionnel</strong>{" "}
                permet de présenter vos services, vos horaires et vos coordonnées
                24h/24. C&apos;est votre meilleur commercial : il travaille même
                quand vous dormez et renforce votre crédibilité en ligne.
              </p>
              <p>
                En tant que <strong className="font-semibold text-white">développeur web freelance</strong>,
                j&apos;accompagne les TPE, PME, artisans et indépendants dans la
                création de sites internet performants, optimisés pour le référencement
                naturel (SEO) et adaptés à tous les écrans.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="mb-4 text-xl font-bold text-white">Questions fréquentes</h3>
              <div className="space-y-3">
                {FAQ_ITEMS.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={item.question}
                      className="overflow-hidden rounded-xl border border-white/5 bg-white/2"
                      itemScope
                      itemProp="mainEntity"
                      itemType="https://schema.org/Question">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                        aria-expanded={isOpen}>
                        <span className="font-semibold text-white" itemProp="name">
                          {item.question}
                        </span>
                        <ChevronDown
                          size={18}
                          className={`shrink-0 text-zinc-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                      {isOpen && (
                        <div
                          className="border-t border-white/5 px-5 py-4 text-sm leading-relaxed text-zinc-400"
                          itemScope
                          itemProp="acceptedAnswer"
                          itemType="https://schema.org/Answer">
                          <p itemProp="text">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <a
              href="#contact"
              className="btn-primary mt-8 group inline-flex"
              aria-label="Demander un devis gratuit pour votre site web">
              Demander un devis gratuit
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
