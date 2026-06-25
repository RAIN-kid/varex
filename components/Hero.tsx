'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

// Data ina picha na yale maneno yanayojaza nafasi kuleta mantiki
const slidesData = [
  {
    id: 1,
    image: '/images/varex-hero1.avif',
    highlight: 'Engineering Solutions.' // Inaungana na "Delivering" kuwa "Delivering Engineering Solutions"
  },
  {
    id: 2,
    image: '/images/varex-hero2.avif',
    highlight: 'Industrial Equipment.' // Inaungana na "Delivering" kuwa "Delivering Industrial Equipment"
  },
  {
    id: 3,
    image: '/images/varex-hero3.jpg',
    highlight: 'Cathodic Protection.' // Inaungana na "Delivering" kuwa "Delivering Cathodic Protection"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-play the slider every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] w-full pt-[80px] lg:pt-[112px] bg-brand-blue overflow-hidden">
      
      {/* Background Images Slider */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
        >
          {/* Smooth Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 via-brand-blue/70 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/20 z-10" /> 
          <img
            src={slidesData[current].image}
            alt="Varex Group Limited Operations"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        
        <div className="w-full max-w-3xl mt-10 sm:mt-0">
          
          {/* Title: Neno "Delivering" limesimama, yale mengine yanajaza nafasi */}
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 drop-shadow-lg flex flex-col items-start">
            <span className="mb-1 sm:mb-2 text-gray-100">Delivering</span>
            <span className="text-brand-orange block overflow-hidden pb-2 h-[1.2em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={current}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="block"
                >
                  {slidesData[current].highlight}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
          
          {/* Sticky Description kutoka kwenye PDF */}
          <p className="text-gray-200 text-sm sm:text-xl font-light mb-10 leading-relaxed max-w-2xl drop-shadow-md">
            Varex Group Limited is a trusted engineering and industrial services company delivering high-quality electrical, instrumentation, and cathodic protection solutions.
          </p>
          
          {/* CTAs - Kwenye simu (flex-row) zinakaa bega kwa bega na kupungua ukubwa */}
          <div className="flex flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Link 
              href="/services" 
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 bg-brand-orange text-white px-2 sm:px-8 py-3.5 sm:py-4 font-bold uppercase tracking-wider hover:bg-orange-600 transition-all shadow-lg text-[11px] sm:text-sm text-center rounded-sm"
            >
              Our Services <ChevronRight size={16} className="hidden sm:block" />
            </Link>
            <Link 
              href="/contact" 
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 bg-transparent border-2 border-white text-white px-2 sm:px-8 py-3.5 sm:py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-brand-blue transition-all text-[11px] sm:text-sm text-center rounded-sm"
            >
              Request a Quote
            </Link>
          </div>

        </div>

      </div>
      
    </section>
  );
}