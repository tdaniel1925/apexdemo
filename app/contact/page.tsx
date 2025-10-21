'use client';

import { useState } from 'react';
import PageHero from '@/components/ui/PageHero';
import Button from '@/components/ui/Button';
import { Sparkles, MessageSquare, Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export default function ContactPage() {
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
      {/* Hero */}
      <PageHero
        badge={{
          icon: Sparkles,
          text: 'Get Started Today',
          color: '#10b981'
        }}
        headline="Your new career begins with one conversation"
        description="Fill out the form below and one of our experienced team members will reach out within 24 hours to answer your questions and help you get started. We respond to every inquiry personally—no automated responses, just real conversations."
        ctas={[
          { text: 'Call Us Now', href: 'tel:2812692300', icon: Phone, variant: 'primary' },
          { text: 'Email Us', href: 'mailto:info@3mark.com', icon: Mail, variant: 'secondary' }
        ]}
        images={[
          { url: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80', alt: 'Contact' },
          { url: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80', alt: 'Support' },
          { url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80', alt: 'Conversation' },
          { url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80', alt: 'Help' }
        ]}
        stat={{
          icon: Clock,
          text: '< 24hr response time',
          color: '#10b981'
        }}
        sectionTitle="Contact methods"
        sectionDescription="Choose your preferred way to connect with our team."
        features={[
          { icon: MessageSquare, text: 'Contact Form', color: '#10b981' },
          { icon: Phone, text: 'Phone', color: '#3b82f6' },
          { icon: Mail, text: 'Email', color: '#f59e0b' },
          { icon: MapPin, text: 'Location', color: '#64748b' }
        ]}
      />

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-cyan-50 border border-cyan-200 rounded-lg flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-cyan-900">Message sent successfully!</p>
                  <p className="text-sm text-cyan-700">We will get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
