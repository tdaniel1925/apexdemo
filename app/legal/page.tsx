'use client';

import PageHero from '@/components/ui/PageHero';
import { Sparkles, Scale, Shield, FileText, AlertTriangle, Rocket, PlayCircle, BookOpen, CheckCircle2, Eye, Lock, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function LegalPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <PageHero
        badge={{
          icon: Sparkles,
          text: 'Transparency First',
          color: '#64748b'
        }}
        headline="Legal disclosures and compliance information"
        description="We believe in being upfront about everything. Read our legal disclosures, privacy policy, and terms to understand your rights and responsibilities. We operate with complete integrity and full compliance with all state and federal regulations."
        ctas={[
          { text: 'Contact Legal', href: 'mailto:legal@apexaffinitygroup.com', icon: Rocket, variant: 'primary' },
          { text: 'Read Disclosures', href: '#disclosures', icon: PlayCircle, variant: 'secondary' }
        ]}
        images={[
          { url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80', alt: 'Legal Compliance' },
          { url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80', alt: 'Documentation' },
          { url: 'https://images.unsplash.com/photo-1554224311-beee4ece3c5d?w=800&q=80', alt: 'Regulations' },
          { url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80', alt: 'Professional' }
        ]}
        stat={{
          icon: Shield,
          text: '100% compliant',
          color: '#10b981'
        }}
        sectionTitle="Legal sections"
        sectionDescription="Browse our comprehensive legal documentation and disclosures."
        features={[
          { icon: FileText, text: 'Income Disclosure', color: '#f59e0b' },
          { icon: Eye, text: 'Privacy Policy', color: '#3b82f6' },
          { icon: Scale, text: 'Terms of Service', color: '#64748b' },
          { icon: Shield, text: 'Compliance', color: '#10b981' }
        ]}
      />

      {/* Legal Content */}
      <section id="disclosures" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Income Disclosure */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
                Income Disclosure Statement
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>IMPORTANT:</strong> The income figures presented represent exceptional results and are not typical. 
                  Your results will vary based on many factors including effort, commitment, and market conditions.
                </p>
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="font-semibold mb-2">2024 Average Annual Earnings:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Active Agents (50%): $8,500</li>
                    <li>• Senior Agents (25%): $24,000</li>
                    <li>• Team Leaders (15%): $62,000</li>
                    <li>• Directors (7%): $145,000</li>
                    <li>• Regional Directors (2.5%): $380,000</li>
                    <li>• Executive Directors (0.5%): $1,200,000+</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Privacy Policy */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
              <p className="text-gray-700">
                Apex Affinity Group respects your privacy. We collect personal information solely for responding to 
                inquiries and providing business opportunity information. We never sell your data.
              </p>
            </div>

            {/* Terms of Service */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You must be 18 years or older</li>
                <li>You must obtain proper state licensing</li>
                <li>You are an independent contractor</li>
                <li>You are responsible for your own taxes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
