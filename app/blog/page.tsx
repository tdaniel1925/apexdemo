'use client';

import PageHero from '@/components/ui/PageHero';
import { Sparkles, Newspaper, TrendingUp, Target, Rocket, PlayCircle, Users, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      title: 'How AI is Transforming Insurance Sales in 2026',
      excerpt: 'Discover how top producers are using artificial intelligence to close more deals and build bigger teams.',
      author: 'Bill Propper',
      date: 'October 15, 2025',
      category: 'AI & Technology'
    },
    {
      title: '5 Objections Every Agent Must Master',
      excerpt: 'Learn the proven scripts to handle the most common objections and close more sales.',
      author: 'Sarah Johnson',
      date: 'October 10, 2025',
      category: 'Sales Training'
    },
    {
      title: 'From $50K to $500K: My 3-Year Journey',
      excerpt: 'A Director shares the exact steps that took them from beginner to top earner.',
      author: 'Marcus Williams',
      date: 'October 5, 2025',
      category: 'Success Stories'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <PageHero
        badge={{
          icon: Sparkles,
          text: 'Latest Insights',
          color: '#8b5cf6'
        }}
        headline="Strategies and stories from top performers"
        description="Get actionable strategies, industry insights, and real success stories from agents who are crushing it in the field. Stay ahead of the competition with cutting-edge techniques and proven strategies shared by top producers."
        ctas={[
          { text: 'Read Articles', href: '#articles', icon: Rocket, variant: 'primary' },
          { text: 'Subscribe', href: '#subscribe', icon: PlayCircle, variant: 'secondary' }
        ]}
        images={[
          { url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80', alt: 'Education' },
          { url: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80', alt: 'News' },
          { url: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=800&q=80', alt: 'Insights' },
          { url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80', alt: 'Strategy' }
        ]}
        stat={{
          icon: BarChart3,
          text: '200+ articles',
          color: '#8b5cf6'
        }}
        sectionTitle="Content categories"
        sectionDescription="Browse articles organized by topic and expertise level."
        features={[
          { icon: Newspaper, text: 'Industry News', color: '#8b5cf6' },
          { icon: Target, text: 'Sales Tips', color: '#10b981' },
          { icon: Users, text: 'Success Stories', color: '#0891b2' },
          { icon: TrendingUp, text: 'Team Building', color: '#3b82f6' }
        ]}
      />

      {/* Blog Posts */}
      <section id="articles" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100"></div>
                <div className="p-6">
                  <div className="text-sm font-medium text-blue-600 mb-2">{post.category}</div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
            Stay Ahead of the Competition
          </h2>
          <p className="text-lg text-blue-50 mb-8">
            Subscribe to get the latest strategies delivered to your inbox
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Subscribe Now
            <Rocket className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
