'use client';

import PageHero from '@/components/ui/PageHero';
import { Sparkles, Car, Plane, DollarSign, Rocket, PlayCircle, CheckCircle2, Trophy, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function RewardsPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <PageHero
        badge={{
          icon: Sparkles,
          text: 'Exclusive Benefits',
          color: '#f59e0b'
        }}
        headline="Live the life you have always dreamed of"
        description="At Apex, we believe in rewarding hard work and dedication beyond just commissions. Our comprehensive rewards program includes cash bonuses, luxury trips, car programs, and public recognition designed to elevate your lifestyle and celebrate your achievements."
        ctas={[
          { text: 'See Rewards', href: '#rewards', icon: Rocket, variant: 'primary' },
          { text: 'Watch Testimonials', href: '#testimonials', icon: PlayCircle, variant: 'secondary' }
        ]}
        images={[
          { url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80', alt: 'Awards Ceremony' },
          { url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', alt: 'Luxury Car' },
          { url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80', alt: 'Exotic Travel' },
          { url: 'https://images.unsplash.com/photo-1530521954074-e64f68106478?w=800&q=80', alt: 'Luxury Experiences' }
        ]}
        stat={{
          icon: BarChart3,
          text: '$5M+ in rewards paid',
          color: '#10b981'
        }}
        sectionTitle="Reward categories"
        sectionDescription="Explore the comprehensive benefits and incentives available to Apex agents."
        features={[
          { icon: DollarSign, text: 'Cash Bonuses', color: '#10b981' },
          { icon: Plane, text: 'Luxury Trips', color: '#3b82f6' },
          { icon: Car, text: 'Car Program', color: '#ef4444' },
          { icon: Trophy, text: 'Recognition', color: '#f59e0b' }
        ]}
      />

      {/* Rewards Grid */}
      <section id="rewards" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: DollarSign,
                title: 'Monthly Cash Bonuses',
                description: 'Hit your monthly production goals and earn immediate cash bonuses on top of commissions.',
                features: ['$500-$10K per month', 'Paid within 7 days', 'No caps or limits', 'Stack with commissions']
              },
              {
                icon: Plane,
                title: 'Annual Luxury Trips',
                description: 'Top producers earn all-expense-paid trips to exotic destinations around the world.',
                features: ['5-star resorts', 'Spouse included', 'Exclusive experiences', 'Network with leaders']
              },
              {
                icon: Car,
                title: 'Dream Car Program',
                description: 'Reach Director rank and get $500-$1,500 per month toward your dream car lease or payment.',
                features: ['Up to $1,500/month', 'Any car you want', 'Tax advantages', 'Status symbol']
              },
              {
                icon: Trophy,
                title: 'Recognition & Awards',
                description: 'Public recognition at national conventions, social media features, and custom awards.',
                features: ['Stage recognition', 'Trophy awards', 'Social media features', 'Legacy building']
              }
            ].map((reward, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
                <reward.icon className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">{reward.title}</h3>
                <p className="text-gray-700 mb-6">{reward.description}</p>
                <ul className="space-y-2">
                  {reward.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
            Start Earning Rewards Today
          </h2>
          <p className="text-lg text-amber-50 mb-8">
            These benefits are not just for top producers—they are available to anyone willing to work for them
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Join Apex
            <Rocket className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
