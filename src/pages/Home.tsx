// src/pages/Home.tsx
import React from 'react';
import { Navbar } from '../components/layout/Navbar';

export const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans antialiased selection:bg-orange-200">
      <Navbar />
    </div>
  );
};