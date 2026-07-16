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
    <section className="py-16" style={{ background: 'linear-gradient(135deg, #1A202C 0%, #2D3748 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon size={22} className="text-[#6C4CFF]" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}