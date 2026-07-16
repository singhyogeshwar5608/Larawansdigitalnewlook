'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/landing/Header';
import { ExternalLink, ArrowRight, Filter } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={fadeInUp} className={className}>
      {children}
    </motion.div>
  );
}

const categories = ['All', 'Websites', 'Mobile Apps', 'Branding', 'SEO', 'Marketing', 'E-Commerce'];

const portfolioItems = [
  { id: 1, title: 'E-Commerce Platform', category: 'E-Commerce', color: '#6C4CFF', gradient: 'from-[#6C4CFF] to-[#8B5CFF]', description: 'Full-featured online store with 10,000+ products, payment gateway, and real-time order tracking.', tech: ['Next.js', 'Stripe', 'PostgreSQL'] },
  { id: 2, title: 'Healthcare App', category: 'Mobile Apps', color: '#EC4899', gradient: 'from-[#EC4899] to-[#F472B6]', description: 'Patient management app with appointment booking, telemedicine, and health records.', tech: ['React Native', 'Firebase', 'Node.js'] },
  { id: 3, title: 'SaaS Dashboard', category: 'Websites', color: '#3B82F6', gradient: 'from-[#3B82F6] to-[#60A5FA]', description: 'Analytics dashboard for SaaS businesses with real-time data visualization and reporting.', tech: ['React', 'D3.js', 'AWS'] },
  { id: 4, title: 'Restaurant Branding', category: 'Branding', color: '#F59E0B', gradient: 'from-[#F59E0B] to-[#FBBF24]', description: 'Complete brand identity for a premium restaurant chain including logo, menu design, and packaging.', tech: ['Figma', 'Illustrator', 'Photoshop'] },
  { id: 5, title: 'Real Estate Portal', category: 'Websites', color: '#10B981', gradient: 'from-[#10B981] to-[#34D399]', description: 'Property listing platform with virtual tours, map integration, and agent management system.', tech: ['Next.js', 'Mapbox', 'Prisma'] },
  { id: 6, title: 'SEO Campaign', category: 'SEO', color: '#8B5CF6', gradient: 'from-[#8B5CF6] to-[#A78BFA]', description: 'Comprehensive SEO strategy that achieved 300% increase in organic traffic in 6 months.', tech: ['Ahrefs', 'GA4', 'SEMrush'] },
  { id: 7, title: 'Fitness App', category: 'Mobile Apps', color: '#EF4444', gradient: 'from-[#EF4444] to-[#F87171]', description: 'Workout tracking app with AI-powered training plans, nutrition tracking, and social features.', tech: ['Flutter', 'OpenAI', 'Supabase'] },
  { id: 8, title: 'Social Media Campaign', category: 'Marketing', color: '#06B6D4', gradient: 'from-[#06B6D4] to-[#22D3EE]', description: 'Multi-platform social media campaign generating 2M+ impressions and 500+ leads.', tech: ['Meta Ads', 'Canva', 'Hootsuite'] },
  { id: 9, title: 'EdTech Platform', category: 'Websites', color: '#6366F1', gradient: 'from-[#6366F1] to-[#818CF8]', description: 'Online learning platform with live classes, course management, and student progress tracking.', tech: ['Next.js', 'WebRTC', 'MongoDB'] },
  { id: 10, title: 'Fashion E-Store', category: 'E-Commerce', color: '#D946EF', gradient: 'from-[#D946EF] to-[#E879F9]', description: 'Premium fashion e-commerce with AR try-on, wishlist, and personalized recommendations.', tech: ['Shopify', 'Three.js', 'Tailwind'] },
  { id: 11, title: 'Startup Branding', category: 'Branding', color: '#F97316', gradient: 'from-[#F97316] to-[#FB923C]', description: 'Complete brand identity for a tech startup including pitch deck, website, and social media kit.', tech: ['Figma', 'After Effects', 'Canva'] },
  { id: 12, title: 'Google Ads Campaign', category: 'Marketing', color: '#14B8A6', gradient: 'from-[#14B8A6] to-[#2DD4BF]', description: 'PPC campaign achieving 5x ROAS for a B2B company with targeted lead generation.', tech: ['Google Ads', 'Landing Pages', 'HubSpot'] },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif' }}>
      <Header activePage="Portfolio" />

      {/* Hero */}
      <section className="pt-[70px] relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0F0FF 0%, #F7FAFC 60%, #FFFFFF 100%)' }}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6C4CFF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#8B5CFF]/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28 text-center relative z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#6C4CFF] mb-3 sm:mb-4">
            Our Portfolio
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a2e] mb-4 sm:mb-6 leading-tight">
            Work That Speaks{' '}
            <span className="text-[#6C4CFF]">For Itself</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-[#64748B] max-w-2xl mx-auto px-2">
            Explore our latest projects and see how we have helped businesses transform their digital presence and achieve remarkable results.
          </motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Filter Tabs */}
          <div className="flex gap-2 mb-8 md:mb-10 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveFilter(cat)}
                className={`shrink-0 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-[#6C4CFF] text-white shadow-[0_4px_12px_rgba(108,76,255,0.3)]'
                    : 'bg-gray-100 text-[#64748B] hover:bg-gray-200'
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div key={item.id} layout
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }} className="group cursor-pointer">
                  <div className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${item.gradient} aspect-[4/3] flex items-center justify-center transition-shadow duration-300 group-hover:shadow-xl`}>
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 left-4 w-12 h-12 sm:w-16 sm:h-16 border-2 border-white/40 rounded-lg" />
                      <div className="absolute bottom-4 right-4 w-16 sm:w-24 h-2.5 sm:h-3 bg-white/30 rounded" />
                      <div className="absolute bottom-10 right-4 w-12 sm:w-20 h-2.5 sm:h-3 bg-white/20 rounded" />
                      <div className="absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 border-2 border-white/30 rounded-full" />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center">
                          <ExternalLink size={18} className="text-[#1a1a2e]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm sm:text-base font-bold text-[#1a1a2e] group-hover:text-[#6C4CFF] transition-colors">{item.title}</h3>
                      <span className="text-[10px] sm:text-xs font-medium text-[#94A3B8] bg-gray-100 px-2 py-0.5 rounded">{item.category}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#64748B] mt-1.5 line-clamp-2">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {item.tech.map((t) => (
                        <span key={t} className="text-[10px] font-medium text-[#6C4CFF] bg-[#6C4CFF]/5 px-2 py-0.5 rounded">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-[#64748B]">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection>
        <section className="py-14 sm:py-16 md:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #070B2B 0%, #101B5A 50%, #1A1443 100%)' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#6C4CFF]/10 rounded-full blur-[120px]" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-5 leading-tight px-2">
              Have a Project in Mind?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/50 max-w-xl mx-auto mb-8 sm:mb-10 px-2">
              Let us bring your vision to life. Share your project details and get a free quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <Link href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white bg-[#6C4CFF] hover:bg-[#5B3DE6] px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg transition-all duration-200 hover:shadow-[0_6px_20px_rgba(108,76,255,0.4)]">
                Get Free Quote <ArrowRight size={18} />
              </Link>
              <Link href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-[#6C4CFF] bg-white hover:bg-gray-50 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg transition-all duration-200">
                View Pricing <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}