'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, HelpCircle } from 'lucide-react';

export default function FAQDesignBPage() {
  const faqs = [
    { q: 'Do I need experience to join?', a: 'No! We provide complete training from day one. Many of our top earners had zero sales experience when they started.' },
    { q: 'How much does it cost to get started?', a: 'Minimal startup costs for licensing and contracting. Most agents are up and running for under $500.' },
    { q: 'How quickly can I start earning?', a: 'Most agents make their first commission within 30 days. Income grows as you build your skills and team.' },
    { q: 'What states do you operate in?', a: 'We operate in 47 states across the US. Check with us to confirm your state availability.' },
    { q: 'Do you provide leads?', a: 'Yes! Our AI system generates qualified leads for you automatically. No cold calling required.' },
    { q: 'What kind of support do I get?', a: 'Personal mentor, weekly training calls, 24/7 support, online academy, and an active community forum.' }
  ];

  return (
    <div className="overflow-hidden">
      <div className="parallax-bg parallax-blur bg-overlay">
        <Image src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=3840&q=80" alt="FAQ" fill className="object-cover" priority />
      </div>

      <section className="min-h-screen flex pt-32 pb-20 md:pt-40 md:pb-32 relative items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center relative z-10 mb-12">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs uppercase tracking-wider text-white/80 mb-6">
              <HelpCircle className="w-3.5 h-3.5" />
              Common Questions
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Get answers to the most common questions about joining Apex Affinity Group.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3 text-cyan-400">{faq.q}</h3>
                <p className="text-white/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg text-white/70 mb-8">Contact us and we&apos;ll answer all your questions personally</p>
          <Link href="/design-b/contact">
            <button className="btn-glow glass-strong text-white font-medium rounded-full px-8 py-4 text-lg transition-all hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

