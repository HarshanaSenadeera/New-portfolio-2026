import { motion } from "framer-motion";
import { User, Cpu, Globe, Zap, GraduationCap, Briefcase, Calendar } from "lucide-react";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  // --- DATA ARRAYS ---
  const education = [
    {
      degree: "BSc (Hons) in Computer Science",
      institute: "Wrexham University",
      year: "2024 - 2025",
    },
    {
      degree: "Graduate Diploma in Software Engineering",
      institute: "IJSE (Institute of Java Software Engineering)",
      year: "2021 - 2024",
    }
  ];

  const workExperience = [
    {
      role: "Moodle Developer",
      company: "Sampath IT Solutions",
      duration: "2026 - Present",
      description: "Developed and maintained custom Moodle plugins and themes for educational institutions."
    },
    {
      role: "Intern Full-stack Developer",
      company: "Loopy Hoaldings",
      duration: "06 Months (2024)",
      description: "Built custom websites and internal tools using Next.js, Node, and MongoDB. Collaborated with designers to create responsive UIs."
    }
  ];

  const skillGroups = [
    { name: "LMS & Backend", skills: ["Moodle", "PHP", "MySQL", "CSS", "HTML"] },
    { name: "Full Stack", skills: ["Next.js", "Stripe", "Node", "React", "Tailwind CSS", "MongoDB", "Express", "TypeScript", "Firebase"] },
    { name: "Mobile", skills: ["Flutter", "React Native", "Firebase", "TypeScript"] }
  ];

  const getIconUrl = (skill) => {
    const map = {
      "Moodle": "moodle-original", "PHP": "php-original", "MySQL": "mysql-original",
      "CSS": "css3-plain", "HTML": "html5-plain", "Next.js": "nextjs-original",
       "Node": "nodejs-plain", "React": "react-original",
      "Tailwind CSS": "tailwindcss-original", "MongoDB": "mongodb-plain",
      "Express": "express-original", "TypeScript": "typescript-plain",
      "Firebase": "firebase-plain", "Flutter": "flutter-plain", "React Native": "react-original"
    };
    const icon = map[skill] || "javascript-plain";
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.split('-')[0]}/${icon}.svg`;
  };

  return (
    <section id="about" className="relative z-10 container mx-auto px-6 py-24">
      {/* Section Header */}
      <motion.div {...fadeInUp} className="mb-20 relative flex items-center">
  {/* The Architectural "Shadow" Layer */}
  <span className="absolute left-0 text-[6rem] md:text-[11rem] font-black text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter whitespace-nowrap">
    About Me
  </span>

  {/* The Main Content */}
  <div className="relative z-10 flex flex-col">
    <motion.div 
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      className="flex items-center gap-3 mb-2"
    >
      <span className="text-sky-500 font-mono text-[10px] tracking-[0.4em] uppercase italic">
        01 / profile
      </span>
      <div className="h-[1px] w-12 bg-sky-500/30"></div>
    </motion.div>

    <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white lowercase italic flex items-center gap-4">
      about 
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-400 to-slate-600">
        me.
      </span>
      {/* Small accent line that appears after the text */}
      <div className="hidden md:block h-[2px] w-24 bg-gradient-to-r from-sky-500/50 to-transparent rounded-full ml-4" />
    </h2>
  </div>
</motion.div>



      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 1. Bio Card */}
        <motion.div {...fadeInUp} className="md:col-span-2 p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400">
              <User size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white">The Story</h3>
          </div>
          <p className="text-slate-400 leading-relaxed text-lg">
            I'm a Full-stack Developer who loves turning complex ideas into 
            <span className="text-white font-medium"> elegant digital realities.</span> I bridge the gap between robust backend logic and pixel-perfect frontend design.
          </p>
        </motion.div>

        {/* 2. Experience Stats Card */}
        <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="p-8 rounded-3xl bg-gradient-to-br from-sky-500/20 to-transparent border border-sky-500/20 flex flex-col justify-center items-center text-center">
          <Zap className="text-sky-400 mb-4 animate-bounce" size={40} />
          <h3 className="text-6xl font-black text-white mb-1">2+</h3>
          <p className="text-sky-400 font-bold uppercase tracking-widest text-xs">Years of Innovation</p>
        </motion.div>

        {/* 3. Work Experience - Timeline Style */}
        <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="md:col-span-1 p-8 rounded-3xl bg-slate-900/40 border border-white/5">
          <div className="flex items-center gap-4 mb-8">
            <Briefcase className="text-purple-400" size={24} />
            <h3 className="text-xl font-bold text-white">Experience</h3>
          </div>
          <div className="space-y-6">
            {workExperience.map((exp, i) => (
              <div key={i} className="relative pl-6 border-l border-slate-700">
                <div className="absolute w-2 h-2 bg-purple-500 rounded-full -left-[4.5px] top-2" />
                <h4 className="text-white font-bold text-sm">{exp.role}</h4>
                <p className="text-sky-400 text-xs font-medium">{exp.company}</p>
                <p className="text-slate-500 text-[10px] mt-1 italic">{exp.duration}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4. Education - Timeline Style */}
        <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="md:col-span-1 p-8 rounded-3xl bg-slate-900/40 border border-white/5">
          <div className="flex items-center gap-4 mb-8">
            <GraduationCap className="text-emerald-400" size={24} />
            <h3 className="text-xl font-bold text-white">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div key={i} className="relative pl-6 border-l border-slate-700">
                <div className="absolute w-2 h-2 bg-emerald-500 rounded-full -left-[4.5px] top-2" />
                <h4 className="text-white font-bold text-sm">{edu.degree}</h4>
                <p className="text-slate-400 text-xs">{edu.institute}</p>
                <p className="text-slate-500 text-[10px] mt-1 italic">{edu.year}</p>
              </div>
            ))}
          </div>
        </motion.div>

        

        {/* 5. Location Card */}
        <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 flex items-center gap-6">
          <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-400">
            <Globe size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white italic">Galle, Sri Lanka</h3>
          </div>
        </motion.div>

        {/* 6. Tech Stack Card (Large) */}
        <motion.div {...fadeInUp} transition={{ delay: 0.5 }} className="md:col-span-3 p-8 rounded-3xl bg-slate-900/40 border border-white/5">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2 uppercase tracking-tighter italic">
            <Cpu className="text-sky-400" size={24} />
            Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {skillGroups.map((group, i) => (
              <div key={i}>
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-5">{group.name}</h4>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <motion.div key={skill} whileHover={{ y: -3 }} className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/5 rounded-xl transition-all">
                      <img src={getIconUrl(skill)} alt={skill} className="w-4 h-4" />
                      <span className="text-slate-300 text-xs font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Download CV Action */}
        <motion.div 
        {...fadeInUp}
        transition={{ delay: 0.6 }}
        className="mt-12 flex justify-center"
        >
        <a 
            href="/path-to-your-cv.pdf" // Put your PDF in the 'public' folder
            download
            className="group relative px-10 py-4 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
            {/* Animated Background Slide */}
            <div className="absolute inset-0 bg-sky-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            
            <div className="relative flex items-center gap-3 group-hover:text-white transition-colors duration-300">
            <Zap size={20} className="fill-current" />
            <span className="uppercase tracking-widest text-sm">Download CV</span>
            </div>
        </a>
        </motion.div>

      </div>
    </section>
  );
}