import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Facebook, Send, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending message
    if (formState.name && formState.email && formState.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({ name: "", email: "", message: "" });
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#030712] z-10">
      {/* Background patterns */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-20 z-0"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge"
          >
            Liên hệ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Kết Nối Với Tôi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base leading-relaxed"
          >
            Hãy gửi tin nhắn hoặc kết nối trực tiếp qua các mạng xã hội. Tôi sẽ phản hồi sớm nhất có thể.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left Side: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8 text-left"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Thông Tin Liên Hệ
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Bạn có ý tưởng dự án thú vị, cơ hội tuyển dụng phù hợp hay chỉ đơn giản muốn trao đổi học thuật? Đừng ngần ngại liên lạc!
              </p>
            </div>

            {/* List details */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <span className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:scale-108 transition-transform">
                  <Mail size={20} />
                </span>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-1">
                    Email của tôi
                  </h4>
                  <a
                    href="mailto:hoangntv17@gmail.com"
                    className="text-white hover:text-indigo-400 transition-colors text-sm md:text-base"
                  >
                    hoangntv17@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <span className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-108 transition-transform">
                  <Phone size={20} />
                </span>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-1">
                    Điện thoại
                  </h4>
                  <a
                    href="tel:+84358936175"
                    className="text-white hover:text-purple-400 transition-colors text-sm md:text-base"
                  >
                    +84 358 936 175
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <span className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 group-hover:scale-108 transition-transform">
                  <MapPin size={20} />
                </span>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-1">
                    Địa chỉ
                  </h4>
                  <p className="text-white text-sm md:text-base">
                    Thành phố Hà Nội, Việt Nam
                  </p>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500">
                Theo dõi & liên kết mạng xã hội
              </h4>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://github.com/vjethoenk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-light border-white/10 hover:border-indigo-500/40 text-gray-400 hover:text-white transition-all shadow-md"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="p-3 rounded-xl glass-light border-white/10 hover:border-purple-500/40 text-gray-400 hover:text-white transition-all shadow-md"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="p-3 rounded-xl glass-light border-white/10 hover:border-pink-500/40 text-gray-400 hover:text-white transition-all shadow-md"
                >
                  <Facebook size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass rounded-3xl p-6 md:p-10 border-white/5 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Grid Inputs */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-gray-400">
                          Họ và tên
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Ví dụ: Nguyễn Văn A"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-white/5 text-white placeholder-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all duration-300 font-sans"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-gray-400">
                          Địa chỉ email
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="email@example.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-white/5 text-white placeholder-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all duration-300 font-sans"
                        />
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-gray-400">
                        Nội dung tin nhắn
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Hãy viết tin nhắn của bạn tại đây..."
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-white/5 text-white placeholder-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all duration-300 font-sans resize-none"
                      />
                    </div>

                    {/* Send Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center gap-2 group text-sm"
                    >
                      <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      Gửi Tin Nhắn
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                      <CheckCircle2 size={32} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        Đã Gửi Thành Công!
                      </h3>
                      <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">
                        Cảm ơn bạn đã nhắn tin. Tôi đã nhận được thông tin và sẽ phản hồi qua email sớm nhất có thể.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
