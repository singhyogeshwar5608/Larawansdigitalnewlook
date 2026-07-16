'use client';

import { motion } from 'framer-motion';
import { Globe, Smartphone, Megaphone, Palette, Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom, responsive websites built to convert visitors into customers with modern technologies.',
    color: '#6C4CFF',
    bgColor: '#6C4CFF',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps that deliver seamless user experiences.',
    color: '#EC4899',
    bgColor: '#EC4899',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies including PPC, social media, and content marketing.',
    color: '#3B82F6',
    bgColor: '#3B82F6',
  },
  {
    icon: Palette,
    title: 'Brand Identity & Design',
    description: 'Complete branding solutions including logo, brand guidelines, and visual identity systems.',
    color: '#F59E0B',
    bgColor: '#F59E0B',
  },
  {
    icon: Search,
    title: 'SEO & Digital Growth',
    description: 'Comprehensive SEO strategies to boost your organic visibility and drive qualified traffic.',
    color: '#10B981',
    bgColor: '#10B981',
  },
];

export default function Services() {
  return (
    <section className="py-14 md:py-20 bg-[#FAFBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#6C4CFF] mb-2 sm:mb-3">Our Services</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-3 sm:mb-4">
            Solutions That Drive Real Results
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto px-2">
            We offer a comprehensive suite of digital services designed to help your business thrive in the digital landscape.
          </p>
        </div>

        {/* Service Cards - 2 col mobile, 3 col tablet, 5 col desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-xl border border-gray-100 p-4 sm:p-5 md:p-6 transition-all duration-300 cursor-pointer group flex flex-col"
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110 shrink-0"
                style={{ backgroundColor: `${service.bgColor}15` }}
              >
                <service.icon size={20} className="sm:hidden" style={{ color: service.color }} />
                <service.icon size={22} className="hidden sm:block" style={{ color: service.color }} />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#1a1a2e] mb-1.5 sm:mb-2 leading-tight">{service.title}</h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-3 sm:mb-4 flex-1 hidden sm:block">{service.description}</p>
              <Link href="/services" className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#6C4CFF] group-hover:gap-2 transition-all duration-300 mt-auto">
                Learn More <ArrowRight size={12} className="sm:hidden" />
                <ArrowRight size={14} className="hidden sm:block" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-right mt-6 sm:mt-8 px-1">
          <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-[#6C4CFF] hover:gap-2 transition-all duration-300">
            View All Services <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}