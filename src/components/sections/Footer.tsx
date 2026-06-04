// src/components/sections/Footer.tsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa6';

import logoImg from '../../assets/logo-footer.png'; 

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Service', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF size={14} />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaInstagram size={14} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaLinkedinIn size={14} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaTiktok size={14} />, href: 'https://tiktok.com', label: 'TikTok' },
  ];

  return (
    <footer className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FAFAFA] border border-gray-100/80 rounded-[2.5rem] px-8 md:px-12 py-6 md:py-8 shadow-sm">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
            
            {/* Sisi Kiri: Text Headline */}
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl font-black text-black leading-tight tracking-tight uppercase">
                Let's Discuss <br /> Your Ideas
              </h2>
            </div>
            
            {/* Sisi Kanan: Brand Logo dari Assets */}
            <div className="flex items-center">
              <img 
                src={logoImg} 
                alt="Your Logo" 
                className="h-9 w-auto object-contain" 
              />
            </div>

          </div>

          <hr className="border-gray-200/60 my-4" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-2">
            
            {/* Link Menu Kiri */}
            <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-black font-semibold text-sm transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Tombol Sosial Media Lingkar Kanan */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};