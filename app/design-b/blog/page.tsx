'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, Calendar } from 'lucide-react';

export default function BlogDesignBPage() {
  const posts = [
    { title: '5 AI Tools Every Insurance Agent Needs', excerpt: 'Discover the essential AI tools that will 10x your productivity and close rates...', date: 'March 15, 2024', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80', category: 'AI Tools' },
    { title: 'How to Build a Six-Figure Insurance Business', excerpt: 'The proven framework top earners use to scale their income to $100K+ per year...', date: 'March 10, 2024', image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80', category: 'Income' },
    { title: 'The Future of Insurance Sales', excerpt: 'Why traditional cold calling is dead and what successful agents are doing instead...', date: 'March 5, 2024', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', category: 'Trends' }
  ];

  return (
    <div className="overflow-hidden">
      <div className="parallax-bg parallax-blur bg-overlay">
        <Image src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=3840&q=80" alt="Blog" fill className="object-cover" priority />
      </div>

      <section className="min-h-screen flex pt-32 pb-20 md:pt-40 md:pb-32 relative items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs uppercase tracking-wider text-white/80 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Insights & Education
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
              Apex <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Industry insights, success strategies, and tips to help you build a thriving insurance business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black/40 to-black/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden card-hover">
                <div className="relative h-48">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="glass-strong rounded-full px-3 py-1 text-xs font-medium text-white">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-white/60 mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{post.excerpt}</p>
                  <button className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-white/70 mb-8">Subscribe to get the latest insights delivered to your inbox</p>
          <Link href="/design-b/contact">
            <button className="btn-glow glass-strong text-white font-medium rounded-full px-8 py-4 text-lg transition-all hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                Subscribe Now
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

