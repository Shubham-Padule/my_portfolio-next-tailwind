"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMailLine, RiMapPinLine, RiSendPlaneLine, RiLinkedinBoxLine, RiGithubLine } from "react-icons/ri";
import { FiCheckCircle, FiLoader } from "react-icons/fi";

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
    <section id="contact" className="pt-20 pb-10 px-6 md:px-12 bg-[#030712] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white tracking-tighter italic leading-none"
          >
            Work <span className="text-indigo-500">Together.</span>
          </motion.h2>
          <p className="text-gray-500 mt-4 text-sm font-medium italic">
            Currently available for freelance projects and full-time roles in <span className="text-white">Pune.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-20">
          {/* Left: Info Card */}
          <div className="md:col-span-2 space-y-6">
            <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-md">
              <h3 className="text-white font-bold text-xl mb-6 italic">Contact Details</h3>
              <div className="space-y-6 text-xs font-mono tracking-tighter">
                <a href="mailto:shubhampadule22@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-indigo-400 transition-colors group">
                  <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                    <RiMailLine className="text-indigo-500" size={20}/>
                  </div>
                  shubhampadule22@gmail.com
                </a>
                <div className="flex items-center gap-4 text-gray-400 group">
                  <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                    <RiMapPinLine className="text-indigo-500" size={20}/>
                  </div>
                  Pune, Maharashtra, India
                </div>
              </div>

              {/* Updated Social Icons with your links */}
              <div className="mt-10 pt-8 border-t border-white/5 flex gap-4">
                <a href="https://www.linkedin.com/in/shubham-padule-sp" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 hover:bg-indigo-600 transition-all text-white border border-white/10 shadow-lg">
                  <RiLinkedinBoxLine size={22}/>
                </a>
                <a href="https://github.com/Shubham-Padule" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 hover:bg-gray-800 transition-all text-white border border-white/10 shadow-lg">
                  <RiGithubLine size={22}/>
                </a>
              </div>
            </div>
            
          
          </div>

          {/* Right: Form */}
          <div className="md:col-span-3 p-8 md:p-12 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl min-h-[450px] flex flex-col justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              {result === "Success" ? (
                <motion.div 
                  key="success" 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }} 
                  animate={{ opacity: 1, scale: 1, y: 0 }} 
                  className="text-center py-10"
                >
                  <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(34,197,94,0.2)]">
                    <FiCheckCircle size={48} className="text-green-500" />
                  </div>
                  <h3 className="text-4xl font-black text-white italic tracking-tighter mb-2">Aura Sent! 🚀</h3>
                  <p className="text-gray-400 text-sm italic max-w-xs mx-auto leading-relaxed">
                    Thanks Shubham! Aapka message mil gaya hai. Main agle 24 ghante mein reply karunga.
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setResult("")} 
                    className="mt-8 px-8 py-2 border border-indigo-500/30 text-indigo-400 text-[10px] uppercase font-black tracking-[0.3em] rounded-full hover:bg-indigo-500/10 transition-all"
                  >
                    Send Another
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input name="name" required type="text" placeholder="Full Name" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all" />
                    <input name="email" required type="email" placeholder="Email Address" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all" />
                  </div>
                  <textarea name="message" required placeholder="Project Details..." rows={5} className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] resize-none transition-all"></textarea>
                  
                  <motion.button 
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className={`flex items-center justify-center gap-3 w-full py-5 font-black text-xs uppercase tracking-[0.3em] rounded-2xl transition-all shadow-2xl ${
                      isSubmitting ? 'bg-gray-800 cursor-not-allowed text-gray-500' : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/20'
                    }`}
                  >
                    {isSubmitting ? <FiLoader className="animate-spin" size={20} /> : "Launch Message"}
                    {!isSubmitting && <RiSendPlaneLine size={20} className="group-hover:translate-x-1 transition-transform" />}
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* --- PREMIUM FOOTER --- */}
        <footer className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em]">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-white font-black italic text-2xl tracking-tighter">SHUBHAM.</span>
            <p className="opacity-50 italic">Frontend Engineer | Pune based</p>
          </div>

          <div className="flex gap-8 font-bold">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Stack</a>
            <a href="#experience" className="hover:text-white transition-colors">Journey</a>
          </div>

          <div className="text-center md:text-right">
            <p className="mb-1">© 2026 Developed with <span className="text-indigo-500">Next.js 16</span></p>
            <p className="opacity-30">Vercel Edge Network</p>
          </div>
        </footer>
      </div>
    </section>
  );
}