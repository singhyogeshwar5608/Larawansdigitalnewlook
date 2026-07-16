'use client';

import { Play, Eye, Plus } from 'lucide-react';

const videos = [
  { title: 'Website Redesign', duration: '0:45', views: '1.2K', color: '#6C4CFF' },
  { title: 'App Development', duration: '0:52', views: '890', color: '#EC4899' },
  { title: 'Brand Strategy', duration: '1:10', views: '2.1K', color: '#3B82F6' },
  { title: 'SEO Results', duration: '0:38', views: '650', color: '#10B981' },
  { title: 'UI/UX Design', duration: '0:55', views: '1.5K', color: '#F59E0B' },
  { title: 'Social Media', duration: '1:02', views: '780', color: '#8B5CF6' },
  { title: 'E-Commerce Setup', duration: '0:48', views: '1.1K', color: '#EF4444' },
  { title: 'Performance Audit', duration: '0:42', views: '920', color: '#14B8A6' },
];

export default function VideoReels() {
  return (
    <section className="py-20 bg-[#FAFBFF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6C4CFF] mb-3">Video Reels</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] flex items-center gap-3">
              See Our Work In Action
              <span className="w-8 h-8 rounded-full bg-[#6C4CFF] flex items-center justify-center">
                <Plus size={16} className="text-white" />
              </span>
            </h2>
          </div>
        </div>

        {/* Video Carousel */}
        <div className="overflow-x-auto no-scrollbar -mx-6 px-6 pb-4">
          <div className="flex gap-4" style={{ minWidth: 'max-content' }}>
            {videos.map((video, index) => (
              <div
                key={index}
                className="group cursor-pointer w-48 md:w-56 shrink-0"
              >
                <div
                  className="relative rounded-xl overflow-hidden aspect-[9/16] transition-all duration-300 group-hover:shadow-xl"
                  style={{ background: `linear-gradient(135deg, ${video.color}20, ${video.color}40)` }}
                >
                  {/* Video placeholder content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
                    <div className="w-20 h-20 border-2 border-white/20 rounded-full" />
                    <div className="w-24 h-2 bg-white/15 rounded" />
                    <div className="w-16 h-2 bg-white/10 rounded" />
                    <div className="grid grid-cols-3 gap-1 w-16 mt-2">
                      {[12, 18, 8, 22, 14, 10].map((h, i) => (
                        <div key={i} className="bg-white/10 rounded-sm" style={{ height: `${h}px` }} />
                      ))}
                    </div>
                  </div>
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                      <Play size={16} className="text-[#1a1a2e] ml-0.5" fill="#1a1a2e" />
                    </div>
                  </div>
                  {/* Duration badge */}
                  <div className="absolute bottom-3 left-3 bg-black/60 text-white text-[10px] font-medium px-2 py-0.5 rounded-md">
                    {video.duration}
                  </div>
                </div>
                <div className="mt-2.5">
                  <h3 className="text-sm font-semibold text-[#1a1a2e] group-hover:text-[#6C4CFF] transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Eye size={12} className="text-[#94A3B8]" />
                    <span className="text-xs text-[#94A3B8]">{video.views} views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}