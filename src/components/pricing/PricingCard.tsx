'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, X, Phone, MessageCircle, Clock } from 'lucide-react';
import Link from 'next/link';

interface PricingCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  price: string;
  priceNote?: string;
  features: string[];
  delivery: string;
  highlighted?: boolean;
  badge?: string;
}

export default function PricingCard({
  icon: Icon,
  title,
  description,
  price,
  priceNote = 'Starting from',
  features,
  delivery,
  highlighted = false,
  badge,
}: PricingCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const visibleFeatures = features.slice(0, 4);
  const extraCount = features.length - 4;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -6, boxShadow: highlighted
          ? '0 20px 50px rgba(108,76,255,0.25)'
          : '0 20px 50px rgba(0,0,0,0.1)'
        }}
        className={`relative rounded-2xl p-5 transition-all duration-300 flex flex-col cursor-pointer ${
          highlighted
            ? 'bg-white border-2 border-[#6C4CFF] shadow-[0_8px_30px_rgba(108,76,255,0.15)]'
            : 'bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)]'
        }`}
        onClick={() => setDialogOpen(true)}
      >
        {/* Badge */}
        {badge && (
          <div className="absolute -top-3 right-4 bg-[#6C4CFF] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-[0_4px_12px_rgba(108,76,255,0.3)]">
            {badge}
          </div>
        )}

        {/* Top: Icon + Price */}
        <div className="flex items-start justify-between mb-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: highlighted ? '#6C4CFF' : '#F0EDFF' }}
          >
            <Icon size={22} style={{ color: highlighted ? '#FFFFFF' : '#6C4CFF' }} />
          </div>
          <div className="text-right">
            <p className="text-[9px] text-[#9CA3AF] font-medium uppercase tracking-wider">{priceNote}</p>
            <p className="text-xl sm:text-2xl font-extrabold text-[#6C4CFF] leading-tight">{price}</p>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-[#111827] mb-1 leading-snug">{title}</h3>

        {/* Features */}
        <ul className="space-y-1.5 my-3 flex-1">
          {visibleFeatures.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#6C4CFF]/10 flex items-center justify-center shrink-0">
                <Check size={10} style={{ color: '#6C4CFF' }} />
              </div>
              <span className="text-[11px] sm:text-xs text-[#374151] leading-tight">{feature}</span>
            </li>
          ))}
          {extraCount > 0 && (
            <li className="text-[11px] font-semibold text-[#6C4CFF] pl-6">+{extraCount} more features</li>
          )}
        </ul>

        {/* Delivery + CTA row */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-1.5 min-w-0">
            <Clock size={12} className="text-[#6C4CFF] shrink-0" />
            <span className="text-[10px] sm:text-xs text-[#6B7280] truncate">{delivery}</span>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); setDialogOpen(true); }}
            className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
              highlighted
                ? 'bg-[#6C4CFF] text-white hover:bg-[#5B3DE6]'
                : 'bg-[#F0EDFF] text-[#6C4CFF] hover:bg-[#6C4CFF] hover:text-white'
            }`}
          >
            Get Started <ArrowRight size={12} />
          </button>
        </div>
      </motion.div>

      {/* Package Detail Dialog */}
      <AnimatePresence>
        {dialogOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setDialogOpen(false)}
            />

            {/* Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            >
              <div
                className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="relative p-6 sm:p-8 pb-0">
                  <button
                    onClick={() => setDialogOpen(false)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  >
                    <X size={18} className="text-gray-500" />
                  </button>

                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: highlighted ? '#6C4CFF' : '#F0EDFF' }}
                    >
                      <Icon size={26} style={{ color: highlighted ? '#FFFFFF' : '#6C4CFF' }} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#111827]">{title}</h3>
                      {badge && (
                        <span className="inline-block mt-1 text-[10px] sm:text-xs font-bold text-[#6C4CFF] bg-[#F0EDFF] px-2.5 py-0.5 rounded-full">
                          {badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-[#6B7280] leading-relaxed">{description}</p>
                </div>

                {/* Price & Delivery */}
                <div className="px-6 sm:px-8 py-4">
                  <div className="flex items-end gap-3 mb-2">
                    <p className="text-[10px] text-[#9CA3AF] font-medium uppercase tracking-wider">{priceNote}</p>
                  </div>
                  <p className="text-4xl font-extrabold text-[#6C4CFF] mb-1">{price}</p>
                  <p className="text-sm text-[#6B7280]">{delivery}</p>
                </div>

                {/* Features */}
                <div className="px-6 sm:px-8 pb-4">
                  <p className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-3">What&apos;s Included</p>
                  <ul className="space-y-2.5">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-[#6C4CFF]/10 flex items-center justify-center shrink-0">
                          <Check size={12} style={{ color: '#6C4CFF' }} />
                        </div>
                        <span className="text-sm text-[#374151]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 space-y-3">
                  <Link
                    href={`/contact?package=${encodeURIComponent(title)}`}
                    onClick={() => setDialogOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-[#6C4CFF] text-white hover:bg-[#5B3DE6] hover:shadow-[0_6px_20px_rgba(108,76,255,0.4)] transition-all duration-300"
                  >
                    Book This Package
                    <ArrowRight size={16} />
                  </Link>

                  <a
                    href={`https://wa.me/919876543210?text=Hi, I'm interested in the ${encodeURIComponent(title)} package (${price}). Can you share more details?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-[#25D366] text-white hover:bg-[#1da851] hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] transition-all duration-300"
                  >
                    <MessageCircle size={16} />
                    Chat on WhatsApp
                  </a>

                  <button
                    onClick={() => setDialogOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm text-[#6B7280] hover:text-[#111827] transition-colors"
                  >
                    <Phone size={14} />
                    Call Us: +91 98765 43210
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}