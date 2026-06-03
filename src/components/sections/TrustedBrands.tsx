// src/components/sections/TrustedBrands.tsx
import React from 'react';

// 1. Import semua logo gambar dari folder assets
import upworkLogo from '../../assets/trusted-upwork.png';
import zoomLogo from '../../assets/trusted-zoom.png';
import postmanLogo from '../../assets/trusted-postman.png';
import databricksLogo from '../../assets/trusted-databricks.png';
import airbnbLogo from '../../assets/trusted-airbnb.png';
import dropboxLogo from '../../assets/trusted-dropbox.png';
import paypalLogo from '../../assets/trusted-paypal.png';

export const TrustedBrands: React.FC = () => {
  // 2. Buat struktur data array berupa object agar mudah di-mapping
  const brands = [
    { name: 'Upwork', src: upworkLogo },
    { name: 'Zoom', src: zoomLogo },
    { name: 'Postman', src: postmanLogo },
    { name: 'Databricks', src: databricksLogo },
    { name: 'Airbnb', src: airbnbLogo },
    { name: 'Dropbox', src: dropboxLogo },
    { name: 'Paypal', src: paypalLogo },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 font-semibold mb-8 text-xs md:text-sm tracking-wider">
          Trusted by Global Innovators & Leading Brands
        </p>
        
        {/* Konten Grid/Flex untuk Logo */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 select-none">
          {brands.map((brand) => (
            <img 
              key={brand.name}
              src={brand.src} 
              alt={`${brand.name} Logo`} 
              className="h-6 md:h-8 w-auto object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 cursor-pointer transition-all duration-300 ease-in-out"
            />
          ))}
        </div>
      </div>
    </section>
  );
};