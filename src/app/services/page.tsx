'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/landing/Header';
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
      <AnimatedSection>
        <section className="relative overflow-hidden py-12 sm:py-16 md:py-20" style={{ background: 'linear-gradient(135deg, #6C4CFF 0%, #8B5CFF 30%, #A78BFA 60%, #C4B5FD 100%)' }}>
          {/* Decorative Shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
          <div className="absolute top-1/2 right-[10%] sm:right-[15%] -translate-y-1/2 w-40 h-40 sm:w-56 sm:h-56 bg-white/8 rounded-full blur-sm" />
          <div className="absolute top-[15%] right-[25%] sm:right-[30%] w-20 h-20 sm:w-28 sm:h-28 border-2 border-white/10 rounded-full" />
          <div className="absolute bottom-[20%] left-[5%] sm:left-[8%] w-16 h-16 sm:w-24 sm:h-24 border border-white/10 rounded-2xl rotate-12" />
          <div className="absolute top-[30%] left-[15%] w-3 h-3 sm:w-4 sm:h-4 bg-white/20 rounded-full" />
          <div className="absolute bottom-[35%] right-[20%] w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/15 rounded-full" />
          <div className="absolute top-[20%] left-[40%] w-2 h-2 bg-white/10 rounded-full" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="text-white order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 sm:px-5 sm:py-2 mb-4 sm:mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase">Trusted by 85+ Businesses</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4 sm:mb-5">
                  Turning Your Vision Into{' '}
                  <span className="relative inline-block">
                    Digital Reality
                    <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5.5C47 2 153 2 199 5.5" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-white/75 leading-relaxed mb-6 sm:mb-8 max-w-lg">
                  From stunning websites to powerful mobile apps, our team of creative experts crafts digital experiences that captivate your audience and drive real business growth. Every pixel, every interaction — designed with purpose.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-[#6C4CFF] bg-white hover:bg-gray-50 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-200 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
                    Start Your Project <ArrowRight size={16} />
                  </Link>
                  <Link href="/portfolio"
                    className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white bg-white/15 hover:bg-white/25 backdrop-blur-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-white/20 transition-all duration-200">
                    See Our Work <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Right - Female Professional Illustration */}
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                  {/* Glow circle behind */}
                  <div className="absolute inset-4 sm:inset-6 bg-white/10 rounded-full" />
                  <div className="absolute inset-0 bg-white/5 rounded-full" />
                  
                  {/* Main circle with illustration */}
                  <div className="absolute inset-2 sm:inset-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
                    <div className="text-center px-4">
                      {/* Professional female icon */}
                      <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30">
                        <svg viewBox="0 0 80 80" className="w-14 h-14 sm:w-16 sm:h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Female professional silhouette */}
                          <circle cx="40" cy="24" r="12" fill="white" fillOpacity="0.9" />
                          <path d="M20 72c0-11 9-20 20-20s20 9 20 20" fill="white" fillOpacity="0.9" />
                          {/* Laptop */}
                          <rect x="26" y="52" width="28" height="18" rx="2" fill="white" fillOpacity="0.4" stroke="white" strokeWidth="1" />
                          <rect x="22" y="68" width="36" height="3" rx="1.5" fill="white" fillOpacity="0.4" />
                          {/* Screen glow */}
                          <rect x="29" y="55" width="22" height="12" rx="1" fill="#6C4CFF" fillOpacity="0.5" />
                          {/* Hair detail */}
                          <path d="M28 18c0-7 5-12 12-12s12 5 12 12c0 2-0.5 4-1.5 5.5" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
                        </svg>
                      </div>
                      <p className="text-sm sm:text-base font-bold text-white mb-1">Creative Excellence</p>
                      <p className="text-[10px] sm:text-xs text-white/60">Designed & Developed with Passion</p>
                    </div>
                  </div>

                  {/* Floating stat cards */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute -left-2 sm:-left-6 top-8 sm:top-12 bg-white rounded-xl shadow-xl px-3 py-2 sm:px-4 sm:py-3"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#10B981]/10 flex items-center justify-center">
                        <CheckCircle size={16} className="text-[#10B981]" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs font-bold text-[#1a1a2e]">120+ Projects</p>
                        <p className="text-[9px] sm:text-[10px] text-[#94A3B8]">Delivered</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="absolute -right-2 sm:-right-4 bottom-12 sm:bottom-16 bg-white rounded-xl shadow-xl px-3 py-2 sm:px-4 sm:py-3"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#6C4CFF]/10 flex items-center justify-center">
                        <Star size={16} className="text-[#6C4CFF]" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs font-bold text-[#1a1a2e]">4.9 Rating</p>
                        <p className="text-[9px] sm:text-[10px] text-[#94A3B8]">Client Reviews</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="absolute left-4 sm:left-8 -bottom-2 sm:-bottom-4 bg-white rounded-xl shadow-xl px-3 py-2 sm:px-4 sm:py-3"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#EC4899]/10 flex items-center justify-center">
                        <Zap size={16} className="text-[#EC4899]" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs font-bold text-[#1a1a2e]">7 Days</p>
                        <p className="text-[9px] sm:text-[10px] text-[#94A3B8]">Avg Delivery</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

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