import { useState } from 'react';
import { motion } from 'motion/react';
import Section from './Section';
import { ChevronLeft, ChevronRight, Building2, Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "Tech Lead / Senior Engineer",
    period: "2022 - Sekarang",
    role: "Senior Software Engineer",
    desc: "Memimpin tim pengembang dalam membangun arsitektur microservices berskala besar, mengoptimalkan pipeline CI/CD, dan mentor engineer junior.",
    tech: ["Go", "Kubernetes", "gRPC", "Next.js"]
  },
  {
    company: "Unicorn Startup",
    period: "2019 - 2022",
    role: "Backend Engineer",
    desc: "Bertanggung jawab atas ketersediaan sistem pembayaran dengan throughput tinggi, mencapai uptime 99.99% dan efisiensi query database.",
    tech: ["Node.js", "PostgreSQL", "Redis", "Kafka"]
  },
  {
    company: "Software Agency",
    period: "2017 - 2019",
    role: "Fullstack Developer",
    desc: "Membangun lebih dari 10 produk digital dari tahap MVP hingga peluncuran pasar untuk klien internasional.",
    tech: ["React", "Python", "Docker", "AWS"]
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
            className="flex gap-6"
            animate={{ x: `-${currentIndex * (100 / (window.innerWidth < 768 ? 1 : 2))}%` }}
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
