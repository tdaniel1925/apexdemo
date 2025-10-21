'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Opportunity', href: '/opportunity' },
    { name: 'AI Tools', href: '/ai-revolution' },
    {
      name: 'Why Apex',
      items: [
        { name: 'Insurance Sales Burnout', href: '/why-insurance-sucks' },
        { name: 'Why Apex is Different', href: '/why-apex' },
        { name: 'Success Stories', href: '/success-stories' },
        { name: 'FAQ', href: '/faq' },
      ]
    },
    {
      name: 'Career Path',
      items: [
        { name: 'Ranks & Advancement', href: '/ranks' },
        { name: 'Rewards & Lifestyle', href: '/rewards' },
        { name: 'Team Building System', href: '/team-building' },
        { name: 'Products We Offer', href: '/products' },
      ]
    },
    {
      name: 'Resources',
      items: [
        { name: 'Training & Support', href: '/training' },
        { name: 'Events & Calendar', href: '/events' },
        { name: 'Blog', href: '/blog' },
        { name: 'Legal & Compliance', href: '/legal' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  const handleMouseEnter = (name: string) => {
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/apex.logo.png" 
              alt="Apex Affinity Group" 
              width={240} 
              height={80}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.items && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {item.items ? (
                  <>
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        item.items.some(subItem => pathname === subItem.href)
                          ? 'text-emerald-600 bg-emerald-50'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              pathname === subItem.href
                                ? 'text-emerald-600 bg-emerald-50 font-medium'
                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || '/'}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      pathname === item.href
                        ? 'text-emerald-600 bg-emerald-50'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Portal Button */}
            <Link
              href="/portal"
              className="ml-2 relative z-10 overflow-hidden transition-transform duration-150 ease-out active:scale-[0.98] text-white bg-gray-900 hover:bg-gray-800 px-6 py-2.5 text-sm rounded-lg font-medium"
            >
              Member Portal
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden inline-flex items-center gap-2 text-sm font-medium bg-gray-50 border border-gray-200 rounded-lg px-3 py-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            Menu
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-gray-900/40 backdrop-blur-sm">
          <div className="bg-white border border-gray-200 rounded-2xl m-4 shadow-xl max-h-[calc(100vh-120px)] overflow-y-auto">
            <div className="flex border-b border-gray-200 px-4 py-3 items-center justify-between">
              <Image 
                src="/apex.logo.png" 
                alt="Apex Affinity Group" 
                width={160} 
                height={53}
                className="h-10 w-auto"
              />
              <button
                className="inline-flex hover:bg-gray-100 transition bg-gray-50 w-9 h-9 border border-gray-200 rounded-lg items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="px-4 py-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.items ? (
                    <>
                      <div className="px-3 py-2 text-xs font-bold text-gray-500 uppercase tracking-wide">
                        {item.name}
                      </div>
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-6 py-2 text-sm rounded-lg transition-colors ${
                            pathname === subItem.href
                              ? 'text-emerald-600 bg-emerald-50 font-medium'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      href={item.href || '/'}
                      className={`block px-3 py-2 rounded-lg transition-colors ${
                        pathname === item.href
                          ? 'text-emerald-600 bg-emerald-50 font-semibold'
                          : 'text-gray-900 hover:bg-gray-50 font-medium'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Portal Button */}
              <Link
                href="/portal"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-medium text-white hover:bg-emerald-500 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Member Portal
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
