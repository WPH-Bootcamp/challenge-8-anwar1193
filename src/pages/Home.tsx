// src/pages/Home.tsx
import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';

export const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans antialiased selection:bg-orange-200">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
};