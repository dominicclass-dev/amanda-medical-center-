import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-[100dvh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video/Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
          src="https://fast.wistia.net/embed/iframe/cqx0hin1eo?seo=false&videoFoam=false&autoPlay=true&endVideoBehavior=loop&muted=true&playbar=false&playButton=false&controlsVisibleOnLoad=false&preload=true"
          title="Background Video"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100dvh] min-w-[177.77vh] -translate-x-1/2 max-md:-translate-x-[57%] -translate-y-1/2 opacity-90 border-0"
          allow="autoplay; fullscreen"
          loading="eager"
        ></iframe>

        {/* Base dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-8 md:pb-12">
        <div className="flex flex-col md:flex-row justify-between items-end w-full">

          {/* Content & Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-start relative max-w-md order-2 md:order-1 mt-8 md:mt-0"
            dir="auto"
          >
            <p className="text-white text-sm md:text-base mb-6 leading-relaxed text-justify text-shadow-heavy">
              {t.hero.bannerText}
            </p>
            <a 
              href="#contact" 
              className="inline-block btn-premium px-8 py-3 rounded-full text-sm font-bold"
            >
              {t.hero.contactBtn}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 text-shadow-heavy order-1 md:order-2"
            dir="auto"
          >
            <span className="text-4xl md:text-5xl font-serif text-white">
              {t.hero.statsNumber}
            </span>
            <span className="text-white text-sm md:text-base whitespace-pre-line leading-snug text-start">
              {t.hero.statsText}
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
