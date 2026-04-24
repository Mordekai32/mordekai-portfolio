import { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaLinkedin, FaInstagram, FaTwitter, FaArrowRight } from 'react-icons/fa';

export default function Contact() {
  const [toast, setToast] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('mordekai893@gmail.com');
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  const contacts = [
    {
      type: 'call',
      title: 'Direct Call',
      description: 'Available for urgent inquiries',
      detail: '0796 381 024',
      href: 'tel:0796381024',
      icon: FaPhoneAlt,
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      type: 'whatsapp',
      title: 'WhatsApp',
      description: 'Chat instantly',
      detail: '+250 728 800 993',
      href: 'https://wa.me/250728800993',
      icon: FaWhatsapp,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      type: 'email',
      title: 'Email Me',
      description: 'mordekai893@gmail.com',
      detail: 'Click to copy',
      onClick: copyEmail,
      icon: FaEnvelope,
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      type: 'linkedin',
      title: 'LinkedIn',
      href: 'https://linkedin.com/in/UKOBUKEYE-Mordekai',
      icon: FaLinkedin,
      gradient: 'from-sky-500 to-blue-600',
    },
    {
      type: 'instagram',
      title: 'Instagram',
      href: 'https://instagram.com/Blaise_320',
      icon: FaInstagram,
      gradient: 'from-pink-500 to-orange-500',
    },
    {
      type: 'twitter',
      title: 'Twitter / X',
      href: 'https://twitter.com/mordekai668896',
      icon: FaTwitter,
      gradient: 'from-gray-600 to-gray-800',
      username: '@mordekai668896',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a] flex flex-col relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 w-full flex-1">
        {/* Header section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-xs font-medium tracking-wider text-gray-300 uppercase">Let's connect</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter">
            <span className="text-white">Get in</span>{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          
          <div className="flex justify-center mb-6">
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          </div>
          
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Have a project in mind or just want to say hello? I'm just a message away.
          </p>
        </div>

        {/* Contact cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            const isMainCard = ['call', 'whatsapp', 'email'].includes(contact.type);
            
            if (isMainCard) {
              // Large cards for primary actions
              return (
                <div
                  key={contact.type}
                  onClick={contact.onClick}
                  className={`group relative p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 cursor-pointer ${
                    contact.type === 'email' ? 'cursor-pointer' : ''
                  }`}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" 
                       style={{ background: `linear-gradient(135deg, ${contact.gradient.split(' ')[1]}, ${contact.gradient.split(' ')[3]})` }}></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-3xl text-indigo-400 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{contact.description}</p>
                    <div className="mt-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm font-mono">
                      {contact.detail}
                    </div>
                    {contact.type === 'email' && (
                      <span className="mt-4 text-xs text-gray-500 group-hover:text-indigo-400 transition-colors">
                        Click to copy email
                      </span>
                    )}
                  </div>
                </div>
              );
            } else {
              // Compact cards for social
              return (
                <a
                  key={contact.type}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="text-2xl text-indigo-400 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{contact.title}</h3>
                      {contact.username && (
                        <p className="text-xs text-indigo-400">{contact.username}</p>
                      )}
                    </div>
                  </div>
                  <FaArrowRight className="text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                </a>
              );
            }
          })}
        </div>

        {/* Additional contact info */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm">
             <span className="text-indigo-400"></span>
          </p>
        </div>
      </main>

      {/* Toast notification */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-slideUp">
          <div className="flex items gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-2xl border border-white/20">
            <span className="text-xl">✅</span>
            <span className="font-medium">Email copied to clipboard!</span>
          </div>
        </div>
      )}

      {/* Custom animations style */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translate(-50%, 20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
