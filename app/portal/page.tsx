'use client';

import { useState } from 'react';
import PageHero from '@/components/ui/PageHero';
import Button from '@/components/ui/Button';
import { Sparkles, User, LogIn, UserPlus, Mail, Lock, Rocket, PlayCircle, BookOpen, CheckCircle2, BarChart3, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function PortalPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isLogin ? 'Logging in...' : 'Signing up...', { email, password, name });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <PageHero
        badge={{
          icon: Sparkles,
          text: 'Member Access',
          color: '#6366f1'
        }}
        headline="Login to your agent dashboard"
        description="Access your personalized dashboard to track sales, manage your team, view commissions, and access all the tools you need to succeed. Everything you need to manage and grow your business is available 24/7 from your secure agent portal."
        ctas={[
          { text: 'Need Help?', href: '/contact', icon: Rocket, variant: 'primary' },
          { text: 'Watch Tutorial', href: '#tutorial', icon: PlayCircle, variant: 'secondary' }
        ]}
        images={[
          { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80', alt: 'Dashboard' },
          { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', alt: 'Analytics' },
          { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', alt: 'Reports' },
          { url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80', alt: 'Team Management' }
        ]}
        stat={{
          icon: Users,
          text: '10,000+ active users',
          color: '#6366f1'
        }}
        sectionTitle="Portal features"
        sectionDescription="Explore what you can do inside your agent dashboard."
        features={[
          { icon: BarChart3, text: 'Track Sales', color: '#10b981' },
          { icon: Users, text: 'Team Dashboard', color: '#6366f1' },
          { icon: TrendingUp, text: 'Commissions', color: '#f59e0b' },
          { icon: BookOpen, text: 'Resources', color: '#64748b' }
        ]}
      />

      {/* Login Form */}
      <section className="py-20 bg-white">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h1>
              <p className="text-gray-600">
                {isLogin ? 'Sign in to access your agent portal' : 'Join Apex Affinity Group today'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={!isLogin}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none"
                    placeholder="John Doe"
                  />
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                {isLogin ? (
                  <>
                    <LogIn className="w-5 h-5" />
                    Sign In
                  </>
                ) : (
                  <>
                    <UserPlus className="w-5 h-5" />
                    Create Account
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-200 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <span className="text-indigo-600 hover:text-indigo-700 font-semibold">
                  {isLogin ? 'Sign up' : 'Sign in'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
