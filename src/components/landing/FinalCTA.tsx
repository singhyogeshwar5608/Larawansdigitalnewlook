'use client';

import { ArrowRight, MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-14 sm:py-16 md:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #070B2B 0%, #101B5A 50%, #1A1443 100%)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#6C4CFF]/10 rounded-full blur-[120px] sm:blur-[150px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-5 leading-tight px-2">
          Let&apos;s Build Something
          <br className="hidden sm:block" />
          {' '}Amazing Together.
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white/50 max-w-xl mx-auto mb-8 sm:mb-10 px-2">
          Get a free strategy call and let&apos;s take your business to the next level.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white bg-[#6C4CFF] hover:bg-[#5B3DE6] px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg transition-all duration-200 hover:shadow-[0_6px_20px_rgba(108,76,255,0.4)]"
          >
            Get Free Consultation
            <ArrowRight size={16} className="sm:hidden" />
            <ArrowRight size={18} className="hidden sm:block" />
          </a>
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-[#6C4CFF] bg-white hover:bg-gray-50 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg transition-all duration-200"
          >
            <MessageCircle size={16} className="sm:hidden" />
            <MessageCircle size={18} className="hidden sm:block" />
            Chat On WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}