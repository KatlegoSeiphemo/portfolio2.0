import React from 'react';
import { Monitor, Server, Wrench, Database } from 'lucide-react';
import { skills } from '../data/mock';

const iconMap = {
  Monitor: Monitor,
  Server: Server,
  Wrench: Wrench,
  Database: Database
};

const SkillCard = ({ skill, index }) => {
  const Icon = iconMap[skill.icon];
  
  return (
    <div
      className="group relative p-8 bg-white/[0.02] border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 border border-white/20 text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
          <Icon size={24} />
        </div>
        <h3
          className="text-xl font-semibold text-white"
          style={{ fontFamily: 'Archivo, sans-serif' }}
        >
          {skill.title}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item, i) => (
          <span
            key={i}
            className="px-3 py-1 text-sm text-gray-400 bg-white/5 border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = Object.values(skills);

  return (
    <section id="skills" className="relative py-32 bg-black">
      {/* Gradient Accent */}
      <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-white/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-white/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            Expertise
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            Skills & Technologies
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
