"use client";
import { motion } from "framer-motion";
import { Cpu, Zap, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#030712] relative overflow-hidden">
      {/* Background Decor Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- LEFT: NARRATIVE & STATS --- */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-[1px] bg-indigo-500"></div>
              <span className="text-indigo-400 font-mono text-xs uppercase tracking-[0.3em]">About My Journey</span>
            </div>

          <div className="space-y-5">
  {/* Headline - Reduced from 7xl to 6xl and 5xl to 4xl */}
  <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter">
    Architecting <br />
    <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent italic">
      Real-Time
    </span> <br />
    Digital Solutions.
  </h2>

  {/* Paragraph - Reduced from xl to lg and added better max-width control */}
  <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md font-medium">
    I am a <span className="text-white font-semibold">Frontend Architect</span> based in Pune, with 
    <span className="text-white font-semibold"> 1.5 years of industry experience</span>. I specialize in 
    the MERN ecosystem, engineering <span className="text-indigo-400">mission-critical applications</span> where 
    performance is non-negotiable.
  </p>
</div>

            <div className="flex flex-wrap gap-10 md:gap-16 pt-6 border-t border-white/5">
              <div className="relative group">
                <div className="flex items-baseline">
                  <p className="text-6xl font-black text-white tracking-tighter italic">1.5</p>
                  <span className="text-indigo-500 text-2xl font-black">+</span>
                </div>
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.25em] mt-2 font-bold font-mono">Years Experience</p>
              </div>

              <div className="relative group">
                <div className="flex items-baseline">
                  <p className="text-6xl font-black text-white tracking-tighter italic">10</p>
                  <span className="text-cyan-400 text-2xl font-black">+</span>
                </div>
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.25em] mt-2 font-bold font-mono">Live Projects</p>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT: SPECIALIZED TECH CARDS --- */}
<motion.div 
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
>
  {/* Card 1: Telephony & Real-time Sockets */}
  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all hover:-translate-y-2 group relative overflow-hidden backdrop-blur-sm">
    <div className="absolute top-6 right-6 flex items-center gap-1.5 px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
      </span>
      <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">Live</span>
    </div>
    <Zap className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
    <h4 className="text-white font-bold text-xl mb-2 tracking-tight">Telephony Integration</h4>
    <p className="text-sm text-gray-400 leading-relaxed">
      Engineered <span className="text-white font-medium">real-time dialer interfaces</span> using WebSockets, synchronizing telephony hardware with agent-side dashboards for seamless communication.
    </p>
  </div>

  {/* Card 2: PDF Reporting Engine */}
  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all hover:-translate-y-2 group relative overflow-hidden backdrop-blur-sm">
    <div className="absolute -right-4 -top-4 w-20 h-20 bg-indigo-500/10 rounded-full blur-2xl" />
    <ShieldCheck className="w-10 h-10 text-indigo-400 mb-4 group-hover:rotate-12 transition-transform" />
    <h4 className="text-white font-bold text-xl mb-2 tracking-tight">Automated Reporting</h4>
    <p className="text-sm text-gray-400 leading-relaxed">
      Developed dynamic <span className="text-white font-medium">PDF generation modules</span> on the frontend to deliver high-fidelity service reports and medical records instantly.
    </p>
  </div>

  {/* Card 3: Optimization & Architecture (Full Width) */}
  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all hover:-translate-y-2 group relative overflow-hidden sm:col-span-2 backdrop-blur-sm">
    <div className="flex flex-col md:flex-row md:items-center gap-8">
      <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
        <Cpu className="w-8 h-8 text-purple-400" />
      </div>
      <div>
        <h4 className="text-white font-bold text-xl mb-2 tracking-tight">Performance Engineering</h4>
        <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
          Achieved a significant <span className="text-white font-medium">reduction in project build times</span> and optimized API layers, ensuring high-speed delivery of complex frontend architectures.
        </p>
      </div>
    </div>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
}