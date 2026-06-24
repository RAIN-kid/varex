'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Operations() {
  
  const engineeringList = [
    'Electrical Engineering',
    'Instrumentation & Automation',
    'Cathodic Protection Services',
    'Fiber Optic and IT Services',
    'Pumps & Compressors',
    'Specialized Equipment Services'
  ];

  const supplyList = [
    'Electrical Equipment',
    'Instrumentation & Sensors',
    'Conveyor Systems',
    'Gas Systems',
    'Communication System'
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Kichwa */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">
            Our Operations
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-blue leading-tight">
            Integrated Engineering <br /> & Industrial Supply.
          </h3>
        </div>

        <div className="flex flex-col gap-16 lg:gap-32">
          
          {/* ==============================================
              ROW 1: PICHA KUSHOTO, TEXT KULIA
              ============================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Picha (Inachukua column 1 mpaka 7) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-7 lg:col-start-1 lg:row-start-1 h-[400px] lg:h-[550px] z-0"
            >
              {/* PICHA MPYA INAYOFANYA KAZI VIZURI */}
              <img 
                src="https://productimages.withfloats.com/tile/5f1beeaedd5b640001427441.jpg" 
                alt="Engineering Services" 
                className="w-full h-full object-cover shadow-lg"
              />
            </motion.div>

            {/* Text Box (Inachukua column 7 mpaka 12 - Hapa ndipo zinapishana) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="lg:col-span-6 lg:col-start-7 lg:row-start-1 z-10 bg-white p-8 sm:p-12 shadow-2xl border border-gray-100 -mt-16 lg:mt-0 relative"
            >
              <h4 className="text-2xl sm:text-3xl font-bold text-brand-blue mb-4">Engineering Services</h4>
              <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
                Expert execution of complex technical projects. We deliver end-to-end engineering solutions prioritizing safety, efficiency, and international standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 mb-10">
                {engineeringList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-brand-orange mt-0.5 shrink-0" />
                    <span className="text-gray-800 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/services" 
                className="inline-flex items-center gap-2 text-white bg-brand-blue px-6 py-3.5 font-semibold text-sm hover:bg-brand-orange transition-colors"
              >
                Explore Services <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* ==============================================
              ROW 2: TEXT KUSHOTO, PICHA KULIA
              ============================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Picha (Inachukua column 6 mpaka 12) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="order-1 lg:order-none lg:col-span-7 lg:col-start-6 lg:row-start-1 h-[400px] lg:h-[550px] z-0"
            >
              <img 
                src="https://vertex-egy.com/storage/images/services/687f945dce32f.png" 
                alt="Industrial Supply Scope" 
                className="w-full h-full object-cover shadow-lg"
              />
            </motion.div>

            {/* Text Box (Inachukua column 1 mpaka 6 - Inapishana na picha hapa) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="order-2 lg:order-none lg:col-span-6 lg:col-start-1 lg:row-start-1 z-10 bg-white p-8 sm:p-12 shadow-2xl border border-gray-100 -mt-16 lg:mt-0 relative"
            >
              <h4 className="text-2xl sm:text-3xl font-bold text-brand-blue mb-4">Supply Scope</h4>
              <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
                Reliable sourcing of premium industrial equipment. We partner with global brands to supply high-quality components for modern infrastructure.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 mb-10">
                {supplyList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-brand-orange mt-0.5 shrink-0" />
                    <span className="text-gray-800 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/supply" 
                className="inline-flex items-center gap-2 text-brand-blue bg-white border border-brand-blue px-6 py-3.5 font-semibold text-sm hover:bg-gray-50 transition-colors"
              >
                View Catalog <ArrowRight size={16} />
              </Link>
            </motion.div>
            
          </div>

        </div>
      </div>
    </section>
  );
}