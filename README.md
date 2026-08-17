# Anand Studio — Photography & Creative Studio Website

> A premium, responsive photography studio website designed to showcase creative work, photography services, portfolio collections, testimonials, and booking information through a cinematic digital experience.

**Anand Studio** is a modern photography portfolio and business website built for a professional photography studio based in **Rohtak, Haryana, India**.

The website focuses on visual storytelling, high-quality portfolio presentation, smooth interactions, responsive design, and direct customer booking through WhatsApp.

---

## ✨ Overview

Anand Studio is designed as more than a traditional photography portfolio.

The website acts as a complete digital presence for a photography business, allowing visitors to:

* Discover the studio and its story
* Explore photography services
* Browse a curated portfolio
* View photography categories
* Explore featured work
* Learn about the photographer/studio
* Read client testimonials
* View studio contact information
* Find the studio location
* Submit booking inquiries
* Contact the studio directly through WhatsApp
* Experience the portfolio through animated and interactive sections

The design follows a **dark, cinematic, editorial visual direction** that keeps photography at the center of the experience.

---

## 🎯 Project Goals

The website was built around several core goals:

### 1. Strong visual identity

Photography websites depend heavily on visual presentation. The interface therefore uses:

* Large photography
* Dark backgrounds
* High-contrast typography
* Editorial layouts
* Cinematic transitions
* Image-focused sections
* Subtle motion

### 2. Conversion-focused experience

Visitors should be able to move naturally from:

**Discover → Explore → Trust → Contact → Book**

Important actions such as **Book Now**, contact information, WhatsApp booking, and location access are intentionally easy to find.

### 3. Responsive experience

The website is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

The navigation, grids, typography, portfolio layouts, and contact experience adapt to different screen sizes.

### 4. Easy content management

Photography content is centralized where possible, making it easier to replace:

* Hero images
* Portfolio images
* About images
* Team images
* Gallery images
* Cloudinary content

without restructuring the entire application.

---

# 🚀 Features

## 🏠 Cinematic Hero Section

The landing section immediately establishes the studio's visual identity using:

* Full-width photography
* Strong typography
* Studio branding
* Portfolio thumbnails
* Primary booking CTA
* Smooth entrance animations

The hero section is designed to make the first screen feel like a premium photography portfolio rather than a standard business website.

---

## 🧭 Responsive Navigation

The navigation provides quick access to:

* Home
* About
* Services
* Portfolio
* Contact

On desktop, navigation is displayed horizontally.

On mobile, it transforms into an animated fullscreen menu.

The navbar also changes appearance after scrolling to improve readability and maintain visual hierarchy.

---

## 👤 About / Studio Section

The About section introduces the creative identity behind the studio.

It includes:

* Photographer imagery
* Studio story
* Experience information
* Client statistics
* Shoot statistics
* CTA to continue toward booking

Current displayed statistics include:

* **10+ Years of Experience**
* **386+ Happy Clients**
* **600+ Photo Shoots**

These values can be customized directly in the page data.

---

# 📸 Photography Services

The website currently presents six major services:

| Service                 | Description                             |
| ----------------------- | --------------------------------------- |
| Wedding Photography     | Cinematic full-day wedding storytelling |
| Pre-Wedding Shoots      | Romantic outdoor photography sessions   |
| Birthday & Events       | Candid celebration coverage             |
| Corporate & Live Events | Professional event coverage             |
| Cinematic Films         | Story-driven highlight films            |
| Drone Coverage          | Aerial photography and perspectives     |

Each service is presented through a visual card containing:

* Service icon
* Service title
* Description
* Background photography
* Hover interaction

---

# 🖼️ Portfolio

The portfolio is one of the primary components of the website.

It supports multiple photography categories, including:

* Weddings
* Portraits
* Pre-Weddings
* Events
* Birthdays
* Lifestyle
* Editorial
* Commercial photography

The portfolio uses a visual masonry/grid-style presentation to create an editorial photography-gallery experience.

---

## 🔍 Image Lightbox

Portfolio images can be opened in an interactive lightbox.

This allows visitors to:

* View images at a larger size
* Focus on individual photographs
* Navigate through portfolio content
* Explore photography without leaving the page

The lightbox functionality is implemented through:

`src/components/site/Lightbox.tsx`

---

# ☁️ Cloudinary Gallery Integration

The project includes optional Cloudinary support for dynamically loading portfolio images.

Configuration is located at:

```text
src/config/cloudinary.ts
```

The gallery can load images from a Cloudinary folder instead of relying exclusively on static image definitions.

### Configuration

Update:

```ts
export const cloudinaryConfig = {
  cloudName: "",
  galleryFolder: "anand-studio-gallery",
};
```

with your Cloudinary cloud name.

For example:

```ts
export const cloudinaryConfig = {
  cloudName: "your-cloud-name",
  galleryFolder: "anand-studio-gallery",
};
```

The project expects gallery filenames to follow the convention:

```text
<category>-<slug>.jpg
```

Example:

```text
weddings-rohit-priya.jpg
portraits-studio-light.jpg
events-corporate-night.jpg
```

The application automatically uses the filename to derive the gallery category and caption.

---

# 🖼️ Centralized Image Management

The project includes a centralized image catalog:

```text
src/data/images.ts
```

This file provides a convenient place to replace:

* Hero image
* About images
* Team image
* Portfolio fallback images

For example:

```ts
export const HERO_BG = ...
```

and:

```ts
export const GALLERY_FALLBACK = [...]
```

This approach makes replacing photography assets significantly easier.

---

# 🎞️ Animated Marquee Sections

The website includes animated image marquee sections that create continuous horizontal photography strips.

Implemented through:

```text
src/components/site/Marquee.tsx
```

These sections are used around the booking CTA to create a more dynamic editorial experience.

---

# 💬 Testimonials

The website includes a testimonial section designed to provide social proof and increase visitor confidence.

Testimonials can be customized with:

* Client name
* Client review
* Rating
* Client information

The section is positioned before the final booking CTA to support the conversion flow.

---

# 📅 Booking & Contact System

The website includes a booking inquiry form.

Visitors can provide:

* Name
* Email
* Phone number
* Event type
* Event date
* Additional message

The form performs client-side validation before submitting.

---

## 📲 WhatsApp Booking

Instead of requiring a dedicated backend booking system, inquiries are currently sent directly to WhatsApp.

The form generates a structured booking message containing the submitted information and opens WhatsApp using the studio's configured WhatsApp number.

This provides a lightweight booking workflow without requiring:

* Database infrastructure
* Authentication
* Backend APIs
* Email server
* CRM infrastructure

The WhatsApp number is configured in:

```text
src/routes/index.tsx
```

inside the `STUDIO` configuration object.

---

# 📍 Studio Information

The website includes a dedicated contact area containing:

* Phone number
* Email
* Address
* Business hours
* Instagram
* Facebook
* YouTube/social links
* Google Maps integration

The location is also embedded through Google Maps.

---

# 🔎 SEO

The project includes several SEO-related features.

### Metadata

The root route includes:

* Page title
* Description
* Keywords
* Author
* Robots directive
* Open Graph metadata
* Twitter card metadata

### Canonical URL

The homepage defines a canonical URL to help search engines understand the preferred page URL.

### Structured Data

The website includes Schema.org structured data using:

```json
{
  "@type": "LocalBusiness"
}
```

The structured data contains information such as:

* Business name
* Telephone
* Email
* Address
* Opening hours
* Social profiles

This helps search engines better understand the photography studio as a local business.

---

# 📱 Responsive Design

The interface uses responsive layouts throughout the application.

Key responsive behaviors include:

* Desktop navigation → mobile navigation
* Multi-column service grids → stacked mobile cards
* Responsive portfolio layouts
* Adaptive typography
* Mobile-friendly booking forms
* Responsive image sizing
* Touch-friendly controls

The site is designed around a mobile-first responsive philosophy while maintaining a premium desktop presentation.

---

# 🎨 Design System

The website follows a cinematic dark design system.

### Visual characteristics

* Dark backgrounds
* Warm accent color
* Soft borders
* Rounded cards
* Editorial typography
* Large photography
* Minimal UI chrome
* High contrast
* Subtle motion

The goal is to keep the interface visually quiet so that the photography remains the primary focus.

---

# 🧩 Technology Stack

## Frontend

* **React 19**
* **TypeScript**
* **TanStack Router**
* **TanStack Start**
* **Vite**

## Styling

* **Tailwind CSS**
* **Tailwind Merge**
* **Class Variance Authority**
* **CSS animations/utilities**

## Animation

* **Framer Motion**

Used for:

* Section reveals
* Navigation transitions
* Mobile menu
* Hover interactions
* Portfolio animations
* UI transitions

## UI Components

The project uses:

* **Radix UI**
* **Lucide React**

for accessible and reusable interface components and icons.

## Data & State

* React state/hooks
* TanStack Query
* React Hook Form
* Zod

## Media

* Unsplash images for development/fallback content
* Optional Cloudinary integration for production gallery management

## Tooling

* Vite
* TypeScript
* ESLint
* Prettier
* Bun
* Git

---

# 📁 Project Structure

```text
my-STUDIO-WEBSITE-main/
│
├── src/
│   │
│   ├── components/
│   │   ├── site/
│   │   │   ├── Lightbox.tsx
│   │   │   └── Marquee.tsx
│   │   │
│   │   └── ui/
│   │       ├── accordion.tsx
│   │       ├── alert.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── form.tsx
│   │       └── ...
│   │
│   ├── config/
│   │   └── cloudinary.ts
│   │
│   ├── data/
│   │   └── images.ts
│   │
│   ├── hooks/
│   │   └── use-mobile.tsx
│   │
│   ├── lib/
│   │   ├── error-capture.ts
│   │   ├── error-page.ts
│   │   ├── lovable-error-reporting.ts
│   │   └── utils.ts
│   │
│   ├── routes/
│   │   ├── __root.tsx
│   │   └── index.tsx
│   │
│   ├── router.tsx
│   ├── routeTree.gen.ts
│   ├── server.ts
│   ├── start.ts
│   └── styles.css
│
├── public/
│
├── package.json
├── bun.lock
├── bunfig.toml
├── components.json
├── eslint.config.js
├── prettier.config
└── tsconfig.json
```

---

# ⚙️ Getting Started

## Prerequisites

Make sure you have the following installed:

* Node.js 18+
* Bun recommended
* Git

You can use either Bun or npm depending on your preferred workflow.

---

## 1. Clone the Repository

```bash
git clone <your-repository-url>
```

Move into the project:

```bash
cd my-STUDIO-WEBSITE-main
```

---

## 2. Install Dependencies

### Using Bun

```bash
bun install
```

### Using npm

```bash
npm install
```

---

## 3. Start Development Server

### Bun

```bash
bun run dev
```

### npm

```bash
npm run dev
```

The development server will start through Vite.

Open the local URL displayed in the terminal, typically:

```text
http://localhost:5173
```

---

# 🏗️ Production Build

Create a production build with:

```bash
bun run build
```

or:

```bash
npm run build
```

For a development-mode build:

```bash
bun run build:dev
```

---

# 👀 Preview Production Build

After building:

```bash
bun run preview
```

or:

```bash
npm run preview
```

---

# 🧹 Code Quality

## Lint

Run ESLint:

```bash
bun run lint
```

or:

```bash
npm run lint
```

## Format

Format the project using Prettier:

```bash
bun run format
```

or:

```bash
npm run format
```

---

# 🛠️ Customization Guide

Most business-specific content can be changed directly from:

```text
src/routes/index.tsx
```

### Studio information

Look for:

```ts
const STUDIO = {
  ...
};
```

Update:

* Studio name
* Phone
* WhatsApp
* Email
* Address
* Opening hours
* Instagram
* Facebook
* YouTube
* Google Maps

---

## Change Services

Modify:

```ts
const SERVICES = [...]
```

You can add/remove:

* Service name
* Description
* Icon
* Image

---

## Change Portfolio

Modify the portfolio data inside:

```text
src/routes/index.tsx
```

and the fallback gallery in:

```text
src/data/images.ts
```

---

## Change Hero Image

The hero image can be updated through:

```text
src/data/images.ts
```

or the corresponding hero configuration in:

```text
src/routes/index.tsx
```

For production, it is recommended to use optimized images hosted through a proper image CDN such as Cloudinary rather than relying entirely on external development images.

---

# 🔐 Security Considerations

The current application is primarily a frontend-driven studio website.

The booking form performs client-side sanitization and validation before constructing the WhatsApp booking message.

However, if the project is later expanded into a full booking platform, additional server-side protections should be implemented, including:

* Server-side validation
* Rate limiting
* CAPTCHA/bot protection
* Database validation
* API authentication where required
* Secure server-side secrets
* Request logging
* Abuse prevention

Client-side validation should never be treated as a replacement for server-side validation when a backend is introduced.

---

# 🚀 Recommended Production Improvements

For a production photography business, the following upgrades are recommended.

### Image Optimization

Move the full production gallery to Cloudinary or another image CDN.

Use:

* WebP/AVIF
* Responsive image sizes
* Lazy loading
* Automatic compression
* CDN delivery

### Booking Backend

If the studio receives a high volume of inquiries, replace the WhatsApp-only workflow with a backend booking system.

Possible architecture:

```text
Website
   │
   ▼
Booking API
   │
   ├── PostgreSQL
   │
   ├── Email notifications
   │
   ├── WhatsApp notification
   │
   └── Admin dashboard
```

### Admin Dashboard

A future admin panel could allow the studio owner to manage:

* Portfolio
* Services
* Testimonials
* Bookings
* Clients
* Gallery categories
* Pricing packages
* Contact inquiries

### Analytics

Add analytics to track:

* Portfolio views
* Booking CTA clicks
* WhatsApp clicks
* Contact form submissions
* Most viewed gallery categories
* Traffic sources

---

# 🌐 Deployment

The application can be deployed using modern frontend hosting platforms that support Vite/TanStack applications.

Typical deployment flow:

```text
GitHub
   │
   ▼
CI/CD
   │
   ▼
Production Build
   │
   ▼
Hosting Platform
   │
   ▼
Custom Domain
```

Before deployment, verify:

* Production images
* Studio contact details
* Social links
* Google Maps location
* Cloudinary configuration
* SEO metadata
* Mobile layout
* WhatsApp booking
* Production build
* Accessibility
* Performance

---

# 📈 Performance Strategy

Photography websites can become heavy because of large image files.

Recommended practices include:

### Images

Use:

```text
AVIF/WebP
```

instead of unnecessarily large JPEG/PNG files.

### Responsive images

Serve different image dimensions based on viewport size.

### Lazy loading

Images outside the initial viewport should be lazy-loaded.

### CDN

Serve production photography through a global CDN.

### Animation

Animations should remain lightweight and avoid unnecessary layout recalculations.

### Portfolio

Do not load hundreds of high-resolution images simultaneously.

Use:

```text
Thumbnail → Optimized preview → Full-resolution image
```

when appropriate.

---

# ♿ Accessibility

The project includes several accessibility-oriented practices such as:

* Semantic navigation
* Accessible labels
* Button labels
* Image alt text
* Keyboard-friendly controls
* Responsive navigation
* Focus states

When adding new images, always provide meaningful `alt` text where the image conveys information.

Decorative images should use empty alt attributes where appropriate.

---

# 📱 Browser Support

The application is intended for modern browsers supporting current web standards, including:

* Google Chrome
* Safari
* Microsoft Edge
* Firefox
* Mobile Safari
* Chrome for Android

---

# 🧪 Development Philosophy

The project follows a component-oriented architecture.

Instead of placing every UI element into a single monolithic component, reusable functionality is separated into dedicated modules.

Examples:

```text
Lightbox
Marquee
UI components
Hooks
Configuration
Data
Routes
```

This makes the project easier to maintain and expand.

---

# 🔮 Future Roadmap

Potential future versions of Anand Studio can evolve from a portfolio website into a complete photography business platform.

### Phase 1 — Current

* [x] Responsive studio website
* [x] Hero section
* [x] About section
* [x] Services
* [x] Portfolio
* [x] Lightbox
* [x] Testimonials
* [x] Contact form
* [x] WhatsApp booking
* [x] Google Maps
* [x] Social media links
* [x] Responsive mobile navigation
* [x] SEO metadata
* [x] LocalBusiness structured data
* [x] Optional Cloudinary gallery

### Phase 2 — Business Infrastructure

* [ ] Online booking system
* [ ] Booking database
* [ ] Admin dashboard
* [ ] Client management
* [ ] Gallery management
* [ ] Pricing/package management
* [ ] Email notifications
* [ ] WhatsApp automation

### Phase 3 — Client Platform

* [ ] Client login
* [ ] Private client galleries
* [ ] Password-protected albums
* [ ] Photo selection/favorites
* [ ] Digital downloads
* [ ] Payment integration
* [ ] Booking status tracking
* [ ] Contract management

### Phase 4 — Advanced Studio Platform

* [ ] CRM
* [ ] Automated follow-ups
* [ ] Lead management
* [ ] Analytics dashboard
* [ ] Revenue analytics
* [ ] Staff management
* [ ] Calendar management
* [ ] Automated invoices
* [ ] Cloud photo delivery
* [ ] AI-assisted photo organization

---

# 🏛️ Potential Future Architecture

If the website evolves into a complete studio management platform, a scalable architecture could look like:

```text
                    ┌───────────────────┐
                    │   Client Website  │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │    API / Backend  │
                    └─────────┬─────────┘
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
    ┌───────────┐       ┌───────────┐       ┌───────────┐
    │ PostgreSQL│       │ Cloudinary│       │ WhatsApp  │
    │ Database  │       │   Media   │       │ / Email   │
    └───────────┘       └───────────┘       └───────────┘
          │
          ▼
    ┌───────────────────┐
    │   Admin Dashboard │
    └───────────────────┘
```

This would transform the project from a marketing website into a complete photography studio management system.

---

# 📂 Important Files

| File                               | Purpose                                         |
| ---------------------------------- | ----------------------------------------------- |
| `src/routes/index.tsx`             | Main studio website and page sections           |
| `src/routes/__root.tsx`            | Root layout, SEO metadata, global configuration |
| `src/data/images.ts`               | Central image catalog                           |
| `src/config/cloudinary.ts`         | Cloudinary gallery integration                  |
| `src/components/site/Lightbox.tsx` | Portfolio image lightbox                        |
| `src/components/site/Marquee.tsx`  | Animated image marquee                          |
| `src/styles.css`                   | Global styling                                  |
| `package.json`                     | Dependencies and project scripts                |
| `eslint.config.js`                 | ESLint configuration                            |
| `components.json`                  | UI component configuration                      |

---

# 🤝 Contributing

If this project is opened for external contributions:

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Make your changes
4. Run linting

```bash
bun run lint
```

5. Format the code

```bash
bun run format
```

6. Build the project

```bash
bun run build
```

7. Commit your changes

```bash
git commit -m "feat: add your feature"
```

8. Push the branch

```bash
git push origin feature/your-feature
```

9. Open a pull request

---

# 📄 License

This project is intended for the Anand Studio photography business and its associated digital presence.

Unless otherwise stated, photography, branding, logos, business information, and other proprietary assets should not be reused without permission.

Third-party libraries remain subject to their respective licenses.

---

# 📞 Contact

**Anand Digital Studio**

📍 Arya Nagar, Rohtak, Haryana, India

📞 **+91 93555 66209**

✉️ **[anandstudio1980@gmail.com](mailto:anandstudio1980@gmail.com)**

### Social

* Instagram — `@ananddigitalstudio01`
* Facebook — Anand Digital Studio
* YouTube / Social Video

---

# ⭐ Project Vision

Anand Studio is built around a simple idea:

> **Photography should not only preserve a moment — it should preserve how that moment felt.**

The website is designed to reflect that philosophy through cinematic imagery, intentional typography, subtle motion, and a clean user experience.

The long-term goal is to evolve the platform from a photography portfolio into a complete digital ecosystem for managing the studio's **clients, bookings, galleries, payments, and creative work**.

---

## Built With

**React · TypeScript · TanStack Start · TanStack Router · Vite · Tailwind CSS · Framer Motion · Radix UI · Lucide · Cloudinary**

---

**© Anand Digital Studio — All Rights Reserved**
