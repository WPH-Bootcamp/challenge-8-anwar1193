// src/pages/Home.tsx
import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { TrustedBrands } from '../components/sections/TrustedBrands';
import { Process } from '../components/sections/Process';
import { Services } from '../components/sections/Services';

export const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans antialiased selection:bg-orange-200">
      <Navbar />
      <main>
        <Hero />
        <TrustedBrands />
        <Process />
        <Services />
      </main>
    </div>
  );
};