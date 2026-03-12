import { motion } from "framer-motion";
import { Code2, ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  { 
    title: "LMS Platforms", 
    tech: ["Moodle", "PHP", "MySQL","CSS","HTML"], 
    color: "from-blue-500/20",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5WsCvjz6r0KGaztg2utcJpEGPG-kGNIx1A&s" 
  },
  { 
    title: "POS Systems", 
    tech: ["Next.js", "Stripe", "Node" ,"React","Tailwind CSS","MongoDB","Express","TypeScript","Firebase"], 
    color: "from-purple-500/20",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Custom Websites", 
    tech: ["typescript", "MongoDB" , "Express", "React", "Node","Tailwind CSS","Firebase","CSS","HTML"], 
    color: "from-emerald-500/20",
    image: "https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg"
  },
  { 
    title: "Mobile Apps", 
    tech: ["Flutter", "React Native", "Firebase", "TypeScript"], 
    color: "from-emerald-500/20",
    image: "https://www.devicemagic.com/wp-content/uploads/2021/06/mobile-apps-1-scaled.jpg"
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Projects() {
  return (
    <section id="work" className="relative z-10 container mx-auto px-6 py-20">
      <motion.div {...fadeInUp} className="mb-20 relative flex items-center group">
  {/* Massive Ghost Text Shadow */}
  <span className="absolute left-0 text-[6rem] md:text-[11rem] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter whitespace-nowrap">
    Featured
  </span>

  <div className="relative z-10">
    {/* Section Index Tag */}
    <motion.div 
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      className="flex items-center gap-3 mb-2"
    >
      <span className="text-sky-500 font-mono text-[10px] tracking-[0.4em] uppercase italic">
        02 / selected work
      </span>
      <div className="h-[1px] w-12 bg-sky-500/30"></div>
    </motion.div>

    {/* Main Title - Single Line */}
    <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8">
      <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white lowercase italic flex items-center gap-4">
        featured 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-400 to-slate-600">
          work.
        </span>
      </h2>

      {/* Description Text - Shifted for Balance */}
      <p className="text-slate-500 text-sm max-w-[280px] leading-relaxed lowercase mb-2 border-l border-white/10 pl-4">
        transforming complex problems into elegant digital solutions through clean code.
      </p>
    </div>
  </div>
</motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            {...fadeInUp}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-3xl bg-slate-900/50 border border-white/5 hover:border-sky-500/50 transition-all duration-500"
          >
            {/* Image Preview */}
            <div className="h-48 overflow-hidden relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent z-10 opacity-60 group-hover:opacity-20 transition-opacity`} />
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">{project.title}</h3>
                <ArrowUpRight size={18} className="text-slate-500 group-hover:text-white transition-all" />
              </div>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-white/5 rounded-lg text-slate-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}