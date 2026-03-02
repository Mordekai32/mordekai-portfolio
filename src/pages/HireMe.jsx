import { useState } from 'react';
import profileImage from '../assets/a.jpg';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

export default function HireMe() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (Configure your endpoint)');
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const glassCard = {
    backgroundColor: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(148,163,184,0.1)',
    backdropFilter: 'blur(12px)',
  };

  return (
    <div style={{ backgroundColor: '#0F0F0F', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(79,70,229,0.1) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      {/* HERO */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              <div
                className="absolute -inset-2 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition"
                style={{ background: 'linear-gradient(135deg, #4F46E5, #94A3B8)' }}
              />
              <div
                className="relative w-40 h-40 md:w-52 md:h-52 rounded-[2.5rem] overflow-hidden"
                style={{ border: '1px solid rgba(148,163,184,0.15)', boxShadow: '0 0 40px rgba(79,70,229,0.2)' }}
              >
                <img src={profileImage} alt="Mordekai" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(148,163,184,0.1)' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#4F46E5' }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#4F46E5' }} />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: '#FFFFFF' }}>
              Available for Q1 2026
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-[0.9]" style={{ color: '#FFFFFF' }}>
            Engineered for <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #4F46E5, #94A3B8)' }}
            >
              Performance.
            </span>
          </h1>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: 'fa-layer-group', title: 'Full Stack', desc: 'Next.js, React, Node.js solutions built to handle massive traffic.' },
            { icon: 'fa-brain', title: 'AI Systems', desc: 'Integrating LLMs and automation into your workflow.' },
            { icon: 'fa-terminal', title: 'Architecture', desc: 'Cloud-native design on AWS/Vercel with 99.9% uptime.' },
          ].map((item) => (
            <div
              key={item.title}
              className="p-12 rounded-[3rem] transition-all duration-300"
              style={glassCard}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(79,70,229,0.4)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)')}
            >
              <div className="text-3xl mb-8" style={{ color: '#4F46E5' }}>
                <i className={'fas ' + item.icon}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#FFFFFF' }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="py-32 px-6 relative z-10" style={{ backgroundColor: 'rgba(255,255,255,0.01)' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Starter */}
          <div className="p-12 rounded-[4rem]" style={glassCard}>
            <span className="text-xs font-black uppercase tracking-widest" style={{ color: '#94A3B8' }}>Single Project</span>
            <h2 className="text-4xl font-bold mt-4 mb-8" style={{ color: '#FFFFFF' }}>
              $2,500<span className="text-lg font-medium" style={{ color: '#94A3B8' }}>/base</span>
            </h2>
            <ul className="space-y-5 text-sm mb-12" style={{ color: '#94A3B8' }}>
              {['High-end UX Design', 'Full Frontend & Backend', 'SEO & Performance Optimization'].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <i className="fas fa-check-circle" style={{ color: '#4F46E5' }}></i> {f}
                </li>
              ))}
            </ul>
            <a
              href="#inquiry"
              className="block w-full py-5 rounded-3xl font-bold text-center transition-all duration-300"
              style={{ backgroundColor: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.25)', color: '#FFFFFF' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(79,70,229,0.2)'; e.currentTarget.style.borderColor = '#4F46E5'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(79,70,229,0.08)'; e.currentTarget.style.borderColor = 'rgba(79,70,229,0.25)'; }}
            >
              Inquire Starter
            </a>
          </div>

          {/* Partner */}
          <div
            className="p-12 rounded-[4rem] relative"
            style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(148,163,184,0.05))', border: '2px solid #4F46E5', boxShadow: '0 0 60px rgba(79,70,229,0.2)' }}
          >
            <div
              className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest"
              style={{ backgroundColor: '#4F46E5', color: '#FFFFFF' }}
            >
              ✦ Recommended
            </div>
            <span className="text-xs font-black uppercase tracking-widest" style={{ color: '#4F46E5' }}>Partner Package</span>
            <h2 className="text-4xl font-bold mt-4 mb-8" style={{ color: '#FFFFFF' }}>
              $5,000<span className="text-lg font-medium" style={{ color: '#94A3B8' }}>+</span>
            </h2>
            <ul className="space-y-5 text-sm mb-12" style={{ color: '#94A3B8' }}>
              {['Everything in Starter', 'AI Agent Integration', 'Priority 24/7 Support'].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <i className="fas fa-check-circle" style={{ color: '#4F46E5' }}></i> {f}
                </li>
              ))}
            </ul>
            <a
              href="#inquiry"
              className="block w-full py-5 rounded-3xl font-black text-center transition-all duration-300"
              style={{ backgroundColor: '#4F46E5', color: '#FFFFFF', boxShadow: '0 8px 30px rgba(79,70,229,0.4)' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#6056f5'; e.currentTarget.style.transform = 'scale(1.02)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#4F46E5'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section id="inquiry" className="py-32 px-6 relative z-10">
        <div className="max-w-3xl mx-auto p-10 md:p-20 rounded-[4rem]" style={glassCard}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4" style={{ color: '#FFFFFF' }}>Let's work.</h2>
            <p style={{ color: '#94A3B8' }}>Briefly describe your project goals below.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { label: 'Full Name', name: 'name', type: 'text', placeholder: 'your name' },
                { label: 'Email', name: 'email', type: 'email', placeholder: 'your email' },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name} className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-4 block" style={{ color: '#4F46E5' }}>
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    required
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full rounded-2xl px-8 py-5 outline-none transition-all duration-300"
                    style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(148,163,184,0.1)', color: '#FFFFFF' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#4F46E5')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)')}
                  />
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest ml-4 block" style={{ color: '#4F46E5' }}>
                Project Brief
              </label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="What are we building?"
                className="w-full rounded-2xl px-8 py-5 outline-none transition-all duration-300 resize-none"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(148,163,184,0.1)', color: '#FFFFFF' }}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#4F46E5')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)')}
              />
            </div>
            <button
              type="submit"
              className="w-full py-6 font-black rounded-3xl uppercase tracking-[0.2em] text-sm transition-all duration-300"
              style={{ backgroundColor: '#4F46E5', color: '#FFFFFF', boxShadow: '0 8px 30px rgba(79,70,229,0.35)' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#6056f5'; e.currentTarget.style.transform = 'scale(1.01)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#4F46E5'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Initialize Project <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </form>
        </div>
      </section>

      
    </div>
  );
}