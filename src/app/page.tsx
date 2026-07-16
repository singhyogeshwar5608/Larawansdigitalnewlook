'use client';

import { motion } from 'framer-motion';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import TrustedBrands from '@/components/landing/TrustedBrands';
import Services from '@/components/landing/Services';
import ServicesBanner from '@/components/landing/ServicesBanner';
import StatsBanner from '@/components/landing/StatsBanner';
import Portfolio from '@/components/landing/Portfolio';
import VideoReels from '@/components/landing/VideoReels';
import Pricing from '@/components/landing/Pricing';
import ProcessTimeline from '@/components/landing/ProcessTimeline';
import Testimonials from '@/components/landing/Testimonials';
import FinalCTA from '@/components/landing/FinalCTA';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif' }}>
      <Header activePage="Home" />
      <AnimatedSection><Hero /></AnimatedSection>
      <AnimatedSection><TrustedBrands /></AnimatedSection>
      <AnimatedSection><Services /></AnimatedSection>
      <AnimatedSection><ServicesBanner /></AnimatedSection>
      <AnimatedSection><StatsBanner /></AnimatedSection>
      <AnimatedSection><Portfolio /></AnimatedSection>
      <AnimatedSection><VideoReels /></AnimatedSection>
      <AnimatedSection><Pricing /></AnimatedSection>
      <AnimatedSection><ProcessTimeline /></AnimatedSection>
      <AnimatedSection><Testimonials /></AnimatedSection>
      <AnimatedSection><FinalCTA /></AnimatedSection>
    </div>
  );
}