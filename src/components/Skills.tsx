import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNestjs,
  SiJsonwebtokens,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiGithub,
  SiDocker,
} from "react-icons/si";
import { Zap, Layout, Server, Database, Wrench, Cloud } from "lucide-react";

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface TechGroup {
  title: string;
  icon: React.ReactNode;
  description: string;
  items: TechItem[];
  gradient: string;
}

const Skills = () => {
  const techGroups: TechGroup[] = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-5 h-5 text-indigo-400" />,
      description:
        "Xây dựng giao diện Responsive, hiệu năng cao và UX mượt mà.",
      gradient: "from-indigo-500/20 to-cyan-500/20 border-indigo-500/30",
      items: [
        { name: "HTML5", icon: <SiHtml5 />, color: "text-[#E34F26]" },
        { name: "CSS3", icon: <SiCss />, color: "text-[#1572B6]" },
        { name: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E]" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-[#3178C6]" },
        { name: "ReactJS", icon: <SiReact />, color: "text-[#61DAFB]" },
        { name: "NextJS", icon: <SiNextdotjs />, color: "text-white" },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          color: "text-[#06B6D4]",
        },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="w-5 h-5 text-purple-400" />,
      description:
        "Xây dựng API RESTful, GraphQL và hệ thống backend hiệu năng cao, bảo mật.",
      gradient: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
      items: [
        { name: "NestJS", icon: <SiNestjs />, color: "text-[#E0234E]" },
        { name: "Prisma ORM", icon: <SiPrisma />, color: "text-slate-300" },
        {
          name: "JWT auth",
          icon: <SiJsonwebtokens />,
          color: "text-[#d63aff]",
        },
        {
          name: "GraphQL",
          icon: <Zap className="w-4 h-4" />,
          color: "text-[#E10098]",
        },
      ],
    },
    {
      title: "Database Management",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      description:
        "Thiết kế schema dữ liệu quan hệ và phi quan hệ, tối ưu hóa truy vấn.",
      gradient: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-[#4169E1]" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench className="w-5 h-5 text-amber-400" />,
      description:
        "Quản lý mã nguồn, triển khai container hóa và dịch vụ đám mây.",
      gradient: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
      items: [
        { name: "Git", icon: <SiGit />, color: "text-[#F05032]" },
        { name: "GitHub", icon: <SiGithub />, color: "text-white" },
        { name: "Docker", icon: <SiDocker />, color: "text-[#2496ED]" },
        {
          name: "AWS S3",
          icon: <Cloud className="w-4 h-4" />,
          color: "text-[#FF9900]",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="skills"
      className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-[#030014]/50"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-4">
            Công Nghệ Sử Dụng
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Hệ sinh thái công nghệ tôi đã làm việc và áp dụng vào phát triển các
            dự án thực tế.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {techGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className={`glassmorphism p-8 rounded-3xl relative border border-transparent hover:border-slate-700 bg-gradient-to-br ${group.gradient} backdrop-blur-md transition-all duration-300 group`}
            >
              {/* Internal glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-white/[0.01] pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-white/5 rounded-xl text-white">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-300 transition-colors duration-300">
                  {group.title}
                </h3>
              </div>

              <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                {group.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {group.items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-white/5 hover:border-white/10 hover:bg-slate-900/90 transition-all duration-300 cursor-default"
                  >
                    <span className={`text-2xl ${tech.color} shrink-0`}>
                      {tech.icon}
                    </span>
                    <span className="text-xs font-semibold text-slate-300 tracking-wide">
                      {tech.name}
                    </span>
                  </motion.div>
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
