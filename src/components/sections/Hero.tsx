"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Link from 'next/link';
import AnimatedBackground from '../ui/AnimatedBackground';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const ctx = gsap.context(() => {
      // Create a timeline for the hero animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Animate the background
      tl.fromTo(
        bgRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5 }
      );

      // Animate the title with a text reveal effect
      tl.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=1'
      );

      // Animate the subtitle
      tl.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      );

      // Animate the CTA buttons
      if (ctaRef.current && ctaRef.current.children.length > 0) {
        tl.fromTo(
          Array.from(ctaRef.current.children),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.2 },
          '-=0.4'
        );
      }

      // Create a parallax effect on scroll
      gsap.to(bgRef.current, {
        yPercent: 30,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert(); // Cleanup
  }, [isClient]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background with animated elements */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0"
      >
        {/* Rich color gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#101020] to-[#0a0a15] z-5"></div>
        
        {/* Colored accent gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-6">
          <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[50%] bg-[#3a1c71] opacity-10 blur-[120px] rounded-full"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-[#4776e6] opacity-10 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] bg-[#2c3e50] opacity-10 blur-[120px] rounded-full"></div>
        </div>
        
        {/* Animated background elements */}
        <AnimatedBackground variant="particles" className="z-10" />
        
        {/* Grid overlay with reduced opacity */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-15 z-15"></div>
        
        {/* Subtle noise texture for depth */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-pattern.png')] opacity-5 z-20"></div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block"
          >
            <span className="px-4 py-1 rounded-full bg-gradient-to-r from-[#404060] to-[#404040] text-[#d0d0d0] text-sm uppercase tracking-wider shadow-lg">
              Innovative Software Solutions
            </span>
          </motion.div>
          
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#c0c0c0] via-white to-[#a0a0c0] bg-clip-text text-transparent"
          >
            Transforming Ideas Into <br /> Digital Reality
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-[#d0d0d0] mb-10 max-w-2xl mx-auto"
          >
            Specialized in AI, Web3, Web Applications and Software Development. 
            We create cutting-edge solutions that drive innovation and growth.
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-[#c0c0c0] to-[#a0a0c0] hover:from-white hover:to-[#c0c0d0] text-black font-medium rounded-full transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
            </Link>
            <Link 
              href="#services"
              className="px-8 py-3 bg-transparent hover:bg-[#303050]/20 text-[#c0c0c0] font-medium rounded-full border border-[#404060] hover:border-[#505070] transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Animated shapes */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute bottom-0 left-0 w-full h-full"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0z" 
            fill="#0a0a15"
            fillOpacity="1"
          ></path>
        </svg>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.2
        }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-[#c0c0c0] bg-black/20 backdrop-blur-sm flex justify-center shadow-lg">
          <motion.div 
            className="w-1 h-3 bg-gradient-to-b from-[#c0c0c0] to-[#a0a0c0] rounded-full mt-2"
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 