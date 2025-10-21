'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, Award, Crown } from 'lucide-react';

export default function RanksDesignBPage() {
  const ranks = [
    { rank: 'Agent', income: '$42K', requirements: 'Get licensed & make your first sale', color: 'cyan' },
    { rank: 'Senior Agent', income: '$87K', requirements: '10 personal sales + 2 recruits', color: 'blue' },
    { rank: 'Team Leader', income: '$145K', requirements: '$50K team volume + 5 active agents', color: 'teal' },
    { rank: 'Director', income: '$285K', requirements: '$150K team volume + 3 Team Leaders', color: 'cyan' },
    { rank: 'Regional Director', income: '$580K', requirements: '$500K team volume + 3 Directors', color: 'blue' },
    { rank: 'Executive Director', income: '$1.2M+', requirements: '$2M+ team volume + 5 Regional Directors', color: 'teal' }
  ];

  return (
    <div className="overflow-hidden">
      <div className="parallax-bg parallax-blur bg-overlay">
        <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=3840&q=80" alt="Ranks" fill className="object-cover" priority />
      </div>

      <section className="min-h-screen flex pt-32 pb-20 md:pt-40 md:pb-32 relative items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs uppercase tracking-wider text-white/80 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Career Advancement
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
              Your Path to <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Financial Freedom</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Clear milestones, achievable goals, and unlimited earning potential. Every rank comes with increased income and lifestyle rewards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black/40 to-black/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Rank Advancement System</h2>
            <p className="text-lg text-white/70">Six levels of achievement, each with clear requirements and rewards</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ranks.map((r, i) => (
              <div key={i} className="glass rounded-2xl p-8 card-hover">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-${r.color}-600/20 text-${r.color}-400 mb-4`}>
                  {i >= 3 ? <Crown className="w-4 h-4" /> : <Award className="w-4 h-4" />}
                  {r.rank}
                </div>
                <div className="text-4xl font-bold text-white mb-2">{r.income}</div>
                <div className="text-sm text-white/60 mb-4">Average annual income</div>
                <div className="text-sm text-white/70 leading-relaxed">{r.requirements}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Start Your Climb</h2>
          <p className="text-lg text-white/70 mb-8">Begin your journey to financial freedom today</p>
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

