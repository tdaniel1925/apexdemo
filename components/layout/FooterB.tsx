'use client';

import Link from 'next/link';
import { Anchor, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const FooterB = () => {
  return (
    <footer className="bg-black/40 border-white/10 border-t py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 glass rounded-lg sm:rounded-xl">
                <Anchor className="text-white w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">Apex Affinity Group</span>
            </div>
            
            <p className="text-sm sm:text-base text-white/70 mb-6 sm:mb-8 max-w-md leading-relaxed">
              Revolutionary insurance sales through AI-powered marketing. Build extraordinary income with personalized service and exclusive opportunities.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 text-sm sm:text-base"
                />
                <button className="glass-strong hover:bg-white/20 transition-all px-6 py-2.5 sm:py-3 rounded-lg text-white font-medium text-sm sm:text-base whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/design-b" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/design-b/opportunity" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">Opportunity</Link></li>
              <li><Link href="/design-b/products" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/design-b/ranks" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">Ranks & Rewards</Link></li>
              <li><Link href="/design-b/success-stories" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-4 sm:mb-6">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="text-white/70 flex-shrink-0 mt-0.5 w-4 h-4" />
                <span className="text-sm sm:text-base text-white/70">contact@3mark.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="text-white/70 flex-shrink-0 mt-0.5 w-4 h-4" />
                <span className="text-sm sm:text-base text-white/70">2200 Renaissance Blvd, Suite 250, King of Prussia, PA 19406</span>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6 sm:mt-8">
              <a href="#" className="glass rounded-lg p-2 hover:bg-white/20 transition-all">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="glass rounded-lg p-2 hover:bg-white/20 transition-all">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="glass rounded-lg p-2 hover:bg-white/20 transition-all">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-white/50 text-center sm:text-left">
            © 2024 Apex Affinity Group. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/design-b/legal" className="text-xs sm:text-sm text-white/50 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/design-b/legal" className="text-xs sm:text-sm text-white/50 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/design-b/legal" className="text-xs sm:text-sm text-white/50 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterB;

