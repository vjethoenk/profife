import { motion } from "framer-motion";
import { ArrowUpRight, Database, Download } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNestjs,
  SiDocker,
} from "react-icons/si";

const Hero = () => {
  // Floating technology items to orbit/animate around the avatar
  const techIcons = [
    {
      icon: <SiReact className="text-[#61DAFB] w-6 h-6" />,
      style: "top-8 left-12",
      delay: 0,
    },
    {
      icon: <SiNextdotjs className="text-white w-6 h-6" />,
      style: "bottom-12 left-4",
      delay: 0.5,
    },
    {
      icon: <SiTypescript className="text-[#3178C6] w-6 h-6" />,
      style: "top-20 right-16",
      delay: 1,
    },
    {
      icon: <SiNestjs className="text-[#E0234E] w-6 h-6" />,
      style: "bottom-20 right-8",
      delay: 1.5,
    },
    {
      icon: <Database className="text-[#CC2927] w-6 h-6" />,
      style: "top-[45%] left-4",
      delay: 2,
    },
    {
      icon: <SiDocker className="text-[#2496ED] w-6 h-6" />,
      style: "bottom-1/3 right-1/3",
      delay: 2.5,
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg pt-28 md:pt-20 pb-16"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40 z-0"></div>

      {/* Decorative Blob Shapes */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-blob"></div>
      <div
        className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "2s" }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="section-container relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-light border-white/5 text-sm"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-gray-300 font-medium text-xs md:text-sm">
              Sẵn sàng cho các cơ hội mới
            </span>
          </motion.div>

          <div className="space-y-2">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl font-medium text-indigo-400 font-mono"
            >
              Xin chào, tôi là
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white font-sans"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Nguyễn Thế Việt Hoàng
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl md:text-3xl font-semibold gradient-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
            >
              Fullstack Developer
            </motion.h3>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-xl"
          >
            "Building Modern Web Applications with React & NestJs"
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed"
          >
            Tôi là một Fullstack Developer mới tốt nghiệp với niềm đam mê phát
            triển web. Tôi mong muốn được tham gia xây dựng những sản phẩm chất
            lượng, đồng thời tích lũy kinh nghiệm và nâng cao kỹ năng trong môi
            trường chuyên nghiệp.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#projects"
              className="btn-primary flex items-center gap-2 group"
            >
              Xem dự án của tôi
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>

            <a href="#" className="btn-outline flex items-center gap-2 group">
              <Download
                size={18}
                className="group-hover:translate-y-0.5 transition-transform"
              />
              Tải CV cá nhân
            </a>
          </motion.div>
        </div>

        {/* Right Avatar & Floating Icons */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] rounded-full border border-indigo-500/10 flex items-center justify-center"
          >
            {/* Concentric rotating circles */}
            <div className="absolute inset-0 rounded-full border border-indigo-500/5 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-6 rounded-full border border-purple-500/5 animate-[spin_20s_linear_infinite_reverse]" />

            {/* Central Premium Graphic Card */}
            <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-transparent blur-xl pointer-events-none" />

            {/* Interactive Virtual Avatar Card */}
            <motion.div
              whileHover={{ rotateY: 15, rotateX: -15, scale: 1.02 }}
              style={{ perspective: 1000 }}
              className="w-[80%] h-[80%] rounded-[2.5rem] glassmorphism border border-white/10 relative overflow-hidden flex flex-col justify-end p-8 group cursor-default shadow-2xl shadow-indigo-500/5"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 via-transparent to-transparent z-10" />

              {/* Visual placeholder for personal code graphic */}
              <div className="absolute top-8 left-8 text-xs font-mono text-indigo-400 opacity-60 leading-normal">
                <div>const dev = &#123;</div>
                <div className="pl-4">name: 'Viet Hoang',</div>
                <div className="pl-4">role: 'Fullstack',</div>
                <div className="pl-4">code: 'React & NestJS'</div>
                <div>&#125;;</div>
              </div>

              <div className="relative z-20">
                <h3 className="text-white font-bold text-xl mb-1">
                  Nguyen The Viet Hoang
                </h3>
                <p className="text-slate-400 text-xs font-medium tracking-widest uppercase">
                  Fullstack Developer
                </p>
              </div>
            </motion.div>

            {/* Floating Icons */}
            {techIcons.map((tech, idx) => (
              <motion.div
                key={idx}
                animate={{
                  y: [0, -12, 0],
                  x: [0, idx % 2 === 0 ? 6 : -6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: tech.delay,
                  ease: "easeInOut",
                }}
                className={`absolute ${tech.style} p-3 sm:p-4 rounded-2xl glassmorphism border border-white/10 shadow-lg shadow-black/40 z-30`}
              >
                {tech.icon}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
