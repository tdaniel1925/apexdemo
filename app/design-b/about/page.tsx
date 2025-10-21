'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function AboutDesignBPage() {
  return (
    <div className="overflow-hidden">
      <div className="parallax-bg parallax-blur bg-overlay">
        <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=75" alt="About" fill className="object-cover" />
      </div>

      <section className="min-h-screen flex pt-32 pb-20 md:pt-40 md:pb-32 relative items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs uppercase tracking-wider text-white/80 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Est. 2020 • 10,000+ Agents
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
              Built by Agents, <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">For Agents</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8">
              We understand the challenges of insurance sales because we&apos;ve been there. Our mission is to empower agents with cutting-edge AI technology and proven systems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black/40 to-black/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Meet Bill Propper, CEO & Founder</h2>
              <div className="space-y-4 text-white/70">
                <p>After 15 years in the insurance industry, Bill Propper saw a broken system. Talented agents were failing not because they lacked skill, but because the traditional model set them up for failure.</p>
                <p>In 2020, Bill founded Apex Affinity Group with a vision: combine cutting-edge AI technology with a proven team-building model to create a system where agents actually succeed.</p>
                <p className="font-semibold text-cyan-400">Today, Apex has over 10,000 agents generating over $500 million in annual premium.</p>
              </div>
            </div>
            <div className="glass rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-white/10 rounded-full mb-6" />
                <p className="text-2xl font-bold text-white">Bill Propper</p>
                <p className="text-white/60">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black/60 to-black/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-white/70">These principles guide everything we do at Apex</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {['Agents First', 'Innovation Always', 'Integrity & Transparency'].map((value, i) => (
              <div key={i} className="glass rounded-2xl p-8 card-hover">
                <h3 className="text-2xl font-bold mb-4">{value}</h3>
                <p className="text-white/70">Every decision we make is filtered through this core principle to ensure agent success.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-lg text-white/70 mb-8">Be part of the fastest-growing insurance network in America</p>
          <Link href="/design-b/contact">
            <button className="btn-glow glass-strong text-white font-medium rounded-full px-8 py-4 text-lg transition-all hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

