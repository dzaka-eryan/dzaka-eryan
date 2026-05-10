import Section from './Section';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "Optimasi React untuk Perangkat Low-End",
    date: "12 MARET, 2024",
    tag: "PERFORMA",
    readTime: "BACA 8 MENIT"
  },
  {
    title: "Skalabilitas Go Microservices dengan gRPC",
    date: "28 FEB, 2024",
    tag: "ARSITEKTUR",
    readTime: "BACA 12 MENIT"
  },
  {
    title: "Masa Depan Edge Computing",
    date: "15 JAN, 2024",
    tag: "CLOUD",
    readTime: "BACA 6 MENIT"
  }
];

export default function Blog() {
  return (
    <Section id="blog" label="04 / Wawasan & Blog">
      <div className="flex flex-col border-t border-brand-border">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-brand-border hover:bg-white/[0.02] px-4 -mx-4 transition-colors cursor-pointer"
          >
            <div className="flex flex-col gap-2 mb-4 md:mb-0">
              <div className="flex items-center gap-4 text-[10px] font-mono text-gray-500">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-brand-border rounded-full" />
                <span className="text-brand-accent tracking-widest">{post.tag}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-brand-accent transition-colors">
                {post.title}
              </h3>
            </div>

            <div className="flex items-center gap-8">
              <span className="hidden lg:block text-[10px] font-mono text-gray-600">{post.readTime}</span>
              <div className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-bg transition-all duration-300">
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="text-sm font-mono uppercase tracking-[0.3em] text-gray-500 hover:text-brand-accent transition-colors">
          LIHAT SEMUA PENGETAHUAN →
        </button>
      </div>
    </Section>
  );
}
