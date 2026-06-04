/**
 * Type Definitions
 *
 * File ini berisi semua TypeScript interfaces dan types yang digunakan
 * di berbagai tempat dalam aplikasi.
 *
 * Best Practices:
 * - Gunakan PascalCase untuk interface names
 * - Export semua interfaces agar bisa digunakan di file lain
 * - Group related interfaces bersama
 * - Add comments untuk explain complex types
 */

// ==========================================
// UI Component Types
// ==========================================

/**
 * Button variant types
 * Gunakan ini untuk Button component
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline';

/**
 * Example: Button Props
 * Uncomment dan sesuaikan dengan kebutuhan
 */
export interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

// ==========================================
// Section Data Types
// ==========================================

/**
 * TODO: Define interfaces untuk data yang digunakan di sections
 *
 * Contoh:
 * - ServiceItem untuk services section
 * - TeamMember untuk team section
 * - Testimonial untuk testimonials section
 * - dll.
 */

/**
 * Example: Service/Product Item
 */
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string; // fallback string path atau nama ikon
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  link?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  stars: number;
  content: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * Tips:
 * 1. Define types berdasarkan data yang kamu perlukan
 * 2. Lihat design Figma untuk understand data structure
 * 3. Make types reusable across components
 * 4. Use optional properties (?) untuk data yang tidak selalu ada
 * 5. Consider creating separate files jika types terlalu banyak
 *    Example: types/components.ts, types/data.ts, etc.
 */
