import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=2000&auto=format&fit=crop" 
          alt="Industrial Background"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background z-10" />
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          {/* Technical Label */}
          <p className="text-xs font-bold tracking-[0.4em] uppercase text-white/50 mb-6 font-mono">
            Project 01 // Mechanical
          </p>

          {/* Hero Heading */}
          <h1 className="text-5xl md:text-8xl tracking-tighter mb-6 md:mb-8 leading-none font-bold text-white uppercase">
            Sterile
            <br />
            <span className="text-white/40 font-medium">Precision.</span>
          </h1>

          {/* Subtext */}
          <p className="text-sm md:text-base text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed tracking-wide font-light">
            Uncompromising ultra-thin case architecture housing raw mechanical performance. 
            Zero branding. Pure functionality.
          </p>
          
          {/* THE FIX: Using ChevronRight inside the Link clears the error */}
          <Link 
            to="/specs" 
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-zinc-200 transition-all duration-300"
          >
            View Specifications
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

        </motion.div>
      </div>
    </section>
  );
}