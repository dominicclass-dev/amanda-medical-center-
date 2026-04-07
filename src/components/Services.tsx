import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-premium-gradient relative">
      {/* Luminous Texture Overlay */}
      <div className="absolute inset-0 silk-sheen pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          <div className="max-w-4xl text-start">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">{t.services.title}</h2>
            <p className="text-white/90 leading-relaxed text-sm md:text-base">
              {t.services.description}
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {t.services.items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative group overflow-hidden ${index >= 4 ? 'col-span-2 aspect-square' : 'h-[460px]'}`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 text-start bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-sm font-bold text-white whitespace-pre-line leading-tight text-shadow-light">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-5 gap-4 h-[500px] lg:h-[600px]">
          {t.services.items.slice(0, 4).map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group overflow-hidden h-full"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-start bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-xl md:text-2xl font-bold text-white whitespace-pre-line leading-tight text-shadow-light">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
          
          <div className="flex flex-col gap-4 h-full col-span-1">
            {t.services.items.slice(4, 6).map((item, index) => (
              <motion.div 
                key={index + 4}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 4) * 0.1, duration: 0.5 }}
                className="relative group overflow-hidden h-1/2"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-start bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-lg md:text-xl font-bold text-white whitespace-pre-line leading-tight text-shadow-light">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
