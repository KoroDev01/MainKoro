import { motion } from "framer-motion";

export default function Formations() {
  const formations = [
    {
      title: "Passionné par le développement et l'informatique",
      school: "En autonomie et en autodidacte avant de suivre une formation",
      year: "Pendant toute mon enfance et mon adolescence",
      img: "/src/assets/img/Gemini_Generated_Image_t7i1j5t7i1j5t7i1.png", // Remplace par tes vraies images
    },
    {
      title: "Certificat De Réussite : Développeur Application IOS ",
      school: "Simplon.co Toulouse",
      year: "04/2024 - 05/2024",
      img: "/src/assets/img/ios _dev.png",
    },
    {
      title:
        "Certificats de réussite : Développement Web & Mobile Html - Css - Scss",
      school: "Dyma.fr",
      year: "06/2024 - 07/2024",
      img: "src/assets/img/dyma.png",
    },
    {
      title:
        "Attestation de formation du titre professionnel : DEVELOPPEUR WEB ET WEB MOBILE",
      school: "Afec - La rochelle",
      year: "09/2025 - 06/2026",
      img: "src/assets/img/formation_afec.png",
    },
    {
      title: "Titre Professionnel : DEVELOPPEUR WEB ET WEB MOBILE de niveau 5 ",
      school: "Afec - La rochelle",
      year: "09/2025 - 06/2026",
      img: "src/assets/img/diplome_afec.png",
    },
  ];

  return (
    <motion.section
      id="formations"
      className="flex flex-col items-center justify-center px-4 py-20 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        Formations
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
      <p className="text-xl text-slate-400 pb-5 text-center">
        Diplômes et certifications obtenus
      </p>

      {/* Conteneur de la Timeline */}
      <div className="relative w-full mt-10">
        {/* Ligne verticale centrale (Masquée sur mobile, centrée sur grand écran) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-slate-700 hidden md:block" />

        <div className="flex flex-col gap-12 relative">
          {formations.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center w-full ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}>
                {/* 1. Bloc Texte (Prend la moitié de la largeur) */}
                <div
                  className={`w-full md:w-1/2 flex ${isEven ? "md:justify-start md:pl-12" : "md:justify-end md:pr-12"} text-center ${isEven ? "md:text-left" : "md:text-right"}`}>
                  <div className="max-w-md">
                    <span className="text-cyan-400 font-bold block mb-1 text-lg">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.school}
                    </p>
                  </div>
                </div>

                {/* 2. Image Centrale (Macaron) */}
                <div className="relative z-10 my-4 md:my-0 flex justify-center items-center">
                  <div className="w-40 h-40 rounded-full border-4 border-slate-800 overflow-hidden bg-slate-900 shadow-xl flex items-center justify-center p-1">
                    {item.img ? (
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover  rounded-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-800 rounded-full" /> // Placeholder si pas d'image
                    )}
                  </div>
                </div>

                {/* 3. Bloc invisible pour équilibrer le Flexbox sur desktop */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
