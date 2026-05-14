import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=2000&auto=format&fit=crop" 
          alt="Industrial Background"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background z-10" />
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-xs font-bold tracking-[0.4em] uppercase text-white/50 mb-6">
            Project 01 // Mechanical
          </p>
          <h1 className="text-5xl md:text-8xl tracking-tighter mb-6 md:mb-8 leading-none font-bold text-white">
            Sterile
            <br />
            <span className="text-white/40 font-medium">Precision.</span>
          </h1>
          <p className="text-sm md:text-base text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Uncompromising ultra-thin case architecture housing raw mechanical performance. Zero branding. Pure functionality.
          </p>
          
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.3)]">
            View Specifications
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}