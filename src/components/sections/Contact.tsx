// src/components/sections/Contact.tsx
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  // State untuk menyimpan layanan yang dipilih (checkbox)
  const [selectedServices, setSelectedServices] = useState<string[]>(['Web Development']);

  const servicesOptions = [
    'Web Development',
    'Cloud Solutions',
    'Mobile App Development',
    'Software Development',
    'UI/UX Design',
    'Other'
  ];

  const handleCheckboxChange = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Data:', { ...formData, services: selectedServices });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Centered */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Ready to Start? Let’s Talk.
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Tell us what you need, and we’ll get back to you soon.
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          
          {/* Input Name */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-sm font-bold text-gray-900">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-300 focus:outline-none focus:border-[#FF6433] focus:ring-1 focus:ring-[#FF6433] transition-all"
            />
          </div>

          {/* Input Email */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-bold text-gray-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-300 focus:outline-none focus:border-[#FF6433] focus:ring-1 focus:ring-[#FF6433] transition-all"
            />
          </div>

          {/* Input Message */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-sm font-bold text-gray-900">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder="Enter your message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-300 focus:outline-none focus:border-[#FF6433] focus:ring-1 focus:ring-[#FF6433] resize-none transition-all"
            />
          </div>

          {/* Checkbox Services Grid */}
          <div className="flex flex-col space-y-3 pt-2">
            <label className="text-sm font-bold text-gray-900">
              Services
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4">
              {servicesOptions.map((service) => {
                const isChecked = selectedServices.includes(service);
                return (
                  <label 
                    key={service} 
                    className="flex items-center space-x-3 cursor-pointer text-sm font-medium text-gray-700 select-none"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleCheckboxChange(service)}
                      className="hidden" // Sembunyikan checkbox default browser
                    />
                    {/* Custom Checkbox Design */}
                    <div className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${
                      isChecked 
                        ? 'bg-[#FF6433] border-[#FF6433] text-white' 
                        : 'bg-white border-gray-200'
                    }`}>
                      {isChecked && (
                        <svg className="w-3 h-3 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </div>
                    <span>{service}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-[#FF6433] hover:bg-orange-600 text-white font-bold py-4 rounded-full shadow-md shadow-orange-500/10 hover:shadow-lg transition-all duration-200 text-center"
            >
              Send
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};