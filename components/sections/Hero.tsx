"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaTerminal } from 'react-icons/fa';
import { SiMongodb, SiFramer, SiExpress, SiNextdotjs } from 'react-icons/si';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030712] px-6 md:px-16 pt-20 lg:pt-0">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* --- LEFT CONTENT --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs font-mono mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for Frontend Roles
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
            Elevating Web <br />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Experiences.
            </span>
          </h1>

          <p className="mt-8 text-gray-400 text-base md:text-lg lg:text-xl max-w-xl leading-relaxed">
            I’m <span className="text-white font-bold">Shubham</span>, a
            <span className="text-indigo-400 font-semibold"> MERN Stack Developer</span> &
            Frontend Specialist based in Pune. With <span className="text-white">1.5 years of industry experience</span>,
            I architect high-performance, SEO-optimized web applications using
            <span className="text-white"> Next.js 15</span>,
            <span className="text-cyan-400"> Tailwind CSS</span>, and
            <span className="text-blue-400"> TypeScript</span>.
            I bridge the gap between complex backend logic and pixel-perfect user interfaces.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 w-full sm:w-auto">
  {/* View Projects Button */}
  <Link 
    href="#projects" 
    className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-[0_20px_40px_-10px_rgba(79,70,229,0.4)] text-center"
  >
    View Projects
  </Link>

  {/* Download CV Link */}
  <a 
    href="/Shubham_Padule_Resume_PDF.pdf" 
    download="Shubham_Padule_Resume_PDF.pdf"
    className="w-full sm:w-auto px-8 py-4 border border-white/10 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-center flex items-center justify-center"
  >
    Download CV
  </a>
</div>
        </motion.div>

        {/* --- RIGHT VISUAL --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          {/* Main Floating SVG Shape */}
          <div className="relative w-[450px] h-[450px]">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-600/30 blur-[100px] rounded-full animate-pulse" />

            {/* Animated SVG */}
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-2xl"
            >
              <motion.path
                fill="none"
                stroke="url(#grad)"
                strokeWidth="1.5"
                d="M40,60 L20,100 L40,140 M160,60 L180,100 L160,140 M110,40 L90,160"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>

            {/* --- FLOATING TECH BADGES --- */}
            {/* React JS */}
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-5 left-10 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <FaReact size={18} className="animate-spin-slow" />
              </div>
              <span className="text-xs font-medium text-white">React.js</span>
            </motion.div>

            {/* Node JS */}
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-20 right-5 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500">
                <FaNodeJs size={18} />
              </div>
              <span className="text-xs font-medium text-white">Node.js</span>
            </motion.div>

            {/* MongoDB */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute bottom-20 left-0 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-600/20 flex items-center justify-center text-emerald-500">
                <SiMongodb size={18} />
              </div>
              <span className="text-xs font-medium text-white">MongoDB</span>
            </motion.div>

            {/* Next.js */}
            <motion.div
              animate={{ y: [0, -25, 0], x: [0, 5, 0] }}
              transition={{ duration: 5.5, repeat: Infinity }}
              className="absolute top-1/4 -left-16 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl flex items-center gap-3 group hover:border-white/40 transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <SiNextdotjs size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-indigo-400 leading-none">Framework</span>
                <span className="text-xs font-medium text-white">Next.js 15</span>
              </div>
            </motion.div>

            {/* GitHub Actions */}
            <motion.div
              animate={{ x: [0, 15, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
              className="absolute top-1/2 -right-10 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-700/50 flex items-center justify-center text-white">
                <FaGithub size={18} />
              </div>
              <span className="text-xs font-medium text-white">GitHub Actions</span>
            </motion.div>

            {/* Framer Motion */}
            <motion.div
              animate={{ y: [0, 25, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute bottom-10 right-20 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                <SiFramer size={18} />
              </div>
              <span className="text-xs font-medium text-white">Framer Motion</span>
            </motion.div>

            {/* Express JS */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-0 left-1/3 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-500/20 flex items-center justify-center text-gray-300">
                <FaTerminal size={16} />
              </div>
              <span className="text-xs font-medium text-white text-nowrap">Express.js</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur Bottom */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[60%] h-[200px] bg-indigo-500/10 blur-[120px]" />
    </section>
  );
}