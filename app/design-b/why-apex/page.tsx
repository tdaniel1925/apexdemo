'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WhyApexDesignBPage() {
  return (
    <div className="overflow-hidden">
      <div className="parallax-bg parallax-blur bg-overlay">
        <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=3840&q=80" alt="Why Apex" fill className="object-cover" priority />
      </div>

      <section className="min-h-screen flex pt-32 pb-20 md:pt-40 md:pb-32 relative items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs uppercase tracking-wider text-white/80 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              The Apex Difference
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
              Why <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Apex</span> is Different
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8">
              We&apos;ve solved every problem plaguing traditional insurance sales with cutting-edge AI technology, proven systems, and unlimited growth potential.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black/40 to-black/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'AI-powered lead generation that works 24/7',
              'No cold calling or buying expensive leads',
              'Unlimited team-building and passive income',
              'Top-tier training and personal mentorship',
              '85% commission on personal sales',
              'No commission caps or income limits',
              'Done-for-you marketing materials',
              'A-rated carrier partnerships',
              'Weekly coaching with top earners',
              '24/7 support and community',
              'Dream car and luxury trip rewards',
              'Proven system with 10,000+ successful agents'
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white/80">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Experience the Apex Advantage</h2>
          <p className="text-lg text-white/70 mb-8">Join the revolution in insurance sales</p>
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

