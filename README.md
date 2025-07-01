# Weezard: Digital Marketing Agency Platform

## Overview
Welcome to Weezard! This is a modern, full-stack digital marketing agency web application built with Next.js, React, Tailwind CSS, and Framer Motion. The project features a beautiful, interactive UI, dynamic animations, and a modular, scalable architecture.

> **Note:** This entire codebase was developed with the significant assistance of GitHub Copilot, my AI coding companion. Copilot helped accelerate development, provided code suggestions, and enabled rapid prototyping of complex UI and logic. Its contributions are present throughout every component, utility, and style in this project.

## Features
- **Hero Section**: Responsive hero with animated Spline 3D (desktop) and image (mobile/tablet), call-to-action, and animated rainbow background.
- **VelocityScroll**: Custom, animated, edge-to-edge horizontal scroll of customer logos, built with Framer Motion.
- **Services**: Grid of marketing services, each with icon, color, and animation.
- **Case Studies**: Animated cards highlighting real-world marketing success stories.
- **Pricing**: Responsive, animated pricing tiers with feature lists and call-to-action.
- **Consultation Modal**: Interactive modal for booking a consultation, with form validation and animated feedback.
- **Navbar & Footer**: Modern navigation and footer with theme switching, social links, and animated underline effects.
- **Custom UI Components**: Includes animated buttons, tooltips, cards, lottie icons, and more.
- **Theme Support**: Light/dark mode with smooth transitions.
- **Animated Backgrounds**: Rainbow and pattern backgrounds for visual flair.
- **Cursor Companion**: Fun, animated cursor companion that follows the user.

## Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS, custom CSS, and utility classes
- **Animation**: Framer Motion, Lottie
- **TypeScript**: Full type safety across the codebase
- **Other**: Dynamic imports, modular component structure, and more

## Project Structure
```
app/
  globals.css         # Global styles (including rainbow animation)
  layout.tsx          # Root layout, theme provider, scroll progress, cursor
  page.tsx            # Home page composition
  about/              # About page
  sorry/              # Placeholder for unavailable features
  components/         # Main UI sections (Hero, Services, CaseStudies, Pricing, Navbar, Footer, etc.)
Assets/               # (Legacy) - images should be in Public/
Public/               # Static assets (logos, images, lottie, etc.)
components/ui/        # Reusable UI primitives (buttons, cards, modals, tooltips, etc.)
lib/                  # Utility functions
registry/magicui/     # MagicCard and other registry components
```

## Getting Started
1. **Install dependencies:**
   ```powershell
   npm install
   ```
2. **Run the development server:**
   ```powershell
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## How Copilot Helped
This project was built with Copilot as a constant coding partner. Copilot:
- Suggested component structures, props, and TypeScript types
- Generated boilerplate and repetitive code
- Helped with Tailwind class composition and responsive design
- Provided animation logic and Framer Motion usage
- Assisted with form validation, modal logic, and state management
- Offered creative UI ideas and code snippets for custom effects
- Accelerated debugging and refactoring

Every file in this repo reflects Copilot's influence, from the smallest utility to the most complex animation. This project is a testament to the power of AI-assisted software development.

## Customization & Extending
- **Add new services/case studies:** Edit the arrays in `Services.tsx` and `CaseStudies.tsx`.
- **Change branding:** Update images in `Public/` and adjust theme colors in `tailwind.config.js`.
- **Add new UI components:** Place them in `components/ui/` and import as needed.
- **Deploy:** The app is ready for deployment on Vercel, Netlify, or any Node.js-compatible host.

## License
MIT

---

*Built with ❤️ and Copilot.*
