import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench } from "lucide-react";
import { skillsData } from "../data";

const Skills = () => {
  // Map categories to modern techy icons
  const categoryIcons = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "frontend":
        return <Code2 className="text-cyan-400" size={22} />;
      case "backend":
        return <Server className="text-indigo-400" size={22} />;
      case "database & cloud":
        return <Database className="text-purple-400" size={22} />;
      case "tools & devops":
        default:
        return <Wrench className="text-pink-400" size={22} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#030712] z-10">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge"
          >
            Hệ sinh thái kỹ thuật
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Năng Lực Công Nghệ
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base leading-relaxed"
          >
            Những ngôn ngữ, thư viện, cơ sở dữ liệu và công cụ lập trình tôi đã nghiên cứu và làm chủ.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {skillsData.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass hover:border-indigo-500/30 rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-xl group card-hover relative"
            >
              {/* Top border color indicator */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500/35 via-purple-500/35 to-pink-500/35 rounded-t-2xl opacity-40 group-hover:opacity-100 transition-opacity"></div>

              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <span className="p-2.5 rounded-xl glass-light border-white/10 flex items-center justify-center">
                  {categoryIcons(cat.category)}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {cat.category}
                </h3>
              </div>

              {/* Skills List inside this Category */}
              <div className="space-y-5">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    {/* Skill Info */}
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-indigo-400 font-mono text-xs">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-slate-950/80 rounded-full overflow-hidden border border-white/5 relative">
                      {/* Glow highlight */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: sIdx * 0.05 }}
                        className="skill-bar-fill shadow-[0_0_8px_rgba(99,102,241,0.4)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
