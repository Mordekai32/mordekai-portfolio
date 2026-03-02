import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/a.jpg';

// SkillBadge Component
function SkillBadge({ children, icon }) {
  return (
    <div
      className="px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2 transition-all duration-300 cursor-pointer"
      style={{
        backgroundColor: 'rgba(79,70,229,0.15)',
        color: '#4F46E5',
        border: '1px solid rgba(79,70,229,0.3)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(79,70,229,0.25)';
        e.currentTarget.style.borderColor = '#4F46E5';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(79,70,229,0.2)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(79,70,229,0.15)';
        e.currentTarget.style.borderColor = 'rgba(79,70,229,0.3)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </div>
  );
}

export default function Home() {
  const [displayName, setDisplayName] = useState('');
  const fullName = 'UKOBUKEYE Mordekai';

  useEffect(() => {
    let i = 0;
    setDisplayName('');
    const timer = setInterval(() => {
      if (i < fullName.length) {
        setDisplayName(fullName.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
      style={{ backgroundColor: '#0F0F0F' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(79,70,229,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl w-full relative z-10 text-center">

        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div
            className="p-[3px] rounded-full"
            style={{
              background: 'linear-gradient(135deg, #4F46E5, #94A3B8)',
              boxShadow: '0 0 50px rgba(79,70,229,0.25)',
            }}
          >
            <div
              className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden"
              style={{ border: '4px solid #0F0F0F' }}
            >
              <img
                src={profileImage}
                alt="UKOBUKEYE Mordekai"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Role label */}
        <h3
          className="flex items-center justify-center gap-3 text-xs md:text-sm font-black uppercase tracking-[0.4em] mb-6"
          style={{ color: '#4F46E5' }}
        >
          <span className="w-12 h-[1px]" style={{ backgroundColor: 'rgba(79,70,229,0.4)' }} />
          Software Engineer
          <span className="w-12 h-[1px]" style={{ backgroundColor: 'rgba(79,70,229,0.4)' }} />
        </h3>

        {/* Name heading — fixed typewriter using slice() */}
        <h1
          className="text-5xl md:text-8xl font-black mb-8 tracking-tight leading-[1.1]"
          style={{ color: '#FFFFFF' }}
        >
          Hi, I&apos;m <br />
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(90deg, #4F46E5, #94A3B8, #FFFFFF)' }}
          >
            {displayName}
          </span>
          {displayName.length < fullName.length && (
            <span
              className="inline-block w-[3px] h-[0.75em] ml-1 align-middle animate-pulse"
              style={{ backgroundColor: '#4F46E5', borderRadius: '2px' }}
            />
          )}
        </h1>

        {/* Description */}
        <p
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          style={{ color: '#94A3B8' }}
        >
          Based in{' '}
          <span style={{ color: '#FFFFFF' }} className="font-medium">Kigali</span>
          , I build high-performance applications leveraging modern{' '}
          <span style={{ color: '#4F46E5' }} className="font-medium">Cloud</span>{' '}
          architecture and{' '}
          <span style={{ color: '#FFFFFF' }} className="font-medium">AI</span>{' '}
          integration.
        </p>

        {/* Skill badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <SkillBadge icon="⚛️">React & Next.js</SkillBadge>
          <SkillBadge icon="🔗">Smart Contracts</SkillBadge>
          <SkillBadge icon="💚">Node.js</SkillBadge>
          <SkillBadge icon="🗄️">PostgreSQL</SkillBadge>
          <SkillBadge icon="☁️">AWS Cloud</SkillBadge>
          <SkillBadge icon="🎨">Tailwind CSS</SkillBadge>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          <Link
            to="/projects"
            className="w-full md:w-auto px-12 py-4 font-bold rounded-2xl transition-all duration-300"
            style={{
              backgroundColor: '#4F46E5',
              color: '#FFFFFF',
              boxShadow: '0 8px 30px rgba(79,70,229,0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#6056f5';
              e.currentTarget.style.boxShadow = '0 8px 40px rgba(79,70,229,0.5)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#4F46E5';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(79,70,229,0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="w-full md:w-auto px-12 py-4 font-bold rounded-2xl transition-all duration-300"
            style={{
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              border: '1px solid rgba(148,163,184,0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#4F46E5';
              e.currentTarget.style.backgroundColor = 'rgba(79,70,229,0.08)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(148,163,184,0.3)';
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
