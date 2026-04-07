import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="text-[#F5EFE6] pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="mb-4 block">
              <Logo className="w-16 h-16 md:w-20 md:h-20 scale-150 origin-center md:origin-left md:rtl:origin-right transition-all duration-300" />
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 text-white font-serif">{t.footer.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 rtl:space-x-reverse text-white hover:text-white/80 transition-colors group">
                <div className="flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <a href={`tel:${t.footer.phone}`} dir="ltr" className="text-white hover:text-white/80 transition-colors font-medium">{t.footer.phone}</a>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse text-white hover:text-white/80 transition-colors group">
                <div className="flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <a href="https://maps.app.goo.gl/R6u8vXx3BXpFytyF8" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors font-medium">
                  {t.footer.address}
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 text-white font-serif">{t.footer.location || 'موقعنا / Location'}</h3>
            <div className="w-full h-48 rounded-lg overflow-hidden border border-white/10 shadow-gold bg-white">
              <iframe
                src="https://maps.google.com/maps?q=Amanda%20Medical%20Center%20Jeddah%20An%20Nahdah&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amanda Medical Center Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/80 font-medium text-sm">
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};
