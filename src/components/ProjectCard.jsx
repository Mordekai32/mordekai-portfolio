import { useState } from 'react';
import { FaMapMarkerAlt, FaGithub } from 'react-icons/fa'; // <-- Import icons

export default function ProjectCard({
  title,
  description,
  image,
  techStack,
  link,
  location,   // optional
  github,     // optional
}) {
  const [imgSrc, setImgSrc] = useState(image || '/default-project.jpg');

  return (
    <div className="project-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2.5rem] overflow-hidden group transition-all duration-500 hover:-translate-y-3 hover:border-primary/50 hover:shadow-2xl">
      <div className="h-56 overflow-hidden relative">
        <img
          src={imgSrc}
          alt={title}
          onError={() => setImgSrc('/default-project.jpg')}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mt-2 mb-3">{title}</h3>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">{description}</p>

        {/* Location icon (only shown if location prop exists) */}
        {location && (
          <div className="flex items-center text-slate-400 text-sm mb-3">
            <FaMapMarkerAlt className="mr-1 text-indigo-400" />
            <span>{location}</span>
          </div>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack?.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-white/5 text-slate-300 text-[10px] font-bold uppercase rounded-full border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub link (only shown if github prop exists) */}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 text-sm font-semibold mr-4"
          >
            <FaGithub className="mr-1" /> GitHub
          </a>
        )}

        {/* Project link */}
        {link && (
          <a
            href={link}
            className="inline-block text-sky-400 text-sm font-semibold hover:underline"
          >
            Explore <i className="fas fa-arrow-right ml-1"></i>
          </a>
        )}
      </div>
    </div>
  );
}