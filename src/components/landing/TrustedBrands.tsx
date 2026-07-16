'use client';

import { useEffect, useRef } from 'react';

const brands = [
  { name: 'Patanjali', color: '#2D8C3C' },
  { name: 'Havells', color: '#E31837' },
  { name: 'Apollo', color: '#003399' },
  { name: 'Titan', color: '#1a1a2e' },
  { name: 'Coca-Cola', color: '#F40009' },
  { name: 'Boat', color: '#E31837' },
  { name: 'HDFC Bank', color: '#004B87' },
  { name: 'Bisleri', color: '#0055A4' },
];

// Duplicate for seamless loop
const allBrands = [...brands, ...brands, ...brands, ...brands];

export default function TrustedBrands() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    let scrollPos = 0;
    const speed = 0.5; // px per frame

    const animate = () => {
      scrollPos += speed;
      // Reset seamlessly when first set is fully scrolled
      if (scrollPos >= el.scrollWidth / 4) {
        scrollPos = 0;
      }
      el.scrollLeft = scrollPos;
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animId);
    const handleMouseLeave = () => {
      animId = requestAnimationFrame(animate);
    };

    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-12 md:py-14 bg-white border-t border-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-[#94A3B8]">
          Trusted by Businesses Across India
        </p>
      </div>

      {/* Marquee Container */}
      <div
        ref={scrollRef}
        className="flex items-center gap-12 md:gap-16 overflow-hidden no-scrollbar cursor-default"
        style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}
      >
        {allBrands.map((brand, i) => (
          <span
            key={`${brand.name}-${i}`}
            className="text-lg md:text-xl lg:text-2xl font-extrabold whitespace-nowrap select-none shrink-0 transition-opacity duration-300 hover:opacity-100"
            style={{ color: brand.color, opacity: 0.4 }}
          >
            {brand.name}
          </span>
        ))}
      </div>
    </section>
  );
}