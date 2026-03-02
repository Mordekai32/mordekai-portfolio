import { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaLinkedin, FaInstagram, FaTwitter, FaGithub, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

export default function Contact() {
  const [toast, setToast] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('mordekai893@gmail.com');
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const cardBase = {
    backgroundColor: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(148,163,184,0.1)',
    backdropFilter: 'blur(12px)',
    transition: 'border-color 0.3s, background-color 0.3s',
  };

  return (
    <div style={{ backgroundColor: '#0F0F0F', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Background glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(79,70,229,0.1) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6 py-24 relative z-10 flex-1 w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <span
            className="font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
            style={{ color: '#4F46E5' }}
          >
            Let's build something
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter" style={{ color: '#FFFFFF' }}>
            Get in{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #4F46E5, #94A3B8)' }}
            >
              Touch
            </span>
          </h1>
          <div className="w-16 h-1 mx-auto rounded-full mb-6" style={{ backgroundColor: '#4F46E5' }} />
          <p className="max-w-2xl mx-auto text-lg" style={{ color: '#94A3B8' }}>
            Choose a platform below to start a conversation.
          </p>
        </div>

        {/* Contact cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Call */}
          <a
            href="tel:0796381024"
            className="p-10 rounded-3xl flex flex-col items-center text-center group"
            style={cardBase}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(79,70,229,0.4)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)')}
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300"
              style={{
                backgroundColor: 'rgba(79,70,229,0.08)',
                border: '1px solid rgba(79,70,229,0.2)',
                color: '#4F46E5',
              }}
            >
              <FaPhoneAlt className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#FFFFFF' }}>Direct Call</h3>
            <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>Available for urgent inquiries.</p>
            <span
              className="px-5 py-2 rounded-full text-sm font-bold"
              style={{
                backgroundColor: 'rgba(79,70,229,0.1)',
                color: '#4F46E5',
                border: '1px solid rgba(79,70,229,0.2)',
              }}
            >
              0796 381 024
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/250728800993"
            target="_blank"
            rel="noopener"
            className="p-10 rounded-3xl flex flex-col items-center text-center group"
            style={cardBase}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(79,70,229,0.4)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)')}
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8"
              style={{
                backgroundColor: 'rgba(79,70,229,0.08)',
                border: '1px solid rgba(79,70,229,0.2)',
                color: '#4F46E5',
              }}
            >
              <FaWhatsapp className="text-4xl" />
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#FFFFFF' }}>WhatsApp</h3>
            <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>Chat instantly.</p>
            <span
              className="px-5 py-2 rounded-full text-sm font-bold"
              style={{
                backgroundColor: 'rgba(79,70,229,0.1)',
                color: '#4F46E5',
                border: '1px solid rgba(79,70,229,0.2)',
              }}
            >
              +250 728 800 993
            </span>
          </a>

          {/* Email */}
          <div
            onClick={copyEmail}
            className="p-10 rounded-3xl flex flex-col items-center text-center group cursor-pointer"
            style={cardBase}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(79,70,229,0.4)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)')}
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8"
              style={{
                backgroundColor: 'rgba(79,70,229,0.08)',
                border: '1px solid rgba(79,70,229,0.2)',
                color: '#4F46E5',
              }}
            >
              <FaEnvelope className="text-4xl" />
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#FFFFFF' }}>Email Me</h3>
            <p className="text-sm mb-6" style={{ color: '#94A3B8' }}>mordekai893@gmail.com</p>
            <span
              className="text-xs font-black uppercase tracking-widest group-hover:underline"
              style={{ color: '#4F46E5' }}
            >
              Click to Copy
            </span>
          </div>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/UKOBUKEYE-Mordekai"
            target="_blank"
            rel="noopener"
            className="p-8 rounded-2xl flex items-center justify-between group"
            style={cardBase}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(79,70,229,0.4)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)')}
          >
            <div className="flex items-center space-x-4">
              <FaLinkedin className="text-3xl" style={{ color: '#4F46E5' }} />
              <span className="font-bold" style={{ color: '#FFFFFF' }}>LinkedIn</span>
            </div>
            <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1" style={{ color: '#94A3B8' }}></i>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/Mordekai_320"
            target="_blank"
            rel="noopener"
            className="p-8 rounded-2xl flex items-center justify-between group"
            style={cardBase}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(79,70,229,0.4)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)')}
          >
            <div className="flex items-center space-x-4">
              <FaInstagram className="text-3xl" style={{ color: '#94A3B8' }} />
              <span className="font-bold" style={{ color: '#FFFFFF' }}>Instagram</span>
            </div>
            <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1" style={{ color: '#94A3B8' }}></i>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/mordekai668896"
            target="_blank"
            rel="noopener"
            className="p-8 rounded-2xl flex items-center justify-between group"
            style={cardBase}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(79,70,229,0.4)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(148,163,184,0.1)')}
          >
            <div className="flex items-center space-x-4">
              <FaTwitter className="text-3xl" style={{ color: '#FFFFFF' }} />
              <div>
                <span className="font-bold block" style={{ color: '#FFFFFF' }}>Twitter / X</span>
                <span className="text-xs" style={{ color: '#4F46E5' }}>@mordekai668896</span>
              </div>
            </div>
            <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1" style={{ color: '#94A3B8' }}></i>
          </a>
        </div>
      </main>

      

      {/* Toast */}
      {toast && (
        <div
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 font-bold px-8 py-4 rounded-full shadow-xl z-50"
          style={{
            backgroundColor: '#4F46E5',
            color: '#FFFFFF',
            boxShadow: '0 8px 30px rgba(79,70,229,0.5)',
          }}
        >
          ✅ Email copied!
        </div>
      )}
    </div>
  );
}