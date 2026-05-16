import { useState } from 'react';
import { motion } from 'motion/react';
import Section from './Section';
import {
  Cpu, Server, Layout, MessageSquareCode, ChevronLeft, ChevronRight,
  Database, Globe, Layers, Cloud, Code2, Terminal, Zap, Fingerprint
} from 'lucide-react';

const techLogos = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", name: "Golang" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Java" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", name: "Spring Boot" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg", name: "NestJS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", name: "Next.js", filter: "invert(1)" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", name: "Terraform" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", name: "AWS", filter: "invert(1)" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", name: "Google Cloud" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", name: "Kubernetes" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", name: "TypeScript" },
];

const skillGroups = [
  {
    category: "Arsitektur Frontend",
    icon: <Layout size={20} />,
    skills: ["React/Next.js", "TypeScript", "Audit Performa", "WebAssembly", "Manajemen State"]
  },
  {
    category: "Backend & DevOps",
    icon: <Server size={20} />,
    skills: ["Node.js/Go", "Java Spring Boot", "Nestjs", "Microservices", "Docker/K8s", "Pipeline CI/CD", "Cloud Native (AWS/GCP)"]
  },
  {
    category: "Database",
    icon: <Database size={20} />,
    skills: ["PostgreSQL/Redis", "Desain Skema", "Distributed Locking", "GraphQL", "Strategi Caching"]
  },
  {
    category: "System Design",
    icon: <Globe size={20} />,
    skills: ["Review Kode", "Desain Sistem", "Kepemimpinan Agile", "TDD/BDD", "Developer Experience"]
  }
];

export default function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % skillGroups.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + skillGroups.length) % skillGroups.length);

  return (
    <Section id="skills" label="02 / Keahlian">
      <div className="relative">
        <div className="overflow-hidden bg-brand-border">
          <motion.div
            className="flex gap-px cursor-grab active:cursor-grabbing"
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
            {skillGroups.map((group, i) => (
              <div
                key={i}
                className="min-w-full md:min-w-[50%] bg-brand-bg p-8 md:p-12 hover:bg-brand-muted/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded bg-brand-muted flex items-center justify-center text-brand-accent">
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wider">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="group flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-brand-accent rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all" />
                      <span className="font-mono text-sm text-gray-400 group-hover:text-white transition-colors">{skill}</span>
                    </div>
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
            className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center hover:bg-brand-accent hover:text-brand-bg transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center hover:bg-brand-accent hover:text-brand-bg transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Tech Marquee Moved Below */}
      <div className="relative mt-24 overflow-hidden py-12 border-y border-brand-border bg-brand-muted/20">
        <motion.div
          className="flex gap-20 items-center whitespace-nowrap"
          animate={{ x: [0, -1500] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Double the list for seamless loop */}
          {[...techLogos, ...techLogos].map((tech, i) => (
            <div key={i} className="flex flex-col items-center gap-4 group">
              <div className="w-12 h-12 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                  style={tech.filter ? { filter: tech.filter } : {}}
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-brand-accent transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
