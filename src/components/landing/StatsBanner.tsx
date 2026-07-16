'use client';

import { Briefcase, Heart, Clock, Headphones } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '120+', label: 'Projects Delivered' },
  { icon: Heart, value: '98%', label: 'Client Satisfaction' },
  { icon: Clock, value: '7 Days', label: 'Average Delivery' },
  { icon: Headphones, value: '24/7', label: 'Support Available' },
];

export default function StatsBanner() {
  return (
    <section className="py-12 md:py-16" style={{ background: 'linear-gradient(135deg, #1A202C 0%, #2D3748 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-6 md:gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <stat.icon size={18} className="sm:hidden text-[#6C4CFF]" />
                <stat.icon size={22} className="hidden sm:block text-[#6C4CFF]" />
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-0.5 sm:mb-1">{stat.value}</p>
              <p className="text-xs sm:text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}