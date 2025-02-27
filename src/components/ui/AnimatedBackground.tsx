"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'particles' | 'gradient' | 'grid' | 'waves';
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  variant = 'particles',
  className = '' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  
  // Only run animations on the client side to prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Enhanced particles animation with more colors
  const renderParticles = () => {
    if (!isClient) return null;
    
    // Color palette for particles
    const colors = [
      '#c0c0c0', // Silver
      '#a0a0c0', // Light purple-silver
      '#8080a0', // Muted purple
      '#4776e6', // Blue accent
      '#3a1c71', // Deep purple
      '#505070', // Purple-gray
      '#d0d0d0', // Light silver
    ];
    
    // Generate particles with a fixed seed to ensure consistency
    const particles = Array.from({ length: 80 }, (_, i) => {
      // Use deterministic values based on index instead of Math.random()
      const seed = i / 80;
      const colorIndex = i % colors.length;
      
      return {
        id: i,
        size: (seed * 4) + 1,
        x: ((i % 10) * 10) + (seed * 5),
        y: (Math.floor(i / 10) * 10) + (seed * 5),
        duration: 10 + (i % 15),
        delay: i % 5,
        color: colors[colorIndex],
        blur: i % 5 === 0 ? '2px' : '0px', // Add blur to some particles
        glow: i % 7 === 0, // Add glow effect to some particles
      };
    });

    return (
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${particle.glow ? 'shadow-glow' : ''}`}
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: 0.2,
              backgroundColor: particle.color,
              filter: particle.glow ? `blur(${particle.blur}) brightness(1.5)` : `blur(${particle.blur})`,
            }}
            animate={{
              x: [0, ((particle.id % 10) - 5) * 15, 0],
              y: [0, ((particle.id % 5) - 2) * 15, 0],
              opacity: [0.1, particle.glow ? 0.4 : 0.3, 0.1],
              scale: particle.glow ? [1, 1.2, 1] : [1, 1, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Add a few larger, more prominent glowing orbs */}
        {Array.from({ length: 7 }).map((_, i) => {
          const xPos = 15 + (i * 15);
          const yPos = 20 + ((i * 15) % 60);
          const color = i % 2 === 0 ? '#3a1c71' : '#4776e6';
          
          return (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full"
              style={{
                width: 8 + (i * 2),
                height: 8 + (i * 2),
                left: `${xPos}%`,
                top: `${yPos}%`,
                backgroundColor: color,
                boxShadow: `0 0 20px 8px ${color}30`,
                opacity: 0.4,
                filter: 'blur(4px)',
              }}
              animate={{
                x: [0, ((i % 3) - 1) * 50, 0],
                y: [0, ((i % 2) - 0.5) * 50, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 20 + (i * 5),
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    );
  };

  // Animated gradient background
  const renderGradient = () => {
    return (
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-[#0a0a15] via-[#101020] to-[#0a0a15]"
        animate={{
          background: [
            'linear-gradient(to right, #0a0a15, #101020, #0a0a15)',
            'linear-gradient(to right, #0a0a15, #1a1a30, #0a0a15)',
            'linear-gradient(to right, #0a0a15, #101020, #0a0a15)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        
        {/* Add subtle accent gradients */}
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-[#3a1c71] opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[30%] -right-[20%] w-[50%] h-[50%] bg-[#4776e6] opacity-10 blur-[150px] rounded-full"></div>
      </motion.div>
    );
  };

  // Animated grid background
  const renderGrid = () => {
    if (!isClient) {
      return (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
        </div>
      );
    }
    
    return (
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
        
        {/* Animated highlights */}
        {Array.from({ length: 5 }).map((_, i) => {
          // Use deterministic positions based on index
          const xPos = 20 + (i * 15);
          const yPos = 20 + ((i * 17) % 60);
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#c0c0c0] blur-[50px]"
              style={{
                width: '150px',
                height: '150px',
                left: `${xPos}%`,
                top: `${yPos}%`,
                opacity: 0.05,
              }}
              animate={{
                x: [0, (i - 2) * 50, 0],
                y: [0, ((i % 3) - 1) * 50, 0],
                opacity: [0.03, 0.08, 0.03],
              }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          );
        })}
      </div>
    );
  };

  // Animated waves background
  const renderWaves = () => {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="#303030"
            fillOpacity="0.1"
            animate={{
              d: [
                "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,128L48,154.7C96,181,192,235,288,234.7C384,235,480,181,576,181.3C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,122.7C672,149,768,235,864,266.7C960,299,1056,277,1152,240C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="#505050"
            fillOpacity="0.05"
            animate={{
              d: [
                "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,122.7C672,149,768,235,864,266.7C960,299,1056,277,1152,240C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,96L48,122.7C96,149,192,203,288,240C384,277,480,299,576,266.7C672,235,768,149,864,122.7C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,122.7C672,149,768,235,864,266.7C960,299,1056,277,1152,240C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    );
  };

  const renderBackground = () => {
    switch (variant) {
      case 'particles':
        return renderParticles();
      case 'gradient':
        return renderGradient();
      case 'grid':
        return renderGrid();
      case 'waves':
        return renderWaves();
      default:
        return renderParticles();
    }
  };

  // Render a simple placeholder during server-side rendering
  if (!isClient && (variant === 'particles' || variant === 'grid')) {
    return (
      <div ref={containerRef} className={`absolute inset-0 z-0 ${className}`}>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`absolute inset-0 z-0 ${className}`}>
      {renderBackground()}
    </div>
  );
};

export default AnimatedBackground; 