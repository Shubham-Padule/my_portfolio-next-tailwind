"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react"; // Icons for mobile toggle

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-6 md:px-12 py-4",
        scrolled || isOpen ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* --- LEFT: LOGO --- */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-2xl font-black tracking-tighter cursor-pointer group z-50"
        >
          <span className="text-white group-hover:text-indigo-500 transition-colors">S</span>
          <span className="text-indigo-500 group-hover:text-cyan-400">.</span>
          <span className="text-white group-hover:text-indigo-500 transition-colors">P</span>
        </motion.div>

        {/* --- CENTER: NAVIGATION (Desktop Only) --- */}
        <motion.div 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="hidden md:flex items-center gap-8 bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-sm"
        >
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-xs uppercase tracking-widest font-semibold text-gray-400 hover:text-cyan-400 transition-all"
            >
              {item.name}
            </a>
          ))}
        </motion.div>

        {/* --- RIGHT: ACTIONS --- */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-4 z-50"
        >
          {/* Hire Me Button (Hidden on very small phones if needed, or kept for impact) */}
          <a 
            href="#contact" 
            className="hidden sm:relative group px-6 py-2 rounded-full overflow-hidden transition-all sm:block"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity"></span>
            <span className="absolute inset-0 border border-white/20 rounded-full group-hover:scale-110 transition-transform duration-300"></span>
            <span className="relative text-white text-sm font-bold tracking-wide">
              Hire Me
            </span>
          </a>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden text-white hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </motion.div>
      </div>

      {/* --- MOBILE OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-0 left-0 w-full bg-black flex flex-col items-center justify-center gap-8 md:hidden overflow-hidden"
          >
            {navItems.map((item, idx) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-white hover:text-indigo-500 transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="mt-4 px-10 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}