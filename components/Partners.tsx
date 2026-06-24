'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Data imesomwa moja kwa moja kutoka kwenye folder lako la public/logos
const allLogos = [
  { name: "ABB", img: "/logos/abb.png" },
  { name: "SIEMENS", img: "/logos/siemens.webp" },
  { name: "Schneider", img: "/logos/shneider.svg" },
  { name: "GE VERNOVA", img: "/logos/gevernova.svg" },
  { name: "MITSUBISHI", img: "/logos/mitsubishi.svg" },
  { name: "OMRON", img: "/logos/logo_omron.svg" },
  { name: "CCG", img: "/logos/CCGHeaderLogo.png" },
  { name: "JOINTMASTER", img: "/logos/jointmaster.png" },
  { name: "URAS TECHNO", img: "/logos/uras.svg" },
  { name: "EMERSON", img: "/logos/emerson.webp" },
  { name: "YOKOGAWA", img: "/logos/yokogawa.png" },
  { name: "Valmet", img: "/logos/valmet.png" },
  { name: "Supmea", img: "/logos/supmea.jpg" },
  { name: "MBP", img: "/logos/mbp_engineers.jpg" },
  { name: "Automa", img: "/logos/automa.png" },
  { name: "PACE VALVES", img: "/logos/pace-valve.png" },
  { name: "Atlas Copco", img: "/logos/atlas-copco.png" },
  { name: "CompAir", img: "/logos/Compair-logo.jpg" },
  { name: "Grindex", img: "/logos/grindex.png" },
  { name: "FLS", img: "/logos/fls.png" },
  { name: "PROCESS AUTO", img: "/logos/process-auto.avif" },
  { name: "KEMIX", img: "/logos/kemix.jpg" },
  { name: "CORRO PUMP", img: "/logos/corro-pump.png" },
  { name: "PBE", img: "/logos/pbe.png" },
  { name: "Linde", img: "/logos/Linde.png" },
  { name: "Becker", img: "/logos/becker.svg" },
  { name: "PBE Axell", img: "/logos/pbe-axell.svg" },
  { name: "DUCORR", img: "/logos/ducor.png" },
  { name: "KIG TECH", img: "/logos/kig.png" },
  { name: "ABDULLA FOUAD", img: "/logos/abdulla.svg" }
];

// Tunagawa hizi logo 30 katika makundi 3 (Kila kundi lina logo 10)
const partnerSlides = [
  allLogos.slice(0, 10),
  allLogos.slice(10, 20),
  allLogos.slice(20, 30)
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play kila baada ya sekunde 7
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === partnerSlides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === partnerSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? partnerSlides.length - 1 : prev - 1));
  };

  return (
    <section id="partners" className="py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Kichwa */}
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-bold tracking-widest text-sm mb-3 uppercase">
            Our Partners
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-blue tracking-tight">
            Brands we work with
          </h3>
        </div>

        {/* Eneo la Slider lenye Arrows */}
        <div className="relative flex items-center justify-between w-full">
          
          {/* Arrow ya Kushoto */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 z-20 w-12 h-12 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300 transform -translate-x-2 sm:-translate-x-6"
            aria-label="Previous partners"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Eneo la Kati linalobeba Logo */}
          <div className="flex-1 w-full px-8 sm:px-16 relative min-h-[220px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="absolute inset-0 flex items-center justify-center w-full px-4 sm:px-16"
              >
                {/* Grid ya Logo */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 w-full max-w-5xl">
                  {partnerSlides[currentIndex].map((logo, idx) => (
                    <div 
                      key={idx} 
                      className="h-[80px] bg-white border border-gray-100 rounded-lg flex items-center justify-center overflow-hidden hover:border-brand-orange transition-colors duration-300 group p-2"
                      title={logo.name}
                    >
                      <img 
                        src={logo.img} 
                        alt={`${logo.name} logo`} 
                        className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrow ya Kulia */}
          <button 
            onClick={nextSlide}
            className="absolute right-0 z-20 w-12 h-12 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300 transform translate-x-2 sm:translate-x-6"
            aria-label="Next partners"
          >
            <ChevronRight size={24} />
          </button>

        </div>

        {/* Vidoti (Indicators) */}
        <div className="flex justify-center gap-2 mt-8">
          {partnerSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-8 bg-brand-orange' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}