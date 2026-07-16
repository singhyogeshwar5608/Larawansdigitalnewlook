'use client';

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

export default function TrustedBrands() {
  return (
    <section className="py-14 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-[#94A3B8] mb-10">
          Trusted by Businesses Across India
        </p>
        <div className="flex items-center justify-center gap-8 md:gap-14 lg:gap-16 flex-wrap">
          {brands.map((brand) => (
            <span
              key={brand.name}
              className="text-base md:text-lg font-extrabold whitespace-nowrap select-none transition-all duration-300 hover:opacity-100"
              style={{ color: brand.color, opacity: 0.45 }}
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}