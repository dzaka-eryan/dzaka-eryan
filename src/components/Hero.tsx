import { motion } from 'motion/react';
import { Terminal, Code2, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-accent/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-brand-border rounded-full scale-150 border-dashed animate-[spin_60s_linear_infinite]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center mx-auto -mt-32 md:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-muted border border-brand-border mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
          <span className="text-[10px] md:text-sm font-mono uppercase tracking-[0.2em] text-gray-400">
            Senior Software Engineer • 7+ Tahun Pengalaman
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Engineering <span className="text-brand-accent italic font-serif">Scalability</span> <br />
          & Tech Leadership.
          <div className="mt-4 text-sm font-mono uppercase tracking-[0.4em] text-gray-500">Let's Connect</div>
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <a href="#experience" className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-brand-accent transition-colors duration-300">
            <Code2 size={20} />
            PENGALAMAN SAYA
          </a>
          <a href="#mentorship" className="flex items-center justify-center gap-3 bg-brand-muted border border-brand-border px-8 py-4 rounded-xl font-bold hover:border-brand-accent transition-colors duration-300">
            <Rocket size={20} />
            IKUT KELAS PRIVAT
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-widest font-mono">Gulir untuk eksplorasi</span>
        <div className="w-px h-12 bg-brand-border relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-brand-accent"
            animate={{ translateY: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </div>
  );
}
