# AMO Pure Juice Website

A modern, SEO-optimized, product-focused website for **AMO Love Potion Pure Juice** - a premium 0.0% alcohol grape juice. Built with Next.js 16, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Product-First Design**: Visually rich landing page highlighting the AMO bottle and product benefits
- **Mobile-First Responsive**: Optimized layout for all screen sizes with mobile-specific product ordering
- **WhatsApp Integration**: Direct purchase flow via WhatsApp for seamless conversions
- **SEO Optimized**: 
  - Comprehensive JSON-LD structured data (Product & Organization schema)
  - Open Graph and Twitter Card metadata
  - XML sitemap and robots.txt
  - Semantic HTML structure
- **Performance**: 
  - AVIF image format for fast loading
  - Next.js Image optimization
  - Static generation for instant page loads
- **Certifications**: Prominently displays Halal certification and BPOM registration
- **Eco-Friendly Theme**: Golden amber and green color palette matching the product identity

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
amopurejuice-2/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Homepage with product showcase
│   ├── sitemap.ts          # XML sitemap generation
│   ├── robots.ts           # Robots.txt generation
│   ├── globals.css         # Global styles and theme
│   └── icon.svg            # Favicon
├── public/
│   ├── amo.avif           # Product bottle image
│   ├── logo.avif          # Brand logo
│   └── halal.avif         # Halal certification badge
└── README.md
```

## 🎨 Key Components

### Hero Section
- Product badge
- Mobile-first image display
- Headline and description
- Price display (Rp 350,000)
- Product specifications (750 ml, ABV 0%)
- Taste notes with icons
- Dual WhatsApp CTAs
- BPOM registration number

### Product Highlights
- Three key value propositions
- Clean card layout

### Product Information
- Detailed product focus card
- Differentiation messaging

### CTA Section
- Final conversion point
- Halal certification display
- WhatsApp integration

## 🔧 Configuration

### WhatsApp Number

Set your WhatsApp number via environment variable:

```bash
# .env.local
NEXT_PUBLIC_WHATSAPP_NUMBER=6282146804175
```

### SEO Metadata

Update in `app/layout.tsx`:
- Site title, description, keywords
- Open Graph images
- Google Search Console verification code

### Schema Markup

Product and organization structured data in `app/page.tsx` - update with accurate pricing and product details.

## 📱 Mobile Features

- Sticky bottom WhatsApp CTA bar
- Product image appears first after brand badge
- Responsive touch-friendly buttons
- Optimized spacing and typography

## 🌐 SEO Best Practices

✅ Semantic HTML structure  
✅ JSON-LD structured data  
✅ Open Graph & Twitter Cards  
✅ XML sitemap auto-generation  
✅ Robots.txt configuration  
✅ Fast loading AVIF images  
✅ Mobile-first responsive design  
✅ Accessibility considerations  

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Other Platforms

Compatible with any Node.js hosting platform:
- Netlify
- AWS Amplify
- Google Cloud Run
- Docker containers

## 📈 Post-Deployment Checklist

1. Update `metadataBase` URL in `app/layout.tsx`
2. Add Google Search Console verification code
3. Submit sitemap to Google Search Console
4. Configure environment variables on hosting platform
5. Test WhatsApp integration
6. Verify all images load correctly
7. Test mobile responsiveness

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Geist Mono
- **Images**: Next.js Image Component with AVIF format
- **Deployment**: Vercel-ready

## 📄 License

Proprietary - AMO Pure Juice

## 📞 Support

For inquiries: info@amopurejuice.com  
WhatsApp: +62 821-4680-4175

---

Built with ❤️ for conscious, alcohol-free celebration moments.
