import { useStore } from '../context/StoreContext';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ArrowRight, ArrowLeft } from 'lucide-react';

export function Cart() {
  const { cart, removeFromCart } = useStore();
  const navigate = useNavigate();

  // Calculation Logic: Strip '$' and ',' to sum the total
  const totalValue = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[$,]/g, ''));
    return acc + price;
  }, 0);

  const formattedTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(totalValue);

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-zinc-500 hover:text-white mb-12 transition-colors font-mono">
          <ArrowLeft className="w-3 h-3" /> Return to Index
        </Link>

        <header className="mb-16 border-b border-white/5 pb-8">
          <p className="text-[10px] tracking-[0.5em] uppercase text-zinc-600 mb-2 font-mono italic">Logistics // 01</p>
          <h1 className="text-5xl font-bold uppercase tracking-tighter text-white">Shopping Cart</h1>
        </header>

        {cart.length === 0 ? (
          <div className="py-32 text-center border border-dashed border-white/5 bg-zinc-900/10">
            <p className="text-zinc-600 uppercase tracking-[0.3em] text-[10px] mb-8 font-mono italic">Manifest Empty // No Hardware Detected</p>
            <Link to="/" className="inline-block bg-white text-black px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all">
              Browse Collections
            </Link>
          </div>
        ) : (
          <div className="space-y-px bg-white/5 border border-white/5">
            {cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="bg-background p-8 flex flex-col md:flex-row items-center gap-10 group border-b border-white/5 last:border-0">
                <div className="w-32 h-32 bg-zinc-900/50 flex items-center justify-center p-4 border border-white/5">
                  <img src={item.image} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.name} />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.4em] mb-1">Unit ID: {item.id}</p>
                  <h3 className="uppercase font-bold tracking-tight text-2xl mb-1 text-white">{item.name}</h3>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Finish: {item.variant}</p>
                </div>

                <div className="flex items-center gap-12">
                  <p className="text-xl font-mono text-white/80">{item.price}</p>
                  <button onClick={() => removeFromCart(item.id)} className="p-4 text-zinc-600 hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="mt-16 flex flex-col md:flex-row justify-between items-end pt-12 border-t border-white/5 gap-8">
            <div className="text-right md:text-left space-y-2">
              <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-mono italic">Aggregate Value //</p>
              <p className="text-4xl font-bold text-white tracking-tighter font-mono">{formattedTotal}</p>
              <p className="text-[9px] text-zinc-500 font-mono uppercase">Standard Logistics & VAT Included</p>
            </div>
            <button 
              onClick={() => navigate('/checkout')}
              className="w-full md:w-auto bg-white text-black px-16 py-6 text-[10px] font-bold uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-zinc-200 transition-all shadow-[0_20px_40px_-15px_rgba(255,255,255,0.15)]"
            >
              Initiate Checkout <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}