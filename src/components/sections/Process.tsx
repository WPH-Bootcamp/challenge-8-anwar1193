// src/components/sections/Process.tsx
import React from 'react';
import { processSteps } from '../../data/mockData';

export const Process: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Overview Stats */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">End-to-End IT Solutions That Drive Results</h2>
        <p className="text-gray-500 mb-12 text-sm md:text-base">From strategy to execution, we deliver solutions that grow your business.</p>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '5+', label: 'Years of Experience' },
            { value: '10+', label: 'Industry Awards Won' },
            { value: '100%', label: 'Client Satisfaction Rate' }
          ].map((stat, idx) => (
            <div key={idx} className="border border-gray-100 rounded-full aspect-square flex flex-col justify-center items-center p-4 bg-white shadow-sm">
              <span className="text-3xl md:text-4xl font-extrabold text-[#FF6433]">{stat.value}</span>
              <span className="text-xs md:text-sm text-gray-600 mt-2 text-center max-w-30">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">Our Process</h2>
        <p className="text-gray-500 mb-16 text-sm md:text-base">Clear steps. Smart execution. Results you can count on.</p>

        <div className="relative max-w-4xl mx-auto">
          {/* Center Line for Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 md:space-y-6">
            {processSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={step.stepNumber} className={`flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Empty block for layout grid balance */}
                  <div className="w-full md:w-5/12 hidden md:block"></div>
                  
                  {/* Badge Number Line Tracker */}
                  <div className="z-10 bg-[#FF6433] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-md my-4 md:my-0">
                    {step.stepNumber}
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-5/12 bg-gray-50 border border-gray-100 rounded-xl p-6 text-left flex justify-between items-center group hover:shadow-md transition-shadow">
                    <div>
                      <h4 className="font-bold text-black text-base md:text-lg">{step.title}</h4>
                      <p className="text-gray-500 text-xs md:text-sm mt-1">{step.description}</p>
                    </div>
                    <span className="text-gray-400 font-light text-xl">^</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};