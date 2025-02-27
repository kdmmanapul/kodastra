"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface TechItemProps {
  name: string;
  icon: string;
  delay: number;
}

const TechItem: React.FC<TechItemProps> = ({ name, icon, delay }) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="w-16 h-16 md:w-20 md:h-20 bg-[#1a1a1a] rounded-xl flex items-center justify-center mb-3 border border-[#333] hover:border-[#505050] transition-colors duration-300">
        <img src={icon} alt={name} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
      </div>
      <span className="text-[#c0c0c0] text-sm">{name}</span>
    </motion.div>
  );
};

const Technologies: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
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
  }, []);

  const technologies = [
    // AI & Machine Learning
    { name: 'TensorFlow', icon: '/images/tech/tensorflow.svg' },
    { name: 'PyTorch', icon: '/images/tech/pytorch.svg' },
    { name: 'OpenAI', icon: '/images/tech/openai.svg' },
    { name: 'Hugging Face', icon: '/images/tech/huggingface.svg' },
    
    // Web3 & Blockchain
    { name: 'Ethereum', icon: '/images/tech/ethereum.svg' },
    { name: 'Solidity', icon: '/images/tech/solidity.svg' },
    { name: 'Web3.js', icon: '/images/tech/web3js.svg' },
    { name: 'Hardhat', icon: '/images/tech/hardhat.svg' },
    
    // Frontend
    { name: 'React', icon: '/images/tech/react.svg' },
    { name: 'Next.js', icon: '/images/tech/nextjs.svg' },
    { name: 'TypeScript', icon: '/images/tech/typescript.svg' },
    { name: 'Tailwind CSS', icon: '/images/tech/tailwindcss.svg' },
    
    // Backend
    { name: 'Node.js', icon: '/images/tech/nodejs.svg' },
    { name: 'Python', icon: '/images/tech/python.svg' },
    { name: 'Go', icon: '/images/tech/go.svg' },
    { name: 'GraphQL', icon: '/images/tech/graphql.svg' },
    
    // Cloud & DevOps
    { name: 'AWS', icon: '/images/tech/aws.svg' },
    { name: 'Docker', icon: '/images/tech/docker.svg' },
    { name: 'Kubernetes', icon: '/images/tech/kubernetes.svg' },
    { name: 'CI/CD', icon: '/images/tech/cicd.svg' },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-black relative overflow-hidden"
      id="technologies"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="px-4 py-1 rounded-full bg-[#404040] text-[#c0c0c0] text-sm uppercase tracking-wider inline-block mb-4"
          >
            Our Tech Stack
          </motion.span>
          
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient"
          >
            Powered by Innovation
          </h2>
          
          <p 
            ref={subheadingRef}
            className="text-lg text-[#c0c0c0] max-w-2xl mx-auto"
          >
            We leverage cutting-edge technologies to build powerful, scalable, and future-proof solutions.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-white text-center">AI & Machine Learning</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {technologies.slice(0, 4).map((tech, index) => (
              <TechItem key={tech.name} name={tech.name} icon={tech.icon} delay={index} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-white text-center">Web3 & Blockchain</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {technologies.slice(4, 8).map((tech, index) => (
              <TechItem key={tech.name} name={tech.name} icon={tech.icon} delay={index} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-white text-center">Frontend Development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {technologies.slice(8, 12).map((tech, index) => (
              <TechItem key={tech.name} name={tech.name} icon={tech.icon} delay={index} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-white text-center">Backend Development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {technologies.slice(12, 16).map((tech, index) => (
              <TechItem key={tech.name} name={tech.name} icon={tech.icon} delay={index} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-8 text-white text-center">Cloud & DevOps</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {technologies.slice(16, 20).map((tech, index) => (
              <TechItem key={tech.name} name={tech.name} icon={tech.icon} delay={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies; 