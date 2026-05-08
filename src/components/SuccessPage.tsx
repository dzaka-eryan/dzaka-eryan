import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Instagram, Mail } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-gray-200 flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20 
          }}
          className="mb-8 flex justify-center"
        >
          <div className="w-24 h-24 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent border border-brand-accent/20">
            <CheckCircle2 size={48} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            PERMINTAAN <span className="text-brand-accent italic font-serif">DITERIMA</span>
          </h1>
          <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
            Terima kasih telah mendaftar! Saya sudah menerima detail Anda. Saya akan meninjau tujuan belajar Anda dan menghubungi Anda kembali dalam <span className="text-white font-medium">1-2 hari kerja</span> melalui WhatsApp atau Email.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <div className="p-6 glass-card text-left">
              <div className="w-8 h-8 rounded bg-brand-muted flex items-center justify-center text-brand-accent mb-4">
                <Mail size={16} />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Cek Inbox</h4>
              <p className="text-xs text-gray-500">Copy konfirmasi akan dikirimkan ke email Anda.</p>
            </div>
            <div className="p-6 glass-card text-left">
              <div className="w-8 h-8 rounded bg-brand-muted flex items-center justify-center text-brand-accent mb-4">
                <Instagram size={16} />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Update Progress</h4>
              <p className="text-xs text-gray-500">Follow Instagram saya untuk info slot mentorship.</p>
            </div>
          </div>

          <Link 
            to="/" 
            className="inline-flex items-center gap-3 bg-brand-accent text-brand-bg px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:translate-y-[-4px] hover:shadow-[0_10px_40px_-10px_rgba(0,229,255,0.5)] transition-all duration-300"
          >
            Kembali ke Beranda <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
