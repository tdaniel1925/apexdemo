'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Shield, ArrowRight } from 'lucide-react';

export default function LegalDesignBPage() {
  return (
    <div className="overflow-hidden">
      <div className="parallax-bg parallax-blur bg-overlay">
        <Image src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=3840&q=80" alt="Legal" fill className="object-cover" priority />
      </div>

      <section className="min-h-screen flex pt-32 pb-20 md:pt-40 md:pb-32 relative items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center relative z-10 mb-12">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs uppercase tracking-wider text-white/80 mb-6">
              <Shield className="w-3.5 h-3.5" />
              Legal & Compliance
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
              Privacy & <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Terms</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Our commitment to protecting your privacy and ensuring transparent business practices.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
              <div className="space-y-4 text-white/70">
                <p>Apex Affinity Group (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.</p>
                <h3 className="text-lg font-semibold text-white mt-6">Information We Collect</h3>
                <p>We collect information you provide directly to us, including name, email address, phone number, and other contact details when you register, apply, or contact us.</p>
                <h3 className="text-lg font-semibold text-white mt-6">How We Use Your Information</h3>
                <p>We use your information to process applications, provide support, send updates about our services, and improve our platform.</p>
                <h3 className="text-lg font-semibold text-white mt-6">Data Security</h3>
                <p>We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse.</p>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
              <div className="space-y-4 text-white/70">
                <p>By accessing or using Apex Affinity Group services, you agree to be bound by these Terms of Service.</p>
                <h3 className="text-lg font-semibold text-white mt-6">Agent Agreement</h3>
                <p>Independent contractor status, commission structure, and performance requirements are detailed in your agent agreement.</p>
                <h3 className="text-lg font-semibold text-white mt-6">Income Disclaimers</h3>
                <p>Income examples shown represent potential earnings and are not guarantees. Individual results vary based on effort, skill, and market conditions.</p>
                <h3 className="text-lg font-semibold text-white mt-6">Compliance</h3>
                <p>All agents must maintain proper licensing and comply with state and federal insurance regulations.</p>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Cookie Policy</h2>
              <div className="space-y-4 text-white/70">
                <p>We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. You can control cookie settings through your browser preferences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Questions About Our Policies?</h2>
          <p className="text-lg text-white/70 mb-8">Contact us for clarification on any legal or compliance matters</p>
          <Link href="/design-b/contact">
            <button className="btn-glow glass-strong text-white font-medium rounded-full px-8 py-4 text-lg transition-all hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

