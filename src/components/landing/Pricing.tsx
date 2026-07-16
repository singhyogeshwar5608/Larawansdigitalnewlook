'use client';

import { useState } from 'react';
import { Check, Zap, Shield, Clock, Headphones } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '₹499',
    period: '/month',
    description: 'Perfect for startups',
    features: [
      '5 Pages Website',
      'Basic SEO Setup',
      'Mobile Responsive',
      '1 Month Support',
      'SSL Certificate',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '₹999',
    period: '/month',
    description: 'Best for growing businesses',
    features: [
      '15 Pages Website',
      'Advanced SEO',
      'Mobile App (Basic)',
      '6 Months Support',
      'Analytics Dashboard',
      'Weekly Reports',
      'Priority Support',
    ],
    highlighted: true,
  },
  {
    name: 'Business',
    price: '₹1,999',
    period: '/month',
    description: 'Advanced features for teams',
    features: [
      'Unlimited Pages',
      'Full SEO Suite',
      'Custom Mobile App',
      '24/7 Support',
      'Dedicated Manager',
      'Custom Integrations',
      'Monthly Reports',
      'A/B Testing',
    ],
    highlighted: false,
  },
];

const bottomFeatures = [
  { icon: Zap, title: 'Lightning Fast', desc: 'Optimized for speed and performance' },
  { icon: Shield, title: 'Secure & Reliable', desc: 'Enterprise-grade security built-in' },
  { icon: Clock, title: 'Quick Delivery', desc: 'Most projects delivered in 7 days' },
  { icon: Headphones, title: '24/7 Support', desc: 'Round the clock assistance' },
];

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #070B2B 0%, #101B5A 50%, #1A1443 100%)' }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#6C4CFF]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8B5CFF]/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8B5CFF] mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Solutions. Simple Subscription.
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-8">
            Choose Your Plan — Start free, upgrade anytime. All plans include 24/7 support.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white/10 rounded-lg p-1">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                billing === 'monthly' ? 'bg-[#6C4CFF] text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                billing === 'yearly' ? 'bg-[#6C4CFF] text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              Yearly <span className="text-[10px] text-[#10B981] ml-1">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? 'bg-[#1A1443] border-2 border-[#6C4CFF] shadow-[0_0_40px_rgba(108,76,255,0.2)]'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6C4CFF] text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-white/50">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  {billing === 'yearly' ? `₹${Math.round(parseInt(plan.price.replace(/[₹,]/g, '')) * 0.8).toLocaleString()}` : plan.price}
                </span>
                <span className="text-white/50 text-sm">{plan.period}</span>
              </div>

              <a
                href="#"
                className={`block text-center py-3 rounded-lg font-semibold text-sm transition-all duration-200 mb-6 ${
                  plan.highlighted
                    ? 'bg-[#6C4CFF] text-white hover:bg-[#5B3DE6] hover:shadow-[0_4px_15px_rgba(108,76,255,0.4)]'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                }`}
              >
                Get Started
              </a>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check size={16} className="text-[#6C4CFF] mt-0.5 shrink-0" />
                    <span className="text-sm text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 max-w-4xl mx-auto">
          {bottomFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                <feature.icon size={18} className="text-[#8B5CFF]" />
              </div>
              <p className="text-sm font-semibold text-white mb-1">{feature.title}</p>
              <p className="text-xs text-white/40">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}