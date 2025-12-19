import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { useTheme } from '../context/ThemeContext';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { isDark } = useTheme();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock submission - will be connected to backend later
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className={`relative py-32 transition-colors duration-500 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl ${
          isDark ? 'bg-white/[0.02]' : 'bg-black/[0.02]'
        }`} />
        <div className={`absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl ${
          isDark ? 'bg-white/[0.02]' : 'bg-black/[0.02]'
        }`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Info */}
          <div>
            <p
              className="text-gray-500 text-sm tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              Get In Touch
            </p>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              Let's Work
              <br />
              <span className="text-gray-500">Together</span>
            </h2>
            <p
              className={`text-lg leading-relaxed mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together.
            </p>

            {/* Contact Links */}
            <div className="space-y-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className={`group flex items-center gap-4 transition-colors duration-300 ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                }`}
              >
                <div className={`p-3 border transition-all duration-300 ${
                  isDark 
                    ? 'border-white/20 group-hover:bg-white group-hover:text-black' 
                    : 'border-black/20 group-hover:bg-black group-hover:text-white'
                }`}>
                  <Mail size={20} />
                </div>
                <span style={{ fontFamily: 'Archivo, sans-serif' }}>{personalInfo.email}</span>
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                className={`group flex items-center gap-4 transition-colors duration-300 ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                }`}
              >
                <div className={`p-3 border transition-all duration-300 ${
                  isDark 
                    ? 'border-white/20 group-hover:bg-white group-hover:text-black' 
                    : 'border-black/20 group-hover:bg-black group-hover:text-white'
                }`}>
                  <Phone size={20} />
                </div>
                <span style={{ fontFamily: 'Archivo, sans-serif' }}>{personalInfo.phone}</span>
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 transition-colors duration-300 ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                }`}
              >
                <div className={`p-3 border transition-all duration-300 ${
                  isDark 
                    ? 'border-white/20 group-hover:bg-white group-hover:text-black' 
                    : 'border-black/20 group-hover:bg-black group-hover:text-white'
                }`}>
                  <Github size={20} />
                </div>
                <span style={{ fontFamily: 'Archivo, sans-serif' }}>GitHub Profile</span>
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 transition-colors duration-300 ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                }`}
              >
                <div className={`p-3 border transition-all duration-300 ${
                  isDark 
                    ? 'border-white/20 group-hover:bg-white group-hover:text-black' 
                    : 'border-black/20 group-hover:bg-black group-hover:text-white'
                }`}>
                  <Linkedin size={20} />
                </div>
                <span style={{ fontFamily: 'Archivo, sans-serif' }}>LinkedIn Profile</span>
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="relative">
            <div className={`absolute -inset-4 border ${isDark ? 'border-white/10' : 'border-black/10'}`} />
            <div className={`relative p-8 md:p-10 ${isDark ? 'bg-white/[0.02]' : 'bg-black/[0.02]'}`}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16">
                  <div className={`w-16 h-16 border flex items-center justify-center mb-6 ${
                    isDark ? 'border-white/30' : 'border-black/30'
                  }`}>
                    <Send size={24} className={isDark ? 'text-white' : 'text-black'} />
                  </div>
                  <h3
                    className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}
                    style={{ fontFamily: 'Archivo, sans-serif' }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-gray-500" style={{ fontFamily: 'Archivo, sans-serif' }}>
                    Thank you for reaching out.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-gray-500 mb-2 tracking-wide"
                      style={{ fontFamily: 'Archivo, sans-serif' }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-transparent border transition-colors duration-300 ${
                        isDark 
                          ? 'border-white/20 text-white placeholder-gray-600 focus:border-white' 
                          : 'border-black/20 text-black placeholder-gray-400 focus:border-black'
                      } focus:outline-none`}
                      style={{ fontFamily: 'Archivo, sans-serif' }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-gray-500 mb-2 tracking-wide"
                      style={{ fontFamily: 'Archivo, sans-serif' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-transparent border transition-colors duration-300 ${
                        isDark 
                          ? 'border-white/20 text-white placeholder-gray-600 focus:border-white' 
                          : 'border-black/20 text-black placeholder-gray-400 focus:border-black'
                      } focus:outline-none`}
                      style={{ fontFamily: 'Archivo, sans-serif' }}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-gray-500 mb-2 tracking-wide"
                      style={{ fontFamily: 'Archivo, sans-serif' }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-3 bg-transparent border transition-colors duration-300 resize-none ${
                        isDark 
                          ? 'border-white/20 text-white placeholder-gray-600 focus:border-white' 
                          : 'border-black/20 text-black placeholder-gray-400 focus:border-black'
                      } focus:outline-none`}
                      style={{ fontFamily: 'Archivo, sans-serif' }}
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
                      isDark 
                        ? 'bg-white text-black hover:bg-gray-200 disabled:bg-gray-300' 
                        : 'bg-black text-white hover:bg-gray-800 disabled:bg-gray-700'
                    } disabled:cursor-not-allowed`}
                    style={{ fontFamily: 'Archivo, sans-serif' }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className={`w-5 h-5 border-2 rounded-full animate-spin ${
                          isDark ? 'border-black/30 border-t-black' : 'border-white/30 border-t-white'
                        }`} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
