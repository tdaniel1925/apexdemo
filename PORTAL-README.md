# APEX Member Portal

A comprehensive MLM (Multi-Level Marketing) back-office system for Apex Affinity Group distributors built with Next.js 15, React, and TypeScript.

## 🚀 Features

### ✅ Implemented Features

#### 1. **Dashboard & Analytics** (P0)
- Real-time performance metrics
- Commission summary widgets
- Team volume indicators with binary leg tracking
- Rank progress tracker with next rank requirements
- Recent activity feed
- MGA Bonus Progress tracking (quarterly)
- New Recruits Tracker (30-day window with first policy paid dates)
- Task Management Widget (pending approvals)
- Customizable widget layout

#### 2. **Binary Tree Genealogy** (P0)
- Interactive binary tree visualization
- Expandable/collapsible nodes
- Zoom controls (zoom in, zoom out, reset)
- Tree and List view toggle
- Search by ID/name
- Node information display (PV, GV, rank, status, MGA indicator)
- Member details sidebar with full profile information
- Visual hierarchy with left/right leg indicators
- Contract status and carrier information

#### 3. **Commission Center** (P0)
- Current period earnings tracking
- Commission history (24 months)
- Detailed commission statements
- Multiple commission types:
  - Binary commissions
  - Sponsor bonuses
  - Matching bonuses
  - Override commissions
  - Rank advancement bonuses
  - MGA quarterly bonuses
- Filter by period and commission type
- Export to CSV functionality
- Visual breakdown of commission types

#### 4. **Team Management** (P1)
- Team roster with sorting/filtering
- Performance tracking by member
- Left leg/right leg distribution
- Total team volume tracking
- Bulk messaging capabilities (UI ready)
- Search by name or ID
- Filter by rank, status
- Sort by name, rank, PV, GV, or date
- Selection for bulk actions

#### 5. **Analytics Suite** (P1)
- Commission trends analysis
- Team growth metrics
- Commission breakdown by type
- Geographic distribution maps
- Key performance indicators:
  - Retention rate
  - Average enrollment time
  - Top producer volume
  - MGA ratio
  - Contract completion rate
  - Binary balance percentage
- Export to PDF and Excel (CSV format)
- Customizable date ranges

#### 6. **Onboarding Workflow** (P0)
- 4-step streamlined registration:
  1. Profile completion (legal name, NPN, DNC preference)
  2. Carrier selection (3 required for annualization)
  3. Digital agreement execution
  4. Review and submit
- Progress indicator
- Form validation
- Electronic signature capability
- Writing Agent Agreement
- Terms and Conditions acceptance

#### 7. **Task Management System** (P1)
- Task types:
  - Promotion approvals
  - Contract requests
  - Onboarding monitoring
  - Agreement signing
  - Dispute resolution
- Priority levels (High, Medium, Low)
- Status tracking (Pending, In Progress, Completed)
- Filter by status, priority, and type
- Quick actions (Start, Complete, View Details)
- Visual task cards with icons
- Due date tracking

#### 8. **Mock Data Service** (P0)
- 5,000 sample distributors
- Realistic data including:
  - Geographic distribution (10 states)
  - Various rank distributions
  - Binary tree structure
  - 12-month historical commission data
  - First policy paid dates
  - Annualized carrier selections
  - Contract statuses
  - Activity logs
- Automatically generated relationships
- Binary leg assignments

#### 9. **Additional Pages**
- Settings page (profile, notifications, security)
- Training & Resources page (courses, webinars)
- Navigation system with sidebar and top bar
- Responsive design for mobile and tablet

## 🏗️ Architecture

### Tech Stack
- **Framework:** Next.js 15.5.6
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom components
- **State Management:** React Hooks (useState, useEffect, useMemo)

### Project Structure
```
apex-website/
├── app/
│   └── portal/
│       ├── dashboard/
│       │   └── page.tsx          # Main dashboard
│       ├── genealogy/
│       │   └── page.tsx          # Binary tree visualization
│       ├── commissions/
│       │   └── page.tsx          # Commission center
│       ├── team/
│       │   └── page.tsx          # Team management
│       ├── analytics/
│       │   └── page.tsx          # Analytics & reports
│       ├── onboarding/
│       │   └── page.tsx          # New member onboarding
│       ├── tasks/
│       │   └── page.tsx          # Task management
│       ├── training/
│       │   └── page.tsx          # Training resources
│       └── settings/
│           └── page.tsx          # User settings
├── components/
│   └── portal/
│       ├── DashboardLayout.tsx   # Main portal layout
│       ├── PerformanceMetrics.tsx
│       ├── CommissionSummary.tsx
│       ├── TeamVolume.tsx
│       ├── RankProgress.tsx
│       ├── RecentActivity.tsx
│       ├── QuickActions.tsx
│       ├── AnnouncementBanner.tsx
│       ├── MGABonusProgress.tsx
│       ├── NewRecruitsTracker.tsx
│       └── TaskManagementWidget.tsx
└── lib/
    └── portal/
        └── mockDataService.ts    # Mock data generation
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd apex2/apex-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:3003`

## 📱 Navigation

The portal includes these main sections:
- **Dashboard** (`/portal/dashboard`) - Main overview with all widgets
- **Binary Tree** (`/portal/genealogy`) - Organization visualization
- **Commissions** (`/portal/commissions`) - Earnings tracking
- **Team** (`/portal/team`) - Team member management
- **Analytics** (`/portal/analytics`) - Business intelligence
- **Onboarding** (`/portal/onboarding`) - New member workflow
- **Tasks** (`/portal/tasks`) - Task management
- **Training** (`/portal/training`) - Educational resources
- **Settings** (`/portal/settings`) - Account preferences

## 🎨 Design System

### Colors
- **Primary Red:** `#C41E3A` (APEX brand color)
- **Success Green:** `#10B981`
- **Warning Yellow:** `#F59E0B`
- **Info Blue:** `#3B82F6`
- **Error Red:** `#EF4444`

### Components
All components follow a consistent design pattern:
- Rounded corners (`rounded-lg`)
- Shadow on hover (`hover:shadow-lg`)
- Smooth transitions (`transition-colors`, `transition-all`)
- Responsive grid layouts
- Mobile-first approach

## 📊 Key Metrics Displayed

### Dashboard Metrics
- Personal Volume (PV)
- Group Volume (GV)
- Month-to-Date Earnings
- Year-to-Date Earnings
- Team Size
- Active Members
- Left/Right Leg Volume
- Binary Commission Estimates
- MGA Bonus Progress
- New Recruit Conversion Rate

### Analytics Metrics
- Total Earnings
- Team Growth Rate
- Active Member Percentage
- Average Volume per Member
- Retention Rate
- Contract Completion Rate
- Binary Balance
- Top Producer Performance

## 🔧 Mock Data Configuration

The mock data service generates:
- **5,000 distributors** with realistic profiles
- **20,000+ commission records** across 12 months
- **25 tasks** with various priorities and statuses
- **100 activity records** from the last 7 days
- Binary tree structure with proper parent-child relationships
- Geographic distribution across 10 US states

### Customizing Mock Data
Edit `lib/portal/mockDataService.ts` to:
- Change the number of distributors
- Modify commission amounts
- Adjust rank distributions
- Change carrier lists
- Customize states and cities

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## 📝 Next Steps / TODO

### Future Enhancements
1. **Authentication & Authorization**
   - Implement SSO integration
   - Role-based access control (RBAC)
   - Session management

2. **Backend Integration**
   - Connect to SmartOffice API
   - SuranceBay SSO integration
   - Real-time data synchronization
   - Database integration

3. **Advanced Features**
   - Real-time notifications
   - WebSocket for live updates
   - Email automation
   - SMS integration
   - Document management
   - Calendar integration

4. **Mobile App**
   - Progressive Web App (PWA)
   - Native mobile apps (iOS/Android)

5. **Testing**
   - Unit tests
   - Integration tests
   - E2E tests with Playwright/Cypress

## 🐛 Known Issues / Limitations

1. **Mock Data Only** - Currently using generated mock data. Needs backend integration.
2. **No Persistence** - Data resets on page refresh.
3. **No Authentication** - Portal is publicly accessible.
4. **Binary Tree Depth** - Limited to 31 nodes for performance.
5. **Export Functionality** - CSV export works, PDF export needs implementation.

## 📄 License

Proprietary - Apex Affinity Group

## 👥 Support

For technical support or questions, contact the development team.

---

*Context improved by: Main Overview - Information used: Insurance sales platform architecture including career progression system, multi-level commission framework, product portfolio management, and insurance lead generation components.*


