import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Heart, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, wishlist } = useStore(); // Accessing arrays instead of numbers
  
  const close = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        <Link to="/" onClick={close} className="flex flex-col items-start group">
          <h1 className="text-xl font-bold tracking-[0.4em] uppercase leading-none text-white">KERN</h1>
          <span className="text-[8px] tracking-[0.5em] uppercase text-white/50 mt-1 font-mono">Watches</span>
        </Link>

        <button onClick={() => setIsOpen(!isOpen)} className="z-[110] text-white hover:text-white/50 transition-colors p-2">
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div className={`fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={close} />

      <div className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-zinc-950 border-l border-white/5 z-[105] transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col justify-between p-12 pt-32">
          
          <div className="flex flex-col items-end gap-8">
            <p className="text-[9px] tracking-[0.5em] uppercase text-zinc-600 font-mono italic self-end mb-4">Directory //</p>
            <Link to="/hardware" onClick={close} className="group flex items-center gap-4 text-2xl font-light uppercase tracking-[0.2em] text-white/70 hover:text-white transition-all">
              Hardware <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
            </Link>
            <Link to="/architecture" onClick={close} className="group flex items-center gap-4 text-2xl font-light uppercase tracking-[0.2em] text-white/70 hover:text-white transition-all">
              Architecture <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
            </Link>
            <Link to="/about" onClick={close} className="group flex items-center gap-4 text-2xl font-light uppercase tracking-[0.2em] text-white/70 hover:text-white transition-all">
              About <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
            </Link>
          </div>

          <div className="flex flex-col items-end gap-12">
            <div className="w-full h-px bg-white/10" />
            <div className="flex flex-col items-end gap-6">
              <p className="text-[9px] tracking-[0.5em] uppercase text-zinc-600 font-mono italic mb-2">User Assets //</p>
              
              {/* Updated to Links */}
              <Link to="/cart" onClick={close} className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-zinc-400 hover:text-white transition-all group">
                Shopping Cart <span className="text-[10px] font-mono text-white ml-2">[{cart.length}]</span>
                <ShoppingCart className="w-4 h-4 text-zinc-600 group-hover:text-white" />
              </Link>

              <Link to="/wishlist" onClick={close} className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-zinc-400 hover:text-white transition-all group">
                Saved Wishlist <span className="text-[10px] font-mono text-white ml-2">[{wishlist.length}]</span>
                <Heart className="w-4 h-4 text-zinc-600 group-hover:text-white" />
              </Link>
            </div>

            <div className="w-full text-right opacity-40">
              <p className="text-[8px] uppercase tracking-[0.4em] font-mono mb-1">Global Inquiry</p>
              <p className="text-[10px] font-mono text-zinc-400">logistics@kern-watches.com</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}