import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

export function Success() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center max-w-md"
      >
        <div className="w-16 h-16 border border-white/10 flex items-center justify-center mx-auto mb-10">
          <Check className="w-6 h-6 text-white opacity-50" />
        </div>
        
        <p className="text-[10px] tracking-[0.6em] uppercase text-zinc-600 mb-4 font-mono">Transmission Successful</p>
        <h1 className="text-4xl font-bold uppercase tracking-tighter mb-8 italic">Order Secured.</h1>
        
        <p className="text-xs text-zinc-500 leading-relaxed mb-12 font-light tracking-wide uppercase">
          Your hardware configuration has been logged. Technical documentation and shipping manifests will be dispatched shortly.
        </p>

        <Link 
          to="/" 
          className="text-[10px] uppercase tracking-[0.4em] text-white border-b border-white pb-2 hover:opacity-50 transition-all font-mono"
        >
          Return to Dashboard
        </Link>
      </motion.div>
    </div>
  );
}