import { Link } from 'react-router-dom';
import { Shield, Clock, Compass, Box, ArrowLeft } from 'lucide-react';

export function Specsheet() {
  return (
    <div className="pt-32 pb-20 px-6 bg-background text-foreground min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button for better UX */}
        <Link to="/" className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-3 h-3" />
          Back to Collection
        </Link>

        {/* Section 1: Header with Technical Label */}
        <header className="mb-24">
          <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 mb-4 block font-mono">
            Technical Datasheet // K-01.GEN1
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none mb-8">
            Complete <br /> Specifications
          </h1>
          <p className="text-zinc-400 max-w-xl text-lg leading-relaxed font-light">
            A comprehensive breakdown of the K-01 series. Every component is 
            engineered to the strict tolerances required by our 6.20mm architecture.
          </p>
        </header>

        {/* Section 2: The Core Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 mb-32">
          <div className="bg-background p-10 flex flex-col gap-4">
            <Clock className="w-5 h-5 text-zinc-500" />
            <div>
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-zinc-500">Movement</h3>
              <p className="text-2xl font-mono">KM-01.88</p>
            </div>
          </div>
          <div className="bg-background p-10 flex flex-col gap-4">
            <Box className="w-5 h-5 text-zinc-500" />
            <div>
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-zinc-500">Case Height</h3>
              <p className="text-2xl font-mono">6.20mm</p>
            </div>
          </div>
          <div className="bg-background p-10 flex flex-col gap-4">
            <Shield className="w-5 h-5 text-zinc-500" />
            <div>
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-zinc-500">Material</h3>
              <p className="text-2xl font-mono">Grade 5 Ti</p>
            </div>
          </div>
          <div className="bg-background p-10 flex flex-col gap-4">
            <Compass className="w-5 h-5 text-zinc-500" />
            <div>
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-zinc-500">Water Resistance</h3>
              <p className="text-2xl font-mono">100m / 10 ATM</p>
            </div>
          </div>
        </div>

        {/* Section 3: Deep Technical Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start mb-32">
          {/* Industrial Blueprint Placeholder */}
          <div className="aspect-[4/5] bg-zinc-900 border border-white/5 p-12 flex flex-col justify-between">
             <div className="border-t border-white/20 pt-4">
                <p className="text-[10px] tracking-widest uppercase text-white/40">Isometric View // Case Profile</p>
             </div>
             
             {/* Abstract Minimalist Watch Line-Art */}
             <div className="flex flex-col items-center gap-2">
                <div className="w-48 h-[1px] bg-white/30"></div>
                <div className="w-40 h-28 border border-white/10 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border border-white/10 border-dashed"></div>
                    </div>
                </div>
                <div className="w-48 h-[1px] bg-white/30"></div>
             </div>
             
             <div className="border-b border-white/20 pb-4">
                <p className="text-[10px] tracking-widest uppercase text-white/40 text-right">Drawing Ref: KERN-K01-ARCH</p>
             </div>
          </div>
          
          <div className="space-y-16">
            <section className="border-l-2 border-white pl-6">
              <h2 className="text-[12px] tracking-[0.3em] uppercase mb-4 text-zinc-300">Exterior Architecture</h2>
              <ul className="space-y-4 text-sm font-light text-zinc-500 font-mono">
                <li><span className="text-zinc-300 uppercase tracking-tighter mr-2">Diameter:</span> 38.5mm</li>
                <li><span className="text-zinc-300 uppercase tracking-tighter mr-2">Lug-to-Lug:</span> 46.2mm</li>
                <li><span className="text-zinc-300 uppercase tracking-tighter mr-2">Lug Width:</span> 20.0mm</li>
                <li><span className="text-zinc-300 uppercase tracking-tighter mr-2">Finish:</span> Dark Sandblast</li>
              </ul>
            </section>

            <section className="border-l-2 border-white pl-6">
              <h2 className="text-[12px] tracking-[0.3em] uppercase mb-4 text-zinc-300">Dial & Handset</h2>
              <p className="text-zinc-500 leading-relaxed font-light mb-4">
                Sterile matte black dial with milled indices filled with Grade X1 Super-LumiNova. 
                Custom skeletonized hands, diamond-cut for a non-reflective finish.
              </p>
            </section>

            <section className="border-l-2 border-white pl-6">
              <h2 className="text-[12px] tracking-[0.3em] uppercase mb-4 text-zinc-300">Movement Calibration</h2>
              <p className="text-zinc-500 leading-relaxed font-light">
                High-beat mechanical caliber, regulated in five positions. Modified 
                rotor with Kern-Standard industrial grey finish.
              </p>
            </section>
          </div>
        </div>

        {/* Section 4: Return Link */}
        <footer className="pt-20 border-t border-white/10 text-center">
            <Link 
              to="/"
              className="inline-block px-12 py-5 border border-white/20 text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-white hover:text-black transition-all duration-500"
            >
                Return to Collection
            </Link>
        </footer>

      </div>
    </div>
  );
}