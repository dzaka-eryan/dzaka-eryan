import { motion } from 'motion/react';
import { User, Briefcase, Award } from 'lucide-react';

export default function Introduction() {
  return (
    <section id="about" className="py-24 px-6 bg-brand-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side - Image */}
        <motion.div 
          className="flex-1 w-full flex justify-center md:justify-end relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
            <div className="absolute inset-0 bg-brand-accent/20 rounded-full blur-[60px]" />
            <img 
              src="/dzaka.png" 
              alt="Dzaka Eryan" 
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_30px_rgba(0,229,255,0.3)]"
            />
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div 
          className="flex-1 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-accent flex items-center justify-center md:justify-start gap-2">
            <User size={14} /> Tentang Saya
          </h2>
          
          <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
            Halo, saya <span className="text-brand-accent">Dzaka Eryan</span>.
          </h3>
          
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            Software Engineer dengan pengalaman <strong className="text-white font-medium">7+ tahun</strong> membangun sistem skala besar. Telah dipercaya merancang arsitektur dan inovasi teknologi di berbagai perusahaan ternama seperti <span className="text-white border-b border-brand-accent/30">BRI</span>, <span className="text-white border-b border-brand-accent/30">Pertamina</span>, <span className="text-white border-b border-brand-accent/30">Lemonilo</span>, dan <span className="text-white border-b border-brand-accent/30">Greatday</span>.
          </p>

          <div className="pt-6 grid grid-cols-2 gap-4">
            <div className="glass-card p-4 rounded-xl border border-brand-border/50">
              <Briefcase className="text-brand-accent mb-2" size={24} />
              <div className="text-2xl font-bold text-white mb-1">7+ Tahun</div>
              <div className="text-xs text-gray-500 font-mono uppercase">Pengalaman</div>
            </div>
            <div className="glass-card p-4 rounded-xl border border-brand-border/50">
              <Award className="text-brand-accent mb-2" size={24} />
              <div className="text-2xl font-bold text-white mb-1">Top Tier</div>
              <div className="text-xs text-gray-500 font-mono uppercase">Perusahaan</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
