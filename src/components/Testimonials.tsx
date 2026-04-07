import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % t.testimonials.items.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + t.testimonials.items.length) % t.testimonials.items.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-serif text-[#4A3728] mb-6"
          >
            {t.testimonials.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#5D3A1A] leading-relaxed"
          >
            {t.testimonials.description}
          </motion.p>
        </div>

        <div className="relative">
          {/* Desktop Layout (Grid) */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {t.testimonials.items.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FDF6E3] p-10 rounded-none flex flex-col h-full border border-[#8B5E3C]/10 shadow-sm"
              >
                <Quote className="w-12 h-12 text-[#8B5E3C] mb-8 opacity-40" />
                
                <p className="text-[#4A3728] text-lg leading-relaxed mb-8 flex-grow italic">
                  "{item.text}"
                </p>

                <div className="mt-auto">
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#8B5E3C] text-[#8B5E3C]" />
                    ))}
                  </div>
                  <h4 className="text-xl font-medium text-[#4A3728]">
                    {item.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Layout (Slider) */}
          <div className="md:hidden overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRTL ? 50 : -50 }}
                transition={{ duration: 0.3 }}
                className="bg-[#FDF6E3] p-8 rounded-none flex flex-col h-full border border-[#8B5E3C]/10 shadow-sm"
              >
                <Quote className="w-10 h-10 text-[#8B5E3C] mb-6 opacity-40" />
                
                <p className="text-[#4A3728] text-base leading-relaxed mb-6 flex-grow italic">
                  "{t.testimonials.items[currentIndex].text}"
                </p>

                <div className="mt-auto">
                  <div className="flex gap-1 mb-3">
                    {[...Array(t.testimonials.items[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#8B5E3C] text-[#8B5E3C]" />
                    ))}
                  </div>
                  <h4 className="text-lg font-medium text-[#4A3728]">
                    {t.testimonials.items[currentIndex].name}
                  </h4>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls (Mobile Only) */}
          <div className="mt-10 flex md:hidden items-center justify-center gap-6">
            <button
              onClick={isRTL ? next : prev}
              className="w-14 h-14 rounded-full border border-[#4A3728] border-opacity-20 flex items-center justify-center hover:bg-[#4A3728] hover:text-white transition-all group"
            >
              <ChevronLeft className={`w-6 h-6 ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            <div className="flex gap-3">
              {t.testimonials.items.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIndex === index ? 'bg-[#8B5E3C] w-6' : 'bg-[#8B5E3C]/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={isRTL ? prev : next}
              className="w-14 h-14 rounded-full border border-[#4A3728] border-opacity-20 flex items-center justify-center hover:bg-[#4A3728] hover:text-white transition-all group"
            >
              <ChevronRight className={`w-6 h-6 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
