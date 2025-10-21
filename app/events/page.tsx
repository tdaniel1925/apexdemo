'use client';

import PageHero from '@/components/ui/PageHero';
import { Sparkles, Calendar, Users, MapPin, Video, Rocket, PlayCircle, BookOpen, CheckCircle2, Award, Heart, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function EventsPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <PageHero
        badge={{
          icon: Sparkles,
          text: 'Connect & Grow',
          color: '#10b981'
        }}
        headline="Join our vibrant community at exclusive events"
        description="From inspiring national conventions to intimate regional workshops, our events are designed to educate, motivate, and connect you with top leaders and fellow agents. Experience the Apex culture firsthand and accelerate your success."
        ctas={[
          { text: 'View Calendar', href: '#calendar', icon: Rocket, variant: 'primary' },
          { text: 'Past Events', href: '#past', icon: PlayCircle, variant: 'secondary' }
        ]}
        images={[
          { url: 'https://images.unsplash.com/photo-1530521954074-e64f68106478?w=800&q=80', alt: 'Convention' },
          { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', alt: 'Networking' },
          { url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80', alt: 'Awards Ceremony' },
          { url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80', alt: 'Team Building' }
        ]}
        stat={{
          icon: BarChart3,
          text: '20+ events per year',
          color: '#10b981'
        }}
        sectionTitle="Event types"
        sectionDescription="From massive conventions to intimate masterminds, there is an event for everyone."
        features={[
          { icon: Calendar, text: 'Conventions', color: '#10b981' },
          { icon: Users, text: 'Masterminds', color: '#6366f1' },
          { icon: Award, text: 'Recognition', color: '#f59e0b' },
          { icon: Heart, text: 'Team Retreats', color: '#ef4444' }
        ]}
      />

      {/* Upcoming Events */}
      <section id="calendar" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600">
              Mark your calendar for these exciting opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'National Convention 2026',
                date: 'March 15-18, 2026',
                location: 'Las Vegas, NV',
                description: 'Our biggest event of the year with keynote speakers, product training, and awards ceremony.',
                type: 'Convention'
              },
              {
                name: 'Leadership Summit',
                date: 'June 10-12, 2026',
                location: 'Miami, FL',
                description: 'Executive-level training for Directors and above focused on advanced team building.',
                type: 'Summit'
              },
              {
                name: 'Regional Workshops',
                date: 'Monthly',
                location: 'Various Cities',
                description: 'Hands-on training sessions held in major cities across the country.',
                type: 'Workshop'
              },
              {
                name: 'Virtual Masterminds',
                date: 'Weekly',
                location: 'Online',
                description: 'Weekly Zoom calls with top producers sharing strategies and answering questions.',
                type: 'Virtual'
              }
            ].map((event, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-200">
                <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-700 mb-4">
                  {event.type}
                </div>
                <h3 className="text-2xl font-bold mb-3">{event.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-5 h-5 text-emerald-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
            Experience an Apex Event
          </h2>
          <p className="text-lg text-emerald-50 mb-8">
            The energy, connection, and inspiration will change your life
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Join Us
            <Rocket className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
