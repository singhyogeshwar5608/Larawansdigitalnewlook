'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Heart, Clock, Headphones } from 'lucide-react';

const stats = [
  { icon: Briefcase, end: 120, suffix: '+', label: 'Projects Delivered', color: '#6C4CFF' },
  { icon: Heart, end: 98, suffix: '%', label: 'Client Satisfaction', color: '#EC4899' },
  { icon: Clock, end: 7, suffix: ' Days', label: 'Average Delivery', color: '#F59E0B' },
  { icon: Headphones, end: 24, suffix: '/7', prefix: '', label: 'Support Available', color: '#3B82F6' },
];

function Counter({ end, suffix, duration = 2 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    let raf: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsBanner() {
  return (
    <section className="relative py-14 sm:py-16 md:py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #070B2B 0%, #101B5A 50%, #1A1443 100%)' }}>
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#6C4CFF]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#8B5CFF]/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Desktop: 4 columns inline */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div
                className="w-14 h-14 mx-auto mb-3 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <stat.icon size={24} style={{ color: stat.color }} />
              </div>
              <p className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-1 tracking-tight">
                <Counter end={stat.end} suffix={stat.suffix} />
              </p>
              <p className="text-xs sm:text-sm text-white/50 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: 2x2 grid with cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:hidden">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-5 text-center border border-white/10"
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <stat.icon size={20} className="sm:hidden" style={{ color: stat.color }} />
                <stat.icon size={22} className="hidden sm:block" style={{ color: stat.color }} />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white mb-0.5 tracking-tight">
                <Counter end={stat.end} suffix={stat.suffix} />
              </p>
              <p className="text-[10px] sm:text-xs text-white/50 font-medium leading-tight">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}