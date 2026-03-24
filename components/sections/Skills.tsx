"use client";
import { motion } from "framer-motion";
import { Code2, Layout, Layers, GitBranch } from "lucide-react";

const skillGroups = [
  {
    category: "Core Development",
    icon: <Code2 size={12} className="text-blue-400" />,
    lineColor: "bg-blue-500/20",
    skills: [
      { name: "React.js", level: "Expert", color: "from-blue-400 to-blue-600" },
      { name: "JavaScript", level: "Expert", color: "from-yellow-400 to-yellow-600" },
      { name: "HTML/CSS", level: "Expert", color: "from-orange-500 to-red-500" },
      { name: "Next.js 15", level: "Intermediate", color: "from-white/50 to-gray-500" },
    ],
  },
  {
    category: "State & Logic",
    icon: <Layers size={12} className="text-purple-400" />,
    lineColor: "bg-purple-500/20",
    skills: [
      { name: "Redux", level: "Advanced", color: "from-purple-500 to-indigo-600" },
      { name: "Context API", level: "Expert", color: "from-cyan-400 to-blue-500" },
      { name: "TypeScript", level: "Beginner", color: "from-blue-500 to-indigo-500" },
      { name: "Zod", level: "Beginner", color: "from-indigo-400 to-purple-500" },
    ],
  },
  {
    category: "Styling & Build",
    icon: <Layout size={12} className="text-yellow-400" />,
    lineColor: "bg-yellow-500/20",
    skills: [
      { name: "Vite", level: "Expert", color: "from-yellow-400 to-purple-500" },
      { name: "MUI", level: "Expert", color: "from-blue-600 to-indigo-700" },
      { name: "Bootstrap", level: "Expert", color: "from-purple-500 to-indigo-600" },
      { name: "Tailwind", level: "Intermediate", color: "from-cyan-400 to-teal-500" },
    ],
  },
  {
    category: "DevOps",
    icon: <GitBranch size={12} className="text-emerald-400" />,
    lineColor: "bg-emerald-500/20",
    skills: [
      { name: "GitHub", level: "Expert", color: "from-gray-600 to-black" },
      { name: "Postman", level: "Expert", color: "from-orange-400 to-orange-600" },
      { name: "Git", level: "Intermediate", color: "from-red-500 to-orange-500" },
      { name: "Actions", level: "Intermediate", color: "from-blue-900 to-black" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 md:px-12 bg-[#030712] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter italic">
            Technical <span className="text-indigo-500">Stack.</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm max-w-xl font-medium italic">
            Optimizing with <span className="text-white">Vite</span> and managing state via 
            <span className="text-white"> Redux</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {skillGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-4">
              {/* colorful Partition Header */}
              <div className="flex items-center gap-3">
                <span className="p-1.5 rounded-md bg-white/5 border border-white/10">
                  {group.icon}
                </span>
                <h3 className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.3em]">
                  {group.category}
                </h3>
                <div className={`h-[1px] flex-grow ${group.lineColor}`} />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {group.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className="group relative p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 transition-all duration-300"
                  >
                    {/* Expertise Dots Logic - Scaled Down */}
                    <div className="absolute top-3 right-3 flex gap-0.5">
                      {[1, 2, 3].map((dot) => (
                        <div 
                          key={dot}
                          className={`w-0.5 h-0.5 rounded-full ${
                            skill.level === "Expert" ? "bg-indigo-500" : 
                            skill.level === "Advanced" && dot <= 2 ? "bg-indigo-500" : 
                            skill.level === "Intermediate" && dot <= 1 ? "bg-indigo-500" : 
                            skill.level === "Proficient" && dot <= 2 ? "bg-indigo-500" : "bg-white/10"
                          }`}
                        />
                      ))}
                    </div>
                    
                    <div className="relative z-10">
                      <h4 className="text-white font-bold text-sm mb-0.5 group-hover:text-indigo-400 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-[8px] font-mono text-gray-500 uppercase tracking-widest font-bold">
                        {skill.level}
                      </p>
                    </div>

                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.05] bg-gradient-to-br ${skill.color} transition-opacity duration-500 rounded-xl`} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}