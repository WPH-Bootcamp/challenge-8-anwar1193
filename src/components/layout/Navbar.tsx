// src/components/layout/Navbar.tsx
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import logoSymbol from '../../assets/logo-symbol.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl text-black">
          <img 
            src={logoSymbol} 
            alt="Your Logo Symbol" 
            className="w-8 h-8 object-contain" 
          />
          <span>Your Logo</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium text-sm">
          <a href="#about" className="hover:text-black">About</a>
          <a href="#service" className="hover:text-black">Service</a>
          <a href="#projects" className="hover:text-black">Projects</a>
          <a href="#testimonials" className="hover:text-black">Testimonials</a>
          <a href="#faq" className="hover:text-black">FAQ</a>
        </div>

        <div className="hidden md:block">
          <Button variant="primary">Let's Talk</Button>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-6 border-b border-gray-100 flex flex-col gap-4">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium">About</a>
          <a href="#service" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium">Service</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium">Projects</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium">Testimonials</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium">FAQ</a>
          <Button variant="primary" className="w-full">Let's Talk</Button>
        </div>
      )}
    </nav>
  );
};