import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden"
    >
      {/* Background image */}
      <motion.img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
        alt="coding background"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Full-Stack{" "}
          <motion.span
            className="text-blue-500 inline-block"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Developer
          </motion.span>
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Crafting innovative digital solutions with cutting-edge technologies.{" "}
          <br />
          Specialized in React, Nest.js, and cloud architectures.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
          >
            View My Work
          </motion.button>

          <motion.a
            href="http://github.com/vjethoenk"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition"
          >
            GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
