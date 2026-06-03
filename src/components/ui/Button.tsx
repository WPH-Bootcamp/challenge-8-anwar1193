// src/components/ui/Button.tsx
import React from 'react';
import type { ButtonProps } from '../../types';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseStyles = 'px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base inline-block text-center';
  
  const variants = {
    primary: 'bg-[#FF623E] text-white hover:bg-[#e05328] shadow-md shadow-orange-500/20',
    secondary: 'bg-black text-white hover:bg-gray-800',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};