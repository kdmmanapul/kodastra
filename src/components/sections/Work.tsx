"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import AnimatedBackground from '../ui/AnimatedBackground';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
}

const Work: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Sample projects data
  const projectsData: Project[] = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      category: 'ai',
      description: 'A comprehensive analytics dashboard with AI-driven insights and predictive analytics for business intelligence.',
      image: '/images/projects/project1.jpg',
      technologies: ['React', 'TensorFlow.js', 'Node.js', 'D3.js'],
    },
    {
      id: 2,
      title: 'Decentralized Finance Platform',
      category: 'web3',
      description: 'A DeFi platform enabling users to lend, borrow, and stake cryptocurrencies in a decentralized manner.',
      image: '/images/projects/project2.jpg',
      technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React'],
    },
    {
      id: 3,
      title: 'E-commerce Web Application',
      category: 'web',
      description: 'A modern e-commerce platform with real-time inventory management, payment processing, and customer analytics.',
      image: '/images/projects/project3.jpg',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    },
    {
      id: 4,
      title: 'Smart City Management System',
      category: 'software',
      description: 'An integrated system for managing urban infrastructure, including traffic, utilities, and public services.',
      image: '/images/projects/project4.jpg',
      technologies: ['Python', 'IoT', 'AWS', 'React'],
    },
    {
      id: 5,
      title: 'NFT Marketplace',
      category: 'web3',
      description: 'A platform for creating, buying, selling, and trading non-fungible tokens with advanced search and filtering.',
      image: '/images/projects/project5.jpg',
      technologies: ['Ethereum', 'IPFS', 'Next.js', 'GraphQL'],
    },
    {
      id: 6,
      title: 'Natural Language Processing API',
      category: 'ai',
      description: 'An API service providing sentiment analysis, entity recognition, and text classification capabilities.',
      image: '/images/projects/project6.jpg',
      technologies: ['Python', 'Hugging Face', 'FastAPI', 'Docker'],
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      setProjects(projectsData);
      setFilteredProjects(projectsData);
    }
  }, [isClient]);

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

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
    
    if (category === 'all') {
      setFilteredProjects(projects);
      return;
    }
    
    const filtered = projects.filter(project => project.category === category);
    setFilteredProjects(filtered);
  };

  const filterCategories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'web3', name: 'Web3' },
    { id: 'web', name: 'Web Applications' },
    { id: 'software', name: 'Software' },
  ];

  // Show a simplified version during server-side rendering
  const renderProjects = isClient ? filteredProjects : projectsData;

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-[#0a0a15] to-[#0a0a0a] relative overflow-hidden"
      id="work"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Colored accent gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[30%] -left-[20%] w-[40%] h-[40%] bg-[#3a1c71] opacity-5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[20%] -right-[10%] w-[30%] h-[30%] bg-[#4776e6] opacity-5 blur-[100px] rounded-full"></div>
        </div>
        <AnimatedBackground variant="particles" className="z-5" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5 z-5"></div>
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
            Our Portfolio
          </motion.span>
          
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#c0c0c0] via-white to-[#a0a0c0] bg-clip-text text-transparent"
          >
            Featured Projects
          </h2>
          
          <p 
            ref={subheadingRef}
            className="text-lg text-[#d0d0d0] max-w-2xl mx-auto"
          >
            Explore our diverse portfolio of innovative solutions across various industries and technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterClick(category.id)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 shadow-md ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-[#3a1c71] to-[#4776e6] text-white'
                  : 'bg-[#1a1a1a] text-[#d0d0d0] hover:bg-[#252535] hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {renderProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-xl overflow-hidden border border-[#333] hover:border-[#505070] transition-all duration-300 group shadow-lg backdrop-blur-sm"
              whileHover={{ 
                y: -10, 
                boxShadow: '0 10px 30px -10px rgba(71, 118, 230, 0.2)',
                borderColor: '#606080'
              }}
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a1c71]/80 to-[#4776e6]/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="px-5 py-2 bg-white text-[#3a1c71] rounded-full transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 font-medium shadow-lg hover:bg-[#f0f0f0]">
                    View Project
                  </button>
                </div>
                <div className="relative h-full w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-[#3a1c71] to-[#4776e6] text-white text-xs rounded-full shadow-md">
                    {filterCategories.find(cat => cat.id === project.category)?.name.replace(' Projects', '')}
                  </span>
                </div>
                <p className="text-[#c0c0c0] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-[#0a0a0a] text-[#d0d0d0] text-xs rounded border border-[#333] hover:border-[#505070] transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work; 