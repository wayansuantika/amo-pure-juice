# AMO Pure Juice Website

A modern, premium single-page product website for **AMO Pure Juice** (0.0% alcohol grape juice), built with Next.js App Router, TypeScript, and Tailwind CSS.

## 🌟 Current Features

- **Premium Hero Layout**: 3-column hero with product details, center bottle visual, and differentiation copy
- **Mobile-First CTA Flow**: Sticky bottom **Order Now** button on mobile linked to WhatsApp
- **Trust Messaging**: BPOM, Halal, and 0.0% Alcohol trust strip near CTA
- **SEO Ready**:
  - Page + global metadata (title, description, canonical)
  - Open Graph + Twitter Card metadata
  - JSON-LD structured data (Product + Organization)
  - `sitemap.xml` and `robots.txt`
- **Optimized Assets**: Uses `next/image` with project image assets in `public/`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```text
amopurejuice-2/
├── app/
│   ├── layout.tsx       # Global metadata + root layout
│   ├── page.tsx         # Main landing page
│   ├── sitemap.ts       # XML sitemap
│   ├── robots.ts        # Robots rules
│   └── globals.css      # Theme + custom styles
├── public/
│   ├── Amo-Bottle-Halal.png
│   ├── amo.avif
│   ├── logo.avif
│   └── halal.avif
└── README.md
```

## 🔧 Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=+6285713333536
GOOGLE_SITE_VERIFICATION=your-google-search-console-token
```

Notes:
- `NEXT_PUBLIC_WHATSAPP_NUMBER` accepts formatted values; non-digits are sanitized automatically.
- `GOOGLE_SITE_VERIFICATION` is used in `app/layout.tsx` metadata.

## 🌐 SEO Notes

- Update `metadataBase` in `app/layout.tsx` if domain changes.
- Update JSON-LD product info in `app/page.tsx` if price/spec changes.
- After deployment, submit `https://www.amopurejuice.com/sitemap.xml` to Google Search Console.

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Images**: Next.js Image Component

## 📄 License

Proprietary - AMO Pure Juice
