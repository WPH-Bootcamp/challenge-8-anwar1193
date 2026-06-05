// src/components/sections/Footer.tsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa6';

import logoImg from '../../assets/logo-footer.png'; 

export const Footer: React.FC = () => {
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
    // Ditambahkan dark:bg-brand-darkBg agar background luar menjadi hitam pekat
    <footer className="bg-white dark:bg-brand-darkBg py-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ditambahkan dark:bg-brand-darkCard dan dark:border-brand-darkBorder 
          agar kontainer melayang berubah warna menjadi charcoal gelap tanpa bayangan kentara di mode malam
        */}
        <div className="bg-[#FAFAFA] dark:bg-brand-darkCard border border-gray-100/80 dark:border-brand-darkBorder rounded-[2.5rem] px-8 md:px-12 py-6 md:py-8 shadow-sm dark:shadow-none transition-colors duration-300">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
            
            {/* Sisi Kiri: Text Headline (Ditambahkan dark:text-white) */}
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl font-black text-black dark:text-white leading-tight tracking-tight uppercase">
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

          {/* Garis Pembatas (Ditambahkan dark:border-brand-darkBorder) */}
          <hr className="border-gray-200/60 dark:border-brand-darkBorder my-4" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-2">
            
            {/* Link Menu Kiri (Ditambahkan dark:text-gray-400 dan dark:hover:text-white) */}
            <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white font-semibold text-sm transition-colors"
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
                  /* Modifikasi Kelas Sosial Media:
                    - dark:bg-transparent dark:border-brand-darkBorder (Lingkaran transparan di mode dark)
                    - dark:text-white (Warna ikon menjadi putih)
                    - dark:hover:bg-white dark:hover:text-black (Efek hover berbalik warna saat dark mode)
                  */
                  className="w-9 h-9 rounded-full bg-white dark:bg-transparent border border-gray-200 dark:border-brand-darkBorder flex items-center justify-center text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-sm dark:shadow-none"
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