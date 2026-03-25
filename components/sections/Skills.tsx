"use client";
import { motion } from "framer-motion";
import { Code2, Layout, Layers, GitBranch } from "lucide-react";
// React Icons for specific technologies
import { 
  RiReactjsLine, RiJavascriptLine, RiHtml5Line, RiNextjsLine, 
  RiTailwindCssLine, RiCss3Line, RiGithubFill 
} from "react-icons/ri";
import { 
  SiTypescript, SiRedux, SiVite, SiPostman, 
  SiFramer, SiVercel, SiMui, SiBootstrap, SiZod 
} from "react-icons/si";

const skillGroups = [
  {
    category: "Core Development",
    icon: <Code2 size={12} className="text-blue-400" />,
    lineColor: "bg-blue-500/20",
    skills: [
      { name: "React.js", level: "Expert", percentage: 95, icon: <RiReactjsLine size={18} />, color: "from-blue-400 to-blue-600" },
      { name: "JavaScript", level: "Expert", percentage: 90, icon: <RiJavascriptLine size={18} />, color: "from-yellow-400 to-yellow-600" },
      { name: "HTML/CSS", level: "Expert", percentage: 95, icon: <RiHtml5Line size={18} />, color: "from-orange-500 to-red-500" },
      { name: "Next.js 16", level: "Advanced", percentage: 85, icon: <RiNextjsLine size={18} />, color: "from-white/50 to-gray-500" },
    ],
  },
  {
    category: "State & Logic",
    icon: <Layers size={12} className="text-purple-400" />,
    lineColor: "bg-purple-500/20",
    skills: [
      { name: "Redux", level: "Advanced", percentage: 80, icon: <SiRedux size={16} />, color: "from-purple-500 to-indigo-600" },
      { name: "TypeScript", level: "Intermediate", percentage: 70, icon: <SiTypescript size={16} />, color: "from-blue-500 to-indigo-500" },
      { name: "Zod", level: "Intermediate", percentage: 60, icon: <SiZod size={16} />, color: "from-indigo-400 to-purple-500" },
      { name: "Context API", level: "Expert", percentage: 90, icon: <Layout size={16} />, color: "from-cyan-400 to-blue-500" },
    ],
  },
  {
    category: "Styling & Build",
    icon: <Layout size={12} className="text-yellow-400" />,
    lineColor: "bg-yellow-500/20",
    skills: [
      { name: "Tailwind 4.0", level: "Expert", percentage: 95, icon: <RiTailwindCssLine size={18} />, color: "from-cyan-400 to-teal-500" },
      { name: "Framer Motion", level: "Advanced", percentage: 85, icon: <SiFramer size={16} />, color: "from-pink-500 to-rose-500" },
      { name: "MUI / Shadcn", level: "Expert", percentage: 90, icon: <SiMui size={16} />, color: "from-blue-600 to-indigo-700" },
      { name: "Vite", level: "Expert", percentage: 95, icon: <SiVite size={16} />, color: "from-yellow-400 to-purple-500" },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <GitBranch size={12} className="text-emerald-400" />,
    lineColor: "bg-emerald-500/20",
    skills: [
      { name: "GitHub", level: "Expert", percentage: 90, icon: <RiGithubFill size={18} />, color: "from-gray-600 to-black" },
      { name: "Postman", level: "Expert", percentage: 95, icon: <SiPostman size={16} />, color: "from-orange-400 to-orange-600" },
      { name: "Vercel", level: "Expert", percentage: 90, icon: <SiVercel size={16} />, color: "from-blue-900 to-black" },
      { name: "Bootstrap", level: "Expert", percentage: 90, icon: <SiBootstrap size={16} />, color: "from-purple-500 to-indigo-600" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 md:px-12 bg-[#030712] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter italic uppercase">
            Technical <span className="text-indigo-500">Stack.</span>
          </h2>
          <p className="text-gray-500 mt-2 text-[10px] font-mono uppercase tracking-[0.3em]">
            Precision tools for <span className="text-white">Modern Web</span> Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {skillGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="p-1.5 rounded-md bg-white/5 border border-white/10">
                  {group.icon}
                </span>
                <h3 className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.3em]">
                  {group.category}
                </h3>
                <div className={`h-[1px] flex-grow ${group.lineColor}`} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {group.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="group relative p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all duration-300"
                  >
                    <div className="relative z-10 flex items-start gap-3 mb-3">
                      <div className="text-gray-500 group-hover:text-indigo-400 transition-colors mt-1">
                        {skill.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-end mb-1">
                          <h4 className="text-white font-bold text-xs uppercase tracking-tight">
                            {skill.name}
                          </h4>
                          <span className="text-[8px] font-mono text-gray-600">{skill.percentage}%</span>
                        </div>
                        <p className="text-[8px] font-mono text-gray-500 uppercase tracking-widest leading-none">
                          {skill.level}
                        </p>
                      </div>
                    </div>

                    {/* Compact Progress Bar */}
                    <div className="relative w-full h-[1.5px] bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>

                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] bg-gradient-to-br ${skill.color} transition-opacity duration-500 rounded-xl`} />
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