import { Link } from 'react-router-dom';
import {
  FaPhone,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socialLinks = [
    { icon: <FaGithub size={17} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <FaLinkedin size={17} />, href: 'https://linkedin.com/in/UKOBUKEYE-Mordekai', label: 'LinkedIn' },
    { icon: <FaTwitter size={17} />, href: 'https://twitter.com/mordekai668896', label: 'Twitter' },
    { icon: <FaInstagram size={17} />, href: 'https://instagram.com/Mordekai_320', label: 'Instagram' },
    { icon: <FaWhatsapp size={17} />, href: 'https://wa.me/250728800993', label: 'WhatsApp' },
    { icon: <FaPhone size={15} />, href: 'tel:0796381024', label: 'Phone' },
  ];

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Hire Me', href: '/hire' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer style={{ backgroundColor: '#0F0F0F' }}>
      {/* Top gradient line */}
      <div
        className="w-full h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #4F46E5, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">

          {/* Brand — col 1-4 */}
          <div className="md:col-span-4">
            <h2 className="text-2xl font-black tracking-tight mb-1" style={{ color: '#FFFFFF' }}>
              UKOBUKEYE
            </h2>
            <h2 className="text-2xl font-black tracking-tight mb-5" style={{ color: '#4F46E5' }}>
              Mordekai
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Combining innovation and technical expertise to build sustainable digital solutions for the modern web.
            </p>

            {/* Social icons */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(79,70,229,0.08)',
                    border: '1px solid rgba(79,70,229,0.2)',
                    color: '#94A3B8',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#4F46E5';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#4F46E5';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(79,70,229,0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(79,70,229,0.08)';
                    e.currentTarget.style.color = '#94A3B8';
                    e.currentTarget.style.borderColor = 'rgba(79,70,229,0.2)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links — col 5-7 */}
          <div className="md:col-span-3 md:col-start-6">
            <h4
              className="text-[10px] font-black uppercase tracking-[0.3em] mb-7"
              style={{ color: '#4F46E5' }}
            >
              Navigation
            </h4>
            <ul className="space-y-4">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-sm flex items-center gap-3 group transition-all duration-200"
                    style={{ color: '#94A3B8' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    <span
                      className="block h-[1px] transition-all duration-300"
                      style={{
                        width: '0px',
                        backgroundColor: '#4F46E5',
                      }}
                      ref={(el) => {
                        if (el) {
                          el.closest('a').addEventListener('mouseenter', () => (el.style.width = '16px'));
                          el.closest('a').addEventListener('mouseleave', () => (el.style.width = '0px'));
                        }
                      }}
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact cards — col 8-12 */}
          <div className="md:col-span-4 md:col-start-9 space-y-4">

            {/* Direct contact card */}
            <div
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: 'rgba(79,70,229,0.06)',
                border: '1px solid rgba(79,70,229,0.2)',
              }}
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-5" style={{ color: '#4F46E5' }}>
                Connect Directly
              </h4>
              <ul className="space-y-4">
                {[
                  { icon: <FaEnvelope size={13} />, text: 'mordekai893@gmail.com' },
                  { icon: <FaPhone size={12} />, text: '0796 381 024' },
                  { icon: <FaWhatsapp size={14} />, text: '+250 728 800 993' },
                  { icon: <FaTwitter size={13} />, text: '@mordekai668896', href: 'https://twitter.com/mordekai668896' },
                  { icon: <FaMapMarkerAlt size={13} />, text: 'Kigali, Rwanda' },
                ].map(({ icon, text, href }) => (
                  <li key={text} className="flex items-center gap-3 text-sm">
                    <span style={{ color: '#4F46E5', flexShrink: 0 }}>{icon}</span>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-200"
                        style={{ color: '#94A3B8' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#4F46E5')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                      >
                        {text}
                      </a>
                    ) : (
                      <span style={{ color: '#94A3B8' }}>{text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability badge */}
            <div
              className="p-5 rounded-2xl flex items-center gap-4"
              style={{
                backgroundColor: 'rgba(79,70,229,0.06)',
                border: '1px solid rgba(79,70,229,0.2)',
              }}
            >
              <span className="relative flex h-3 w-3 flex-shrink-0">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                  style={{ backgroundColor: '#4F46E5' }}
                />
                <span
                  className="relative inline-flex h-3 w-3 rounded-full"
                  style={{ backgroundColor: '#4F46E5' }}
                />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-widest" style={{ color: '#FFFFFF' }}>
                  Open for work — 2026
                </p>
                <p className="text-xs mt-1 italic" style={{ color: '#94A3B8' }}>
                  Remote or on-site · Kigali or worldwide
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(148,163,184,0.07)' }}
        >
          <p className="text-xs tracking-widest" style={{ color: '#94A3B8' }}>
            &copy; {new Date().getFullYear()} UKOBUKEYE Mordekai &nbsp;·&nbsp;
            <span style={{ color: '#4F46E5' }}>Kigali, Rwanda</span>
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
            style={{
              backgroundColor: 'rgba(79,70,229,0.1)',
              border: '1px solid rgba(79,70,229,0.25)',
              color: '#94A3B8',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#4F46E5';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(79,70,229,0.1)';
              e.currentTarget.style.color = '#94A3B8';
            }}
            aria-label="Back to top"
          >
            <FaArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}t