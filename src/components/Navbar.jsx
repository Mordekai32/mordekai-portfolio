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
    { label: 'Home', path: '/', end: true, icon: '🏠', color: '#FFB347' },
    { label: 'About', path: '/about', icon: '🌟', color: '#FF6B9D' },
    { label: 'Projects', path: '/projects', icon: '💎', color: '#6C5CE7' },
    { label: 'Resume', path: '/resume', icon: '📜', color: '#00CEC9' },
    { label: 'Contact', path: '/contact', icon: '💌', color: '#FD79A8' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        :root {
          --bg-deep: #0B0C10;
          --bg-mid: #1F1B24;
          --bg-card: #2A2438;
          --accent-1: #FF6B6B;
          --accent-2: #4ECDC4;
          --accent-3: #FFE66D;
          --accent-4: #A06AB4;
          --accent-5: #FF9F4A;
          --glass-white: rgba(255, 255, 255, 0.08);
          --glass-border: rgba(255, 255, 255, 0.12);
        }

        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
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

        @keyframes pulseGlow {
          0%, 100% { text-shadow: 0 0 4px rgba(255,107,107,0.5); }
          50% { text-shadow: 0 0 12px rgba(255,107,107,0.8); }
        }

        .navbar {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .glass-nav {
          background: rgba(11, 12, 16, 0.75);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--glass-border);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        .logo-gradient {
          background: linear-gradient(135deg, #FF6B6B, #4ECDC4, #FFE66D, #A06AB4);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientFlow 6s ease infinite;
          font-weight: 800;
        }

        .logo-sub {
          background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,107,107,0.7));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        .innovative-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(255,107,107,0.15);
          backdrop-filter: blur(4px);
          padding: 2px 8px;
          border-radius: 20px;
          font-size: 0.65rem;
          font-weight: 600;
          color: #FF6B6B;
          border: 1px solid rgba(255,107,107,0.3);
          margin-left: 6px;
          white-space: nowrap;
        }

        .innovative-badge span {
          animation: pulseGlow 2s infinite;
        }

        .nav-link-item {
          position: relative;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          transition: all 0.3s ease;
          background: transparent;
          border-radius: 12px;
        }

        .nav-link-item::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-1), var(--accent-3));
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .nav-link-item:hover::before {
          width: 70%;
        }

        .nav-link-item.active {
          background: rgba(255, 107, 107, 0.15);
          color: #FF6B6B;
          box-shadow: 0 0 12px rgba(255, 107, 107, 0.2);
        }

        .nav-link-item.active::before {
          width: 50%;
          background: #FF6B6B;
        }

        .cta-button {
          background: linear-gradient(135deg, #FF6B6B, #FF9F4A);
          border: none;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 107, 107, 0.4);
        }

        .download-btn {
          transition: all 0.3s ease;
        }

        .download-btn:hover {
          color: #FF6B6B;
          transform: scale(1.05);
        }

        .mobile-menu {
          animation: slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          background: rgba(31, 27, 36, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          margin: 0 12px;
          overflow: hidden;
        }

        .mobile-link {
          transition: all 0.2s ease;
          border-radius: 16px;
        }

        .mobile-link.active {
          background: linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(78, 205, 196, 0.1));
          color: #FF6B6B;
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
        className={`navbar fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav' : 'bg-transparent'
        }`}
      >
        {/* Animated gradient background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #FF6B6B, #4ECDC4, transparent)',
              left: mousePosition.x * 0.03,
              top: mousePosition.y * 0.03,
              transform: 'translate(-50%, -50%)',
              filter: 'blur(80px)',
              transition: 'all 0.2s ease-out',
            }}
          />
          <div
            className="absolute w-72 h-72 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #FFE66D, #A06AB4, transparent)',
              right: '5%',
              top: '10%',
              animation: 'float 10s ease-in-out infinite',
              filter: 'blur(60px)',
            }}
          />
          <div
            className="absolute w-56 h-56 rounded-full opacity-15"
            style={{
              background: 'radial-gradient(circle, #4ECDC4, #FF9F4A, transparent)',
              left: '15%',
              bottom: '0%',
              animation: 'float 8s ease-in-out infinite reverse',
              filter: 'blur(50px)',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo with "Innovative Developer" badge */}
            <Link to="/" className="group relative">
              <div className="flex flex-col">
                <div className="flex items-center flex-wrap gap-1">
                  <span className="logo-gradient text-2xl sm:text-3xl font-black tracking-tighter">
                    UKOBUKEYE
                  </span>
                  <div className="innovative-badge">
                    <Zap size={12} />
                    <span>Innovative Developer</span>
                  </div>
                </div>
                <span className="logo-sub text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase transition-all duration-300 group-hover:tracking-[0.4em]">
                  Mordekai • Creative Technologist
                </span>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6B6B]/0 via-[#FFE66D]/20 to-[#4ECDC4]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl -z-10" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.end}
                  className={({ isActive }) =>
                    `nav-link-item px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-white/80 hover:text-white transition-all duration-300 ${
                      isActive ? 'active' : ''
                    }`
                  }
                  style={({ isActive }) => ({
                    color: isActive ? item.color : 'inherit',
                  })}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg">{item.icon}</span>
                    {item.label}
                  </span>
                </NavLink>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={downloadCV}
                  onMouseEnter={() => setDownloadHovered(true)}
                  onMouseLeave={() => setDownloadHovered(false)}
                  className="download-btn p-2.5 text-white/70 hover:text-[#FF6B6B] transition-all duration-300 rounded-full hover:bg-white/5"
                  aria-label="Download CV"
                >
                  <Download size={20} strokeWidth={1.8} />
                </button>
                {downloadHovered && (
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-[#1F1B24] text-white text-xs rounded-full whitespace-nowrap shadow-lg border border-[#FF6B6B]/30 backdrop-blur-sm">
                    Download Portfolio
                  </span>
                )}
              </div>

              <Link
                to="/hire-me"
                onMouseEnter={() => setHireHovered(true)}
                onMouseLeave={() => setHireHovered(false)}
                className="cta-button relative px-6 py-2.5 rounded-full text-white text-sm font-semibold overflow-hidden group flex items-center gap-2"
              >
                <Sparkles size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Hire Me</span>
                <ArrowRight
                  size={16}
                  className={`transition-all duration-300 ${
                    hireHovered ? 'translate-x-1 opacity-100' : 'opacity-70'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-20 p-2 text-white hover:text-[#FF6B6B] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B6B] rounded-xl bg-white/5 backdrop-blur-sm"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} strokeWidth={1.8} className="animate-spin-once" />
              ) : (
                <Menu size={24} strokeWidth={1.8} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 pt-2 pb-4 px-2">
              <div className="mobile-menu p-2">
                <div className="space-y-1">
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
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        }`
                      }
                      style={({ isActive }) => ({
                        color: isActive ? item.color : 'inherit',
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
                    className="flex items-center justify-center w-full gap-2 px-4 py-3 mt-2 bg-white/5 text-white/80 text-sm font-medium rounded-xl hover:bg-white/10 transition-all duration-200 border border-white/10"
                  >
                    <Download size={18} />
                    Download CV
                  </button>
                  
                  <Link
                    to="/hire-me"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full gap-2 mt-2 px-4 py-3 bg-gradient-to-r from-[#FF6B6B] to-[#FF9F4A] text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#FF6B6B]/30"
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
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden animate-fadeIn"
          onClick={() => setIsOpen(false)}
          style={{ top: navbarHeight }}
        />
      )}
    </>
  );
}
