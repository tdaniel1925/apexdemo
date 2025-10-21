'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ArrowRight, Sparkles, MapPin, Utensils, Bed, UserCheck } from 'lucide-react';

export default function DesignBHomePage() {
  useEffect(() => {
    // Parallax effect
    const parallaxBg = document.querySelector('.parallax-bg');
    const header = document.querySelector('header');
    
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      
      // Parallax background
      if (parallaxBg) {
        const blur = Math.min(20, scrollY / 30);
        const brightness = Math.max(0.4, 1 - scrollY / 800);
        const scale = 1 + scrollY / 5000;
        (parallaxBg as HTMLElement).style.filter = `blur(${blur}px) brightness(${brightness})`;
        (parallaxBg as HTMLElement).style.transform = `translateZ(0) scale(${scale})`;
      }
      
      // Show/hide header on scroll
      if (scrollY > 100 && header) {
        (header as HTMLElement).style.transform = 'translateY(0)';
      } else if (header) {
        (header as HTMLElement).style.transform = 'translateY(-100%)';
      }
      
      lastScroll = scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Background with parallax effect */}
      <div className="parallax-bg parallax-blur bg-overlay">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=75"
          alt="Professional business background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex sm:pt-24 lg:pt-28 pt-24 relative items-center" id="hero">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center lg:grid-cols-2">
            {/* Left Column - Heading */}
            <div className="space-y-6 sm:space-y-8 opacity-0" style={{animation: 'slideInBlur 1.5s ease-out 0.5s forwards'}}>
              <div className="inline-flex items-center gap-2 glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs uppercase tracking-wider text-white/80">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                AI-Powered Success
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9]">
                Revolutionary.<br/>
                Extraordinary.<br/>
                <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                  Unforgettable.
                </span>
              </h1>
            </div>

            {/* Right Column - Content */}
            <div className="opacity-0 space-y-6 sm:space-y-8" style={{animation: 'fadeSlideIn 1.2s ease-out 0.8s forwards'}}>
              <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm font-medium text-white ml-1">4.8</span>
                </div>
                <div className="w-px h-4 bg-white/20"></div>
                <span className="text-xs sm:text-sm text-white/60">10,000+ agents</span>
                <div className="w-px h-4 bg-white/20 hidden sm:block"></div>
                <span className="text-xs sm:text-sm text-white/60 hidden sm:inline">Award-winning platform</span>
              </div>

              <p className="leading-relaxed text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl">
                Discover revolutionary insurance sales through the world&apos;s most advanced AI-powered platform.
                Curated opportunities and white-glove support await your success.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/design-b/contact">
                  <button className="btn-glow glass-strong transition-all hover:scale-105 group text-sm sm:text-base font-medium text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                    <span className="flex items-center justify-center gap-2">
                      Start Your Journey
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </Link>

                <Link href="/design-b/opportunity">
                  <button className="glass text-white/90 font-medium rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base transition-all hover:bg-white/10 group w-full sm:w-auto">
                    <span className="flex items-center justify-center gap-2">
                      Watch The Video
                    </span>
                  </button>
                </Link>
              </div>

              <div className="border-white/10 border-t pt-4 sm:pt-6">
                <p className="text-xs sm:text-sm text-white/50">
                  AI-powered marketing • Personal mentorship • Unlimited income potential
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-transparent to-black/20 pt-16 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs uppercase tracking-wider text-white/70 mb-4 sm:mb-6 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              The Problem
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
              Why Traditional Insurance Sales Are Broken
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/70 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
              The old way of selling insurance is crushing agents. Here&apos;s what you&apos;re up against every single day...
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
            {[
              { title: 'Cold Calling Nightmare', desc: '100+ dials per day, 95% rejection rate, soul-crushing prospecting methods that destroy confidence.', delay: '0.4s' },
              { title: 'No Lead Support', desc: 'Buy your own leads at $5-$50 each. Terrible quality. No marketing budget or support from company.', delay: '0.5s' },
              { title: 'Limited Income Potential', desc: 'Capped commissions, no team-building. Average agent makes $30K-$50K/year MAX working 60-hour weeks.', delay: '0.6s' },
              { title: 'Complex Products', desc: '30+ page policy documents. Confusing policies that are hard to explain and harder to sell.', delay: '0.7s' },
              { title: 'No Training System', desc: '2-day "boot camp" then you&apos;re on your own. Pay for every additional training course.', delay: '0.8s' },
              { title: 'High Failure Rate', desc: '90% of agents quit within their first year due to broken systems and constant rejection.', delay: '0.9s' }
            ].map((problem, index) => (
              <div key={index} className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 hover:bg-white/10 transition-all duration-300 card-hover animate-on-scroll" style={{animation: `fadeSlideIn 1.0s ease-out ${problem.delay} both`}}>
                <div className="glass rounded-lg sm:rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
                  <MapPin className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{problem.title}</h3>
                <p className="text-xs sm:text-sm text-white/60">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-black/20 to-black/40 pt-16 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs uppercase tracking-wider text-white/70 mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              The Solution
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
              Apex Affinity Group: The Complete Revolution
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/70">
              We&apos;ve solved every problem plaguing traditional insurance sales with cutting-edge AI technology and proven systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: MapPin, title: 'AI-Powered Leads', desc: 'Automated systems find qualified prospects 24/7. Pre-qualified warm leads delivered daily.' },
              { icon: Utensils, title: 'Network Marketing', desc: 'Build once, earn forever through unlimited team growth and passive residual income.' },
              { icon: Bed, title: 'World-Class Training', desc: 'Proven systems with weekly coaching, video courses, and personal mentor assignment.' },
              { icon: UserCheck, title: 'Simplified Systems', desc: 'Easy products, done-for-you marketing, professional CRM, all-in-one platform.' }
            ].map((solution, index) => (
              <div key={index} className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 hover:bg-white/10 transition-all duration-300 animate-on-scroll stagger-{index + 1}">
                <div className="glass rounded-lg sm:rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
                  <solution.icon className="text-white w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{solution.title}</h3>
                <p className="text-xs sm:text-sm text-white/60">{solution.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/design-b/why-apex">
              <button className="btn-glow glass-strong transition-all hover:scale-105 text-sm sm:text-base font-medium text-white rounded-full px-6 sm:px-8 py-3 sm:py-4">
                See How Apex Is Different
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-b from-black/40 to-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '$2.4M+', label: 'Paid in Commissions' },
              { value: '10,000+', label: 'Active Agents' },
              { value: '98%', label: 'Agent Satisfaction' },
              { value: '47', label: 'States Covered' }
            ].map((stat, index) => (
              <div key={index} className="text-center glass rounded-2xl p-6 animate-on-scroll" style={{animation: `fadeSlideIn 1s ease-out ${0.2 + index * 0.1}s both`}}>
                <p className="text-4xl sm:text-5xl font-bold text-cyan-400">{stat.value}</p>
                <p className="mt-2 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-black/60 to-black/80 pt-16 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs uppercase tracking-wider text-white/70 mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              Success Stories
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
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
                quote: "The AI tools changed everything. I haven't made a cold call in months and I'm closing more deals than ever.",
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
              <div key={index} className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 animate-on-scroll" style={{animation: `fadeInUp 1.0s ease-out ${testimonial.delay} both`}}>
                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover glass"
                  />
                  <div>
                    <div className="text-sm sm:text-base font-semibold text-white">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-white/60">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/design-b/success-stories">
              <button className="glass text-white/90 font-medium rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base transition-all hover:bg-white/10">
                Read More Success Stories
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-lg sm:text-xl text-white/70 mb-8">
            Join thousands of agents who&apos;ve discovered the new way to sell insurance
          </p>
          <Link href="/design-b/contact">
            <button className="btn-glow glass-strong text-white font-medium rounded-full px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg transition-all hover:scale-105 group">
              <span className="flex items-center justify-center gap-2 sm:gap-3">
                Get Started Now
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </Link>
          <p className="mt-6 text-sm text-white/50">
            No experience required • Full training provided • Start earning in 30 days
          </p>
        </div>
      </section>
    </div>
  );
}

