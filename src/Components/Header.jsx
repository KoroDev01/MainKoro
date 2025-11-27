/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: "Accueil", href: "#home" },
    { label: "À propos", href: "#about" },
    { label: "Compétences", href: "#skills" },
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full p-4 bg-linear-to-r from-[#020617] to-[#0E162A] z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#home"
          className="text-xl sm:text-2xl font-medium bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          KoroDev
        </motion.a>

        {/* Navigation desktop */}
        <nav className="hidden sm:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              whileHover={{ y: -2 }}
              className="mx-2 sm:mx-3 p-2 text-base sm:text-lg hover:text-cyan-400 transition-colors duration-300">
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Bouton menu burger */}
        <motion.button
          className="sm:hidden p-2 text-white hover:text-cyan-400 transition-colors"
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700 mt-4 overflow-hidden">
            <div className="py-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block py-3 px-6 text-white hover:bg-slate-800 hover:text-cyan-400 transition-colors border-b border-slate-800 last:border-b-0 text-base">
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
