# The Design Theeta Website

A modern, responsive website for The Design Theeta - a creative design studio that bridges design thinking with practical innovation. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional interface with glassmorphism effects
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Focused**: Optimized images and efficient code splitting

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes
- **Deployment**: Vercel

## 📁 Project Structure

```
├── app/
│   ├── about/page.tsx          # About us page
│   ├── contact/page.tsx        # Contact page with form
│   ├── privacy-policy/page.tsx # Privacy policy page
│   ├── services/page.tsx       # Services showcase
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Homepage
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── cookie-consent.tsx     # Cookie consent banner
│   ├── mobile-menu.tsx        # Mobile navigation
│   ├── site-footer.tsx        # Footer component
│   ├── site-header.tsx        # Header with navigation
│   ├── theme-provider.tsx     # Theme context provider
│   └── theme-toggle.tsx       # Dark/light mode toggle
└── tailwind.config.ts         # Tailwind configuration
```

## 🎨 Design Features

### Color Palette
- **Primary Orange**: #FF6B00 - Used for CTAs and highlights
- **Secondary Blue**: #00B3FF - Used for accents and secondary elements
- **Dark Background**: #0a0a14 - Main dark theme background
- **Light Background**: #FFFFFF - Main light theme background

### Interactive Elements
- **Glassmorphism Cards**: Semi-transparent cards with backdrop blur
- **Hover Effects**: Dynamic color gradients and scaling animations
- **Carousel**: Auto-rotating hero section with manual controls
- **Mobile Menu**: Slide-down navigation for mobile devices

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd design-theta-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages Overview

### Homepage (/)
- Hero carousel with rotating content
- Services overview with interactive cards
- Company introduction and value proposition

### Services (/services)
- Detailed service offerings:
  - Graphic Design
  - Web Development  
  - Video Editing
  - Marketing & Advertising
- Interactive service cards with hover effects

### About (/about)
- Company history and mission
- Core values and principles
- Team member profiles
- Company registration details

### Contact (/contact)
- Contact form with validation
- Company contact information
- Multiple communication channels
- Success/error state handling

### Privacy Policy (/privacy-policy)
- Comprehensive privacy policy
- Data collection and usage information
- User rights and contact details

## 🎯 Key Components

### SiteHeader
- Responsive navigation
- Logo and branding
- Theme toggle
- Mobile menu trigger

### SiteFooter
- Social media links
- Navigation links
- Contact information
- Copyright and legal links

### GlassyCard Components
- Reusable card component with glassmorphism effect
- Mouse tracking for interactive gradients
- Hover animations and scaling

### ThemeToggle
- Dark/light mode switching
- System preference detection
- Smooth transitions

## 🔧 Customization

### Colors
Update the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#FF6B00", // Orange
  },
  secondary: {
    DEFAULT: "#00B3FF", // Blue
  },
}
```

### Content
- Update company information in page components
- Modify service offerings in `/services/page.tsx`
- Update team member details in `/about/page.tsx`
- Customize contact information in `/contact/page.tsx`

### Styling
- Global styles: `app/globals.css`
- Component-specific styles: Tailwind classes in components
- Theme variables: CSS custom properties in `globals.css`

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting

## 🔒 Privacy & Compliance

- Cookie consent banner
- Privacy policy page
- GDPR-compliant data handling
- Contact form data validation

## 📞 Support

For questions or support regarding this website:

- **Email**: info@thedesigntheeta.com
- **Phone**: +91 XXXXX XXXXX
- **Location**: Bengaluru, Karnataka, India

## 📄 License

This project is proprietary to The Design Theeta. All rights reserved.

---

