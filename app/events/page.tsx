'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Users, Clock, X, ChevronLeft, ChevronRight, Video, Ticket, Star } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'Convention' | 'Workshop' | 'Webinar' | 'Mastermind' | 'Awards';
  attendees: number;
  image: string;
  description: string;
  speakers: string[];
  agenda: string[];
  isVirtual: boolean;
  registrationLink: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Annual National Convention 2025',
    date: '2025-03-15',
    time: '9:00 AM - 6:00 PM',
    location: 'Las Vegas Convention Center, NV',
    type: 'Convention',
    attendees: 2500,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    description: 'Join us for the biggest insurance network marketing event of the year! Three days of incredible training, networking, and inspiration.',
    speakers: ['Bill Propper - CEO', 'Sarah Johnson - Diamond Director', 'Marcus Williams - Executive Leader'],
    agenda: [
      'Day 1: Keynote & Product Launch',
      'Day 2: Advanced Training & Breakout Sessions',
      'Day 3: Awards Ceremony & Celebration'
    ],
    isVirtual: false,
    registrationLink: '/contact'
  },
  {
    id: 2,
    title: 'AI Tools Masterclass',
    date: '2025-02-20',
    time: '2:00 PM - 4:00 PM',
    location: 'Online via Zoom',
    type: 'Webinar',
    attendees: 500,
    image: 'https://images.unsplash.com/photo-1591696205602-2f950c417dd9?w=800&q=80',
    description: 'Deep dive into our AI lead generation tools and automation systems. Learn how to 10x your productivity.',
    speakers: ['Tech Team Lead', 'Top AI User Agent'],
    agenda: [
      'AI Lead Gen Platform Overview',
      'Advanced Automation Techniques',
      'Q&A Session'
    ],
    isVirtual: true,
    registrationLink: '/contact'
  },
  {
    id: 3,
    title: 'Regional Leadership Workshop',
    date: '2025-02-28',
    time: '10:00 AM - 5:00 PM',
    location: 'Dallas, TX',
    type: 'Workshop',
    attendees: 150,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    description: 'Hands-on training for team leaders on advanced recruiting, team management, and leadership skills.',
    speakers: ['Jennifer Lee - Regional Director', 'Team Building Experts'],
    agenda: [
      'Morning: Leadership Fundamentals',
      'Afternoon: Team Building Strategies',
      'Evening: Networking Dinner'
    ],
    isVirtual: false,
    registrationLink: '/contact'
  },
  {
    id: 4,
    title: 'New Agent Orientation',
    date: '2025-02-15',
    time: '6:00 PM - 8:00 PM',
    location: 'Online via Zoom',
    type: 'Webinar',
    attendees: 200,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    description: 'Perfect for new agents! Learn the basics, meet your team, and get set up for success.',
    speakers: ['Onboarding Team', 'Success Coaches'],
    agenda: [
      'Company Overview',
      'Getting Started Guide',
      'Meet Your Mentor'
    ],
    isVirtual: true,
    registrationLink: '/contact'
  },
  {
    id: 5,
    title: 'Presidents Club Mastermind',
    date: '2025-03-05',
    time: '1:00 PM - 5:00 PM',
    location: 'Miami, FL',
    type: 'Mastermind',
    attendees: 50,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    description: 'Exclusive event for top producers. High-level strategy sessions and networking with industry leaders.',
    speakers: ['Bill Propper', 'Top 10 Income Earners'],
    agenda: [
      'Advanced Income Strategies',
      'Scaling Your Organization',
      'Private Q&A'
    ],
    isVirtual: false,
    registrationLink: '/contact'
  },
  {
    id: 6,
    title: 'Annual Awards Gala',
    date: '2025-03-17',
    time: '7:00 PM - 11:00 PM',
    location: 'Las Vegas, NV',
    type: 'Awards',
    attendees: 3000,
    image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c871?w=800&q=80',
    description: 'Black-tie event celebrating our top achievers. Recognition, awards, and an unforgettable celebration.',
    speakers: ['Bill Propper', 'Award Recipients'],
    agenda: [
      'Red Carpet Arrival',
      'Award Presentations',
      'Gala Dinner & Entertainment'
    ],
    isVirtual: false,
    registrationLink: '/contact'
  }
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [view, setView] = useState<'month' | 'list'>('month');
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 1)); // February 2025

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const getEventsForDay = (day: number) => {
    const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(e => e.date === dateStr);
  };

  const { firstDay, daysInMonth } = getDaysInMonth(currentMonth);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Events & Calendar
            </h1>
            <p className="text-xl text-cyan-50 max-w-3xl mx-auto">
              Connect, learn, and grow with the Apex community
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Controls */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h2 className="text-2xl font-bold">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h2>
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setView('month')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  view === 'month' ? 'bg-cyan-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Month
              </button>
              <button
                onClick={() => setView('list')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  view === 'list' ? 'bg-cyan-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar View */}
      {view === 'month' && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Days of week header */}
              <div className="grid grid-cols-7 border-b border-gray-200">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="p-4 text-center font-semibold text-gray-700 bg-gray-50">
                    {day}
                  </div>
                ))}
              </div>
              {/* Calendar grid */}
              <div className="grid grid-cols-7">
                {/* Empty cells for days before month starts */}
                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={`empty-${i}`} className="h-32 border-r border-b border-gray-100 bg-gray-50" />
                ))}
                {/* Actual days */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const dayEvents = getEventsForDay(day);
                  return (
                    <div
                      key={day}
                      className="h-32 border-r border-b border-gray-100 p-2 hover:bg-gray-50 transition cursor-pointer"
                    >
                      <div className="font-semibold text-gray-900 mb-1">{day}</div>
                      <div className="space-y-1">
                        {dayEvents.map(event => (
                          <button
                            key={event.id}
                            onClick={() => setSelectedEvent(event)}
                            className="w-full text-left px-2 py-1 rounded text-xs font-medium bg-cyan-100 text-cyan-700 hover:bg-cyan-200 transition truncate"
                          >
                            {event.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* List View */}
      {view === 'list' && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6">
              {events.map(event => (
                <div
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition cursor-pointer"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 relative h-48 md:h-auto">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                      {event.isVirtual && (
                        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                          <Video className="w-4 h-4" />
                          Virtual
                        </div>
                      )}
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          event.type === 'Convention' ? 'bg-purple-100 text-purple-700' :
                          event.type === 'Workshop' ? 'bg-blue-100 text-blue-700' :
                          event.type === 'Webinar' ? 'bg-teal-100 text-teal-700' :
                          event.type === 'Mastermind' ? 'bg-cyan-100 text-cyan-700' :
                          'bg-amber-100 text-amber-700'
                        }`}>
                          {event.type}
                        </span>
                        {event.attendees > 1000 && (
                          <span className="flex items-center gap-1 text-amber-600">
                            <Star className="w-4 h-4 fill-amber-600" />
                            <span className="text-sm font-medium">Featured</span>
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                      <div className="grid md:grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-5 h-5 text-cyan-600" />
                          <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-5 h-5 text-cyan-600" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-5 h-5 text-cyan-600" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users className="w-5 h-5 text-cyan-600" />
                          <span>{event.attendees.toLocaleString()} attendees</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <button className="px-6 py-2 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-64">
              <Image
                src={selectedEvent.image}
                alt={selectedEvent.title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100 transition"
              >
                <X className="w-6 h-6" />
              </button>
              {selectedEvent.isVirtual && (
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-medium flex items-center gap-2">
                  <Video className="w-5 h-5" />
                  Virtual Event
                </div>
              )}
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedEvent.type === 'Convention' ? 'bg-purple-100 text-purple-700' :
                  selectedEvent.type === 'Workshop' ? 'bg-blue-100 text-blue-700' :
                  selectedEvent.type === 'Webinar' ? 'bg-teal-100 text-teal-700' :
                  selectedEvent.type === 'Mastermind' ? 'bg-cyan-100 text-cyan-700' :
                  'bg-amber-100 text-amber-700'
                }`}>
                  {selectedEvent.type}
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-6">{selectedEvent.title}</h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-100 rounded-lg">
                    <Calendar className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Date</div>
                    <div className="font-semibold">{new Date(selectedEvent.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-100 rounded-lg">
                    <Clock className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Time</div>
                    <div className="font-semibold">{selectedEvent.time}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-100 rounded-lg">
                    <MapPin className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Location</div>
                    <div className="font-semibold">{selectedEvent.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-100 rounded-lg">
                    <Users className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Expected Attendees</div>
                    <div className="font-semibold">{selectedEvent.attendees.toLocaleString()}</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">About This Event</h3>
                <p className="text-gray-600 leading-relaxed">{selectedEvent.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Featured Speakers</h3>
                <div className="space-y-2">
                  {selectedEvent.speakers.map((speaker, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                      <span className="text-gray-700">{speaker}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">Agenda</h3>
                <div className="space-y-3">
                  {selectedEvent.agenda.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 font-semibold text-sm">
                        {i + 1}
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-gray-700">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 px-6 py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition flex items-center justify-center gap-2">
                  <Ticket className="w-5 h-5" />
                  Register Now
                </button>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
