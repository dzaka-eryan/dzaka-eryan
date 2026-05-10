import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Send, BookOpen, GraduationCap, Code, Briefcase, Loader2 } from 'lucide-react';

export default function MentorshipRegistration() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    goal: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using Resend API (via local proxy to avoid CORS)
      const response = await fetch('/api/resend/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer re_cHBULQ3i_KPjYf2cVCpYC8QNAtd5Lx3nW`
        },
        body: JSON.stringify({
          from: 'Mentorship <onboarding@resend.dev>',
          to: 'dzakaeryanseptianto@gmail.com',
          subject: 'Pendaftaran Mentorship Baru',
          html: `
            <h2>Pendaftaran Mentorship Baru</h2>
            <p><strong>Nama:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Tipe Bimbingan:</strong> ${formData.type}</p>
            <p><strong>Tujuan:</strong> ${formData.goal}</p>
          `
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Gagal mengirim email');
      }

      setIsSubmitting(false);
      navigate('/success');
    } catch (error: any) {
      console.error('Failed to send email:', error);
      alert('Gagal mengirim email: ' + error.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-gray-200 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-accent transition-colors mb-12 group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-xs uppercase tracking-widest">Kembali ke Beranda</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                PENDAFTARAN <span className="text-brand-accent italic font-serif">MENTORSHIP</span>
              </h1>
              <div className="flex items-center gap-3">
                <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-red-500 font-bold">Hanya Sisa 1 Slot Terakhir</span>
              </div>
            </div>

            {/* Mini Calendar UI */}
            <div className="glass-card p-4 flex flex-col gap-3 min-w-[240px]">
              <div className="font-mono text-[9px] uppercase tracking-widest text-gray-500 border-b border-brand-border pb-2">Jadwal Belajar (WIB)</div>
              <div className="grid grid-cols-7 gap-1">
                {['S', 'S', 'R', 'K', 'J', 'S', 'M'].map((day, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <span className="text-[8px] text-gray-600 uppercase">{day}</span>
                    <div className={`w-6 h-6 rounded-sm flex items-center justify-center text-[10px] font-bold ${i < 2 ? 'bg-brand-accent text-brand-bg' : 'bg-brand-muted text-gray-700'}`}>
                      {i < 2 ? '✓' : ''}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-[10px] text-gray-400 italic">Tersedia setiap Senin & Selasa Malam</div>
            </div>
          </div>

          <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
            Amankan <span className="text-white font-medium">slot terakhir</span> Anda dengan mengisi formulir pendaftaran bimbingan di bawah ini.
          </p>

          {/* Perks Section */}
          <div className="mb-16">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-accent mb-8">Yang Akan Anda Dapatkan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Sesi 1-on-1 Eksklusif", desc: "Konsultasi langsung via video call setiap minggu." },
                { title: "Review Code & Project", desc: "Analisis mendalam terhadap kode dan arsitektur project Anda." },
                { title: "Roadmap Karier Personal", desc: "Panduan langkah demi langkah sesuai target industri Anda." },
                { title: "Bimbingan TA/Skripsi", desc: "Bantuan teknis dan logika untuk mahasiswa tingkat akhir." },
                { title: "Akses Komunitas", desc: "Networking dengan sesama mentee dan profesional lainnya." },
                { title: "Materi Pembelajaran", desc: "Full Stack Web, DevOps & Server, Mobile App Development, serta Software Engineering." }
              ].map((perk, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl border border-brand-border/50 bg-brand-muted/10">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{perk.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">Nama Lengkap</label>
                <input 
                  required
                  type="text" 
                  placeholder="Dzaka Eryan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-brand-muted/50 border border-brand-border rounded-xl px-6 py-4 outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">Email Utama</label>
                <input 
                  required
                  type="email" 
                  placeholder="hello@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-brand-muted/50 border border-brand-border rounded-xl px-6 py-4 outline-none focus:border-brand-accent transition-colors"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 block mb-2">Tipe Bimbingan</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'college', label: 'Tugas Akhir / Skripsi', icon: <GraduationCap size={18} /> },
                  { id: 'career', label: 'Persiapan Karier (Junior)', icon: <Briefcase size={18} /> },
                  { id: 'professional', label: 'Scaling ke Senior Level', icon: <Code size={18} /> },
                  { id: 'general', label: 'Umum / Belajar Dasar', icon: <BookOpen size={18} /> },
                ].map((type) => (
                  <label key={type.id} className={`relative flex items-center gap-4 p-4 glass-card cursor-pointer transition-all group ${formData.type === type.id ? 'border-brand-accent bg-brand-accent/5' : 'hover:border-brand-accent/50'}`}>
                    <input 
                      required
                      type="radio" 
                      name="mentorship_type" 
                      value={type.id} 
                      checked={formData.type === type.id}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="accent-brand-accent" 
                    />
                    <div className="flex items-center gap-3">
                       <span className={`transition-colors ${formData.type === type.id ? 'text-brand-accent' : 'text-gray-500 group-hover:text-brand-accent'}`}>{type.icon}</span>
                       <span className="text-sm font-medium">{type.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">Apa yang ingin Anda capai?</label>
              <textarea 
                required
                placeholder="Ceritakan sedikit tentang project atau kesulitan yang sedang Anda hadapi..."
                rows={5}
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                className="w-full bg-brand-muted/50 border border-brand-border rounded-xl px-6 py-4 outline-none focus:border-brand-accent transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-accent text-brand-bg py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:translate-y-[-4px] hover:shadow-[0_10px_40px_-10px_rgba(0,229,255,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isSubmitting ? (
                <>PROSES MENGIRIM... <Loader2 size={18} className="animate-spin" /></>
              ) : (
                <>KIRIM PERMINTAAN <Send size={18} /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
