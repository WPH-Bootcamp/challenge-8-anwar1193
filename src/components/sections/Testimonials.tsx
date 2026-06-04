// src/components/sections/Testimonials.tsx
import React, { useState } from 'react';
import { testimonialsData } from '../../data/mockData';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            What Partners Say About Working With Us
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>

        {/* Slider Window Container */}
        <div className="relative w-full max-w-5xl mx-auto px-4">
          <div className="overflow-visible py-8">
            <div 
              className="flex justify-center items-center gap-6 transition-transform duration-500 ease-in-out"
              style={{
                // Kalkulasi pergeseran track container agar element aktif selalu presisi di tengah layar
                transform: `translateX(${(1 - activeIndex) * 32}%)`,
              }}
            >
              {testimonialsData.map((item, idx) => {
                const isActive = idx === activeIndex;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-[320px] sm:w-[420px] shrink-0 bg-white border rounded-3xl p-8 shadow-sm transition-all duration-500 ease-in-out cursor-pointer relative flex flex-col items-center justify-between min-h-[280px] ${
                      isActive 
                        ? 'opacity-100 scale-100 border-orange-500 shadow-md ring-1 ring-orange-100' 
                        : 'opacity-20 scale-95 border-gray-100 pointer-events-auto blur-[1px] hover:opacity-40'
                    }`}
                  >
                    {/* Tanda Kutip Oranye Menggantung */}
                    {isActive && (
                      <div className="absolute -top-5 left-10 bg-[#FF6433] text-white w-10 h-8 flex items-center justify-center font-serif text-3xl rounded-lg shadow-sm">
                        “”
                      </div>
                    )}

                    {/* Bintang Rating */}
                    <div className="flex space-x-1 mb-4">
                      {[...Array(item.stars)].map((_, i) => (
                        <span key={i} className="text-amber-400 text-lg">★</span>
                      ))}
                    </div>

                    {/* Konten Isi Testimoni */}
                    <p className="text-gray-800 text-sm md:text-base font-medium leading-relaxed mb-6 text-center">
                      {item.content}
                    </p>

                    {/* Detail Informasi User */}
                    <div className="flex flex-col items-center mt-auto">
                      <h4 className="font-bold text-black text-sm md:text-base">
                        {item.name}
                      </h4>
                      <p className="text-[#FF6433] text-xs md:text-sm font-semibold mt-0.5">
                        {item.role} at {item.company}
                      </p>
                      
                      {/* Avatar Bulat Melayang di Bawah */}
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md mt-4 transform translate-y-2">
                        <img 
                          src={item.avatar} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center space-x-3 mt-12">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                idx === activeIndex 
                  ? 'w-6 bg-[#FF6433]' 
                  : 'w-3 bg-gray-200 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};