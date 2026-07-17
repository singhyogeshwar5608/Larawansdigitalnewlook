'use client';

import { useState } from 'react';
import Header from '@/components/landing/Header';
import PricingHero from '@/components/pricing/PricingHero';
import Sidebar, { categories } from '@/components/pricing/Sidebar';
import PricingCard from '@/components/pricing/PricingCard';
import CTABanner from '@/components/pricing/CTABanner';
import TrustBadges from '@/components/pricing/TrustBadges';
import PricingFooter from '@/components/pricing/PricingFooter';
import {
  LayoutGrid,
  ShoppingCart,
  Briefcase,
  GraduationCap,
  Hospital,
  Building2,
  Code2,
} from 'lucide-react';

const allPackages = [
  {
    id: 'business',
    icon: LayoutGrid,
    title: 'Business Website',
    description: 'Perfect for startups and small businesses looking to establish their online presence.',
    price: '₹4,999',
    features: [
      '5–10 Pages',
      'Responsive Design',
      'Free SSL Certificate',
      'Contact Form',
      'Basic SEO Setup',
      '1 Month Free Support',
    ],
    delivery: 'Delivery in 5–7 Working Days',
    highlighted: false,
    category: 'business',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-Commerce Website',
    description: 'Complete online store with payment gateway, inventory management and order tracking.',
    price: '₹14,999',
    features: [
      'Unlimited Products',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Tracking System',
      'Admin Dashboard',
      'Advanced SEO',
      '6 Months Free Support',
    ],
    delivery: 'Delivery in 10–15 Working Days',
    highlighted: true,
    badge: 'Popular',
    category: 'ecommerce',
  },
  {
    id: 'portfolio',
    icon: Briefcase,
    title: 'Portfolio Website',
    description: 'Showcase your work beautifully with a stunning portfolio website designed for professionals.',
    price: '₹3,999',
    features: [
      '3–7 Pages',
      'Image/Video Gallery',
      'Lightbox Effect',
      'Contact Form',
      'Social Media Integration',
      'Basic SEO',
    ],
    delivery: 'Delivery in 3–5 Working Days',
    highlighted: false,
    category: 'portfolio',
  },
  {
    id: 'school',
    icon: GraduationCap,
    title: 'School / College Website',
    description: 'Comprehensive website for educational institutions with admission and result management.',
    price: '₹7,999',
    features: [
      '10–15 Pages',
      'Admission Portal',
      'Result Management',
      'Notice Board',
      'Gallery Section',
      'Staff Directory',
      '3 Months Free Support',
    ],
    delivery: 'Delivery in 7–10 Working Days',
    highlighted: false,
    category: 'school',
  },
  {
    id: 'hospital',
    icon: Hospital,
    title: 'Hospital / Clinic Website',
    description: 'Professional healthcare website with appointment booking and patient management features.',
    price: '₹6,999',
    features: [
      '8–12 Pages',
      'Appointment Booking',
      'Doctor Profiles',
      'Department Listing',
      'Patient Reviews',
      'Emergency Contact',
      '3 Months Free Support',
    ],
    delivery: 'Delivery in 7–10 Working Days',
    highlighted: false,
    category: 'hospital',
  },
  {
    id: 'custom',
    icon: Code2,
    title: 'Custom Web Application',
    description: 'Fully customized web application tailored to your unique business requirements and workflows.',
    price: '₹29,999+',
    priceNote: 'Custom Quote',
    features: [
      'Custom Features',
      'Database Integration',
      'API Development',
      'User Authentication',
      'Admin Panel',
      'Third-party Integrations',
      'Performance Optimization',
      '12 Months Free Support',
    ],
    delivery: 'Delivery in 20–30 Working Days',
    highlighted: false,
    category: 'custom',
  },
];

export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPackages =
    activeCategory === 'all'
      ? allPackages
      : allPackages.filter((p) => p.category === activeCategory);

  const activeLabel = categories.find((c) => c.id === activeCategory)?.label || 'All Packages';

  return (
    <div className="min-h-screen bg-[#FAFBFF]" style={{ fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif' }}>
      <Header activePage="Pricing" />
      <PricingHero />

      {/* Main Content: Sidebar + Grid */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-6 lg:gap-8 items-start">
            <Sidebar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

            <div className="flex-1 min-w-0">
              {/* Section Title */}
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111827] mb-1 sm:mb-2">
                  {activeLabel}
                </h2>
                <p className="text-sm text-[#6B7280]">
                  {filteredPackages.length} package{filteredPackages.length !== 1 ? 's' : ''} available
                </p>
              </div>

              {/* Pricing Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {filteredPackages.map((pkg) => (
                  <PricingCard
                    key={pkg.id}
                    icon={pkg.icon}
                    title={pkg.title}
                    description={pkg.description}
                    price={pkg.price}
                    priceNote={pkg.priceNote}
                    features={pkg.features}
                    delivery={pkg.delivery}
                    highlighted={pkg.highlighted}
                    badge={pkg.badge}
                  />
                ))}
              </div>

              {/* Empty State */}
              {filteredPackages.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-lg text-[#6B7280]">No packages found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <TrustBadges />
      <PricingFooter />
    </div>
  );
}