'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Gauge, Settings, Wind, Radio, Cpu, 
  ArrowRight, CheckCircle2, Box, ShieldCheck, Factory, PhoneCall
} from 'lucide-react';
import Link from 'next/link';

// Data imesomwa kwa kina kutoka kwenye PDF. Hakuna kilichoachwa.
const supplyData = [
  {
    id: 'electrical',
    title: 'Electrical Equipment',
    icon: <Zap size={20} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop',
    items: [
      'HV/MV/LV cables & switchgear', 
      'ACB, VCB, contactors, relays & drives', 
      'Motors (Vibrators, Induction & Mill motors)', 
      'Variable frequency drives (VFDs) & Motor starters'
    ]
  },
  {
    id: 'sensors',
    title: 'Instrumentation & Sensors',
    icon: <Gauge size={20} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    items: [
      'Flowmeters, level transmitters & pressure sensors', 
      'Air flow, proximity, pH & conductivity sensors', 
      'Density analyzers & calibration equipment', 
      'PLC Systems'
    ]
  },
  {
    id: 'conveyor',
    title: 'Conveyor Systems',
    icon: <Settings size={20} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2070&auto=format&fit=crop',
    items: [
      'Conveyor belts, pulleys, and idlers', 
      'Belt scales and tracking systems', 
      'Weigh feeders, weightometers & metal detection'
    ]
  },
  {
    id: 'control',
    title: 'Process Control Instruments',
    icon: <Cpu size={20} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop',
    items: [
      'Valves & Limit switches', 
      'Pneumatic actuators', 
      'Positioner & Pneumatic solenoid valves', 
      'Pneumatic manifolds & Pneumatic cylinders', 
      'Slurry knife gate valves'
    ]
  },
  {
    id: 'communication',
    title: 'Communication System',
    icon: <Radio size={20} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop',
    items: [
      'Leaky feeder communication systems', 
      'Amplifiers, splitters, and power supply units'
    ]
  },
  {
    id: 'gas',
    title: 'Gas Systems',
    icon: <Wind size={20} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop',
    items: [
      'Nitrogen and oxygen generation systems', 
      'Pressure vessels and related equipment'
    ]
  },
  {
    id: 'cathodic',
    title: 'Cathodic Protection Systems',
    icon: <ShieldCheck size={20} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2069&auto=format&fit=crop',
    items: [
      'Anodes (Zn, Mg, Al, Ti)', 
      'Transformer rectifier unit (1Ø and 3Ø)', 
      'Reference electrodes and coupons', 
      'Cables (double insulation)', 
      'Corrosion probes', 
      'Cathodic protection junction box and test'
    ]
  },
  {
    id: 'served',
    title: 'Industries Served',
    icon: <Factory size={20} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1581092746498-1e4e2694b80b?q=80&w=2070&auto=format&fit=crop',
    items: [
      'Mining', 
      'Oil & Gas', 
      'Power Utilities', 
      'Marine & Offshore', 
      'Manufacturing', 
      'Commercial Infrastructure', 
      'Government Projects'
    ]
  }
];

export default function SupplyScopePage() {

  // Kusaidia scrolling kutokea Navbar
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-[80px]">
      
      {/* 1. COMPACT HERO BANNER */}
      <section className="relative h-[30vh] min-h-[250px] bg-brand-blue flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop" 
            alt="Industrial Supply Scope" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-blue/85 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <div className="w-1 h-1 bg-brand-orange rounded-full" />
            <span className="text-white">Supply Scope</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            Premium equipment.
          </motion.h1>
        </div>
      </section>

      {/* 2. PUNCHY INTRO & CATALOG GRID */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-blue mb-4">
              Sourcing the best for your operations.
            </h2>
            <p className="text-gray-600 text-base font-medium">
              We partner with world-leading manufacturers to supply high-quality, reliable components tailored for heavy-duty industrial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supplyData.map((category, idx) => (
              <motion.div 
                key={category.id}
                id={category.id} // Inafanya hash scrolling ifanye kazi vizuri
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col scroll-mt-28"
              >
                <div className="h-40 w-full relative overflow-hidden group">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-lg flex items-center justify-center text-brand-orange shadow-sm">
                    {category.icon}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  {/* Readability: Kichwa kinakuwa Bold na Kizito sana */}
                  <h3 className="text-xl font-extrabold text-brand-blue mb-6 border-b border-gray-100 pb-3">
                    {category.title}
                  </h3>

                  <div className="mt-auto">
                    <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                      <Box size={14} /> {category.id === 'served' ? 'Sectors' : 'Supplied Items'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, i) => (
                        <span 
                          key={i} 
                          // Readability: Maandishi mepesi yanayosomeka kirahisi sana
                          className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 text-[13px] font-medium rounded-md shadow-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. VIBRANT BOTTOM CTA (Imebadilishwa Rangi na Muundo Kuondoa Kufanana) */}
      <section className="py-20 bg-brand-orange relative overflow-hidden">
        {/* Abstract Background Elements ili isionekane flat */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-48 h-48 bg-black opacity-10 rounded-full blur-2xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-white flex items-center justify-center rounded-2xl mx-auto mb-8 text-brand-orange shadow-xl">
            <PhoneCall size={32} strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Need specialized equipment?
          </h2>
          <p className="text-orange-50 text-lg mb-10 max-w-2xl mx-auto font-medium">
            Contact our procurement team today. We ensure you get the right industrial components on time, meeting all global quality standards.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-brand-orange px-10 py-4 font-bold capitalize text-sm hover:bg-gray-50 transition-colors rounded-xl shadow-lg"
            >
              Request a quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}