'use client';

import PageHero from '@/components/ui/PageHero';
import { Sparkles, BookOpen, Video, Users, Target, Rocket, PlayCircle, CheckCircle2, Brain, MessageCircle, Calendar, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function TrainingPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <PageHero
        badge={{
          icon: Sparkles,
          text: 'World-Class Education',
          color: '#6366f1'
        }}
        headline="Master your craft with proven systems"
        description="Our comprehensive training system is designed to take you from beginner to top earner. Access live coaching, an extensive video library, personal mentorship, and step-by-step systems that eliminate guesswork and accelerate success."
        ctas={[
          { text: 'Explore Training', href: '#training', icon: Rocket, variant: 'primary' },
          { text: 'Watch Sample', href: '#sample', icon: PlayCircle, variant: 'secondary' }
        ]}
        images={[
          { url: 'https://images.unsplash.com/photo-1522202176988-66273c849367?w=1200&q=80', alt: 'Training Session' },
          { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80', alt: 'Learning' },
          { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80', alt: 'Mentorship' },
          { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80', alt: 'Coaching' }
        ]}
        stat={{
          icon: BarChart3,
          text: '500+ training videos',
          color: '#6366f1'
        }}
        sectionTitle="Training modules"
        sectionDescription="Everything you need to master insurance sales and team building."
        features={[
          { icon: BookOpen, text: 'Bootcamp', color: '#6366f1' },
          { icon: Video, text: 'Video Library', color: '#10b981' },
          { icon: Users, text: 'Live Coaching', color: '#f59e0b' },
          { icon: Target, text: 'Mentorship', color: '#ef4444' }
        ]}
      />

      {/* Training Program */}
      <section id="training" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                week: 'Week 1-2',
                title: 'Foundation & Licensing',
                topics: ['Insurance fundamentals', 'Product knowledge', 'Licensing prep', 'System setup']
              },
              {
                week: 'Week 3-4',
                title: 'Sales Mastery',
                topics: ['Sales psychology', 'Objection handling', 'Closing techniques', 'Follow-up systems']
              },
              {
                week: 'Week 5-6',
                title: 'AI Tools & Team Building',
                topics: ['AI lead generation', 'Team recruitment', 'Leadership skills', 'Duplication systems']
              }
            ].map((phase, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-200">
                <div className="text-sm font-semibold text-indigo-600 mb-2">{phase.week}</div>
                <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.topics.map((topic, tIndex) => (
                    <li key={tIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
            Start Your Training Journey
          </h2>
          <p className="text-lg text-indigo-50 mb-8">
            Get access to the same training that created our top producers
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Enroll Now
            <Rocket className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
