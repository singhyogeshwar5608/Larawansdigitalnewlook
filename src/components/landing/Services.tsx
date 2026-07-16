'use client';

import { motion } from 'framer-motion';
import { Globe, Smartphone, Megaphone, Palette, Search, ArrowRight } from 'lucide-react';

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
    <section className="py-20 bg-[#FAFBFF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6C4CFF] mb-3">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
            Solutions That Drive Real Results
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            We offer a comprehensive suite of digital services designed to help your business thrive in the digital landscape.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-xl border border-gray-100 p-6 transition-all duration-300 cursor-pointer group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${service.bgColor}15` }}
              >
                <service.icon size={22} style={{ color: service.color }} />
              </div>
              <h3 className="text-base font-bold text-[#1a1a2e] mb-2">{service.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed mb-4">{service.description}</p>
              <div className="flex items-center gap-1 text-sm font-semibold text-[#6C4CFF] group-hover:gap-2 transition-all duration-300">
                Learn More <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-right mt-8">
          <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-[#6C4CFF] hover:gap-2 transition-all duration-300">
            View All Services <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}