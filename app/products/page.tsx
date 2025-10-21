'use client';

import PageHero from '@/components/ui/PageHero';
import { Sparkles, Shield, TrendingUp, Heart, DollarSign, Rocket, PlayCircle, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function ProductsPage() {
  const products = [
    {
      name: 'Term Life Insurance',
      description: 'Pure life insurance protection for a specific term (10, 20, 30 years)',
      bestFor: 'Young families, mortgage protection, temporary needs',
      commission: '50% first year, 5% renewals',
      avgEarnings: '$180-$600 first year + residuals'
    },
    {
      name: 'Whole Life Insurance',
      description: 'Permanent coverage with cash value accumulation',
      bestFor: 'Estate planning, wealth building, lifetime protection',
      commission: '60% first year, 8% renewals',
      avgEarnings: '$1,440-$3,600 first year + residuals'
    },
    {
      name: 'Index Universal Life (IUL)',
      description: 'Universal life tied to market index performance',
      bestFor: 'Growth potential without market risk',
      commission: '60% first year, 7% renewals',
      avgEarnings: '$2,880-$7,200 first year + residuals'
    },
    {
      name: 'Annuities',
      description: 'Retirement income vehicles, guaranteed payments',
      bestFor: 'Retirees, conservative investors, guaranteed income',
      commission: '4-7% upfront (varies by product)',
      avgEarnings: '$4,000-$35,000 per sale'
    },
    {
      name: 'Final Expense Insurance',
      description: 'Small whole life policies for burial costs',
      bestFor: 'Seniors, limited income, simplified underwriting',
      commission: '100%+ first year',
      avgEarnings: '$600-$1,200 first year'
    },
    {
      name: 'Medicare Supplements',
      description: 'Gap coverage for Medicare beneficiaries',
      bestFor: 'Seniors 65+, retirees on Medicare',
      commission: '$200-$400 per policy, ongoing renewals',
      avgEarnings: '$200-$400 + renewal income'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <PageHero
        badge={{
          icon: Sparkles,
          text: 'A-Rated Carriers • Top Commissions',
          color: '#10b981'
        }}
        headline="Premium products that sell themselves"
        description="From term life to annuities, we offer the complete portfolio with the best commission structures in the industry. Partner with top-rated carriers and earn up to 85% commission on personal sales plus lucrative team overrides."
        ctas={[
          { text: 'Get Contracted', href: '/contact', icon: Rocket, variant: 'primary' },
          { text: 'View Commission Grid', href: '#commissions', icon: PlayCircle, variant: 'secondary' }
        ]}
        images={[
          { url: 'https://images.unsplash.com/photo-1554224311-beee4ece3c5d?w=800&q=80', alt: 'Life Insurance' },
          { url: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80', alt: 'Retirement Planning' },
          { url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80', alt: 'Financial Security' },
          { url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80', alt: 'Insurance Portfolio' }
        ]}
        stat={{
          icon: BarChart3,
          text: '$500M+ annual premium',
          color: '#10b981'
        }}
        sectionTitle="Product categories"
        sectionDescription="Explore our comprehensive portfolio of insurance and financial products."
        features={[
          { icon: Shield, text: 'Life Insurance', color: '#10b981' },
          { icon: TrendingUp, text: 'Annuities', color: '#6366f1' },
          { icon: Heart, text: 'Final Expense', color: '#ef4444' },
          { icon: DollarSign, text: 'Medicare', color: '#f59e0b' }
        ]}
      />

      {/* Product Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
              Complete Product Portfolio
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to serve clients and maximize income
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <div className="text-xs font-medium text-gray-500 mb-1">Best For:</div>
                    <div className="text-sm text-gray-700">{product.bestFor}</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 mb-1">Commission:</div>
                    <div className="text-sm font-semibold text-cyan-600">{product.commission}</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 mb-1">Avg Earnings:</div>
                    <div className="text-sm font-semibold text-gray-900">{product.avgEarnings}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carriers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
              Trusted Carrier Partners
            </h2>
            <p className="text-lg text-gray-600">
              We work exclusively with A-rated carriers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Mutual of Omaha', 'Foresters', 'AIG', 'Transamerica', 'National Life Group', 'American Amicable', 'Sagicor', 'Assurity'].map((carrier, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-slate-200 flex items-center justify-center">
                <span className="text-lg font-semibold text-gray-700">{carrier}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
            Get Contracted with Top Carriers Today
          </h2>
          <p className="text-lg text-cyan-50 mb-8">
            Start selling industry-leading products with the highest commissions
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Apply Now
            <Rocket className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
