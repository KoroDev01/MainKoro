import { motion } from "framer-motion";
export default function Footer() {
  return (
    <footer className="py-6 text-slate-400 bg-linear-to-r from-[#020617] to-[#0E162A]">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} KoroDev — Développeur web à Rochefort,
          Charente-Maritime. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
