'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

export default function EventsDesignBPage() {
  const events = [
    { title: 'Annual Leadership Summit', date: 'March 15-17, 2025', location: 'Las Vegas, NV', attendees: 1500, image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', type: 'Conference' },
    { title: 'Regional Training Workshop', date: 'April 5, 2025', location: 'Dallas, TX', attendees: 250, image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80', type: 'Workshop' },
    { title: 'Virtual Product Training', date: 'Every Tuesday', location: 'Online', attendees: 500, image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80', type: 'Webinar' }
  ];

  return (
    <div className="overflow-hidden">
      <div className="parallax-bg parallax-blur bg-overlay">
        <Image src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=75" alt="Events" fill className="object-cover" />
      </div>

      <section className="min-h-screen flex pt-32 pb-20 md:pt-40 md:pb-32 relative items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs uppercase tracking-wider text-white/80 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Connect & Grow
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
              Upcoming <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Events</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Join us for training workshops, networking events, and leadership conferences designed to accelerate your success.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black/40 to-black/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden card-hover">
                <div className="relative h-48">
                  <Image src={event.image} alt={event.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="glass-strong rounded-full px-3 py-1 text-xs font-medium text-white">{event.type}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                  <div className="space-y-2 text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full glass-strong rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Never Miss an Event</h2>
          <p className="text-lg text-white/70 mb-8">Get notified about upcoming training and networking opportunities</p>
          <Link href="/design-b/contact">
            <button className="btn-glow glass-strong text-white font-medium rounded-full px-8 py-4 text-lg transition-all hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                Subscribe
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

