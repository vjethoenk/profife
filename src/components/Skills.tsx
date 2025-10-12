import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "React",
  "TypeScript",
  "Nest.js",
  "C#",
  "MongoDB",
  "SQL Server",
  "TailwindCSS",
  "Bootstrap",
  "Git",
  "Postman",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 text-center bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Technical Skills
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        I have a basic understanding of modern technologies and frameworks used
        in full-stack web development.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.08 },
          },
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.1, backgroundColor: "#e0f2fe" }}
            className="bg-white border border-gray-200 hover:border-blue-400 px-8 py-4 rounded-xl shadow-sm font-medium text-gray-800 transition-all duration-300"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
