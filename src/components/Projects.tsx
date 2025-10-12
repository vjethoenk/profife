import { motion } from "framer-motion";
import pj from "../assets/cn.jpg";
import pj1 from "../assets/cn1.jpg";
import pj2 from "../assets/cn2.jpeg";

const projects = [
  {
    title: "E-Learning",
    desc: "A full-stack e-learning platform built with React, Nest.js, and MongoDB for dynamic course management.",
    tech: ["React", "Nest.js", "MongoDB", "TailwindCSS"],
    img: pj,
    link: "https://github.com/vjethoenk/e-learning-fe",
  },
  {
    title: "ToDoList",
    desc: "A modern task management app with real-time updates and RESTful API using Nest.js and React.",
    tech: ["React", "Nest.js", "MongoDB", "TailwindCSS"],
    img: pj1,
    link: "https://github.com/vjethoenk/ToDoList-NestJs-React",
  },
  {
    title: "CarStore",
    desc: "A car booking system with role-based authentication using React, C#, and SQL Server.",
    tech: ["React", "C#", "SQL Server", "Bootstrap", "MUI"],
    img: pj2,
    link: "https://github.com/vjethoenk/CarStore",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-white to-gray-100 text-center"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        A selection of my most recent and impactful development projects.
      </motion.p>

      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {projects.map((p) => (
          <motion.div
            key={p.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative group">
              <img
                src={p.img}
                alt={p.title}
                className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-white font-semibold text-lg">
                View Project
              </div>
            </div>

            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {p.title}
              </h3>
              <p className="text-gray-600 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-blue-600 font-medium">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Code
                </a>
                <a href="#" className="hover:underline">
                  Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="mt-12 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
      >
        View All Projects
      </motion.button>
    </section>
  );
};

export default Projects;
