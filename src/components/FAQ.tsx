import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 text-white relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">{t.faq.title}</h2>
          <p className="text-lg text-white/90 opacity-90 leading-relaxed">
            {t.faq.description}
          </p>
        </div>

        <div className="space-y-4">
          {t.faq.questions.map((item, index) => (
            <div 
              key={index} 
              className="glass-card rounded-sm overflow-hidden text-white transition-all duration-300"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-semibold text-lg">{item.q}</span>
                <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center flex-shrink-0 ml-4 rtl:mr-4 rtl:ml-0 shadow-sm">
                  <ChevronDown 
                    className={`w-5 h-5 drop-shadow-md transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`} 
                  />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-4 text-white/90">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
