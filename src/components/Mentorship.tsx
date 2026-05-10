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
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="w-full">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
            BELAJAR <br />
            <span className="text-white bg-brand-accent/20 px-2">TANPA BATAS</span> BERSAMA AHLI
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed font-light mx-auto">
            Terbuka untuk umum! Baik Anda mahasiswa yang sedang berjuang dengan Skripsi/Tugas Akhir, atau profesional yang ingin meningkatkan skill ke level Senior. Saya membantu Anda menguasai teknologi modern dengan pendekatan praktis.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
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

          <div className="mt-16">
            <Link 
              to="/register-mentorship" 
              className="inline-block bg-brand-accent text-brand-bg px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:translate-y-[-4px] hover:shadow-[0_10px_40px_-10px_rgba(0,229,255,0.5)] transition-all duration-300"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
