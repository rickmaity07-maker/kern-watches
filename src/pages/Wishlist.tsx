import { useStore } from '../context/StoreContext';
import { Link } from 'react-router-dom';
import { Heart, ArrowLeft } from 'lucide-react';

export function Wishlist() {
  const { wishlist, toggleWishlist } = useStore();

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-background">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-zinc-500 hover:text-white mb-12 transition-colors font-mono">
          <ArrowLeft className="w-3 h-3" /> Return to Index
        </Link>

        <header className="mb-16 border-b border-white/5 pb-8">
          <p className="text-[10px] tracking-[0.5em] uppercase text-zinc-600 mb-2 font-mono italic">Archive // 02</p>
          <h1 className="text-5xl font-bold uppercase tracking-tighter text-white">Saved Hardware</h1>
        </header>

        {wishlist.length === 0 ? (
          <div className="py-32 text-center border border-dashed border-white/5 bg-zinc-900/10">
            <p className="text-zinc-600 uppercase tracking-[0.3em] text-[10px] mb-8 font-mono italic">Archive Empty // No Saved Configurations</p>
            <Link to="/" className="text-white border-b border-white pb-1 text-[10px] uppercase tracking-widest hover:opacity-50 transition-all font-mono">
              Explore Architecture
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlist.map((item) => (
              <div key={item.id} className="bg-zinc-900/20 border border-white/5 p-8 group relative flex flex-col">
                <button 
                  onClick={() => toggleWishlist(item)}
                  className="absolute top-6 right-6 text-white transition-transform hover:scale-110 z-10"
                >
                  <Heart className="w-4 h-4 fill-white" />
                </button>

                <Link to={`/product/${item.id}`} className="block mb-8 aspect-square overflow-hidden bg-zinc-900 flex items-center justify-center p-8">
                  <img src={item.image} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt={item.name} />
                </Link>

                <div className="flex-grow">
                  <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.4em] mb-2">{item.id}</p>
                  <h3 className="text-xl uppercase font-bold tracking-tight mb-4 text-white">{item.name}</h3>
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="text-xs font-mono text-zinc-400 italic">{item.price}</span>
                    <Link to={`/product/${item.id}`} className="text-[9px] uppercase tracking-widest text-white border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all font-mono">
                      Configure
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}