"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import { countUp } from '@/lib/animations/gsapAnimations';
import AnimatedBackground from '../ui/AnimatedBackground';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const statsRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
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

      // Animate the stats with count up effect
      if (isClient) {
        statsRefs.current.forEach((ref) => {
          if (ref) {
            const statValue = parseInt(ref.getAttribute('data-value') || '0', 10);
            countUp(ref, statValue);
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, [isClient]);

  const teamMembers = [
    {
      name: 'Microsoft',
      role: 'Cloud Solutions Partner',
      image: '/images/about/microsoft.png',
      bio: 'Strategic abouthip delivering enterprise-grade cloud solutions and AI services through the Azure platform.',
    },
    {
      name: 'AWS',
      role: 'Cloud Infrastructure Partner',
      image: '/images/about/aws.png',
      bio: 'Advanced consulting partner providing scalable cloud infrastructure and serverless computing solutions.',
    },
    {
      name: 'Google Cloud',
      role: 'Machine Learning Partner',
      image: '/images/about/gcp.png',
      bio: 'Certified partner specializing in implementing machine learning and data analytics solutions.',
    },
    {
      name: 'Salesforce',
      role: 'CRM Solutions Partner',
      image: '/images/about/salesforce.png',
      bio: 'Platinum consulting partner delivering customized CRM and business automation solutions.',
    },
  ];

  const stats = [
    { value: 150, label: 'Projects Completed' },
    { value: 50, label: 'Happy Clients' },
    { value: 15, label: 'Team Members' },
    { value: 5, label: 'Years Experience' },
  ];

  // Function to set refs properly
  const setStatRef = (el: HTMLSpanElement | null, index: number) => {
    statsRefs.current[index] = el;
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-[#0a0a15] to-[#0a0a0a] relative overflow-hidden"
      id="about"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Colored accent gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-[#3a1c71] opacity-15 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[30%] -right-[20%] w-[50%] h-[50%] bg-[#4776e6] opacity-15 blur-[150px] rounded-full"></div>
          <div className="absolute top-[60%] left-[30%] w-[30%] h-[30%] bg-[#505070] opacity-10 blur-[100px] rounded-full"></div>
        </div>
        <AnimatedBackground variant="gradient" className="z-5" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 z-5"></div>
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
            About Us
          </motion.span>
          
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#c0c0c0] via-white to-[#a0a0c0] bg-clip-text text-transparent"
          >
            Who We Are
          </h2>
          
          <p 
            ref={subheadingRef}
            className="text-lg text-[#d0d0d0] max-w-2xl mx-auto"
          >
            We&apos;re a team of passionate technologists dedicated to creating innovative digital solutions that drive business growth.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-br from-[#0f0f0f]/80 to-[#1a1a1a]/80 p-8 rounded-xl border border-[#333] hover:border-[#505070] transition-all duration-300 shadow-lg backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#c0c0c0] via-white to-[#a0a0c0] bg-clip-text text-transparent">Our Story</h3>
            <div className="space-y-4 text-[#d0d0d0]">
              <p>
                Founded in 2019, Kodastra began with a simple mission: to help businesses leverage cutting-edge technology to solve real-world problems. What started as a small team of four passionate developers has grown into a full-service software agency with expertise across multiple domains.
              </p>
              <p>
                We believe that technology should be accessible, intuitive, and impactful. Our approach combines technical excellence with creative thinking, allowing us to deliver solutions that not only meet but exceed our clients&apos; expectations.
              </p>
              <p>
                Today, we specialize in AI solutions, Web3 development, web applications, and custom software development, serving clients from startups to enterprise organizations across various industries.
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 bg-gradient-to-r from-[#c0c0c0] to-[#a0a0c0] bg-clip-text text-transparent">Our Values</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-gradient-to-r from-[#3a1c71] to-[#4776e6] p-1 rounded-full mr-3 mt-1 shadow-lg purple-glow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#d0d0d0]"><span className="text-white font-medium">Innovation:</span> We constantly explore new technologies and approaches to deliver cutting-edge solutions.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-gradient-to-r from-[#4776e6] to-[#505070] p-1 rounded-full mr-3 mt-1 shadow-lg purple-glow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#d0d0d0]"><span className="text-white font-medium">Quality:</span> We&apos;re committed to excellence in everything we do, from code to client communication.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-gradient-to-r from-[#505070] to-[#3a1c71] p-1 rounded-full mr-3 mt-1 shadow-lg purple-glow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#d0d0d0]"><span className="text-white font-medium">Collaboration:</span> We work closely with our clients, treating their challenges as our own.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-gradient-to-r from-[#3a1c71] to-[#4776e6] p-1 rounded-full mr-3 mt-1 shadow-lg purple-glow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#d0d0d0]"><span className="text-white font-medium">Integrity:</span> We believe in transparency, honesty, and doing what&apos;s right for our clients.</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-xl overflow-hidden border border-[#333] hover:border-[#505070] transition-all duration-300 shadow-xl">
              <Image
                src="/images/about/hq.jpg"
                alt="Kodastra Office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#3a1c71]/20 to-[#4776e6]/20 mix-blend-overlay opacity-0 hover:opacity-60 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl font-semibold bg-gradient-to-r from-[#c0c0c0] via-white to-[#a0a0c0] bg-clip-text text-transparent mb-2">Our Headquarters</h4>
                <p className="text-[#d0d0d0]">Located in the heart of Tech City, our modern office is designed to foster creativity and collaboration.</p>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#3a1c71] to-[#4776e6] rounded-full flex items-center justify-center z-10 border-4 border-black shadow-xl purple-glow">
              <div className="text-center">
                <span className="block text-3xl font-bold text-white">5+</span>
                <span className="text-sm text-[#f0f0f0]">Years of Excellence</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-10 rounded-xl border border-[#333] hover:border-[#505070] transition-all duration-300 shadow-lg backdrop-blur-sm relative overflow-hidden">
            {/* Add subtle accent gradients */}
            <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-[#3a1c71] opacity-5 blur-[80px] rounded-full"></div>
            <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-[#4776e6] opacity-5 blur-[80px] rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-center p-6 rounded-lg hover:bg-[#202030]/30 transition-all duration-300 border border-transparent hover:border-[#505070]/30"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: '0 10px 30px -10px rgba(71, 118, 230, 0.2)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <span 
                    ref={(el) => setStatRef(el, index)}
                    data-value={stat.value}
                    className="text-4xl font-bold block mb-2 bg-gradient-to-r from-[#c0c0c0] via-white to-[#a0a0c0] bg-clip-text text-transparent"
                  >
                    0
                  </span>
                  <span className="text-[#d0d0d0] text-lg">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-[#c0c0c0] via-white to-[#a0a0c0] bg-clip-text text-transparent">Our Partners</h3>
            <p className="text-[#d0d0d0] max-w-2xl mx-auto">
              We collaborate with industry-leading partners who share our commitment to innovation and excellence in technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-xl overflow-hidden border border-[#333] hover:border-[#505070] transition-all duration-300 shadow-lg group"
                whileHover={{ y: -10, boxShadow: '0 10px 30px -10px rgba(71, 118, 230, 0.3)' }}
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3a1c71]/30 to-[#4776e6]/30 opacity-0 group-hover:opacity-40 transition-opacity duration-300 mix-blend-overlay"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-1 bg-gradient-to-r from-[#c0c0c0] via-white to-[#a0a0c0] bg-clip-text text-transparent">{member.name}</h4>
                  <p className="text-[#4776e6] mb-3 font-medium">{member.role}</p>
                  <p className="text-[#d0d0d0] text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 