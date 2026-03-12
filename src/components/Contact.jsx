import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="contact" className="relative z-10 container mx-auto px-6 py-24">
      <div className="bg-slate-900/40 border border-white/5 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
        {/* Background Decorative Glow */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-sky-500/10 blur-[100px] rounded-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          {/* Left Side: Call to Action */}
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
              Let's build something <br />
              <span className="text-sky-500 italic">extraordinary.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-sm">
              Currently available for freelance work and full-time opportunities. 
              Have an idea? Let's talk.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:your.email@example.com" className="flex items-center gap-4 text-white hover:text-sky-400 transition-colors group">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-sky-500/20 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-medium">hello@yourdomain.com</span>
              </a>
              <div className="flex gap-4 pt-4">
                {[Github, Linkedin].map((Icon, i) => (
                  <button key={i} className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 text-slate-400 hover:text-white transition-all">
                    <Icon size={24} />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Simple Quick Message */}
          <motion.div 
            {...fadeInUp} 
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Your Name</label>
                <input type="text" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 mt-2 focus:outline-none focus:border-sky-500 transition-colors text-white" placeholder="John Doe" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                <textarea rows="4" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 mt-2 focus:outline-none focus:border-sky-500 transition-colors text-white resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-sky-500/20">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Final Footer Label */}
      <div className="mt-20 text-center">
        <p className="text-slate-600 text-sm flex items-center justify-center gap-2 font-medium">
          Made with <span className="text-red-500/60">❤</span> in Colombo
        </p>
      </div>
    </section>
  );
}