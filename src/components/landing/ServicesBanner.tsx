'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesBanner() {
  return (
    <section className="relative overflow-hidden py-8 md:py-12">
      {/* Main Banner Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden" style={{ minHeight: '320px' }}>
          {/* Background Image */}
          <Image
            src="/services-banner.png"
            alt="Professional digital marketing expert at Larawans Digital"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(108,76,255,0.88) 0%, rgba(16,27,90,0.85) 50%, rgba(7,11,43,0.80) 100%)',
            }}
          />

          {/* Subtle Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 1px, transparent 1px), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px, 60px 60px',
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-12 md:py-16" style={{ minHeight: '320px' }}>
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 md:mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white/90 border border-white/20"
                style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)' }}>
                <Sparkles className="w-4 h-4 text-yellow-300" />
                Empowering Brands Digitally
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl"
            >
              Transform Your Vision Into{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #c4b5fd, #f9a8d4, #fbbf24)' }}>
                Digital Reality
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-xl leading-relaxed"
            >
              Expert-led strategies crafted to elevate your brand, drive real results, and scale your business in the digital landscape.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 md:mt-8"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white text-[#6C4CFF] font-semibold text-sm md:text-base rounded-full hover:shadow-lg hover:shadow-white/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </motion.div>

            {/* Floating Stat Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4"
            >
              <div className="flex items-center gap-3 px-4 py-3 md:px-5 md:py-4 rounded-2xl border border-white/15"
                style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(251,191,36,0.2)' }}>
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-yellow-300" />
                </div>
                <div>
                  <p className="text-lg md:text-2xl font-bold text-white">200+</p>
                  <p className="text-xs md:text-sm text-white/60">Projects Delivered</p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 md:px-5 md:py-4 rounded-2xl border border-white/15"
                style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(139,92,246,0.2)' }}>
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-purple-300" />
                </div>
                <div>
                  <p className="text-lg md:text-2xl font-bold text-white">150+</p>
                  <p className="text-xs md:text-sm text-white/60">Happy Clients</p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-3 px-4 py-3 md:px-5 md:py-4 rounded-2xl border border-white/15"
                style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(59,130,246,0.2)' }}>
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-blue-300" />
                </div>
                <div>
                  <p className="text-lg md:text-2xl font-bold text-white">5+</p>
                  <p className="text-xs md:text-sm text-white/60">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}