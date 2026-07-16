'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const categories = ['All', 'Websites', 'Mobile Apps', 'Branding', 'SEO', 'Marketing'];

const portfolioItems = [
  { title: 'E-Commerce Platform', category: 'Websites', color: '#6C4CFF', gradient: 'from-[#6C4CFF] to-[#8B5CFF]' },
  { title: 'Healthcare App', category: 'Mobile Apps', color: '#EC4899', gradient: 'from-[#EC4899] to-[#F472B6]' },
  { title: 'SaaS Dashboard', category: 'Websites', color: '#3B82F6', gradient: 'from-[#3B82F6] to-[#60A5FA]' },
  { title: 'Brand Identity', category: 'Branding', color: '#F59E0B', gradient: 'from-[#F59E0B] to-[#FBBF24]' },
  { title: 'Real Estate Portal', category: 'Websites', color: '#10B981', gradient: 'from-[#10B981] to-[#34D399]' },
  { title: 'SEO Campaign', category: 'SEO', color: '#8B5CF6', gradient: 'from-[#8B5CF6] to-[#A78BFA]' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 md:mb-10">
          <div>
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#6C4CFF] mb-2 sm:mb-3">Our Portfolio</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e]">
              Work That Speaks For Itself
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-[#6C4CFF] hover:gap-2 transition-all duration-300 mt-3 sm:mt-0">
            View All Projects <ArrowRight size={14} />
          </a>
        </div>

        {/* Filter Tabs - horizontal scroll on mobile */}
        <div className="flex gap-2 mb-8 md:mb-10 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`shrink-0 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-[#6C4CFF] text-white shadow-[0_4px_12px_rgba(108,76,255,0.3)]'
                  : 'bg-gray-100 text-[#64748B] hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${item.gradient} aspect-[4/3] flex items-center justify-center transition-shadow duration-300 group-hover:shadow-xl`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-12 h-12 sm:w-16 sm:h-16 border-2 border-white/40 rounded-lg" />
                    <div className="absolute bottom-4 right-4 w-16 sm:w-24 h-2.5 sm:h-3 bg-white/30 rounded" />
                    <div className="absolute bottom-10 right-4 w-12 sm:w-20 h-2.5 sm:h-3 bg-white/20 rounded" />
                    <div className="absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 border-2 border-white/30 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 border-2 border-white/20 rounded-full" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center">
                        <ExternalLink size={16} className="sm:hidden text-[#1a1a2e]" />
                        <ExternalLink size={18} className="hidden sm:block text-[#1a1a2e]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2.5 sm:mt-3">
                  <h3 className="text-sm sm:text-base font-bold text-[#1a1a2e] group-hover:text-[#6C4CFF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8]">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}