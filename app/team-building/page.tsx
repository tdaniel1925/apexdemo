'use client';

import PageHero from '@/components/ui/PageHero';
import { Sparkles, Users, TrendingUp, DollarSign, Rocket, PlayCircle, CheckCircle2, Target, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function TeamBuildingPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <PageHero
        badge={{
          icon: Sparkles,
          text: 'Build Your Empire',
          color: '#f59e0b'
        }}
        headline="Leverage and duplication create wealth"
        description="Build a team of agents and earn overrides on every sale they make. Your income grows even when you sleep. This is how millionaires are made—through leverage, not just personal effort. Work once, get paid forever."
        ctas={[
          { text: 'Start Building', href: '/contact', icon: Rocket, variant: 'primary' },
          { text: 'See Team Structure', href: '#structure', icon: PlayCircle, variant: 'secondary' }
        ]}
        images={[
          { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80', alt: 'Team Collaboration' },
          { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', alt: 'Building Success' },
          { url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80', alt: 'Team Growth' },
          { url: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80', alt: 'Leadership' }
        ]}
        stat={{
          icon: BarChart3,
          text: '5-20% team overrides',
          color: '#10b981'
        }}
        sectionTitle="Team building benefits"
        sectionDescription="Learn how building a team multiplies your income and creates financial freedom."
        features={[
          { icon: DollarSign, text: 'Passive Income', color: '#10b981' },
          { icon: TrendingUp, text: 'Compound Growth', color: '#6366f1' },
          { icon: Users, text: 'Team Support', color: '#f59e0b' },
          { icon: Target, text: 'Duplication', color: '#8b5cf6' }
        ]}
      />

      {/* Why Team Building */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-6">
                Why Personal Sales Alone Will Never Make You Rich
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Even the best insurance agents hit an income ceiling. There are only so many hours in a day, 
                  only so many policies you can personally sell.
                </p>
                <p className="font-semibold text-emerald-600">
                  The secret to true wealth is leverage—earning from the efforts of others.
                </p>
                <p>
                  When you build a team, your income is no longer tied to your personal hours. You earn overrides 
                  on everything your team sells, creating passive income that compounds month after month.
                </p>
                <ul className="space-y-2 mt-6">
                  {[
                    'Earn 5-20% override on all team sales',
                    'Income grows exponentially, not linearly',
                    'Create multiple income streams',
                    'Build generational wealth',
                    'True financial freedom'
                  ].map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-200">
              <h3 className="text-xl font-bold mb-4">Income Comparison</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Personal Sales Only</span>
                    <span className="text-sm font-semibold text-gray-900">$60K/year</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full">
                    <div className="h-3 bg-gray-500 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Sales + 10 Team Members</span>
                    <span className="text-sm font-semibold text-emerald-600">$180K/year</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full">
                    <div className="h-3 bg-emerald-500 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Sales + 50 Team Members</span>
                    <span className="text-sm font-semibold text-blue-600">$580K/year</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full">
                    <div className="h-3 bg-blue-500 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="structure" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
              How Team Building Works at Apex
            </h2>
            <p className="text-lg text-gray-600">
              Simple, transparent, and designed for exponential growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Recruit Agents',
                description: 'Share the Apex opportunity with anyone looking for a better career. Friends, family, acquaintances, or even strangers who want financial freedom.',
                icon: Users
              },
              {
                step: '02',
                title: 'Train & Support',
                description: 'Help them get licensed, trained, and making sales. Our system makes duplication easy—they follow the same proven path you did.',
                icon: Target
              },
              {
                step: '03',
                title: 'Earn Overrides',
                description: 'Collect 5-20% override commissions on everything your team sells. As they build their own teams, you earn from multiple levels down.',
                icon: DollarSign
              }
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-slate-200">
                <div className="text-4xl font-bold text-emerald-600 mb-4">{step.step}</div>
                <step.icon className="w-10 h-10 text-gray-700 mb-4" />
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Earnings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
              Real Example: Building a 50-Person Team
            </h2>
            <p className="text-lg text-gray-600">
              Here is what happens when you build systematically
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Team Growth Timeline</h3>
                <div className="space-y-4">
                  {[
                    { month: 'Month 1-3', team: '3 agents', income: '$3K/mo overrides' },
                    { month: 'Month 4-6', team: '10 agents', income: '$8K/mo overrides' },
                    { month: 'Month 7-12', team: '25 agents', income: '$18K/mo overrides' },
                    { month: 'Month 13-24', team: '50 agents', income: '$35K/mo overrides' }
                  ].map((stage, index) => (
                    <div key={index} className="flex justify-between items-center bg-white rounded-lg p-4">
                      <div>
                        <div className="font-semibold text-gray-900">{stage.month}</div>
                        <div className="text-sm text-gray-600">{stage.team}</div>
                      </div>
                      <div className="text-lg font-bold text-emerald-600">{stage.income}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Total Annual Income Breakdown</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Personal Sales</div>
                    <div className="text-2xl font-bold text-gray-900">$80,000</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Team Overrides</div>
                    <div className="text-2xl font-bold text-emerald-600">$420,000</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Bonuses & Rewards</div>
                    <div className="text-2xl font-bold text-blue-600">$80,000</div>
                  </div>
                  <div className="bg-emerald-600 text-white rounded-lg p-4">
                    <div className="text-sm mb-1">Total Annual Income</div>
                    <div className="text-3xl font-bold">$580,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
            Start Building Your Empire Today
          </h2>
          <p className="text-lg text-emerald-50 mb-8">
            The best time to plant a tree was 20 years ago. The second best time is now.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Begin Your Journey
            <Rocket className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
