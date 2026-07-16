'use client';

import { MessageSquare, Lightbulb, PenTool, Code, Rocket, BarChart3 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We understand your business goals, target audience, and market landscape to create a tailored digital strategy.',
    icon: MessageSquare,
    color: '#6C4CFF',
  },
  {
    number: '02',
    title: 'Research & Planning',
    description: 'In-depth research on competitors, keywords, and trends to build a solid foundation for your project.',
    icon: Lightbulb,
    color: '#EC4899',
  },
  {
    number: '03',
    title: 'Design & Prototype',
    description: 'Our designers craft visually stunning, user-centric designs and interactive prototypes for your review.',
    icon: PenTool,
    color: '#3B82F6',
  },
  {
    number: '04',
    title: 'Development & Testing',
    description: 'Expert developers build your solution with clean code, followed by rigorous testing for quality assurance.',
    icon: Code,
    color: '#F59E0B',
  },
  {
    number: '05',
    title: 'Launch & Deploy',
    description: 'We deploy your project to production with optimized performance and seamless user experience.',
    icon: Rocket,
    color: '#10B981',
  },
  {
    number: '06',
    title: 'Optimize & Scale',
    description: 'Continuous monitoring, optimization, and scaling to ensure sustained growth and ROI.',
    icon: BarChart3,
    color: '#8B5CF6',
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6C4CFF] mb-3">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
            Transparent. Simple. Effective.
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            Our proven 6-step process ensures every project is delivered on time, on budget, and exceeds expectations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6C4CFF] via-[#EC4899] via-[#3B82F6] via-[#F59E0B] via-[#10B981] to-[#8B5CF6] opacity-20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Step Circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110 relative z-10"
                  style={{
                    backgroundColor: `${step.color}15`,
                    border: `2px solid ${step.color}30`,
                  }}
                >
                  <step.icon size={24} style={{ color: step.color }} />
                </div>

                {/* Step Number */}
                <div
                  className="text-xs font-bold mb-2 tracking-wider"
                  style={{ color: step.color }}
                >
                  STEP {step.number}
                </div>

                <h3 className="text-base font-bold text-[#1a1a2e] mb-2">{step.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}