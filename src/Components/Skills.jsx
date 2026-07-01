/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Skills() {
    const skillCategories = [
      {
        title: "Frontend",
        skills: [
          { name: "React", level: 100 },
          { name: "JavaScript", level: 100 },
          { name: "Tailwind CSS SCSS", level: 100 },
          { name: "Figma", level: 100 },
        ],
      },
      {
        title: "Backend",
        skills: [
          { name: "Sql", level: 100 },
          { name: "PostgreSQL", level: 100 },
          { name: "MongoDB", level: 100 },
          { name: "Express JS", level: 100 },
        ],
      },
    ];
  return (
    <motion.section id="skills"
      className="flex flex-col items-center justify-center text-center  px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Compétences</h2>
      <div className="w-20 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
      <p className="text-xl text-slate-400 pb-15">
        Technologies et outils que je maîtrise
      </p>
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl mt-10">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
            <h3 className="text-xl text-white mb-6">{category.title}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300">{skill.name}</span>

                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: categoryIndex * 0.1 + skillIndex * 0.1,
                      }}
                      className="h-full bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}