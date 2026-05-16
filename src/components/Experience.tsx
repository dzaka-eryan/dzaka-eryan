import { useState } from 'react';
import { motion } from 'motion/react';
import Section from './Section';
import { ChevronLeft, ChevronRight, Building2, Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "Vhiweb Digital Solution | PT. Duta Digital Nusantara",
    period: "Februari 2026 ß- Sekarang",
    role: "Senior Software Engineer",
    desc: "Memimpin tim pengembang dalam membangun arsitektur microservices berskala besar, mengoptimalkan pipeline CI/CD, dan mentor engineer junior.",
    tech: ["Java", "Php", "AWS", "Kubernetes", "Docker", "Next.js", "Postgresql", "Mongodb", "Kafka"]
  },
  {
    company: "PT. Bank Rakyat Indonesia",
    period: "Desember 2025 - Februari 2026",
    role: "Golang Developer",
    desc: "Bertanggung jawab atas ketersediaan sistem pembayaran dengan throughput tinggi, mencapai uptime 99.99% dan efisiensi query database.",
    tech: ["Golang", "Kafka", "Redis", "Postgresql"]
  },
  {
    company: "PT. Pertamina Bina Medika IHC",
    period: "Maret 2023 - November 2025",
    role: "Senior Software Engineer",
    desc: "Membangun sistem manajemen data dan analisis performa rumah sakit, memimpin migrasi sistem lama ke teknologi modern, serta berkontribusi pada platform kesehatan digital nasional.",
    tech: ["Nodejs", "Golang", "Kubernetes", "Postgresql", "AWS", "GCP", "Docker"]
  },
  {
    company: "PT. Lemonilo Indonesia Sehat",
    period: "November 2020 - Februari 2023",
    role: "Senior Software Engineer",
    desc: "Memperkuat platform e-commerce dengan fitur baru dan peningkatan kinerja. Mengembangkan sistem manajemen inventaris dan logistik untuk mendukung ekspansi bisnis.",
    tech: ["Nodejs", "Golang", "Expressjs", "React", "Ant Design", "GCP", "Docker", "Typescript"]
  },
  {
    company: "PT. People Intelligence Indonesia | Greatday",
    period: "September 2018 - Oktober 2020",
    role: "Software Engineer",
    desc: "Memperkuat platform HR dengan fitur baru dan peningkatan kinerja. Mengembangkan sistem manajemen inventaris dan logistik untuk mendukung ekspansi bisnis.",
    tech: ["Nodejs", "Nestjs", "React", "Typescript", "GCP", "Docker", "Typescript"]
  }

];

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % experiences.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);

  return (
    <Section id="experience" label="01 / Pengalaman Profesional">
      <div className="relative">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset }) => {
              if (offset.x < -50) next();
              else if (offset.x > 50) prev();
            }}
            animate={{ x: `-${currentIndex * (window.innerWidth < 768 ? 100 : 50)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="min-w-full md:min-w-[calc(50%-12px)] glass-card p-10 hover:border-brand-accent/50 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-xl bg-brand-muted flex items-center justify-center text-brand-accent">
                    <Building2 size={24} />
                  </div>
                  <span className="font-mono text-[10px] text-gray-500 border border-brand-border px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight mb-2">{exp.role}</h3>
                <div className="text-brand-accent font-mono text-sm mb-6 flex items-center gap-2">
                  <Briefcase size={14} />
                  {exp.company}
                </div>

                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  {exp.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono bg-brand-muted/50 text-gray-400 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center hover:bg-brand-accent hover:text-brand-bg transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center hover:bg-brand-accent hover:text-brand-bg transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </Section>
  );
}
