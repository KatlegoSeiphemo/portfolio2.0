import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/mock';

const HeroSection = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [personalInfo.images.portrait1, personalInfo.images.portrait2];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="overflow-hidden">
              <p
                className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4 animate-slideUp"
                style={{ fontFamily: 'Archivo, sans-serif', animationDelay: '0.2s' }}
              >
                Full Stack Developer
              </p>
            </div>
            <div className="overflow-hidden">
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-slideUp"
                style={{ fontFamily: 'Archivo, sans-serif', animationDelay: '0.4s' }}
              >
                Katlego
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
                  Seiphemo
                </span>
              </h1>
            </div>
            <div className="overflow-hidden">
              <p
                className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 animate-slideUp"
                style={{ fontFamily: 'Archivo, sans-serif', animationDelay: '0.6s' }}
              >
                {personalInfo.tagline}
              </p>
            </div>
            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fadeIn"
              style={{ animationDelay: '0.8s' }}
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-8 py-4 bg-white text-black font-medium tracking-wide hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                View Projects
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
              </a>
              <div className="flex items-center gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem]">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-white/20" />
              <div className="absolute -inset-8 border border-white/10" />
              
              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden bg-gray-900">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Katlego Seiphemo ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 grayscale ${
                      imageIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Image Indicators */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setImageIndex(index)}
                    className={`w-8 h-1 transition-all duration-300 ${
                      imageIndex === index ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors duration-300 animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
