import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ReactCompareSlider } from 'react-compare-slider';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const images = [
    'https://i.ibb.co/wNvPpxLh/Chat-GPT-Image-Apr-1-2026-10-05-44-AM.png',
    'https://i.ibb.co/B2M3HDNN/20260329-0648-image.png',
    'https://i.ibb.co/zWX4ZVPM/free-tools-image-eraser-mnkiutqboi6x-0.png',
    'https://i.ibb.co/wZBP5xBL/20260329-0657-image.png',
    'https://i.ibb.co/zjVCJpq/Chat-GPT-Image-Apr-1-2026-10-05-05-AM.png',
    'https://i.ibb.co/YBFvxwJk/Gemini-Generated-Image-qts2njqts2njqts2-1.png',
    'https://i.ibb.co/mrZHh6vX/Chat-GPT-Image-Apr-1-2026-10-27-03-AM.png',
    'https://i.ibb.co/jk7dzGpv/processed-image-4.png',
    'https://i.ibb.co/3mDKZps1/processed-image-5.png',
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="results" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A3728] mb-4 font-serif">{t.results.title}</h2>
          <p className="text-[#5D3A1A] text-lg">{t.results.subtitle}</p>
        </div>

        <div className="relative group">
          {/* Navigation Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 z-10 bg-white hover:bg-[#8B5E3C] hover:text-white text-[#8B5E3C] p-3 rounded-full shadow-xl transition-all border border-[#8B5E3C]/20 opacity-90 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 z-10 bg-white hover:bg-[#8B5E3C] hover:text-white text-[#8B5E3C] p-3 rounded-full shadow-xl transition-all border border-[#8B5E3C]/20 opacity-90 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex flex-row overflow-x-auto gap-6 pb-8 pt-4 px-4 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="snap-center shrink-0 w-[240px] md:w-[300px] rounded-2xl overflow-hidden shadow-lg"
              >
                <ReactCompareSlider
                  itemOne={
                    <div
                      className="h-full w-full bg-cover bg-left"
                      style={{ backgroundImage: `url(${image})`, backgroundSize: '200% 100%' }}
                    />
                  }
                  itemTwo={
                    <div
                      className="h-full w-full bg-cover bg-right"
                      style={{ backgroundImage: `url(${image})`, backgroundSize: '200% 100%' }}
                    />
                  }
                  className="h-[300px] md:h-[380px] w-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CSS to hide scrollbar for webkit browsers */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};
