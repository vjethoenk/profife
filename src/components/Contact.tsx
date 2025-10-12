import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-12 px-6 bg-white from-gray-50 to-gray-100 text-gray-800"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8 bg-white rounded-xl shadow-md p-8 border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Contact Info */}
          <div className="flex flex-col justify-center items-start text-left space-y-4">
            <h3 className="text-2xl font-semibold text-blue-600">
              Contact Information
            </h3>
            <p className="text-gray-600">
              Feel free to reach out via the form or through my social channels
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-500" />
                <span>hoangntv17@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-500" />
                <span>+84 358 936 175</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-500" />
                <span>Ha Noi City, Vietnam</span>
              </div>
            </div>

            <div className="flex gap-5 mt-3">
              <a
                href="https://github.com/vjethoenk"
                target="_blank"
                className="hover:text-blue-500 transition-transform transform hover:scale-110"
              >
                <Github size={22} />
              </a>
              <a
                href="#"
                target="_blank"
                className="hover:text-blue-500 transition-transform transform hover:scale-110"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              placeholder="Your message..."
              rows={3}
              className="p-3 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
