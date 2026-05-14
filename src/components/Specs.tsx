import { motion } from 'framer-motion';

const data = [
  { id: 'T-01', metric: 'Case Height', value: '6.20mm', detail: 'Includes sapphire crystal' },
  { id: 'T-02', metric: 'Dial Seat', value: '0.40mm', detail: 'Recessed tolerance' },
  { id: 'T-03', metric: 'Amplitude', value: '290°', detail: 'Average flat position' },
  { id: 'T-04', metric: 'Power Reserve', value: '42 Hours', detail: 'Single barrel delivery' },
];

export function Specs() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-white/50 mb-4 font-bold">Data Sheet</p>
          <h2 className="text-4xl md:text-5xl tracking-tight font-medium text-white">Tolerances</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group bg-muted border border-white/10 p-6 md:p-8 cursor-pointer transition-all duration-300 hover:bg-white/5 hover:border-white/50 hover:-translate-y-2 hover:shadow-2xl"
            >
              <span className="text-[10px] font-mono text-white/40 block mb-8">{item.id}</span>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-2">{item.metric}</p>
              <h3 className="text-3xl font-medium tracking-tighter mb-2 text-white">{item.value}</h3>
              <p className="text-xs text-white/40">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}