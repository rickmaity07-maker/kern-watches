import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 md:py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">

        <div className="flex flex-col items-center md:items-start group cursor-pointer">
          <h3 className="text-3xl font-bold tracking-[0.3em] uppercase leading-none transition-transform group-hover:scale-105">
            KERN
          </h3>
          <span className="text-[9px] tracking-[0.5em] uppercase text-white/50 mt-1 font-medium ml-1">
            watches
          </span>
        </div>

        <div className="flex gap-6">
          <FaInstagram className="w-5 h-5 cursor-pointer text-white/50 hover:-translate-y-2 hover:text-white transition-all duration-300" />
          <FaFacebookF className="w-5 h-5 cursor-pointer text-white/50 hover:-translate-y-2 hover:text-white transition-all duration-300" />
          <FaXTwitter className="w-5 h-5 cursor-pointer text-white/50 hover:-translate-y-2 hover:text-white transition-all duration-300" />

        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-[10px] tracking-widest uppercase text-white/40 text-center">
        <p>© 2026 KERN Watches.</p>
      </div>
    </footer>
  );
}