import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navbarRef = useRef(null);

  // CV data (yakuwe muri PDF)
  const cvText = `UKOBUKEYE Mordekai

Profile
Innovative and motivated software developer with strong experience in web development, AI, IoT, and blockchain technologies. Skilled at creating interactive web applications and smart solutions for agriculture, energy, waste management, and marketplaces. Strong problem- solving, teamwork, and project management skills.

Skills
Frontend: React, Redux, TailwindCSS, Material- UI, SCSS
Backend: Node.js, Express, Python
Database: MongoDB, PostgreSQL
Other Technologies: Smart Contracts, IoT, AI, Chart.js, Recharts, Leaflet, Elasticsearch, Auth0
Tools: Git, GitHub, VS Code

Education
Saint Laurent Gaseke TSS - Senior 6 / Level 5, Rwanda

Projects
- AgriConnect Rwanda - Digital marketplace connecting Rwandan farmers with buyers to reduce post- harvest losses. Tech: React, Node.js, MongoDB, Mobile
- Solar P2P Network - Peer- to- peer energy trading system allowing households to sell excess solar power. Tech: React, Smart Contracts, IoT, Real- time Trading
- Smart Waste AI – AI route optimization for garbage collection based on fill levels and traffic. Tech: AI, Node.js
- Crowd Predictor – Predicting bus occupancy rates using historical data for commuters. Tech: Python, API
- School Management System – Comprehensive platform to manage students, teachers, attendance, and grades. Tech: React, Express, PostgreSQL, Tailwind
- Job Finder Website – Smart job board with AI-powered recommendations and one-click applications. Tech: React, Elasticsearch, Node.js, Auth0
- Movie App – Browse trending movies, view details, and save favorites using TMDB API. Tech: React, Redux, TMDB API, SCSS
- Weather App Advanced – Hyper-local weather forecasts with interactive maps, hourly graphs, and severe weather alerts. Tech: React, Chart.js, OpenWeatherMap, Leaflet
- Ecommerce Admin Dashboard – Dashboard to manage products, orders, customers, and sales analytics. Tech: React, Material-UI, Recharts

Languages
- Kinyarwanda: Fluent
- English: Fluent

References
Available upon request`;

  const downloadCV = () => {
    const blob = new Blob([cvText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'UKOBUKEYE_Mordekai_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

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
    { label: 'Resume', path: '/resume' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;500;600;700&display=swap');

        :root {
          --primary: #ff006e;
          --primary-light: #ff1493;
          --accent: #00f5ff;
          --secondary: #8338ec;
          --background: #0a0e27;
          --surface: #16213e;
          --text-primary: #ffffff;
          --text-secondary: #b0b8d4;
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
          background: linear-gradient(135deg, #ff006e, #00f5ff);
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
          background: linear-gradient(135deg, #ff006e, #00f5ff);
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
        .mobile-nav-item:nth-child(6) { animation-delay: 0.3s; }
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
            className="absolute top-1/2 left-1/4 w-96 h-96 bg-pink-500/15 rounded-full mix-blend-screen blur-3xl"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400/10 rounded-full mix-blend-screen blur-3xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-4 relative z-10">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="group relative">
              <div className="flex flex-col gap-0.5">
                <span className="logo-text text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-cyan-400 transition-all duration-300 group-hover:from-pink-300 group-hover:via-pink-400 group-hover:to-cyan-300">
                  UKOBUKEYE
                </span>
                <span className="text-xs font-light tracking-widest text-pink-500/60 uppercase transition-colors duration-300 group-hover:text-pink-400 font-mono">
                  M.Mordekai • Innovative Developer
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
                      isActive ? 'text-pink-400 font-semibold' : 'text-slate-300 hover:text-cyan-400'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {/* Download CV Button */}
              <button
                onClick={downloadCV}
                className="relative p-2.5 text-slate-300 hover:text-cyan-400 transition-colors group"
                aria-label="Download CV"
                title="Download CV"
              >
                <Download size={20} strokeWidth={2} />
                <span className="absolute inset-0 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-colors duration-300" />
              </button>

              {/* Hire Me Button */}
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
              className="md:hidden relative z-20 p-2 text-pink-400 hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
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
                          ? 'bg-pink-500/20 text-pink-400 border-l-2 border-pink-400 pl-3'
                          : 'text-slate-300 hover:bg-pink-500/10 hover:text-cyan-400'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                {/* Mobile Download CV button */}
                <button
                  onClick={() => {
                    downloadCV();
                    setIsOpen(false);
                  }}
                  className="mobile-nav-item flex items-center justify-center w-full gap-2 px-4 py-3 bg-slate-800/50 text-slate-200 text-sm font-semibold rounded-lg hover:bg-slate-700/50 transition-all duration-300"
                >
                  <Download size={18} />
                  Download CV
                </button>
                <Link
                  to="/hire-me"
                  onClick={() => setIsOpen(false)}
                  className="mobile-nav-item block w-full mt-2 px-4 py-3 bg-gradient-to-r from-pink-500 to-cyan-400 text-white text-sm font-semibold rounded-lg text-center hover:from-pink-600 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-pink-500/30"
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
