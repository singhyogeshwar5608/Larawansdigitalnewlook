'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/landing/Header';
import {
  Globe, Smartphone, Megaphone, Palette, Search, ArrowRight,
  Code2, CheckCircle, ArrowUpRight, Sparkles, Rocket, Target, Lightbulb, Shield
} from 'lucide-react';
import { HiRocketLaunch, HiLightBulb, HiShieldCheck } from 'react-icons/hi2';
import { TbTarget } from 'react-icons/tb';

/* Custom SVG Icons for Service Cards */
const ServiceIconWeb = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="22" height="16" rx="2" stroke={color} strokeWidth="1.8"/>
    <path d="M8 25h12M14 21v4" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M8 9h4l2 3-2 3H8l-2-3 2-3z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.2"/>
    <circle cx="18" cy="12" r="2" stroke={color} strokeWidth="1.2"/>
    <path d="M16 16h8M16 19h5" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const ServiceIconApp = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="2" width="12" height="24" rx="3" stroke={color} strokeWidth="1.8"/>
    <path d="M12 22h4M14 5.5v0" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M11 11l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="10" y="8" width="8" height="10" rx="1" stroke={color} strokeWidth="1" strokeDasharray="2 2"/>
  </svg>
);

const ServiceIconMarketing = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 24l4-8 5 3 5-11 6 4" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8" cy="16" r="2" fill={color} fillOpacity="0.3"/>
    <circle cx="13" cy="19" r="2" fill={color} fillOpacity="0.3"/>
    <circle cx="18" cy="8" r="2" fill={color} fillOpacity="0.3"/>
    <circle cx="24" cy="12" r="2" fill={color} fillOpacity="0.3"/>
    <path d="M2 24h24" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M2 20h3M20 20h6M2 16h2M22 16h4" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
  </svg>
);

const ServiceIconBrand = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 3L26 9v10l-12 6L2 19V9l12-6z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M14 3v24M2 9l12 6 12-6" stroke={color} strokeWidth="1.2" opacity="0.5"/>
    <circle cx="14" cy="14" r="3" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.2"/>
    <path d="M14 11v6M11 14h6" stroke={color} strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

const ServiceIconSEO = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.8"/>
    <path d="M18 18l7 7" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M9 10h6M12 7v6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 15l3 2 5-5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ServiceIconCustom = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6h8l4 4-4 4H4V6z" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5"/>
    <path d="M16 6h8l4 4-4 4h-8V6z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.5"/>
    <path d="M10 14h8l4 4-4 4h-8V14z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5"/>
    <path d="M8 9h4M10 7.5v3" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    <path d="M20 9h2M21 8v2" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    <path d="M14 17h2M15 16v2" stroke={color} strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

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
    icon: ServiceIconWeb, title: 'Website Development', color: '#6C4CFF',
    description: 'Custom, responsive websites built with modern technologies to convert visitors into customers.',
    features: ['Custom UI/UX Design', 'Responsive on All Devices', 'Fast Loading Speed', 'SEO Optimized', 'CMS Integration', 'Analytics Setup'],
  },
  {
    icon: ServiceIconApp, title: 'Mobile App Development', color: '#EC4899',
    description: 'Native and cross-platform mobile apps delivering seamless user experiences on iOS and Android.',
    features: ['iOS & Android Apps', 'React Native / Flutter', 'Push Notifications', 'Offline Support', 'App Store Optimization', 'In-App Purchases'],
  },
  {
    icon: ServiceIconMarketing, title: 'Digital Marketing', color: '#3B82F6',
    description: 'Data-driven marketing strategies including PPC, social media, and content marketing to grow your business.',
    features: ['Google & Meta Ads', 'Social Media Management', 'Content Marketing', 'Email Campaigns', 'Conversion Optimization', 'ROI Tracking'],
  },
  {
    icon: ServiceIconBrand, title: 'Brand Identity & Design', color: '#F59E0B',
    description: 'Complete branding solutions including logo design, brand guidelines, and visual identity systems.',
    features: ['Logo Design', 'Brand Guidelines', 'Social Media Kits', 'Business Cards', 'Presentation Design', 'Brand Strategy'],
  },
  {
    icon: ServiceIconSEO, title: 'SEO & Digital Growth', color: '#10B981',
    description: 'Comprehensive SEO strategies to boost organic visibility, drive qualified traffic, and increase conversions.',
    features: ['Technical SEO Audit', 'Keyword Research', 'On-Page Optimization', 'Link Building', 'Local SEO', 'Monthly Reports'],
  },
  {
    icon: ServiceIconCustom, title: 'Custom Web Applications', color: '#8B5CF6',
    description: 'Full-stack web applications tailored to your unique business requirements with scalable architecture.',
    features: ['Custom Dashboards', 'API Development', 'Database Design', 'User Authentication', 'Third-Party Integrations', 'Cloud Deployment'],
  },
];

const highlights = [
  { icon: TbTarget, title: 'Result-Driven', desc: 'Every project is optimized for measurable outcomes and business growth.', color: '#6C4CFF' },
  { icon: HiRocketLaunch, title: 'Fast Delivery', desc: 'We deliver projects on time with our streamlined development process.', color: '#3B82F6' },
  { icon: HiLightBulb, title: 'Innovative Solutions', desc: 'Creative approaches backed by the latest technologies and trends.', color: '#F59E0B' },
  { icon: HiShieldCheck, title: 'Secure & Reliable', desc: 'Enterprise-grade security and 99.9% uptime guaranteed.', color: '#10B981' },
];

const technologies = [
  {
    name: 'React', color: '#61DAFB',
    icon: (c: string) => <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="11" stroke={c} strokeWidth="1.2" strokeDasharray="3 2"/><ellipse cx="13" cy="13" rx="11" ry="4.5" stroke={c} strokeWidth="1.2"/><ellipse cx="13" cy="13" rx="4.5" ry="11" stroke={c} strokeWidth="1.2"/><circle cx="13" cy="13" r="2" fill={c}/></svg>
  },
  {
    name: 'Next.js', color: '#FFFFFF',
    icon: (c: string) => <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="11" stroke={c} strokeWidth="1.2"/><path d="M7 19V7l12 12H13" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 13h6" stroke={c} strokeWidth="1.2" strokeLinecap="round"/></svg>
  },
  {
    name: 'TypeScript', color: '#3178C6',
    icon: (c: string) => <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect x="4" y="4" width="18" height="18" rx="3" stroke={c} strokeWidth="1.2"/><text x="13" y="17" textAnchor="middle" fill={c} fontSize="10" fontWeight="700" fontFamily="system-ui">TS</text></svg>
  },
  {
    name: 'Tailwind CSS', color: '#06B6D4',
    icon: (c: string) => <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M8 10c0-3 2-5 5-5 4 0 5 3 7 3.5S23 7 23 10c0 5-5 6-8 6s-3 2-5 2.5S6 20 6 18c0-3 2-4 2-8z" stroke={c} strokeWidth="1.2"/><path d="M10 12c.5-1 1.5-2 3-2 2 0 2.5 1 3.5 1.2" stroke={c} strokeWidth="1.2" strokeLinecap="round"/></svg>
  },
  {
    name: 'Node.js', color: '#68A063',
    icon: (c: string) => <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M13 3L22 8v10l-9 5-9-5V8l9-5z" stroke={c} strokeWidth="1.2"/><path d="M13 3v10M13 18v5M4 8l9 5M22 8l-9 5" stroke={c} strokeWidth="1" opacity="0.5"/></svg>
  },
  {
    name: 'Python', color: '#FFD43B',
    icon: (c: string) => <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M13 3c-4 0-6 1.5-6 4v3h6v1H6c-3 0-4 2.5-4 5s1 5 4 5h2v-3.5c0-1.5 1.2-3 3-3h5c1.5 0 3-1.2 3-3V7c0-1.5-1.5-4-6-4z" stroke={c} strokeWidth="1.2"/><circle cx="10" cy="7" r="1.2" fill={c}/><path d="M13 23c4 0 6-1.5 6-4v-3h-6v-1h7c3 0 4-2.5 4-5s-1-5-4-5h-2v3.5c0 1.5-1.2 3-3 3h-5c-1.5 0-3 1.2-3 3v5c0 1.5 1.5 4 6 4z" stroke={c} strokeWidth="1.2"/><circle cx="16" cy="19" r="1.2" fill={c}/></svg>
  },
  {
    name: 'PostgreSQL', color: '#4169E1',
    icon: (c: string) => <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M13 3c-5 0-9 2-9 6v5c0 4 4 6 9 6s9-2 9-6V9c0-4-4-6-9-6z" stroke={c} strokeWidth="1.2"/><ellipse cx="13" cy="9" rx="9" ry="6" stroke={c} strokeWidth="1.2"/><path d="M4 9v5c0 1.5 2 3 5 3.5" stroke={c} strokeWidth="1" strokeLinecap="round" opacity="0.5"/><ellipse cx="13" cy="9" rx="4" ry="2.5" stroke={c} strokeWidth="0.8" opacity="0.4"/></svg>
  },
  {
    name: 'MongoDB', color: '#47A248',
    icon: (c: string) => <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M13 2c-1 4-6 7-6 12 0 4 2.5 7 6 9 3.5-2 6-5 6-9 0-5-5-8-6-12z" stroke={c} strokeWidth="1.2"/><path d="M13 8c-.5 3-3 5-3 8 0 2.5 1.3 4.5 3 6" stroke={c} strokeWidth="1" opacity="0.5"/></svg>
  },
  {
    name: 'AWS', color: '#FF9900',
    icon: (c: string) => <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M4 17c2 1.5 5 2.5 9 2.5s7-1 9-2.5" stroke={c} strokeWidth="1.8" strokeLinecap="round"/><path d="M5 14l4-2v5l-4 2v-5z" fill={c} fillOpacity="0.2" stroke={c} strokeWidth="1"/><path d="M9 12l4-2v5l-4 2v-5z" fill={c} fillOpacity="0.3" stroke={c} strokeWidth="1"/><path d="M13 10l4-2v5l-4 2v-5z" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1"/><path d="M17 8l4-2v5l-4 2V8z" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="1"/></svg>
  },
  {
    name: 'Vercel', color: '#FFFFFF',
    icon: (c: string) => <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M13 4L23 22H3L13 4z" stroke={c} strokeWidth="1.2" strokeLinejoin="round"/><path d="M8 16l5-8 5 8" stroke={c} strokeWidth="1" opacity="0.4"/></svg>
  },
  {
    name: 'Figma', color: '#F24E1E',
    icon: (c: string) => <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect x="8" y="3" width="10" height="10" rx="2" stroke={c} strokeWidth="1.2"/><rect x="8" y="13" width="10" height="10" rx="2" stroke={c} strokeWidth="1.2"/><circle cx="18" cy="8" r="5" stroke={c} strokeWidth="1.2"/><circle cx="18" cy="18" r="5" stroke={c} strokeWidth="1.2"/><circle cx="8" cy="18" r="5" stroke={c} strokeWidth="1.2"/></svg>
  },
  {
    name: 'WordPress', color: '#21759B',
    icon: (c: string) => <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="10" stroke={c} strokeWidth="1.2"/><text x="13" y="17" textAnchor="middle" fill={c} fontSize="12" fontWeight="700" fontFamily="serif">W</text></svg>
  },
  {
    name: 'React Native', color: '#61DAFB',
    icon: (c: string) => <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="10" stroke={c} strokeWidth="1.2"/><path d="M9 13l4-7 4 7-4 7-4-7z" stroke={c} strokeWidth="1.2" strokeLinejoin="round"/><path d="M7 10l6 3 6-3M7 16l6-3 6 3" stroke={c} strokeWidth="0.8" opacity="0.5"/></svg>
  },
  {
    name: 'Flutter', color: '#54C5F8',
    icon: (c: string) => <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M5 21L13 5l8 10H13l-3 6H5z" stroke={c} strokeWidth="1.2" strokeLinejoin="round"/><path d="M13 15l8 10" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>
  },
  {
    name: 'Firebase', color: '#FFCA28',
    icon: (c: string) => <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M7 22L4 4l7 4 2-2 7 6-5 10H7z" stroke={c} strokeWidth="1.2" strokeLinejoin="round"/><path d="M11 8l5 0" stroke={c} strokeWidth="1" strokeLinecap="round" opacity="0.5"/></svg>
  },
  {
    name: 'Docker', color: '#2496ED',
    icon: (c: string) => <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M4 14h3v-3H4v3zM8 14h3v-3H8v3zM12 14h3v-3h-3v3zM16 14h3v-3h-3v3zM8 10h3V7H8v3zM12 10h3V7h-3v3zM12 6h3V3h-3v3z" stroke={c} strokeWidth="1.1"/><path d="M4 17c3 2 6 3 10 3 3 0 5.5-1 7-2.5" stroke={c} strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/></svg>
  },
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

      {/* Highlights Bar - Light Theme */}
      <section className="relative py-10 sm:py-12 md:py-14" style={{ background: '#F5F3FF' }}>
        {/* Subtle top/bottom borders with gradient */}
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #6C4CFF/20, transparent)' }} />
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #6C4CFF/20, transparent)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {highlights.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex flex-col items-center text-center gap-2.5 sm:gap-3">
                  {/* Icon */}
                  <div className="w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}10` }}>
                    <item.icon className="text-xl sm:text-2xl md:text-3xl transition-colors duration-300" style={{ color: item.color }} />
                  </div>
                  {/* Text */}
                  <div>
                    <p className="text-xs sm:text-sm md:text-base font-bold text-gray-900 mb-0.5 sm:mb-1">{item.title}</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 md:py-20 relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#6C4CFF]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#8B5CFF]/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#8B5CFF] mb-2 sm:mb-3">What We Offer</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Our Core Services</h2>
            <p className="text-sm sm:text-base text-white/40 max-w-xl mx-auto">End-to-end digital solutions crafted to elevate your brand and accelerate business growth.</p>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {services.map((service, i) => (
              <motion.div key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-white/[0.04] backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 border border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.07] transition-all duration-400 cursor-default">
                {/* Gradient glow on hover */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(300px circle at 50% 0%, ${service.color}12, transparent 70%)` }} />

                <div className="relative z-10">
                  {/* Icon + Number row */}
                  <div className="flex items-start justify-between mb-4 sm:mb-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300"
                      style={{ backgroundColor: `${service.color}15`, boxShadow: `0 0 25px ${service.color}10` }}>
                      <service.icon color={service.color} />
                    </div>
                    <span className="text-3xl sm:text-4xl font-black text-white/[0.04] group-hover:text-white/[0.08] transition-colors select-none leading-none mt-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-2.5 leading-tight">{service.title}</h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/40 leading-relaxed mb-4 sm:mb-5">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                    {service.features.map((feature, fi) => (
                      <div key={fi} className="flex items-center gap-2.5">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                          <circle cx="7" cy="7" r="7" fill={service.color} fillOpacity="0.12"/>
                          <path d="M4.5 7.2l1.6 1.6 3.4-3.4" stroke={service.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-[11px] sm:text-xs text-white/55 group-hover:text-white/70 transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Get Started Link */}
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold transition-all duration-300 group/link">
                    <span style={{ color: service.color }}>Get Started</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover/link:translate-x-1 transition-transform">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke={service.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <AnimatedSection>
        <section className="py-14 md:py-20 border-t border-white/5 relative" style={{ background: '#0a0e27' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#6C4CFF]/4 rounded-full blur-[120px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#8B5CFF] mb-2 sm:mb-3">Technologies We Use</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Built With the Best Tools</h2>
              <p className="text-sm sm:text-base text-white/40 max-w-lg mx-auto">We leverage cutting-edge technologies to deliver scalable, high-performance digital solutions.</p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 md:gap-5">
              {technologies.map((tech, i) => (
                <motion.div key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="group relative flex flex-col items-center justify-center gap-2.5 sm:gap-3 bg-white/[0.04] backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 md:p-5 border border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.08] transition-all duration-300 cursor-default">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{ background: `radial-gradient(150px circle at 50% 30%, ${tech.color}12, transparent 70%)` }} />

                  <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-2.5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${tech.color}12` }}>
                      {tech.icon(tech.color)}
                    </div>
                    <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-white/70 group-hover:text-white text-center leading-tight transition-colors">{tech.name}</p>
                  </div>
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