'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, FolderCheck, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const avatarColors = ['#6C4CFF', '#EC4899', '#F59E0B', '#10B981', '#3B82F6'];

export default function Hero() {
  return (
    <section className="relative pt-[70px] overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0F0FF 0%, #F7FAFC 60%, #FFFFFF 100%)' }}>
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#6C4CFF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#8B5CFF]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.15] text-[#1a1a2e] mb-4 sm:mb-6"
            >
              We Design Digital{' '}
              <br className="hidden sm:block" />
              Experiences That{' '}
              <span className="text-[#6C4CFF]">Convert.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed mb-6 sm:mb-8 max-w-lg"
            >
              We help startups, businesses and brands grow online with stunning websites, mobile apps and result-driven marketing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white bg-[#6C4CFF] hover:bg-[#5B3DE6] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-200 hover:shadow-[0_6px_20px_rgba(108,76,255,0.4)]"
              >
                Book Free Strategy Call
                <ArrowRight size={16} className="sm:hidden" />
                <ArrowRight size={18} className="hidden sm:block" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-[#6C4CFF] bg-white hover:bg-[#6C4CFF]/5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-[#6C4CFF]/20 transition-all duration-200"
              >
                View Our Work
                <ArrowRight size={16} className="sm:hidden" />
                <ArrowRight size={18} className="hidden sm:block" />
              </Link>
            </motion.div>

            {/* Avatar Review Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2 sm:-space-x-3">
                {avatarColors.map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-[2.5px] sm:border-[3px] border-white flex items-center justify-center text-white text-[10px] sm:text-xs font-bold shadow-sm"
                    style={{ backgroundColor: color }}
                  >
                    {['JD', 'AS', 'RK', 'PM', 'VL'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-[#F59E0B] text-xs sm:text-sm">★★★★★</span>
                  <span className="text-xs sm:text-sm font-bold text-[#2D3748]">4.9</span>
                </div>
                <p className="text-[10px] sm:text-xs text-[#64748B]">120+ Reviews</p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Analytics Dashboard + Phone */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Analytics Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10 bg-white rounded-xl sm:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] p-4 sm:p-5 w-full max-w-md"
            >
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#10B981]" />
                  <span className="text-xs sm:text-sm font-semibold text-[#2D3748]">Analytics Overview</span>
                </div>
                <span className="text-[10px] sm:text-xs text-[#94A3B8]">This Month</span>
              </div>

              {/* Metric Cards Row */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="bg-[#F8FAFC] rounded-lg sm:rounded-xl p-2.5 sm:p-3">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                    <TrendingUp size={12} className="sm:hidden text-[#10B981]" />
                    <TrendingUp size={14} className="hidden sm:block text-[#10B981]" />
                    <span className="text-[10px] sm:text-xs text-[#94A3B8]">Total Visitors</span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-[#1a1a2e]">24,580</p>
                  <p className="text-[10px] sm:text-xs text-[#10B981] font-medium">↑ 12.5% this month</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg sm:rounded-xl p-2.5 sm:p-3">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                    <Users size={12} className="sm:hidden text-[#6C4CFF]" />
                    <Users size={14} className="hidden sm:block text-[#6C4CFF]" />
                    <span className="text-[10px] sm:text-xs text-[#94A3B8]">Leads Generated</span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-[#1a1a2e]">1,458</p>
                  <p className="text-[10px] sm:text-xs text-[#10B981] font-medium">↑ 8.6%</p>
                </div>
              </div>

              {/* Projects Delivered */}
              <div className="bg-gradient-to-r from-[#6C4CFF]/10 to-[#8B5CFF]/10 rounded-lg sm:rounded-xl p-2.5 sm:p-3 mb-3 sm:mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FolderCheck size={14} className="sm:hidden text-[#6C4CFF]" />
                    <FolderCheck size={16} className="hidden sm:block text-[#6C4CFF]" />
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-[#2D3748]">Projects Delivered</p>
                      <p className="text-[10px] sm:text-xs text-[#94A3B8]">This Year</p>
                    </div>
                  </div>
                  <span className="text-lg sm:text-xl font-bold text-[#6C4CFF]">120+</span>
                </div>
              </div>

              {/* Mini Chart */}
              <div className="h-12 sm:h-16 bg-gradient-to-r from-[#6C4CFF]/5 to-transparent rounded-lg sm:rounded-xl flex items-end px-2 sm:px-3 pb-2 gap-0.5 sm:gap-1">
                {[40, 55, 35, 60, 45, 70, 55, 80, 65, 75, 85, 70].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm"
                    style={{
                      height: `${h}%`,
                      background: i >= 10 ? '#6C4CFF' : '#E2E0FF',
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Phone Mockup - hidden on small mobile, visible on sm+ */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden sm:block absolute -right-2 sm:-right-4 lg:-right-8 bottom-0 z-20"
            >
              <div className="w-36 sm:w-44 lg:w-52 bg-white rounded-[2rem] sm:rounded-[2.5rem] p-[5px] sm:p-[6px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-200">
                <div className="w-16 sm:w-20 h-4 sm:h-5 bg-white rounded-b-xl sm:rounded-b-2xl mx-auto relative">
                  <div className="w-8 sm:w-10 h-[4px] sm:h-[5px] bg-gray-900 rounded-full mx-auto mt-1" />
                </div>
                <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden min-h-[220px] sm:min-h-[280px] lg:min-h-[320px] flex flex-col">
                  <div className="flex items-center justify-between px-3 sm:px-4 pt-2 sm:pt-3 pb-1 sm:pb-2">
                    <span className="text-[9px] sm:text-[10px] font-semibold text-gray-800">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-gray-800 rounded-sm" />
                      <div className="w-1 sm:w-1.5 h-2 sm:h-2.5 bg-gray-800 rounded-sm" />
                    </div>
                  </div>
                  <div className="px-3 sm:px-4 pb-1 sm:pb-2">
                    <p className="text-[9px] sm:text-[10px] text-gray-500 font-medium">Larawans Digital</p>
                    <p className="text-xs sm:text-sm font-bold text-gray-900">Business Growth</p>
                  </div>
                  <div className="px-3 sm:px-4 py-2 sm:py-3">
                    <div className="bg-gradient-to-br from-[#6C4CFF]/10 to-[#8B5CFF]/5 rounded-lg sm:rounded-xl p-2 sm:p-3">
                      <p className="text-2xl sm:text-3xl font-bold text-[#6C4CFF]">75%</p>
                      <p className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5">Growth Rate</p>
                    </div>
                  </div>
                  <div className="flex-1 flex items-end gap-1 sm:gap-1.5 px-3 sm:px-4 mb-2 sm:mb-3">
                    {[30, 50, 40, 60, 45, 70, 55, 80, 65, 90].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm"
                        style={{ height: `${h}%`, backgroundColor: i >= 8 ? '#6C4CFF' : '#E8E0FF' }}
                      />
                    ))}
                  </div>
                  <div className="px-3 sm:px-4 pb-3 sm:pb-4">
                    <div className="bg-[#6C4CFF] rounded-lg sm:rounded-xl py-2 sm:py-2.5 text-center">
                      <p className="text-white text-[10px] sm:text-xs font-semibold">View Report</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Metric Cards - hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="hidden md:block absolute -top-4 left-4 lg:left-0 z-30 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-[#10B981]/10 flex items-center justify-center">
                <CheckCircle size={16} className="text-[#10B981]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#2D3748]">E-Commerce</p>
                <p className="text-[10px] text-[#10B981]">Website</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="hidden md:block absolute -bottom-4 left-8 lg:left-4 z-30 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-[#6C4CFF]/10 flex items-center justify-center">
                <TrendingUp size={16} className="text-[#6C4CFF]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#2D3748]">+24.5%</p>
                <p className="text-[10px] text-[#94A3B8]">Revenue Growth</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}