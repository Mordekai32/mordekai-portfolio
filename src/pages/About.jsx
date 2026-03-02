import GlassCard from '../components/GlassCard';
import SkillBadge from '../components/SkillBadge';
import profileImage from '../assets/a.jpg';
import { FaEnvelope, FaMapMarkerAlt, FaCodeBranch } from 'react-icons/fa';

export default function About() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: '#0F0F0F', color: '#FFFFFF' }}
    >
      {/* Subtle top glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(79,70,229,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight" style={{ color: '#FFFFFF' }}>
            Who is{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #4F46E5, #94A3B8)' }}
            >
              Mordekai?
            </span>
          </h1>
          <div
            className="w-24 h-1.5 mx-auto rounded-full"
            style={{ backgroundColor: '#4F46E5' }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left profile card */}
          <div className="lg:col-span-4">
            <div
              className="p-8 rounded-[2.5rem] text-center sticky top-28"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(148,163,184,0.1)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="relative w-44 h-44 mx-auto mb-8">
                <div
                  className="absolute inset-0 rounded-3xl p-[3px]"
                  style={{
                    background: 'linear-gradient(135deg, #4F46E5, #94A3B8)',
                    boxShadow: '0 0 40px rgba(79,70,229,0.2)',
                  }}
                >
                  <div
                    className="w-full h-full rounded-3xl overflow-hidden"
                    style={{ border: '3px solid #0F0F0F' }}
                  >
                    <img src={profileImage} alt="Mordekai" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
                UKOBUKEYE Mordekai
              </h3>
              <p className="font-medium mb-8" style={{ color: '#4F46E5' }}>
                Software Architect & Developer
              </p>

              <div
                className="text-left space-y-5 pt-8"
                style={{ borderTop: '1px solid rgba(148,163,184,0.1)' }}
              >
                <div className="flex items-center transition" style={{ color: '#94A3B8' }}>
                  <FaEnvelope className="w-10 flex-shrink-0" style={{ color: '#4F46E5' }} />
                  <span className="text-sm">mordekai893@gmail.com</span>
                </div>
                <div className="flex items-center" style={{ color: '#94A3B8' }}>
                  <FaMapMarkerAlt className="w-10 flex-shrink-0" style={{ color: '#4F46E5' }} />
                  <span className="text-sm">Kigali, Rwanda</span>
                </div>
                <div className="flex items-center" style={{ color: '#94A3B8' }}>
                  <FaCodeBranch className="w-10 flex-shrink-0" style={{ color: '#4F46E5' }} />
                  <span className="text-sm">Open to Collaborations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Journey card */}
            <div
              className="p-8 rounded-3xl"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(148,163,184,0.1)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: '#FFFFFF' }}>
                <i className="fas fa-rocket mr-4" style={{ color: '#4F46E5' }}></i> My Journey
              </h3>
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#94A3B8' }}>
                <p>
                  I am a developer driven by curiosity and the desire to build things that matter.
                  Based in the heart of{' '}
                  <span style={{ color: '#FFFFFF' }} className="font-medium">Kigali</span>, I spend
                  my days transforming complex problems into elegant digital solutions.
                </p>
                <p>
                  My approach is simple:{' '}
                  <span
                    className="underline underline-offset-4"
                    style={{ color: '#4F46E5', textDecorationColor: 'rgba(79,70,229,0.4)' }}
                  >
                    Build it clean, build it fast, and build it for the user.
                  </span>{' '}
                  Whether it's a sleek frontend interface or a robust backend API, I ensure every
                  line of code serves a purpose.
                </p>
              </div>
            </div>

            {/* Tech Stack card */}
            <div
              className="p-8 rounded-3xl"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(148,163,184,0.1)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <h3 className="text-2xl font-bold mb-10 flex items-center" style={{ color: '#FFFFFF' }}>
                <i className="fas fa-microchip mr-4" style={{ color: '#4F46E5' }}></i> Tech Stack
              </h3>

              {/* Databases */}
              <div className="mb-12">
                <h4
                  className="text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center"
                  style={{ color: '#94A3B8' }}
                >
                  <span
                    className="w-8 h-[1px] mr-4"
                    style={{ backgroundColor: 'rgba(148,163,184,0.2)' }}
                  />
                  Databases
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {['MySQL', 'MongoDB', 'PostgreSQL'].map((db) => (
                    <div
                      key={db}
                      className="p-5 rounded-2xl flex items-center gap-4"
                      style={{
                        backgroundColor: 'rgba(79,70,229,0.08)',
                        border: '1px solid rgba(79,70,229,0.2)',
                        color: '#FFFFFF',
                      }}
                    >
                      <i className="fas fa-database" style={{ color: '#4F46E5' }}></i>
                      <span className="font-medium">{db}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modern Tooling */}
              <div>
                <h4
                  className="text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center"
                  style={{ color: '#94A3B8' }}
                >
                  <span
                    className="w-8 h-[1px] mr-4"
                    style={{ backgroundColor: 'rgba(148,163,184,0.2)' }}
                  />
                  Modern Tooling
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { name: 'Git / GitHub', icon: 'fa-git-alt', color: '#94A3B8' },
                    { name: 'REST APIs', icon: 'fa-bolt', color: '#94A3B8' },
                    { name: 'Node.js', icon: 'fa-server', color: '#94A3B8' },
                  ].map((tool) => (
                    <div
                      key={tool.name}
                      className="p-5 rounded-2xl flex items-center gap-4"
                      style={{
                        backgroundColor: 'rgba(79,70,229,0.08)',
                        border: '1px solid rgba(79,70,229,0.2)',
                        color: '#FFFFFF',
                      }}
                    >
                      <i className={`fas ${tool.icon}`} style={{ color: tool.color }}></i>
                      <span className="font-medium">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center pt-6">
              <a
                href="/projects"
                className="px-12 py-5 font-bold rounded-2xl transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  backgroundColor: '#4F46E5',
                  color: '#FFFFFF',
                  boxShadow: '0 8px 30px rgba(79,70,229,0.35)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#6056f5';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(79,70,229,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#4F46E5';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(79,70,229,0.35)';
                }}
              >
                See My Projects <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}