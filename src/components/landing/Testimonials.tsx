'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, TechStart India',
    text: 'Larawans Digital transformed our online presence completely. Our website traffic increased by 300% and leads doubled within the first quarter. Their team is incredibly professional and responsive.',
    rating: 5,
    color: '#6C4CFF',
    initials: 'RK',
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Head, HealthPlus',
    text: 'The mobile app they built for us exceeded all expectations. User engagement is up 150% and our app store ratings improved significantly. Highly recommend their services.',
    rating: 5,
    color: '#EC4899',
    initials: 'PS',
  },
  {
    name: 'Amit Patel',
    role: 'Founder, StyleBazaar',
    text: 'Outstanding branding work! They captured our brand essence perfectly. From logo to complete brand guidelines, everything was delivered on time with exceptional quality.',
    rating: 5,
    color: '#3B82F6',
    initials: 'AP',
  },
  {
    name: 'Sneha Gupta',
    role: 'Director, EduLearn Pro',
    text: 'Their SEO strategies helped us rank on the first page for our target keywords. Organic traffic grew by 200% and our cost per lead dropped by 60%. Amazing results!',
    rating: 5,
    color: '#10B981',
    initials: 'SG',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#FAFBFF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6C4CFF] mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">
            Real Stories. Real Results.
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <Quote size={24} className="text-[#6C4CFF]/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#F59E0B]" fill="#F59E0B" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm text-[#4A5568] leading-relaxed mb-6">{t.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1a1a2e]">{t.name}</p>
                  <p className="text-xs text-[#94A3B8]">{t.role}</p>
                </div>
              </div>

              {/* Google Logo */}
              <div className="mt-3">
                <span className="text-[10px] text-[#94A3B8] font-medium uppercase tracking-wider">
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