import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, ArrowUpRight, Sparkles } from "lucide-react";

export default function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="contact" className="relative z-10 container mx-auto px-6 py-24">
      {/* Main Container */}
      <div className="bg-slate-900/20 border border-white/5 rounded-[3rem] p-8 md:p-16 overflow-hidden relative backdrop-blur-sm">
        
        {/* Architectural Background Text */}
        <span className="absolute left-10 top-0 text-[6rem] md:text-[13rem] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-[0.1em] whitespace-nowrap">
          connect
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
          
          {/* --- LEFT SIDE: THE BRANDING --- */}
          <motion.div {...fadeInUp}>
            <motion.div 
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-sky-500 font-mono text-[10px] tracking-[0.4em] uppercase italic">
                03 / availability
              </span>
              <div className="h-[1px] w-12 bg-sky-500/30"></div>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.95] lowercase italic mb-8">
              let's build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-400 to-slate-600">
                extraordinary.
              </span>
            </h2>
            
            <p className="text-slate-500 text-lg max-w-sm leading-relaxed lowercase mb-10">
              currently available for freelance work and full-time opportunities. 
              have an idea? let's talk.
            </p>

            {/* Quick Contact Link */}
            <a 
              href="mailto:harshanasenadeera64@gmail.com" 
              className="group inline-flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-sky-500/50 transition-all duration-300"
            >
              <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all">
                <Mail size={20} />
              </div>
              <span className="text-white font-medium text-sm tracking-tight">harshanasenadeera64@gmail.com</span>
              <ArrowUpRight size={18} className="text-slate-600 group-hover:text-white transition-all" />
            </a>

            {/* Social Row */}
            <div className="flex gap-4 mt-8">
              {[
                { Icon: Github, link: "https://github.com/HarshanaSenadeera" },
                { Icon: Linkedin, link: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 text-slate-400 hover:text-white transition-all"
                >
                  <social.Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: THE FORM --- */}
          <motion.div 
            {...fadeInUp} 
            transition={{ delay: 0.2 }}
            className="bg-slate-950/50 border border-white/10 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-xl shadow-2xl relative"
          >
            {/* Subtle glow behind form */}
            <div className="absolute inset-0 bg-sky-500/5 blur-3xl -z-10 rounded-full" />

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 mt-2 focus:outline-none focus:border-sky-500/50 transition-all text-white placeholder:text-slate-700" 
                    placeholder="e.g. john doe" 
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 mt-2 focus:outline-none focus:border-sky-500/50 transition-all text-white placeholder:text-slate-700" 
                    placeholder="name@company.com" 
                  />
                </div>
              </div>
              
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 mt-2 focus:outline-none focus:border-sky-500/50 transition-all text-white resize-none placeholder:text-slate-700" 
                  placeholder="tell me about your project..."
                ></textarea>
              </div>

              <button className="w-full bg-sky-600 hover:bg-sky-500 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-sky-500/20 uppercase italic tracking-tighter">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}