"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // 0 to 100 Counter Logic
    const count = setInterval(() => {
      setCounter((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20); // Speed of counting

    const timer = setTimeout(() => setLoading(false), 3000);
    
    return () => {
      clearInterval(count);
      clearTimeout(timer);
    };
  }, []);

  // Name Stagger Settings
  const firstName = "SHUBHAM".split("");
  const lastName = "PADULE".split("");

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          exit={{ 
            clipPath: "inset(0 0 100% 0)", // Cool curtain exit effect
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[1000] bg-[#030712] flex items-center justify-center overflow-hidden"
        >
          <div className="flex flex-col items-center relative">
            
            {/* --- COUNTER DISPLAY --- */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-24 text-indigo-500/20 font-black text-9xl md:text-[12rem] pointer-events-none select-none"
            >
              {counter}
            </motion.div>

            {/* --- THE LOGO --- */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative mb-8"
            >
              <div className="h-20 w-20 flex items-center justify-center rounded-[2rem] bg-indigo-500/10 border border-indigo-500/20 relative backdrop-blur-sm">
                <span className="text-indigo-500 font-black text-4xl italic">S</span>
                <div className="absolute -right-2 -bottom-2 text-gray-600 text-sm font-mono">{" />"}</div>
              </div>
              {/* Pulsing Aura */}
              <motion.div 
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 bg-indigo-500 rounded-full blur-2xl -z-10"
              />
            </motion.div>

            {/* --- STAGGERED NAME --- */}
            <div className="flex flex-col items-center">
              <div className="flex overflow-hidden pb-2">
                {firstName.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: "circOut" }}
                    className="text-white font-black italic text-4xl md:text-5xl uppercase tracking-tighter inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="mx-2 text-indigo-500 font-black italic text-4xl md:text-5xl">.</span>
                {lastName.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.4 + i * 0.05, duration: 0.5, ease: "circOut" }}
                    className="text-white font-black italic text-4xl md:text-5xl uppercase tracking-tighter inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              <motion.p 
                initial={{ opacity: 0, letterSpacing: "1em" }}
                animate={{ opacity: 1, letterSpacing: "0.5em" }}
                transition={{ delay: 1, duration: 1 }}
                className="text-[10px] font-mono text-gray-500 uppercase mt-4 text-center"
              >
                Frontend Developer // Solutions Engineer
              </motion.p>
            </div>

            {/* --- MINIMAL PROGRESS --- */}
            <div className="w-64 h-[1px] bg-white/5 mt-10 relative overflow-hidden rounded-full">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${counter}%` }}
                className="absolute h-full bg-indigo-500 shadow-[0_0_15px_#6366f1]"
              />
            </div>
          </div>

          {/* Background Interactive Grain */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}