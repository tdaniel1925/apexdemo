'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Shield, TrendingUp, Heart, DollarSign, ArrowRight } from 'lucide-react';

export default function ProductsDesignBPage() {
  const [isClient, setIsClient] = useState(false);

  const products = [
    {
      name: 'Term Life Insurance',
      description: 'Pure life insurance protection for a specific term (10, 20, 30 years)',
      bestFor: 'Young families, mortgage protection, temporary needs',
      commission: '50% first year, 5% renewals',
      avgEarnings: '$180-$600 first year + residuals',
      image: 'https://images.unsplash.com/photo-1554224311-beee4ece3c5d?w=800&q=80'
    },
    {
      name: 'Whole Life Insurance',
      description: 'Permanent coverage with cash value accumulation',
      bestFor: 'Estate planning, wealth building, lifetime protection',
      commission: '60% first year, 8% renewals',
      avgEarnings: '$1,440-$3,600 first year + residuals',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80'
    },
    {
      name: 'Index Universal Life (IUL)',
      description: 'Universal life tied to market index performance',
      bestFor: 'Growth potential without market risk',
      commission: '60% first year, 7% renewals',
      avgEarnings: '$2,880-$7,200 first year + residuals',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80'
    },
    {
      name: 'Annuities',
      description: 'Retirement income vehicles, guaranteed payments',
      bestFor: 'Retirees, conservative investors, guaranteed income',
      commission: '4-7% upfront (varies by product)',
      avgEarnings: '$4,000-$35,000 per sale',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80'
    },
    {
      name: 'Final Expense Insurance',
      description: 'Small whole life policies for burial costs',
      bestFor: 'Seniors, limited income, simplified underwriting',
      commission: '100%+ first year',
      avgEarnings: '$600-$1,200 first year',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80'
    }
  ];

  useEffect(() => {
    setIsClient(true);

    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
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

    // Orbit animation
    const stage = document.getElementById('orbit-stage');
    const wrap  = document.getElementById('orbit-wrap');
    const cards = Array.from(stage?.querySelectorAll('[data-orbit-card]') || []);
    const n = cards.length;

    let radius = 420;
    let speed = 0.002;
    let centerOffsetY = -60;
    let centerOffsetX = 0;
    const maxBlur = 10;
    const depthScale = 0.08;

    function updateOrbitSettings() {
      const w = window.innerWidth || document.documentElement.clientWidth;
      
      if (w < 480) {
        radius = 240;
        centerOffsetY = -30;
      } else if (w < 640) {
        radius = 280;
        centerOffsetY = -40;
      } else if (w < 768) {
        radius = 320;
        centerOffsetY = -45;
      } else if (w < 1024) {
        radius = 350;
        centerOffsetY = -50;
      } else {
        radius = 420;
        centerOffsetY = -60;
      }
      
      if (w >= 1536) centerOffsetX = -160;
      else if (w >= 1280) centerOffsetX = -120;
      else if (w >= 1024) centerOffsetX = -60;
      else centerOffsetX = 0;
    }
    
    updateOrbitSettings();
    window.addEventListener('resize', updateOrbitSettings);

    let rot = 0;
    let paused = false;

    function render(){
      if(!paused) rot += speed;

      for(let i=0;i<n;i++){
        const card  = cards[i] as HTMLElement;
        const angle = rot + (i * (Math.PI*2/n));
        const x = Math.sin(angle) * radius + centerOffsetX;
        const z = Math.cos(angle) * radius;
        const face = -angle;

        const vis = Math.max(0, z / radius);

        card.style.transform =
          `translate3d(${x}px, ${centerOffsetY}px, ${z}px) rotateY(${face}rad) scale(${1 + vis * depthScale})`;
        card.style.filter = `blur(${(1 - vis) * maxBlur}px)`;
        card.style.opacity = vis.toFixed(3);
        card.style.zIndex = Math.round(vis * 1000).toString();
        card.style.pointerEvents = vis > 0.25 ? 'auto' : 'none';
      }
      requestAnimationFrame(render);
    }

    if (stage) {
      stage.style.transformStyle = 'preserve-3d';
      requestAnimationFrame(render);
    }

    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    if (wrap) {
      wrap.addEventListener('mouseenter', pause);
      wrap.addEventListener('mouseleave', resume);
      wrap.addEventListener('focusin',  pause);
      wrap.addEventListener('focusout', resume);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateOrbitSettings);
    };
  }, []);

  if (!isClient) return null;

  return (
    <div className="overflow-hidden">
      {/* Background */}
      <div className="parallax-bg parallax-blur bg-overlay">
        <Image
          src="https://images.unsplash.com/photo-1554224311-beee4ece3c5d?w=3840&q=80"
          alt="Insurance products background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex pt-32 pb-20 md:pt-40 md:pb-32 relative items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs uppercase tracking-wider text-white/80 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              A-Rated Carriers • Top Commissions
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter mb-6">
              Premium Products That <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Sell Themselves</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8">
              From term life to annuities, we offer the complete portfolio with the best commission structures in the industry. Earn up to 85% commission.
            </p>
          </div>
        </div>
      </section>

      {/* Product Orbit */}
      <section className="py-20 bg-gradient-to-b from-black/40 to-black/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Complete Product Portfolio
            </h2>
            <p className="text-lg text-white/70">
              Everything you need to serve clients and maximize income
            </p>
          </div>

          <div className="flex flex-col w-full max-w-6xl mx-auto items-center">
            <div id="orbit-wrap" className="w-full px-2 sm:px-4 relative overflow-visible">
              <div className="relative w-full h-[400px] sm:h-[480px] md:h-[520px] lg:h-[560px] [perspective:1200px] flex items-center justify-center overflow-visible" style={{perspectiveOrigin: '50% 50%'}}>
                <div className="[transform-style:preserve-3d] w-full h-full relative" id="orbit-stage" style={{transformStyle: 'preserve-3d'}}>
                  {products.map((product, index) => (
                    <div key={index} data-orbit-card className="orbit-card absolute left-1/2 top-1/2 w-[min(90vw,340px)] sm:w-[min(85vw,360px)] md:w-[min(80vw,380px)] -translate-x-1/2 -translate-y-1/2 glass rounded-xl sm:rounded-2xl overflow-hidden card-hover">
                      <div className="relative">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={400}
                          height={200}
                          className="w-full h-40 sm:h-48 object-cover"
                        />
                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                          <span className="glass-strong rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs font-medium text-white">Premium</span>
                        </div>
                      </div>
                      <div className="p-4 sm:p-6 bg-black/30 backdrop-blur-sm">
                        <h3 className="text-lg sm:text-xl font-bold mb-2">{product.name}</h3>
                        <p className="text-white/70 text-sm mb-3">{product.description}</p>
                        <div className="space-y-2 text-xs sm:text-sm">
                          <div>
                            <span className="text-white/50">Best For: </span>
                            <span className="text-white/80">{product.bestFor}</span>
                          </div>
                          <div>
                            <span className="text-white/50">Commission: </span>
                            <span className="text-cyan-400 font-semibold">{product.commission}</span>
                          </div>
                          <div>
                            <span className="text-white/50">Avg Earnings: </span>
                            <span className="text-white font-semibold">{product.avgEarnings}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 text-center w-full">
              <Link href="/design-b/contact">
                <button className="btn-glow glass-strong text-white font-medium rounded-full px-8 py-4 text-base transition-all hover:scale-105">
                  Get Contracted Today
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Carriers */}
      <section className="py-20 bg-gradient-to-b from-black/60 to-black/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Trusted Carrier Partners
            </h2>
            <p className="text-lg text-white/70">
              We work exclusively with A-rated carriers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Mutual of Omaha', 'Foresters', 'AIG', 'Transamerica', 'National Life Group', 'American Amicable', 'Sagicor', 'Assurity'].map((carrier, index) => (
              <div key={index} className="glass rounded-lg p-6 flex items-center justify-center card-hover">
                <span className="text-lg font-semibold text-white">{carrier}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Ready to Start Selling?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Get contracted with top carriers and start earning immediately
          </p>
          <Link href="/design-b/contact">
            <button className="btn-glow glass-strong text-white font-medium rounded-full px-8 py-4 text-lg transition-all hover:scale-105 group">
              <span className="flex items-center justify-center gap-2">
                Apply Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

