/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

// Composant FlyingPointsCanvas
const FlyingPointsCanvas = ({
  speed = 1,
  numPoints = 30,
  pointSize = 30,
  opacity = 0.05,
  className = "",
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const flyingPointsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;

    const initializeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = parent.offsetHeight;
    };

    const createFlyingPoints = () => {
      flyingPointsRef.current = [];
      for (let i = 0; i < numPoints; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * pointSize + 1;
        const pointSpeed = (Math.random() - 0.5) * 2 * speed;
        flyingPointsRef.current.push({ x, y, size, speed: pointSpeed });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const point of flyingPointsRef.current) {
        point.x += point.speed;
        if (point.x > canvas.width + point.size) {
          point.x = 0 - point.size;
          point.y = Math.random() * canvas.height;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    initializeCanvas();
    createFlyingPoints();
    animate();

    const handleResize = () => {
      initializeCanvas();
      createFlyingPoints();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, numPoints, pointSize, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
};

export default function Hero() {
  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/KoroDev01",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/faiz-mali-4255932ab/",
    },
    {
      icon: Mail,
      url: "mailto:malifaiz03@gmail.com",
    },
  ];

  return (
    <motion.section
      id="home"
      className="flex flex-col items-center justify-center text-center min-h-screen px-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      {/* Canvas des points volants en arrière-plan */}
      <FlyingPointsCanvas
        speed={0.8}
        numPoints={25}
        pointSize={40}
        opacity={0.03}
      />

      {/* Contenu principal */}
      <div className="relative z-10">
        <p className="text-cyan-500 text-lg md:text-xl mb-4">
          Bonjour, je suis
        </p>
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8,
          }}>
          Faiz, Développeur Full Stack
        </motion.h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl text-gray-300">
          Je crée des expériences web modernes et performantes avec une
          attention particulière aux détails et à l'expérience utilisateur.
        </p>

        <div className="relative">
          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <motion.a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 mx-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Me contacter
            </motion.a>
            <motion.a
              href="#projects"
              className="border-cyan-500 border-2 hover:bg-cyan-500/10 px-8 py-4 text-cyan-500 font-semibold rounded-lg transition-colors duration-300 "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Voir mes projets
            </motion.a>
          </div>

          {/* Flèche animée */}
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}>
            <ArrowDown className="text-cyan-400" size={32} />
          </motion.div>

          {/* Liens sociaux */}
          <motion.div
            className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}>
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors p-3 bg-white/5 rounded-full backdrop-blur-sm"
                  whileHover={{
                    scale: 1.2,
                    rotate: index % 2 === 0 ? -5 : 5,
                    backgroundColor: "rgba(6, 182, 212, 0.1)",
                  }}
                  whileTap={{ scale: 0.9 }}>
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
