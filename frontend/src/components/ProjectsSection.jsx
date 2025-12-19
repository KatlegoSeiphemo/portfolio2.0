import React, { useState } from 'react';
import { ExternalLink, Github, Award } from 'lucide-react';
import { projects } from '../data/mock';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-white/[0.02] border border-white/10 hover:border-white/30 transition-all duration-500">
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className={`w-full h-full object-cover transition-all duration-700 grayscale ${
              isHovered ? 'scale-110 grayscale-0' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500" />
          
          {/* Award Badge */}
          {project.award && (
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white text-black text-xs font-medium">
              <Award size={14} />
              <span style={{ fontFamily: 'Archivo, sans-serif' }}>{project.award}</span>
            </div>
          )}

          {/* Hover Overlay with Links */}
          <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white text-black hover:bg-gray-200 transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3
              className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors duration-300"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              {project.name}
            </h3>
            <span
              className="text-xs text-gray-500 tracking-widest"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              0{index + 1}
            </span>
          </div>
          <p
            className="text-gray-400 text-sm leading-relaxed mb-6"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs text-gray-500 border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32 bg-black">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-white/5 rounded-full" />
      <div className="absolute bottom-20 left-20 w-32 h-32 border border-white/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p
              className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              Portfolio
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              Featured Projects
            </h2>
          </div>
          <p
            className="text-gray-500 max-w-md"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            A selection of my recent work, showcasing full-stack development across web and mobile platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
