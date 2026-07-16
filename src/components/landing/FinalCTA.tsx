'use client';

import { ArrowRight, MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #070B2B 0%, #101B5A 50%, #1A1443 100%)' }}>
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6C4CFF]/10 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
          Let&apos;s Build Something
          <br />
          Amazing Together.
        </h2>
        <p className="text-white/50 max-w-xl mx-auto mb-10 text-base md:text-lg">
          Get a free strategy call and let&apos;s take your business to the next level.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-base font-semibold text-white bg-[#6C4CFF] hover:bg-[#5B3DE6] px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-[0_6px_20px_rgba(108,76,255,0.4)]"
          >
            Get Free Consultation
            <ArrowRight size={18} />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-base font-semibold text-[#6C4CFF] bg-white hover:bg-gray-50 px-7 py-3.5 rounded-lg transition-all duration-200"
          >
            <MessageCircle size={18} />
            Chat On WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}