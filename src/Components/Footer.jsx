import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "Accueil", href: "#home" },
  { label: "Création de sites web", href: "#services" },
  { label: "Projets web", href: "#projects" },
  { label: "FAQ développeur web", href: "#blog" },
  { label: "Devis gratuit", href: "#contact" },
];

const socialLinks = [
  { icon: Github, url: "https://github.com/KoroDev01", label: "GitHub" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/faiz-mali-4255932ab/", label: "LinkedIn" },
  { icon: Mail, url: "mailto:malifaiz03@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 bg-[#06060a]">
      <div className="section-container py-12">
        <div className="mb-10 flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          <div className="text-center sm:text-left">
            <a href="#home" className="mb-3 inline-flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 text-xs font-bold text-white">
                K
              </span>
              <span className="text-lg font-bold">
                Koro<span className="gradient-text">Dev</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
              Développeur web freelance basé à Rochefort.
              J&apos;accompagne des clients partout en France et à distance.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Liens du pied de page">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-500 transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 text-zinc-500 transition-colors hover:border-indigo-500/30 hover:text-white">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-600">
            &copy; {new Date().getFullYear()} KoroDev — Rochefort, Charente-Maritime. Tous droits réservés.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Retour en haut"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 text-zinc-500 transition-colors hover:border-indigo-500/30 hover:text-white">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
