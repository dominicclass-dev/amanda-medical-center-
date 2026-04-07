import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TbBrandSnapchat, TbBrandTiktok, TbBrandInstagram } from 'react-icons/tb';

export const SocialLinks: React.FC = () => {
  const { t } = useLanguage();

  const links = [
    {
      icon: <TbBrandInstagram className="w-6 h-6 text-white" strokeWidth={1.5} />,
      text: t.social.instagram,
      href: 'https://www.instagram.com/amandamedcen/',
    },
    {
      icon: <TbBrandSnapchat className="w-6 h-6 text-white" strokeWidth={1.5} />,
      text: t.social.snapchat,
      href: '#',
    },
    {
      icon: <TbBrandTiktok className="w-6 h-6 text-white" strokeWidth={1.5} />,
      text: t.social.tiktok,
      href: '#',
    },
  ];

  return (
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center group"
            >
              <div className="flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300">
                {link.icon}
              </div>
              <span className="text-white font-medium text-sm md:text-base text-shadow-light group-hover:text-[#F5EFE6] transition-colors">{link.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
