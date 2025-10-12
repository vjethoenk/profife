import { motion } from "framer-motion";
import profife from "../assets/profife.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            About Me
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I'm a fourth-year student at{" "}
            <span className="font-semibold text-blue-600">
              University Of Transport Technology
            </span>
            , majoring in Software Engineering. I’m passionate about web
            development and love building modern, user-focused applications.
          </p>
          <p className="text-gray-700 leading-relaxed">
            During my studies, I’ve gained hands-on experience with frontend
            technologies like{" "}
            <span className="font-semibold text-gray-800">
              React and Angular
            </span>
            , as well as backend development using{" "}
            <span className="font-semibold text-gray-800">NestJS and C#</span>.
            I’m always eager to learn new technologies, improve my
            problem-solving skills, and collaborate on projects that make a real
            impact.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition"
          >
            Learn More About Me
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={profife}
            alt="profile"
            className="rounded-2xl shadow-lg w-80 h-80 md:w-96 md:h-96 object-cover ring-4 ring-gray-200 hover:ring-blue-400 transition"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
