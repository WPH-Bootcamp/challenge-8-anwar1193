// src/components/layout/Navbar.tsx
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import logoSymbol from '../../assets/logo-symbol.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 1. Mengubah bg-white/80 menjadi bg-transparent agar gambar hero menembus hingga ke atas layar
    <nav className="absolute top-0 left-0 w-full h-20 z-50 bg-transparent transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 font-bold text-xl text-black z-50">
          <img 
            src={logoSymbol} 
            alt="Your Logo Symbol" 
            className="w-8 h-8 object-contain" 
          />
          <span className="tracking-tight">Your Logo</span>
        </div>

        {/* Desktop Menu - Menggunakan text-gray-800 agar tetap kontras di kedua sisi */}
        <div className="hidden md:flex items-center gap-8 text-gray-800 font-semibold text-sm">
          <a href="#about" className="hover:text-[#FF6433] transition-colors">About</a>
          <a href="#service" className="hover:text-[#FF6433] transition-colors">Service</a>
          <a href="#projects" className="hover:text-[#FF6433] transition-colors">Projects</a>
          <a href="#testimonials" className="hover:text-[#FF6433] transition-colors">Testimonials</a>
          <a href="#faq" className="hover:text-[#FF6433] transition-colors">FAQ</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="primary">Let's Talk</Button>
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-black focus:outline-none z-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer - Tetap menggunakan background solid saat dibuka di mobile agar menu tidak pusing dibaca */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-white px-4 pt-24 pb-6 border-b border-gray-100 flex flex-col gap-4 shadow-xl z-40 animate-fadeIn">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium py-2 border-b border-gray-50">About</a>
          <a href="#service" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium py-2 border-b border-gray-50">Service</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium py-2 border-b border-gray-50">Projects</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium py-2 border-b border-gray-50">Testimonials</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium py-2 border-b border-gray-50">FAQ</a>
          <Button variant="primary" className="w-full mt-2">Let's Talk</Button>
        </div>
      )}
    </nav>
  );
};