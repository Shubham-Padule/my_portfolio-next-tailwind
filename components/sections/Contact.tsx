"use client";
import { motion } from "framer-motion";
// React Icons Imports
import { RiMailLine, RiMapPinLine, RiSendPlaneLine, RiLinkedinBoxLine, RiGithubLine } from "react-icons/ri";
import { FiChevronRight } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-[#030712] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic leading-none">
            Let's <span className="text-indigo-500">Connect.</span>
          </h2>
          <p className="text-gray-500 mt-3 text-sm italic font-medium">
            Open for new opportunities in <span className="text-white">Pune</span> or Remote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Left: Info Cards */}
          <div className="md:col-span-2 space-y-3">
            <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-md">
              <h3 className="text-white font-bold text-xl mb-4 italic">Reach Out</h3>
              <div className="space-y-4">
                <a href="mailto:shubham@example.com" className="flex items-center gap-3 text-gray-400 hover:text-indigo-400 transition-colors group">
                  <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                    <RiMailLine size={18} className="text-indigo-500" />
                  </div>
                  <span className="text-xs font-mono tracking-tighter">shubham@example.com</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                    <RiMapPinLine size={18} className="text-indigo-500" />
                  </div>
                  <span className="text-xs font-mono tracking-tighter">Pune, Maharashtra</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex gap-3">
                <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-indigo-600 transition-all text-white shadow-lg border border-white/5">
                  <RiLinkedinBoxLine size={20} />
                </a>
                <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-gray-700 transition-all text-white shadow-lg border border-white/5">
                  <RiGithubLine size={20} />
                </a>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-4 rounded-[1.5rem] bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-between group cursor-default">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Available for Hire</span>
              </div>
              <FiChevronRight size={14} className="text-gray-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Right: Compact Form */}
          <div className="md:col-span-3 p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden">
            <form className="space-y-3 relative z-10">
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="Name" className="w-full p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white text-xs outline-none focus:border-indigo-500/50 transition-all placeholder:text-gray-600" />
                <input type="email" placeholder="Email" className="w-full p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white text-xs outline-none focus:border-indigo-500/50 transition-all placeholder:text-gray-600" />
              </div>
              <textarea placeholder="Tell me about your project..." rows={4} className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white text-xs outline-none focus:border-indigo-500/50 transition-all placeholder:text-gray-600 resize-none"></textarea>
              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl transition-all shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] group"
              >
                Launch Message
                <RiSendPlaneLine size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
          <p>© 2026 Shubham | Pune based Frontend Engineer</p>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-pointer italic">Architecture Optimized</span>
            <span className="hover:text-white transition-colors cursor-pointer italic">Vite Speed</span>
          </div>
        </footer>
      </div>
    </section>
  );
}