import { motion } from "framer-motion";
import { User, Cpu, Globe, Zap, Sparkles } from "lucide-react";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const skillGroups = [
    { name: "LMS & Backend", skills: ["Moodle", "PHP", "MySQL", "CSS", "HTML"] },
    { name: "Full Stack", skills: ["Next.js", "Stripe", "Node", "React", "Tailwind CSS", "MongoDB", "Express", "TypeScript", "Firebase"] },
    { name: "Mobile", skills: ["Flutter", "React Native", "Firebase", "TypeScript"] }
  ];

  const getIconUrl = (skill) => {
    const map = {
      "Moodle": "moodle-original",
      "PHP": "php-original",
      "MySQL": "mysql-original",
      "CSS": "css3-plain",
      "HTML": "html5-plain",
      "Next.js": "nextjs-original",
      "Node": "nodejs-plain",
      "React": "react-original",
      "Tailwind CSS": "tailwindcss-original",
      "MongoDB": "mongodb-plain",
      "Express": "express-original",
      "TypeScript": "typescript-plain",
      "Firebase": "firebase-plain",
      "Flutter": "flutter-plain",
      "React Native": "react-original"
    };
    const icon = map[skill] || "javascript-plain";
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.split('-')[0]}/${icon}.svg`;
  };

  return (
    <section id="about" className="relative z-10 container mx-auto px-6 py-24">
      {/* Section Header */}
      <motion.div {...fadeInUp} className="mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tighter italic uppercase">
          About <span className="text-sky-500">Me</span>
        </h2>
        <div className="h-1 w-20 bg-sky-500 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 1. Bio Card (The Story) */}
        <motion.div 
          {...fadeInUp}
          className="md:col-span-2 p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-sm"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400">
              <User size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white">The Story</h3>
          </div>
          <p className="text-slate-400 leading-relaxed text-lg">
            I'm a Full-stack Developer who loves turning complex ideas into 
            <span className="text-white font-medium"> elegant digital realities.</span> With a deep focus on the 
            modern JavaScript ecosystem, I bridge the gap between robust backend logic and pixel-perfect frontend design.
          </p>
          <p className="text-slate-400 mt-4 leading-relaxed">
            My journey involves mastering diverse environments—from scaling 
            <span className="text-sky-400"> LMS platforms</span> to architecting 
            high-performance <span className="text-purple-400">Mobile Apps</span>.
          </p>
        </motion.div>

        {/* 2. Experience Card */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="p-8 rounded-3xl bg-gradient-to-br from-sky-500/20 to-transparent border border-sky-500/20 flex flex-col justify-center items-center text-center"
        >
          <Zap className="text-sky-400 mb-4 animate-bounce" size={40} />
          <h3 className="text-6xl font-black text-white mb-1">2+</h3>
          <p className="text-sky-400 font-bold uppercase tracking-widest text-xs">Years of Innovation</p>
        </motion.div>

        {/* 3. Location Card */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 flex items-center gap-6"
        >
          <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-400">
            <Globe size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Based in</h3>
            <p className="text-slate-400">Colombo, Sri Lanka</p>
          </div>
        </motion.div>

        {/* 4. Tech Stack Card (Large) */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 p-8 rounded-3xl bg-slate-900/40 border border-white/5"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Cpu className="text-emerald-400" size={24} />
            Technologies I Master
          </h3>
          
          <div className="space-y-10">
            {skillGroups.map((group, i) => (
              <div key={i}>
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-5">{group.name}</h4>
                <div className="flex flex-wrap gap-4">
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="group flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-2xl hover:border-sky-500/50 hover:bg-sky-500/5 transition-all cursor-default"
                    >
                      <img 
                        src={getIconUrl(skill)} 
                        alt={skill} 
                        className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                      <span className="text-slate-300 group-hover:text-white text-sm font-medium transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}