import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, MapPin, Sparkles } from "lucide-react";

const socialLinks = [
  { icon: Github, url: "https://github.com/KoroDev01", label: "GitHub" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/faiz-mali-4255932ab/", label: "LinkedIn" },
  { icon: Mail, url: "mailto:malifaiz03@gmail.com", label: "Email" },
];

const stats = [
  { value: "4+", label: "Projets réalisés" },
  { value: "100%", label: "Sur mesure" },
  { value: "FR", label: "Clients partout" },
];

const codeLines = [
  { indent: 0, parts: [{ text: "const ", color: "text-purple-400" }, { text: "projet", color: "text-cyan-300" }, { text: " = {", color: "text-zinc-400" }] },
  { indent: 1, parts: [{ text: "client", color: "text-cyan-300" }, { text: ": ", color: "text-zinc-500" }, { text: '"Votre entreprise"', color: "text-emerald-400" }, { text: ",", color: "text-zinc-400" }] },
  { indent: 1, parts: [{ text: "zone", color: "text-cyan-300" }, { text: ": ", color: "text-zinc-500" }, { text: '"Partout en France"', color: "text-emerald-400" }, { text: ",", color: "text-zinc-400" }] },
  { indent: 1, parts: [{ text: "objectif", color: "text-cyan-300" }, { text: ": ", color: "text-zinc-500" }, { text: '"Plus de clients"', color: "text-emerald-400" }, { text: ",", color: "text-zinc-400" }] },
  { indent: 1, parts: [{ text: "seo", color: "text-cyan-300" }, { text: ": ", color: "text-zinc-500" }, { text: "true", color: "text-amber-400" }, { text: ",", color: "text-zinc-400" }] },
  { indent: 1, parts: [{ text: "responsive", color: "text-cyan-300" }, { text: ": ", color: "text-zinc-500" }, { text: "true", color: "text-amber-400" }] },
  { indent: 0, parts: [{ text: "};", color: "text-zinc-400" }] },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24 pb-16 sm:pt-28">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="section-label">
                <Sparkles size={12} className="mr-1.5 inline" />
                Développeur Web Freelance
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-zinc-500">
                <MapPin size={14} className="text-cyan-400" />
                Basé à Rochefort — clients partout
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.5rem]">
              Développeur web freelance : des sites qui{" "}
              <span className="gradient-text">attirent des clients</span>
            </h1>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Développeur web freelance, j&apos;accompagne les entreprises, artisans
              et indépendants partout en France — en présentiel ou à distance — pour
              créer des sites modernes, performants et optimisés pour Google.
            </p>

            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <motion.a
                href="#contact"
                className="btn-primary group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}>
                Démarrer un projet
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="#projects"
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}>
                Voir mes réalisations
              </motion.a>
            </div>

            <div className="flex flex-wrap gap-8 border-t border-white/5 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/3 text-zinc-400 transition-colors hover:border-indigo-500/30 hover:text-white">
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 blur-2xl" />
            <div className="glass-card relative overflow-hidden rounded-2xl p-1">
              <div className="flex items-center gap-2 border-b border-white/5 bg-white/2 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs text-zinc-500">projet.js</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-sm leading-7">
                {codeLines.map((line, i) => (
                  <div key={i} style={{ paddingLeft: `${line.indent * 1.5}rem` }}>
                    {line.parts.map((part, j) => (
                      <span key={j} className={part.color}>{part.text}</span>
                    ))}
                  </div>
                ))}
              </pre>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-3">
              <p className="text-xs text-zinc-500">Performance</p>
              <p className="text-lg font-bold text-emerald-400">98/100</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-3">
              <p className="text-xs text-zinc-500">SEO</p>
              <p className="text-lg font-bold gradient-text">Optimisé</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
