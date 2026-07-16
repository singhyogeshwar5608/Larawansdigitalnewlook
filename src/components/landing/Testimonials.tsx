'use client';

import { useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, TechStart India',
    text: 'Larawans Digital transformed our online presence completely. Our website traffic increased by 300% and leads doubled within the first quarter.',
    rating: 5,
    color: '#6C4CFF',
    initials: 'RK',
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Head, HealthPlus',
    text: 'The mobile app they built for us exceeded all expectations. User engagement is up 150% and our app store ratings improved significantly.',
    rating: 5,
    color: '#EC4899',
    initials: 'PS',
  },
  {
    name: 'Amit Patel',
    role: 'Founder, StyleBazaar',
    text: 'Outstanding branding work! They captured our brand essence perfectly. From logo to complete brand guidelines, everything was delivered on time.',
    rating: 5,
    color: '#3B82F6',
    initials: 'AP',
  },
  {
    name: 'Sneha Gupta',
    role: 'Director, EduLearn Pro',
    text: 'Their SEO strategies helped us rank on the first page for our target keywords. Organic traffic grew by 200% and cost per lead dropped by 60%.',
    rating: 5,
    color: '#10B981',
    initials: 'SG',
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild?.getBoundingClientRect().width || 300;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -cardWidth - 16 : cardWidth + 16, behavior: 'smooth' });
  };

  return (
    <section className="py-14 md:py-20 bg-[#FAFBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#6C4CFF] mb-2 sm:mb-3">Testimonials</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e]">
            Real Stories. Real Results.
          </h2>
        </div>

        {/* Mobile scroll controls */}
        <div className="flex md:hidden items-center justify-end gap-2 mb-3 px-1">
          <button onClick={() => scroll('left')} className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#64748B] hover:text-[#6C4CFF] transition-colors">
            <ChevronLeft size={16} />
          </button>
          <button onClick={() => scroll('right')} className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#64748B] hover:text-[#6C4CFF] transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Cards - horizontal scroll on mobile, grid on desktop */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none"
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 shrink-0 w-[300px] sm:w-auto md:w-auto snap-center flex flex-col"
            >
              <Quote size={20} className="sm:hidden text-[#6C4CFF]/20 mb-3" />
              <Quote size={24} className="hidden sm:block text-[#6C4CFF]/20 mb-4" />

              <div className="flex gap-0.5 mb-3 sm:mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={12} className="sm:hidden text-[#F59E0B]" fill="#F59E0B" />
                ))}
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="hidden sm:block text-[#F59E0B]" fill="#F59E0B" />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed mb-4 sm:mb-6 flex-1">{t.text}</p>

              <div className="flex items-center gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-100">
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-[#1a1a2e] truncate">{t.name}</p>
                  <p className="text-[10px] sm:text-xs text-[#94A3B8] truncate">{t.role}</p>
                </div>
              </div>

              <div className="mt-2 sm:mt-3">
                <span className="text-[9px] sm:text-[10px] text-[#94A3B8] font-medium uppercase tracking-wider">
                  Google Review
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}