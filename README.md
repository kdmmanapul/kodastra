# Kodastra Landing Page

A modern, animated landing page for Kodastra, a software agency specializing in AI, Web3, web applications, and software development.

## Features

- Responsive design for all device sizes
- Modern black and silver theme
- Engaging animations using GSAP and Framer Motion
- Interactive UI components
- Optimized performance

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: 
  - GSAP (GreenSock Animation Platform)
  - Framer Motion
- **Typography**: Geist font family
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/kodastra-landing-page.git
   cd kodastra-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `src/app`: Main application pages
- `src/components`: Reusable UI components
  - `layout`: Layout components (Navbar, Footer)
  - `sections`: Page sections (Hero, Services, etc.)
  - `ui`: UI components (Logo, buttons, etc.)
- `src/lib`: Utility functions and animations
- `public`: Static assets

## Customization

### Colors

The main colors are defined in `src/app/globals.css` as CSS variables:

```css
:root {
  --background: #0a0a0a;
  --foreground: #ededed;
  --primary: #c0c0c0;
  --primary-dark: #a0a0a0;
  --accent: #404040;
  --accent-light: #505050;
  --text-primary: #ffffff;
  --text-secondary: #c0c0c0;
  --text-muted: #808080;
}
```

### Images

Replace the placeholder images in the `public/images` directory with your own:

- Team member photos: `public/images/team/`
- Project screenshots: `public/images/projects/`
- About section images: `public/images/about/`
- Technology logos: `public/images/tech/`

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://greensock.com/gsap/)
- [Framer Motion](https://www.framer.com/motion/)
