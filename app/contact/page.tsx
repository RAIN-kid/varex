'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Tunazirudisha hizi state kwa ajili ya animation yetu nzuri
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Mfumo mpya wa kutuma form kimya kimya (Background Fetch)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/meebaonr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Ikituma kikamilifu, onyesha Tiki ya kijani
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' }); // Futa maneno kwenye form
        
        // Rudisha form mpya baada ya sekunde 5
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      alert("Oops! There was a network error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-[80px]">
      
      {/* =========================================
          1. COMPACT HERO BANNER
          ========================================= */}
      <section className="relative h-[30vh] min-h-[250px] bg-brand-blue flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop" 
            alt="Contact Varex Group" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-blue/90 mix-blend-multiply" />
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
            <span className="text-white">Contact Us</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            Get in touch.
          </motion.h1>
        </div>
      </section>

      {/* =========================================
          2. CONTACT INTERFACE (Split Layout)
          ========================================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* KUSHOTO: Taarifa za Mawasiliano */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col space-y-6"
            >
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-brand-blue mb-4">Let's discuss your next project.</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Whether you need technical consultation, equipment supply, or comprehensive engineering services, our team is ready to assist you.
                </p>
              </div>

              {/* Kadi 1: Ofisi */}
              <div className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-50 text-brand-orange flex items-center justify-center rounded-xl shrink-0">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue text-sm uppercase tracking-wider mb-2">Head Office</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Varex Group Limited<br />
                    P.O. BOX 12508<br />
                    Goba, Dar es Salaam, Tanzania
                  </p>
                </div>
              </div>

              {/* Kadi 2: Simu & Email */}
              <div className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-50 text-brand-orange flex items-center justify-center rounded-xl shrink-0">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue text-sm uppercase tracking-wider mb-2">Contact Details</h4>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-gray-600 text-sm hover:text-brand-orange transition-colors cursor-pointer">
                      +255 650 823 550
                    </p>
                    <a href="mailto:info@varexgl.com" className="flex items-center gap-2 text-gray-600 text-sm hover:text-brand-orange transition-colors">
                      <Mail size={14} className="text-gray-400" /> info@varexgl.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Kadi 3: Muda wa Kazi */}
              <div className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-50 text-brand-orange flex items-center justify-center rounded-xl shrink-0">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue text-sm uppercase tracking-wider mb-2">Working Hours</h4>
                  <p className="text-gray-600 text-sm">
                    Monday - Friday: 08:00 AM - 05:00 PM<br />
                    Saturday & Sunday: Closed
                  </p>
                </div>
              </div>
            </motion.div>

            {/* KULIA: Fomu Inayofanya Kazi Bila Ku-Redirect */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden"
            >
              <h3 className="text-2xl font-bold text-brand-blue mb-8">Send us a message</h3>
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  /* Success Message Animation */
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center h-[400px] text-center"
                  >
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-brand-blue mb-2">Message sent successfully!</h4>
                    <p className="text-gray-500">Thank you for contacting Varex Group. Our team will get back to you shortly.</p>
                  </motion.div>
                ) : (
                  /* Form - Inatumia onSubmit yenye Fetch API */
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name Input */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all text-sm text-gray-800"
                        />
                      </div>
                      {/* Email Input */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email address</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all text-sm text-gray-800"
                        />
                      </div>
                    </div>

                    {/* Subject Input */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all text-sm text-gray-800"
                      />
                    </div>

                    {/* Message Textarea */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-gray-700">Your message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please provide details about your inquiry..."
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all text-sm text-gray-800 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-brand-blue text-white px-8 py-4 font-bold capitalize text-sm hover:bg-opacity-90 transition-colors rounded-xl disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>Send message <Send size={16} /></>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. GOOGLE MAP SECTION
          ========================================= */}
      <section className="w-full h-[400px] md:h-[500px] bg-gray-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63385.74815152285!2d39.1558231!3d-6.751325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4e339bba6db3%3A0xc6ebfb937eb7c8a6!2sGoba%2C%20Dar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1716301234567!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-8 py-4 rounded-xl shadow-2xl border border-gray-100 flex items-center gap-3 w-[90%] md:w-auto justify-center">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="font-bold text-brand-blue text-sm">We operate globally, engineered locally.</span>
        </div>
      </section>

    </main>
  );
}