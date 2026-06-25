'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Gauge, Network, ShieldCheck,
  ChevronRight, CheckCircle2, ChevronDown, ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

// Data Kamili: Specialized & Pumps zimetolewa, Picha mpya zimewekwa (zinakubali Array kwa ajili ya Slider)
const servicesData = [
  {
    id: 'electrical',
    title: 'Electrical engineering',
    icon: <Zap size={24} strokeWidth={1.5} />,
    images: [
      '/images/service-elecctrical1.jpeg',
      '/images/service-elecctrical2.jpeg',
      '/images/service-elecctrical3.jpeg'
    ],
    description: 'Comprehensive electrical solutions spanning installation, diagnostics, and maintenance for industrial systems.',
    features: [
      'High, Medium and Low Voltage (HV/MV/LV) switchgear installation',
      'Testing and maintenance (contact resistance, relay testing, primary & secondary injection)',
      'Industrial electrical systems installation',
      'Panel building, installation, and commissioning',
      'Transmission line and substation construction',
      'Transformer testing (TTR, vector group, winding resistance, insulation testing, BDV, DGA)',
      'Oil filtration, dehydration, and purification',
      'Transformer maintenance and diagnostics'
    ]
  },
  {
    id: 'instrumentation',
    title: 'Instrumentation & automation',
    icon: <Gauge size={24} strokeWidth={1.5} />,
    images: [
      '/images/service-auto1.jpeg',
      '/images/service-auto2.jpeg'
    ],
    description: 'Precision measurement and automated control systems to optimize your industrial processes.',
    features: [
      'Installation and calibration of flow meters, pressure transmitters, and level sensors',
      'Supply and setup of flowmeters, densitometers, and pressure instruments',
      'PLC, HMI programming, and SCADA system integration'
    ]
  },
  {
    id: 'fiber',
    title: 'Fiber optic & IT services',
    icon: <Network size={24} strokeWidth={1.5} />,
    images: [
      '/images/service-it.avif'
    ], // Hii haikutajwa, inabaki na picha moja
    description: 'Robust industrial networking and communication infrastructure tailored for high-speed data transfer.',
    features: [
      'Fiber optic splicing (single-mode and multi-mode)',
      'OTDR testing and performance certification',
      'Visual Fault Locator (VFL) testing and troubleshooting',
      'IT and Networking services'
    ]
  },
  {
    id: 'cathodic',
    title: 'Cathodic protection services',
    icon: <ShieldCheck size={24} strokeWidth={1.5} />,
    images: [
      '/images/services-cathodic1.jpg',
      '/images/services-cathodic2.jpg'
    ],
    description: 'Advanced corrosion prevention systems to safeguard critical industrial infrastructure and extend asset lifespan.',
    features: [
      'System design and engineering',
      'Installation of sacrificial anode cathodic protection systems',
      'Installation of Impressed Current Cathodic Protection (ICCP) systems',
      'Inspection, testing, and commissioning',
      'Routine monitoring, maintenance, and system upgrades'
    ],
    subTitle: 'Cathodic Protection Applications',
    subFeatures: [
      'Oil & gas pipelines',
      'Marine and offshore facilities',
      'Storage tanks',
      'Industrial plants and refineries',
      'Reinforced concrete structures and infrastructure'
    ]
  }
];

// Component Maalum kwa ajili ya kufanya Slide Show kwenye Picha za Huduma
const ServiceImageSlider = ({ images, title }: { images: string[], title: string }) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); // Inabadilisha picha kila baada ya sekunde 4
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="w-full h-full relative">
      <AnimatePresence initial={false}>
        <motion.img
          key={idx}
          src={images[idx]}
          alt={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      
      {/* Vidoti vinavyoonyesha idadi ya picha (vinaonekana tu kama picha ziko zaidi ya 1) */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 flex gap-1.5 z-20">
          {images.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'w-4 bg-brand-orange' : 'w-1.5 bg-white/60'}`} 
            />
          ))}
        </div>
      )}
    </div>
  );
};


export default function ServicesPage() {
  const [activeService, setActiveService] = useState(servicesData[0].id);

  // Inasoma Link uliyotoka nayo kwenye Navbar na kufungua huduma husika
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const targetId = hash === 'cathodic2' ? 'cathodic' : hash;
      if (servicesData.some(s => s.id === targetId)) {
        setActiveService(targetId);
        
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 300);
      }
    }
  }, []);

  const activeData = servicesData.find(s => s.id === activeService) || servicesData[0];

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-[80px]">
      
      {/* 1. HERO BANNER */}
      <section className="relative h-[35vh] min-h-[300px] bg-brand-blue flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="images/service-elecctrical3.jpeg" 
            alt="Engineering Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-blue/85 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <div className="w-1 h-1 bg-brand-orange rounded-full" />
            <span className="text-white">Our Services</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Engineering services.
          </motion.h1>
        </div>
      </section>

      {/* 2. MAIN CONTENT (Sticky Sidebar Layout) */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* UPANDE WA KUSHOTO: Sticky Sidebar Navigation */}
            <div className="hidden lg:block lg:w-1/3">
              <div className="sticky top-32 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 px-4">
                  Select a service
                </h3>
                <div className="flex flex-col space-y-2">
                  {servicesData.map((service) => {
                    const isActive = activeService === service.id;
                    return (
                      <button
                        key={service.id}
                        id={service.id} // Added ID for scrolling
                        onClick={() => setActiveService(service.id)}
                        className={`flex items-center justify-between w-full text-left px-4 py-4 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? 'bg-brand-blue text-white shadow-md' 
                            : 'bg-transparent text-gray-600 hover:bg-gray-50 hover:text-brand-orange'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`${isActive ? 'text-brand-orange' : 'text-gray-400'}`}>
                            {service.icon}
                          </span>
                          <span className="font-semibold text-[15px]">{service.title}</span>
                        </div>
                        <ChevronRight size={18} className={`transition-transform duration-300 ${isActive ? 'translate-x-1 text-brand-orange' : 'opacity-0'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* UPANDE WA KULIA: Service Details */}
            <div className="hidden lg:block lg:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  {/* Container ya Picha na Slide Show Mpya */}
                  <div className="w-full h-[400px] overflow-hidden relative">
                    <ServiceImageSlider images={activeData.images} title={activeData.title} />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none z-10" />
                    <div className="absolute bottom-8 left-8 flex items-center gap-4 z-20">
                      <div className="w-14 h-14 bg-brand-orange text-white flex items-center justify-center rounded-xl shadow-lg">
                        {activeData.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-white capitalize">{activeData.title}</h2>
                    </div>
                  </div>

                  <div className="p-8 sm:p-12">
                    <p className="text-lg text-gray-600 leading-relaxed mb-10 border-l-4 border-brand-orange pl-6">
                      {activeData.description}
                    </p>

                    <h3 className="text-xl font-bold text-brand-blue mb-6">Capabilities & execution</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-10">
                      {activeData.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100/50">
                          <CheckCircle2 size={20} className="text-brand-orange shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {activeData.subFeatures && (
                      <div id="cathodic2" className="mt-10 pt-10 border-t border-gray-100 scroll-mt-24">
                        <h3 className="text-xl font-bold text-brand-blue mb-6">{activeData.subTitle}</h3>
                        <div className="flex flex-wrap gap-3">
                          {activeData.subFeatures.map((app, idx) => (
                            <span key={idx} className="px-4 py-2 bg-brand-blue/5 text-brand-blue font-medium text-sm rounded-full border border-brand-blue/10">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* MOBILE VIEW: Accordion */}
            <div className="lg:hidden flex flex-col space-y-4">
              {servicesData.map((service) => {
                const isActive = activeService === service.id;
                return (
                  <div key={service.id} id={service.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden scroll-mt-24">
                    <button
                      onClick={() => setActiveService(isActive ? '' : service.id)}
                      className={`w-full flex items-center justify-between p-5 transition-colors ${isActive ? 'bg-brand-blue text-white' : 'bg-white text-gray-800'}`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={isActive ? 'text-brand-orange' : 'text-brand-orange'}>
                          {service.icon}
                        </span>
                        <span className="font-bold text-lg text-left capitalize">{service.title}</span>
                      </div>
                      <ChevronDown size={20} className={`transition-transform duration-300 ${isActive ? 'rotate-180 text-brand-orange' : 'text-gray-400'}`} />
                    </button>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 border-t border-gray-100">
                            {/* Mobile Image Slider */}
                            <div className="w-full h-[200px] rounded-xl overflow-hidden mb-6 relative">
                              <ServiceImageSlider images={service.images} title={service.title} />
                            </div>
                            
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                              {service.description}
                            </p>

                            <h4 className="text-brand-blue font-bold text-sm uppercase tracking-wider mb-4">Capabilities</h4>
                            <ul className="space-y-3 mb-6">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <CheckCircle2 size={18} className="text-brand-orange shrink-0 mt-0.5" />
                                  <span className="text-gray-700 text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>

                            {service.subFeatures && (
                              <div id={service.id === 'cathodic' ? 'cathodic2-mobile' : undefined} className="mt-6 pt-6 border-t border-gray-100">
                                <h4 className="text-brand-blue font-bold text-sm uppercase tracking-wider mb-4">{service.subTitle}</h4>
                                <div className="flex flex-wrap gap-2">
                                  {service.subFeatures.map((app, idx) => (
                                    <span key={idx} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-md">
                                      {app}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 3. BOTTOM CTA BLOCK - Imefananishwa na Navbar (Rangi Nyeupe, Maandishi Bluu) */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Beyond Engineering</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-blue mb-8">
            Looking for high-quality industrial equipment?
          </h3>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto font-medium">
            We partner with global brands to supply premium equipment, sensors, and components that power modern infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/supply" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-8 py-4 font-bold capitalize text-sm hover:bg-opacity-90 transition-colors rounded-xl shadow-lg"
            >
              Explore supply scope <ArrowRight size={18} />
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-brand-blue text-brand-blue px-8 py-4 font-bold capitalize text-sm hover:bg-gray-50 transition-colors rounded-xl"
            >
              Contact our team
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}