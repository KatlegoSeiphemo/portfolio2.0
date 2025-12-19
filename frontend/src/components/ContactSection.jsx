import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/mock';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    <section id="contact" className="relative py-32 bg-black">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl" />
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
              className="text-4xl md:text-5xl font-bold text-white mb-8"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              Let's Work
              <br />
              <span className="text-gray-500">Together</span>
            </h2>
            <p
              className="text-gray-400 text-lg leading-relaxed mb-12"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together.
            </p>

            {/* Contact Links */}
            <div className="space-y-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <div className="p-3 border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Mail size={20} />
                </div>
                <span style={{ fontFamily: 'Archivo, sans-serif' }}>{personalInfo.email}</span>
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <div className="p-3 border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Github size={20} />
                </div>
                <span style={{ fontFamily: 'Archivo, sans-serif' }}>GitHub Profile</span>
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <div className="p-3 border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Linkedin size={20} />
                </div>
                <span style={{ fontFamily: 'Archivo, sans-serif' }}>LinkedIn Profile</span>
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="relative">
            <div className="absolute -inset-4 border border-white/10" />
            <div className="relative bg-white/[0.02] p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16">
                  <div className="w-16 h-16 border border-white/30 flex items-center justify-center mb-6">
                    <Send size={24} className="text-white" />
                  </div>
                  <h3
                    className="text-xl font-semibold text-white mb-2"
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
                      className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder-gray-600 focus:border-white focus:outline-none transition-colors duration-300"
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
                      className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder-gray-600 focus:border-white focus:outline-none transition-colors duration-300"
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
                      className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder-gray-600 focus:border-white focus:outline-none transition-colors duration-300 resize-none"
                      style={{ fontFamily: 'Archivo, sans-serif' }}
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-white text-black font-medium tracking-wide hover:bg-gray-200 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                    style={{ fontFamily: 'Archivo, sans-serif' }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
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
