import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section */}
        <div className="mb-20 max-w-4xl text-start">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#1A110A] mb-6 font-serif"
          >
            {t.about.topTitle}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#5D3A1A] leading-relaxed text-base md:text-lg text-justify"
          >
            {t.about.topDescription}
          </motion.p>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Text Content - Right Side in RTL (col-span-8) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 order-1"
          >
            {t.about.blocks.map((block, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-[#1A110A] mb-4 font-serif">
                  {block.title}
                </h3>
                <p className="text-[#5D3A1A] leading-relaxed text-sm md:text-base text-justify">
                  {block.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Image Content - Left Side in RTL (col-span-4) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 order-2"
          >
            <img 
              src="https://i.ibb.co/YByD1mjf/Screenshot-2026-03-28-134043.png" 
              alt="About Clinic" 
              className="w-full h-auto object-cover aspect-square"
              referrerPolicy="no-referrer"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
