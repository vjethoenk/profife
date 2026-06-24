import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Trang chủ", href: "home" },
    { name: "Giới thiệu", href: "about" },
    { name: "Kỹ năng", href: "skills" },
    { name: "Dự án", href: "projects" },
    { name: "Liên hệ", href: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link detector
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 px-4 md:px-8"
          : "py-5 px-6"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-300 rounded-2xl ${
          scrolled
            ? "glass py-3 px-6 shadow-lg shadow-indigo-950/20 border-white/5"
            : "py-2 px-0 bg-transparent border-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            H
          </span>
          <h1 className="text-xl font-bold tracking-tight text-white font-sans hidden sm:block">
            VietHoang<span className="text-indigo-400 font-mono text-xs ml-1">.dev</span>
          </h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={`#${item.href}`}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 block ${
                  activeSection === item.href
                    ? "text-white bg-indigo-500/10 border-indigo-500/20"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons & Call to action */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/vjethoenk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold py-2 px-4 rounded-xl shadow-md shadow-indigo-600/10 hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            <MessageSquare size={14} />
            Liên Hệ Ngay
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white p-2 rounded-xl glass-light transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 mx-4"
          >
            <div className="glass rounded-2xl p-5 border-white/5 flex flex-col gap-4 shadow-xl shadow-indigo-950/30">
              <ul className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={`#${item.href}`}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        activeSection === item.href
                          ? "bg-indigo-500/10 text-indigo-300"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <hr className="border-white/10" />
              <div className="flex items-center justify-between px-2">
                <div className="flex gap-4">
                  <a
                    href="https://github.com/vjethoenk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Linkedin size={20} />
                  </a>
                </div>
                <a
                  href="#contact"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold py-2 px-4 rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  Liên Hệ Ngay
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
