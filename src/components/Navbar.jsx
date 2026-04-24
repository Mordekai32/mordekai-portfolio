import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Download, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [downloadHovered, setDownloadHovered] = useState(false);
  const [hireHovered, setHireHovered] = useState(false);
  const navbarRef = useRef(null);

  // Enhanced CV with "Innovative Developer" branding
  const cvText = `✨ INNOVATIVE DEVELOPER PORTFOLIO ✨
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ UKOBUKEYE MORDEKAI ⚡
   Innovative Software Developer | Creative Technologist

📌 PROFILE
─────────────────────────────────────────────────
Passionate about pushing boundaries with modern web technologies,
AI, and blockchain. Building solutions that combine elegance,
performance, and real-world impact.

🛠️ TECH STACK
─────────────────────────────────────────────────
Frontend: React, Next.js, TailwindCSS, Three.js, Framer Motion
Backend: Node.js, Python, FastAPI, GraphQL
Database: MongoDB, PostgreSQL, Firebase
Innovation: Web3, Smart Contracts, IoT, TensorFlow.js
Tools: Git, Docker, AWS, Vercel

🚀 INNOVATIVE PROJECTS
─────────────────────────────────────────────────
• AgriConnect Rwanda – AI-powered farming marketplace
• Solar P2P Network – Blockchain energy trading platform
• Smart Waste AI – IoT + ML waste management
• Crowd Predictor – Predictive analytics for public transit
• School Management System – Full-stack admin platform
• Job Finder AI – Intelligent job matching engine

🎓 EDUCATION & CERTIFICATIONS
─────────────────────────────────────────────────
Saint Laurent Gaseke TSS – Advanced CS
• React Mastery
• Blockchain Developer
• AI Specialist

🌐 LANGUAGES
─────────────────────────────────────────────────
Kinyarwanda (Native) | English (Fluent) | French (Intermediate)

📫 LET'S CONNECT
─────────────────────────────────────────────────
Email: mordekai@innovative.dev | GitHub: @mordekai
Portfolio: mordekai.dev

“Innovation distinguishes between a leader and a follower.”
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

  const downloadCV = () => {
    const blob = new Blob(["\uFEFF" + cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Mordekai_Innovative_Developer_CV.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navItems = [
    { label: 'Home', path: '/', end: true, icon: '🏠', color: '#2563EB' },
    { label: 'About', path: '/about', icon: '🌟', color: '#3B82F6' },
    { label: 'Projects', path: '/projects', icon: '💎', color: '#1D4ED8' },
    { label: 'Resume', path: '/resume', icon: '📜', color: '#1E40AF' },
    { label: 'Contact', path: '/contact', icon: '💌', color: '#2563EB' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        :root {
          --blue-light: #EFF6FF;
          --blue-bright: #3B82F6;
          --blue-deep: #1E3A8A;
          --white-pure: #FFFFFF;
          --gray-soft: #F9FAFB;
          --shadow-sm: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.02);
          --shadow-md: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.02);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(10px); }
        }

        @keyframes gentlePulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .navbar {
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }

        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(59, 130, 246, 0.2);
          box-shadow: var(--shadow-sm);
        }

        .navbar-transparent {
          background: transparent;
        }

        .logo-gradient {
          background: linear-gradient(120deg, #1E3A8A, #3B82F6, #2563EB);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight: 800;
          transition: all 0.3s;
        }

        .logo-sub {
          color: #4B5563;
          font-weight: 500;
          letter-spacing: 0.08em;
        }

        .innovative-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: linear-gradient(120deg, #EFF6FF, #DBEAFE);
          padding: 3px 10px;
          border-radius: 40px;
          font-size: 0.7rem;
          font-weight: 600;
          color: #1E40AF;
          border: 1px solid rgba(59, 130, 246, 0.3);
          margin-left: 8px;
          white-space: nowrap;
          transition: all 0.2s;
        }

        .innovative-badge:hover {
          background: #DBEAFE;
          transform: translateY(-1px);
        }

        .nav-link-item {
          position: relative;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          transition: all 0.2s ease;
          border-radius: 40px;
          padding: 0.5rem 1rem;
          color: #1F2937;
        }

        .nav-link-item:hover {
          background: rgba(59, 130, 246, 0.08);
          color: #1E40AF;
        }

        .nav-link-item.active {
          background: rgba(59, 130, 246, 0.12);
          color: #2563EB;
          font-weight: 600;
        }

        .cta-button {
          background: linear-gradient(105deg, #1E3A8A, #3B82F6);
          border: none;
          transition: all 0.25s ease;
          box-shadow: 0 2px 6px rgba(37, 99, 235, 0.2);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 20px -12px rgba(37, 99, 235, 0.4);
          background: linear-gradient(105deg, #1E40AF, #2563EB);
        }

        .download-btn {
          transition: all 0.2s ease;
          color: #4B5563;
        }

        .download-btn:hover {
          color: #2563EB;
          transform: scale(1.05);
        }

        .mobile-menu {
          animation: slideDown 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 32px;
          margin: 0 16px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }

        .mobile-link {
          transition: all 0.2s ease;
          border-radius: 20px;
          color: #1F2937;
        }

        .mobile-link.active {
          background: linear-gradient(105deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.05));
          color: #2563EB;
        }

        .bg-shine {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }

        @keyframes spinOnce {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(180deg); }
        }
        .animate-spin-once {
          animation: spinOnce 0.3s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>

      <nav
        ref={navbarRef}
        className={`navbar fixed top-0 w-full z-50 transition-all duration-400 ${
          scrolled ? 'navbar-scrolled' : 'navbar-transparent'
        }`}
      >
        {/* Animated blue orbs for depth */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(59,130,246,0.15), rgba(37,99,235,0.05), transparent)',
              left: mousePosition.x * 0.02,
              top: mousePosition.y * 0.02,
              transform: 'translate(-50%, -50%)',
              filter: 'blur(60px)',
              transition: 'all 0.2s ease-out',
            }}
          />
          <div
            className="absolute w-64 h-64 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(96,165,250,0.12), transparent)',
              right: '5%',
              top: '5%',
              animation: 'float 14s ease-in-out infinite',
              filter: 'blur(50px)',
            }}
          />
          <div
            className="absolute w-48 h-48 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(59,130,246,0.1), transparent)',
              left: '10%',
              bottom: '0%',
              animation: 'float 12s ease-in-out infinite reverse',
              filter: 'blur(40px)',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo with modern badge */}
            <Link to="/" className="group relative">
              <div className="flex flex-col">
                <div className="flex items-center flex-wrap gap-1">
                  <span className="logo-gradient text-2xl sm:text-3xl font-black tracking-tight">
                    UKOBUKEYE
                  </span>
                  <div className="innovative-badge">
                    <Zap size={12} strokeWidth={2} />
                    <span>Innovative Dev</span>
                  </div>
                </div>
                <span className="logo-sub text-[11px] sm:text-xs font-medium tracking-[0.2em] transition-all duration-300 group-hover:tracking-[0.3em]">
                  Mordekai • Creative Technologist
                </span>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-600/0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl -z-10" />
            </Link>

            {/* Desktop Navigation - clean and modern */}
            <div className="hidden md:flex items-center gap-0.5 lg:gap-1 bg-white/40 backdrop-blur-sm rounded-full px-1 py-1 shadow-sm">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.end}
                  className={({ isActive }) =>
                    `nav-link-item text-sm lg:text-base font-medium transition-all duration-200 ${
                      isActive ? 'active' : ''
                    }`
                  }
                  style={({ isActive }) => ({
                    color: isActive ? item.color : '#374151',
                  })}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-base">{item.icon}</span>
                    {item.label}
                  </span>
                </NavLink>
              ))}
            </div>

            {/* Desktop Actions - modern CTA */}
            <div className="hidden md:flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={downloadCV}
                  onMouseEnter={() => setDownloadHovered(true)}
                  onMouseLeave={() => setDownloadHovered(false)}
                  className="download-btn p-2.5 text-gray-600 hover:text-blue-600 transition-all duration-200 rounded-full hover:bg-blue-50"
                  aria-label="Download CV"
                >
                  <Download size={20} strokeWidth={1.6} />
                </button>
                {downloadHovered && (
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-white text-gray-800 text-xs rounded-full whitespace-nowrap shadow-lg border border-blue-200 font-medium">
                    Download Portfolio
                  </span>
                )}
              </div>

              <Link
                to="/hire-me"
                onMouseEnter={() => setHireHovered(true)}
                onMouseLeave={() => setHireHovered(false)}
                className="cta-button relative px-5 py-2.5 rounded-full text-white text-sm font-semibold overflow-hidden group flex items-center gap-2 shadow-md"
              >
                <Sparkles size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Hire Me</span>
                <ArrowRight
                  size={16}
                  className={`transition-all duration-300 ${
                    hireHovered ? 'translate-x-1 opacity-100' : 'opacity-70'
                  }`}
                />
                <div className="absolute inset-0 bg-shine opacity-30 group-hover:opacity-50 transition-opacity" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-20 p-2 text-gray-700 hover:text-blue-600 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} strokeWidth={1.8} className="animate-spin-once" />
              ) : (
                <Menu size={24} strokeWidth={1.8} />
              )}
            </button>
          </div>

          {/* Mobile Navigation - sleek dropdown */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 pt-2 pb-4 px-3">
              <div className="mobile-menu p-3">
                <div className="space-y-1.5">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      end={item.end}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `mobile-link flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                          isActive
                            ? 'active'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                        }`
                      }
                      style={({ isActive }) => ({
                        color: isActive ? item.color : undefined,
                      })}
                    >
                      <span className="text-xl">{item.icon}</span>
                      {item.label}
                    </NavLink>
                  ))}
                  
                  <button
                    onClick={() => {
                      downloadCV();
                      setIsOpen(false);
                    }}
                    className="flex items-center justify-center w-full gap-2 px-4 py-3 mt-2 bg-gray-50 text-gray-700 text-sm font-medium rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border border-gray-100"
                  >
                    <Download size={18} />
                    Download CV
                  </button>
                  
                  <Link
                    to="/hire-me"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full gap-2 mt-2 px-4 py-3 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-200"
                  >
                    <Sparkles size={18} />
                    Hire Me
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden animate-fadeIn"
          onClick={() => setIsOpen(false)}
          style={{ top: navbarHeight }}
        />
      )}
    </>
  );
}
