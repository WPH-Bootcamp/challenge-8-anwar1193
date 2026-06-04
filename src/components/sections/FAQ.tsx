import React, { useState } from 'react';
import consultationImg from '../../assets/faq-consultation.png'; 

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  // State untuk melacak akordeon mana yang sedang terbuka (default: indeks 0 terbuka)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: "What services do you offer?",
      answer: "We provide custom web/app development, cloud solutions, UX/UI design, and more."
    },
    {
      question: "How do I know if this is right for my business?",
      answer: "Our team conducts a thorough discovery phase to align our technical solutions with your specific business goals and scaling needs."
    },
    {
      question: "How much does a project cost?",
      answer: "Project costs vary based on scope, complexity, and timeline. Contact us for a tailored proposal after a free initial consultation."
    },
    {
      question: "How long does it take?",
      answer: "A standard project can take anywhere from 4 to 12 weeks depending on the requirements, features, and integration complexity."
    },
    {
      question: "Can I start with a small project first?",
      answer: "Absolutely. We often recommend starting with a Minimum Viable Product (MVP) to validate ideas quickly before scaling up features."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout: 2 Kolom (Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* KOLOM KIRI: Judul & Accordion List (Lebar 7/12) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-black mb-3 tracking-tight">
                Need Help? Start Here.
              </h2>
              <p className="text-gray-400 text-sm md:text-base">
                Everything you need to know — all in one place.
              </p>
            </div>

            {/* List Akordeon */}
            <div className="border-t border-gray-200 divide-y divide-gray-200">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="py-5">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex justify-between items-center text-left font-bold text-base md:text-lg text-black group transition-colors"
                    >
                      <span className={isOpen ? 'text-black' : 'text-black group-hover:text-[#FF6433]'}>
                        {item.question}
                      </span>
                      {/* Icon Toggle: Plus (+) atau Minus (-) */}
                      <span className="text-xl font-mono ml-4 shrink-0 transition-transform duration-200">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    {/* Konten Jawaban dengan Animasi Transisi */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* KOLOM KANAN: CTA Box Card (Lebar 5/12) */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            {/* Box Oranye/Cokelat Bata khas Figma */}
            <div className="bg-[#BF4E28] rounded-4xl p-8 text-white flex flex-col justify-between shadow-lg min-h-120">
              
              {/* Judul & Ajakan di Atas */}
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                  Let’s talk it through
                </h3>
                <p className="text-orange-100 text-sm md:text-base leading-relaxed">
                  Book a free consultation with our team.
                </p>
              </div>

              {/* Wadah Gambar Ruang Rapat */}
              <div className="w-full aspect-16/10 rounded-2xl overflow-hidden my-6 bg-orange-950/20">
                <img 
                  src={consultationImg} 
                  alt="Meeting with team" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tombol CTA Hitam di Bawah */}
              <a 
                href="#contact" 
                className="w-full bg-black hover:bg-gray-900 text-white text-center font-bold py-4 px-6 rounded-xl transition-colors block text-sm tracking-wide shadow-sm"
              >
                Free Consultation
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};