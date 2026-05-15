import { Maximize2, Layers, ShieldCheck, Ruler } from 'lucide-react';

export function Architecture() {
  return (
    <div className="pt-32 pb-20 px-6 bg-background text-foreground min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Section 1: Hero Header */}
        <header className="mb-24">
          <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 mb-4 block">
            Technical Specification // 01
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none mb-8">
            Case <br /> Architecture
          </h1>
          <p className="text-zinc-400 max-w-xl text-lg leading-relaxed font-light">
            A pursuit of the ultra-thin. Every micron accounted for. The Kern K-01 series 
            is a study in structural reduction without compromising mechanical integrity.
          </p>
        </header>

        {/* Section 2: Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 mb-32">
          <div className="bg-background p-10 flex flex-col gap-4">
            <Ruler className="w-5 h-5 text-zinc-500" />
            <div>
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-zinc-500">Thickness</h3>
              <p className="text-2xl font-mono">6.20mm</p>
            </div>
          </div>
          <div className="bg-background p-10 flex flex-col gap-4">
            <Maximize2 className="w-5 h-5 text-zinc-500" />
            <div>
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-zinc-500">Diameter</h3>
              <p className="text-2xl font-mono">38.5mm</p>
            </div>
          </div>
          <div className="bg-background p-10 flex flex-col gap-4">
            <ShieldCheck className="w-5 h-5 text-zinc-500" />
            <div>
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-zinc-500">Material</h3>
              <p className="text-2xl font-mono">Grade 5 Ti</p>
            </div>
          </div>
          <div className="bg-background p-10 flex flex-col gap-4">
            <Layers className="w-5 h-5 text-zinc-500" />
            <div>
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-zinc-500">Crystal</h3>
              <p className="text-2xl font-mono">Sapphire</p>
            </div>
          </div>
        </div>

        {/* Section 3: Detailed Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div className="aspect-[4/5] bg-zinc-900 border border-white/5 flex items-center justify-center p-12">
             {/* Replace with your Fusion 360 render */}
             <div className="w-full h-full border border-white/10 border-dashed flex items-center justify-center relative">
                <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-700 absolute top-4 left-4">Cross-Section View</span>
                <div className="w-1/2 h-[2px] bg-white/20 relative">
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-white/40 rounded-full"></div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/40 rounded-full"></div>
                </div>
             </div>
          </div>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-[12px] tracking-[0.3em] uppercase mb-4 border-l-2 border-white pl-4">The Monobloc Midcase</h2>
              <p className="text-zinc-500 leading-relaxed font-light">
                Milled from a single block of aerospace-grade titanium. The integrated lugs flow 
                seamlessly from the midcase, reducing the number of failure points and 
                maintaining a sterile, industrial profile.
              </p>
            </section>

            <section>
              <h2 className="text-[12px] tracking-[0.3em] uppercase mb-4 border-l-2 border-white pl-4">Zero-Tolerance Dial Seat</h2>
              <p className="text-zinc-500 leading-relaxed font-light">
                The dial sits precisely 0.40mm from the crystal. This recessed tolerance 
                creates the illusion of the indices floating against the sapphire, 
                enhancing the depth of a minimalist "sterile" face.
              </p>
            </section>

            <section>
              <h2 className="text-[12px] tracking-[0.3em] uppercase mb-4 border-l-2 border-white pl-4">Surface Finishing</h2>
              <p className="text-zinc-500 leading-relaxed font-light">
                A dark industrial sandblast finish provides a non-reflective, utilitarian 
                aesthetic. Designed for longevity and scratch resistance in demanding environments.
              </p>
            </section>
          </div>
        </div>

        {/* Section 4: Footer CTA */}
        <footer className="pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-md">
                <h4 className="text-xl font-bold uppercase tracking-tight mb-2">Build for the Professional</h4>
                <p className="text-zinc-500 text-sm">Kern watches are engineered for those who value mechanical truth over ornate branding.</p>
            </div>
            <button className="px-8 py-4 bg-white text-black text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-zinc-200 transition-colors">
                View Movements
            </button>
        </footer>

      </div>
    </div>
  );
}