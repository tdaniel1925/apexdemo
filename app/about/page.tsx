'use client';

import PageHero from '@/components/ui/PageHero';
import { Sparkles, Users, Target, Award, TrendingUp, Rocket, PlayCircle, BookOpen, CheckCircle2, PieChart, MessageCircle, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <PageHero
        badge={{
          icon: Sparkles,
          text: 'Est. 2020 • 10,000+ Agents',
          color: '#10b981'
        }}
        headline="Built by agents, for agents"
        description="We understand the challenges of insurance sales because we've been there. Our mission is to empower agents with cutting-edge AI technology, proven systems, and a supportive community that helps you succeed from day one."
        ctas={[
          { text: 'Join Our Team', href: '/contact', icon: Rocket, variant: 'primary' },
          { text: 'Watch Our Story', href: '#story', icon: PlayCircle, variant: 'secondary' }
        ]}
        images={[
          { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80', alt: 'Apex Team' },
          { url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80', alt: 'Bill Propper, CEO' },
          { url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80', alt: 'Our Mission' },
          { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', alt: 'Growing Together' }
        ]}
        stat={{
          icon: BarChart3,
          text: '94% agent satisfaction',
          color: '#10b981'
        }}
        sectionTitle="What's inside"
        sectionDescription="Learn about our story, leadership, values, and what makes Apex different."
        features={[
          { icon: BookOpen, text: 'Our Story', color: '#475569' },
          { icon: Users, text: 'Leadership', color: '#10b981' },
          { icon: Target, text: 'Mission & Values', color: '#6366f1' },
          { icon: Award, text: 'Recognition', color: '#475569' }
        ]}
      />

      {/* Founder Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-6">
                Meet Bill Propper, CEO & Founder
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  After 15 years in the insurance industry, Bill Propper saw a broken system. Talented agents 
                  were failing not because they lacked skill, but because the traditional model set them up 
                  for failure.
                </p>
                <p>
                  Cold calling. Buying overpriced leads. Zero support. No training. No wonder 90% of agents quit.
                </p>
                <p>
                  In 2020, Bill founded Apex Affinity Group with a vision: combine cutting-edge AI technology 
                  with a proven team-building model to create a system where agents actually succeed.
                </p>
                <p className="font-semibold text-emerald-600">
                  Today, Apex has over 10,000 agents generating over $500 million in annual premium.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-gray-300 rounded-full mb-6" />
                <p className="text-2xl font-bold">Bill Propper</p>
                <p className="text-gray-600">CEO & Founder</p>
                <p className="text-sm text-gray-500 mt-2">Sugar Land, TX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              These principles guide everything we do at Apex
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Agents First',
                description: 'Every decision we make is filtered through one question: Is this good for our agents?'
              },
              {
                icon: Target,
                title: 'Radical Transparency',
                description: 'No hidden fees, no misleading claims, no BS. We tell the truth, always.'
              },
              {
                icon: TrendingUp,
                title: 'Relentless Innovation',
                description: 'We invest heavily in AI and technology to give you an unfair advantage.'
              },
              {
                icon: Award,
                title: 'Integrity Above All',
                description: 'We do what is right, not what is easy. Our reputation is everything.'
              },
              {
                icon: Users,
                title: 'Team Over Individual',
                description: 'When you succeed, we all succeed. We rise together.'
              },
              {
                icon: Sparkles,
                title: 'Excellence as Standard',
                description: 'Good is not enough. We pursue excellence in training, support, and results.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-500 transition">
                <value.icon className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
            Ready to Join the Apex Family?
          </h2>
          <p className="text-lg text-emerald-50 mb-8">
            Be part of a movement that is transforming the insurance industry
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Started Today
            <Rocket className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
