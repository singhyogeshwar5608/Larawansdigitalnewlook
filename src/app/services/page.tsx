'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/landing/Header';
import ServicesBanner from '@/components/landing/ServicesBanner';
import {
  Globe, Smartphone, Megaphone, Palette, Search, ArrowRight,
  Code2, Database, Shield, Zap, BarChart3, Users, Layers,
  CheckCircle, Star, MessageCircle
} from 'lucide-react';

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

const services = [
  {
    icon: Globe, title: 'Website Development', color: '#6C4CFF', bgColor: '#6C4CFF',
    description: 'Custom, responsive websites built with modern technologies to convert visitors into customers. From simple landing pages to complex web applications.',
    features: ['Custom UI/UX Design', 'Responsive on All Devices', 'Fast Loading Speed', 'SEO Optimized', 'CMS Integration', 'Analytics Setup'],
  },
  {
    icon: Smartphone, title: 'Mobile App Development', color: '#EC4899', bgColor: '#EC4899',
    description: 'Native and cross-platform mobile apps that deliver seamless user experiences on iOS and Android platforms.',
    features: ['iOS & Android Apps', 'React Native / Flutter', 'Push Notifications', 'Offline Support', 'App Store Optimization', 'In-App Purchases'],
  },
  {
    icon: Megaphone, title: 'Digital Marketing', color: '#3B82F6', bgColor: '#3B82F6',
    description: 'Data-driven marketing strategies including PPC, social media marketing, and content marketing to grow your business.',
    features: ['Google & Meta Ads', 'Social Media Management', 'Content Marketing', 'Email Campaigns', 'Conversion Optimization', 'ROI Tracking'],
  },
  {
    icon: Palette, title: 'Brand Identity & Design', color: '#F59E0B', bgColor: '#F59E0B',
    description: 'Complete branding solutions including logo design, brand guidelines, and visual identity systems that make you stand out.',
    features: ['Logo Design', 'Brand Guidelines', 'Social Media Kits', 'Business Cards', 'Presentation Design', 'Brand Strategy'],
  },
  {
    icon: Search, title: 'SEO & Digital Growth', color: '#10B981', bgColor: '#10B981',
    description: 'Comprehensive SEO strategies to boost your organic visibility, drive qualified traffic, and increase conversions.',
    features: ['Technical SEO Audit', 'Keyword Research', 'On-Page Optimization', 'Link Building', 'Local SEO', 'Monthly Reports'],
  },
  {
    icon: Code2, title: 'Custom Web Applications', color: '#8B5CF6', bgColor: '#8B5CF6',
    description: 'Full-stack web applications tailored to your unique business requirements with scalable architecture.',
    features: ['Custom Dashboards', 'API Development', 'Database Design', 'User Authentication', 'Third-Party Integrations', 'Cloud Deployment'],
  },
];

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Vercel', category: 'Cloud' },
  { name: 'Figma', category: 'Design' },
  { name: 'WordPress', category: 'CMS' },
];

const process = [
  { step: '01', title: 'Discovery', description: 'We understand your business goals, target audience, and project requirements through in-depth consultation.' },
  { step: '02', title: 'Strategy', description: 'Our team creates a detailed project plan, timeline, and technical architecture tailored to your needs.' },
  { step: '03', title: 'Design', description: 'We craft stunning UI/UX designs that align with your brand identity and maximize user engagement.' },
  { step: '04', title: 'Development', description: 'Our developers build your solution using cutting-edge technologies with clean, maintainable code.' },
  { step: '05', title: 'Testing', description: 'Rigorous QA testing ensures your product is bug-free, performant, and ready for launch.' },
  { step: '06', title: 'Launch & Support', description: 'We deploy your project and provide ongoing support, maintenance, and performance optimization.' },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif' }}>
      <Header activePage="Services" />

      {/* Hero */}
      <section className="pt-[70px] relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0F0FF 0%, #F7FAFC 60%, #FFFFFF 100%)' }}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6C4CFF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#8B5CFF]/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28 text-center relative z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#6C4CFF] mb-3 sm:mb-4">
            Our Services
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a2e] mb-4 sm:mb-6 leading-tight">
            Solutions That Drive{' '}
            <span className="text-[#6C4CFF]">Real Results</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-[#64748B] max-w-2xl mx-auto px-2">
            We offer a comprehensive suite of digital services designed to help your business thrive in the digital landscape. From concept to launch, we have got you covered.
          </motion.p>
        </div>
      </section>

      {/* Professional Banner - Female Touch */}
      <ServicesBanner />

      {/* Services Detail */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <AnimatedSection key={service.title}>
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6"
                      style={{ backgroundColor: `${service.bgColor}15` }}>
                      <service.icon size={24} style={{ color: service.color }} />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-3 sm:mb-4">{service.title}</h2>
                    <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-6 sm:mb-8">{service.description}</p>
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#6C4CFF] hover:gap-3 transition-all duration-300">
                      Get Started <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {service.features.map((feature, i) => (
                        <motion.div key={i} whileHover={{ y: -3 }}
                          className="bg-[#FAFBFF] rounded-xl p-3 sm:p-4 border border-gray-100 hover:shadow-md transition-all duration-300">
                          <CheckCircle size={16} className="text-[#6C4CFF] mb-2" />
                          <p className="text-xs sm:text-sm font-medium text-[#1a1a2e]">{feature}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <AnimatedSection>
        <section className="py-14 md:py-20 bg-[#FAFBFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#6C4CFF] mb-2 sm:mb-3">Technologies We Use</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-10 sm:mb-14">Built With the Best Tools</h2>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {technologies.map((tech) => (
                <div key={tech.name} className="bg-white rounded-xl px-5 sm:px-6 py-3 sm:py-4 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <p className="text-sm sm:text-base font-bold text-[#1a1a2e]">{tech.name}</p>
                  <p className="text-[10px] sm:text-xs text-[#94A3B8]">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Process */}
      <AnimatedSection>
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#6C4CFF] mb-2 sm:mb-3">Our Process</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e]">How We Work</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {process.map((item) => (
                <div key={item.step} className="relative bg-[#FAFBFF] rounded-xl p-6 sm:p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                  <span className="text-4xl sm:text-5xl font-bold text-[#6C4CFF]/10 group-hover:text-[#6C4CFF]/20 transition-colors">{item.step}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1a1a2e] mt-2 mb-2">{item.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <section className="py-14 sm:py-16 md:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #070B2B 0%, #101B5A 50%, #1A1443 100%)' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#6C4CFF]/10 rounded-full blur-[120px] sm:blur-[150px]" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-5 leading-tight px-2">
              Ready to Start Your Project?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/50 max-w-xl mx-auto mb-8 sm:mb-10 px-2">
              Get a free consultation and let us help you choose the right solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <Link href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white bg-[#6C4CFF] hover:bg-[#5B3DE6] px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg transition-all duration-200 hover:shadow-[0_6px_20px_rgba(108,76,255,0.4)]">
                Get Free Consultation <ArrowRight size={18} />
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