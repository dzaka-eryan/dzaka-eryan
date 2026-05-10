import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 15) + 5;
        if (next >= 100) {
          clearInterval(timer);
          // Beri jeda sebentar setelah 100% sebelum memanggil onComplete
          setTimeout(onComplete, 600);
          return 100;
        }
        return next;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="text-brand-accent text-6xl md:text-8xl font-black font-mono tracking-tighter mb-8 shadow-brand-accent drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]">
        {Math.min(progress, 100)}%
      </div>
      
      <div className="w-64 md:w-96 h-1 bg-brand-border rounded-full overflow-hidden relative">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-brand-accent"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ ease: "easeOut" }}
        />
      </div>
      
      <div className="mt-6 flex flex-col items-center gap-2">
        <div className="text-xs font-mono uppercase tracking-[0.4em] text-gray-500 animate-pulse">
          Sistem Sedang Memuat...
        </div>
      </div>
    </motion.div>
  );
}
