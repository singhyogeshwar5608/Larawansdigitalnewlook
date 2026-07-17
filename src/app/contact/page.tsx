'use client';

import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/landing/Header';
import {
  ArrowRight, Mail, Phone, MapPin, Clock, MessageCircle,
  Send, CheckCircle, Globe, Star, Shield, Zap
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

const contactInfo = [
  { icon: Mail, title: 'Email Us', value: 'hello@larawansdigital.com', description: 'We reply within 2 hours', color: '#6C4CFF' },
  { icon: Phone, title: 'Call Us', value: '+91 98765 43210', description: 'Mon-Sat, 10AM-7PM IST', color: '#3B82F6' },
  { icon: MapPin, title: 'Visit Us', value: 'New Delhi, India', description: 'By appointment only', color: '#10B981' },
  { icon: MessageCircle, title: 'WhatsApp', value: '+91 98765 43210', description: 'Quick response guaranteed', color: '#25D366' },
];

const services = [
  'Website Development',
  'Mobile App Development',
  'E-Commerce Website',
  'Digital Marketing',
  'SEO Optimization',
  'Brand Identity Design',
  'Custom Web Application',
  'Landing Page Design',
  'UI/UX Design',
  'Other',
];

const faqs = [
  { question: 'How quickly can you start my project?', answer: 'We typically start within 2-3 business days after the project scope and requirements are finalized. For urgent projects, we offer expedited onboarding.' },
  { question: 'What is your pricing structure?', answer: 'Our pricing is project-based and depends on the scope, complexity, and timeline. We offer flexible packages starting from Rs 3,999. Visit our pricing page for detailed information.' },
  { question: 'Do you provide post-launch support?', answer: 'Yes! All our projects come with free support ranging from 1-12 months depending on the package. We also offer extended support plans for ongoing maintenance.' },
  { question: 'Can I see your previous work?', answer: 'Absolutely! Check out our portfolio page to see our latest projects. We can also share case studies and client references during our consultation call.' },
  { question: 'What technologies do you use?', answer: 'We work with modern technologies including React, Next.js, Node.js, Python, React Native, Flutter, and more. We choose the best tech stack based on your project requirements.' },
];

export default function ContactPageWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center"><div className="w-8 h-8 border-3 border-[#6C4CFF] border-t-transparent rounded-full animate-spin" /></div>}>
      <ContactPage />
    </Suspense>
  );
}

function ContactPage() {
  const searchParams = useSearchParams();
  const packageFromPricing = searchParams.get('package') || '';

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (packageFromPricing) {
      setFormData((prev) => ({
        ...prev,
        service: packageFromPricing.includes('E-Commerce') ? 'E-Commerce Website' :
                packageFromPricing.includes('Portfolio') ? 'Portfolio Website' :
                packageFromPricing.includes('School') || packageFromPricing.includes('College') ? 'Website Development' :
                packageFromPricing.includes('Hospital') || packageFromPricing.includes('Clinic') ? 'Website Development' :
                packageFromPricing.includes('Custom') ? 'Custom Web Application' :
                'Website Development',
        message: `Hi, I'm interested in the ${packageFromPricing} package. Please share more details and pricing information.`,
      }));
    }
  }, [packageFromPricing]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif' }}>
      <Header activePage="Contact" />

      {/* Hero */}
      <section className="pt-[70px] relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0F0FF 0%, #F7FAFC 60%, #FFFFFF 100%)' }}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6C4CFF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#8B5CFF]/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28 text-center relative z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#6C4CFF] mb-3 sm:mb-4">
            Contact Us
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a2e] mb-4 sm:mb-6 leading-tight">
            Let&apos;s Start a{' '}
            <span className="text-[#6C4CFF]">Conversation</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-[#64748B] max-w-2xl mx-auto px-2">
            Have a project in mind? Get in touch with us and let us discuss how we can help you achieve your business goals.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14 md:mb-20">
            {contactInfo.map((info) => {
              const href = info.title === 'Email Us' ? `mailto:${info.value}`
                : info.title === 'Call Us' ? `tel:${info.value.replace(/\s/g, '')}`
                : info.title === 'WhatsApp' ? `https://wa.me/919876543210?text=Hi, I'd like to discuss a project.`
                : 'https://maps.google.com/?q=New+Delhi,India';
              const isExternal = info.title === 'WhatsApp' || info.title === 'Visit Us';
              return (
                <a key={info.title} href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="block bg-[#FAFBFF] rounded-xl p-5 sm:p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center cursor-pointer">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4" style={{ backgroundColor: `${info.color}15` }}>
                    <info.icon size={20} style={{ color: info.color }} />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#1a1a2e] mb-1">{info.title}</h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#6C4CFF] mb-1">{info.value}</p>
                  <p className="text-[10px] sm:text-xs text-[#94A3B8]">{info.description}</p>
                </a>
              );
            })}
          </div>

          {/* Form + Map */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-2">Send Us a Message</h2>
              <p className="text-sm text-[#64748B] mb-6 sm:mb-8">Fill out the form below and we will get back to you within 2 hours.</p>

              {submitted ? (
                <div className="bg-[#10B981]/5 border border-[#10B981]/20 rounded-xl p-8 sm:p-12 text-center">
                  <CheckCircle size={48} className="text-[#10B981] mx-auto mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a2e] mb-2">Message Sent!</h3>
                  <p className="text-sm sm:text-base text-[#64748B] mb-6">Thank you for reaching out. We will get back to you within 2 hours.</p>
                  <button onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' }); }}
                    className="text-sm font-semibold text-[#6C4CFF] hover:underline">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#1a1a2e] mb-1.5">Full Name *</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#6C4CFF] focus:ring-2 focus:ring-[#6C4CFF]/10 transition-all"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#1a1a2e] mb-1.5">Email Address *</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#6C4CFF] focus:ring-2 focus:ring-[#6C4CFF]/10 transition-all"
                        placeholder="you@email.com" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#1a1a2e] mb-1.5">Phone Number</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#6C4CFF] focus:ring-2 focus:ring-[#6C4CFF]/10 transition-all"
                        placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#1a1a2e] mb-1.5">Service Interested In *</label>
                      <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#6C4CFF] focus:ring-2 focus:ring-[#6C4CFF]/10 transition-all bg-white">
                        <option value="">Select a service</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#1a1a2e] mb-1.5">Budget Range</label>
                    <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#6C4CFF] focus:ring-2 focus:ring-[#6C4CFF]/10 transition-all bg-white">
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under Rs 10,000</option>
                      <option value="10k-25k">Rs 10,000 - Rs 25,000</option>
                      <option value="25k-50k">Rs 25,000 - Rs 50,000</option>
                      <option value="50k-1l">Rs 50,000 - Rs 1,00,000</option>
                      <option value="1l+">Above Rs 1,00,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#1a1a2e] mb-1.5">Project Details *</label>
                    <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#6C4CFF] focus:ring-2 focus:ring-[#6C4CFF]/10 transition-all resize-none"
                      placeholder="Tell us about your project, goals, and any specific requirements..." />
                  </div>
                  <button type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white bg-[#6C4CFF] hover:bg-[#5B3DE6] px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg transition-all duration-200 hover:shadow-[0_6px_20px_rgba(108,76,255,0.4)]">
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Why Choose Us */}
              <div className="bg-[#FAFBFF] rounded-xl p-5 sm:p-6 border border-gray-100">
                <h3 className="text-base sm:text-lg font-bold text-[#1a1a2e] mb-4">Why Choose Us?</h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { icon: Zap, title: 'Quick Response', desc: 'We reply within 2 hours' },
                    { icon: Shield, title: '100% Secure', desc: 'Your data is safe with us' },
                    { icon: Star, title: 'Free Consultation', desc: 'No commitment required' },
                    { icon: Globe, title: 'Global Services', desc: 'Serving clients worldwide' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#6C4CFF]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon size={16} className="text-[#6C4CFF]" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-[#1a1a2e]">{item.title}</p>
                        <p className="text-[10px] sm:text-xs text-[#94A3B8]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-[#FAFBFF] rounded-xl p-5 sm:p-6 border border-gray-100">
                <h3 className="text-base sm:text-lg font-bold text-[#1a1a2e] mb-4">Office Hours</h3>
                <div className="space-y-2.5">
                  {[
                    { day: 'Monday - Friday', time: '10:00 AM - 7:00 PM' },
                    { day: 'Saturday', time: '10:00 AM - 2:00 PM' },
                    { day: 'Sunday', time: 'Closed' },
                  ].map((item) => (
                    <div key={item.day} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="text-xs sm:text-sm text-[#64748B]">{item.day}</span>
                      <span className="text-xs sm:text-sm font-medium text-[#1a1a2e]">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick CTA */}
              <div className="rounded-xl p-5 sm:p-6 text-white" style={{ background: 'linear-gradient(135deg, #6C4CFF 0%, #8B5CFF 100%)' }}>
                <h3 className="text-base sm:text-lg font-bold mb-2">Prefer a Quick Chat?</h3>
                <p className="text-sm text-white/70 mb-4">Reach out to us directly on WhatsApp for instant support.</p>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-[#6C4CFF] px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <AnimatedSection>
        <section className="py-14 md:py-20 bg-[#FAFBFF]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#6C4CFF] mb-2 sm:mb-3">FAQs</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e]">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left">
                    <span className="text-sm sm:text-base font-semibold text-[#1a1a2e] pr-4">{faq.question}</span>
                    <span className={`text-[#6C4CFF] shrink-0 transition-transform duration-200 ${openFaq === index ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  {openFaq === index && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
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
              Not Sure Where to Start?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/50 max-w-xl mx-auto mb-8 sm:mb-10 px-2">
              Book a free 30-minute strategy call with our experts. No obligations, just honest advice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <Link href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white bg-[#6C4CFF] hover:bg-[#5B3DE6] px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg transition-all duration-200 hover:shadow-[0_6px_20px_rgba(108,76,255,0.4)]">
                Explore Services <ArrowRight size={18} />
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