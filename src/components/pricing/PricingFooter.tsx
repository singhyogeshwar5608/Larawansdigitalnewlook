'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const footerLinks: Record<string, { label: string; href: string }[]> = {
  'Quick Links': [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ],
  'Services': [
    { label: 'Website Development', href: '/services#website-development' },
    { label: 'Mobile App Development', href: '/services#mobile-app-development' },
    { label: 'Digital Marketing', href: '/services#digital-marketing' },
    { label: 'Brand Identity', href: '/services#brand-identity' },
    { label: 'SEO Services', href: '/services#seo-services' },
  ],
  'Contact': [
    { label: 'hello@larawans.com', href: 'mailto:hello@larawans.com' },
    { label: '+91 98765 43210', href: 'tel:+919876543210' },
    { label: 'New Delhi, India', href: 'https://maps.google.com/?q=New+Delhi,India', target: true },
  ],
};

const socialLinks = [
  { icon: '𝕏', href: 'https://twitter.com/larawansdigital', label: 'Twitter' },
  { icon: 'in', href: 'https://linkedin.com/company/larawansdigital', label: 'LinkedIn' },
  { icon: 'f', href: 'https://facebook.com/larawansdigital', label: 'Facebook' },
  { icon: '📷', href: 'https://instagram.com/larawansdigital', label: 'Instagram' },
];

export default function PricingFooter() {
  return (
    <footer style={{ background: 'linear-gradient(135deg, #070B2B 0%, #101B5A 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-lg font-bold text-white">LARAWANS</span>
              <span className="text-lg font-medium text-white/50"> DIGITAL</span>
            </Link>
            <p className="text-xs sm:text-sm text-white/40 leading-relaxed mb-4 sm:mb-6 max-w-xs">
              We help businesses grow online with stunning websites, mobile apps and result-driven marketing strategies.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#6C4CFF] hover:text-white transition-all duration-200 text-xs sm:text-sm font-bold"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-4 sm:mb-5 uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.target ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-xs sm:text-sm text-white/40 hover:text-[#8B5CFF] transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      {title === 'Contact' ? (
                        <span>{link.label}</span>
                      ) : (
                        <>
                          <span>{link.label}</span>
                          <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] sm:text-xs text-white/30">
            © 2025 Larawans Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            {[
              { label: 'Privacy Policy', href: '#' },
              { label: 'Terms of Service', href: '#' },
              { label: 'Sitemap', href: '/sitemap.xml' },
            ].map((link) => (
              <a key={link.label} href={link.href} className="text-[10px] sm:text-xs text-white/30 hover:text-white/60 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}