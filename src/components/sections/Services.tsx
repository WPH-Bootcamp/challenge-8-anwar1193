// src/components/sections/Services.tsx
import React, { useState } from 'react';
import { servicesData } from '../../data/mockData';

import fintechImg from '../../assets/industry-fintech.png';
import ecommerceImg from '../../assets/industry-ecommerce.png';
import healthcareImg from '../../assets/industry-healthcare.png';

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fintech' | 'ecommerce' | 'healthcare'>('fintech');

  return (
    <section id="service" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24"> {/* Menaikkan margin bottom agar baris pertama card tidak menubruk text judul */}
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">Smart IT Solutions That Grow With You</h2>
          <p className="text-gray-500 text-sm md:text-base">Tailored tech to boost efficiency, security, and results.</p>
        </div>

        {/* Service Grid 3x3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 mb-24">
          {servicesData.map((service) => (
            <div 
              key={service.id} 

              className="bg-white border border-gray-100 rounded-4xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left relative pt-12"
            >

              <div className="absolute -top-6 left-8 w-16 h-16 flex items-center justify-center filter drop-shadow-md transform hover:scale-110 transition-transform duration-300">
                <img 
                  src={service.icon} 
                  alt={`${service.title} Icon`} 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Konten teks di dalam card */}
              <h3 className="text-xl font-bold text-black mb-2 mt-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* SECTION: BUILT FOR YOUR INDUSTRY */}
        {/* ========================================================= */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-black text-left mb-2">Built for Your Industry</h2>
          <p className="text-gray-500 text-left mb-12 text-sm md:text-base">We've helped companies across industries launch smarter, faster, and more securely.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Tab Navigasi */}
            <div className="lg:col-span-3 flex flex-col items-start space-y-4 border-l border-gray-200 pl-4">
              {(['fintech', 'ecommerce', 'healthcare'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-lg font-bold capitalize transition-all border-l-2 -ml-4.5 pl-4 ${
                    activeTab === tab ? 'text-black border-[#FF6433]' : 'text-gray-400 border-transparent'
                  }`}
                >
                  {tab === 'healthcare' ? 'Healthcare' : tab === 'ecommerce' ? 'E-Commerce' : 'Fintech'}
                </button>
              ))}
            </div>

            {/* Konten Box Berdasarkan Tab yang Aktif */}
            <div className="lg:col-span-9 bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm text-left">
              {activeTab === 'fintech' && (
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.
                  </p>
                  {/* 2. Mengganti kode tiruan lama dengan tag img dari aset lokal */}
                  <div className="w-full aspect-21/9 rounded-2xl overflow-hidden shadow-sm">
                    <img 
                      src={fintechImg} 
                      alt="Fintech Industry Showcase" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'ecommerce' && (
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Omnichannel retail platforms engineered for high traffic, seamless conversions, and frictionless payments globally.
                  </p>
                  {/* Gambar untuk E-Commerce */}
                  <div className="w-full aspect-21/9 rounded-2xl overflow-hidden shadow-sm">
                    <img 
                      src={ecommerceImg} 
                      alt="E-Commerce Industry Showcase" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'healthcare' && (
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    HIPAA-compliant platforms bridging telehealth systems, patient engagement portals, and real-time medical data syncing.
                  </p>
                  {/* Gambar untuk Healthcare */}
                  <div className="w-full aspect-21/9 rounded-2xl overflow-hidden shadow-sm">
                    <img 
                      src={healthcareImg} 
                      alt="Healthcare Industry Showcase" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};