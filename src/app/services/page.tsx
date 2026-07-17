'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/landing/Header';
import {
  Globe, Smartphone, Megaphone, Palette, Search, ArrowRight,
  Code2, CheckCircle, ArrowUpRight, Sparkles, Rocket, Target, Lightbulb, Shield
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
    icon: Globe, title: 'Website Development', color: '#6C4CFF',
    description: 'Custom, responsive websites built with modern technologies to convert visitors into customers.',
    features: ['Custom UI/UX Design', 'Responsive on All Devices', 'Fast Loading Speed', 'SEO Optimized', 'CMS Integration', 'Analytics Setup'],
  },
  {
    icon: Smartphone, title: 'Mobile App Development', color: '#EC4899',
    description: 'Native and cross-platform mobile apps delivering seamless user experiences on iOS and Android.',
    features: ['iOS & Android Apps', 'React Native / Flutter', 'Push Notifications', 'Offline Support', 'App Store Optimization', 'In-App Purchases'],
  },
  {
    icon: Megaphone, title: 'Digital Marketing', color: '#3B82F6',
    description: 'Data-driven marketing strategies including PPC, social media, and content marketing to grow your business.',
    features: ['Google & Meta Ads', 'Social Media Management', 'Content Marketing', 'Email Campaigns', 'Conversion Optimization', 'ROI Tracking'],
  },
  {
    icon: Palette, title: 'Brand Identity & Design', color: '#F59E0B',
    description: 'Complete branding solutions including logo design, brand guidelines, and visual identity systems.',
    features: ['Logo Design', 'Brand Guidelines', 'Social Media Kits', 'Business Cards', 'Presentation Design', 'Brand Strategy'],
  },
  {
    icon: Search, title: 'SEO & Digital Growth', color: '#10B981',
    description: 'Comprehensive SEO strategies to boost organic visibility, drive qualified traffic, and increase conversions.',
    features: ['Technical SEO Audit', 'Keyword Research', 'On-Page Optimization', 'Link Building', 'Local SEO', 'Monthly Reports'],
  },
  {
    icon: Code2, title: 'Custom Web Applications', color: '#8B5CF6',
    description: 'Full-stack web applications tailored to your unique business requirements with scalable architecture.',
    features: ['Custom Dashboards', 'API Development', 'Database Design', 'User Authentication', 'Third-Party Integrations', 'Cloud Deployment'],
  },
];

const highlights = [
  { icon: Target, title: 'Result-Driven', desc: 'Every project is optimized for measurable outcomes and business growth.' },
  { icon: Rocket, title: 'Fast Delivery', desc: 'We deliver projects on time with our streamlined development process.' },
  { icon: Lightbulb, title: 'Innovative Solutions', desc: 'Creative approaches backed by the latest technologies and trends.' },
  { icon: Shield, title: 'Secure & Reliable', desc: 'Enterprise-grade security and 99.9% uptime guaranteed.' },
];

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python',
  'PostgreSQL', 'MongoDB', 'AWS', 'Vercel', 'Figma', 'WordPress',
  'React Native', 'Flutter', 'Firebase', 'Docker',
];

const process = [
  { step: '01', title: 'Discovery', description: 'We understand your business goals, target audience, and project requirements.', icon: Sparkles },
  { step: '02', title: 'Strategy', description: 'Our team creates a detailed project plan, timeline, and technical architecture.', icon: Target },
  { step: '03', title: 'Design', description: 'We craft stunning UI/UX designs that align with your brand identity.', icon: Palette },
  { step: '04', title: 'Development', description: 'Our developers build your solution with cutting-edge technologies.', icon: Code2 },
  { step: '05', title: 'Testing', description: 'Rigorous QA testing ensures your product is bug-free and performant.', icon: Shield },
  { step: '06', title: 'Launch', description: 'We deploy your project and provide ongoing support and optimization.', icon: Rocket },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif', background: '#070B2B' }}>
      <Header activePage="Services" />

      {/* Hero - Dark with Female Image */}
      <section className="pt-[70px] relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #070B2B 0%, #0d1240 30%, #101B5A 60%, #1A1443 100%)' }}>
        {/* Background Glows */}
        <div className="absolute top-10 left-0 w-72 h-72 bg-[#6C4CFF]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B5CFF]/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#6C4CFF]/5 rounded-full blur-[150px]" />
        {/* Decorative Dots */}
        <div className="absolute top-32 left-8 sm:left-16 w-2 h-2 bg-[#8B5CFF]/40 rounded-full" />
        <div className="absolute top-48 left-24 sm:left-40 w-1.5 h-1.5 bg-[#A78BFA]/30 rounded-full" />
        <div className="absolute bottom-40 left-12 sm:left-28 w-1 h-1 bg-[#C4B5FD]/40 rounded-full" />
        <div className="absolute top-24 right-16 sm:right-32 w-2.5 h-2.5 bg-[#6C4CFF]/30 rounded-full" />
        <div className="absolute bottom-60 right-10 sm:right-20 w-1.5 h-1.5 bg-[#A78BFA]/25 rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left w-full">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="inline-flex items-center gap-2 bg-[#6C4CFF]/15 backdrop-blur-sm border border-[#6C4CFF]/25 rounded-full px-4 py-1.5 mb-5 sm:mb-6">
                  <Sparkles size={14} className="text-[#A78BFA]" />
                  <span className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-[#A78BFA]">Our Services</span>
                </span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-white mb-4 sm:mb-5 lg:mb-6 leading-[1.15]">
                Solutions That Drive{' '}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #6C4CFF, #A78BFA, #C4B5FD)' }}>
                  Real Results
                </span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm sm:text-base md:text-lg text-white/55 max-w-xl mx-auto lg:mx-0 mb-7 sm:mb-8 lg:mb-10 leading-relaxed">
                We offer a comprehensive suite of digital services designed to help your business thrive. From concept to launch, we have got you covered.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white bg-[#6C4CFF] hover:bg-[#5B3DE6] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-200 hover:shadow-[0_8px_30px_rgba(108,76,255,0.45)]">
                  Get Free Consultation <ArrowRight size={18} />
                </Link>
                <Link href="/pricing"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white/90 bg-white/8 hover:bg-white/15 backdrop-blur-md px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-white/15 hover:border-white/25 transition-all duration-200">
                  View Pricing <ArrowRight size={18} />
                </Link>
              </motion.div>

              {/* Quick Stats under CTA - desktop only */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
                className="hidden lg:flex items-center gap-8 mt-10 xl:mt-12 pt-8 border-t border-white/10">
                <div>
                  <p className="text-2xl xl:text-3xl font-bold text-white">85<span className="text-[#8B5CFF]">+</span></p>
                  <p className="text-xs text-white/40 mt-0.5">Happy Clients</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <p className="text-2xl xl:text-3xl font-bold text-white">200<span className="text-[#8B5CFF]">+</span></p>
                  <p className="text-xs text-white/40 mt-0.5">Projects Delivered</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <p className="text-2xl xl:text-3xl font-bold text-white">5<span className="text-[#8B5CFF]">+</span></p>
                  <p className="text-xs text-white/40 mt-0.5">Years Experience</p>
                </div>
              </motion.div>
            </div>

            {/* Female Image */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex-shrink-0 w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[460px] xl:max-w-[500px]">
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#6C4CFF]/25 via-[#8B5CFF]/15 to-[#A78BFA]/10 rounded-[2rem] blur-2xl" />

              {/* Image Container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/services-hero-female.png"
                    alt="Professional digital expert"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 340px, (max-width: 768px) 400px, (max-width: 1024px) 440px, 460px"
                    priority
                  />
                  {/* Bottom Gradient Overlay for blending */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#070B2B]/80 via-[#070B2B]/30 to-transparent" />
                </div>
              </div>

              {/* Floating Glass Card - Right Side */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -right-3 sm:-right-5 md:-right-8 top-[18%] sm:top-[15%] hidden sm:block">
                <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-xl">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#6C4CFF]/25 flex items-center justify-center">
                      <Rocket size={16} className="text-[#A78BFA]" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-bold text-white">Fast Delivery</p>
                      <p className="text-[9px] sm:text-[10px] text-white/40">On-time, every time</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Glass Card - Left Side */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -left-3 sm:-left-5 md:-left-8 bottom-[22%] sm:bottom-[20%] hidden sm:block">
                <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-xl">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                      <CheckCircle size={16} className="text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-bold text-white">99.9% Uptime</p>
                      <p className="text-[9px] sm:text-[10px] text-white/40">Guaranteed</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom floating badge - mobile only */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:hidden">
                <div className="bg-[#6C4CFF] rounded-full px-4 py-2 shadow-lg shadow-[#6C4CFF]/30 flex items-center gap-2">
                  <div className="flex -space-x-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#A78BFA] border-2 border-[#6C4CFF]" />
                    <div className="w-5 h-5 rounded-full bg-[#C4B5FD] border-2 border-[#6C4CFF]" />
                    <div className="w-5 h-5 rounded-full bg-white/30 border-2 border-[#6C4CFF]" />
                  </div>
                  <p className="text-[10px] font-bold text-white">85+ Clients Trust Us</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="relative py-8 sm:py-10 border-y border-white/5" style={{ background: '#0a0e27' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {highlights.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#6C4CFF]/15 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="sm:hidden text-[#8B5CFF]" />
                  <item.icon size={20} className="hidden sm:block text-[#8B5CFF]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-white truncate">{item.title}</p>
                  <p className="text-[10px] sm:text-xs text-white/40 leading-snug line-clamp-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-14 md:py-20 relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#6C4CFF]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#8B5CFF]/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="space-y-12 sm:space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <AnimatedSection key={service.title}>
                <div className={`grid lg:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 items-center`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-4 sm:mb-5"
                      style={{ backgroundColor: `${service.color}20`, boxShadow: `0 0 30px ${service.color}15` }}>
                      <service.icon size={24} style={{ color: service.color }} />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 leading-tight">{service.title}</h2>
                    <p className="text-xs sm:text-sm md:text-base text-white/50 leading-relaxed mb-5 sm:mb-6">{service.description}</p>
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:gap-3 transition-all duration-300 group">
                      <span style={{ color: service.color }}>Get Started</span>
                      <ArrowRight size={16} style={{ color: service.color }} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
                      {service.features.map((feature, i) => (
                        <motion.div key={i} whileHover={{ y: -3 }}
                          className="bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group cursor-default">
                          <CheckCircle size={14} className="sm:hidden mb-1.5" style={{ color: service.color }} />
                          <CheckCircle size={16} className="hidden sm:block mb-2" style={{ color: service.color }} />
                          <p className="text-[11px] sm:text-xs md:text-sm font-medium text-white/80 group-hover:text-white transition-colors">{feature}</p>
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
        <section className="py-14 md:py-20 border-t border-white/5" style={{ background: '#0a0e27' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#8B5CFF] mb-2 sm:mb-3">Technologies We Use</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-12">Built With the Best Tools</h2>
            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 md:gap-4">
              {technologies.map((tech, i) => (
                <motion.div key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-4 border border-white/10 hover:border-[#6C4CFF]/40 hover:bg-[#6C4CFF]/10 hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <p className="text-xs sm:text-sm md:text-base font-bold text-white">{tech}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Process */}
      <AnimatedSection>
        <section className="py-14 md:py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6C4CFF]/3 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#8B5CFF] mb-2 sm:mb-3">Our Process</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">How We Work</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {process.map((item, i) => (
                <motion.div key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-8 border border-white/10 hover:border-[#6C4CFF]/30 hover:bg-white/10 transition-all duration-300 group">
                  <span className="absolute top-4 right-4 sm:top-5 sm:right-5 text-3xl sm:text-4xl md:text-5xl font-bold text-white/[0.03] group-hover:text-[#6C4CFF]/10 transition-colors select-none">{item.step}</span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#6C4CFF]/15 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#6C4CFF]/25 transition-colors">
                    <item.icon size={18} className="sm:hidden text-[#8B5CFF]" />
                    <item.icon size={20} className="hidden sm:block text-[#8B5CFF]" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1.5 sm:mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-white/40 leading-relaxed">{item.description}</p>
                </motion.div>
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