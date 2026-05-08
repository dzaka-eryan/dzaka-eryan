import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-24 px-6 md:px-12 lg:px-24 bg-brand-muted/20 border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-24">
          <div className="max-w-sm">
            <div className="font-mono font-bold text-4xl tracking-tighter mb-6">
              D<span className="text-brand-accent">20</span>
            </div>
            <p className="text-gray-500 font-light leading-relaxed mb-8">
              Membangun produk digital performa tinggi dan membimbing generasi engineer berikutnya. Tersedia untuk konsultasi dan bimbingan privat.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors"><Github size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors"><Twitter size={20} /></a>
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-brand-accent transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-white mb-6">Navigasi</h4>
              <ul className="flex flex-col gap-4 text-sm text-gray-500 font-light">
                <li><a href="#experience" className="hover:text-white">Pengalaman</a></li>
                <li><a href="#skills" className="hover:text-white">Keahlian</a></li>
                <li><a href="#blog" className="hover:text-white">Riset & Blog</a></li>
                <li><a href="#mentorship" className="hover:text-white">Mentorship</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-white mb-6">Legal</h4>
              <ul className="flex flex-col gap-4 text-sm text-gray-500 font-light">
                <li><a href="#" className="hover:text-white">Privasi</a></li>
                <li><a href="#" className="hover:text-white">Syarat & Ketentuan</a></li>
                <li><a href="#" className="hover:text-white">Lisensi</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-12 border-t border-brand-border">
          <p className="text-[10px] font-mono text-gray-600 mb-4 md:mb-0">
            © 2024 PORTFOLIO PROFESIONAL. HAK CIPTA DILINDUNGI. 
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2 text-[10px] font-mono tracking-widest text-gray-600 hover:text-brand-accent transition-colors"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            KEMBALI KE ATAS
          </button>
        </div>
      </div>
    </footer>
  );
}
