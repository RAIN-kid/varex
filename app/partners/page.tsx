'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Globe2, Handshake, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Makundi yote 10 kama yalivyo kwenye PDF yako, yameunganishwa na Local Logos
const partnersData = [
  {
    id: 'electrical',
    title: 'Industrial Electrical',
    description: 'World-leading manufacturers of switchgears, industrial motors, drives, and power distribution components.',
    logos: [
      { name: "ABB", img: "/logos/abb.png" },
      { name: "SIEMENS", img: "/logos/siemens.webp" },
      { name: "Schneider Electric", img: "/logos/shneider.svg" },
      { name: "GE VERNOVA", img: "/logos/gevernova.svg" },
      { name: "MITSUBISHI", img: "/logos/mitsubishi.svg" },
      { name: "OMRON", img: "/logos/logo_omron.svg" },
      { name: "CCG", img: "/logos/CCGHeaderLogo.png" },
      { name: "JOINTMASTER", img: "/logos/jointmaster.png" },
      { name: "URAS TECHNO", img: "/logos/uras.svg" }
    ]
  },
  {
    id: 'process-control',
    title: 'Process control instruments',
    description: 'Precision measurement devices, sensors, and automated control systems.',
    logos: [
      { name: "MBP ENGINEERS", img: "/logos/mbp_engineers.jpg" },
      { name: "EMERSON", img: "/logos/emerson.webp" },
      { name: "Automa", img: "/logos/automa.png" },
      { name: "PACE VALVES", img: "/logos/pace-valve.png" },
      { name: "Valmet", img: "/logos/valmet.png" }
    ]
  },
  {
    id: 'pumping',
    title: 'Pumping and dewatering',
    description: 'Heavy-duty fluid handling and dewatering systems for mining and industry.',
    logos: [
      { name: "Grindex", img: "/logos/grindex.png" },
      { name: "CEMORUMS", img: "/logos/cemorums.png" }, // Hii inabidi ui-download na kuiweka
      { name: "CORRO PUMP", img: "/logos/corro-pump.png" },
      { name: "FLS", img: "/logos/fls.png" }
    ]
  },
  {
    id: 'leaching',
    title: 'Leaching, adsorption and elution circuits',
    description: 'Specialized metallurgical circuits and chemical processing solutions.',
    logos: [
      { name: "CIBUNIGAS", img: "/logos/cibunigas.svg" }, // Hii inabidi ui-download na kuiweka
      { name: "KEMIX", img: "/logos/kemix.jpg" }
    ]
  },
  {
    id: 'conveyor',
    title: 'Conveyor Systems',
    description: 'Robust material handling systems and process automation infrastructure.',
    logos: [
      { name: "PROCESS AUTOMATION", img: "/logos/process-auto.avif" }
    ]
  },
  {
    id: 'instrumentations',
    title: 'Instrumentations and Sensors',
    description: 'Advanced measurement and sensor technologies for industrial applications.',
    logos: [
      { name: "YOKOGAWA", img: "/logos/yokogawa.png" },
      { name: "weber Sensors GmbH", img: "/logos/weber.png" }, // Hii inabidi ui-download na kuiweka
      { name: "Supmea", img: "/logos/supmea.jpg" }
    ]
  },
  {
    id: 'gas-production',
    title: 'Nitrogen and Oxygen Gas Production Systems and Pressure Vessels',
    description: 'Reliable industrial gas generation systems and storage solutions.',
    logos: [
      { name: "Linde", img: "/logos/Linde.png" }
    ]
  },
  {
    id: 'communication',
    title: 'Leaky feeder communication system',
    description: 'Underground and industrial communication networking infrastructure.',
    logos: [
      { name: "becker MINING SYSTEMS", img: "/logos/becker.svg" }
    ]
  },
  {
    id: 'compressors',
    title: 'Compressors',
    description: 'High-performance air compression and filtration systems.',
    logos: [
      { name: "Atlas Copco", img: "/logos/atlas-copco.png" },
      { name: "CompAir", img: "/logos/Compair-logo.jpg" }
    ]
  },
  {
    id: 'cathodic',
    title: 'Cathodic protection system',
    description: 'Advanced corrosion prevention systems to safeguard critical infrastructure.',
    logos: [
      { name: "PBE Axell", img: "/logos/pbe-axell.svg" },
      { name: "DUCORR ARABIA", img: "/logos/ducor.png" },
      { name: "KIG TECH", img: "/logos/kig.png" },
      { name: "ABDULLA FOUAD", img: "/logos/abdulla.svg" }
    ]
  }
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-[80px]">
      
      {/* =========================================
          1. COMPACT HERO BANNER
          ========================================= */}
      <section className="relative h-[35vh] min-h-[300px] bg-brand-blue flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="images/partners.jpg" 
            alt="Varex Global Partners" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-blue/90 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <div className="w-1 h-1 bg-brand-orange rounded-full" />
            <span className="text-white">Our Partners</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Global network.
          </motion.h1>
        </div>
      </section>

      {/* =========================================
          2. INTRO STATS / TRUST BAR
          ========================================= */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 py-10">
            <div className="flex items-center gap-4 py-4 md:py-0 md:pr-8">
              <div className="w-12 h-12 bg-orange-50 text-brand-orange rounded-full flex items-center justify-center shrink-0">
                <Globe2 size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-blue">Global Sourcing</h4>
                <p className="text-sm text-gray-500">Partners across 4 continents</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-4 md:py-0 md:px-8">
              <div className="w-12 h-12 bg-orange-50 text-brand-orange rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-blue">Genuine Equipment</h4>
                <p className="text-sm text-gray-500">100% certified authentic</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-4 md:py-0 md:pl-8">
              <div className="w-12 h-12 bg-orange-50 text-brand-orange rounded-full flex items-center justify-center shrink-0">
                <Handshake size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-blue">Direct Partnerships</h4>
                <p className="text-sm text-gray-500">Authorized suppliers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. CATEGORIZED LOGO SECTIONS (Makundi 10)
          ========================================= */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-24">
            {partnersData.map((category, idx) => (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-8"
              >
                {/* Category Header */}
                <div className="border-b border-gray-200 pb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-3">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 text-base md:text-lg max-w-3xl">
                    {category.description}
                  </p>
                </div>

                {/* Logo Area */}
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  {category.logos.map((logo, index) => (
                    <div 
                      key={index} 
                      className="bg-white border border-gray-100 rounded-xl w-[140px] sm:w-[180px] h-[80px] sm:h-[100px] flex items-center justify-center p-4 hover:border-brand-orange hover:shadow-md transition-all duration-300 group"
                      title={logo.name}
                    >
                      <img 
                        src={logo.img} 
                        alt={`${logo.name} logo`} 
                        // Tumeweka p-1 na object-contain ili hata logo ikiwa kubwa itoshee vizuri bila kukatwa
                        className="w-full h-full object-contain p-1 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          4. BOTTOM CTA
          ========================================= */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
            Looking for specific industrial equipment?
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Leverage our global network. If you don't see your preferred brand here, our procurement team can still source it for you.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-8 py-4 font-bold capitalize text-sm hover:bg-brand-orange transition-colors rounded-xl shadow-lg"
          >
            Contact our supply team <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}