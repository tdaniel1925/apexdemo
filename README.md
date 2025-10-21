# Apex Affinity Group Website

A modern, AI-powered insurance network marketing website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Project Overview

This is a comprehensive multi-page website for Apex Affinity Group, an insurance network marketing company. The site features:

- **18 fully routed pages** covering all aspects of the business
- **Responsive design** with mobile-first approach  
- **Smooth animations** using Intersection Observer
- **Functional contact form** with API integration
- **Modern UI/UX** inspired by contemporary design trends
- **SEO optimized** with proper meta tags and structure

## 📁 Project Structure

```
apex-website/
├── app/
│   ├── about/              # About Us page
│   ├── ai-revolution/      # AI Tools & Features
│   ├── api/
│   │   └── contact/        # Contact form API endpoint
│   ├── blog/               # Blog & News
│   ├── contact/            # Contact page with form
│   ├── events/             # Events & Calendar
│   ├── faq/                # FAQ page
│   ├── legal/              # Legal & Compliance
│   ├── opportunity/        # The Opportunity (with income calculator)
│   ├── portal/             # Member Login Portal
│   ├── products/           # Products We Offer
│   ├── ranks/              # Levels of Achievement
│   ├── rewards/            # Rewards & Lifestyle
│   ├── success-stories/    # Success Stories & Testimonials
│   ├── team-building/      # Team Building & Duplication
│   ├── training/           # Training & Resources
│   ├── why-apex/           # Why Apex Is The Solution
│   ├── why-insurance-sucks/ # Problems with Traditional Insurance
│   ├── globals.css         # Global styles with animations
│   ├── layout.tsx          # Root layout with Navigation & Footer
│   └── page.tsx            # Homepage
├── components/
│   ├── layout/
│   │   ├── Footer.tsx      # Global footer component
│   │   └── Navigation.tsx  # Global navigation with mobile menu
│   └── ui/
│       └── Button.tsx      # Reusable button component
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
└── types/                  # TypeScript type definitions
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Emerald Green (#10b981) - Represents growth and prosperity
- **Secondary**: Blue (#3b82f6) - Trust and professionalism
- **Accent**: Purple (#8b5cf6) - Innovation and AI
- **Base**: Gray scale with white backgrounds

### Typography
- Font Family: Inter (Google Fonts)
- Tracking: Tight tracking on headlines (-0.05em)
- Hierarchy: Clear size progression (4xl → 5xl → 6xl → 7xl)

### Animations
- Fade & slide-in on scroll using Intersection Observer
- Smooth transitions on hover states
- Staggered animations for multiple elements
- Mobile-friendly performance

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS keyframes + Intersection Observer
- **Utilities**: clsx, tailwind-merge

## 🚦 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## 📄 Key Pages

### Homepage (`/`)
- Hero section with CTA buttons
- Problem section (6 pain points)
- Solution section (4 AI-powered solutions)
- Success metrics
- Testimonials
- Final CTA

### About Us (`/about`)
- Founder story (Bill Propper, CEO)
- Company timeline
- Core values
- Industry recognition
- Leadership team

### The Opportunity (`/opportunity`)
- Interactive income calculator
- Multiple income streams breakdown
- Getting started requirements (3 steps)
- Real income scenarios
- Income disclaimer

### Contact (`/contact`)
- Functional contact form
- Direct contact information
- Business hours
- Quick stats sidebar
- Form validation & submission

### AI Revolution (`/ai-revolution`)
- 7 comprehensive AI tools
- Real results and statistics
- Tech-savvy reassurance
- Tool demonstrations

### Portal (`/portal`)
- Login/signup interface
- Email/password authentication
- Remember me functionality
- Forgot password link

## 🔧 Customization

### Adding Content
1. Navigate to the appropriate page file in `app/[page-name]/page.tsx`
2. Update the JSX content
3. Add images to `public/` folder
4. Update styling as needed

### Updating Founder Info
Currently set to:
- **Name**: Bill Propper
- **Role**: CEO & Founder
- **Location**: Atlanta, GA

Update in `/app/about/page.tsx`

### Contact Information
- **Phone**: (404) 555-3MARK (36275)
- **Email**: info@3mark.com
- **Address**: 123 Insurance Way, Suite 500, Atlanta, GA 30303

Update in `/components/layout/Footer.tsx` and `/app/contact/page.tsx`

## 📧 Contact Form Integration

The contact form currently logs to console. To make it functional:

1. **Email Service Options**:
   - SendGrid
   - AWS SES
   - Resend
   - Nodemailer

2. **Update API Route**:
   Edit `app/api/contact/route.ts` to integrate your email service

3. **Environment Variables**:
   Create `.env.local`:
   ```env
   EMAIL_API_KEY=your_key_here
   EMAIL_FROM=noreply@3mark.com
   EMAIL_TO=info@3mark.com
   ```

## 🔐 Authentication

Currently using a basic UI. To implement full authentication:

1. **Install NextAuth**:
   ```bash
   npm install next-auth
   ```

2. **Setup Auth API Route**:
   Create `app/api/auth/[...nextauth]/route.ts`

3. **Add Providers**:
   - Email/Password
   - Google OAuth
   - Microsoft OAuth
   - etc.

## 📊 Analytics Integration

Add analytics by updating `app/layout.tsx`:

```typescript
// Google Analytics
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  `}
</Script>
```

## 🎯 SEO Optimization

Each page includes:
- Unique page titles
- Meta descriptions
- Proper heading hierarchy
- Semantic HTML
- Image alt texts
- Structured data ready

To enhance SEO:
1. Add Open Graph meta tags
2. Implement structured data (JSON-LD)
3. Create `sitemap.xml`
4. Add `robots.txt`

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Other Platforms
- Netlify
- AWS Amplify
- Digital Ocean
- Custom server with `npm run build && npm start`

## 📱 Mobile Responsiveness

All pages are fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Placeholder Content

Many pages use placeholder content marked with "Coming Soon". To complete:

1. Replace gradient background placeholders with actual images
2. Add real testimonial photos
3. Complete stub pages with full content
4. Add actual company awards/recognition logos
5. Include real video content

## 🔄 Next Steps

1. ✅ Complete placeholder pages with full content
2. ⏳ Add real images and videos
3. ⏳ Integrate actual authentication system
4. ⏳ Connect contact form to email service
5. ⏳ Add CRM integration
6. ⏳ Implement analytics
7. ⏳ Add blog functionality with CMS
8. ⏳ Create admin dashboard

## 📞 Support

For questions or issues, contact:
- Email: info@3mark.com
- Phone: (404) 555-3MARK

## 📄 License

Proprietary - Apex Affinity Group © 2025

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
