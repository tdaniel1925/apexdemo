import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/apex.logo.png" 
                alt="Apex Affinity Group" 
                width={240} 
                height={80}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-md">
              Apex is a revolutionary insurance network marketing company that combines traditional insurance sales with cutting-edge AI technology and unlimited team-building opportunities.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                Get Started
              </Link>
              <Link
                href="/portal"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                Member Portal
              </Link>
            </div>
          </div>

          {/* Opportunity Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-tight text-gray-900">Opportunity</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/opportunity" className="hover:text-gray-900">
                  The Opportunity
                </Link>
              </li>
              <li>
                <Link href="/ai-revolution" className="hover:text-gray-900">
                  AI Tools
                </Link>
              </li>
              <li>
                <Link href="/why-insurance-sucks" className="hover:text-gray-900">
                  Insurance Sales Burnout
                </Link>
              </li>
              <li>
                <Link href="/why-apex" className="hover:text-gray-900">
                  Why Apex is Different
                </Link>
              </li>
              <li>
                <Link href="/team-building" className="hover:text-gray-900">
                  Team Building
                </Link>
              </li>
            </ul>
          </div>

          {/* Career Path Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-tight text-gray-900">Career Path</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/ranks" className="hover:text-gray-900">
                  Ranks & Advancement
                </Link>
              </li>
              <li>
                <Link href="/rewards" className="hover:text-gray-900">
                  Rewards & Lifestyle
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-gray-900">
                  Products We Offer
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-gray-900">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Company Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-tight text-gray-900">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/training" className="hover:text-gray-900">
                  Training & Support
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-gray-900">
                  Events & Calendar
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-gray-900">
                  Legal & Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Contact */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600">
              <p className="font-medium text-gray-900 mb-2">Connect With Us</p>
              <div className="flex items-center gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <p className="font-medium text-gray-900 mb-1">Contact</p>
              <p>281.269.2300</p>
              <p>888.533.6275</p>
              <p>info@3mark.com</p>
              <p className="text-xs mt-2">1600 Highway 6 Ste 400</p>
              <p className="text-xs">Sugar Land, TX 77478</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 pt-6">
          <p className="text-xs text-gray-500">
            © {currentYear} Apex Affinity Group. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <Link href="/legal" className="hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/legal" className="hover:text-gray-900">
              Terms of Service
            </Link>
            <Link href="/legal" className="hover:text-gray-900">
              Income Disclaimer
            </Link>
          </div>
        </div>

        {/* Compliance Footer */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="text-xs text-gray-500 space-y-2">
            <p className="font-semibold text-gray-700">INCOME DISCLOSURE STATEMENT:</p>
            <p>
              The income claims on this website represent exceptional results and are not typical. Most agents earn modest supplemental income. Success requires effort, skill, and time. Individual results vary. This is not a guarantee of income. Some agents earn nothing.
            </p>
            <p className="mt-2">
              <span className="font-semibold text-gray-700">BUSINESS OPPORTUNITY DISCLOSURE:</span> Apex Affinity Group is a network marketing company. As an independent contractor, you are responsible for your own business expenses and taxes. This is not an employment opportunity. Success is not guaranteed.
            </p>
            <p className="mt-2">
              Licensed in 47 states. License numbers available upon request. Not available in: NY, MA, VT (licensing pending)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
