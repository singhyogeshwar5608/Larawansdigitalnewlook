'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const categories = ['All', 'Websites', 'Mobile Apps', 'Branding', 'SEO', 'Marketing'];

const portfolioItems = [
  {
    title: 'E-Commerce Platform',
    category: 'Websites',
    color: '#6C4CFF',
    gradient: 'from-[#6C4CFF] to-[#8B5CFF]',
  },
  {
    title: 'Healthcare App',
    category: 'Mobile Apps',
    color: '#EC4899',
    gradient: 'from-[#EC4899] to-[#F472B6]',
  },
  {
    title: 'SaaS Dashboard',
    category: 'Websites',
    color: '#3B82F6',
    gradient: 'from-[#3B82F6] to-[#60A5FA]',
  },
  {
    title: 'Brand Identity',
    category: 'Branding',
    color: '#F59E0B',
    gradient: 'from-[#F59E0B] to-[#FBBF24]',
  },
  {
    title: 'Real Estate Portal',
    category: 'Websites',
    color: '#10B981',
    gradient: 'from-[#10B981] to-[#34D399]',
  },
  {
    title: 'SEO Campaign',
    category: 'SEO',
    color: '#8B5CF6',
    gradient: 'from-[#8B5CF6] to-[#A78BFA]',
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6C4CFF] mb-3">Our Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">
              Work That Speaks For Itself
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-[#6C4CFF] hover:gap-2 transition-all duration-300 mt-4 md:mt-0">
            View All Projects <ArrowRight size={14} />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                {/* Placeholder pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white/40 rounded-lg" />
                  <div className="absolute bottom-6 right-6 w-24 h-3 bg-white/30 rounded" />
                  <div className="absolute bottom-12 right-6 w-20 h-3 bg-white/20 rounded" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white/20 rounded-full" />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <ExternalLink size={18} className="text-[#1a1a2e]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <h3 className="text-base font-bold text-[#1a1a2e] group-hover:text-[#6C4CFF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#94A3B8]">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}