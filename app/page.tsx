'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { 
  Star, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function HomePage() {
  useEffect(() => {
    // Initialize scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            {/* Social Proof Badge */}
            <div
              className="flex mb-6 gap-x-4 gap-y-4 items-center justify-center"
              style={{ animation: 'fadeSlideIn 1s ease-out 0.1s both' }}
            >
              <div className="flex -space-x-3">
                {[
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80'
                ].map((avatar, i) => (
                  <Image
                    key={i}
                    src={avatar}
                    alt="Happy agent"
                    width={36}
                    height={36}
                    className="rounded-full object-cover ring-2 ring-white"
                  />
                ))}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                <p className="mt-1 text-xs font-medium text-gray-600">
                  4.8 rating • 10,000+ active agents
                </p>
              </div>
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-6xl md:text-7xl tracking-tighter font-bold max-w-5xl mx-auto"
              style={{ animation: 'fadeSlideIn 1s ease-out 0.2s forwards', opacity: 0 }}
            >
              Revolutionary Insurance Sales.{' '}
              <span className="text-cyan-600">Extraordinary Income.</span>
            </h1>

            {/* Subheadline */}
            <p
              className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ animation: 'fadeSlideIn 1s ease-out 0.3s both' }}
            >
              Join the network that&apos;s transforming lives through AI-powered insurance marketing. Build wealth, not just income.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row mt-8 gap-3 items-center justify-center"
              style={{ animation: 'fadeSlideIn 1s ease-out 0.4s both' }}
            >
              <Link href="/contact">
                <Button variant="primary" size="lg" className="min-w-[200px]">
                  START YOUR JOURNEY TODAY
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/opportunity">
                <Button variant="secondary" size="lg">
                  WATCH THE VIDEO
                </Button>
              </Link>
            </div>

            {/* Video Placeholder */}
            <div
              className="mt-12 rounded-2xl overflow-hidden border border-gray-200 shadow-2xl"
              style={{ animation: 'fadeSlideIn 1s ease-out 0.5s both' }}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-cyan-600 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-cyan-500 transition-colors">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                  </div>
                  <p className="text-gray-600 font-medium">Founder Introduction Video</p>
                  <p className="text-sm text-gray-500">3-5 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-sm font-medium text-gray-600 animate-on-scroll"
              style={{ animation: 'fadeSlideIn 1s ease-out 0.1s both' }}
            >
              The Problem
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl tracking-tighter font-bold mt-2 animate-on-scroll"
              style={{ animation: 'fadeSlideIn 1s ease-out 0.2s both' }}
            >
              Why Traditional Insurance Sales Are Broken
            </h2>
            <p
              className="mt-4 text-base text-gray-600 max-w-2xl mx-auto animate-on-scroll"
              style={{ animation: 'fadeSlideIn 1s ease-out 0.3s both' }}
            >
              The old way of selling insurance is crushing agents. Here&apos;s what you&apos;re up against...
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
                title: 'Cold Calling Nightmare',
                description: '100+ dials per day, 95% rejection rate, soul-crushing prospecting methods that destroy confidence.',
                delay: '0.4s'
              },
              {
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
                title: 'No Lead Support',
                description: 'Buy your own leads at $5-$50 each. Terrible quality. No marketing budget or support from company.',
                delay: '0.5s'
              },
              {
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
                title: 'Limited Income Potential',
                description: 'Capped commissions, no team-building. Average agent makes $30K-$50K/year MAX working 60-hour weeks.',
                delay: '0.6s'
              },
              {
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
                title: 'Complex Products',
                description: '30+ page policy documents. Confusing policies that are hard to explain and harder to sell.',
                delay: '0.7s'
              },
              {
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
                title: 'No Training System',
                description: '2-day &quot;boot camp&quot; then you&apos;re on your own. Pay for every additional training course.',
                delay: '0.8s'
              },
              {
                avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
                title: 'High Failure Rate',
                description: '90% of agents quit within their first year due to broken systems and constant rejection.',
                delay: '0.9s'
              }
            ].map((problem, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300 animate-on-scroll"
                style={{ animation: `fadeSlideIn 1s ease-out ${problem.delay} both` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={problem.avatar} 
                    alt={problem.title}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100"
                  />
                  <h3 className="text-lg font-bold text-gray-900">{problem.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/why-insurance-sucks">
              <Button variant="outline" size="lg">
                Learn More About The Problem
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-sm font-medium text-cyan-600 animate-on-scroll"
              style={{ animation: 'fadeSlideIn 1s ease-out 0.1s both' }}
            >
              The Solution
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl tracking-tighter font-bold mt-2 animate-on-scroll"
              style={{ animation: 'fadeSlideIn 1s ease-out 0.2s both' }}
            >
              Apex Affinity Group: The Complete Revolution
            </h2>
            <p
              className="mt-4 text-base text-gray-600 max-w-2xl mx-auto animate-on-scroll"
              style={{ animation: 'fadeSlideIn 1s ease-out 0.3s both' }}
            >
              We&apos;ve solved every problem plaguing traditional insurance sales
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80',
                badge: 'AI-POWERED',
                title: 'AI-Powered Lead Generation',
                description: 'Automated systems that find qualified prospects for you 24/7. AI-driven social media targeting, automated follow-ups, pre-qualified warm leads delivered daily.',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
                delay: '0.4s'
              },
              {
                avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80',
                badge: 'UNLIMITED GROWTH',
                title: 'Network Marketing Model',
                description: 'Build once, earn forever through unlimited team growth. Earn on personal sales PLUS team production. Passive residual income streams and leadership bonuses.',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
                delay: '0.5s'
              },
              {
                avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80',
                badge: 'COMPREHENSIVE',
                title: 'World-Class Training',
                description: 'Proven systems that guarantee your success. Weekly coaching calls with top earners, step-by-step video courses, personal mentor assignment.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
                delay: '0.6s'
              },
              {
                avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
                badge: 'SIMPLIFIED',
                title: 'Simplified Products & Systems',
                description: 'Easy-to-understand insurance products, done-for-you marketing materials, professional CRM and tools, all-in-one business platform.',
                image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
                delay: '0.7s'
              }
            ].map((solution, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow animate-on-scroll"
                style={{ animation: `fadeSlideIn 1s ease-out ${solution.delay} both` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1 rounded-full border border-cyan-600/30 bg-gradient-to-r from-cyan-50 to-blue-50 px-3 py-1 text-xs font-semibold text-cyan-700 shadow-sm">
                      {solution.badge}
                    </span>
                    <img 
                      src={solution.avatar} 
                      alt={solution.title}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-cyan-100"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{solution.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/why-apex">
              <Button variant="primary" size="lg">
                SEE HOW APEX IS DIFFERENT
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '$2.4M+', label: 'Paid in Commissions' },
              { value: '10,000+', label: 'Active Agents' },
              { value: '98%', label: 'Agent Satisfaction' },
              { value: '47', label: 'States Covered' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-on-scroll" style={{ animation: `fadeSlideIn 1s ease-out ${0.2 + index * 0.1}s both` }}>
                <p className="text-4xl sm:text-5xl font-bold text-cyan-600">{stat.value}</p>
                <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter font-bold animate-on-scroll" style={{ animation: 'fadeSlideIn 1s ease-out 0.1s both' }}>
              Real People, Real Results
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Diamond Director',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
                quote: 'I went from struggling to pay bills to earning $15K/month in just 6 months. The AI tools changed everything for me.',
                delay: '0.2s'
              },
              {
                name: 'Marcus Williams',
                role: 'Executive Leader',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
                quote: "The AI tools changed everything. I haven&apos;t made a cold call in months and I&apos;m closing more deals than ever.",
                delay: '0.3s'
              },
              {
                name: 'Jennifer Lee',
                role: 'Regional Director',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
                quote: 'Built a team of 50 in my first year. This company is the real deal. The support and training are incredible.',
                delay: '0.4s'
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow animate-on-scroll"
                style={{ animation: `fadeSlideIn 1s ease-out ${testimonial.delay} both` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">&quot;{testimonial.quote}&quot;</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/success-stories">
              <Button variant="secondary" size="lg">
                Read More Success Stories
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter font-bold mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-lg sm:text-xl text-cyan-50 mb-8">
            Join thousands of agents who&apos;ve discovered the new way to sell insurance
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              GET STARTED NOW
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <p className="mt-6 text-sm text-cyan-100">
            No experience required • Full training provided • Start earning in 30 days
          </p>
        </div>
      </section>
    </div>
  );
}
