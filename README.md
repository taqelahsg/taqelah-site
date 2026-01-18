# taqelah! - Singapore QA Community Website

Mobile-first, responsive static website for Singapore's own most vibrant testing community. Built with pure HTML, Tailwind CSS (CDN), Alpine.js, and Swiper. Red & white themed, hosted via GitHub Pages.

**taqelah!** stands for **Test Automation & Quality Engineering, Lah!** - a name that blends technical excellence with Singaporean charm.

## 🎯 Features

- **Mobile-First Design**: Optimized for 320px → 1440px+ screens
- **Pure Static**: No build step, no Node.js required
- **Accessible**: WCAG 2.1 compliant with semantic HTML and ARIA labels
- **Fast**: CDN-based libraries, lazy loading, optimized images
- **SEO Ready**: JSON-LD structured data, sitemap, robots.txt, favicon support
- **Touch-Friendly**: 44×44px minimum tap targets
- **iOS Safe**: Support for notch/safe areas
- **Code of Conduct**: Dedicated page for community guidelines
- **Social Media Integration**: Links to Twitter, LinkedIn, GitHub, YouTube, Instagram, Facebook
- **Contact Form**: FormSubmit.co integration with comprehensive social media links

## 📁 Project Structure

```
/
├── index.html                    # Home page
├── events.html                   # Events listing
├── community.html                # Community page
├── jobs.html                     # Jobs board (with Telegram link)
├── sponsors.html                 # Sponsors page
├── about.html                    # About us
├── code-of-conduct.html          # Community Code of Conduct
├── contact.html                  # Contact form (with social media)
├── CNAME                         # Custom domain
├── robots.txt                    # SEO
├── sitemap.xml                   # SEO
├── assets/
│   ├── css/
│   │   └── custom.css           # Mobile utilities, safe-area, reduced-motion
│   ├── js/
│   │   └── (optional)
│   └── images/
│       ├── logo.png             # taqelah! logo (also used as favicon)
│       ├── events/
│       ├── companies/           # Company logos
│       ├── gallery/             # Community photos
│       └── avatars/             # Team member avatars
└── data/
    ├── events.json              # Events data
    ├── companies.json           # Member companies
    └── photo-gallery.json       # Gallery images
```

## 📄 Pages Overview

### Main Pages
- **Home (index.html)**: Hero section with stats, events carousel, companies slider, photo gallery, and testimonials
- **Events (events.html)**: Upcoming and past events with filtering
- **Community (community.html)**: Community overview and member companies
- **Jobs (jobs.html)**: Link to Telegram job board for QA & testing positions in Singapore
- **Sponsors (sponsors.html)**: Sponsorship opportunities and benefits
- **About (about.html)**: taqelah! story, impact, goals, and Code of Conduct link
- **Code of Conduct (code-of-conduct.html)**: Community guidelines and values for QA professionals
- **Contact (contact.html)**: Contact form with FormSubmit.co and social media links

### Navigation
All pages include:
- Consistent header with mobile hamburger menu
- Navigation: Home → Events → Community → Jobs → Sponsors → About → Contact
- Footer with social media links (Twitter, LinkedIn, GitHub, YouTube, Instagram, Facebook)
- Footer links: Events, Community, Jobs, About Us, Code of Conduct, Sponsors, Contact
- Favicon (taqelah! logo)

## 🚀 GitHub Pages Deployment

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Initial taqelah! site with mobile-first design"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes for deployment

Your site will be live at: `https://<username>.github.io/<repo-name>/`

### Step 3: Custom Domain (taqelah.sg)

#### DNS Configuration

Add DNS records at your domain registrar:

**Option A: CNAME (Recommended for subdomains)**
```
Type: CNAME
Name: www
Value: <username>.github.io
TTL: 3600
```

**Option B: A Records (For apex domain)**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
TTL: 3600
```

Then add CNAME for www:
```
Type: CNAME
Name: www
Value: <username>.github.io
TTL: 3600
```

#### GitHub Pages Custom Domain Setup

1. In GitHub repo: **Settings** → **Pages**
2. Under **Custom domain**, enter: `taqelah.sg`
3. Click **Save**
4. Wait for DNS check (can take 24-48 hours)
5. Once verified, check **Enforce HTTPS**

The `CNAME` file is already created with `taqelah.sg`.

## 📱 Mobile QA Checklist

### Device Testing

- [ ] iPhone 12/13/14 (iOS Safari)
- [ ] iPhone SE (small screen - 375px)
- [ ] Android Pixel/Samsung (Chrome)
- [ ] iPad (Safari, split-screen mode)
- [ ] iPad Pro (landscape)
- [ ] Desktop breakpoints: 768px, 1024px, 1280px, 1440px

### Screen Size Testing

Test at these exact widths:
- [ ] 320px (iPhone SE portrait)
- [ ] 360px (Android small)
- [ ] 390px (iPhone 12/13 Pro)
- [ ] 414px (iPhone Plus models)
- [ ] 768px (iPad portrait)
- [ ] 1024px (iPad landscape)
- [ ] 1280px (Desktop)
- [ ] 1440px+ (Large desktop)

### Functionality Checks

#### Navigation
- [ ] Mobile hamburger menu opens/closes smoothly
- [ ] Menu closes on ESC key
- [ ] Menu closes when clicking backdrop
- [ ] Body scroll locks when menu is open
- [ ] Active page is highlighted
- [ ] All links are tappable (44×44px minimum)

#### Hero Section
- [ ] Text is readable on all screen sizes
- [ ] CTAs stack vertically on mobile
- [ ] CTAs are full-width on small screens
- [ ] Stats grid displays properly (3 columns)
- [ ] Hero image hidden on very small screens, visible on tablet+

#### Events Section
- [ ] Filter buttons scroll horizontally on mobile (no wrap)
- [ ] Filter buttons have snap scrolling
- [ ] Event cards stack on mobile (1 column)
- [ ] Event cards show 2 columns on tablet
- [ ] Event cards show 3 columns on desktop
- [ ] Card images maintain aspect ratio
- [ ] "Learn More" links are touch-friendly

#### Testimonials Swiper
- [ ] Shows 1 testimonial on mobile
- [ ] Shows 2 testimonials on tablet (640px+)
- [ ] Shows 3 testimonials on desktop (1024px+)
- [ ] Pagination bullets are large enough to tap
- [ ] Swipe gestures work smoothly
- [ ] Auto-play works but pauses on interaction

#### Footer
- [ ] Stacks to single column on mobile
- [ ] Shows 2 columns on tablet
- [ ] Shows 4 columns on desktop
- [ ] Social icons are 44×44px (touch-friendly)
- [ ] Newsletter input is at least 44px tall
- [ ] Form elements don't cause zoom on iOS (16px font)

### Accessibility Checks

- [ ] Tab order is logical (keyboard navigation)
- [ ] Skip to content link works
- [ ] Focus rings are visible (not removed)
- [ ] ESC closes modal/menu
- [ ] All images have alt text
- [ ] Form labels are associated with inputs
- [ ] ARIA labels on icon-only buttons
- [ ] VoiceOver (iOS) announces nav toggle correctly
- [ ] TalkBack (Android) announces nav toggle correctly
- [ ] Color contrast meets WCAG AA (4.5:1 for text)

### Performance Checks

- [ ] Lighthouse Mobile Score ≥ 90 (Performance)
- [ ] Lighthouse Mobile Score ≥ 90 (Accessibility)
- [ ] Lighthouse Mobile Score ≥ 90 (Best Practices)
- [ ] Lighthouse Mobile Score ≥ 90 (SEO)
- [ ] Images are lazy-loaded (loading="lazy")
- [ ] Images have width/height to prevent CLS
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] No horizontal scroll on any screen size

### Visual Checks

- [ ] No text overflow or cut-off
- [ ] Line length is readable (not too wide)
- [ ] Spacing is consistent (gap-4, gap-6, etc.)
- [ ] Buttons have min-height of 44px
- [ ] Text is at least 16px (prevents iOS zoom)
- [ ] Headings use fluid sizing (text-3xl sm:text-4xl lg:text-5xl)
- [ ] Red (#E10600) and white (#FFFFFF) theme is consistent
- [ ] Rounded corners (rounded-xl) are consistent
- [ ] Shadows are subtle and consistent

### iOS-Specific Checks

- [ ] Safe area respected (notch, home indicator)
- [ ] Footer has safe-area-inset-bottom
- [ ] No bounce scroll issues
- [ ] Tap highlight color is appropriate
- [ ] Text size doesn't adjust on orientation change
- [ ] Form inputs don't zoom (16px+ font size)

### Android-Specific Checks

- [ ] Chrome address bar doesn't cause layout issues
- [ ] Touch ripple effects work
- [ ] Back button doesn't break navigation

### SEO & Schema Validation

- [ ] Validate JSON-LD: [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Validate Schema: [Schema.org Validator](https://validator.schema.org/)
- [ ] Check mobile-friendliness: [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Run PageSpeed Insights: [PageSpeed](https://pagespeed.web.dev/)
- [ ] Check WAVE: [WAVE Tool](https://wave.webaim.org/)

## 🎨 Design Tokens

### Colors
- **Primary Red**: `#E10600`
- **Hover Red**: `#C20500`
- **White**: `#FFFFFF`
- **Text**: `#0B0B0B`
- **Muted Background**: `#F5F5F5`
- **Gray Text**: `#6B7280`

### Typography
- **Font**: System font stack (Safari default)
- **Base Size**: 16px (mobile), scales up on larger screens
- **Headings**: `text-3xl sm:text-4xl lg:text-5xl` (fluid sizing)
- **Body**: `text-base sm:text-lg` (16px → 18px)

### Spacing
- **Mobile**: `px-4` (16px), `py-12` (48px)
- **Tablet**: `sm:px-6` (24px), `sm:py-16` (64px)
- **Desktop**: `lg:px-8` (32px), `lg:py-20` (80px)

### Breakpoints
- **sm**: 640px (tablet portrait)
- **md**: 768px (tablet landscape)
- **lg**: 1024px (desktop)
- **xl**: 1280px (large desktop)

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **Tailwind CSS 3.x**: Utility-first CSS (CDN)
- **Alpine.js 3.x**: Lightweight reactivity (CDN)
- **Swiper 11.x**: Touch slider (CDN)
- **No Build Tools**: Pure static files

## 📝 Hero Variants (Mobile-Optimized)

The site includes multiple hero section variants optimized for small screens. Here are 5 examples:

### Variant 1: Stats-Focused (Current)
```
Singapore's QA Community
Connect, learn, and grow with testing professionals
[1,200+ Members] [50+ Events] [15+ Sponsors]
```

### Variant 2: Value Proposition
```
Level Up Your QA Career
Join Singapore's fastest-growing testing community
[Browse Events] [Join Free]
```

### Variant 3: Problem-Solution
```
Testing Shouldn't Be Lonely
Connect with 1,200+ QA pros in Singapore
[Find Your Tribe]
```

### Variant 4: Action-Oriented
```
Master Modern Testing
Workshops • Meetups • Mentorship
[Next Event: Nov 15]
```

### Variant 5: Community-First
```
Where QA Engineers Belong
Learn, network, and grow together
[Join taqelah! Today]
```

All variants are:
- **Short**: 1 headline + 1 subheading + CTAs
- **Punchy**: Action verbs, clear value
- **Scannable**: Easy to read on 320px screens
- **Mobile-First**: CTAs stack vertically, full-width on mobile

## 🧪 Local Development

Since this is a static site with CDN dependencies, you can use any local server:

```bash
# Python
python3 -m http.server 8000

# Node.js (if you have it)
npx serve

# VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

Then visit: `http://localhost:8000`

## 🔧 Customization

### Add Events
Edit `data/events.json` and update the events page

### Update Companies
Edit `data/companies.json` to add member companies

### Update Photo Gallery
Edit `data/photo-gallery.json` to add community photos

### Change Colors
Search and replace in HTML files:
- `#E10600` → Your primary color
- `#C20500` → Your hover color

Or use Tailwind config (add `<script>` block in `<head>`):
```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#E10600',
          'primary-dark': '#C20500',
        }
      }
    }
  }
</script>
```

### Update Favicon
Replace `/assets/images/logo.png` with your own logo (recommended size: 512x512px)

## 📄 License

MIT License - Feel free to use this template for your own community!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes (test on mobile first!)
4. Run through the Mobile QA Checklist
5. Submit a pull request

## 📞 Support & Social Media

### Contact
- **Email**: taqelahsg@gmail.com
- **GitHub Issues**: [Report a bug](https://github.com/taqelahsg/taqelah-site/issues)

### Follow Us
- **Twitter**: [@taqelahsg](https://twitter.com/taqelahsg)
- **LinkedIn**: [taqelah!](https://linkedin.com/company/taqelah)
- **GitHub**: [taqelahsg](https://github.com/taqelahsg)
- **YouTube**: [@taqelahsingapore9510](https://www.youtube.com/@taqelahsingapore9510)
- **Instagram**: [@taqelah](https://www.instagram.com/taqelah/)
- **Facebook**: [taqelah! Group](https://www.facebook.com/groups/148322462547482)
- **Telegram**: [Job Board](https://t.me/+cEKbcW58WwpiN2Fl) - QA & Testing jobs in Singapore

## 🌟 Key Features Implemented

### Favicon Support
- Logo appears in browser tabs across all pages
- Uses `/assets/images/logo.png`
- Properly linked in all HTML files

### Code of Conduct
- Dedicated page for community guidelines
- QA-specific values (quality in discourse, no tool shaming, continuous improvement)
- Reporting procedures and consequences
- Linked from About page and all footer sections

### Mobile Menu
- Fully functional on all pages including Jobs page
- Alpine.js powered hamburger menu
- Proper z-index layering and backdrop
- ESC key and click-outside to close

### Navigation Consistency
- All pages follow the same navigation order
- Active page highlighting
- Mobile-responsive with proper touch targets
- Fixed positioning for easy access

### Social Media Integration
- Complete social media links in footer
- All 6 platforms on Contact page
- Proper external link handling (`target="_blank"`, `rel="noopener noreferrer"`)

---

Built with ❤️ for the Singapore QA community
