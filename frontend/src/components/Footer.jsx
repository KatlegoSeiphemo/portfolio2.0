import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-300"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              KS<span className="text-gray-500">.</span>
            </a>
            <p
              className="text-gray-500 text-sm mt-2"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              © {currentYear} Katlego Seiphemo. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm text-gray-500 hover:text-white transition-colors duration-300"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-white transition-colors duration-300"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={18} />
            </a>
            <div className="w-px h-6 bg-white/20 mx-2" />
            <button
              onClick={scrollToTop}
              className="p-2 border border-white/20 text-gray-500 hover:text-white hover:border-white transition-all duration-300"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p
            className="text-center text-xs text-gray-600 tracking-widest"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            DESIGNED & BUILT WITH PASSION
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
