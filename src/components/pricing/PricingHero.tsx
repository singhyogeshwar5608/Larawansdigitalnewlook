'use client';

import { motion } from 'framer-motion';
import { Monitor, Search, Zap, Shield, Smartphone, Globe } from 'lucide-react';

const badges = [
  { icon: Smartphone, text: '100% Responsive' },
  { icon: Search, text: 'SEO Optimized' },
  { icon: Zap, text: 'Fast Loading' },
  { icon: Shield, text: 'Secure & Reliable' },
  { icon: Globe, text: 'Custom Domain' },
];

export default function PricingHero() {
  return (
    <section className="pt-[70px] relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F0EDFF 0%, #F7FAFC 50%, #FFFFFF 100%)' }}>
      {/* Decorative */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-[#6C4CFF]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-20 w-60 h-60 bg-[#8B5CFF]/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#6C4CFF] mb-3 sm:mb-4">
            Transparent Pricing
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] mb-4 sm:mb-5 leading-tight px-2">
            Website Pricing & Packages
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#6B7280] max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
            Choose the perfect website package for your business. All plans include responsive design, SEO optimization, and dedicated support.
          </p>
        </motion.div>

        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {badges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white rounded-full pl-1.5 pr-4 py-1.5 sm:pl-2 sm:pr-5 sm:py-2 shadow-sm border border-gray-100"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#6C4CFF]/10 flex items-center justify-center">
                <badge.icon size={14} className="sm:hidden text-[#6C4CFF]" />
                <badge.icon size={16} className="hidden sm:block text-[#6C4CFF]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#374151]">{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}