import { Code2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
      <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl flex justify-between items-center shadow-2xl">
        {/* Logo Section */}
        <div className="flex items-center gap-2 font-bold tracking-tighter text-white uppercase italic">
          <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center italic shadow-[0_0_15px_rgba(14,165,233,0.4)]">
            H
          </div>
          <span>Dev Portfolio</span>
        </div>

        {/* Links Section */}
        <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest">
          <a href="#work" className="text-slate-400 hover:text-sky-400 transition-colors">
            Work
          </a>
          <a href="#about" className="text-slate-400 hover:text-sky-400 transition-colors">
            About
          </a>
        </div>

        {/* Action Button */}
        <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="bg-white text-black px-4 py-1.5 rounded-xl text-xs font-bold hover:bg-sky-400 transition-all active:scale-95 shadow-lg shadow-white/5">
          Contact
        </button>
      </div>
    </nav>
  );
}