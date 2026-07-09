import { motion } from "framer-motion";

export default function About() {
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
          Passionné par le développement web, je suis développeur freelance basé
          à <strong className="text-white">Rochefort</strong>, en
          Charente-Maritime. J&apos;accompagne les artisans, commerçants et PME
          , dans la création de sites internet sur
          mesure. Mon objectif : des expériences web modernes qui vous apportent
          de vrais clients.
        </p>
      </motion.div>
    </section>
  );
}
