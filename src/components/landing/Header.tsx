'use client';

import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = ['Home', 'Services', 'Portfolio', 'Industries', 'About Us', 'Blogs', 'Contact'];

export default function Header({
  scrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
}) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : 'bg-white'
      }`}
      style={{ height: '70px' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 shrink-0">
          <span className="text-lg font-bold text-[#2D3748] tracking-tight">LARAWANS</span>
          <span className="text-lg font-medium text-[#718096] tracking-tight">DIGITAL</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-[#4A5568] hover:text-[#6C4CFF] transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-[#6C4CFF]/5"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#6C4CFF] hover:bg-[#5B3DE6] px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-[0_4px_15px_rgba(108,76,255,0.4)]"
          >
            Get Free Consultation
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {mobileMenuOpen ? <X size={24} className="text-[#2D3748]" /> : <Menu size={24} className="text-[#2D3748]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="block text-sm font-medium text-[#4A5568] hover:text-[#6C4CFF] py-3 border-b border-gray-50 transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              className="mt-4 w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#6C4CFF] hover:bg-[#5B3DE6] px-5 py-2.5 rounded-lg transition-all duration-200"
            >
              Get Free Consultation
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}