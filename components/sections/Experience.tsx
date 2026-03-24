"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam"; 

const experiences = [
  {
    role: "Frontend Developer",
    company: "Spero Healthcare Innovations",
    period: "Dec 2024 - Present",
    desc: "Architecting scalable healthcare dashboards. Managed end-to-end project ownership and complex real-time telephony integrations.",
    achievements: [
      "Project Ownership: Scalable architecture from scratch.",
      "Telephony: Engineered real-time dialer interfaces.",
      "Sockets: Live data sync via Socket.io."
    ],
    skills: ["Next.js", "Socket.io", "Telephony"],
    colors: { from: "#6366f1", to: "#22d3ee" }
  },
  {
    role: "Frontend Intern",
    company: "Tech Solutions",
    period: "Jun 24 - Dec 24",
    desc: "Built admission systems focusing on data integrity, complex form handling, and professional PDF reporting.",
    achievements: [
      "Forms: Multi-step validation & logic.",
      "PDF: Automated generation modules.",
      "Perf: Improved asset delivery by 30%."
    ],
    skills: ["React.js", "Formik", "PDF-Lib"],
    colors: { from: "#a855f7", to: "#ec4899" }
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 md:px-12 bg-[#030712] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* --- COMPACT HEADING --- */}
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <span className="text-indigo-500 font-mono text-[9px] uppercase tracking-[0.4em] mb-2 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 font-bold">
              History
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter">
              Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400 italic">Timeline.</span>
            </h2>
          </motion.div>
        </div>
        
        <div className="relative border-l border-white/5 ml-2 md:ml-6">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8 ml-8 relative"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[37px] top-1 flex items-center justify-center">
                 <div className="w-4 h-4 rounded-full bg-indigo-600 shadow-[0_0_15px_#4f46e5] border-2 border-[#030712] z-20" />
                 {index === 0 && (
                   <span className="absolute w-8 h-8 rounded-full bg-indigo-500/10 animate-ping z-10" />
                 )}
              </div>
              
              {/* COMPACT CARD */}
              <div className="relative flex flex-col p-5 md:p-6 rounded-[1.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm group overflow-hidden transition-all hover:bg-white/[0.04]">
                
                <BorderBeam size={250} duration={10} delay={index * 2} colorFrom={exp.colors.from} colorTo={exp.colors.to} />

                <div className="relative z-20">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-1 mb-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-indigo-400 font-mono text-[9px] font-bold uppercase tracking-widest italic">
                        <Calendar size={12} /> {exp.period}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors tracking-tight leading-none">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-1.5 text-gray-400 font-semibold text-sm">
                        <Briefcase size={14} className="text-indigo-500/40" />
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-500 leading-snug text-xs mb-4 max-w-2xl border-l border-white/10 pl-3">
                    {exp.desc}
                  </p>
                  
                  {/* COMPACT ACHIEVEMENTS */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-5">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-gray-400">
                        <CheckCircle2 size={13} className="text-indigo-500 flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {exp.skills.map(s => (
                      <span key={s} className="px-2.5 py-1 rounded-lg bg-white/5 text-[9px] font-bold text-gray-500 border border-white/5 uppercase tracking-wider group-hover:text-white transition-all">
                        {s}
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