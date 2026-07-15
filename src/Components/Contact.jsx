import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";
import { useRef, useState } from "react";
import SectionHeader from "./ui/SectionHeader";
import { fetchWithTimeout } from "../utils/fetchWithTimeout";
import { SEO } from "../config/seo";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "";

const contactInfo = [
  { icon: Phone, label: "Téléphone", value: SEO.phoneDisplay },
  { icon: Mail, label: "Email", value: SEO.email },
  { icon: MapPin, label: "Localisation", value: "Rochefort, Charente-Maritime (17)" },
];

function buildMailtoLink({ name, email, subject, message }) {
  const mailSubject = encodeURIComponent(`[KoroDev] ${subject}`);
  const body = encodeURIComponent(
    `Nom : ${name}\nEmail : ${email}\n\n${message}`,
  );
  return `mailto:${SEO.email}?subject=${mailSubject}&body=${body}`;
}

export default function Contact() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [sendError, setSendError] = useState("");

  const sendViaMailto = ({ name, email, subject, message }) => {
    window.location.href = buildMailtoLink({ name, email, subject, message });
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 5000);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendError("");

    const formData = new FormData(formRef.current);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!WEB3FORMS_ACCESS_KEY) {
      sendViaMailto({ name, email, subject, message });
      setIsSending(false);
      return;
    }

    try {
      const response = await fetchWithTimeout(
        WEB3FORMS_URL,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name,
            email,
            subject: `[KoroDev] ${subject}`,
            message,
            from_name: "Portfolio KoroDev",
            botcheck: "",
          }),
        },
        12000,
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message ?? "Erreur lors de l'envoi du message.");
      }

      setMessageSent(true);
      formRef.current.reset();
      setTimeout(() => setMessageSent(false), 5000);
    } catch (error) {
      const isTimeout = error.name === "AbortError";
      setSendError(
        isTimeout
          ? "Le serveur met trop de temps à répondre. Utilisez le bouton ci-dessous pour m'écrire par email."
          : (error.message ??
              "Erreur lors de l'envoi. Utilisez le bouton ci-dessous pour m'écrire par email."),
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleMailtoFallback = () => {
    const formData = new FormData(formRef.current);
    sendViaMailto({
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? "Contact depuis korodev.com"),
      message: String(formData.get("message") ?? ""),
    });
  };

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="section-divider mb-20" />
      <div className="section-container">
        <SectionHeader
          label="Contact"
          title="Parlons de votre projet"
          description="Développeur web à Rochefort — projet en Charente-Maritime ou ailleurs en France ? Devis gratuit."
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2">
            <div className="glass-card h-full p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600">
                  <MessageSquare className="text-white" size={18} />
                </div>
                <h3 className="text-lg font-bold text-white">Coordonnées</h3>
              </div>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <address
                    key={label}
                    className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/2 p-4 not-italic transition-colors hover:border-indigo-500/20">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/15">
                      <Icon className="text-indigo-400" size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">{label}</p>
                      <p className="truncate text-sm font-medium text-white">{value}</p>
                    </div>
                  </address>
                ))}
              </div>

              <p className="mt-6 text-sm leading-relaxed text-zinc-500">
                Je réponds généralement sous 24h. Premier échange gratuit pour comprendre
                vos besoins et vous proposer la meilleure solution.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3">
            <div className="glass-card p-6 sm:p-8">
              {messageSent && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center text-sm text-emerald-400">
                  {WEB3FORMS_ACCESS_KEY
                    ? "Message envoyé avec succès ! Je vous répondrai rapidement."
                    : "Votre client mail va s'ouvrir — envoyez le message pour me contacter."}
                </motion.div>
              )}

              {sendError && (
                <div className="mb-6 space-y-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center text-sm text-red-400">
                  <p>{sendError}</p>
                  <button
                    type="button"
                    onClick={handleMailtoFallback}
                    className="btn-secondary w-full text-sm">
                    <Mail size={16} />
                    M&apos;écrire à {SEO.email}
                  </button>
                </div>
              )}

              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-400">
                      Votre nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-white/8 bg-white/3 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-400">
                      Votre email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-xl border border-white/8 bg-white/3 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                      placeholder="contact@exemple.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-zinc-400">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full rounded-xl border border-white/8 bg-white/3 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                    placeholder="Création d'un site vitrine"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-400">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-white/8 bg-white/3 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                    placeholder="Décrivez votre projet, vos objectifs, votre budget..."
                  />
                </div>

                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: isSending ? 1 : 1.01 }}
                  whileTap={{ scale: isSending ? 1 : 0.99 }}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
                  <Send size={18} />
                  {isSending ? "Envoi en cours..." : "Envoyer le message"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
