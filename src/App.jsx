import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Code2, Sparkles, ExternalLink } from "lucide-react";

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const projects = [
    { title: "AI Dashboard", tech: ["React", "Tailwind", "Python"], color: "from-blue-500/20" },
    { title: "E-Commerce OS", tech: ["Next.js", "Stripe", "Node"], color: "from-purple-500/20" },
    { title: "Social Canvas", tech: ["TypeScript", "Firebase"], color: "from-emerald-500/20" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-sky-500/30 overflow-x-hidden">
      
      {/* 1. Background Glow */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      {/* 2. Floating Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl flex justify-between items-center shadow-2xl">
          <div className="flex items-center gap-2 font-bold tracking-tighter text-white uppercase italic">
            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center italic">H</div>
            <span>Dev Portfolio</span>
          </div>
          <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest">
            <a href="#work" className="hover:text-sky-400 transition-colors">Work</a>
            <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
          </div>
          <button className="bg-white text-black px-4 py-1.5 rounded-xl text-xs font-bold hover:bg-sky-400 transition-all active:scale-95">
            Contact
          </button>
        </div>
      </nav>

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
            I'm a Full-stack Developer specializing in high-performance applications. 
            Focused on clean code and beautiful aesthetics.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="group px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-2xl flex items-center gap-2 transition-all">
              Explore Projects
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <div className="flex gap-2">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <button key={i} className="p-4 rounded-2xl bg-slate-900 border border-white/5 hover:border-white/20 text-slate-400 hover:text-white transition-all">
                  <Icon size={24} />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* 4. Project Grid Section */}
      <section id="work" className="relative z-10 container mx-auto px-6 py-20">
        <motion.div {...fadeInUp} className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Featured Work</h2>
          <p className="text-slate-400">A selection of my recent technical projects.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br ${project.color} to-slate-900/50 border border-white/5 hover:border-sky-500/50 transition-all cursor-pointer`}
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-3 bg-slate-900 rounded-2xl border border-white/5">
                  <Code2 className="text-sky-400" size={24} />
                </div>
                <ExternalLink size={20} className="text-slate-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white/5 rounded-md text-slate-400">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="relative z-10 border-t border-white/5 py-10 text-center text-slate-600 text-sm">
        <p>© 2026 Your Name. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}