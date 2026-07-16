'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-14 sm:py-16 md:py-20" style={{ background: 'linear-gradient(135deg, #070B2B 0%, #101B5A 50%, #1A1443 100%)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6C4CFF]/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-5 leading-tight px-2">
            Not Sure Which Package is
            <br className="hidden sm:block" />
            {' '}Right for You?
          </h2>
          <p className="text-sm sm:text-base text-white/50 max-w-lg mx-auto mb-8 sm:mb-10 px-2">
            Get a free consultation and we&apos;ll recommend the best solution for your business needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white bg-[#6C4CFF] hover:bg-[#5B3DE6] px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl transition-all duration-300 hover:shadow-[0_6px_20px_rgba(108,76,255,0.4)]"
            >
              Get Free Consultation
              <ArrowRight size={16} />
            </a>
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-[#6C4CFF] bg-white hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl transition-all duration-300"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}