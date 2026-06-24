import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { statsData } from "../data";

interface CounterProps {
  value: number;
  duration?: number;
}

const Counter = ({ value, duration = 1.5 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const end = value;
    const totalFrames = duration * 60;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad formula
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * end);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(currentCount);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const Stats = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-[#050510] border-y border-indigo-950/40 z-10">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-40 bg-purple-500/5 blur-[80px] pointer-events-none"></div>

      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass hover:border-indigo-500/30 rounded-2xl p-6 md:p-8 flex flex-col justify-center items-center text-center shadow-lg transition-all duration-300 card-hover relative group"
            >
              {/* Highlight background lines */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div
                className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2 font-mono"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <Counter value={stat.value} />
                <span className="text-indigo-400 font-sans ml-0.5">{stat.suffix}</span>
              </div>
              <div className="text-gray-400 text-xs md:text-sm font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
