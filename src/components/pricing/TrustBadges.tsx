'use client';

import { motion } from 'framer-motion';
import { BadgeDollarSign, ShieldCheck, Headphones, RefreshCcw } from 'lucide-react';

const trustBadges = [
  { icon: BadgeDollarSign, title: 'No Hidden Charges', desc: 'What you see is what you pay' },
  { icon: ShieldCheck, title: 'Money Back Guarantee', desc: '100% refund if not satisfied' },
  { icon: Headphones, title: '24/7 Support', desc: 'Round the clock assistance' },
  { icon: RefreshCcw, title: 'Free Revisions', desc: 'Unlimited revisions included' },
];

export default function TrustBadges() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {trustBadges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F0EDFF] flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <badge.icon size={22} className="sm:hidden text-[#6C4CFF]" />
                <badge.icon size={24} className="hidden sm:block text-[#6C4CFF]" />
              </div>
              <p className="text-sm sm:text-base font-bold text-[#111827] mb-1">{badge.title}</p>
              <p className="text-xs sm:text-sm text-[#6B7280]">{badge.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}