'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, Brain, Zap, TrendingUp, Target, MessageSquare, BarChart } from 'lucide-react';

export default function AIRevolutionDesignBPage() {
  return (
    <div className="overflow-hidden">
      <div className="parallax-bg parallax-blur bg-overlay">
        <Image src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=3840&q=80" alt="AI Tools" fill className="object-cover" priority />
      </div>

      <section className="min-h-screen flex pt-32 pb-20 md:pt-40 md:pb-32 relative items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs uppercase tracking-wider text-white/80 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              AI-Powered Platform
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
              The Future of <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Insurance Sales</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Our proprietary AI tools automate prospecting, lead generation, and follow-up so you can focus on closing deals and building relationships.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black/40 to-black/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">AI Tools That Transform Your Business</h2>
            <p className="text-lg text-white/70">Cutting-edge technology that gives you an unfair advantage</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: 'AI Lead Generation', desc: 'Automated prospecting that finds qualified leads 24/7 using advanced algorithms.' },
              { icon: Zap, title: 'Smart Follow-Up', desc: 'AI-powered email and SMS sequences that nurture leads automatically.' },
              { icon: TrendingUp, title: 'Predictive Analytics', desc: 'Know which leads to prioritize with AI-driven scoring and insights.' },
              { icon: Target, title: 'Social Media Automation', desc: 'AI creates and posts engaging content across all your social channels.' },
              { icon: MessageSquare, title: 'AI Chatbot', desc: '24/7 intelligent chatbot that qualifies leads and books appointments.' },
              { icon: BarChart, title: 'Performance Dashboard', desc: 'Real-time analytics and AI recommendations to optimize your results.' }
            ].map((tool, i) => (
              <div key={i} className="glass rounded-2xl p-8 card-hover">
                <tool.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                <p className="text-white/70 text-sm">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Experience the AI Advantage</h2>
          <p className="text-lg text-white/70 mb-8">See how AI can 10x your productivity and income</p>
          <Link href="/design-b/contact">
            <button className="btn-glow glass-strong text-white font-medium rounded-full px-8 py-4 text-lg transition-all hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                Request Demo
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

