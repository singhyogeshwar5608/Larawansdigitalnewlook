'use client';

import { motion } from 'framer-motion';
import { Globe, Smartphone, Megaphone, Palette, Search, ArrowRight, CheckCircle, Star, Zap } from 'lucide-react';
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
    <>
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

      {/* Professional Banner - Female Touch */}
      <section className="relative overflow-hidden py-10 sm:py-14 md:py-20" style={{ background: 'linear-gradient(135deg, #6C4CFF 0%, #8B5CFF 30%, #A78BFA 60%, #C4B5FD 100%)' }}>
        {/* Decorative Shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
        <div className="absolute top-1/2 right-[10%] sm:right-[15%] -translate-y-1/2 w-40 h-40 sm:w-56 sm:h-56 bg-white/[0.08] rounded-full blur-sm" />
        <div className="absolute top-[15%] right-[25%] sm:right-[30%] w-20 h-20 sm:w-28 sm:h-28 border-2 border-white/10 rounded-full" />
        <div className="absolute bottom-[20%] left-[5%] sm:left-[8%] w-16 h-16 sm:w-24 sm:h-24 border border-white/10 rounded-2xl rotate-12" />
        <div className="absolute top-[30%] left-[15%] w-3 h-3 sm:w-4 sm:h-4 bg-white/20 rounded-full" />
        <div className="absolute bottom-[35%] right-[20%] w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/15 rounded-full" />
        <div className="absolute top-[20%] left-[40%] w-2 h-2 bg-white/10 rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-white order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 sm:px-5 sm:py-2 mb-4 sm:mb-6">
                <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase">Trusted by 85+ Businesses</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4 sm:mb-5">
                Turning Your Vision Into{' '}
                <span className="relative inline-block">
                  Digital Reality
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M1 5.5C47 2 153 2 199 5.5" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
              <p className="text-sm sm:text-base text-white/75 leading-relaxed mb-6 sm:mb-8 max-w-lg">
                From stunning websites to powerful mobile apps, our team of creative experts crafts digital experiences that captivate your audience and drive real business growth. Every pixel, every interaction — designed with purpose.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-[#6C4CFF] bg-white hover:bg-gray-50 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-200 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
                  Start Your Project <ArrowRight size={16} />
                </Link>
                <Link href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white bg-white/15 hover:bg-white/25 backdrop-blur-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-white/20 transition-all duration-200">
                  See Our Work <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right - Female Professional Illustration */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Glow circles */}
                <div className="absolute inset-4 sm:inset-6 bg-white/10 rounded-full" />
                <div className="absolute inset-0 bg-white/5 rounded-full" />

                {/* Main circle */}
                <div className="absolute inset-2 sm:inset-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30">
                      <svg viewBox="0 0 80 80" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" fill="none">
                        <circle cx="40" cy="24" r="12" fill="white" fillOpacity="0.9" />
                        <path d="M20 72c0-11 9-20 20-20s20 9 20 20" fill="white" fillOpacity="0.9" />
                        <rect x="26" y="52" width="28" height="18" rx="2" fill="white" fillOpacity="0.4" stroke="white" strokeWidth="1" />
                        <rect x="22" y="68" width="36" height="3" rx="1.5" fill="white" fillOpacity="0.4" />
                        <rect x="29" y="55" width="22" height="12" rx="1" fill="#6C4CFF" fillOpacity="0.5" />
                        <path d="M28 18c0-7 5-12 12-12s12 5 12 12c0 2-0.5 4-1.5 5.5" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
                      </svg>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base font-bold text-white mb-0.5 md:mb-1">Creative Excellence</p>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-white/60">Designed & Developed with Passion</p>
                  </div>
                </div>

                {/* Floating stat cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -left-1 sm:-left-4 md:-left-6 top-6 sm:top-10 md:top-12 bg-white rounded-xl shadow-xl px-2.5 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg bg-[#10B981]/10 flex items-center justify-center">
                      <CheckCircle size={14} className="sm:hidden md:inline text-[#10B981]" />
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-[#1a1a2e]">120+ Projects</p>
                      <p className="text-[8px] sm:text-[9px] md:text-[10px] text-[#94A3B8]">Delivered</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -right-1 sm:-right-3 md:-right-4 bottom-10 sm:bottom-14 md:bottom-16 bg-white rounded-xl shadow-xl px-2.5 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg bg-[#6C4CFF]/10 flex items-center justify-center">
                      <Star size={14} className="sm:hidden md:inline text-[#6C4CFF]" />
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-[#1a1a2e]">4.9 Rating</p>
                      <p className="text-[8px] sm:text-[9px] md:text-[10px] text-[#94A3B8]">Client Reviews</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute left-3 sm:left-6 md:left-8 -bottom-1 sm:-bottom-3 md:-bottom-4 bg-white rounded-xl shadow-xl px-2.5 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg bg-[#EC4899]/10 flex items-center justify-center">
                      <Zap size={14} className="sm:hidden md:inline text-[#EC4899]" />
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-[#1a1a2e]">7 Days</p>
                      <p className="text-[8px] sm:text-[9px] md:text-[10px] text-[#94A3B8]">Avg Delivery</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}