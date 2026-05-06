/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Video, 
  Instagram, 
  Facebook, 
  Youtube, 
  Twitter, 
  CheckCircle2, 
  ChevronRight, 
  Star, 
  MessageSquare, 
  BarChart3, 
  Users, 
  Globe,
  Monitor
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Pricing data
const packages = [
  {
    name: 'Dasar',
    price: 'Rp 499.000',
    frequency: '/bulan',
    description: 'Cocok untuk profesional mandiri dan startup kecil.',
    features: [
      'Konferensi Video HD (Hingga 50 peserta)',
      '1 Postingan Media Sosial per minggu',
      'Manajemen Instagram & Facebook',
      'Analitik Dasar',
      'Dukungan Email'
    ],
    cta: 'Mulai Sekarang',
    highlighted: false
  },
  {
    name: 'Bisnis',
    price: 'Rp 1.499.000',
    frequency: '/bulan',
    description: 'Paling populer untuk bisnis yang sedang berkembang.',
    features: [
      'Konferensi Video Ultra HD (Hingga 250 peserta)',
      '3 Postingan Media Sosial per minggu',
      'Instagram, FB, YT, TikTok, X',
      'Fokus Branding & Informasi',
      'Analitik Profesional',
      'Dukungan Prioritas 24/7'
    ],
    cta: 'Pilih Paket Bisnis',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Rp 3.999.000',
    frequency: '/bulan',
    description: 'Solusi lengkap untuk perusahaan besar.',
    features: [
      'Peserta tidak terbatas',
      'Postingan Media Sosial harian',
      'Semua Platform + Strategi Konten',
      'Layanan Pelanggan Terdedikasi',
      'Full Branding Suite',
      'Keamanan Tingkat Tinggi'
    ],
    cta: 'Hubungi Kami',
    highlighted: false
  }
];

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'CEO, TechID',
    content: 'Tsunagari mengubah cara kami berkomunikasi dengan tim sekaligus mengelola branding di media sosial.',
    image: 'https://i.pravatar.cc/150?u=budi'
  },
  {
    name: 'Sari Wijaya',
    role: 'Marketing Manager, KopiSenja',
    content: 'Fitur integrasi media sosialnya sangat membantu. Postingan kami jadi lebih konsisten dan profesional.',
    image: 'https://i.pravatar.cc/150?u=sari'
  },
  {
    name: 'Andi Pratama',
    role: 'Creative Director',
    content: 'Video kualitasnya luar biasa, tidak pernah lag. Sangat direkomendasikan untuk meeting klien.',
    image: 'https://i.pravatar.cc/150?u=andi'
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 relative overflow-hidden">
      {/* Background Graphic Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-[20%] -left-40 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      {/* Navbar */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-12 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => scrollToSection('home')}
            id="nav-logo"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
            </div>
            <span className={`text-2xl font-black tracking-tighter ${scrolled ? 'text-blue-900' : 'text-white'}`}>
              TSUNAGARI.
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {['Utama', 'Paket Layanan', 'Tentang Kami'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-blue-600 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full ${
                  scrolled ? 'text-slate-500' : 'text-white/80'
                }`}
                id={`nav-${item.toLowerCase().replace(' ', '-')}`}
              >
                {item}
              </button>
            ))}
            <button 
              className="bg-blue-600 text-white px-8 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
              id="nav-cta"
            >
              Mulai Sekarang
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            id="mobile-menu-toggle"
          >
            {isMenuOpen ? <X className={scrolled ? 'text-gray-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-2xl p-8 md:hidden flex flex-col gap-6"
              id="mobile-menu"
            >
              {['Utama', 'Paket Layanan', 'Tentang Kami'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-left text-lg font-black uppercase tracking-widest text-slate-900 border-b border-slate-100 pb-4"
                >
                  {item}
                </button>
              ))}
              <button className="bg-blue-600 text-white py-4 rounded-full font-black uppercase tracking-widest text-sm text-center">
                Mulai Sekarang
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="utama" className="relative h-screen flex items-center justify-center overflow-hidden z-10">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-950/80 via-blue-900/60 to-transparent" />
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1920&h=1080" 
          alt="Modern Conference Room" 
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
          id="hero-bg"
        />
        
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-8 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-[0.3em] rounded-full italic">
              Solusi Branding Digital Masa Depan
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight">
              Koneksi <br />
              Tanpa <span className="text-blue-400 italic">Batas.</span>
            </h1>
            <p className="text-xl text-blue-50/80 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Platform konferensi video premium yang tidak hanya menghubungkan Anda, tapi juga membangun branding, informasi, dan layanan pelanggan Anda.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-12 py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/40 transform hover:scale-105 active:scale-95">
                Mulai Sekarang
              </button>
              <div className="flex items-center gap-4 py-4 px-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <div className="flex -space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white uppercase">ig</div>
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white uppercase">fb</div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white uppercase">yt</div>
                </div>
                <p className="text-[10px] text-white/70 font-bold uppercase tracking-wider">
                  Terintegrasi Media Sosial
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Focus Section */}
      <section className="py-32 bg-white relative z-10" id="service-focus">
        <div className="max-w-7xl mx-auto px-12">
          <div className="mb-20">
            <span className="text-blue-600 font-black tracking-widest text-xs uppercase mb-4 block italic">Solusi Kami</span>
            <h2 className="text-5xl md:text-6xl font-black text-blue-950 mb-8 tracking-tight">Fokus Layanan <span className="text-blue-600 italic">Strategis.</span></h2>
            <p className="text-slate-600 text-xl max-w-2xl leading-relaxed">
              Kami membangun ekosistem digital untuk pertumbuhan bisnis Anda melalui tiga pilar utama.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-slate-100 rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200/50">
            {[
              {
                icon: <Globe className="w-10 h-10 text-blue-600" />,
                title: 'Branding Strategis',
                desc: 'Membangun identitas digital yang kuat melalui konten visual dan video berkualitas tinggi di semua platform.'
              },
              {
                icon: <MessageSquare className="w-10 h-10 text-blue-600" />,
                title: 'Distribusi Informasi',
                desc: 'Memastikan informasi bisnis Anda tersampaikan dengan cepat dan tepat kepada audiens target.'
              },
              {
                icon: <Users className="w-10 h-10 text-blue-600" />,
                title: 'Layanan Pelanggan',
                desc: 'Interaksi langsung dengan pelanggan melalui platform media sosial yang terintegrasi penuh.'
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-16 flex flex-col group bg-white transition-all duration-500 border-slate-100 ${idx !== 0 ? 'border-l' : ''} hover:bg-blue-50/50`}
                id={`service-card-${idx}`}
              >
                <div className="mb-8 bg-slate-50 w-20 h-20 rounded-[28px] flex items-center justify-center transition-all group-hover:bg-blue-600 group-hover:scale-110">
                  <div className="group-hover:text-white transition-colors">{service.icon}</div>
                </div>
                <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-4">{service.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="py-32 bg-blue-950 relative overflow-hidden z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1 text-white">
              <span className="text-blue-400 font-black tracking-widest text-xs uppercase mb-6 block italic">Multi-Platform Sync</span>
              <h2 className="text-5xl md:text-6xl font-black mb-10 leading-[0.9] tracking-tighter">Eksposur Instan ke Seluruh <span className="text-blue-400 italic">Dunia.</span></h2>
              <p className="text-xl text-blue-100/60 mb-12 leading-relaxed">
                Platform kami memungkinkan sinkronisasi otomatis. Rekam momen meeting terbaik dan bagikan langsung sebagai konten branding.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Instagram />, label: 'Instagram' },
                  { icon: <Facebook />, label: 'Facebook' },
                  { icon: <Youtube />, label: 'YouTube' },
                  { icon: <CheckCircle2 />, label: 'TikTok' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors">
                    <div className="text-blue-400">{item.icon}</div>
                    <span className="font-bold text-xs uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative w-full">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-blue-600 rounded-[40px] transform rotate-6 scale-100 opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-900 rounded-[40px] shadow-3xl shadow-blue-500/20 flex flex-col p-8 border border-white/10 overflow-hidden">
                   <div className="flex justify-between items-center mb-10">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="bg-white/10 px-4 py-1.5 rounded-lg text-[10px] text-white font-mono uppercase tracking-widest">Live Conference</div>
                  </div>
                  <div className="grid grid-cols-2 gap-6 flex-1">
                    {[1,2,3,4].map(i => (
                      <div key={i} className={`rounded-3xl flex items-end p-4 border border-white/10 ${i % 2 === 0 ? 'bg-white/10' : 'bg-white/20'}`}>
                        <div className="bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">User {i}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-slate-50 relative z-10" id="paket-layanan">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-24">
            <span className="text-blue-600 font-black tracking-widest text-xs uppercase mb-4 block italic">Investasi</span>
            <h2 className="text-5xl font-black text-blue-950 mb-6">Paket <span className="text-blue-600 italic">Berlangganan.</span></h2>
            <p className="text-slate-500 text-lg">Investasikan pertumbuhan branding bisnis Anda secara cerdas.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative p-12 rounded-[40px] flex flex-col transition-all duration-500 ${
                  pkg.highlighted 
                  ? 'bg-blue-600 text-white shadow-3xl shadow-blue-500/30 scale-105 z-10' 
                  : 'bg-white text-slate-900 shadow-xl shadow-slate-200/50 border border-slate-100 hover:scale-[1.02]'
                }`}
                id={`pricing-card-${idx}`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-blue-900 text-[10px] font-black uppercase px-8 py-2.5 rounded-full shadow-lg">
                    Rekomendasi Utama
                  </div>
                )}
                <div className="mb-10 text-center border-b border-white/10 pb-10">
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-6 opacity-80">{pkg.name}</h3>
                  <div className="flex flex-col items-center">
                    <span className="text-4xl font-black tracking-tighter mb-1">{pkg.price}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${pkg.highlighted ? 'text-blue-100' : 'text-slate-400'}`}>{pkg.frequency}</span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-6 mb-12">
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-4">
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${pkg.highlighted ? 'text-blue-200' : 'text-blue-600'}`} />
                      <span className="text-sm font-bold tracking-tight opacity-90">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className={`w-full py-5 rounded-full font-black uppercase tracking-widest text-xs transition-all active:scale-95 ${
                    pkg.highlighted 
                    ? 'bg-white text-blue-600 hover:bg-slate-50 shadow-2xl' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {pkg.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid md:grid-cols-2 gap-16 items-end mb-20">
            <div>
              <span className="text-blue-600 font-black tracking-widest text-xs uppercase mb-4 block italic">Testimonial</span>
              <h2 className="text-5xl font-black text-blue-950 tracking-tight leading-[0.9]">Kesan Mereka Produk <span className="text-blue-600 italic">Terbaik.</span></h2>
            </div>
            <p className="text-slate-500 text-lg italic border-l-4 border-blue-600 pl-8">
              "Tsunagari mengubah cara kami menangani branding lewat webinar. Sangat efisien dan cerdas."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-slate-100 rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200/50">
            {testimonials.map((t, idx) => (
              <div key={idx} className={`p-12 flex flex-col justify-center bg-white border-slate-100 ${idx !== 0 ? 'border-l' : ''} ${idx === 2 ? 'bg-blue-600 text-white border-none' : ''}`} id={`testimonial-${idx}`}>
                <div className={`${idx === 2 ? 'text-blue-200' : 'text-blue-600'} mb-8 italic text-lg font-medium leading-relaxed`}>
                  "{t.content}"
                </div>
                <div className="flex items-center gap-5">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white shadow-xl" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-black text-sm uppercase tracking-widest">{t.name}</h4>
                    <div className={`text-[10px] uppercase font-bold tracking-tighter ${idx === 2 ? 'text-blue-200' : 'text-slate-400'}`}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="tentang-kami" className="py-32 bg-slate-100/50 relative z-10 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-[40px] rotate-3 scale-100 opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071823991-b99c223004be?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Team" 
                className="rounded-[40px] shadow-3xl relative z-10 grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                id="about-img"
              />
              <div className="absolute -bottom-12 -right-12 bg-blue-600 text-white p-12 rounded-[40px] shadow-3xl z-20">
                <div className="text-5xl font-black mb-1">10K+</div>
                <div className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Klien Aktif</div>
              </div>
            </div>
            <div>
              <span className="text-blue-600 font-black tracking-widest text-xs uppercase mb-6 block italic">Visi & Evolusi</span>
              <h2 className="text-5xl font-black mb-10 text-blue-950 leading-[0.9] tracking-tighter">Membangun <span className="text-blue-600 italic">Evolusi</span> Koneksi Digital.</h2>
              <p className="text-slate-600 text-xl mb-12 leading-relaxed font-medium">
                Tsunagari lahir dari kebutuhan akan platform yang tidak hanya memfasilitasi percakapan, tetapi juga memfasilitasi pertumbuhan. Setiap momen video adalah aset strategis.
              </p>
              <div className="grid sm:grid-cols-2 gap-10">
                <div className="flex flex-col gap-4 p-8 bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50">
                  <div className="bg-blue-50 w-12 h-12 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-sm uppercase tracking-widest mb-2">Terukur</h4>
                    <p className="text-sm text-slate-400 font-bold leading-tight">Analitik tajam untuk performa branding Anda.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-8 bg-blue-600 text-white rounded-[32px] shadow-xl shadow-blue-500/20">
                  <div className="bg-white/20 w-12 h-12 rounded-2xl flex items-center justify-center">
                    <Video className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-sm uppercase tracking-widest mb-2">Kualitas</h4>
                    <p className="text-sm text-blue-100 font-bold leading-tight">Teknologi streaming tanpa kompromi.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 text-center">
          <div className="relative inline-block">
             <div className="absolute -inset-10 bg-blue-600/5 rounded-full blur-3xl"></div>
             <motion.h2 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="text-6xl md:text-8xl font-black text-blue-950 mb-12 tracking-tighter leading-none relative">
               Siap Bertumbuh <br />
               <span className="text-blue-600 italic">Bersama Kami?</span>
             </motion.h2>
          </div>
          <div className="flex flex-col items-center gap-10 relative">
            <button className="px-20 py-6 bg-blue-600 text-white font-black uppercase tracking-[0.3em] text-sm rounded-full hover:bg-blue-700 transition-all shadow-4xl shadow-blue-500/30 transform hover:scale-110 active:scale-95">
              Dapatkan Akses Sekarang
            </button>
            <div className="flex items-center gap-4 py-3 px-8 bg-slate-100 rounded-full">
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Bergabung dengan 1,200+ Pemimpin Bisnis Hari Ini</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-32 pb-16 relative z-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-4 gap-20 mb-32">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-10">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-sm rotate-45"></div>
              </div>
              <span className="text-2xl font-black tracking-tighter text-blue-950 italic">TSUNAGARI.</span>
            </div>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-tight leading-loose">
              Platform komunikasi cerdas untuk masa depan kerja hibrida dan branding global.
            </p>
          </div>
          {[
            { title: 'Navigasi', items: ['Fitur', 'Harga', 'Keamanan', 'Integrasi'] },
            { title: 'Perusahaan', items: ['Tentang Kami', 'Karir', 'Blog', 'Kontak'] },
            { title: 'Ikuti Kami', items: ['Instagram', 'Facebook', 'YouTube', 'X'] }
          ].map((col, i) => (
            <div key={i}>
              <h5 className="font-black mb-10 text-[10px] uppercase tracking-[0.4em] text-slate-300">{col.title}</h5>
              <ul className="flex flex-col gap-5 text-sm font-black uppercase tracking-widest text-slate-600">
                {col.items.map(item => (
                  <li key={item} className="hover:text-blue-600 cursor-pointer transition-colors w-fit">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-12 pt-12 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-slate-300 text-[10px] font-black uppercase tracking-widest">© 2026 Tsunagari Inc. Semua hak dilindungi.</p>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-slate-300">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Syarat & Ketentuan</span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Kebijakan Privasi</span>
          </div>
        </div>
      </footer>


      {/* Custom Styles */}
      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1.05); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
