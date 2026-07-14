import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";

export default function SeoArticle() {
  return (
    <section id="blog" className="relative py-20 md:py-28">
      <div className="section-divider mb-20" />
      <div className="section-container">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card mx-auto max-w-3xl overflow-hidden">
          <div className="border-b border-white/5 bg-gradient-to-r from-indigo-500/10 to-cyan-500/5 px-6 py-4 sm:px-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-indigo-400">
              <BookOpen size={16} />
              Conseils web
            </div>
          </div>

          <div className="px-6 py-8 sm:px-8">
            <h2 className="mb-6 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Pourquoi votre entreprise a besoin d&apos;un site web en 2026 ?
            </h2>

            <div className="space-y-5 text-base leading-relaxed text-zinc-400">
              <p>
                Partout en France, de plus en plus de clients cherchent un artisan,
                un restaurant ou un professionnel directement sur Google avant de se
                déplacer. Sans site web, votre entreprise reste invisible face à la
                concurrence.
              </p>
              <p>
                Un <strong className="font-semibold text-white">site vitrine professionnel</strong>{" "}
                permet de présenter vos services, vos horaires et vos coordonnées
                24h/24. C&apos;est votre meilleur commercial : il travaille même
                quand vous dormez.
              </p>

              <div className="rounded-xl border border-white/5 bg-white/2 p-5">
                <h3 className="mb-2 text-lg font-bold text-white">
                  Combien coûte un site web ?
                </h3>
                <p>
                  Le prix dépend de vos besoins : un site vitrine simple démarre
                  autour de quelques centaines d&apos;euros, tandis qu&apos;une
                  application sur mesure demande un budget plus conséquent. En tant
                  que développeur web freelance, je propose des solutions adaptées
                  aux TPE, PME et indépendants, avec un devis gratuit et sans engagement.
                </p>
              </div>

              <p>
                Où que vous soyez en France, n&apos;hésitez pas à me contacter pour
                discuter de votre projet web.
              </p>
            </div>

            <a
              href="#contact"
              className="btn-primary mt-8 group inline-flex">
              Demander un devis gratuit
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
