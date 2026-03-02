import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

const items = [
  { category: 'web', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', title: 'Data Analytics UI', desc: 'Dashboard for solar monitoring.' },
  { category: 'ai', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800', title: 'Neural Networks', desc: 'Visualizing city traffic AI.' },
  { category: 'iot', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800', title: 'Smart Metering', desc: 'IoT sensor integration system.' },
  { category: 'web', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800', title: 'Developer Portfolio', desc: 'Full-stack personal portfolio.' },
  { category: 'ai', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800', title: 'AI Chat Interface', desc: 'LLM-powered assistant UI.' },
  { category: 'iot', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', title: 'Smart City Sensors', desc: 'Real-time environmental monitoring.' },
  { category: 'web', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', title: 'E-Commerce Platform', desc: 'Scalable marketplace solution.' },
  { category: 'ai', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800', title: 'Predictive Analytics', desc: 'ML forecasting for supply chains.' },
  { category: 'iot', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800', title: 'Smart Office', desc: 'Automated workspace management.' },
];

const categoryLabels = {
  all: 'All Visuals',
  ai: 'AI',
  web: 'Web',
  iot: 'IoT',
};

export default function ExploreGrid() {
  const [filter, setFilter] = useState('all');
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const filteredItems = filter === 'all' ? items : items.filter((item) => item.category === filter);

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

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-6 py-20 relative z-10 flex-1 w-full">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight" style={{ color: '#FFFFFF' }}>
            Innovation{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #4F46E5, #94A3B8)' }}
            >
              Gallery
            </span>
          </h1>
          <div className="w-16 h-1 mx-auto rounded-full mb-5" style={{ backgroundColor: '#4F46E5' }} />
          <p className="max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
            Explore my visual projects across AI, web, and IoT.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {['all', 'ai', 'web', 'iot'].map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className="px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300"
                  style={{
                    backgroundColor: active ? '#4F46E5' : 'rgba(79,70,229,0.08)',
                    border: `1px solid ${active ? '#4F46E5' : 'rgba(79,70,229,0.25)'}`,
                    color: active ? '#FFFFFF' : '#94A3B8',
                    boxShadow: active ? '0 4px 20px rgba(79,70,229,0.35)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.backgroundColor = 'rgba(79,70,229,0.18)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.backgroundColor = 'rgba(79,70,229,0.08)';
                      e.currentTarget.style.color = '#94A3B8';
                    }
                  }}
                >
                  {categoryLabels[cat]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="break-inside-avoid mb-6 relative rounded-3xl overflow-hidden group cursor-pointer"
              style={{ border: '1px solid rgba(148,163,184,0.1)' }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />

              {/* Category pill */}
              <div className="absolute top-4 left-4">
                <span
                  className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"
                  style={{
                    backgroundColor: 'rgba(79,70,229,0.85)',
                    color: '#FFFFFF',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {item.category}
                </span>
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(to top, rgba(15,15,15,0.95) 0%, rgba(15,15,15,0.4) 60%, transparent 100%)',
                }}
              >
                <div
                  className="w-8 h-[2px] mb-3 transition-all duration-300"
                  style={{ backgroundColor: '#4F46E5' }}
                />
                <h3 className="text-xl font-bold mb-1" style={{ color: '#FFFFFF' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#94A3B8' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      
    </div>
  );
}