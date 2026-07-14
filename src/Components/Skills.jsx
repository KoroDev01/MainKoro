import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-cyan-500 to-blue-500",
    skills: ["React", "JavaScript", "Tailwind CSS", "SCSS", "Figma"],
  },
  {
    title: "Backend",
    color: "from-indigo-500 to-purple-500",
    skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "SQL"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="section-divider mb-20" />
      <div className="section-container">
        <SectionHeader
          label="Compétences"
          title="Technologies & outils"
          description="Un stack moderne pour des sites performants, évolutifs et faciles à maintenir."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${category.color}`} />
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="rounded-lg border border-white/8 bg-white/3 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-indigo-500/30 hover:text-white">
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
