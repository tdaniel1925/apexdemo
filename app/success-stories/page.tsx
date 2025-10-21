'use client';

import PageHero from '@/components/ui/PageHero';
import { Sparkles, Users, DollarSign, Award, Rocket, PlayCircle, Heart, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function SuccessStoriesPage() {
  const stories = [
    {
      name: 'Sarah Johnson',
      rank: 'Diamond Director',
      income: '$420K/year',
      before: 'Struggling single mom working two jobs',
      after: 'Full-time financial freedom, bought dream home',
      quote: 'Apex gave me my life back. I went from living paycheck to paycheck to earning more in a month than I used to make in a year.'
    },
    {
      name: 'Marcus Williams',
      rank: 'Executive Leader',
      income: '$680K/year',
      before: 'Corporate burnout, 60-hour weeks',
      after: 'Work 20 hours per week, travel the world',
      quote: 'I thought insurance was boring until I found Apex. The AI tools and team model changed everything.'
    },
    {
      name: 'Jennifer Lopez',
      rank: 'Regional Director',
      income: '$290K/year',
      before: 'Teacher making $45K with no growth potential',
      after: 'Building generational wealth for her family',
      quote: 'I earn more in 3 months than I used to make in a whole year teaching. And I actually help people now.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <PageHero
        badge={{
          icon: Sparkles,
          text: 'Real Transformations',
          color: '#10b981'
        }}
        headline="Hear from agents who changed their lives"
        description="Our agents come from all walks of life, but they share one thing: a desire for more. These are not just testimonials—they are real-life examples of how our system, support, and AI tools empower ordinary people to achieve extraordinary results."
        ctas={[
          { text: 'Share Your Story', href: '/contact', icon: Rocket, variant: 'primary' },
          { text: 'Watch Videos', href: '#videos', icon: PlayCircle, variant: 'secondary' }
        ]}
        images={[
          { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80', alt: 'Success Stories' },
          { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', alt: 'Achievement' },
          { url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80', alt: 'Winners' },
          { url: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800&q=80', alt: 'Celebration' }
        ]}
        stat={{
          icon: BarChart3,
          text: '1,200+ success stories',
          color: '#10b981'
        }}
        sectionTitle="Story categories"
        sectionDescription="Real agents, real results, real life transformation."
        features={[
          { icon: Users, text: 'Career Change', color: '#10b981' },
          { icon: DollarSign, text: 'Income Growth', color: '#f59e0b' },
          { icon: Award, text: 'Recognition', color: '#6366f1' },
          { icon: Heart, text: 'Life Balance', color: '#ef4444' }
        ]}
      />

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {stories.map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-cyan-200">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto md:mx-0 mb-4"></div>
                    <h3 className="text-2xl font-bold mb-1">{story.name}</h3>
                    <div className="text-cyan-600 font-semibold mb-2">{story.rank}</div>
                    <div className="text-3xl font-bold text-gray-900">{story.income}</div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-semibold text-gray-600 mb-1">Before Apex:</div>
                        <div className="text-gray-700">{story.before}</div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-cyan-600 mb-1">After Apex:</div>
                        <div className="text-gray-900 font-medium">{story.after}</div>
                      </div>
                      <div className="mt-6 p-6 bg-white/70 rounded-lg border-l-4 border-cyan-600">
                        <p className="text-lg italic text-gray-700">&quot;{story.quote}&quot;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
            Your Success Story Starts Here
          </h2>
          <p className="text-lg text-cyan-50 mb-8">
            Join thousands of agents who transformed their lives with Apex
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Start Your Journey
            <Rocket className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
