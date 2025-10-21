'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Anchor } from 'lucide-react';
import { usePathname } from 'next/navigation';

const NavigationB = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/design-b' },
    { name: 'About', href: '/design-b/about' },
    { name: 'Opportunity', href: '/design-b/opportunity' },
    { name: 'AI Tools', href: '/design-b/ai-revolution' },
    { name: 'Events', href: '/design-b/events' },
    {
      name: 'Why Apex',
      items: [
        { name: 'Insurance Sales Burnout', href: '/design-b/why-insurance-sucks' },
        { name: 'Why Apex is Different', href: '/design-b/why-apex' },
        { name: 'Success Stories', href: '/design-b/success-stories' },
        { name: 'FAQ', href: '/design-b/faq' },
      ]
    },
    {
      name: 'Career Path',
      items: [
        { name: 'Ranks & Advancement', href: '/design-b/ranks' },
        { name: 'Rewards & Lifestyle', href: '/design-b/rewards' },
        { name: 'Team Building System', href: '/design-b/team-building' },
        { name: 'Products We Offer', href: '/design-b/products' },
      ]
    },
    {
      name: 'Resources',
      items: [
        { name: 'Training & Support', href: '/design-b/training' },
        { name: 'Blog', href: '/design-b/blog' },
        { name: 'Legal & Compliance', href: '/design-b/legal' },
      ]
    },
    { name: 'Contact', href: '/design-b/contact' },
  ];

  const getDesignAPath = (currentPath: string) => {
    return currentPath.replace('/design-b', '') || '/';
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'header-blur' : ''}`}
      style={{ transform: scrolled ? 'translateY(0)' : 'translateY(-100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="p-1.5 sm:p-2 glass rounded-lg">
              <Anchor className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <Link href="/design-b" className="text-lg sm:text-xl font-semibold text-white tracking-tight">
              Apex Affinity Group
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex xl:gap-8 gap-x-6 items-center">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.items && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.items ? (
                  <>
                    <button className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors">
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-56 glass-strong rounded-xl py-2 z-50">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || '/design-b'}
                    className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Design Toggle Badge */}
            <Link
              href={getDesignAPath(pathname)}
              className="glass-strong transition-all hover:scale-105 text-xs font-medium text-white rounded-full px-4 py-2"
            >
              Switch to Design A
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden glass p-2 sm:p-2.5 hover:bg-white/10 transition-colors rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-50 transition-all duration-300">
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 glass sm:p-3 p-2.5 hover:bg-white/10 transition-colors rounded-lg"
          >
            <X className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </button>

          <div className="flex flex-col h-full pt-20 sm:pt-24 pb-8 px-6 sm:px-8">
            <nav className="flex-1 space-y-6 sm:space-y-8">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.items ? (
                    <>
                      <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">
                        {item.name}
                      </div>
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-xl sm:text-2xl font-medium text-white/80 hover:text-white transition-colors mb-3"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      href={item.href || '/design-b'}
                      className="block text-2xl sm:text-3xl md:text-4xl font-medium text-white/80 hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="mt-auto space-y-3">
              <Link
                href={getDesignAPath(pathname)}
                className="w-full glass-strong text-base sm:text-lg font-medium text-white rounded-2xl px-6 sm:px-8 py-3 sm:py-4 hover:bg-white/20 transition-colors block text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Switch to Design A
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavigationB;

