'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, AlertCircle } from 'lucide-react';

export default function WhyInsuranceSucksDesignBPage() {
  const problems = [
    { title: 'Cold Calling Nightmare', desc: '100+ dials per day, 95% rejection rate, soul-crushing prospecting that destroys confidence.' },
    { title: 'No Lead Support', desc: 'Buy your own leads at $5-$50 each. Terrible quality with no marketing support.' },
    { title: 'Limited Income', desc: 'Capped commissions, no team building. Average $30K-$50K/year working 60-hour weeks.' },
    { title: 'Complex Products', desc: '30+ page policies that are hard to explain and harder to sell.' },
    { title: 'No Training', desc: '2-day boot camp then you&apos;re on your own. Pay for additional training.' },
    { title: 'High Failure Rate', desc: '90% quit within first year due to broken systems and constant rejection.' }
  ];

  return (
    <div className="overflow-hidden">
      <div className="parallax-bg parallax-blur bg-overlay">
        <Image src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=3840&q=80" alt="Burnout" fill className="object-cover" priority />
      </div>

      <section className="min-h-screen flex pt-32 pb-20 md:pt-40 md:pb-32 relative items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs uppercase tracking-wider text-white/80 mb-6">
              <AlertCircle className="w-3.5 h-3.5" />
              The Hard Truth
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
              Insurance Sales <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Burnout</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8">
              The traditional insurance sales model is broken. Here&apos;s what you&apos;re up against every single day...
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black/40 to-black/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, i) => (
              <div key={i} className="glass rounded-2xl p-8 card-hover border-red-500/20">
                <h3 className="text-xl font-bold mb-3 text-red-400">{problem.title}</h3>
                <p className="text-white/70 text-sm">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">There&apos;s a Better Way</h2>
          <p className="text-lg text-white/70 mb-8">Apex has solved every one of these problems with proven systems and AI technology</p>
          <Link href="/design-b/why-apex">
            <button className="btn-glow glass-strong text-white font-medium rounded-full px-8 py-4 text-lg transition-all hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                See The Solution
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

