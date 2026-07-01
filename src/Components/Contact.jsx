/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_wq35ac2", // Remplacez par votre Service ID
        "template_pydm2fh", // Remplacez par votre Template ID
        formRef.current,
        "16TlZL_rgfcidG4Cx", // Remplacez par votre Public Key
      )
      .then((result) => {
        console.log("Message envoyé avec succès!", result.text);
        setMessageSent(true);
        formRef.current.reset();
        setTimeout(() => setMessageSent(false), 5000);
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi:", error.text);
        alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 bg-slate-900">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-white to-white bg-clip-text text-transparent">
            Contact
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto mb-6 md:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Vous avez un projet en tête ? Discutons-en !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8 md:gap-12 text-center">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">
              Me contacter
            </h3>

            <div className="space-y-4 sm:space-y-6 flex flex-col items-center justify-center ">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex  justify-center items-center gap-3 sm:gap-4 p-2 sm:p-4 rounded-lg border border-transparent hover:border-cyan-500 bg-slate-800/50 transition-all">
                <div className=" p-3 h-10 sm:w-12 sm:h-12 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="text-white" size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm sm:text-base flex justify-center px-10">
                    Téléphone
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base">
                    +33 7 45 53 09 41
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex  items-center justify-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-transparent hover:border-cyan-500 bg-slate-800/50 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="text-white" size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm sm:text-base px-10">
                    Email
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base truncate">
                    malifaiz03@gmail.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex  justify-center items-center gap-3 sm:gap-4 p-2 sm:p-4 rounded-lg border border-transparent hover:border-cyan-500 bg-slate-800/50 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base px-10">
                    Localisation
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base">France</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
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
                ✅ Message envoyé avec succès ! Je vous répondrai rapidement.
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
