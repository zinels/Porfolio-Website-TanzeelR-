# Portfolio Website

A production-ready personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Designed for recruiters to quickly understand your work and expertise.

## Features

- **Next.js 15+ App Router** - Modern React framework with server components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom dark theme
- **Framer Motion** - Subtle animations for section reveals and hover effects
- **Responsive Design** - Mobile-first, works on all devices
- **SEO Optimized** - Proper metadata and semantic HTML
- **Accessible** - WCAG compliant with proper ARIA labels
- **Fast Performance** - Optimized for Lighthouse scores

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── case-studies/      # Case studies pages
│   │   ├── resume/            # Resume redirect
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Section.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ImagePlaceholder.tsx
│   │   └── ...
│   └── content/               # Content data
│       └── projects.ts        # Project data structure
├── public/                    # Static assets
│   └── images/               # Image placeholders (add your images here)
└── package.json
```

## Customization

### Adding Your Content

1. **Projects**: Edit `src/content/projects.ts` to update project information
2. **Experience**: Update the experience array in `src/app/page.tsx`
3. **About Section**: Modify the About section text in `src/app/page.tsx`
4. **Contact Links**: Update social links in `src/components/Footer.tsx` and `src/app/page.tsx`

### Adding Images

Replace placeholder images in `public/images/`:
- `driving-app.jpg` - Driving Behavior App screenshot
- `researchlink.jpg` - ResearchLink screenshot
- `scholarscan.jpg` - ScholarScan screenshot
- `profile.jpg` - Your profile photo

### Styling

- **Colors**: Edit CSS variables in `src/app/globals.css`
- **Typography**: Modify font settings in `globals.css` and `tailwind.config.ts`
- **Components**: Update individual component files in `src/components/`

## Pages

- `/` - Home page with Hero, Projects, Experience, About, Contact
- `/case-studies` - All case studies index
- `/case-studies/[slug]` - Individual case study pages
- `/resume` - Redirects to `/resume.pdf`

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Images**: Next.js Image component

## Performance

The site is optimized for:
- Fast page loads
- Minimal JavaScript
- Optimized images (when added)
- SEO-friendly structure
- Accessibility compliance

## License

Personal portfolio - customize as needed.

