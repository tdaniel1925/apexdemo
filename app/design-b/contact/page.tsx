'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ContactDesignBPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Background */}
      <div className="parallax-bg parallax-blur bg-overlay">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=3840&q=80"
          alt="Contact background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex pt-32 pb-20 md:pt-40 md:pb-32 relative items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center relative z-10 mb-12">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs uppercase tracking-wider text-white/80 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Get Started Today
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
              Your New Career Begins <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">With One Conversation</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Fill out the form below and one of our experienced team members will reach out within 24 hours to answer your questions and help you get started.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 glass-strong rounded-lg flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Message sent successfully!</p>
                    <p className="text-sm text-white/70">We will get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-white/80 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                  placeholder="Tell us about your goals and how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-glow glass-strong text-white font-medium rounded-full px-8 py-4 text-base transition-all hover:scale-105 w-full disabled:opacity-50"
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5" />
                </span>
              </button>
            </form>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <a href="tel:2812692300" className="glass rounded-xl p-6 hover:bg-white/10 transition-all text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-1">Phone</h3>
                <p className="text-white/70 text-sm">(281) 269-2300</p>
              </a>
              <a href="mailto:info@3mark.com" className="glass rounded-xl p-6 hover:bg-white/10 transition-all text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-1">Email</h3>
                <p className="text-white/70 text-sm">info@3mark.com</p>
              </a>
              <div className="glass rounded-xl p-6 text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-1">Location</h3>
                <p className="text-white/70 text-sm">2200 Renaissance Blvd, Suite 250<br/>King of Prussia, PA 19406</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

