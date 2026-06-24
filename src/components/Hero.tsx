import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import profife from "../assets/profife.jpg";

const Hero = () => {
  // Floating technology items to orbit/animate around the avatar
  const techIcons = [
    { name: "React", color: "from-cyan-400 to-blue-500", x: -140, y: -60, delay: 0 },
    { name: "NextJS", color: "from-gray-300 to-gray-500", x: 140, y: -100, delay: 0.5 },
    { name: "TS", color: "from-blue-500 to-indigo-600", x: -150, y: 80, delay: 1 },
    { name: "NestJS", color: "from-red-500 to-pink-600", x: 120, y: 60, delay: 1.5 },
    { name: "MongoDB", color: "from-green-400 to-emerald-600", x: -40, y: -160, delay: 2 },
    { name: "SQL", color: "from-blue-600 to-indigo-800", x: 60, y: 160, delay: 2.5 },
    { name: "Docker", color: "from-blue-400 to-sky-500", x: -60, y: 170, delay: 3 },
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
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }}></div>
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
            Tôi là kỹ sư phần mềm tương lai đam mê kiến tạo các sản phẩm web cao cấp, chú trọng tối ưu hóa hiệu năng, trải nghiệm người dùng mượt mà và cấu trúc mã nguồn sạch sẽ.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a href="#projects" className="btn-primary flex items-center gap-2 group">
              Xem dự án của tôi
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#"
              className="btn-outline flex items-center gap-2 group"
            >
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              Tải CV cá nhân
            </a>
          </motion.div>
        </div>

        {/* Right Avatar & Floating Icons */}
        <div className="lg:col-span-5 flex justify-center items-center relative mt-10 lg:mt-0">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            {/* Pulsing glow under avatar */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-full blur-2xl opacity-40 animate-pulse-slow"></div>

            {/* Orbit paths (dashed circles) */}
            <div className="absolute inset-[-40px] rounded-full border border-dashed border-indigo-500/10 pointer-events-none"></div>
            <div className="absolute inset-[-90px] rounded-full border border-dashed border-purple-500/10 pointer-events-none"></div>

            {/* Avatar Frame */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl z-10 bg-slate-900 group"
            >
              <img
                src={profife}
                alt="Nguyen The Viet Hoang profile"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500"></div>
            </motion.div>

            {/* Floating Tech Badges */}
            {techIcons.map((tech) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: tech.x,
                  y: tech.y,
                }}
                transition={{
                  duration: 0.6,
                  delay: tech.delay,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.15, y: tech.y - 10 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
              >
                {/* Micro animation float */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: tech.delay,
                  }}
                  className="glass-light hover:border-indigo-500/50 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-white shadow-lg border-white/10 hover:shadow-indigo-500/10 flex items-center gap-1.5 select-none"
                >
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color}`}></span>
                  {tech.name}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
