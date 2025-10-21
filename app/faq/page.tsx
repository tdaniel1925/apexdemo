'use client';

import { useState } from 'react';
import PageHero from '@/components/ui/PageHero';
import { Sparkles, HelpCircle, DollarSign, Users, Shield, Rocket, PlayCircle, BarChart3, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          q: 'What exactly is Apex Affinity Group?',
          a: 'We are a life insurance network marketing company that combines traditional insurance sales with modern technology (AI) and team-building opportunities.'
        },
        {
          q: 'Do I need insurance experience?',
          a: 'No! Our comprehensive training program teaches you everything from scratch. Many of our top earners had zero experience.'
        },
        {
          q: 'How much does it cost to get started?',
          a: 'Initial investment: $99-$299 (starter kit). Insurance licensing: $200-$500. Total startup: $300-$800. No monthly fees.'
        },
        {
          q: 'Can I do this part-time?',
          a: 'Yes! Many successful agents started part-time. You work your own schedule and hours.'
        }
      ]
    },
    {
      category: 'Income & Compensation',
      questions: [
        {
          q: 'How much money can I realistically make?',
          a: 'First year: $20K-$60K part-time, $60K-$150K full-time. Top earners: $200K-$1M+. It depends on your effort and team building.'
        },
        {
          q: 'When will I get my first paycheck?',
          a: 'Most agents earn their first commission within 30-60 days. Commissions are paid within 72 hours of policy approval.'
        },
        {
          q: 'What percentage commission do I earn?',
          a: 'Personal sales: 70-85% commission. Team overrides: 5-20% depending on your rank.'
        }
      ]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <PageHero
        badge={{
          icon: Sparkles,
          text: 'Get Answers',
          color: '#3b82f6'
        }}
        headline="Everything you need to know about Apex"
        description="We believe in complete transparency. Find answers to the most common questions about getting started, earning income, and building your business at Apex Affinity Group. If your question is not here, reach out and get a straight answer within 24 hours."
        ctas={[
          { text: 'Contact Us', href: '/contact', icon: Rocket, variant: 'primary' },
          { text: 'Read FAQs', href: '#faq', icon: PlayCircle, variant: 'secondary' }
        ]}
        images={[
          { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80', alt: 'Questions Answered' },
          { url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80', alt: 'Support' },
          { url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80', alt: 'Help Center' },
          { url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80', alt: 'Guidance' }
        ]}
        stat={{
          icon: BarChart3,
          text: '30+ common questions',
          color: '#3b82f6'
        }}
        sectionTitle="FAQ topics"
        sectionDescription="Browse frequently asked questions organized by category."
        features={[
          { icon: HelpCircle, text: 'Getting Started', color: '#3b82f6' },
          { icon: DollarSign, text: 'Income', color: '#10b981' },
          { icon: Users, text: 'Team Building', color: '#f59e0b' },
          { icon: Shield, text: 'Legal', color: '#64748b' }
        ]}
      />

      {/* FAQ Content */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const index = catIndex * 100 + faqIndex;
                  const isOpen = openIndex === index;

                  return (
                    <div key={faqIndex} className="border border-slate-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition"
                      >
                        <span className="text-lg font-semibold pr-4">{faq.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 text-gray-700">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl tracking-tighter font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-blue-50 mb-8">
            Contact us directly for personalized answers
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Get In Touch
            <Rocket className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
