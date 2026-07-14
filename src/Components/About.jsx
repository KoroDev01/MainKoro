import { motion } from "framer-motion";
import { Code2, Target, Users } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const highlights = [
  {
    icon: Code2,
    title: "Code propre & moderne",
    description: "React, Tailwind CSS et les dernières technologies web pour des sites rapides et maintenables.",
  },
  {
    icon: Target,
    title: "Orienté résultats",
    description: "Chaque projet est pensé pour convertir vos visiteurs en clients, avec un référencement optimisé.",
  },
  {
    icon: Users,
    title: "Accompagnement humain",
    description: "Artisans, commerçants et PME — je m'adapte à vos besoins et votre budget.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="section-divider mb-20" />
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <SectionHeader
              align="left"
              label="À propos"
              title="Développeur passionné, disponible partout"
              description="Passionné par le développement web, je suis développeur freelance basé à Rochefort. J'accompagne les artisans, commerçants et PME partout en France dans la création de sites internet sur mesure."
            />
            <p className="text-base leading-relaxed text-zinc-400">
              Mon objectif : des expériences web modernes qui vous apportent de{" "}
              <strong className="font-semibold text-white">vrais clients</strong>.
              Je combine expertise technique et écoute de vos besoins pour livrer
              des sites qui performent sur Google et convertissent, où que vous soyez.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card flex gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/10">
                    <Icon className="text-indigo-400" size={22} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-500">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
