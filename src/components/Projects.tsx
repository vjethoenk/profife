import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { projectsData } from "../data";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Separate featured and other projects
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#050510] z-10">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-1/10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/10 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge"
          >
            Sản phẩm hoàn thiện
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Dự Án Tiêu Biểu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base leading-relaxed"
          >
            Tổng hợp các dự án thực tế tôi đã xây dựng từ ý tưởng thiết kế đến triển khai hoạt động thực tế.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8 }}
                className="glass hover:border-indigo-500/35 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl flex flex-col group h-full relative"
              >
                {/* Glowing neon highlight on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                {/* Preview Image Container */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-85"></div>

                  {/* Glassmorphic interactive action buttons overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-full bg-slate-900/90 border border-white/10 hover:border-indigo-500/50 hover:bg-slate-900 text-white shadow-lg flex items-center justify-center transition-colors"
                      title="Xem mã nguồn Github"
                    >
                      <Github size={20} />
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg flex items-center justify-center transition-colors"
                        title="Xem Demo trực tiếp"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                  </div>

                  {/* Hot Badge */}
                  {project.featured && (
                    <span className="absolute top-4 right-4 bg-indigo-600/90 backdrop-blur-md border border-indigo-400/30 text-white text-[10px] font-bold tracking-widest uppercase py-1.5 px-3 rounded-full flex items-center gap-1 z-10 shadow-lg">
                      <Sparkles size={10} />
                      Nổi bật
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow text-left">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag text-[10px]">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-indigo-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.desc}
                  </p>

                  {/* Card Footer actions */}
                  <div className="flex gap-4 items-center justify-between border-t border-white/5 pt-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-bold text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Github size={14} />
                      Repository
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition-colors"
                      >
                        Live Demo
                        <ArrowRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        {projectsData.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-14"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-outline flex items-center gap-2 group text-sm"
            >
              {showAll ? "Thu gọn bớt" : "Xem tất cả dự án"}
              <ArrowRight
                size={16}
                className={`group-hover:translate-x-1 transition-transform duration-300 ${
                  showAll ? "rotate-90" : ""
                }`}
              />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
