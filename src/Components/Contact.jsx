import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";
import { useRef, useState } from "react";
import SectionHeader from "./ui/SectionHeader";

const FORMSUBMIT_URL =
  import.meta.env.VITE_FORMSUBMIT_URL ?? "https://formsubmit.co/ajax/malifaiz03@gmail.com";

const contactInfo = [
  { icon: Phone, label: "Téléphone", value: "+33 7 45 53 09 41" },
  { icon: Mail, label: "Email", value: "malifaiz03@gmail.com" },
  { icon: MapPin, label: "Localisation", value: "Rochefort, Charente-Maritime (17)" },
];

export default function Contact() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [sendError, setSendError] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendError("");

    const formData = new FormData(formRef.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _subject: `Portfolio KoroDev — ${subject}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message ?? "Erreur lors de l'envoi du message.");
      }

      setMessageSent(true);
      formRef.current.reset();
      setTimeout(() => setMessageSent(false), 5000);
    } catch (error) {
      console.error("Contact form error:", error);
      setSendError(
        error.message ??
          "Erreur lors de l'envoi. Vous pouvez aussi m'écrire directement à malifaiz03@gmail.com.",
      );
    } finally {
      setIsSending(false);
    }
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
                  Message envoyé avec succès ! Je vous répondrai rapidement.
                </motion.div>
              )}

              {sendError && (
                <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center text-sm text-red-400">
                  {sendError}
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

                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
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
