import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-slate-950/85 backdrop-blur-2xl border-b border-sky-500/10 shadow-2xl'
            : 'bg-slate-950/40 backdrop-blur-xl border-b border-white/5'
        }`}
        style={{
          backgroundImage: scrolled
            ? 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(15, 23, 42, 0.4), rgba(2, 8, 23, 0))'
            : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              to="/"
              className="relative group"
            >
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-cyan-400 uppercase transition-all duration-300 group-hover:from-sky-200 group-hover:to-cyan-300">
                  UKOBUKEYE
                </span>
                <span className="text-xs font-light tracking-[0.2em] text-sky-500/70 uppercase group-hover:text-sky-400 transition-colors">
                  Mordekai
                </span>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-600/0 via-sky-500/0 to-cyan-600/0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 group ${
                      isActive ? 'text-sky-300' : 'text-slate-300 hover:text-sky-300'
                    }`
                  }
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-0 bg-sky-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-0 left-4 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-400 group-hover:w-6 transition-all duration-300" />
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/hire-me"
                className="relative group px-6 py-2 overflow-hidden rounded-full font-semibold transition-all duration-300"
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse" />

                {/* Border glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500/50 to-cyan-500/50 rounded-full opacity-50 group-hover:opacity-100 -z-10 transition-opacity duration-300 blur" />

                {/* Text */}
                <span className="relative z-10 block text-white group-hover:text-white transition-colors duration-300">
                  Hire Me
                </span>

                {/* Static border */}
                <div className="absolute inset-0 border border-sky-500/30 rounded-full group-hover:border-sky-500/100 transition-colors duration-300 pointer-events-none" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-20 p-2 text-sky-400 hover:text-sky-300 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} strokeWidth={2.5} />
              ) : (
                <Menu size={24} strokeWidth={2.5} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
              isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="pt-4 pb-6 space-y-3 border-t border-sky-500/10 mt-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-sky-500/20 text-sky-300 border-l-2 border-sky-400'
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
                className="block w-full mt-4 px-4 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-sm font-semibold rounded-lg text-center hover:from-sky-600 hover:to-cyan-600 transition-all duration-300"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>

        {/* Floating particles effect (subtle) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-sky-500/5 rounded-full mix-blend-screen blur-3xl animate-pulse" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/5 rounded-full mix-blend-screen blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </nav>

      {/* Mobile menu backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          style={{ top: '73px' }}
        />
      )}
    </>
  );
}