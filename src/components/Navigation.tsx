import { Search, ShoppingBag, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="hidden md:flex gap-8 flex-1">
          {['Hardware', 'Architecture', 'About'].map((item) => (
            <a key={item} href="#" className="text-xs tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-300">
              {item}
            </a>
          ))}
        </div>

        <motion.div 
          className="flex flex-col items-center justify-center cursor-pointer flex-shrink-0 mx-auto group"
          whileHover={{ y: -2 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-[0.3em] uppercase leading-none text-white transition-transform group-hover:scale-105">
            KERN
          </h1>
          <span className="text-[9px] md:text-[10px] tracking-[0.5em] uppercase text-white/50 mt-1 font-medium ml-1">
            watches
          </span>
        </motion.div>

        <div className="flex gap-6 flex-1 justify-end items-center text-white">
          <Search className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:scale-125 transition-transform" />
          <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:scale-125 transition-transform" />
          <Menu className="w-5 h-5 md:hidden cursor-pointer" />
        </div>

      </div>
    </nav>
  );
}