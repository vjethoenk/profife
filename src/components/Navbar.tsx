import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="px-6 py-4 bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50 transition">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 cursor-pointer hover:text-blue-600 transition">
          DevPortfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t shadow-md mt-2 rounded-b-2xl"
          >
            <ul className="flex flex-col items-center space-y-4 py-5 text-gray-700 font-medium">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
