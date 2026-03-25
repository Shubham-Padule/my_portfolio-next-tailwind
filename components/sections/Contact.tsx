"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMailLine, RiMapPinLine, RiSendPlaneLine, RiLinkedinBoxLine, RiGithubLine } from "react-icons/ri";
import { FiCheckCircle, FiLoader, FiArrowUpRight } from "react-icons/fi";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "5149b4f1-1713-4314-93e8-e4d78cd110e4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setResult("Success");
        event.target.reset();
      } else {
        setResult("Error");
      }
    } catch (e) {
      setResult("Error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 px-6 md:px-12 bg-[#030712] relative overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase italic"
            >
              Get In <span className="text-indigo-500">Touch.</span>
            </motion.h2>
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] mt-2">
              Available for Strategic Collaborations
            </p>
          </div>
          
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-500/5 border border-indigo-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-[9px] font-bold text-indigo-300 uppercase tracking-widest text-nowrap">Active for Hire</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
          {/* Left: Direct Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
              <div className="space-y-4">
                <a href="mailto:shubhampadule22@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-all group">
                  <RiMailLine className="text-indigo-500" size={18}/>
                  <span className="text-[11px] font-mono tracking-tight">shubhampadule22@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <RiMapPinLine className="text-indigo-500" size={18}/>
                  <span className="text-[11px] font-mono tracking-tight">Pune, India — UTC+5:30</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 flex gap-3">
                <a href="https://linkedin.com/in/shubham-padule-sp" target="_blank" className="p-3 bg-white/5 rounded-xl hover:bg-indigo-600 transition-all">
                  <RiLinkedinBoxLine size={20} className="text-white"/>
                </a>
                <a href="https://github.com/Shubham-Padule" target="_blank" className="p-3 bg-white/5 rounded-xl hover:bg-gray-800 transition-all">
                  <RiGithubLine size={20} className="text-white"/>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Tight Form */}
          <div className="md:col-span-3">
            <div className="bg-white/[0.03] p-6 md:p-8 rounded-[2rem] border border-white/10 min-h-[320px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {result === "Success" ? (
                  <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-4">
                    <FiCheckCircle size={32} className="text-indigo-500 mx-auto" />
                    <div className="space-y-1">
                      <h3 className="text-lg font-black text-white uppercase tracking-tight">Inquiry Received</h3>
                      <p className="text-gray-500 text-[10px] font-mono uppercase tracking-wide max-w-[200px] mx-auto">
                        Acknowledged. Expect a response within 24 hours.
                      </p>
                    </div>
                    <button onClick={() => setResult("")} className="text-indigo-400 text-[9px] font-bold uppercase tracking-widest hover:text-white transition-colors">
                      [ Reset Form ]
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input name="name" required type="text" placeholder="NAME" className="w-full p-3.5 bg-white/[0.03] border border-white/10 text-white text-[10px] font-mono rounded-xl outline-none focus:border-indigo-500/50" />
                      <input name="email" required type="email" placeholder="EMAIL" className="w-full p-3.5 bg-white/[0.03] border border-white/10 text-white text-[10px] font-mono rounded-xl outline-none focus:border-indigo-500/50" />
                    </div>
                    <textarea name="message" required placeholder="MESSAGE" rows={4} className="w-full p-4 bg-white/[0.03] border border-white/10 text-white text-[10px] font-mono rounded-xl outline-none focus:border-indigo-500/50 resize-none"></textarea>
                    
                    <motion.button 
                      disabled={isSubmitting}
                      type="submit"
                      className={`flex items-center justify-center gap-2 w-full py-4 font-black text-[10px] uppercase tracking-[0.3em] rounded-xl transition-all ${
                        isSubmitting ? 'bg-gray-900 text-gray-600' : 'bg-white text-black hover:bg-indigo-500 hover:text-white'
                      }`}
                    >
                      {isSubmitting ? <FiLoader className="animate-spin" /> : "Transmit"}
                      {!isSubmitting && <FiArrowUpRight size={14} />}
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Ultra-Compact Footer */}
        <footer className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="text-white font-black text-lg tracking-tighter italic">SHUBHAM.</span>
            <span className="hidden md:block w-[1px] h-4 bg-white/10"></span>
            <p className="text-[9px] text-gray-600 font-mono uppercase tracking-widest italic">© 2026 Architectural Excellence</p>
          </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[9px] font-bold uppercase tracking-widest text-gray-500">
  <a href="#about" className="hover:text-white transition-colors">About</a>
  <a href="#skills" className="hover:text-white transition-colors">Skills</a>
  <a href="#projects" className="hover:text-white transition-colors">Projects</a>
  <a href="#experience" className="hover:text-white transition-colors">Experience</a>
  <a href="/resume.pdf" target="_blank" className="hover:text-indigo-400 transition-colors text-indigo-500/80">
    Resume // PDF
  </a>
</div>

          <div className="text-[9px] font-mono text-gray-700 uppercase tracking-tighter">
            Next.js 16 // Turbopack // Vercel Edge
          </div>
        </footer>
      </div>
    </section>
  );
}