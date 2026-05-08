import { Link } from 'react-router-dom';
import Section from './Section';
import { CheckCircle2, Calendar, Coffee, ShieldCheck } from 'lucide-react';

const features = [
  { 
    title: "Bimbingan 1-on-1", 
    desc: "Roadmap belajar personal, mulai dari dasar hingga tingkat lanjut.",
    icon: <Coffee className="text-brand-accent" />
  },
  { 
    title: "Tugas Akhir & Skripsi", 
    desc: "Bimbingan intensif untuk pengerjaan project akhir kuliah dan skripsi IT.",
    icon: <CheckCircle2 className="text-brand-accent" />
  },
  { 
    title: "Persiapan Karier", 
    desc: "Review CV, persiapan interview teknis, dan portofolio profesional.",
    icon: <ShieldCheck className="text-brand-accent" />
  },
  { 
    title: "Jadwal Fleksibel", 
    desc: "Sesi belajar yang menyesuaikan dengan kesibukan Anda.",
    icon: <Calendar className="text-brand-accent" />
  }
];

export default function Mentorship() {
  return (
    <Section id="mentorship" label="03 / Mentorship & Belajar Privat">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
            BELAJAR <br />
            <span className="text-white bg-brand-accent/20 px-2">TANPA BATAS</span> BERSAMA AHLI
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
            Terbuka untuk umum! Baik Anda mahasiswa yang sedang berjuang dengan Skripsi/Tugas Akhir, atau profesional yang ingin meningkatkan skill ke level Senior. Saya membantu Anda menguasai teknologi modern dengan pendekatan praktis.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1">{f.icon}</div>
                <div>
                  <h4 className="font-bold mb-1">{f.title}</h4>
                  <p className="text-xs text-gray-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link 
              to="/register-mentorship" 
              className="inline-block bg-brand-accent text-brand-bg px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:translate-y-[-4px] hover:shadow-[0_10px_40px_-10px_rgba(0,229,255,0.5)] transition-all duration-300"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>

        <div className="flex-1 w-full relative">
          <div className="aspect-square glass-card p-1 items-stretch flex relative grayscale-[0.8] hover:grayscale-0 transition-all duration-700">
             <img 
              src="https://picsum.photos/seed/mentor/1000/1000" 
              alt="Mentorship" 
              className="w-full h-full object-cover rounded-xl opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="bg-brand-bg/80 backdrop-blur border border-brand-border p-8 rounded-lg max-w-sm">
                  <div className="font-mono text-xs text-brand-accent mb-2">KETERSEDIAAN</div>
                  <div className="text-2xl font-bold mb-4">Sisa 1 Slot</div>
                  <div className="h-1 bg-brand-border rounded-full overflow-hidden">
                    <div className="w-[92%] h-full bg-brand-accent" />
                  </div>
               </div>
            </div>
          </div>
          {/* Ornamental elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-brand-accent rounded-tr-3xl" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-brand-accent rounded-bl-3xl" />
        </div>
      </div>
    </Section>
  );
}
