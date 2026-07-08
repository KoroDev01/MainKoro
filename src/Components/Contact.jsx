import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";

const FORMSUBMIT_URL =
  import.meta.env.VITE_FORMSUBMIT_URL ?? "https://formsubmit.co/ajax/malifaiz03@gmail.com";

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
    <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 bg-slate-900">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
            Contact
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto mb-6 md:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Un projet web à Rochefort ou en Charente-Maritime ? Devis gratuit et
            sans engagement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white text-center lg:text-left">
              Me contacter
            </h3>

            <div className="space-y-4 sm:space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-transparent hover:border-cyan-500 bg-slate-800/50 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="text-white" size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm sm:text-base">Téléphone</p>
                  <p className="text-gray-400 text-sm sm:text-base">+33 7 45 53 09 41</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-transparent hover:border-cyan-500 bg-slate-800/50 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="text-white" size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm sm:text-base">Email</p>
                  <p className="text-gray-400 text-sm sm:text-base truncate">
                    malifaiz03@gmail.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-transparent hover:border-cyan-500 bg-slate-800/50 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">Localisation</p>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Rochefort, Charente-Maritime (17)
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            {messageSent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
                Message envoyé avec succès ! Je vous répondrai rapidement.
              </motion.div>
            )}

            {sendError && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center text-sm">
                {sendError}
              </div>
            )}

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Votre nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Koro Dev"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Votre email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="ABC@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Votre sujet"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                <Send size={18} />
                {isSending ? "Envoi en cours..." : "Envoyer le message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
