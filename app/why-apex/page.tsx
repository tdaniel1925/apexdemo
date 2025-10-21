'use client';

import PageHero from '@/components/ui/PageHero';
import { Sparkles, Brain, Users, Target, CheckCircle2, Zap, Shield, Rocket, PlayCircle, BookOpen, TrendingUp, Heart, Award } from 'lucide-react';
import Link from 'next/link';

export default function WhyApexPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <PageHero
        badge={{
          icon: Sparkles,
          text: 'The Complete Solution',
          color: '#10b981'
        }}
        headline="Why Apex is different from every other company"
        description="We have solved every problem that causes agents to fail. AI eliminates cold calling. Team building creates passive income. Real training ensures success. This is not just another insurance company—it is a complete reimagination of how insurance sales should work."
        ctas={[
          { text: 'Join Apex Today', href: '/contact', icon: Rocket, variant: 'primary' },
          { text: 'Compare Options', href: '#comparison', icon: PlayCircle, variant: 'secondary' }
        ]}
        images={[
          { url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80', alt: 'AI Technology' },
          { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', alt: 'Team Support' },
          { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', alt: 'Training' },
          { url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80', alt: 'Success' }
        ]}
        stat={{
          icon: TrendingUp,
          text: '10X more agent success',
          color: '#10b981'
        }}
        sectionTitle="The Apex difference"
        sectionDescription="Discover how we have fixed every broken part of traditional insurance sales."
        features={[
          { icon: Brain, text: 'AI Tools', color: '#8b5cf6' },
          { icon: Users, text: 'Team Model', color: '#10b981' },
          { icon: Target, text: 'Training', color: '#f59e0b' },
          { icon: Shield, text: 'Support', color: '#3b82f6' }
        ]}
      />

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
              Every Problem, Solved
            </h2>
            <p className="text-lg text-gray-600">
              Here is exactly how Apex fixes the broken insurance model
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Brain,
                problem: 'Cold Calling',
                solution: 'AI Lead Generation',
                description: 'Our AI finds perfect prospects automatically. No more dialing for dollars. No more rejection. Just warm, qualified leads delivered to you daily.',
                features: ['Pre-qualified prospects', 'Social media targeting', 'Database mining', 'Real-time alerts']
              },
              {
                icon: Users,
                problem: 'Income Instability',
                solution: 'Team Building Model',
                description: 'Build a team and earn passive income from their sales. Your income becomes predictable and grows exponentially, even when you are not working.',
                features: ['5-20% team overrides', 'Compound growth', 'Passive income streams', 'Financial security']
              },
              {
                icon: Target,
                problem: 'No Training',
                solution: 'Comprehensive System',
                description: 'Six-week onboarding, weekly coaching, extensive video library, and personal mentorship. We invest in your success.',
                features: ['6-week bootcamp', 'Live coaching calls', 'Video training library', '1-on-1 mentorship']
              },
              {
                icon: Shield,
                problem: 'Zero Support',
                solution: 'Real Team Support',
                description: 'You are never alone. Access to top producers, dedicated support team, and a thriving community of agents who help each other succeed.',
                features: ['24/7 support', 'Private community', 'Team collaboration', 'Mentorship program']
              },
              {
                icon: Zap,
                problem: 'Bad Leads',
                solution: 'Quality Over Quantity',
                description: 'AI targets affluent prospects who can afford premiums and have genuine needs. Stop wasting time on tire-kickers.',
                features: ['Income-qualified leads', 'Needs-based targeting', 'High conversion rates', 'Better persistence']
              },
              {
                icon: Award,
                problem: 'No Recognition',
                solution: 'Rewards & Incentives',
                description: 'Cash bonuses, luxury trips, car programs, and public recognition for your achievements. We celebrate wins.',
                features: ['Monthly bonuses', 'Annual trips', 'Car program', 'Public recognition']
              }
            ].map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-200">
                <solution.icon className="w-12 h-12 text-emerald-600 mb-4" />
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-semibold text-red-600 line-through">{solution.problem}</span>
                  <span className="text-sm font-semibold text-emerald-600">→ {solution.solution}</span>
                </div>
                <p className="text-gray-700 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
              Apex vs. Traditional Agencies
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-emerald-600">Apex</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-500">Traditional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  { feature: 'Lead Generation', apex: 'AI-Powered', traditional: 'Cold Calling' },
                  { feature: 'Training', apex: '6-Week System', traditional: 'Figure it out' },
                  { feature: 'Support', apex: '24/7 Team', traditional: 'Alone' },
                  { feature: 'Income Model', apex: 'Sales + Overrides', traditional: 'Sales Only' },
                  { feature: 'Commission', apex: 'Up to 85%', traditional: '50-60%' },
                  { feature: 'Technology', apex: 'Cutting-Edge AI', traditional: 'Basic CRM' },
                  { feature: 'Community', apex: 'Thriving Network', traditional: 'Isolated' },
                  { feature: 'Success Rate', apex: '78% stay 1+ year', traditional: '10% stay 1+ year' }
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-emerald-600 font-semibold">{row.apex}</td>
                    <td className="px-6 py-4 text-center text-gray-500">{row.traditional}</td>
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
            Experience the Apex Advantage
          </h2>
          <p className="text-lg text-emerald-50 mb-8">
            Join thousands of agents who chose the better way
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Join Apex Now
            <Rocket className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
