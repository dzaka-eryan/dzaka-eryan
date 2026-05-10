import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { name: 'Tentang', href: '#hero' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Mentorship', href: '#mentorship' },
    // { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-brand-bg/80 backdrop-blur-md border-bottom border-brand-border">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-mono font-bold text-2xl tracking-tighter"
      >
        D<span className="text-brand-accent">20</span>
      </motion.div>

      <div className="hidden md:flex gap-8 items-center">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-xs uppercase tracking-widest font-medium hover:text-brand-accent transition-colors duration-300"
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="flex gap-4 items-center">
        <a href="https://github.com/dzaka-eryan" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors"><Github size={18} /></a>
        <a href="https://id.linkedin.com/in/dzaka-eryan-377166104" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors"><Linkedin size={18} /></a>
        <a href="mailto:dzakaeryanseptianto@gmail.com" className="bg-brand-accent text-brand-bg px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform">
          Kontak
        </a>
      </div>
    </nav>
  );
}
