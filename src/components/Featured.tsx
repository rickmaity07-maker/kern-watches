import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const components = [
  { id: 'k-01', name: 'Core Caliber', spec: '28,800 VPH // 2.85mm', img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800' },
  { id: 'k-02', name: 'Grade 5 Titanium', spec: 'Ultra-Thin Case', img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=800' },
  { id: 'k-03', name: 'Sterile Dial', spec: 'Milled Indices', img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800' },
];

export function Featured() {
  return (
    <section className="py-24 md:py-32 px-6 bg-muted border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-white/50 mb-4 font-bold">Architecture</p>
          <h2 className="text-4xl md:text-5xl tracking-tight font-medium text-white">Hardware Components</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {components.map((item, i) => (
            <Link 
              key={item.id} 
              to={`/product/${item.id}`} // Takes user to the Inspect page
              className="group cursor-crosshair flex flex-col"
            >
              <motion.div 
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative aspect-[4/5] bg-black mb-6 overflow-hidden border border-white/10 transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-[0_30px_60px_-15px_rgba(255,255,255,0.15)] group-hover:border-white/50">
                  <img 
                    src={item.img} 
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <span className="text-xs tracking-[0.2em] uppercase font-bold border-b-2 border-white pb-1 text-white">Inspect Model</span>
                  </div>
                </div>
                
                <div className="text-center md:text-left transition-transform duration-300 group-hover:translate-x-2">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-white/50 font-bold">{item.id}</p>
                  <h3 className="text-xl tracking-tight font-medium text-white my-1">{item.name}</h3>
                  <p className="text-white/70 text-xs tracking-widest uppercase">{item.spec}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}