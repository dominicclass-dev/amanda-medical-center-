/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { SocialLinks } from './components/SocialLinks';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { motion } from 'motion/react';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-transparent font-sans selection:bg-[#8B5E3C] selection:text-white">
        <Navbar />
        <main>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}><Hero /></motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}><About /></motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}><Services /></motion.div>
          <BeforeAfterSlider />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}><Testimonials /></motion.div>
          <div className="bg-premium-gradient relative">
            {/* Luminous Texture Overlay */}
            <div className="absolute inset-0 silk-sheen pointer-events-none"></div>
            
            <div className="relative z-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}><FAQ /></motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}><SocialLinks /></motion.div>
              <Footer />
            </div>
          </div>
        </main>
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

