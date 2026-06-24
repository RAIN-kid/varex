'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Award, Lightbulb, Handshake, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Data kutoka kwenye Company Profile PDF
const coreValues = [
  { id: '01', title: 'Safety', desc: 'We prioritize safety in every project.', icon: <ShieldCheck size={28} strokeWidth={1.5} /> },
  { id: '02', title: 'Integrity', desc: 'We conduct business transparently and ethically.', icon: <Scale size={28} strokeWidth={1.5} /> },
  { id: '03', title: 'Quality', desc: 'We deliver products and services to the highest standards.', icon: <Award size={28} strokeWidth={1.5} /> },
  { id: '04', title: 'Innovation', desc: 'We use modern technology to solve industrial challenges.', icon: <Lightbulb size={28} strokeWidth={1.5} /> },
  { id: '05', title: 'Customer Commitment', desc: 'We build long-term partnerships through reliable service.', icon: <Handshake size={28} strokeWidth={1.5} /> }
];

const whyChooseUs = [
  'Experienced and skilled engineering team',
  'Commitment to international standards and best practices',
  'Reliable and timely project delivery',
  'End-to-end engineering and supply solutions',
  'Strong focus on safety and quality assurance'
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-[80px]">
      
      {/* =========================================
          1. PAGE HERO BANNER
          ========================================= */}
      <section className="relative h-[40vh] min-h-[350px] bg-brand-blue flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
            alt="About Varex Group" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 uppercase tracking-wide"
          >
            About Us
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-2 text-brand-orange text-sm font-bold uppercase tracking-widest"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          2. COMPANY OVERVIEW (Overlapping Layout)
          ========================================= */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Picha Upande wa Kushoto */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-7 lg:col-start-1 lg:row-start-1 h-[400px] lg:h-[550px] z-0 shadow-lg"
            >
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF44Jmxw2t1tXjbcY_BuQdh8ZdSmi0QaDCikP7ANpbfzI9SsUSWnlBCkq2&s=10" 
                alt="Varex Company Overview" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Boksi la Maandishi Upande wa Kulia (Lina-overlap Picha) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="lg:col-span-6 lg:col-start-7 lg:row-start-1 z-10 bg-white p-8 sm:p-12 shadow-2xl border-t-4 border-brand-orange relative -mt-16 lg:mt-0"
            >
              <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">
                Company Overview
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-brand-blue leading-tight mb-6">
                Delivering Reliable Engineering & Industrial Solutions.
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Varex Group Limited provides specialized services in electrical engineering, instrumentation systems, cathodic protection, backup power solutions, and industrial equipment supply.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our goal is to enhance operational efficiency, safety, and sustainability for our clients through innovative and dependable solutions.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* =========================================
          3. VISION & MISSION (Sehemu uliyoipenda)
          ========================================= */}
      <section className="py-24 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:pr-16"
            >
              <h2 className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-6 flex items-center gap-3">
                <div className="w-8 h-[2px] bg-brand-orange" /> Our Vision
              </h2>
              <p className="text-2xl sm:text-3xl leading-snug font-light">
                To become a leading engineering and industrial solutions provider in worldwide, delivering reliable and sustainable electrical, instrumentation, Cathodic protection, IT and industrial supply solutions.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-16 md:pt-0 md:pl-16"
            >
              <h2 className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-6 flex items-center gap-3">
                <div className="w-8 h-[2px] bg-brand-orange" /> Our Mission
              </h2>
              <p className="text-2xl sm:text-3xl leading-snug font-light">
                To provide high-quality engineering services, reliable industrial equipment, and technical solutions that enhance operational efficiency and safety.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          4. CORE VALUES (Solid Corporate Grid)
          ========================================= */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">
              Our Principles
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-blue">
              Core Values
            </h3>
          </div>

          {/* Gridi Safi ya Kiviwanda (Sio kadi zenye namba kubwa) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50 p-8 border border-gray-100 hover:border-brand-orange transition-colors duration-300 group"
              >
                <div className="w-14 h-14 bg-white shadow-sm flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-brand-blue mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          5. WHY CHOOSE US (Overlapping Layout Vice Versa)
          ========================================= */}
      <section className="py-24 bg-gray-50 overflow-hidden border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Picha Upande wa Kulia */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="order-1 lg:order-none lg:col-span-7 lg:col-start-6 lg:row-start-1 h-[400px] lg:h-[550px] z-0 shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop" 
                alt="Why Choose Varex Group" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Boksi la Maandishi Upande wa Kushoto (Lina-overlap Picha) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="order-2 lg:order-none lg:col-span-6 lg:col-start-1 lg:row-start-1 z-10 bg-white p-8 sm:p-12 shadow-2xl border-t-4 border-brand-blue relative -mt-16 lg:mt-0"
            >
              <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">
                The Varex Advantage
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-brand-blue leading-tight mb-8">
                Why Choose Us
              </h3>
              
              <div className="space-y-4 mb-10">
                {whyChooseUs.map((reason, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-brand-orange mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base font-medium">{reason}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/services" 
                className="inline-flex items-center gap-2 text-white bg-brand-blue px-8 py-4 font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-opacity-90 transition-all"
              >
                Explore Our Services <ArrowRight size={16} />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}