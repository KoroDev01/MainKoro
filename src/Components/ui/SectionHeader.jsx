import { motion } from "framer-motion";

export default function SectionHeader({ label, title, description, align = "center" }) {
  const alignClass =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <motion.div
      className={`flex flex-col gap-4 mb-14 md:mb-16 ${alignClass}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}>
      {label && (
        <span className="section-label">{label}</span>
      )}
      <h2 className="section-title">{title}</h2>
      {description && (
        <p className={`section-desc ${align === "center" ? "max-w-2xl" : "max-w-xl"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
