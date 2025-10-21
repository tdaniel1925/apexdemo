'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, Users, TrendingUp, Shield, Rocket } from 'lucide-react';

export default function TeamBuildingDesignBPage() {
  return (
    <div className="overflow-hidden">
      <div className="parallax-bg parallax-blur bg-overlay">
        <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=3840&q=80" alt="Team Building" fill className="object-cover" priority />
      </div>

      <section className="min-h-screen flex pt-32 pb-20 md:pt-40 md:pb-32 relative items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs uppercase tracking-wider text-white/80 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Build Your Empire
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
              Team Building <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">System</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Build once, earn forever. Our proven team-building system helps you create passive income streams through unlimited team growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black/40 to-black/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Recruit & Train', desc: 'Simple system to find, recruit, and train new team members' },
              { icon: TrendingUp, title: 'Earn Overrides', desc: 'Get paid 5-20% on everything your team sells' },
              { icon: Shield, title: 'Lifetime Residuals', desc: 'Build passive income that compounds monthly' },
              { icon: Rocket, title: 'Unlimited Growth', desc: 'No caps on team size or earning potential' }
            ].map((item, i) => (
              <div key={i} className="glass rounded-2xl p-8 card-hover">
                <item.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Start Building Your Team</h2>
          <p className="text-lg text-white/70 mb-8">Learn our proven system for recruiting and building successful teams</p>
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

