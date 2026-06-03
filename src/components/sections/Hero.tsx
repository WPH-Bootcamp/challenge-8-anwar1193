// src/components/sections/Hero.tsx
import React from 'react';
import { Button } from '../ui/Button';
// 1. Import image Hero dari folder assets
import heroImg from '../../assets/hero.png';

export const Hero: React.FC = () => {
  return (
    // Menggunakan min-h-screen agar section mengambil tinggi penuh layar, cocok untuk hero penutup
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20 md:pt-0">
      
      {/* 2. Background Image Container (Menutupi setengah bagian kanan) */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0">
        {/* Overlay gradasi tipis di sisi kiri (opsional, untuk memperhalus potongan gambar pada layar desktop) */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-transparent to-transparent z-10 hidden lg:block"></div>
        
        <img 
          src={heroImg} 
          alt="Tech Showcase Background" 
          className="w-full h-full object-cover object-top-left lg:object-center opacity-90 lg:opacity-100"
        />
      </div>

      {/* 3. Konten Utama Hero (Tetap rapi di dalam grid sistem) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Sisi Kiri (Teks & CTA) - Diberi background glassmorphism tipis di mobile agar teks terbaca jelas */}
          <div className="flex flex-col space-y-6 text-left max-w-xl bg-white/80 lg:bg-transparent p-6 sm:p-8 lg:p-0 rounded-3xl backdrop-blur-sm lg:backdrop-blur-none shadow-xl shadow-gray-200/50 lg:shadow-none mt-12 lg:mt-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black leading-tight tracking-tight">
              Your Tech Partner for <br />
              <span className="text-[#FF6433]">Smarter Growth</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-md leading-relaxed">
              We deliver tailored IT solutions to help you scale with speed and confidence.
            </p>
            <div>
              <Button variant="primary">Let's Talk</Button>
            </div>
          </div>

          {/* Sisi Kanan (Sengaja dikosongkan pada desktop karena area ini sudah diisi penuh oleh background image) */}
          <div className="hidden lg:block h-125"></div>
          
        </div>
      </div>
    </section>
  );
};