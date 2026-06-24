'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { Menu, X, ChevronDown, MapPin, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 

  const isActive = (path: string) => pathname === path;

  return (
    <header className="w-full fixed top-0 z-50 shadow-md">
      
      {/* 1. TOP BAR (Imekuwa Nyeupe Nzito) */}
      <div className="bg-brand-blue border-b border-gray-200 text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-medium">
          <div className="flex space-x-6">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin size={14} className="text-white" />
              Goba, Dar es Salaam, Tanzania
            </span>
            <a href="mailto:info@varexgl.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={14} className="text-white" />
              info@varexgl.com
            </a>
          </div>
          <div className="flex space-x-6">
            <span className="flex items-center gap-1.5 font-extrabold text-white">
              <Phone size={14} className="text-white" />
              +255 650 823 550
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img 
                src="/varex-logo.jpeg" 
                alt="Varex Group Limited Logo" 
                className="h-12 sm:h-14 w-auto object-contain" 
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                href="/" 
                className={`text-sm uppercase transition-colors font-bold ${isActive('/') ? 'text-brand-orange' : 'text-brand-blue hover:text-brand-orange'}`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`text-sm uppercase transition-colors font-bold ${isActive('/about') ? 'text-brand-orange' : 'text-gray-600 hover:text-brand-orange'}`}
              >
                About Us
              </Link>
              
              {/* Dropdown 1: Services */}
              <div className="relative group py-8">
                <Link 
                  href="/services"
                  className={`flex items-center gap-1 text-sm uppercase transition-colors font-bold ${isActive('/services') ? 'text-brand-orange' : 'text-gray-600 hover:text-brand-orange'}`}
                >
                  Our Services <ChevronDown size={14} />
                </Link>
                <div className="absolute top-[80px] left-0 w-64 bg-white border-t-4 border-brand-orange shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="flex flex-col py-2">
                    <Link href="/services#electrical" className="px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange border-b border-gray-100">Electrical Engineering</Link>
                    <Link href="/services#instrumentation" className="px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange border-b border-gray-100">Instrumentation & Automation</Link>
                    <Link href="/services#fiber" className="px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange border-b border-gray-100">Fiber Optic and IT Services</Link>
                    <Link href="/services#cathodic" className="px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange border-b border-gray-100">Cathodic Protection Services </Link>
                    <Link href="/services#cathodic2" className="px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange border-b border-gray-100">Cathodic Protection Applications</Link>
                    <Link href="/services#pumps" className="px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange border-b border-gray-100">Pumps & Compressors</Link>
                    <Link href="/services#special" className="px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange">Specialized equipment</Link>
                  </div>
                </div>
              </div>

              {/* Dropdown 2: Supply Scope */}
              <div className="relative group py-8">
                <Link 
                  href="/supply"
                  className={`flex items-center gap-1 text-sm uppercase transition-colors font-bold ${isActive('/supply') ? 'text-brand-orange' : 'text-gray-600 hover:text-brand-orange'}`}
                >
                  Supply Scope <ChevronDown size={14} />
                </Link>
                <div className="absolute top-[80px] left-0 w-64 bg-white border-t-4 border-brand-orange shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="flex flex-col py-2">
                    <Link href="/supply#electrical" className="px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange border-b border-gray-100">Electrical Equipment</Link>
                    <Link href="/supply#sensors" className="px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange border-b border-gray-100">Instrumentation & Sensors</Link>
                    <Link href="/supply#conveyor" className="px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange border-b border-gray-100">Conveyor Systems</Link>
                    <Link href="/supply#communication" className="px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange border-b border-gray-100">Communication System</Link>
                    <Link href="/supply#gas" className="px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange border-b border-gray-100">Gas Systems</Link>
                    <Link href="/supply#cathodic" className="px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange border-b border-gray-100">Cathodic Protection Systems</Link>
                    <Link href="/supply#served" className="px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange border-b border-gray-100">Industries served</Link>
                    <Link href="/supply#control" className="px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange">Process Control</Link>
                  </div>
                </div>
              </div>

              <Link 
                href="/partners" 
                className="text-gray-600 font-bold text-sm uppercase hover:text-brand-orange transition-colors"
              >
                Partners
              </Link>
              
              <Link href="/contact" className="bg-brand-orange text-white px-6 py-3 text-sm font-bold uppercase hover:bg-orange-700 transition-colors">
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-brand-blue p-2">
                {isOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="lg:hidden overflow-hidden bg-white border-t border-gray-200">
              <div className="px-4 pt-2 pb-6 space-y-1">
                <Link onClick={() => setIsOpen(false)} href="/" className={`block px-3 py-3 font-semibold border-b border-gray-100 ${isActive('/') ? 'text-brand-orange' : 'text-gray-800'}`}>Home</Link>
                <Link onClick={() => setIsOpen(false)} href="/about" className={`block px-3 py-3 font-semibold border-b border-gray-100 ${isActive('/about') ? 'text-brand-orange' : 'text-gray-800'}`}>About Us</Link>
                <Link onClick={() => setIsOpen(false)} href="/services" className={`block px-3 py-3 font-semibold border-b border-gray-100 ${isActive('/services') ? 'text-brand-orange' : 'text-gray-800'}`}>Our Services</Link>
                <Link onClick={() => setIsOpen(false)} href="/supply" className={`block px-3 py-3 font-semibold border-b border-gray-100 ${isActive('/supply') ? 'text-brand-orange' : 'text-gray-800'}`}>Supply Scope</Link>
                <Link onClick={() => setIsOpen(false)} href="/contact" className="block mt-4 w-full text-center bg-brand-blue text-white px-3 py-4 font-bold uppercase">Contact Us</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}