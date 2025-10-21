'use client';

import PageHero from '@/components/ui/PageHero';
import { AlertTriangle, XCircle, TrendingDown, PhoneOff, DollarSign, Frown, Rocket, PlayCircle, Target, Heart } from 'lucide-react';
import Link from 'next/link';

export default function WhyInsuranceSucksPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <PageHero
        badge={{
          icon: AlertTriangle,
          text: '90% of agents quit within 1 year',
          color: '#ef4444'
        }}
        headline="Insurance sales burnout is real"
        description="The uncomfortable truth: most agents fail not because they lack talent, but because the traditional model is fundamentally designed to fail. Cold calling, buying leads, income instability, and zero support create a recipe for disaster."
        ctas={[
          { text: 'See The Solution', href: '/why-apex', icon: Rocket, variant: 'primary' },
          { text: 'Read More', href: '#problems', icon: PlayCircle, variant: 'secondary' }
        ]}
        images={[
          { url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80', alt: 'Frustrated Agent' },
          { url: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&q=80', alt: 'Financial Stress' },
          { url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80', alt: 'Burnout' },
          { url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80', alt: 'Overwhelmed' }
        ]}
        stat={{
          icon: TrendingDown,
          text: '90% failure rate',
          color: '#ef4444'
        }}
        sectionTitle="The painful reality"
        sectionDescription="Understand why traditional insurance sales destroy careers and bank accounts."
        features={[
          { icon: PhoneOff, text: 'Cold Calling', color: '#ef4444' },
          { icon: DollarSign, text: 'No Income', color: '#f59e0b' },
          { icon: XCircle, text: 'Zero Support', color: '#64748b' },
          { icon: Frown, text: 'High Burnout', color: '#ef4444' }
        ]}
      />

      {/* Problems Section */}
      <section id="problems" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: PhoneOff,
                title: 'Cold Calling Hell',
                problem: 'Make 100+ calls per day. Get hung up on. Hear rejection constantly. Feel like a telemarketer.',
                why: 'Traditional agencies have no better lead generation system, so they force you to cold call or buy overpriced, recycled leads.',
                result: 'Burnout, frustration, and eventual failure.'
              },
              {
                icon: DollarSign,
                title: 'Income Instability',
                problem: 'No base salary. 100% commission. Some months you eat, some months you do not.',
                why: 'Without a reliable lead flow and proven system, your income is completely unpredictable.',
                result: 'Financial stress and the need to find a "real job".'
              },
              {
                icon: XCircle,
                title: 'Zero Real Support',
                problem: 'They say they will train you, then hand you a phone book and wish you luck.',
                why: 'Most agencies do not profit unless you sell, so they do not invest in real training or support.',
                result: 'You are left to figure everything out alone.'
              },
              {
                icon: Target,
                title: 'Wrong Target Market',
                problem: 'Selling to broke people who cannot afford premiums or who will lapse in 3 months.',
                why: 'Cheap leads target low-income demographics with poor persistence.',
                result: 'High chargebacks and wasted time.'
              },
              {
                icon: TrendingDown,
                title: 'High Failure Rate',
                problem: '90% of new agents quit within the first year. This is not a secret.',
                why: 'The traditional model is designed to churn through agents, hoping a few survive.',
                result: 'Your time and money wasted.'
              },
              {
                icon: Heart,
                title: 'No Work-Life Balance',
                problem: 'Work 60-80 hours per week just to make ends meet. Miss time with family.',
                why: 'Inefficient processes and constant rejection require massive time investment.',
                result: 'Burnout and resentment.'
              }
            ].map((issue, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
                <issue.icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">{issue.title}</h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <span className="font-semibold text-red-600">The Problem: </span>
                    {issue.problem}
                  </div>
                  <div>
                    <span className="font-semibold text-orange-600">Why It Happens: </span>
                    {issue.why}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">The Result: </span>
                    {issue.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
              The Brutal Statistics
            </h2>
            <p className="text-lg text-gray-600">
              Industry data that insurance companies do not want you to see
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '90%', label: 'Quit within first year', color: 'red' },
              { stat: '$8,500', label: 'Average agent income (those who stay)', color: 'orange' },
              { stat: '100+', label: 'Cold calls needed per day', color: 'red' },
              { stat: '78%', label: 'Agents report high stress', color: 'orange' },
              { stat: '$0', label: 'Base salary (most agencies)', color: 'red' },
              { stat: '6 months', label: 'Average time before quitting', color: 'orange' }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                <div className="text-5xl font-bold text-red-600 mb-2">{stat.stat}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
            There Is a Better Way
          </h2>
          <p className="text-lg text-emerald-50 mb-8">
            Apex has fixed every single one of these problems
          </p>
          <Link
            href="/why-apex"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            See How Apex Is Different
            <Rocket className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
