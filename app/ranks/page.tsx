'use client';

import PageHero from '@/components/ui/PageHero';
import { Sparkles, Award, Crown, Users, Target, Rocket, PlayCircle, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function RanksPage() {
  const ranks = [
    {
      name: 'Agent',
      requirements: 'Get licensed, complete training',
      income: '$42,000 avg/year',
      timeframe: 'Month 1',
      color: 'gray',
      icon: Users
    },
    {
      name: 'Senior Agent',
      requirements: '$10K personal production/mo',
      income: '$87,000 avg/year',
      timeframe: '6-12 months',
      color: 'blue',
      icon: Target
    },
    {
      name: 'Team Leader',
      requirements: '$15K personal + 3 active agents',
      income: '$145,000 avg/year',
      timeframe: '12-18 months',
      color: 'emerald',
      icon: Users
    },
    {
      name: 'Director',
      requirements: '$20K personal + 10 active agents',
      income: '$285,000 avg/year',
      timeframe: '18-24 months',
      color: 'purple',
      icon: Award
    },
    {
      name: 'Regional Director',
      requirements: '$25K personal + 25 active agents',
      income: '$580,000 avg/year',
      timeframe: '2-3 years',
      color: 'orange',
      icon: Crown
    },
    {
      name: 'Executive Director',
      requirements: '$30K personal + 50+ active agents',
      income: '$1.2M+ avg/year',
      timeframe: '3-5 years',
      color: 'red',
      icon: Crown
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <PageHero
        badge={{
          icon: Sparkles,
          text: 'Clear Career Path',
          color: '#f59e0b'
        }}
        headline="From agent to multi-millionaire"
        description="Six rank levels with increasing income potential and benefits. Average agents can reach Director level in 6-12 months with focused effort. Every top earner started as an agent—your climb to the top is predictable, achievable, and faster than anywhere else."
        ctas={[
          { text: 'Start Your Journey', href: '/contact', icon: Rocket, variant: 'primary' },
          { text: 'See Requirements', href: '#ranks', icon: PlayCircle, variant: 'secondary' }
        ]}
        images={[
          { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', alt: 'Agent Starting Point' },
          { url: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&q=80', alt: 'Team Leader' },
          { url: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800&q=80', alt: 'Director Level' },
          { url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80', alt: 'Executive Status' }
        ]}
        stat={{
          icon: BarChart3,
          text: '6 rank levels',
          color: '#10b981'
        }}
        sectionTitle="Rank progression"
        sectionDescription="Understand the path from agent to executive and what it takes to advance."
        features={[
          { icon: Users, text: 'Agent', color: '#64748b' },
          { icon: Target, text: 'Team Leader', color: '#10b981' },
          { icon: Award, text: 'Director', color: '#8b5cf6' },
          { icon: Crown, text: 'Executive', color: '#ef4444' }
        ]}
      />

      {/* Ranks Grid */}
      <section id="ranks" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
              Your Roadmap to Wealth
            </h2>
            <p className="text-lg text-gray-600">
              Clear requirements, predictable advancement, unlimited potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ranks.map((rank, index) => (
              <div key={index} className={`bg-gradient-to-br from-${rank.color}-50 to-${rank.color}-100 rounded-2xl p-8 border border-${rank.color}-200`}>
                <rank.icon className={`w-12 h-12 text-${rank.color}-600 mb-4`} />
                <h3 className="text-2xl font-bold mb-2">{rank.name}</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs font-medium text-gray-600 mb-1">Requirements:</div>
                    <div className="text-sm text-gray-700">{rank.requirements}</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-600 mb-1">Average Income:</div>
                    <div className={`text-xl font-bold text-${rank.color}-600`}>{rank.income}</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-600 mb-1">Typical Timeframe:</div>
                    <div className="text-sm font-semibold text-gray-900">{rank.timeframe}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits by Rank */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
              Benefits Increase with Each Rank
            </h2>
            <p className="text-lg text-gray-600">
              More responsibility = more rewards
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Benefit</th>
                  <th className="px-4 py-4 text-center font-semibold text-sm">Agent</th>
                  <th className="px-4 py-4 text-center font-semibold text-sm">Team Leader</th>
                  <th className="px-4 py-4 text-center font-semibold text-sm">Director</th>
                  <th className="px-4 py-4 text-center font-semibold text-sm">Executive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  { benefit: 'Commission %', agent: '70%', leader: '75%', director: '80%', exec: '85%' },
                  { benefit: 'Team Overrides', agent: '—', leader: '5%', director: '10%', exec: '20%' },
                  { benefit: 'Monthly Bonuses', agent: '—', leader: '$500', director: '$2K', exec: '$10K' },
                  { benefit: 'Trip Eligibility', agent: '—', leader: '—', director: '✓', exec: '✓✓' },
                  { benefit: 'Car Program', agent: '—', leader: '—', director: '$500/mo', exec: '$1,500/mo' },
                  { benefit: 'Priority Support', agent: '—', leader: '✓', director: '✓✓', exec: '✓✓✓' }
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 font-medium">{row.benefit}</td>
                    <td className="px-4 py-4 text-center text-sm">{row.agent}</td>
                    <td className="px-4 py-4 text-center text-sm">{row.leader}</td>
                    <td className="px-4 py-4 text-center text-sm">{row.director}</td>
                    <td className="px-4 py-4 text-center text-sm font-semibold text-emerald-600">{row.exec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
            Your Journey Starts at Agent
          </h2>
          <p className="text-lg text-emerald-50 mb-8">
            Every executive started where you are now. Begin your climb today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Start at Agent Level
            <Rocket className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
