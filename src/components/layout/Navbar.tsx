// src/components/layout/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { FiSun, FiMoon } from 'react-icons/fi'; // Menggunakan ikon modern & minimalis
import logoSymbol from '../../assets/logo-symbol.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // --- LOGIKA UTAMA THEME SWITCHER ---
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  // -----------------------------------

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/75 dark:bg-brand-darkBg/75 backdrop-blur-md h-20' 
          : 'bg-transparent h-24'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 font-bold text-xl text-black dark:text-white z-50">
          <img src={logoSymbol} alt="Logo" className="w-8 h-8 object-contain" />
          <span className="tracking-tight">Your Logo</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-800 dark:text-gray-200 font-semibold text-sm">
          <a href="#about" className="hover:text-brand-orange transition-colors">About</a>
          <a href="#service" className="hover:text-brand-orange transition-colors">Service</a>
          <a href="#projects" className="hover:text-brand-orange transition-colors">Projects</a>
          <a href="#testimonials" className="hover:text-brand-orange transition-colors">Testimonials</a>
          <a href="#faq" className="hover:text-brand-orange transition-colors">FAQ</a>
        </div>

        {/* Desktop Controls (Theme Switcher + CTA Button) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2.5 rounded-full bg-gray-100 dark:bg-brand-darkCard text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-brand-darkBorder hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <FiSun size={18} className="text-amber-400" /> : <FiMoon size={18} />}
          </button>

          <div className="block">
            <a href="#contact" className="inline-block cursor-pointer">
              <Button variant="primary">Let's Talk</Button>
            </a>
          </div>
        </div>

        {/* Mobile Controls (Theme Switcher + Hamburger) */}
        <div className="flex items-center gap-3 md:hidden z-50">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-brand-darkCard text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-brand-darkBorder cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <FiSun size={16} className="text-amber-400" /> : <FiMoon size={16} />}
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-black dark:text-white focus:outline-none"
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
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-white dark:bg-brand-darkCard px-4 pt-24 pb-6 border-b border-gray-100 dark:border-brand-darkBorder flex flex-col gap-4 shadow-xl z-40">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 font-medium py-2">About</a>
          <a href="#service" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 font-medium py-2">Service</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 font-medium py-2">Projects</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 font-medium py-2">Testimonials</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 font-medium py-2">FAQ</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="w-full mt-2">
            <Button variant="primary" className="w-full">Let's Talk</Button>
          </a>
        </div>
      )}
    </nav>
  );
};