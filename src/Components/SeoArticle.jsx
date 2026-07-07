import { motion } from "framer-motion";

export default function SeoArticle() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 bg-slate-900/40">
      <article className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <p className="text-cyan-400 text-sm font-medium mb-3">Conseils web — Rochefort</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Pourquoi une entreprise rochefortaise a besoin d&apos;un site web en 2026 ?
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mb-8"></div>

          <div className="space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              À Rochefort et en Charente-Maritime, de plus en plus de clients
              cherchent un artisan, un restaurant ou un professionnel directement
              sur Google avant de se déplacer. Sans site web, votre entreprise
              reste invisible face à la concurrence locale.
            </p>
            <p>
              Un <strong className="text-white">site vitrine professionnel</strong>{" "}
              permet de présenter vos services, vos horaires et vos coordonnées
              24h/24. C&apos;est votre meilleur commercial : il travaille même
              quand vous dormez.
            </p>
            <h3 className="text-xl font-semibold text-white pt-2">
              Combien coûte un site web à Rochefort ?
            </h3>
            <p>
              Le prix dépend de vos besoins : un site vitrine simple démarre
              autour de quelques centaines d&apos;euros, tandis qu&apos;une
              application sur mesure demande un budget plus conséquent. En tant
              que développeur web freelance à Rochefort, je propose des
              solutions adaptées aux TPE, PME et indépendants de la région, avec
              un devis gratuit et sans engagement.
            </p>
            <p>
              Que vous soyez à Rochefort, La Rochelle, Royan ou sur l&apos;Île de
              Ré, n&apos;hésitez pas à{" "}
              <a href="#contact" className="text-cyan-400 hover:text-cyan-300 underline">
                me contacter
              </a>{" "}
              pour discuter de votre projet web.
            </p>
          </div>
        </motion.div>
      </article>
    </section>
  );
}
