'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, Trophy, Gift, Car, Plane, Users, Target } from 'lucide-react';

export default function RewardsDesignBPage() {
  return (
    <div className="overflow-hidden">
      <div className="parallax-bg parallax-blur bg-overlay">
        <Image src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1920&q=75" alt="Rewards" fill className="object-cover" />
      </div>

      <section className="min-h-screen flex pt-32 pb-20 md:pt-40 md:pb-32 relative items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs uppercase tracking-wider text-white/80 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Luxury Rewards & Lifestyle
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
              Live the Life <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">You Deserve</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Earn more than just income. Apex rewards top performers with dream cars, luxury trips, and life-changing bonuses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black/40 to-black/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Exclusive Rewards Program</h2>
            <p className="text-lg text-white/70">Top performers earn incredible bonuses and lifestyle perks</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Car, title: 'Dream Car Program', desc: '$500-$1,500/month car allowance for qualified leaders. Drive your dream luxury vehicle.' },
              { icon: Plane, title: 'Luxury Trips', desc: 'All-expenses-paid trips to exotic destinations. Hawaii, Europe, Caribbean and more.' },
              { icon: Gift, title: 'Performance Bonuses', desc: 'Monthly cash bonuses of $5K-$50K+ for hitting production milestones.' },
              { icon: Trophy, title: 'Leadership Awards', desc: 'Annual recognition events with $10K-$100K+ awards for top leaders.' },
              { icon: Users, title: 'VIP Events', desc: 'Exclusive access to mastermind retreats, conferences, and networking events.' },
              { icon: Target, title: 'Stock Options', desc: 'Equity participation for executive-level leaders. Share in company growth.' }
            ].map((reward, i) => (
              <div key={i} className="glass rounded-2xl p-8 card-hover">
                <reward.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{reward.title}</h3>
                <p className="text-white/70 text-sm">{reward.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Start Earning Rewards</h2>
          <p className="text-lg text-white/70 mb-8">Join Apex and start building the lifestyle you&apos;ve always wanted</p>
          <Link href="/design-b/contact">
            <button className="btn-glow glass-strong text-white font-medium rounded-full px-8 py-4 text-lg transition-all hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                Join Now
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

