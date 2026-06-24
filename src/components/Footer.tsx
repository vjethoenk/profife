import { Github, Linkedin, Facebook, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Trang chủ", href: "home" },
    { name: "Giới thiệu", href: "about" },
    { name: "Kinh nghiệm", href: "experience" },
    { name: "Kỹ năng", href: "skills" },
    { name: "Dự án", href: "projects" },
    { name: "Liên hệ", href: "contact" }
  ];

  return (
    <footer className="relative bg-[#020208] border-t border-white/5 pt-16 pb-8 overflow-hidden z-10">
      {/* Mesh glow behind footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/5 text-left">
          {/* Logo & Intro */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2 group w-max">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                H
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white">
                VietHoang<span className="text-indigo-400 font-mono text-xs ml-1">.dev</span>
              </h3>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Định hướng lập trình viên Fullstack, chuyên tâm xây dựng các giải pháp kỹ thuật chất lượng cao, giao diện đẳng cấp và hiệu năng xuất sắc.
            </p>
          </div>

          {/* Quick Links Menu */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500">
              Đường dẫn nhanh
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={`#${link.href}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social connections & Contact hint */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500">
              Mạng xã hội
            </h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/vjethoenk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-light border-white/10 hover:border-indigo-500/40 text-gray-400 hover:text-white flex items-center justify-center transition-all shadow-md"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl glass-light border-white/10 hover:border-purple-500/40 text-gray-400 hover:text-white flex items-center justify-center transition-all shadow-md"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl glass-light border-white/10 hover:border-pink-500/40 text-gray-400 hover:text-white flex items-center justify-center transition-all shadow-md"
              >
                <Facebook size={18} />
              </a>
            </div>
            <p className="text-xs text-gray-500">
              Thiết kế bởi Việt Hoàng &copy; {currentYear}
            </p>
          </div>
        </div>

        {/* Bottom line copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {currentYear} Nguyen The Viet Hoang. Tất cả quyền được bảo lưu.
          </p>
          <p className="flex items-center gap-1">
            Build with React, Tailwind & Framer Motion
            <Heart size={10} className="text-pink-500 fill-pink-500 animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
