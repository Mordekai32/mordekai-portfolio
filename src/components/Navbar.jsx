import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navItems = [
    { label: 'Home', path: '/', end: true },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;500;600;700&display=swap');

        :root {
          --primary: #0ea5e9;
          --primary-dark: #0284c7;
          --accent: #06b6d4;
          --background: #0f172a;
          --surface: #1e293b;
          --text-primary: #f1f5f9;
          --text-secondary: #cbd5e1;
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .navbar-glow {
          position: absolute;
          pointer-events: none;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0.1;
          filter: blur(60px);
        }

        .logo-text {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .nav-link {
          font-family: 'Space Mono', monospace;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link.active::after {
          width: 100%;
          opacity: 1;
        }

        @media (max-width: 768px) {
          .nav-link::after {
            display: none;
          }
        }

        .cta-button {
          position: relative;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border-radius: 50px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cta-button:hover::before {
          opacity: 1;
        }

        .cta-button::after {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border-radius: 50px;
          z-index: -2;
          opacity: 0;
          filter: blur(8px);
          transition: opacity 0.3s ease;
        }

        .cta-button:hover::after {
          opacity: 0.5;
        }

        .mobile-nav-item {
          animation: slide-down 0.3s ease forwards;
        }

        .mobile-nav-item:nth-child(1) { animation-delay: 0.05s; }
        .mobile-nav-item:nth-child(2) { animation-delay: 0.1s; }
        .mobile-nav-item:nth-child(3) { animation-delay: 0.15s; }
        .mobile-nav-item:nth-child(4) { animation-delay: 0.2s; }
        .mobile-nav-item:nth-child(5) { animation-delay: 0.25s; }
      `}</style>

      <nav
        ref={navbarRef}
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-xl border-slate-700/40 shadow-2xl'
            : 'bg-slate-950/50 backdrop-blur-md border-slate-800/30'
        }`}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute top-1/2 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full mix-blend-screen blur-3xl"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full mix-blend-screen blur-3xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-4 relative z-10">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="group relative">
              <div className="flex flex-col gap-0.5">
                <span className="logo-text text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-cyan-400 transition-all duration-300 group-hover:from-sky-200 group-hover:via-sky-300 group-hover:to-cyan-300">
                  UKOBUKEYE
                </span>
                <span className="text-xs font-light tracking-widest text-sky-500/60 uppercase transition-colors duration-300 group-hover:text-sky-400 font-mono">
                  M.Mordekai
                </span>
              </div>
              <div className="absolute -inset-3 bg-gradient-to-r from-sky-600/0 via-sky-500/0 to-cyan-600/0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-lg" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.end}
                  className={({ isActive }) =>
                    `nav-link text-sm tracking-wide transition-colors duration-300 ${
                      isActive ? 'text-sky-300 font-semibold' : 'text-slate-400 hover:text-sky-300'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/hire-me"
                className="cta-button relative px-7 py-2.5 text-white text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 group"
              >
                <span className="relative z-10 inline-block">
                  Hire Me
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-20 p-2 text-sky-400 hover:text-sky-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X size={24} strokeWidth={2.5} className="animate-spin-fast" />
              ) : (
                <Menu size={24} strokeWidth={2.5} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-t border-slate-700/40">
              <div className="px-6 py-6 space-y-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.end}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `mobile-nav-item block px-4 py-3 rounded-lg font-mono text-sm transition-all duration-300 ${
                        isActive
                          ? 'bg-sky-500/20 text-sky-300 border-l-2 border-sky-400 pl-3'
                          : 'text-slate-300 hover:bg-sky-500/10 hover:text-sky-300'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Link
                  to="/hire-me"
                  onClick={() => setIsOpen(false)}
                  className="mobile-nav-item block w-full mt-4 px-4 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-sm font-semibold rounded-lg text-center hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/30"
                >
                  Hire Me
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile menu backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          style={{ top: navbarHeight }}
        />
      )}
    </>
  );
}
