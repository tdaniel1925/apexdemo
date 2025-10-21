'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { 
  Star, 
  TrendingUp, 
  Users, 
  Shield, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  Target,
  Zap,
  Heart
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
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 ring-2 ring-white"
                  />
                ))}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
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
      <section className="py-20 bg-red-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-sm font-medium text-red-600 animate-on-scroll"
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
                icon: Phone,
                title: 'Cold Calling Nightmare',
                description: '100+ dials per day, 95% rejection rate, soul-crushing prospecting methods that destroy confidence.',
                delay: '0.4s'
              },
              {
                icon: Mail,
                title: 'No Lead Support',
                description: 'Buy your own leads at $5-$50 each. Terrible quality. No marketing budget or support from company.',
                delay: '0.5s'
              },
              {
                icon: TrendingUp,
                title: 'Limited Income Potential',
                description: 'Capped commissions, no team-building. Average agent makes $30K-$50K/year MAX working 60-hour weeks.',
                delay: '0.6s'
              },
              {
                icon: Shield,
                title: 'Complex Products',
                description: '30+ page policy documents. Confusing policies that are hard to explain and harder to sell.',
                delay: '0.7s'
              },
              {
                icon: Target,
                title: 'No Training System',
                description: '2-day &quot;boot camp&quot; then you&apos;re on your own. Pay for every additional training course.',
                delay: '0.8s'
              },
              {
                icon: Heart,
                title: 'High Failure Rate',
                description: '90% of agents quit within their first year due to broken systems and constant rejection.',
                delay: '0.9s'
              }
            ].map((problem, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-red-200 shadow-sm hover:shadow-md transition-shadow animate-on-scroll"
                style={{ animation: `fadeSlideIn 1s ease-out ${problem.delay} both` }}
              >
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                <p className="text-gray-600 text-sm">{problem.description}</p>
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
                icon: Sparkles,
                badge: 'AI-POWERED',
                title: 'AI-Powered Lead Generation',
                description: 'Automated systems that find qualified prospects for you 24/7. AI-driven social media targeting, automated follow-ups, pre-qualified warm leads delivered daily.',
                image: 'gradient-to-br from-purple-400 to-blue-500',
                delay: '0.4s'
              },
              {
                icon: Users,
                badge: 'UNLIMITED GROWTH',
                title: 'Network Marketing Model',
                description: 'Build once, earn forever through unlimited team growth. Earn on personal sales PLUS team production. Passive residual income streams and leadership bonuses.',
                image: 'gradient-to-br from-cyan-400 to-teal-500',
                delay: '0.5s'
              },
              {
                icon: Zap,
                badge: 'COMPREHENSIVE',
                title: 'World-Class Training',
                description: 'Proven systems that guarantee your success. Weekly coaching calls with top earners, step-by-step video courses, personal mentor assignment.',
                image: 'gradient-to-br from-orange-400 to-pink-500',
                delay: '0.6s'
              },
              {
                icon: CheckCircle2,
                badge: 'SIMPLIFIED',
                title: 'Simplified Products & Systems',
                description: 'Easy-to-understand insurance products, done-for-you marketing materials, professional CRM and tools, all-in-one business platform.',
                image: 'gradient-to-br from-blue-400 to-indigo-500',
                delay: '0.7s'
              }
            ].map((solution, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow animate-on-scroll"
                style={{ animation: `fadeSlideIn 1s ease-out ${solution.delay} both` }}
              >
                <div className={`h-48 bg-${solution.image} flex items-center justify-center`}>
                  <div className={`w-full h-full bg-${solution.image}`} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 rounded-full border border-cyan-600/30 bg-cyan-50 px-2 py-0.5 text-[11px] font-medium text-cyan-700">
                      {solution.badge}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                      <p className="text-gray-600 text-sm">{solution.description}</p>
                    </div>
                  </div>
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
                quote: 'I went from struggling to pay bills to earning $15K/month in just 6 months. The AI tools changed everything for me.',
                delay: '0.2s'
              },
              {
                name: 'Marcus Williams',
                role: 'Executive Leader',
                quote: "The AI tools changed everything. I haven&apos;t made a cold call in months and I&apos;m closing more deals than ever.",
                delay: '0.3s'
              },
              {
                name: 'Jennifer Lee',
                role: 'Regional Director',
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />
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
