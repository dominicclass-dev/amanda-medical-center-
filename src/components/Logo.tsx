import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-16 h-16" }) => {
  const logoUrl = "https://i.ibb.co/yFRjN8dc/upscalemedia-transformed-1-remove-bg-io.png";
  
  return (
    <div 
      className={`${className} animate-logo-color logo-mask`}
      style={{
        maskImage: `url(${logoUrl})`,
        WebkitMaskImage: `url(${logoUrl})`,
      }}
      role="img"
      aria-label="Amanda Medical Center Logo"
    />
  );
};
