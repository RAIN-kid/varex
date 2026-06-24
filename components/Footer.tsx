'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0A192F] text-gray-300 pt-20 pb-8 border-t-[6px] border-brand-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: About Company */}
          <div className="lg:col-span-1  bg-white p-5 round-mid">
            <div >
            <Link href="/" className="flex items-center">
              <img 
                src="/varex-logo.jpeg" 
                alt="Varex Group Limited Logo" 
                className="h-12 sm:h-14 w-auto object-contain" 
              />
            </Link>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Delivering high-quality electrical, instrumentation, and cathodic protection solutions. We enhance operational efficiency and safety worldwide.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-brand-orange transition-colors flex items-center gap-2"><ArrowRight size={12}/> Home</Link></li>
              <li><Link href="#about" className="hover:text-brand-orange transition-colors flex items-center gap-2"><ArrowRight size={12}/> About Us</Link></li>
              <li><Link href="#services" className="hover:text-brand-orange transition-colors flex items-center gap-2"><ArrowRight size={12}/> Our Services</Link></li>
              <li><Link href="#supply" className="hover:text-brand-orange transition-colors flex items-center gap-2"><ArrowRight size={12}/> Supply Scope</Link></li>
              <li><Link href="#partners" className="hover:text-brand-orange transition-colors flex items-center gap-2"><ArrowRight size={12}/> Partners</Link></li>
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Core Divisions</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">Electrical Engineering</li>
              <li className="text-gray-400">Instrumentation & SCADA</li>
              <li className="text-gray-400">Cathodic Protection (ICCP)</li>
              <li className="text-gray-400">Industrial Equipment Supply</li>
              <li className="text-gray-400">Pumps & Compressors</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-orange shrink-0 mt-0.5" />
                <span>Varex Group Limited<br/>P.O. BOX 12508<br/>Goba, Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-orange shrink-0" />
                <span>+255 650 823 550</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-orange shrink-0" />
                <a href="mailto:info@varexgl.com" className="hover:text-white transition-colors">info@varexgl.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Varex Group Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}