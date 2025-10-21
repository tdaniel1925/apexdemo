'use client';

import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

interface HeroBadge {
  icon: LucideIcon;
  text: string;
  color?: string;
}

interface HeroCTA {
  text: string;
  href: string;
  icon: LucideIcon;
  variant: 'primary' | 'secondary';
}

interface HeroImage {
  url: string;
  alt: string;
}

interface HeroStat {
  icon: LucideIcon;
  text: string;
  color?: string;
}

interface HeroFeature {
  icon: LucideIcon;
  text: string;
  color?: string;
}

interface PageHeroProps {
  badge: HeroBadge;
  headline: string;
  description: string;
  ctas: HeroCTA[];
  images: HeroImage[]; // Expects 4 images
  stat?: HeroStat;
  sectionTitle: string;
  sectionDescription: string;
  features: HeroFeature[];
}

export default function PageHero({
  badge,
  headline,
  description,
  ctas,
  images,
  stat,
  sectionTitle,
  sectionDescription,
  features,
}: PageHeroProps) {
  useEffect(() => {
    // Ensure we have exactly 4 images
    if (images.length !== 4) {
      console.warn(`PageHero expects exactly 4 images, received ${images.length}`);
    }
  }, [images]);

  return (
    <section className="w-full pt-20">
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
        <div className="px-6 sm:px-8">
          <div className="relative mt-6 sm:mt-8 rounded-[18px] border border-slate-200 bg-white">
            {/* Badge */}
            <div className="flex items-center gap-2 px-6 sm:px-10 pt-3">
              <div className="h-6 rounded-full border border-slate-200 bg-white px-2.5 inline-flex items-center gap-2">
                <badge.icon className="h-[16px] w-[16px]" style={{ color: badge.color || '#f59e0b' }} strokeWidth={1.5} />
                <span className="text-xs font-medium text-slate-700">{badge.text}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 px-6 sm:px-10 pt-4 sm:pt-5 pb-5">
              {/* Left: Copy + CTAs */}
              <div className="flex flex-col justify-center">
                <h1 className="text-4xl sm:text-5xl tracking-tight font-semibold text-slate-900">
                  {headline}
                </h1>
                <p className="mt-3 text-[15px] leading-7 text-slate-600">
                  {description}
                </p>

                {/* CTAs */}
                <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {ctas.map((cta, index) => (
                    <Link
                      key={index}
                      href={cta.href}
                      className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium focus:outline-none focus-visible:outline-2 ${
                        cta.variant === 'primary'
                          ? 'bg-slate-900 text-white hover:bg-slate-800 focus-visible:outline-slate-900/40'
                          : 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 hover:border-slate-400 focus-visible:outline-slate-900/40'
                      }`}
                    >
                      <cta.icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                      {cta.text}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right: Photo collage */}
              <div>
                <div className="relative rounded-[14px] border border-slate-200 bg-white p-2 sm:p-3">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="col-span-1 flex flex-col gap-2 sm:gap-3">
                      <div className="h-32 sm:h-40 w-full relative overflow-hidden rounded-md border border-slate-200">
                        <Image
                          src={images[0]?.url}
                          alt={images[0]?.alt || 'Image 1'}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="h-28 sm:h-36 w-full relative overflow-hidden rounded-md border border-slate-200">
                        <Image
                          src={images[1]?.url}
                          alt={images[1]?.alt || 'Image 2'}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-2 sm:gap-3">
                      <div className="h-28 sm:h-36 w-full relative overflow-hidden rounded-md border border-slate-200">
                        <Image
                          src={images[2]?.url}
                          alt={images[2]?.alt || 'Image 3'}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="h-32 sm:h-40 w-full relative overflow-hidden rounded-md border border-slate-200">
                        <Image
                          src={images[3]?.url}
                          alt={images[3]?.alt || 'Image 4'}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating stat pill */}
                  {stat && (
                    <div className="absolute -bottom-2 left-4">
                      <div className="rounded-lg border border-slate-200 bg-white/90 backdrop-blur px-3 py-2 shadow-sm flex items-center gap-2">
                        <stat.icon className="h-[18px] w-[18px]" style={{ color: stat.color || '#10b981' }} strokeWidth={1.5} />
                        <span className="text-xs font-medium text-slate-900">{stat.text}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* What's inside: content overview */}
            <div className="border-t border-slate-200"></div>
            <div className="px-6 sm:px-10 py-3 sm:py-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-lg tracking-tight font-semibold text-slate-900">{sectionTitle}</h2>
                  <p className="mt-1 text-[13px] text-slate-600">
                    {sectionDescription}
                  </p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full md:w-auto">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2">
                      <feature.icon className="h-[18px] w-[18px]" style={{ color: feature.color || '#475569' }} strokeWidth={1.5} />
                      <span className="text-sm text-slate-800">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Subtle bottom spacer */}
          <div className="h-4"></div>
        </div>
      </div>
    </section>
  );
}
