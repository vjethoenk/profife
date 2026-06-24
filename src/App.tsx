import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#030712] min-h-screen text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-white overflow-hidden relative">
      {/* Global Background Glow Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-[120px] pointer-events-none z-0"></div>

      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
