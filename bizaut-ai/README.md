# BizAut.ai - AI Automation Agency Web App

A minimalist dark-themed web application for BizAut.ai, an AI automation agency. Built with React, TypeScript, Tailwind CSS, and Framer Motion for smooth animations and professional user experience.

## 🚀 Features

### Design & UI
- **Dark Theme**: Organic color palette with deep forest greens, earth browns, and warm grays
- **Minimalist Design**: Clean, app-like interface with professional SaaS aesthetic
- **Smooth Animations**: Powered by Framer Motion for micro-interactions and page transitions
- **Mobile-First**: Fully responsive design optimized for all devices
- **Modern Typography**: Inter font family for clean, readable text

### Pages
1. **Homepage** - Hero section with typing animation, features showcase, testimonials, and ROI calculator
2. **Pricing** - Three subscription tiers with interactive billing toggle and feature comparison
3. **Dashboard** - Mockup interface with metrics, workflow management, and analytics
4. **Contact** - Contact form with validation, company information, and FAQ section

### Key Components
- **Responsive Navigation** - Animated navbar with mobile menu
- **Interactive Pricing Cards** - Hover effects and plan comparison
- **Dashboard Interface** - Tabbed navigation with overview, workflows, analytics, and settings
- **Contact Form** - Comprehensive form with multiple input types and validation
- **Testimonial Carousel** - Customer success stories
- **Newsletter Signup** - Email subscription component

## 🎨 Color Palette

```css
Primary: Deep forest green (#1a3d2e)
Secondary: Warm earth brown (#8b4513)
Accent: Sage green (#9caf88)
Background: Dark charcoal (#1a1a1a)
Surface: Dark gray (#2a2a2a)
Text: Light gray (#e5e5e5)
Muted: Medium gray (#888888)
```

## 💰 Subscription Plans

### Starter - $497/month
- 2 automation workflows
- Basic AI chatbot
- Email support
- Up to 1,000 AI interactions

### Professional - $1,497/month (Most Popular)
- 5 automation workflows
- Advanced AI assistant
- Priority support
- Up to 5,000 AI interactions
- Custom integrations

### Enterprise - $2,997/month
- Unlimited workflows
- Custom AI solutions
- Dedicated support
- Unlimited AI interactions
- White-label options

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Routing**: React Router DOM v7
- **Build Tool**: Create React App with CRACO
- **Development**: Hot reload, ESLint, TypeScript checking

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bizaut-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Run tests**
   ```bash
   npm test
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page
│   ├── PricingPage.tsx # Pricing plans
│   ├── DashboardPage.tsx # Dashboard mockup
│   └── ContactPage.tsx # Contact form
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── index.css           # Global styles with Tailwind
```

## 🎯 Key Features Implemented

### Homepage
- ✅ Typing animation for hero headline
- ✅ Floating background elements
- ✅ Value proposition badges
- ✅ Feature cards with hover animations
- ✅ ROI calculator widget
- ✅ Customer testimonials
- ✅ Newsletter signup form

### Pricing Page
- ✅ Monthly/yearly billing toggle
- ✅ Three-tier pricing structure
- ✅ Popular plan highlighting
- ✅ Feature comparison table
- ✅ FAQ section
- ✅ Call-to-action sections

### Dashboard
- ✅ Tabbed navigation interface
- ✅ Metrics dashboard with KPIs
- ✅ Workflow management
- ✅ Analytics placeholders
- ✅ Settings management
- ✅ Real-time activity feed

### Contact Page
- ✅ Comprehensive contact form
- ✅ Form validation
- ✅ Contact information display
- ✅ Quick action buttons
- ✅ FAQ section

## 🎨 Design System

### Custom Components
- `btn-primary` - Primary action buttons
- `btn-secondary` - Secondary action buttons
- `btn-outline` - Outlined buttons
- `card` - Content cards with hover effects
- `text-gradient` - Gradient text styling

### Animations
- Page transitions with Framer Motion
- Scroll-triggered animations
- Hover effects on interactive elements
- Loading states and micro-interactions

## 🚀 Deployment

The app is ready for deployment to any static hosting service:

- **Netlify**: Connect repository for automatic deployments
- **Vercel**: Zero-config deployment with GitHub integration
- **AWS S3 + CloudFront**: For scalable static hosting
- **GitHub Pages**: Free hosting for open source projects

## 📈 Performance Optimizations

- Lazy loading of routes
- Optimized bundle size with code splitting
- Efficient re-renders with React hooks
- CSS-in-JS with Tailwind for minimal bundle size
- Image optimization ready
- SEO-friendly structure

## 🔧 Customization

### Colors
Update the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: '#1a3d2e',
  secondary: '#8b4513',
  accent: '#9caf88',
  // ... other colors
}
```

### Content
- Update pricing plans in `PricingPage.tsx`
- Modify testimonials in `HomePage.tsx`
- Customize dashboard metrics in `DashboardPage.tsx`
- Edit contact information in `ContactPage.tsx`

### Animations
Customize animations in individual components using Framer Motion:

```javascript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋‍♂️ Support

For support and questions:
- Email: hello@bizaut.ai
- Phone: +1 (555) 123-4567
- Live Chat: Available 24/7

---

Built with ❤️ for modern businesses looking to automate their workflows with AI.
