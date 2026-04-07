import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Search, FileText, ChevronRight, MessageSquare, ShieldCheck, Zap, Heart } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t, lang, isRTL } = useLanguage();

  const sidebarLinks = [
    { icon: <FileText className="w-5 h-5 text-blue-600" />, text: t.nav.services },
    { icon: <ShieldCheck className="w-5 h-5 text-blue-600" />, text: t.nav.about },
    { icon: <MessageSquare className="w-5 h-5 text-blue-600" />, text: t.nav.testimonials },
    { icon: <Zap className="w-5 h-5 text-blue-600" />, text: t.hero.changingTexts[0] },
    { icon: <Heart className="w-5 h-5 text-blue-600" />, text: t.hero.changingTexts[1] },
    { icon: <FileText className="w-5 h-5 text-blue-600" />, text: t.hero.changingTexts[2] },
    { icon: <FileText className="w-5 h-5 text-blue-600" />, text: t.hero.changingTexts[3] },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-12 bg-gray-50 overflow-hidden">
      {/* Top Search Bar Area (Matching the image) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-gray-600 text-sm font-medium">
            <span className="border-b-2 border-blue-600 pb-1 text-blue-600 cursor-pointer">{t.nav.home}</span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors">{t.nav.services}</span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors">{t.nav.about}</span>
          </div>
          <div className="relative max-w-md w-full">
            <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 flex items-center px-4 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={lang === 'ar' ? 'كيف يمكننا مساعدتك؟' : 'How can we help you?'}
              className="w-full bg-white border border-gray-200 rounded-full py-3 px-12 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Card (Matching the image) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 bg-white rounded-xl border border-gray-200 p-8 md:p-12 shadow-sm"
          >
            <h1 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
              {t.hero.title.split('\n').join(' ')}
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {t.hero.bannerText}
            </p>

            <div className="mb-12">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                {lang === 'ar' ? 'لماذا تختارين إيڤ كلينيك؟' : 'Why Choose Eve Clinic?'}
              </h3>
              <ul className="space-y-3">
                {t.hero.changingTexts.map((text, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="text-blue-600 mt-1.5">•</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hero Image/Video (Matching the image's bottom visual) */}
            <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-100 group">
              <iframe
                src="https://fast.wistia.net/embed/iframe/cqx0hin1eo?seo=false&videoFoam=false&autoPlay=true&endVideoBehavior=loop&muted=true&playbar=false&playButton=false&controlsVisibleOnLoad=false&preload=true"
                title="Background Video"
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; fullscreen"
                loading="eager"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <a href="#contact" className="btn-premium px-6 py-2 rounded-full text-sm font-bold">
                  <span className="snow-layer-3" />
                  {t.hero.contactBtn}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Sidebar (Matching the image) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-80 shrink-0"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-8 font-serif">
              {lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h2>
            <div className="space-y-6">
              {sidebarLinks.map((link, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="mt-1 group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                    {link.text}
                  </span>
                </a>
              ))}
            </div>

            {/* Stats Box (Added for extra value) */}
            <div className="mt-12 p-6 bg-premium-gradient rounded-xl text-white relative overflow-hidden">
              <div className="absolute inset-0 silk-sheen opacity-20"></div>
              <div className="relative z-10">
                <div className="text-4xl font-bold mb-2">{t.hero.statsNumber}</div>
                <div className="text-sm opacity-90 whitespace-pre-line">{t.hero.statsText}</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
