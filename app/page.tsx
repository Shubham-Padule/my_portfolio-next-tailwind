"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "@/components/shared/Preloader";
import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 2.5 seconds baad loader hat jayega
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);



useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
    
    
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';

    window.scrollTo(0, 0);
  }, 2500);

  return () => clearTimeout(timer);
}, []);
  return (
    <main className="bg-[#030712] min-h-screen selection:bg-indigo-500/30">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <div className={isLoading ? "h-screen overflow-hidden" : ""}>
        {/* Navbar and Content reveal after loader */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }} // Loader khatam hone ke baad aayega
        >
          <Navbar />
          
          <div className="relative z-10">
            <Hero />
            
            {/* Sections revealing one after another on scroll */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </motion.div>
          </div>

          {/* Background Grain/Noise Overlay for Professional Vibe */}
          <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </motion.div>
      </div>
    </main>
  );
}