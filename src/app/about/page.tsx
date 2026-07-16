'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/landing/Header';
import {
  ArrowRight, Target, Eye, Heart, Zap, Users, Award, Globe,
  Briefcase, Clock, Headphones, Star, CheckCircle, Linkedin, Instagram, Twitter
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

const values = [
  { icon: Target, title: 'Result-Driven', description: 'Every decision we make is backed by data and focused on delivering measurable results for our clients.', color: '#6C4CFF' },
  { icon: Eye, title: 'Transparency', description: 'We believe in open communication, honest timelines, and clear pricing with no hidden costs.', color: '#3B82F6' },
  { icon: Heart, title: 'Client-First', description: 'Your success is our success. We treat every project as our own and go above and beyond expectations.', color: '#EC4899' },
  { icon: Zap, title: 'Innovation', description: 'We stay ahead of industry trends and leverage cutting-edge technologies to give you a competitive edge.', color: '#F59E0B' },
];

const team = [
  { name: 'Yogeshwar Singh', role: 'Founder & CEO', initials: 'YS', color: '#6C4CFF', bio: 'Visionary leader with 8+ years in digital solutions, passionate about helping businesses grow online.' },
  { name: 'Rahul Kumar', role: 'Lead Developer', initials: 'RK', color: '#3B82F6', bio: 'Full-stack expert specializing in React, Next.js, and scalable cloud architectures.' },
  { name: 'Priya Sharma', role: 'UI/UX Designer', initials: 'PS', color: '#EC4899', bio: 'Award-winning designer creating intuitive, beautiful interfaces that users love.' },
  { name: 'Amit Patel', role: 'Marketing Head', initials: 'AP', color: '#10B981', bio: 'Data-driven marketer with expertise in SEO, PPC, and growth strategies.' },
  { name: 'Sneha Gupta', role: 'Project Manager', initials: 'SG', color: '#F59E0B', bio: 'Certified PMP ensuring every project is delivered on time and within budget.' },
  { name: 'Vikram Singh', role: 'Backend Developer', initials: 'VS', color: '#8B5CF6', bio: 'Database and API specialist building robust, secure backend systems.' },
];

const stats = [
  { icon: Briefcase, value: '120+', label: 'Projects Delivered' },
  { icon: Users, value: '85+', label: 'Happy Clients' },
  { icon: Star, value: '4.9/5', label: 'Average Rating' },
  { icon: Clock, value: '7 Days', label: 'Average Delivery' },
];

const milestones = [
  { year: '2020', title: 'Founded', description: 'Larawans Digital was born with a mission to make premium digital services accessible to businesses of all sizes.' },
  { year: '2021', title: 'First 25 Projects', description: 'Reached our first milestone of 25 successful projects, building a reputation for quality and reliability.' },
  { year: '2022', title: 'Team Expansion', description: 'Grew to a team of 15+ skilled professionals covering design, development, and marketing.' },
  { year: '2023', title: '100+ Projects', description: 'Crossed the 100-project mark with a 98% client satisfaction rate and expanded service offerings.' },
  { year: '2024', title: 'Industry Recognition', description: 'Recognized as a top digital agency with multiple awards and featured in industry publications.' },
  { year: '2025', title: 'Scaling New Heights', description: 'Expanding globally with clients across 10+ countries and launching new AI-powered services.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif' }}>
      <Header activePage="About Us" />

      {/* Hero */}
      <section className="pt-[70px] relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0F0FF 0%, #F7FAFC 60%, #FFFFFF 100%)' }}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6C4CFF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#8B5CFF]/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28 text-center relative z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#6C4CFF] mb-3 sm:mb-4">
            About Us
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a2e] mb-4 sm:mb-6 leading-tight">
            We Build Digital{' '}
            <span className="text-[#6C4CFF]">Experiences</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-[#64748B] max-w-2xl mx-auto px-2">
            Larawans Digital is a full-service digital agency helping businesses establish a powerful online presence through stunning websites, mobile apps, and result-driven marketing strategies.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16" style={{ background: 'linear-gradient(135deg, #1A202C 0%, #2D3748 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 md:gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <stat.icon size={18} className="sm:hidden text-[#6C4CFF]" />
                  <stat.icon size={22} className="hidden sm:block text-[#6C4CFF]" />
                </div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-0.5 sm:mb-1">{stat.value}</p>
                <p className="text-xs sm:text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <AnimatedSection>
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#6C4CFF] mb-2 sm:mb-3">Our Story</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4 sm:mb-6">From a Small Idea to a Growing Agency</h2>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-4">
                  Larawans Digital started with a simple belief: every business deserves a powerful online presence. Founded in 2020, we began as a small team of passionate designers and developers with a shared vision.
                </p>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-4">
                  Today, we have grown into a full-service digital agency serving 85+ clients across India and beyond. Our team of 15+ experts specializes in web development, mobile apps, digital marketing, and brand design.
                </p>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                  What sets us apart is our commitment to quality, transparency, and results. We do not just build websites — we build digital experiences that convert visitors into customers and drive real business growth.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#6C4CFF]/10 to-[#8B5CFF]/5 rounded-2xl p-8 sm:p-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm">
                    <p className="text-2xl sm:text-3xl font-bold text-[#6C4CFF]">5+</p>
                    <p className="text-xs sm:text-sm text-[#64748B] mt-1">Years Experience</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm">
                    <p className="text-2xl sm:text-3xl font-bold text-[#EC4899]">15+</p>
                    <p className="text-xs sm:text-sm text-[#64748B] mt-1">Team Members</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm">
                    <p className="text-2xl sm:text-3xl font-bold text-[#3B82F6]">10+</p>
                    <p className="text-xs sm:text-sm text-[#64748B] mt-1">Countries Served</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm">
                    <p className="text-2xl sm:text-3xl font-bold text-[#10B981]">98%</p>
                    <p className="text-xs sm:text-sm text-[#64748B] mt-1">Client Retention</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection>
        <section className="py-14 md:py-20 bg-[#FAFBFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#6C4CFF] mb-2 sm:mb-3">Our Values</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e]">What We Stand For</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {values.map((value) => (
                <div key={value.title} className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 sm:mb-4" style={{ backgroundColor: `${value.color}15` }}>
                    <value.icon size={20} style={{ color: value.color }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1a1a2e] mb-2">{value.title}</h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Team */}
      <AnimatedSection>
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#6C4CFF] mb-2 sm:mb-3">Our Team</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e]">Meet the People Behind the Magic</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {team.map((member) => (
                <div key={member.name} className="bg-[#FAFBFF] rounded-xl p-5 sm:p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white text-sm sm:text-base font-bold shrink-0" style={{ backgroundColor: member.color }}>
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#1a1a2e]">{member.name}</h3>
                      <p className="text-xs sm:text-sm text-[#6C4CFF] font-medium">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Timeline */}
      <AnimatedSection>
        <section className="py-14 md:py-20 bg-[#FAFBFF]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#6C4CFF] mb-2 sm:mb-3">Our Journey</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e]">Milestones Along the Way</h2>
            </div>
            <div className="relative">
              <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6C4CFF] to-[#8B5CFF]/20" />
              <div className="space-y-8 sm:space-y-12">
                {milestones.map((milestone) => (
                  <div key={milestone.year} className="relative pl-12 sm:pl-20">
                    <div className="absolute left-2.5 sm:left-6.5 top-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#6C4CFF] border-4 border-[#FAFBFF]" />
                    <span className="text-xs sm:text-sm font-bold text-[#6C4CFF]">{milestone.year}</span>
                    <h3 className="text-base sm:text-lg font-bold text-[#1a1a2e] mt-1">{milestone.title}</h3>
                    <p className="text-xs sm:text-sm text-[#64748B] mt-1 leading-relaxed">{milestone.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <section className="py-14 sm:py-16 md:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #070B2B 0%, #101B5A 50%, #1A1443 100%)' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#6C4CFF]/10 rounded-full blur-[120px]" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-5 leading-tight px-2">
              Want to Work With Us?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/50 max-w-xl mx-auto mb-8 sm:mb-10 px-2">
              Join our growing list of satisfied clients. Let us discuss how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <Link href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white bg-[#6C4CFF] hover:bg-[#5B3DE6] px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg transition-all duration-200 hover:shadow-[0_6px_20px_rgba(108,76,255,0.4)]">
                Get in Touch <ArrowRight size={18} />
              </Link>
              <Link href="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-[#6C4CFF] bg-white hover:bg-gray-50 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg transition-all duration-200">
                View Our Work <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}