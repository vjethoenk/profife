import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    document.title = "Việt Hoàng | Fullstack Developer";
    document.documentElement.lang = "vi";

    const description = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null;
    if (description) {
      description.setAttribute(
        "content",
        "Portfolio của Việt Hoàng — Fullstack Developer chuyên React, TypeScript, NestJS và phát triển web hiện đại.",
      );
    }

    const canonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (canonical) {
      canonical.setAttribute("href", window.location.href);
    }

    const ogUrl = document.querySelector(
      'meta[property="og:url"]',
    ) as HTMLMetaElement | null;
    if (ogUrl) {
      ogUrl.setAttribute("content", window.location.href);
    }
  }, []);

  return (
    <div className="bg-[#030712] min-h-screen text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-white overflow-hidden relative">
      {/* Global Background Glow Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-[120px] pointer-events-none z-0"></div>

      <main id="main-content" className="relative z-10">
        <Navbar />
        <Hero />
        {/* <Stats /> */}
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
