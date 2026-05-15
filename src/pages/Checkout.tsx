import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Cpu, Globe, Loader2 } from 'lucide-react';

export function Checkout() {
  const { cart } = useStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleExecute = () => {
    setIsProcessing(true);
    // Simulate mechanical calibration/payment processing
    setTimeout(() => {
      navigate('/success');
    }, 3000);
  };

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-background flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!isProcessing ? (
          <motion.div 
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="max-w-2xl w-full border border-white/5 bg-zinc-900/10 p-12 text-center backdrop-blur-sm"
          >
            <div className="flex justify-center gap-8 mb-12 text-zinc-600">
              <ShieldCheck className="w-5 h-5" />
              <Cpu className="w-5 h-5 animate-pulse text-white/50" />
              <Globe className="w-5 h-5" />
            </div>

            <header className="mb-12">
              <p className="text-[9px] tracking-[0.6em] uppercase text-zinc-500 mb-4 font-mono">System Status: Ready</p>
              <h1 className="text-4xl font-bold uppercase tracking-tighter text-white mb-2">Initialize Acquisition</h1>
              <div className="h-px w-16 bg-white/20 mx-auto mt-6" />
            </header>

            <div className="space-y-6 text-left mb-12 border-y border-white/5 py-8">
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono italic">Hardware Units</span>
                <span className="font-mono text-white text-xs">{cart.length} Components</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono italic">Logistics Path</span>
                <span className="font-mono text-white text-xs tracking-tighter uppercase">International // Priority</span>
              </div>
            </div>

            <button 
              className="w-full bg-white text-black py-6 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.05)]"
              onClick={handleExecute}
            >
              Confirm and Execute
            </button>
          </motion.div>
        ) : (
          <motion.div 
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <Loader2 className="w-10 h-10 text-white animate-spin mx-auto mb-6 opacity-20" />
            <p className="text-[10px] tracking-[0.5em] uppercase text-zinc-500 font-mono animate-pulse">
              Calibrating Secure Gateway...
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}