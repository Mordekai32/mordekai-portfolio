import ProjectCard from '../components/ProjectCard';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

const projectsData = [
  // Existing projects
  {
    title: 'Solar P2P Network',
    description: 'A peer-to-peer energy trading system allowing local households to sell excess solar power.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format',
    techStack: ['Smart Contracts', 'IoT', 'Real-time Trading', 'React'],
    link: '/explore-grid',
  },
  {
    title: 'Smart Waste AI',
    description: 'AI route optimization for garbage collection based on fill levels and traffic.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format',
    techStack: ['AI', 'Node.js'],
  },
  {
    title: 'Crowd Predictor',
    description: 'Predicting bus occupancy rates using historical data for commuters.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format',
    techStack: ['Python', 'API'],
  },
  // New projects
  {
    title: 'AgriConnect Rwanda',
    description: 'A digital marketplace connecting Rwandan farmers directly with buyers, reducing post‑harvest losses.',
    image: 'https://images.unsplash.com/photo-1523741543316-84b89f67996e?w=800&auto=format',
    techStack: ['React', 'Node.js', 'MongoDB', 'Mobile'],
    // ⬇️ Ibi ni byongeweho kuri AgriConnect gusa
    location: 'Rwanda',                         // Urugero rw'ahantu
    github: 'https://github.com/your-repo/agriconnect', // Link ya GitHub
    // Ushobora no kongeramo linkedin, twitter, etc.
  },
  {
    title: 'School Management System',
    description: 'Comprehensive platform for managing students, teachers, attendance, and grades.',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format',
    techStack: ['React', 'Express', 'PostgreSQL', 'Tailwind'],
  },
  {
    title: 'Job Finder Website',
    description: 'Smart job board with AI‑powered recommendations and one‑click applications.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format',
    techStack: ['React', 'Elasticsearch', 'Node.js', 'Auth0'],
  },
  {
    title: 'Movie App',
    description: 'Browse trending movies, view details, and save favorites using The Movie Database (TMDB) API.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format',
    techStack: ['React', 'Redux', 'TMDB API', 'SCSS'],
  },
  {
    title: 'Weather App Advanced',
    description: 'Hyper‑local weather forecasts with interactive maps, hourly graphs, and severe weather alerts.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format',
    techStack: ['React', 'Chart.js', 'OpenWeatherMap', 'Leaflet'],
  },
  {
    title: 'Ecommerce Admin Dashboard',
    description: 'Full‑featured dashboard to manage products, orders, customers, and sales analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format',
    techStack: ['React', 'Material‑UI', 'Recharts', 'Redux Toolkit'],
  },
];

export default function Projects() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div style={{ backgroundColor: '#0F0F0F', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Subtle top glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(79,70,229,0.1) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-20 relative z-10 flex-1 w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight" style={{ color: '#FFFFFF' }}>
            Innovation{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #4F46E5, #94A3B8)' }}
            >
              Hub
            </span>
          </h1>
          <div className="w-16 h-1 mx-auto rounded-full mb-6" style={{ backgroundColor: '#4F46E5' }} />
          <p className="max-w-2xl mx-auto text-lg" style={{ color: '#94A3B8' }}>
            Showing{' '}
            <span style={{ color: '#4F46E5' }} className="font-semibold">
              {projectsData.length} projects
            </span>{' '}
            ranging from AI‑driven city solutions to decentralized energy networks and full‑stack web apps.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>

      {/* Scroll-to-top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-colors z-20"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}