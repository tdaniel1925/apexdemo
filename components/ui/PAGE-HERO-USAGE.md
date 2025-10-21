# PageHero Component Usage Guide

## Overview

The `PageHero` component is a reusable, flexible hero section designed for all non-homepage pages. It features a modern, grid-based layout with customizable content, features, and image showcases.

## Import

```tsx
import PageHero from '@/components/ui/PageHero';
import { Icon1, Icon2, Icon3 } from 'lucide-react';
```

## Props

```typescript
interface PageHeroProps {
  eyebrow: string;              // Small text above headline
  headline: string;              // Main H1 heading
  features: HeroFeature[];      // 3 features with icons (displays horizontally)
  leftColumn: {
    title: string;              // Left column title
    description: string;        // Left column description
    buttonText: string;         // CTA button text
    buttonLink: string;         // CTA button link
  };
  rightColumn: {
    text: string;               // Right column text
    highlightedText: string;    // Bolded portion of text
  };
  images: HeroImage[];          // 1-4 images with overlays
}

interface HeroFeature {
  icon: LucideIcon;             // Lucide icon component
  text: string;                 // Feature text
}

interface HeroImage {
  url: string;                  // Image URL
  icon: LucideIcon;             // Icon for top-left badge
  badge: string;                // Badge text (top-right)
  title: string;                // Title overlay (bottom)
}
```

## Example 1: 4 Images (Default Grid)

```tsx
import PageHero from '@/components/ui/PageHero';
import { Plus, Brain, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

export default function AIRevolutionPage() {
  return (
    <div className="pt-20">
      <PageHero
        eyebrow="Next Generation Technology"
        headline="Introducing our AI-powered workforce."
        features={[
          { icon: Plus, text: 'Advanced Intelligence' },
          { icon: Plus, text: 'Seamless Workflow' },
          { icon: Plus, text: 'Infinite Scale' }
        ]}
        leftColumn={{
          title: 'Experience the future today',
          description: 'Discover how our intelligent AI agents revolutionize productivity and transform business operations at every scale.',
          buttonText: 'Explore Capabilities',
          buttonLink: '/contact'
        }}
        rightColumn={{
          text: 'Our breakthrough technology merges',
          highlightedText: 'artificial intelligence excellence with enterprise-grade solutions that evolve with your business needs.'
        }}
        images={[
          {
            url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
            icon: Brain,
            badge: 'Deep Learning',
            title: 'Lead Generation AI'
          },
          {
            url: 'https://images.unsplash.com/photo-1676277791608-ac54525aa94c?w=800',
            icon: Zap,
            badge: 'Process Engine',
            title: 'Smart Follow-Up'
          },
          {
            url: 'https://images.unsplash.com/photo-1655720406770-12ea329b5b61?w=800',
            icon: TrendingUp,
            badge: 'Data Intelligence',
            title: 'Analytics Dashboard'
          },
          {
            url: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
            icon: ShieldCheck,
            badge: 'Cyber Defense',
            title: 'Security AI'
          }
        ]}
      />
      {/* Rest of your page content */}
    </div>
  );
}
```

## Example 2: Single Large Image

```tsx
import PageHero from '@/components/ui/PageHero';
import { Plus, Award, Users, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <PageHero
        eyebrow="Our Story"
        headline="Built by agents, for agents."
        features={[
          { icon: Plus, text: 'Agent-Focused' },
          { icon: Plus, text: 'Proven System' },
          { icon: Plus, text: 'Real Support' }
        ]}
        leftColumn={{
          title: 'Welcome to Apex Affinity',
          description: 'We understand the challenges of insurance sales because we have been there. Our mission is to empower agents with the tools and support they deserve.',
          buttonText: 'Learn Our Story',
          buttonLink: '/about'
        }}
        rightColumn={{
          text: 'Founded in Atlanta, GA, Apex combines',
          highlightedText: 'decades of insurance expertise with cutting-edge AI technology to revolutionize how agents build wealth.'
        }}
        images={[
          {
            url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200',
            icon: Award,
            badge: 'Est. 2020',
            title: 'Apex Affinity Team'
          }
        ]}
      />
      {/* Rest of your page content */}
    </div>
  );
}
```

## Example 3: Products Page (2 Images)

```tsx
import PageHero from '@/components/ui/PageHero';
import { Plus, DollarSign, TrendingUp } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="pt-20">
      <PageHero
        eyebrow="What We Offer"
        headline="Premium insurance products with top commissions."
        features={[
          { icon: Plus, text: 'High Commissions' },
          { icon: Plus, text: 'Quality Carriers' },
          { icon: Plus, text: 'Fast Approvals' }
        ]}
        leftColumn={{
          title: 'Products that sell themselves',
          description: 'From term life to annuities, we offer the complete portfolio of insurance products with the best commission structures in the industry.',
          buttonText: 'View All Products',
          buttonLink: '/products'
        }}
        rightColumn={{
          text: 'Partner with',
          highlightedText: 'A-rated carriers and earn up to 85% commission on personal sales plus team overrides.'
        }}
        images={[
          {
            url: 'https://images.unsplash.com/photo-1554224311-beee4ece3c5d?w=800',
            icon: DollarSign,
            badge: 'Life Insurance',
            title: 'Term & Whole Life'
          },
          {
            url: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800',
            icon: TrendingUp,
            badge: 'Retirement',
            title: 'Annuities & IUL'
          }
        ]}
      />
      {/* Rest of your page content */}
    </div>
  );
}
```

## Image Layout Behavior

- **1 image**: Single large image (h-[420px]) spans full width
- **2-4 images**: Grid with 2 columns (h-[200px] each)

## Styling Notes

- Uses zinc color palette for modern, professional look
- Background dividers create subtle grid pattern
- Hover effects on images (scale on hover)
- Responsive: stacks vertically on mobile, 2-column on desktop
- Features bar collapses on mobile (hidden sm:grid)

## Customization

You can customize icons, colors, and images based on each page's theme:

**For AI/Tech pages:** Brain, Zap, Cpu, BotIcon  
**For Career pages:** TrendingUp, Award, Target, Users  
**For Products pages:** DollarSign, Shield, FileText  
**For Training pages:** BookOpen, GraduationCap, Lightbulb  

## Full Page Implementation Example

```tsx
'use client';

import { useEffect } from 'react';
import PageHero from '@/components/ui/PageHero';
import { Plus, Target, Users, Award } from 'lucide-react';

export default function ExamplePage() {
  useEffect(() => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHero
          eyebrow="Your Eyebrow Text"
          headline="Your headline goes here."
          features={[
            { icon: Plus, text: 'Feature One' },
            { icon: Plus, text: 'Feature Two' },
            { icon: Plus, text: 'Feature Three' }
          ]}
          leftColumn={{
            title: 'Left column title',
            description: 'Left column description text goes here.',
            buttonText: 'Call to Action',
            buttonLink: '/contact'
          }}
          rightColumn={{
            text: 'Your right column text with',
            highlightedText: 'highlighted text for emphasis.'
          }}
          images={[
            {
              url: 'https://your-image-url.jpg',
              icon: Award,
              badge: 'Badge Text',
              title: 'Image Title'
            }
          ]}
        />
      </div>

      {/* Rest of your page sections below */}
      <section className="py-20 bg-white">
        {/* Your content */}
      </section>
    </div>
  );
}
```

## Tips

1. Keep headlines concise (1-2 lines max)
2. Use high-quality images (800px+ width recommended)
3. Feature icons should be related to your content
4. Button links should lead to logical next steps
5. Highlighted text in right column should be key value prop

The component is now ready to use across all your pages!

