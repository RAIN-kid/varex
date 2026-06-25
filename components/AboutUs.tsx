'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AboutSnippet() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#F8FAFC] overflow-hidden">
      
      {/* Background Decorative Pattern (Subtle dots or lines for industrial feel) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* UPANDE WA KUSHOTO: Overlapping Images Composition */}
          <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[650px]">
            
            {/* Background Accent Square */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 w-3/4 h-3/4 bg-gray-200 rounded-bl-[80px] rounded-tr-[80px]"
            />

            {/* Picha Kuu (Main Image - Top Right Offset) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-6 right-0 w-[85%] h-[65%] z-10 shadow-2xl overflow-hidden"
            >
              <img 
                src="images/about11.jpg" 
                alt="Varex Main Engineering" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay" />
            </motion.div>

            {/* Picha Ndogo (Smaller Image - Bottom Left Overlapping) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-6 left-0 w-[60%] h-[45%] z-20 border-8 border-[#F8FAFC] shadow-xl overflow-hidden"
            >
              <img 
                src="images/about12.webp" 
                alt="Varex Equipment Detail" 
                className="w-full h-full object-cover"
              />
            </motion.div>


          </div>

          {/* UPANDE WA KULIA: Text & Staggered Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col lg:pl-10 relative z-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-brand-orange" />
              <h2 className="text-brand-orange font-bold uppercase tracking-[0.2em] text-xs sm:text-sm">
                About Varex Group
              </h2>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue leading-[1.15] mb-8">
              Enhancing <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-orange">Efficiency</span> <br />
              & Safety Worldwide.
            </h3>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 border-l-4 border-gray-200 pl-6">
              We provide specialized services in electrical engineering, instrumentation systems, cathodic protection, backup power solutions, and industrial equipment supply. Our goal is to enhance operational efficiency, safety, and sustainability for our clients through innovative and dependable solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-brand-orange shrink-0 mt-0.5" />
                <span className="text-sm font-bold text-brand-blue">Experienced engineering team</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-brand-orange shrink-0 mt-0.5" />
                <span className="text-sm font-bold text-brand-blue">End-to-end supply solutions</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-brand-orange shrink-0 mt-0.5" />
                <span className="text-sm font-bold text-brand-blue">International standards</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-brand-orange shrink-0 mt-0.5" />
                <span className="text-sm font-bold text-brand-blue">Focus on safety & quality</span>
              </div>
            </div>

            {/* Staggered / Overlapping Buttons */}
            <div className="flex flex-row items-center relative mt-4">
              {/* Primary Button (Juu/Mbele) */}
              <Link 
                href="/about" 
                className="relative z-20 flex items-center gap-2 bg-brand-orange text-white px-8 py-4 sm:px-10 sm:py-5 font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-orange-600 transition-colors shadow-2xl"
              >
                Discover More <ArrowRight size={16} />
              </Link>
              
              {/* Secondary Button (Inapishana na kujificha kidogo chini ya Primary) */}
              <Link 
                href="#services" 
                className="relative z-10 flex items-center gap-2 bg-white text-brand-blue px-6 py-4 sm:px-8 sm:py-5 -ml-4 sm:-ml-8 pl-8 sm:pl-14 border border-gray-200 font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-gray-50 transition-colors shadow-md"
              >
                Our Services
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}