import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, Info, ArrowLeft } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const WATCH_DATA: any = {
  "k-01": {
    name: "Core Caliber",
    basePrice: "$1,850",
    variants: [
      { id: "silver", name: "Brushed Steel", color: "#A0A0A0", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000" },
      { id: "black", name: "DLC Stealth", color: "#1A1A1A", img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1000" }
    ],
    specs: { movement: "KM-01.88", power: "42H", height: "6.20mm" }
  },
  "k-02": {
    name: "Titanium Chassis",
    basePrice: "$2,200",
    variants: [
      { id: "matte", name: "Matte Grey", color: "#666666", img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=800" }
    ],
    specs: { movement: "KM-01.92", power: "48H", height: "5.80mm" }
  },
  "k-03": {
    name: "Sterile Dial",
    basePrice: "$1,600",
    variants: [
      { id: "mono", name: "Monochrome", color: "#D1D1D1", img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800" }
    ],
    specs: { movement: "KM-01.88", power: "42H", height: "6.20mm" }
  }
};

export function ProductDetail() {
  const { id } = useParams();
  const { addToCart, toggleWishlist, wishlist } = useStore();
  
  const product = WATCH_DATA[id as string] || WATCH_DATA["k-01"];
  const [activeVariant, setActiveVariant] = useState(product.variants[0]);

  // Check if current watch is already in wishlist
  const isWishlisted = wishlist.some(item => item.id === id);

  const handleAddToCart = () => {
    addToCart({
      id: id || 'unknown',
      name: product.name,
      price: product.basePrice,
      image: activeVariant.img,
      variant: activeVariant.name
    });
  };

  const handleWishlist = () => {
    toggleWishlist({
      id: id || 'unknown',
      name: product.name,
      price: product.basePrice,
      image: activeVariant.img,
      variant: activeVariant.name
    });
  };

  return (
    <div className="pt-32 pb-20 px-6 bg-background text-foreground min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-zinc-500 hover:text-white mb-12 transition-colors font-mono">
          <ArrowLeft className="w-3 h-3" /> Return to Gallery
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="aspect-square bg-zinc-900/30 border border-white/5 flex items-center justify-center p-12 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeVariant.id}
                src={activeVariant.img}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </AnimatePresence>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 mb-2 font-mono">{id} // Spec Mode</span>
            <h1 className="text-6xl font-bold uppercase tracking-tighter mb-4">{product.name}</h1>
            <p className="text-xl font-mono text-zinc-500 mb-10">{product.basePrice}</p>

            <div className="mb-12">
              <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-4 font-mono">Select Finish</p>
              <div className="flex gap-4">
                {product.variants.map((v: any) => (
                  <button 
                    key={v.id}
                    onClick={() => setActiveVariant(v)}
                    className={`w-10 h-10 border transition-all ${activeVariant.id === v.id ? 'border-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.1)]' : 'border-white/10 opacity-40'}`}
                    style={{ backgroundColor: v.color }}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-px bg-white/10 border border-white/10 mb-12 font-mono text-[9px] uppercase text-center">
              <div className="bg-background p-5"><span className="text-zinc-600 block mb-1 font-bold">Caliber</span>{product.specs.movement}</div>
              <div className="bg-background p-5"><span className="text-zinc-600 block mb-1 font-bold">Reserve</span>{product.specs.power}</div>
              <div className="bg-background p-5"><span className="text-zinc-600 block mb-1 font-bold">Profile</span>{product.specs.height}</div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <button onClick={handleAddToCart} className="flex-1 bg-white text-black py-5 text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-200 flex items-center justify-center gap-3 transition-colors">
                  <ShoppingBag className="w-4 h-4" /> Add to Cart
                </button>
                <button onClick={handleWishlist} className={`px-8 border transition-all ${isWishlisted ? 'border-white text-white' : 'border-white/10 text-zinc-600 hover:text-white'}`}>
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>
              <button className="w-full border border-white/10 py-5 text-[10px] uppercase tracking-widest text-zinc-500 hover:text-white hover:border-white flex items-center justify-center gap-3 transition-all">
                <Info className="w-4 h-4" /> Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}