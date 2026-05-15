import { Cpu, Activity, Zap, HardDrive } from 'lucide-react';

export function Hardware() {
  return (
    <div className="pt-32 pb-20 px-6 bg-background text-foreground min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Section 1: Hero Header */}
        <header className="mb-24 border-b border-white/10 pb-12">
          <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 mb-4 block">
            Internal Systems // 02
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none mb-8">
            The <br /> Engine
          </h1>
          <p className="text-zinc-400 max-w-xl text-lg leading-relaxed font-light">
            Beyond the sterile aesthetic lies a high-frequency mechanical heart. 
            Calibrated for 28,800 vibrations per hour to ensure a sweeping second hand 
            and chronometric reliability.
          </p>
        </header>

        {/* Section 2: Movement View */}
        <div className="mb-32 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 aspect-video bg-zinc-900/50 border border-white/5 rounded-sm flex items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                <div className="w-[500px] h-[500px] border border-white rounded-full animate-spin-slow"></div>
                <div className="absolute w-[300px] h-[300px] border border-dashed border-white rounded-full"></div>
            </div>
            <div className="relative text-center">
                <p className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-2">Core Caliber</p>
                <h2 className="text-4xl font-mono tracking-tighter">KM-01.88</h2>
            </div>
          </div>

          <div className="space-y-8">
            <div className="border-l border-white/20 pl-6">
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 mb-1">Frequency</h3>
              <p className="text-xl font-mono italic">4Hz // 28,800 VPH</p>
            </div>
            <div className="border-l border-white/20 pl-6">
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 mb-1">Power Reserve</h3>
              <p className="text-xl font-mono italic">42 Hours</p>
            </div>
            <div className="border-l border-white/20 pl-6">
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 mb-1">Jewels</h3>
              <p className="text-xl font-mono italic">24 Synthetic Rubies</p>
            </div>
          </div>
        </div>

        {/* Section 3: Component Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-32">
          
          <div className="bg-background p-12">
            <Cpu className="w-6 h-6 mb-6 text-white/50" />
            <h4 className="text-[12px] tracking-[0.3em] uppercase mb-4">Precision Regulation</h4>
            <p className="text-zinc-500 font-light leading-relaxed">
              Each movement is regulated in five positions to ensure a maximum deviation of 
              -10/+20 seconds per day. The balance wheel is crafted from Glucydur.
            </p>
          </div>

          <div className="bg-background p-12">
            <Activity className="w-6 h-6 mb-6 text-white/50" />
            <h4 className="text-[12px] tracking-[0.3em] uppercase mb-4">Anti-Magnetic Shield</h4>
            <p className="text-zinc-500 font-light leading-relaxed">
              Protected by a soft-iron inner cage, the caliber remains unaffected by 
              everyday magnetic fields up to 4,800 A/m.
            </p>
          </div>

          <div className="bg-background p-12">
            <Zap className="w-6 h-6 mb-6 text-white/50" />
            <h4 className="text-[12px] tracking-[0.3em] uppercase mb-4">Incabloc Shock System</h4>
            <p className="text-zinc-500 font-light leading-relaxed">
              Designed for the professional environment. The spring-loaded mounting 
              system protects the balance wheel's delicate pivots.
            </p>
          </div>

          <div className="bg-background p-12">
            <HardDrive className="w-6 h-6 mb-6 text-white/50" />
            <h4 className="text-[12px] tracking-[0.3em] uppercase mb-4">Unidirectional Winding</h4>
            <p className="text-zinc-500 font-light leading-relaxed">
              A high-efficiency ball-bearing rotor system ensures maximum energy 
              harvesting from minimal wrist movement.
            </p>
          </div>
        </div>

        {/* Section 4: Material Footer */}
        <div className="flex flex-col md:flex-row gap-12 items-end justify-between border-t border-white/10 pt-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold uppercase tracking-tighter mb-6">Material Integrity</h2>
            <p className="text-zinc-400 font-light leading-relaxed">
              We utilize Grade 5 Titanium for its weight-to-strength ratio, 
              biocompatibility, and resistance to corrosion.
            </p>
          </div>
          <div className="text-right">
             <span className="text-6xl font-bold tracking-tighter text-white/5">Ti-6Al-4V</span>
          </div>
        </div>

      </div>
    </div>
  );
}