// src/data/mockData.ts
import type { ServiceItem, ProcessStep, ProjectItem, TestimonialItem, FAQItem } from '../types';

// Import 9 ikon dari folder assets
import iconWeb from '../assets/icon-web.png';
import iconMobile from '../assets/icon-mobile.png';
import iconUiUx from '../assets/icon-uiux.png';
import iconCloud from '../assets/icon-cloud.png';
import iconSoftware from '../assets/icon-software.png';
import iconInfra from '../assets/icon-infra.png';
import iconCyber from '../assets/icon-cyber.png';
import iconQa from '../assets/icon-qa.png';
import iconConsult from '../assets/icon-consult.png';

export const servicesData: ServiceItem[] = [
  { id: '1', title: 'Web Development', description: 'Build fast, scalable, and SEO-friendly websites.', icon: iconWeb },
  { id: '2', title: 'Mobile App Development', description: 'Native & cross-platform apps tailored to user needs.', icon: iconMobile },
  { id: '3', title: 'UI/UX Design', description: 'Delight users with intuitive and beautiful interfaces.', icon: iconUiUx },
  { id: '4', title: 'Cloud Solutions', description: 'Secure and flexible cloud infrastructure for your growth.', icon: iconCloud },
  { id: '5', title: 'Software Development', description: 'Custom solutions built around your business logic.', icon: iconSoftware },
  { id: '6', title: 'IT Infrastructure', description: 'Scale your backend with reliable tech foundations.', icon: iconInfra },
  { id: '7', title: 'Cybersecurity Services', description: 'Stay protected with enterprise-grade security.', icon: iconCyber },
  { id: '8', title: 'QA Solutions', description: 'Ensure performance with rigorous testing frameworks.', icon: iconQa },
  { id: '9', title: 'IT Consulting & Support', description: 'Make smarter tech decisions with expert guidance.', icon: iconConsult },
];

export const processSteps: ProcessStep[] = [
  { stepNumber: 1, title: 'Discovery & Consultation', description: 'Understand Your Needs & Goals' },
  { stepNumber: 2, title: 'Planning & Strategy', description: 'Build a Clear, Scalable Roadmap' },
  { stepNumber: 3, title: 'Design & Prototyping', description: 'Craft UX That Converts' },
  { stepNumber: 4, title: 'Development & Implementation', description: 'Deliver With Speed & Precision' },
  { stepNumber: 5, title: 'Testing & Optimization', description: 'Ensure Quality at Every Step' },
  { stepNumber: 6, title: 'Launch & Growth', description: 'Scale, Measure & Improve Continuously' },
];

export const projectsData: ProjectItem[] = [
  { id: '1', title: 'Portofolio 1', category: 'Landing Page', image: '/assets/project1.jpg' },
  { id: '2', title: 'Portofolio 2', category: 'Landing Page', image: '/assets/project2.jpg' },
  { id: '3', title: 'Portofolio 3', category: 'Landing Page', image: '/assets/project3.jpg' },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: '1',
    name: 'Sarah Tan',
    role: 'Product Manager',
    company: 'Finovate',
    avatar: '/assets/avatar-sarah.jpg',
    rating: 5,
    comment: 'The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.',
  },
];

export const faqData: FAQItem[] = [
  { id: '1', question: 'What services do you offer?', answer: 'We provide custom web/app development, cloud solutions, UI/UX design, and more.' },
  { id: '2', question: 'How do I know if this is right for my business?', answer: 'We offer a free initial consultation to assess your business needs and match them with our solutions.' },
  { id: '3', question: 'How much does a project cost?', answer: 'Project costs vary based on scope, timeline, and complexity. Contact us for a custom quote.' },
  { id: '4', question: 'How long does it take?', answer: 'A typical project can take anywhere from 2 weeks to 3 months depending on requirements.' },
  { id: '5', question: 'Can I start with a small project first?', answer: 'Absolutely! We believe in agile progress and can help develop an MVP (Minimum Viable Product) first.' },
];