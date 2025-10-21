'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Star, ArrowRight } from 'lucide-react';

export default function SuccessStoriesDesignBPage() {
  const testimonials = [
    { name: 'Sarah Johnson', role: 'Diamond Director', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80', quote: 'I went from struggling to pay bills to earning $15K/month in just 6 months. The AI tools changed everything for me.', income: '$180K/year' },
    { name: 'Marcus Williams', role: 'Executive Leader', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', quote: "The AI tools changed everything. I haven't made a cold call in months and I'm closing more deals than ever.", income: '$240K/year' },
    { name: 'Jennifer Lee', role: 'Regional Director', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80', quote: 'Built a team of 50 in my first year. This company is the real deal. The support and training are incredible.', income: '$425K/year' }
  ];

  return (
    <div className="overflow-hidden">
      <div className="parallax-bg parallax-blur bg-overlay">
        <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=3840&q=80" alt="Success" fill className="object-cover" priority />
      </div>

      <section className="min-h-screen flex pt-32 pb-20 md:pt-40 md:pb-32 relative items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs uppercase tracking-wider text-white/80 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Real People, Real Results
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
              Success <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Hear from agents who transformed their lives and achieved financial freedom with Apex Affinity Group.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black/40 to-black/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="glass rounded-2xl p-8 card-hover">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xl sm:text-2xl text-white mb-6 leading-relaxed">&quot;{t.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  <Image src={t.avatar} alt={t.name} width={64} height={64} className="rounded-full object-cover" />
                  <div>
                    <div className="text-lg font-semibold text-white">{t.name}</div>
                    <div className="text-white/60">{t.role}</div>
                    <div className="text-cyan-400 font-semibold">{t.income}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Write Your Success Story</h2>
          <p className="text-lg text-white/70 mb-8">Join thousands of agents building their dream lives</p>
          <Link href="/design-b/contact">
            <button className="btn-glow glass-strong text-white font-medium rounded-full px-8 py-4 text-lg transition-all hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

