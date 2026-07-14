import autodidacte from "../assets/img/autodidacte.png";
import iosDev from "../assets/img/ios_dev.png";
import dyma from "../assets/img/dyma.png";
import afec from "../assets/img/formation_afec.png";
import diplome from "../assets/img/diplome_afec.png";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const formations = [
  {
    title: "Passionné par le développement et l'informatique",
    school: "En autonomie et en autodidacte avant de suivre une formation",
    year: "Enfance & adolescence",
    img: autodidacte,
  },
  {
    title: "Certificat De Réussite : Développeur Application IOS",
    school: "Simplon.co Toulouse",
    year: "04/2024 - 05/2024",
    img: iosDev,
  },
  {
    title: "Certificats de réussite : Développement Web & Mobile Html - Css - Scss",
    school: "Dyma.fr",
    year: "06/2024 - 07/2024",
    img: dyma,
  },
  {
    title: "Attestation de formation : Développeur Web et Web Mobile",
    school: "Afec - La Rochelle",
    year: "09/2025 - 06/2026",
    img: afec,
  },
  {
    title: "Titre Professionnel : Développeur Web et Web Mobile (niveau 5)",
    school: "Afec - La Rochelle",
    year: "09/2025 - 06/2026",
    img: diplome,
  },
];

export default function Formations() {
  return (
    <section id="formations" className="relative py-20 md:py-28">
      <div className="section-divider mb-20" />
      <div className="section-container">
        <SectionHeader
          label="Parcours"
          title="Formations & certifications"
          description="Un parcours continu d'apprentissage pour rester à la pointe des technologies web."
        />

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent md:left-1/2 md:block md:-translate-x-px" />

          <div className="flex flex-col gap-6">
            {formations.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}>
                  <div className={`md:w-1/2 ${isEven ? "md:pl-12" : "md:pr-12"}`}>
                    <div className={`glass-card p-5 sm:p-6 ${isEven ? "md:text-left" : "md:text-right"}`}>
                      <span className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                        <GraduationCap size={14} />
                        {item.year}
                      </span>
                      <h3 className="mb-2 text-base font-bold text-white sm:text-lg">{item.title}</h3>
                      <p className="text-sm text-zinc-500">{item.school}</p>
                    </div>
                  </div>

                  <div className="absolute left-6 z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-indigo-500 bg-[#06060a] md:left-1/2 md:block" />

                  <div className="flex justify-center md:w-24 md:shrink-0">
                    <div className="h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white/3 shadow-lg sm:h-20 sm:w-20">
                      {item.img ? (
                        <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-white/5">
                          <GraduationCap className="text-zinc-600" size={24} />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
