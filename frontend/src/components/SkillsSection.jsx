import React from 'react';
import { Monitor, Server, Wrench, Database } from 'lucide-react';
import { skills } from '../data/mock';
import { useTheme } from '../context/ThemeContext';

const iconMap = {
  Monitor: Monitor,
  Server: Server,
  Wrench: Wrench,
  Database: Database
};

const SkillCard = ({ skill, index, isDark }) => {
  const Icon = iconMap[skill.icon];
  
  return (
    <div
      className={`group relative p-8 border transition-all duration-500 hover:-translate-y-2 ${
        isDark 
          ? 'bg-white/[0.02] border-white/10 hover:border-white/30' 
          : 'bg-black/[0.02] border-black/10 hover:border-black/30'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Corner Accent */}
      <div className={`absolute top-0 right-0 w-16 h-16 border-t border-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        isDark ? 'border-white/20' : 'border-black/20'
      }`} />
      
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 border transition-all duration-300 ${
          isDark 
            ? 'border-white/20 text-white group-hover:bg-white group-hover:text-black' 
            : 'border-black/20 text-black group-hover:bg-black group-hover:text-white'
        }`}>
          <Icon size={24} />
        </div>
        <h3
          className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-black'}`}
          style={{ fontFamily: 'Archivo, sans-serif' }}
        >
          {skill.title}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item, i) => (
          <span
            key={i}
            className={`px-3 py-1 text-sm border transition-all duration-300 ${
              isDark 
                ? 'text-gray-400 bg-white/5 border-white/10 hover:border-white/30 hover:text-white' 
                : 'text-gray-600 bg-black/5 border-black/10 hover:border-black/30 hover:text-black'
            }`}
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
  const { isDark } = useTheme();

  return (
    <section id="skills" className={`relative py-32 transition-colors duration-500 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      {/* Gradient Accent */}
      <div className={`absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r to-transparent ${
        isDark ? 'from-white/50' : 'from-black/50'
      }`} />
      <div className={`absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l to-transparent ${
        isDark ? 'from-white/50' : 'from-black/50'
      }`} />

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
            className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-black'}`}
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            Skills & Technologies
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
