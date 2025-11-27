/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
export default function Footer() {
    return (
      <footer className="py-6  text-slate-400 bg-linear-to-r from-[#020617] to-[#0E162A]">
       <div className="container mx-auto text-center">
         <p className="text-sm">
           &copy; {new Date().getFullYear()} KoroDev. Tous droits réservés. fait avec ❤️
         </p>
       </div>
      </footer>
    );
}