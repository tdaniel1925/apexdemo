'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, DollarSign, TrendingUp, Users, CheckCircle2, ArrowRight, Rocket } from 'lucide-react';

export default function OpportunityDesignBPage() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Background */}
      <div className="parallax-bg parallax-blur bg-overlay">
        <Image
          src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1920&q=75"
          alt="Financial opportunity background"
          fill
          className="object-cover"
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex pt-32 pb-20 md:pt-40 md:pb-32 relative items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs uppercase tracking-wider text-white/80 mb-6 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
              <Sparkles className="w-3.5 h-3.5" />
              Financial Freedom Awaits
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter mb-6 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
              Unlock Unlimited <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Income Potential</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
              Apex Affinity Group offers a unique blend of cutting-edge AI tools, top-tier insurance products, and a powerful team-building model designed for your financial freedom.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
              <Link href="/design-b/contact">
                <button className="btn-glow glass-strong text-white font-medium rounded-full px-8 py-4 text-base transition-all hover:scale-105 group w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    Start Earning
                    <Rocket className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </Link>
              <a href="#income">
                <button className="glass text-white/90 font-medium rounded-full px-8 py-4 text-base transition-all hover:bg-white/10 w-full sm:w-auto">
                  See Income Examples
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Income Streams */}
      <section className="py-20 bg-gradient-to-b from-black/40 to-black/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Three Ways to Earn at Apex
            </h2>
            <p className="text-lg text-white/70">
              Multiple income streams = financial security
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 card-hover">
              <DollarSign className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Personal Sales</h3>
              <p className="text-white/70 mb-4">
                Earn up to <span className="font-bold text-cyan-400">85% commission</span> on every policy you sell.
              </p>
              <ul className="space-y-2 text-white/60">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Life insurance: $500-$5,000 per sale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Annuities: $2,000-$20,000 per sale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>No commission caps or limits</span>
                </li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-8 card-hover">
              <Users className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Team Overrides</h3>
              <p className="text-white/70 mb-4">
                Earn <span className="font-bold text-blue-400">5-20% overrides</span> on everything your team sells.
              </p>
              <ul className="space-y-2 text-white/60">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Passive income that compounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Earn on 3+ levels deep</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>No limit on team size</span>
                </li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-8 card-hover">
              <TrendingUp className="w-12 h-12 text-teal-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Bonuses & Rewards</h3>
              <p className="text-white/70 mb-4">
                Extra cash, trips, and <span className="font-bold text-teal-400">car bonuses</span> for top performers.
              </p>
              <ul className="space-y-2 text-white/60">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>Monthly production bonuses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>Luxury trips and experiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>Dream car program</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Income Examples */}
      <section id="income" className="py-20 bg-gradient-to-b from-black/60 to-black/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Real Income Examples
            </h2>
            <p className="text-lg text-white/70">
              These are actual average earnings by rank (2024 data)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { rank: 'Agent', income: '$42,000', time: 'Year 1' },
              { rank: 'Senior Agent', income: '$87,000', time: '6-12 months' },
              { rank: 'Team Leader', income: '$145,000', time: '12-18 months' },
              { rank: 'Director', income: '$285,000', time: '18-24 months' },
              { rank: 'Regional Director', income: '$580,000', time: '2-3 years' },
              { rank: 'Executive Director', income: '$1.2M+', time: '3-5 years' }
            ].map((tier, index) => (
              <div key={index} className="glass rounded-xl p-6 card-hover">
                <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-cyan-600/20 text-cyan-400 mb-3">
                  {tier.rank}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{tier.income}</div>
                <div className="text-sm text-white/60">Average timeline: {tier.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Ready to Start Building Wealth?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Join thousands of agents earning life-changing income
          </p>
          <Link href="/design-b/contact">
            <button className="btn-glow glass-strong text-white font-medium rounded-full px-8 py-4 text-lg transition-all hover:scale-105 group">
              <span className="flex items-center justify-center gap-2">
                Get Started Today
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

