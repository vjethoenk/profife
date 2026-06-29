import { motion } from "framer-motion";
import { Briefcase, Code, GraduationCap, Calendar, Tag } from "lucide-react";

interface ExperienceItem {
  id: number;
  type: "work" | "freelance";
  title: string;
  subtitle: string;
  time: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      type: "work",
      title: "Frontend Developer Intern",
      subtitle: "IIG VietNam",
      time: "Tháng 11/2025 - Tháng 05/2026",
      description:
        "Phát triển các tính năng Student cho hệ thống LMS của IIG Việt Nam. Tham gia nâng cấp giao diện theo Figma mới, tối ưu hiệu năng và cải thiện trải nghiệm người dùng.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux Toolkit",
      ],
      icon: <Briefcase className="w-5 h-5 text-indigo-400" />,
    },
    {
      id: 2,
      type: "work",
      title: "Fullstack Developer Intern",
      subtitle: "VTI Cloud",
      time: "Tháng 08/2025 - Tháng 12/2025",
      description:
        "Tham gia phát triển dự án nội bộ tích hợp NestJS và ReactJS. Thiết kế cơ sở dữ liệu PostgreSQL, xây dựng API RESTful và GraphQL, triển khai hệ thống phân quyền JWT, thiết kế giao diện Admin Dashboards.",
      technologies: ["NestJS", "PostgreSQL", "Prisma ORM", "React", "TypeORM"],
      icon: <Code className="w-5 h-5 text-emerald-400" />,
    },
    {
      id: 3,
      type: "freelance",
      title: "Fullstack Freelancer",
      subtitle: "Dự án Freelance Cá nhân",
      time: "Tháng 02/2025 - Hiện tại",
      description:
        "Thiết kế và xây dựng các website bán hàng, Landing Pages chất lượng cao cho khách hàng vừa và nhỏ. Phát triển backend bằng NestJS + MongoDB, triển khai ứng dụng lên Docker, quản lý hạ tầng AWS S3 và Cloudflare.",
      technologies: ["NextJS", "NestJS", "MongoDB", "Docker", "Tailwind CSS"],
      icon: <GraduationCap className="w-5 h-5 text-pink-400" />,
    },
  ];

  return (
    <section
      id="experience"
      className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative gradient blur background */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-4">
            Kinh Nghiệm Làm Việc
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Hành trình học tập và làm việc chuyên nghiệp của tôi qua các công ty
            và dự án.
          </p>
        </motion.div>

        <div className="relative border-l border-slate-800/80 ml-4 md:ml-32">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 pb-12 last:pb-0"
            >
              {/* Icon marker */}
              <div className="absolute -left-5 top-1.5 w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg shadow-black/50 z-10 group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {exp.icon}
              </div>

              {/* Time display on the left (Only visible on MD screens) */}
              <div className="hidden md:block absolute -left-36 top-3 text-right w-28 text-sm font-semibold text-slate-500">
                {exp.time.split(" - ")[0]}
                <br />
                <span className="text-xs text-slate-600 font-normal">
                  đến {exp.time.split(" - ")[1]}
                </span>
              </div>

              {/* Experience Card */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                className="glassmorphism p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:border-slate-700/80 transition-all duration-300"
              >
                {/* Glow border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-indigo-400 font-medium text-sm flex items-center gap-1.5 mt-0.5">
                      <span className="text-slate-400">tại</span> {exp.subtitle}
                    </p>
                  </div>
                  {/* Mobile time display */}
                  <span className="md:hidden inline-flex items-center gap-1.5 text-xs text-slate-500 bg-white/5 py-1 px-3 rounded-full w-fit">
                    <Calendar className="w-3.5 h-3.5" /> {exp.time}
                  </span>
                  {/* Desktop time tag (fallback) */}
                  <span className="hidden md:inline-flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 py-1.5 px-3 rounded-full">
                    <Calendar className="w-3.5 h-3.5" /> {exp.time}
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 bg-white/5 border border-white/5 text-slate-300 rounded-lg group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 group-hover:text-indigo-300 transition-all duration-300"
                    >
                      <Tag className="w-3 h-3 text-slate-500 group-hover:text-indigo-400" />
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
