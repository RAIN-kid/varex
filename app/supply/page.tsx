'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Gauge, Settings, Wind, Radio, Cpu, 
  ArrowRight, CheckCircle2, Box, ShieldCheck, Factory, PhoneCall, Droplet, Wrench
} from 'lucide-react';
import Link from 'next/link';

// Data Kamili Imejumuisha Pumps na Specialized Equipment
const supplyData = [
  {
    id: 'electrical',
    title: 'Electrical Equipment',
    icon: <Zap size={20} strokeWidth={1.5} />,
    images: [
      '/images/scope-electrical1.jpeg',
      '/images/scope-electrical2.jpeg',
      '/images/scope-electrical3.jpeg',
      '/images/scope-electrical4.jpeg'
    ],
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
    images: [
      '/images/scope-sensor1.jpeg',
      '/images/scope-sensor2.jpeg',
      '/images/scope-sensor3.jpeg'
    ],
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
    images: [
      '/images/scope-conveyor1.jpeg',
      '/images/scope-conveyor2.jpeg',
      '/images/scope-conveyor3.jpeg'
    ],
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
    images: [
      '/images/scope-process1.jpeg',
      '/images/scope-process2.jpeg',
      '/images/scope-process3.jpeg'
    ],
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
    images: [
      '/images/scope-commu1.jpeg',
      '/images/scope-commu2.jpeg'
    ],
    items: [
      'Leaky feeder communication systems', 
      'Amplifiers, splitters, and power supply units'
    ]
  },
  {
    id: 'gas',
    title: 'Gas Systems',
    icon: <Wind size={20} strokeWidth={1.5} />,
    images: [
      '/images/scope-gas1.jpeg',
      '/images/scope-gas2.jpeg'
    ],
    items: [
      'Nitrogen and oxygen generation systems', 
      'Pressure vessels and related equipment'
    ]
  },
  {
    id: 'pumps',
    title: 'Pumps & Compressors',
    icon: <Droplet size={20} strokeWidth={1.5} />,
    images: [
      '/images/scope-pump1.jpeg',
      '/images/scope-pump2.jpeg',
      '/images/scope-pump3.jpeg'
    ],
    items: [
      'Chemical, slurry, and dosing pumps', 
      'Progressive cavity pumps', 
      'Dewatering and drainage pumps', 
      'Compressors, air dryers, and filtration'
    ]
  },
  {
    id: 'special',
    title: 'Specialized Equipment',
    icon: <Wrench size={20} strokeWidth={1.5} />,
    images: [
      '/images/scope-special1.jpeg',
      '/images/scope-special2.jpeg',
      '/images/scope-special3.jpeg',
      '/images/scope-special4.jpeg',
      '/images/scope-special5.jpeg'
    ],
    items: [
      'Larox press filter machines', 
      'Exciters & Reactors', 
      'Conveyor belt weightometers', 
      'Carbon regeneration kilns', 
      'Thermal oil heaters & Gold room rectifiers',
      'Oxygen plants'
    ]
  },
  {
    id: 'cathodic',
    title: 'Cathodic Protection Systems',
    icon: <ShieldCheck size={20} strokeWidth={1.5} />,
    images: [
      '/images/scope-catho1.jpg',
      '/images/scope-catho2.jpg',
      '/images/scope-catho3.jpg'
    ],
    items: [
      'Anodes (Zn, Mg, Al, Ti)', 
      'Transformer rectifier unit (1Ø and 3Ø)', 
      'Reference electrodes and coupons', 
      'Cables (double insulation) & Corrosion probes', 
      'Cathodic protection junction box and test'
    ]
  },
  {
    id: 'served',
    title: 'Industries Served',
    icon: <Factory size={20} strokeWidth={1.5} />,
    images: [
      'varex-logo.jpeg'
    ],
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

// Component ya Slider ya Picha Kwenye Kadi (Ili Picha Zisi Zoom-in Vibaya)
const SupplyImageSlider = ({ images, title }: { images: string[], title: string }) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4500); // Picha zinabadilika kwa ulaini kila baada ya sekunde 4.5
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="w-full h-full relative bg-gray-100">
      <AnimatePresence initial={false}>
        <motion.img
          key={idx}
          src={images[idx]}
          alt={`${title} image ${idx + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          // Object cover bila scale-105 inaondoa lile tatizo la kujizoom
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      
      {/* Vidoti vya kuonyesha picha inayoendelea (Vinaonekana chini kulia) */}
      {images.length > 1 && (
        <div className="absolute bottom-3 right-3 flex gap-1.5 z-20 bg-black/20 px-2 py-1 rounded-full backdrop-blur-sm">
          {images.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'w-4 bg-brand-orange' : 'w-1.5 bg-white/70'}`} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

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
            src="images/operation2.png" 
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
                id={category.id} // Hash scrolling anchor
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col scroll-mt-28"
              >
                {/* Picha imefanywa kubwa kidogo (h-52) ili iweze kuonyesha details bila kubana */}
                <div className="h-52 w-full relative overflow-hidden">
                  <SupplyImageSlider images={category.images} title={category.title} />
                  
                  {/* Icon juu kushoto */}
                  <div className="absolute top-3 left-3 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-lg flex items-center justify-center text-brand-orange shadow-sm z-20">
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

      {/* 3. PARTNER BRANDS SHOWCASE (Picha Moja Kubwa Inayoonyesha Brands Zote) */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">Global Network</h2>
            <h3 className="text-2xl md:text-3xl font-extrabold text-brand-blue">
              Trusted by leading brands
            </h3>
          </div>
          
          <div className="w-100 max-w-5xl mx-auto rounded-2xl overflow-hidden bg-gray-50 p-4 border border-gray-100 shadow-sm">
            <img 
              src="/images/scope-brands.jpeg" 
              alt="Our Supply Partners and Brands" 
              className="w-100 h-auto object-contain rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* 4. VIBRANT BOTTOM CTA */}
      <section className="py-20 bg-brand-orange relative overflow-hidden">
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