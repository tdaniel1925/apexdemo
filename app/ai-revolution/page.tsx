'use client';

import PageHero from '@/components/ui/PageHero';
import { Sparkles, Bot, BarChart3, MessageSquare, Brain, Zap, ShieldCheck, Rocket, PlayCircle, CheckCircle2, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function AIRevolutionPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <PageHero
        badge={{
          icon: Sparkles,
          text: 'AI-Powered • No Cold Calling',
          color: '#8b5cf6'
        }}
        headline="AI tools that 10X your results"
        description="Experience the future of insurance sales with our intelligent AI agents. From automated lead generation to smart follow-ups and analytics, our breakthrough technology eliminates cold calling forever and creates predictable income."
        ctas={[
          { text: 'Explore AI Tools', href: '/contact', icon: Rocket, variant: 'primary' },
          { text: 'Watch Demo', href: '#demo', icon: PlayCircle, variant: 'secondary' }
        ]}
        images={[
          { url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80', alt: 'AI Technology' },
          { url: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80', alt: 'Smart Automation' },
          { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', alt: 'Data Analytics' },
          { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', alt: 'AI Dashboard' }
        ]}
        stat={{
          icon: TrendingUp,
          text: '87% more qualified leads',
          color: '#8b5cf6'
        }}
        sectionTitle="AI capabilities"
        sectionDescription="Discover how artificial intelligence transforms every aspect of your sales process."
        features={[
          { icon: Bot, text: 'Lead Gen', color: '#8b5cf6' },
          { icon: MessageSquare, text: 'Follow-Ups', color: '#10b981' },
          { icon: BarChart3, text: 'Analytics', color: '#f59e0b' },
          { icon: Calendar, text: 'Scheduling', color: '#3b82f6' }
        ]}
      />

      {/* AI Tools Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Brain,
                title: 'AI Lead Generator',
                description: 'Our AI scans social media, public records, and databases to find perfect prospects who match your ideal client profile.',
                features: ['Hyper-targeted prospects', 'Pre-qualified leads', 'Real-time notifications', 'Never buy leads again']
              },
              {
                icon: MessageSquare,
                title: 'Smart Follow-Up System',
                description: 'AI-powered email and SMS sequences that nurture leads automatically while sounding completely human.',
                features: ['Personalized messaging', 'Perfect timing optimization', 'Multi-channel outreach', 'Auto-responses']
              },
              {
                icon: BarChart3,
                title: 'Predictive Analytics',
                description: 'Know exactly what is working, where to focus your time, and which prospects are most likely to close.',
                features: ['Real-time dashboards', 'Conversion tracking', 'ROI calculations', 'Performance insights']
              },
              {
                icon: Calendar,
                title: 'Intelligent Scheduler',
                description: 'AI schedules appointments, sends reminders, and even reschedules no-shows automatically.',
                features: ['Calendar integration', 'Auto-reminders', 'No-show recovery', 'Timezone handling']
              }
            ].map((tool, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-8 border border-slate-200">
                <tool.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">{tool.title}</h3>
                <p className="text-gray-700 mb-6">{tool.description}</p>
                <ul className="space-y-2">
                  {tool.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
              Real Results from AI-Powered Agents
            </h2>
            <p className="text-lg text-gray-600">
              Data from agents using our AI tools vs. traditional methods
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: '87%', label: 'More Qualified Leads', color: 'purple' },
              { stat: '62%', label: 'Higher Close Rate', color: 'emerald' },
              { stat: '10X', label: 'Faster Follow-Up', color: 'blue' },
              { stat: '0', label: 'Cold Calls Required', color: 'red' }
            ].map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                <div className="text-5xl font-bold text-purple-600 mb-2">{metric.stat}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
            Join the AI Revolution
          </h2>
          <p className="text-lg text-purple-50 mb-8">
            Stop cold calling. Start closing. Let AI do the heavy lifting.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Get AI Tools Now
            <Rocket className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
