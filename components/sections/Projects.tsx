"use client";
import { motion } from "framer-motion";
// Fixed: SiSocketdotio use kiya hai (js ki jagah io)
import { SiNextdotjs, SiReact, SiSocketdotio, SiTailwindcss, SiOpenai } from "react-icons/si";
import { RiShoppingBag3Line, RiMapPinUserLine, RiLineChartLine, RiWallet3Line } from "react-icons/ri";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "E-Commerce Analytics",
    category: "Admin Dashboard",
    icon: <RiLineChartLine size={20} className="text-blue-400" />,
    desc: "High-performance dashboard with sales tracking, inventory management, and customer behavior analytics.",
    tech: [<SiNextdotjs key="next" />, <SiTailwindcss key="tw" />, <SiReact key="react" />],
    color: "from-blue-500/10"
  },
  {
    title: "AI Expense Tracker",
    category: "FinTech & AI",
    icon: <RiWallet3Line size={20} className="text-purple-400" />,
    desc: "AI-integrated tracker that categorizes spends and provides saving suggestions using LLM insights.",
    tech: [<SiReact key="react" />, <SiOpenai key="ai" />, <SiTailwindcss key="tw" />],
    color: "from-purple-500/10"
  },
  {
    title: "TravelSphere",
    category: "Full Stack Travel",
    icon: <RiMapPinUserLine size={20} className="text-emerald-400" />,
    desc: "A premium travel booking platform with dynamic routing and complex state management for bookings.",
    tech: [<SiNextdotjs key="next" />, <SiReact key="react" />, <SiTailwindcss key="tw" />],
    color: "from-emerald-500/10"
  },
  {
    title: "Spero Healthcare",
    category: "Telephony Admin",
    icon: <RiShoppingBag3Line size={20} className="text-indigo-400" />,
    desc: "Real-time monitoring system for healthcare agents with integrated dialer interfaces and live sync.",
    tech: [<SiReact key="react" />, <SiSocketdotio key="socket" />, <SiTailwindcss key="tw" />],
    color: "from-indigo-500/10"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 md:px-12 bg-[#030712] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter italic leading-none">
              Featured <span className="text-indigo-500">Works.</span>
            </h2>
            <p className="text-gray-500 mt-3 text-xs md:text-sm font-medium italic">
              Specialized in <span className="text-white">Dashboards</span> & <span className="text-white">AI-driven</span> interfaces.
            </p>
          </div>
          <button className="text-indigo-400 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em] border-b border-indigo-500/20 pb-1 w-fit">
            View All Code →
          </button>
        </div>

        {/* --- COMPACT 2x2 GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Glow Effect */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${proj.color} to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {proj.icon}
                  </div>
                  <div className="flex gap-3 items-center">
                    <a href="#" className="text-gray-500 hover:text-white transition-colors"><FiGithub size={18} /></a>
                    <a href="#" className="text-gray-500 hover:text-indigo-400 transition-colors"><FiExternalLink size={18} /></a>
                  </div>
                </div>

                <div>
                  <p className="text-[9px] font-mono text-indigo-500/70 uppercase tracking-widest mb-1 font-bold">
                    {proj.category}
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight group-hover:translate-x-1 transition-transform italic leading-none">
                    {proj.title}
                  </h3>
                  <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed mb-4 line-clamp-2 italic">
                    {proj.desc}
                  </p>
                </div>

                {/* Tech Icons Row */}
                <div className="flex gap-3 pt-3 border-t border-white/5 items-center">
                  <span className="text-[8px] font-bold text-gray-700 uppercase tracking-widest mr-2">Stack:</span>
                  <div className="flex gap-2">
                    {proj.tech.map((Icon, idx) => (
                      <span key={idx} className="text-gray-500 hover:text-indigo-400 transition-colors duration-300 cursor-pointer">
                        {Icon}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}