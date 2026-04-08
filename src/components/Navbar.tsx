import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition when scrolled past most of the hero section (100vh)
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-premium-gradient py-3 text-white shadow-lg' : 'bg-transparent py-6 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center">
              <Logo className="w-12 h-12 md:w-20 md:h-20 transition-all duration-300" />
            </a>
          </div>

          {/* Desktop: Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <a href="#home" className="hover:text-[#C5A059] transition-colors font-bold text-sm">{t.nav.home}</a>
            <a href="#about" className="hover:text-[#C5A059] transition-colors font-bold text-sm">{t.nav.about}</a>
            <a href="#services" className="hover:text-[#C5A059] transition-colors font-bold text-sm">{t.nav.services}</a>
            <a href="#testimonials" className="hover:text-[#C5A059] transition-colors font-bold text-sm">{t.nav.testimonials}</a>
            <button onClick={toggleLang} className="flex items-center hover:text-[#C5A059] transition-colors">
              <Globe className="w-5 h-5 mx-1" />
              <span className="text-sm font-bold">{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>
            <a href="#contact" className="btn-premium px-6 py-2 rounded-full font-bold text-sm ms-2">
              {t.nav.book}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:text-white/80">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden shadow-lg absolute w-full left-0 top-full border-t border-white/10 bg-[#2D1E14] text-white`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 hover:text-white/80 font-medium">{t.nav.home}</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 hover:text-white/80 font-medium">{t.nav.about}</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 hover:text-white/80 font-medium">{t.nav.services}</a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 hover:text-white/80 font-medium">{t.nav.testimonials}</a>
            <button onClick={() => { toggleLang(); setIsMenuOpen(false); }} className="block w-full text-start px-3 py-2 hover:text-white/80 font-medium flex items-center">
              <Globe className="w-5 h-5 mx-1" />
              {lang === 'ar' ? 'English' : 'عربي'}
            </button>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 mt-4 text-center btn-premium rounded-full font-bold">
              <span className="snow-layer-3" />
              {t.nav.book}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
