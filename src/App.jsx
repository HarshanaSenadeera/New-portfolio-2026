import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Github, Linkedin, Mail, ArrowUpRight, Sparkles, ChevronDown } from "lucide-react";

// Component Imports
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      offset: 100,
    });
  }, []);

  // 1. Scroll Progress Logic (Top Bar)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 2. Parallax Logic (Background Blobs)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-sky-500/30 overflow-x-hidden">
      
      {/* --- SCROLL PROGRESS BAR --- */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-purple-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* --- PARALLAX BACKGROUND GLOWS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-10%] left-1/4 w-[500px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full animate-pulse" 
        />
        <motion.div 
          style={{ y: y2, animationDelay: '2s' }}
          className="absolute bottom-[-10%] right-1/4 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full animate-pulse" 
        />
      </div>

      <Navbar />

      {/* --- HERO SECTION --- */}
      {/* --- MODERN HERO SECTION --- */}
      <main className="relative z-10 min-h-screen flex flex-col justify-center container mx-auto px-6 lg:px-12 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Left Side: Massive Lowercase Typography */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-12 bg-sky-500"></div>
              <span className="text-sky-500 font-mono text-sm tracking-tighter uppercase italic">
                S/W Engineer & UI Architect
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-[7rem] font-black tracking-tight text-white leading-[0.85] lowercase"
              >
                digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-slate-500">
                  craftsman
                </span>
              </motion.h1>
            </div>

            <div className="mt-12 max-w-2xl border-l border-white/10 pl-8" data-aos="fade-right" data-aos-delay="400">
              <p className="text-xl text-slate-400 leading-relaxed italic lowercase">
                "i bridge the gap between <span className="text-white font-medium">complex backend logic</span> and 
                <span className="text-white font-medium"> pixel-perfect aesthetics</span>."
              </p>
            </div>
          </div>

          {/* Right Side: Profile & Bento Info */}
<div className="lg:col-span-4 space-y-6" data-aos="fade-left" data-aos-delay="600">
  
  {/* The Profile Image Card */}
  <div className="relative group">
    {/* Decorative Ring Animation */}
    <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
    
    <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/10 bg-slate-900">
      {/* Replace 'your-image-url.jpg' with your actual image path */}
      <img 
        src="src\assets\WhatsApp Image 2026-03-12 at 15.19.24.jpeg" 
        alt="Harshana Senadeera"
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
      />
      
      {/* Overlay Info Layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
      
      <div className="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[10px] font-mono text-sky-400 uppercase tracking-widest">location</p>
            <p className="text-sm font-bold text-white">Galle, Lsadhc Sri Lanka</p>
          </div>
          <div className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center">
             <div className="h-2 w-2 bg-emerald-500 rounded-full animate-ping" />
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Quick Action Buttons */}
  <div className="flex flex-col gap-4">
    <div className="flex gap-4">
      <a href="#work" className="flex-1 py-5 bg-white text-black font-black text-center rounded-3xl hover:bg-sky-400 transition-all active:scale-95 lowercase italic">
        view work
      </a>
      <div className="flex gap-2">
        {[
          { Icon: Github, link: "https://github.com/HarshanaSenadeera" },
          { Icon: Linkedin, link: "#" }
        ].map((social, i) => (
          <a key={i} href={social.link} className="p-5 bg-white/5 border border-white/10 rounded-3xl hover:border-white/30 text-white transition-all group">
            <social.Icon size={20} className="group-hover:text-sky-400 transition-colors"/>
          </a>
        ))}
      </div>
    </div>
  </div>
</div>
        </div>

        {/* --- INFINITE TICKER --- */}
<div className="mt-20 w-full overflow-hidden relative">
  {/* Gradient Fades for a premium look */}
  <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
  <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

  <motion.div 
    className="flex whitespace-nowrap gap-10"
    animate={{ x: [0, -1000] }} // Adjust -1000 based on total width of tags
    transition={{ 
      duration: 20, 
      repeat: Infinity, 
      ease: "linear" 
    }}
  >
    {/* First set of tags */}
    {[...Array(2)].map((_, i) => (
      <div key={i} className="flex gap-10 items-center">
        {["React", "Node.js", "TypeScript", "Three.js", "PostgreSQL", "Tailwind", "Next.js", "Framer Motion"].map((tech) => (
          <span 
            key={tech} 
            className="px-6 py-2 border border-white/5 bg-white/[0.02] rounded-full text-[10px] font-mono tracking-[0.3em] uppercase text-slate-500 hover:text-sky-400 hover:border-sky-500/30 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    ))}
  </motion.div>
</div>
      </main>

      {/* --- PAGE SECTIONS --- */}
      <div data-aos="fade-up"><About /></div>
      <div data-aos="fade-up"><Projects /></div>
      <div data-aos="fade-up"><Contact /></div>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 border-t border-white/5 bg-slate-950/50 backdrop-blur-lg pt-20 pb-10">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      
      {/* Brand Column */}
      <div className="md:col-span-2">
        <div className="text-white font-black tracking-tighter text-3xl mb-6 uppercase italic">
          HARSHANA<span className="text-sky-500">.</span>
        </div>
        <p className="text-slate-400 max-w-sm leading-relaxed">
          Crafting high-performance digital experiences with a focus on 
          clean code and user-centric design. Let's build the future together.
        </p>
      </div>

      {/* Navigation Column */}
      <div>
        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
        <ul className="space-y-4 text-sm text-slate-500">
          {['About', 'Work', 'Experience', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-sky-400 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Status Column */}
      <div>
        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Status</h4>
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-sm text-slate-300 font-medium">Available for new projects</span>
        </div>
        <div className="mt-6">
          <p className="text-xs text-slate-500 uppercase tracking-tighter">Current Location</p>
          <p className="text-sm text-slate-300">Galle, Sri Lanka</p>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="pt-8 border-t border-white/5 flex flex-col md:row-reverse md:flex-row justify-between items-center gap-6">
      <div className="flex gap-6">
        <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={20}/></a>
        <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20}/></a>
        <a href="#" className="text-slate-500 hover:text-white transition-colors"><Mail size={20}/></a>
      </div>
      
      <div className="text-center md:text-left">
        <p className="text-slate-500 text-xs tracking-wide">
          © 2026 <span className="text-white font-medium">Harshana Senadeera</span>. 
          Built with <span className="text-sky-500">React</span> & <span className="text-purple-500">Tailwind</span>
        </p>
      </div>

      {/* Scroll to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-sky-500 transition-all"
      >
        Back to top
        <div className="p-2 rounded-full bg-white/5 group-hover:bg-sky-500/20 transition-all">
          <ArrowUpRight size={14} className="-rotate-45" />
        </div>
      </button>
    </div>
  </div>
</footer>
    </div>
  );
}