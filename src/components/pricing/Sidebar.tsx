'use client';

import { motion } from 'framer-motion';
import {
  LayoutGrid,
  ShoppingCart,
  Briefcase,
  GraduationCap,
  Hospital,
  Building2,
  Code2,
  Layers,
} from 'lucide-react';

export interface Category {
  id: string;
  label: string;
  icon: React.ElementType;
}

export const categories: Category[] = [
  { id: 'all', label: 'All Packages', icon: Layers },
  { id: 'business', label: 'Business Websites', icon: LayoutGrid },
  { id: 'ecommerce', label: 'E-Commerce Stores', icon: ShoppingCart },
  { id: 'portfolio', label: 'Portfolio Websites', icon: Briefcase },
  { id: 'school', label: 'School & College', icon: GraduationCap },
  { id: 'hospital', label: 'Hospital & Clinic', icon: Hospital },
  { id: 'realestate', label: 'Real Estate Websites', icon: Building2 },
  { id: 'custom', label: 'Custom Web Applications', icon: Code2 },
];

interface SidebarProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export default function Sidebar({ activeCategory, onCategoryChange }: SidebarProps) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-[260px] xl:w-[280px] shrink-0">
        <div className="sticky top-[90px] bg-white rounded-2xl border border-gray-200 shadow-sm p-3">
          <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#9CA3AF] px-3 pt-2 pb-3">
            Categories
          </p>
          <nav className="space-y-0.5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onCategoryChange(cat.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#6C4CFF] text-white shadow-[0_4px_12px_rgba(108,76,255,0.3)]'
                      : 'text-[#374151] hover:bg-[#F9FAFB]'
                  }`}
                >
                  <cat.icon size={18} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile Category Chips */}
      <div className="lg:hidden">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#6C4CFF] text-white shadow-[0_4px_12px_rgba(108,76,255,0.3)]'
                    : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'
                }`}
              >
                <cat.icon size={14} />
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}