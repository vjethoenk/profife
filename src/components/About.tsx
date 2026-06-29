import { motion } from "framer-motion";
import { Check, Compass, Award, Lightbulb, Users } from "lucide-react";
import profife from "../assets/pro.png";

const About = () => {
  const strengths = [
    {
      title: "Quick Learner",
      desc: "Tiếp thu công nghệ mới nhanh và luôn sẵn sàng học hỏi từ phản hồi.",
      icon: Compass,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      title: "Responsibility",
      desc: "Có trách nhiệm với công việc được giao và cố gắng hoàn thành đúng tiến độ.",
      icon: Lightbulb,
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
    {
      title: "Teamwork",
      desc: "Có tinh thần hợp tác, sẵn sàng lắng nghe và hỗ trợ đồng đội trong các dự án.",
      icon: Users,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      title: "Growth Mindset",
      desc: "Chủ động cải thiện kỹ năng và mong muốn phát triển lâu dài .",
      icon: Award,
      color: "text-pink-400 bg-pink-500/10 border-pink-500/20",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-[#030712] z-10"
    >
      {/* Background decorations */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="section-container">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge"
          >
            Giới Thiệu
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Về Bản Thân Tôi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base leading-relaxed"
          >
            Tìm hiểu thêm về định hướng công việc, thế mạnh cốt lõi và con đường
            lập trình của tôi.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Avatar/Image with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-72 h-96 md:w-80 md:h-[420px]">
              {/* Colored Glow behind photo */}
              <div className="absolute inset-2 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

              {/* Decorative borders */}
              <div className="absolute inset-0 border border-indigo-500/20 rounded-2xl pointer-events-none group-hover:scale-[1.03] transition-transform duration-500"></div>
              <div className="absolute -inset-4 border border-dashed border-purple-500/10 rounded-3xl pointer-events-none"></div>

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900 transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-1">
                <img
                  src={profife}
                  alt="Viet Hoang About Photo"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80"></div>

                {/* Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-mono text-indigo-400 mb-1">
                    Học vấn
                  </p>
                  <h4 className="text-white font-bold text-base md:text-lg">
                    Đại Học Công Nghệ Giao Thông Vận Tải (UTT)
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Chuyên ngành Công nghệ thông tin (K73)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Bio & Objectives & Strength cards */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Tôi là một lập trình viên đam mê phát triển Web
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Hiện tại, tôi là sinh viên năm 4 chuyên ngành Kỹ thuật Phần mềm
                tại Trường Đại học Công nghệ Giao thông Vận tải. Tôi đam mê phát
                triển các ứng dụng web và luôn chủ động học hỏi những công nghệ
                mới để hoàn thiện kỹ năng của mình.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Tôi mong muốn được làm việc trong môi trường chuyên nghiệp, nơi
                có thể áp dụng kiến thức đã học, tích lũy kinh nghiệm thực tế và
                từng bước phát triển thành một Fullstack Developer có nền tảng
                vững chắc.
              </p>
            </motion.div>

            {/* Strengths Cards */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                Điểm mạnh cốt lõi
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {strengths.map((str, idx) => (
                  <motion.div
                    key={str.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="glass-light p-4 rounded-xl border-white/5 flex gap-4 items-start hover:border-white/10 hover:bg-white/5 transition-all duration-300"
                  >
                    <div
                      className={`p-2.5 rounded-lg border flex-shrink-0 ${str.color}`}
                    >
                      <str.icon size={18} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <Check size={14} className="text-indigo-400" />
                        <h5 className="text-white font-bold text-sm">
                          {str.title}
                        </h5>
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {str.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
