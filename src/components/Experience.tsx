import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2 } from "lucide-react";
import { experienceData } from "../data";

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#050510] z-10">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge"
          >
            Kinh Nghiệm
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Lộ Trình Phát Triển
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base leading-relaxed"
          >
            Hành trình tích lũy kinh nghiệm thực tế qua các môi trường học tập, làm việc và dự án.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central timeline line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent transform -translate-x-1/2 z-0 hidden md:block"></div>
          <div className="absolute left-8 top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent z-0 md:hidden"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experienceData.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  } w-full`}
                >
                  {/* Timeline Badge (Circle Marker) */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-9 h-9 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center -translate-x-1/2 z-20 shadow-lg shadow-indigo-500/20 group">
                    <Briefcase size={14} className="text-indigo-400 group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 90 }}
                    className={`relative w-[calc(100%-48px)] md:w-[45%] ml-12 md:ml-0 ${
                      isEven ? "md:mr-auto" : "md:ml-auto"
                    } glass hover:border-indigo-500/30 rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-xl group`}
                  >
                    {/* Glowing highlight border bottom/top */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>

                    {/* Card Header info */}
                    <div className="flex flex-col gap-2 mb-4">
                      {/* Period / Date Badge */}
                      <div className="inline-flex items-center gap-1.5 text-xs text-indigo-400 font-mono font-medium">
                        <Calendar size={12} />
                        {exp.period}
                      </div>

                      {/* Job Title & Role */}
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                        {exp.role}
                      </h3>

                      {/* Company Name */}
                      <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                        <Building2 size={14} className="text-purple-400" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    {/* Job Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {exp.desc}
                    </p>

                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
