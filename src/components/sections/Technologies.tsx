"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import AnimatedBackground from '../ui/AnimatedBackground';

interface TechItemProps {
  name: string;
  icon: string;
  delay: number;
  category: string;
}

const TechItem: React.FC<TechItemProps> = ({ name, icon, delay, category }) => {
  // Create different gradient backgrounds based on category
  const getBgGradient = () => {
    switch(category) {
      case 'ai':
        return 'from-[#3a1c71]/10 to-[#4776e6]/10';
      case 'web3':
        return 'from-[#4776e6]/10 to-[#505070]/10';
      case 'frontend':
        return 'from-[#505070]/10 to-[#3a1c71]/10';
      case 'backend':
        return 'from-[#3a1c71]/10 to-[#505070]/10';
      case 'cloud':
        return 'from-[#4776e6]/10 to-[#3a1c71]/10';
      default:
        return 'from-[#3a1c71]/10 to-[#4776e6]/10';
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${getBgGradient()} backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 border border-[#333] hover:border-[#505070] transition-all duration-300 shadow-lg`}>
        <img src={icon} alt={name} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
      </div>
      <span className="text-[#d0d0d0] text-sm">{name}</span>
    </motion.div>
  );
};

const Technologies: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const ctx = gsap.context(() => {
      // Animate the heading with a text reveal effect
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate the subheading
      gsap.fromTo(
        subheadingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: subheadingRef.current,
            start: 'top bottom-=50',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, [isClient]);

  const technologies = [
    // AI & Machine Learning
    { name: 'TensorFlow', icon: '/images/tech/tensorflow.svg', category: 'ai' },
    { name: 'PyTorch', icon: '/images/tech/pytorch.svg', category: 'ai' },
    { name: 'OpenAI', icon: '/images/tech/openai.webp', category: 'ai' },
    { name: 'Hugging Face', icon: '/images/tech/huggingface.png', category: 'ai' },
    
    // Web3 & Blockchain
    { name: 'Ethereum', icon: '/images/tech/ethereum.svg', category: 'web3' },
    { name: 'Solidity', icon: '/images/tech/solidity.svg', category: 'web3' },
    { name: 'Web3.js', icon: '/images/tech/web3js.png', category: 'web3' },
    { name: 'Hardhat', icon: '/images/tech/hardhat.svg', category: 'web3' },
    
    // Frontend
    { name: 'React', icon: '/images/tech/react.svg', category: 'frontend' },
    { name: 'Next.js', icon: '/images/tech/nextjs.svg', category: 'frontend' },
    { name: 'TypeScript', icon: '/images/tech/typescript.svg', category: 'frontend' },
    { name: 'Tailwind CSS', icon: '/images/tech/tailwind.svg', category: 'frontend' },
    
    // Backend
    { name: 'Node.js', icon: '/images/tech/nodejs.svg', category: 'backend' },
    { name: 'Python', icon: '/images/tech/python.svg', category: 'backend' },
    { name: 'Go', icon: '/images/tech/go.svg', category: 'backend' },
    { name: 'GraphQL', icon: '/images/tech/graphql.svg', category: 'backend' },
    
    // Cloud & DevOps
    { name: 'AWS', icon: '/images/tech/aws.svg', category: 'cloud' },
    { name: 'Docker', icon: '/images/tech/docker.svg', category: 'cloud' },
    { name: 'Kubernetes', icon: '/images/tech/kubernetes.svg', category: 'cloud' },
    { name: 'Github', icon: '/images/tech/github.svg', category: 'cloud' },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-[#0a0a15] to-[#0a0a0a] relative overflow-hidden"
      id="technologies"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Colored accent gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-[#3a1c71] opacity-5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[30%] -right-[20%] w-[50%] h-[50%] bg-[#4776e6] opacity-5 blur-[150px] rounded-full"></div>
        </div>
        <AnimatedBackground variant="grid" className="z-5" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="px-4 py-1 rounded-full bg-gradient-to-r from-[#404060] to-[#404040] text-[#d0d0d0] text-sm uppercase tracking-wider inline-block mb-4 shadow-lg"
          >
            Our Tech Stack
          </motion.span>
          
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#c0c0c0] via-white to-[#a0a0c0] bg-clip-text text-transparent"
          >
            Powered by Innovation
          </h2>
          
          <p 
            ref={subheadingRef}
            className="text-lg text-[#d0d0d0] max-w-2xl mx-auto"
          >
            We leverage cutting-edge technologies to build powerful, scalable, and future-proof solutions.
          </p>
        </div>

        <div className="mb-16">
          <motion.h3 
            className="text-xl font-semibold mb-8 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-[#3a1c71] to-[#4776e6] bg-clip-text text-transparent">AI & Machine Learning</span>
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {technologies.slice(0, 4).map((tech, index) => (
              <TechItem key={tech.name} name={tech.name} icon={tech.icon} delay={index} category={tech.category} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <motion.h3 
            className="text-xl font-semibold mb-8 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-[#4776e6] to-[#505070] bg-clip-text text-transparent">Web3 & Blockchain</span>
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {technologies.slice(4, 8).map((tech, index) => (
              <TechItem key={tech.name} name={tech.name} icon={tech.icon} delay={index} category={tech.category} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <motion.h3 
            className="text-xl font-semibold mb-8 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-[#505070] to-[#3a1c71] bg-clip-text text-transparent">Frontend Development</span>
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {technologies.slice(8, 12).map((tech, index) => (
              <TechItem key={tech.name} name={tech.name} icon={tech.icon} delay={index} category={tech.category} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <motion.h3 
            className="text-xl font-semibold mb-8 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-[#3a1c71] to-[#505070] bg-clip-text text-transparent">Backend Development</span>
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {technologies.slice(12, 16).map((tech, index) => (
              <TechItem key={tech.name} name={tech.name} icon={tech.icon} delay={index} category={tech.category} />
            ))}
          </div>
        </div>

        <div>
          <motion.h3 
            className="text-xl font-semibold mb-8 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-[#4776e6] to-[#3a1c71] bg-clip-text text-transparent">Cloud & DevOps</span>
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {technologies.slice(16, 20).map((tech, index) => (
              <TechItem key={tech.name} name={tech.name} icon={tech.icon} delay={index} category={tech.category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies; 