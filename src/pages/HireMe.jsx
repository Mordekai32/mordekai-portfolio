import { useState } from 'react';
import profileImage from '../assets/a.jpg';
import { FaArrowUp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { 
  Layers, 
  Brain, 
  Terminal, 
  CheckCircle, 
  ArrowRight, 
  Sparkles,
  Zap,
  Shield,
  Clock,
  Code,
  Rocket
} from 'lucide-react';

// Initialize EmailJS with your Public Key from the .env file
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export default function HireMe() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'mordekai893@gmail.com',
        }
      )
      .then(() => {
        alert('✅ Message sent successfully! I’ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        alert('❌ Failed to send message. Please try again later.');
        console.error('EmailJS error:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Stats data
  const stats = [
    { label: 'Projects Delivered', value: '40+', icon: Rocket },
    { label: 'Happy Clients', value: '35+', icon: Shield },
    { label: 'Avg Response', value: '< 2h', icon: Clock },
    { label: 'Lines of Code', value: '100k+', icon: Code },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700" />
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-blue-400 rounded-full filter blur-[100px] opacity-10 animate-float" />
        <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-indigo-400 rounded-full filter blur-[120px] opacity-10 animate-float-delayed" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Profile Image with Glow */}
          <div className="mb-10 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-400 via-white to-blue-500 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />
              <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-[2rem] overflow-hidden border-2 border-white/30 shadow-2xl">
                <img src={profileImage} alt="Mordekai" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-white/90">
              Available for Q1 2026
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1] text-white">
            Build <span className="bg-gradient-to-r from-blue-300 via-white to-blue-400 bg-clip-text text-transparent">
              Exceptional
            </span>
            <br />
            Digital Products
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            I turn complex ideas into fast, scalable, and beautiful web applications. 
            Let’s bring your vision to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#inquiry"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              Start a Project <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300"
            >
              View Pricing <Zap size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1"
            >
              <stat.icon size={32} className="text-blue-400 mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">What I Deliver</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Layers, title: 'Full Stack Development', desc: 'Modern React, Next.js, Node.js solutions engineered for scale and performance.', color: 'from-blue-500 to-cyan-500' },
              { icon: Brain, title: 'AI & Automation', desc: 'Integration of LLMs, smart agents, and workflow automation into your business.', color: 'from-indigo-500 to-blue-500' },
              { icon: Terminal, title: 'Cloud Architecture', desc: 'AWS, Vercel, Docker – I build for 99.9% uptime and auto-scaling.', color: 'from-blue-600 to-purple-500' },
            ].map((service, idx) => (
              <div
                key={service.title}
                className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition duration-500`} />
                <service.icon size={42} className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Reduced Prices */}
      <section id="pricing" className="py-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-white/70">Choose the plan that fits your project needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Starter Package */}
            <div className="group p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1">
              <span className="text-xs font-black uppercase tracking-wider text-blue-300">Single Project</span>
              <div className="mt-4 mb-6">
                <span className="text-5xl font-black text-white">$1,200</span>
                <span className="text-white/40 text-lg ml-2">/ project</span>
              </div>
              <ul className="space-y-4 mb-10">
                {['High-end UX/UI Design', 'Full Frontend + Backend', 'SEO & Performance Optimization', '1 Month Support'].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/70">
                    <CheckCircle size={18} className="text-blue-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#inquiry"
                className="block w-full py-4 text-center rounded-xl font-bold bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                Get Started
              </a>
            </div>

            {/* Partner Package - Recommended */}
            <div className="group p-8 md:p-10 rounded-3xl relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-blue-400 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-black uppercase tracking-wider shadow-lg">
                ✦ Best Value
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-blue-300">Partner Package</span>
              <div className="mt-4 mb-6">
                <span className="text-5xl font-black text-white">$2,800</span>
                <span className="text-white/40 text-lg ml-2">+</span>
              </div>
              <ul className="space-y-4 mb-10">
                {['Everything in Starter', 'AI Agent Integration', 'Priority 24/7 Support', '6 Months Maintenance'].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/80">
                    <CheckCircle size={18} className="text-blue-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#inquiry"
                className="block w-full py-4 text-center rounded-xl font-black bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                Start Partnership <ArrowRight size={16} className="inline ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form - With Glass Morphism */}
      <section id="inquiry" className="py-32 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Let’s Work Together</h2>
            <p className="text-white/60 text-lg">Tell me about your project and I’ll get back within 24h</p>
          </div>

          <div className="p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-wider text-blue-300 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 outline-none focus:border-blue-400 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-wider text-blue-300 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 outline-none focus:border-blue-400 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-wider text-blue-300 ml-1">Project Brief</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What are you looking to build? Any specific requirements?"
                  className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 outline-none focus:border-blue-400 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 rounded-xl font-black uppercase tracking-wider text-sm bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Sparkles size={18} className="animate-spin" /> Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message <ArrowRight size={16} />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer / Back to Top */}
      <div className="relative z-10 py-12 text-center border-t border-white/10">
        <p className="text-white/40 text-sm"></p>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-400 transition-all duration-300 hover:scale-110 focus:outline-none z-50"
        aria-label="Back to top"
      >
        <FaArrowUp size={18} />
      </button>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(-10px); }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 14s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
