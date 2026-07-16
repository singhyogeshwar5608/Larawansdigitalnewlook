'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6, boxShadow: highlighted
        ? '0 20px 50px rgba(108,76,255,0.25)'
        : '0 20px 50px rgba(0,0,0,0.1)'
      }}
      className={`relative rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col ${
        highlighted
          ? 'bg-white border-2 border-[#6C4CFF] shadow-[0_8px_30px_rgba(108,76,255,0.15)]'
          : 'bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)]'
      }`}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 right-4 sm:right-6 bg-[#6C4CFF] text-white text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 rounded-full shadow-[0_4px_12px_rgba(108,76,255,0.3)]">
          {badge}
        </div>
      )}

      {/* Icon */}
      <div
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-4 sm:mb-5"
        style={{
          backgroundColor: highlighted ? '#6C4CFF' : '#F0EDFF',
        }}
      >
        <Icon
          size={24}
          className="sm:hidden"
          style={{ color: highlighted ? '#FFFFFF' : '#6C4CFF' }}
        />
        <Icon
          size={26}
          className="hidden sm:block"
          style={{ color: highlighted ? '#FFFFFF' : '#6C4CFF' }}
        />
      </div>

      {/* Title & Description */}
      <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-1.5 sm:mb-2">{title}</h3>
      <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mb-4 sm:mb-5">{description}</p>

      {/* Price */}
      <div className="mb-4 sm:mb-5">
        <p className="text-[10px] sm:text-xs text-[#9CA3AF] font-medium uppercase tracking-wider mb-1">{priceNote}</p>
        <p className="text-3xl sm:text-4xl font-extrabold text-[#6C4CFF]">
          {price}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100 mb-4 sm:mb-5" />

      {/* Features */}
      <ul className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <div className="w-5 h-5 rounded-full bg-[#6C4CFF]/10 flex items-center justify-center shrink-0 mt-0.5">
              <Check size={12} style={{ color: '#6C4CFF' }} />
            </div>
            <span className="text-xs sm:text-sm text-[#374151] leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Delivery */}
      <div className="flex items-center gap-2 mb-4 sm:mb-5">
        <div className="w-6 h-6 rounded-full bg-[#F0EDFF] flex items-center justify-center">
          <span className="text-[10px]">⏱</span>
        </div>
        <span className="text-xs sm:text-sm font-medium text-[#6B7280]">{delivery}</span>
      </div>

      {/* CTA Button */}
      <a
        href="#"
        className={`block text-center py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 ${
          highlighted
            ? 'bg-[#6C4CFF] text-white hover:bg-[#5B3DE6] hover:shadow-[0_6px_20px_rgba(108,76,255,0.4)]'
            : 'bg-[#F0EDFF] text-[#6C4CFF] hover:bg-[#6C4CFF] hover:text-white'
        }`}
      >
        Get Started
        <ArrowRight size={16} />
      </a>
    </motion.div>
  );
}