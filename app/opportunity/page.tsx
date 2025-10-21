'use client';

import PageHero from '@/components/ui/PageHero';
import { Sparkles, DollarSign, TrendingUp, Users, Shield, Rocket, PlayCircle, CheckCircle2, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function OpportunityPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <PageHero
        badge={{
          icon: Sparkles,
          text: 'Financial Freedom Awaits',
          color: '#0891b2'
        }}
        headline="Unlock unlimited income potential"
        description="Apex Affinity Group offers a unique blend of cutting-edge AI tools, top-tier insurance products, and a powerful team-building model designed for your financial freedom. Earn high commissions plus passive income from your team."
        ctas={[
          { text: 'Start Earning', href: '/contact', icon: Rocket, variant: 'primary' },
          { text: 'See Income Examples', href: '#income', icon: PlayCircle, variant: 'secondary' }
        ]}
        images={[
          { url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80', alt: 'Financial Freedom' },
          { url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80', alt: 'Success' },
          { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', alt: 'Wealth Building' },
          { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', alt: 'Income Growth' }
        ]}
        stat={{
          icon: BarChart3,
          text: 'Avg $145K at Director level',
          color: '#0891b2'
        }}
        sectionTitle="What you'll discover"
        sectionDescription="Learn about compensation, income potential, and how agents build wealth at Apex."
        features={[
          { icon: DollarSign, text: 'Commissions', color: '#0891b2' },
          { icon: TrendingUp, text: 'Team Overrides', color: '#3b82f6' },
          { icon: Users, text: 'Career Path', color: '#0891b2' },
          { icon: Shield, text: 'Benefits', color: '#64748b' }
        ]}
      />

      {/* Income Streams */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
              Three Ways to Earn at Apex
            </h2>
            <p className="text-lg text-gray-600">
              Multiple income streams = financial security
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
              <DollarSign className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Personal Sales</h3>
              <p className="text-gray-700 mb-4">
                Earn up to <span className="font-bold text-cyan-600">85% commission</span> on every policy you sell.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Life insurance: $500-$5,000 per sale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Annuities: $2,000-$20,000 per sale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>No commission caps or limits</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-gray-200">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Team Overrides</h3>
              <p className="text-gray-700 mb-4">
                Earn <span className="font-bold text-blue-600">5-20% overrides</span> on everything your team sells.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Passive income that compounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Earn on 3+ levels deep</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>No limit on team size</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-gray-200">
              <TrendingUp className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Bonuses & Rewards</h3>
              <p className="text-gray-700 mb-4">
                Extra cash, trips, and <span className="font-bold text-teal-600">car bonuses</span> for top performers.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Monthly production bonuses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Luxury trips and experiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Dream car program</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Income Examples */}
      <section id="income" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
              Real Income Examples
            </h2>
            <p className="text-lg text-gray-600">
              These are actual average earnings by rank (2024 data)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { rank: 'Agent', income: '$42,000', time: 'Year 1', color: 'cyan' },
              { rank: 'Senior Agent', income: '$87,000', time: '6-12 months', color: 'blue' },
              { rank: 'Team Leader', income: '$145,000', time: '12-18 months', color: 'teal' },
              { rank: 'Director', income: '$285,000', time: '18-24 months', color: 'blue' },
              { rank: 'Regional Director', income: '$580,000', time: '2-3 years', color: 'cyan' },
              { rank: 'Executive Director', income: '$1.2M+', time: '3-5 years', color: 'teal' }
            ].map((tier, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-${tier.color}-100 text-${tier.color}-700 mb-3`}>
                  {tier.rank}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{tier.income}</div>
                <div className="text-sm text-gray-600">Average annual income</div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-500">Typical timeframe</div>
                  <div className="text-base font-semibold text-gray-900">{tier.time}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <p className="text-sm text-gray-700">
              <strong>Income Disclosure:</strong> These figures represent average earnings and are not guarantees. 
              Individual results vary based on effort, skill, and market conditions. See our{' '}
              <Link href="/legal" className="text-cyan-600 hover:underline">legal page</Link> for full disclosure.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
            Your Income Potential is Unlimited
          </h2>
          <p className="text-lg text-cyan-50 mb-8">
            Start building wealth with Apex Affinity Group today
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Started Now
            <Rocket className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
