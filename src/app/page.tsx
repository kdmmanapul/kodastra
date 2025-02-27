import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Work from '@/components/sections/Work';
import Technologies from '@/components/sections/Technologies';
import Contact from '@/components/sections/Contact';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <About />
      <Technologies />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
