export function About() {
  return (
    <div className="pt-32 pb-20 px-6 bg-background text-foreground min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Section 1: The Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32 items-center">
          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 mb-6 block">
              Origin // 03
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none mb-8">
              Mechanical <br /> Truth.
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed font-light mb-6">
              Kern was born from a singular obsession: the removal of the unnecessary. 
              In an industry often defined by ornate branding and heritage marketing, 
              we chose to focus on the architecture of time itself.
            </p>
            <p className="text-zinc-500 leading-relaxed font-light">
              Formerly established under a personal name, the brand evolved into 
              <strong> KERN </strong> — a nod to the German word for "Core." This 
              transition reflects our commitment to technical design and the 
              engineering principles of Schweinfurt and Charlotte.
            </p>
          </div>
          <div className="aspect-square bg-zinc-900 border border-white/5 flex items-center justify-center p-12">
            <div className="text-center">
                <h2 className="text-8xl font-bold tracking-tighter text-white/5 uppercase">Kern</h2>
                <p className="text-[10px] tracking-[1em] uppercase text-white/20 -mt-4 ml-4">Architecture</p>
            </div>
          </div>
        </div>

        {/* Section 2: Design Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-32">
          <div className="bg-background p-12">
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-6">01 // Industrial</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              We favor sandblasted titanium and dark industrial finishes. Our 
              aesthetic is derived from the workshop, not the ballroom.
            </p>
          </div>
          <div className="bg-background p-12">
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-6">02 // Sterile</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Logos are secondary. Function is primary. Our dials remain "sterile" 
              to emphasize the precision of the milled indices and the geometry of the hands.
            </p>
          </div>
          <div className="bg-background p-12">
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-6">03 // Precise</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Every dimension is calculated for a 6.20mm profile. Every movement 
              is regulated for chronometric performance. No compromises.
            </p>
          </div>
        </div>

        {/* Section 3: The Technical Designer */}
        <div className="border-t border-white/10 pt-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-8">Engineering Lead</h2>
            <p className="text-zinc-500 leading-relaxed italic mb-8">
              "A watch is not a piece of jewelry; it is a high-fidelity instrument 
              that happens to be worn on the wrist. If a component doesn't serve 
              a mechanical or structural purpose, it doesn't belong on a Kern."
            </p>
            <div className="flex gap-12">
                <div>
                    <p className="text-[10px] tracking-widest uppercase text-zinc-600">Location</p>
                    <p className="text-sm uppercase">Charlotte / Schweinfurt</p>
                </div>
                <div>
                    <p className="text-[10px] tracking-widest uppercase text-zinc-600">Focus</p>
                    <p className="text-sm uppercase">Technical Design</p>
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}