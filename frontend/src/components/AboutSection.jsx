import React from 'react';
import { personalInfo } from '../data/mock';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t border-l border-white/30" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b border-r border-white/30" />
              
              {/* Main Image */}
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={personalInfo.images.portrait2}
                  alt="Katlego Seiphemo"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -right-4 top-1/4 bg-white text-black px-4 py-2 shadow-2xl">
                <p className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Archivo, sans-serif' }}>
                  Available for Work
                </p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p
              className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              About Me
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-8"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              Crafting Digital
              <br />
              <span className="text-gray-500">Experiences</span>
            </h2>
            <div className="space-y-6">
              <p
                className="text-gray-400 text-lg leading-relaxed"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                {personalInfo.bio}
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div>
                  <p className="text-3xl font-bold text-white" style={{ fontFamily: 'Archivo, sans-serif' }}>
                    3+
                  </p>
                  <p className="text-gray-500 text-sm tracking-wide" style={{ fontFamily: 'Archivo, sans-serif' }}>
                    Projects Completed
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white" style={{ fontFamily: 'Archivo, sans-serif' }}>
                    10+
                  </p>
                  <p className="text-gray-500 text-sm tracking-wide" style={{ fontFamily: 'Archivo, sans-serif' }}>
                    Technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
