import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Sparkles } from "lucide-react";

// Component Imports
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-sky-500/30 overflow-x-hidden">
      
      {/* 1. Background Glow Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* 2. Floating Navigation */}
      <Navbar />

      {/* 3. Hero Section */}
      <main className="relative z-10 container mx-auto px-6 pt-44 pb-20">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium mb-8"
          >
            <Sparkles size={14} />
            <span>Available for 2026 opportunities</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
          >
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500">Modern</span> <br />
            Web Experiences.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl text-lg text-slate-400 mb-10"
          >
            I'm <span className="text-white font-medium">Harshana Senadeera</span>, a Full-stack Developer specializing in high-performance applications. 
            Focused on clean code and beautiful aesthetics.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#work" className="group px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-2xl flex items-center gap-2 transition-all hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.5)]">
              Explore Projects
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            
            <div className="flex gap-2">
              {[
                { Icon: Github, link: "https://github.com/HarshanaSenadeera" },
                { Icon: Linkedin, link: "#" },
                { Icon: Mail, link: "mailto:your@email.com" }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-900 border border-white/5 hover:border-white/20 text-slate-400 hover:text-white transition-all"
                >
                  <item.Icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* 4. Page Sections */}
      <About />
      <Projects />
      <Contact />

      {/* 5. Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12 mt-20">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <div className="text-white font-bold tracking-tighter text-xl mb-4">
            HARSHANA<span className="text-sky-500">.</span>
          </div>
          <p className="text-slate-500 text-sm mb-2 text-center">
            Designed & Developed by <span className="text-slate-300">Harshana Senadeera</span>
          </p>
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em]">
            © 2026 All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}