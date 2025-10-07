# TAQELAH - Singapore QA Community Website

A modern, static website for TAQELAH (Test Automation & Quality Engineering Learning and Advancement Hub) - Singapore's vibrant QA and testing community. Built with Next.js 14, deployed on GitHub Pages.

## 🚀 Features

- **Static Site Generation**: Fully static export compatible with GitHub Pages
- **Modern Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui
- **Content Management**: MDX-powered content with Contentlayer
- **Responsive Design**: Mobile-first, clean UI with rounded cards and subtle shadows
- **Search & Filters**: Client-side search and filtering for events, blog posts, and resources
- **SEO Optimized**: Semantic HTML, meta tags, and proper routing
- **Fast Performance**: Optimized for Lighthouse 95+ scores

## 📋 Prerequisites

- Node.js 20.x or higher
- pnpm 8.x or higher (recommended) or npm

## 🛠️ Local Development

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/taqelah-site.git
cd taqelah-site
```

### 2. Install dependencies

```bash
pnpm install
# or
npm install
```

### 3. Run the development server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build for production

```bash
pnpm build
# or
npm run build
```

This creates a static export in the `out/` directory.

### 5. Preview the production build

```bash
npx serve out
```

## 📁 Project Structure

```
taqelah-site/
├── app/                      # Next.js App Router pages
│   ├── (site)/              # Site layout group
│   │   ├── page.tsx         # Home page
│   │   ├── events/          # Events pages
│   │   ├── speakers/        # Speakers pages
│   │   ├── blog/            # Blog pages
│   │   ├── resources/       # Resources page
│   │   ├── sponsors/        # Sponsors page
│   │   ├── meetups/         # Meetups page
│   │   ├── about/           # About page
│   │   ├── join/            # Join page
│   │   ├── contact/         # Contact page
│   │   └── code-of-conduct/ # Code of Conduct page
│   └── layout.tsx           # Root layout
├── components/
│   ├── shared/              # Shared components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── card.tsx
│   │   ├── event-card.tsx
│   │   ├── section.tsx
│   │   ├── tag.tsx
│   │   └── search-input.tsx
│   └── ui/                  # shadcn/ui components
│       ├── button.tsx
│       ├── input.tsx
│       └── badge.tsx
├── content/                 # MDX content
│   ├── events/             # Event MDX files
│   ├── speakers/           # Speaker MDX files
│   ├── blog/               # Blog post MDX files
│   ├── resources/          # Resource MDX files
│   └── sponsors/           # Sponsor MDX files
├── lib/
│   ├── utils.ts            # Utility functions
│   ├── date.ts             # Date helpers
│   └── content.ts          # Content queries
├── public/                 # Static assets
│   ├── .nojekyll          # GitHub Pages config
│   ├── logo.svg
│   └── images/
├── styles/
│   └── globals.css         # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
├── contentlayer.config.ts  # Contentlayer configuration
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🌐 GitHub Pages Deployment

### Setup Instructions

#### 1. Create a GitHub repository

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/taqelah-site.git
git push -u origin main
```

#### 2. Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

#### 3. Configure for project pages (username.github.io/REPO)

If deploying to `https://username.github.io/taqelah-site/`:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add repository secrets:
   - `NEXT_PUBLIC_BASE_PATH`: `/taqelah-site`
   - `NEXT_PUBLIC_ASSET_PREFIX`: `/taqelah-site`

#### 4. Configure for custom domain

1. Go to **Settings** → **Pages**
2. Enter your custom domain (e.g., `taqelah.com`)
3. Go to **Settings** → **Secrets and variables** → **Actions** → **Variables**
4. Add repository variable:
   - `NEXT_PUBLIC_CUSTOM_DOMAIN`: `taqelah.com`

#### 5. Configure DNS at your registrar

For apex domain (taqelah.com):
```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
```

For subdomain (www.taqelah.com):
```
CNAME www  yourusername.github.io
```

See [GitHub's documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for detailed DNS setup.

#### 6. Deploy

Push to the `main` branch to trigger deployment:

```bash
git push origin main
```

The GitHub Action will:
- Install dependencies
- Build the static site
- Deploy to GitHub Pages

## ✍️ Content Management

### Adding a New Event

Create a new MDX file in `content/events/`:

```mdx
---
title: "Your Event Title"
description: "Event description"
date: "2024-12-01"
location: "Event Location"
type: "meetup"
status: "upcoming"
tags: ["tag1", "tag2"]
speakers: ["speaker-slug"]
registrationUrl: "https://eventbrite.com/your-event"
---

## Event Details

Your event content in Markdown...
```

### Adding a New Speaker

Create a new MDX file in `content/speakers/`:

```mdx
---
name: "Speaker Name"
title: "Job Title"
bio: "Short bio"
company: "Company Name"
linkedin: "https://linkedin.com/in/username"
expertise: ["skill1", "skill2"]
---

## About

Speaker profile content...
```

### Adding a Blog Post

Create a new MDX file in `content/blog/`:

```mdx
---
title: "Post Title"
description: "Post description"
date: "2024-11-01"
author: "Author Name"
tags: ["tag1", "tag2"]
featured: true
---

## Your Content

Blog post content in Markdown...
```

### Adding a Resource

Create a new MDX file in `content/resources/`:

```mdx
---
title: "Resource Title"
description: "Resource description"
category: "tool"
url: "https://resource-url.com"
tags: ["tag1", "tag2"]
featured: true
---

Resource details...
```

### Adding a Sponsor

Create a new MDX file in `content/sponsors/`:

```mdx
---
name: "Sponsor Name"
description: "Sponsor description"
tier: "gold"
website: "https://sponsor.com"
---

Sponsor details...
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` and `styles/globals.css` to change the color scheme.

### Components

All components are in `components/`. Modify them to match your design preferences.

### Navigation

Update navigation links in `components/shared/header.tsx` and `components/shared/footer.tsx`.

## 🧪 Type Checking and Linting

```bash
# Type check
pnpm typecheck

# Lint
pnpm lint
```

## 📊 Performance

The site is optimized for performance:
- Static generation for fast page loads
- Optimized images with `unoptimized: true` for GitHub Pages
- Minimal JavaScript bundle
- CSS optimized with Tailwind

Expected Lighthouse scores: 95+ on all metrics (desktop).

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 🆘 Troubleshooting

### Build fails with "Cannot find module 'contentlayer/generated'"

Run the dev server first to generate types:
```bash
pnpm dev
```
Then run the build again.

### Assets not loading on GitHub Pages

Make sure you've set `NEXT_PUBLIC_BASE_PATH` and `NEXT_PUBLIC_ASSET_PREFIX` correctly for project pages.

### Custom domain not working

1. Check DNS records are configured correctly
2. Wait up to 24 hours for DNS propagation
3. Verify CNAME file exists in the `out/` directory after build
4. See [GitHub's troubleshooting guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Contentlayer Documentation](https://contentlayer.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## 📧 Contact

For questions or support, reach out to:
- Email: hello@taqelah.com
- LinkedIn: [@taqelah](https://linkedin.com/company/taqelah)

---

Built with ❤️ by the TAQELAH community
