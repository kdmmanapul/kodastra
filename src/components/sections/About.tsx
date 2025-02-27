"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import { countUp } from '@/lib/animations/gsapAnimations';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const statsRefs = useRef<(HTMLSpanElement | null)[]>([]);

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

      // Animate the stats with count up effect
      statsRefs.current.forEach((ref, index) => {
        if (ref) {
          const statValue = parseInt(ref.getAttribute('data-value') || '0', 10);
          countUp(ref, statValue);
        }
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: '/images/team/team1.jpg',
      bio: 'With over 15 years of experience in tech leadership, Alex founded Kodastra with a vision to create innovative digital solutions.',
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      image: '/images/team/team2.jpg',
      bio: 'Sarah leads our technical strategy and oversees all development projects, bringing expertise in AI and blockchain technologies.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Developer',
      image: '/images/team/team3.jpg',
      bio: 'Michael specializes in full-stack development and has led numerous successful projects for enterprise clients.',
    },
    {
      name: 'Emily Taylor',
      role: 'Design Director',
      image: '/images/team/team4.jpg',
      bio: 'Emily brings creative vision to all our projects, ensuring beautiful and intuitive user experiences across all platforms.',
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
      className="py-20 bg-black relative overflow-hidden"
      id="about"
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
            About Us
          </motion.span>
          
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient"
          >
            Who We Are
          </h2>
          
          <p 
            ref={subheadingRef}
            className="text-lg text-[#c0c0c0] max-w-2xl mx-auto"
          >
            We're a team of passionate technologists dedicated to creating innovative digital solutions that drive business growth.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Our Story</h3>
            <div className="space-y-4 text-[#a0a0a0]">
              <p>
                Founded in 2019, Kodastra began with a simple mission: to help businesses leverage cutting-edge technology to solve real-world problems. What started as a small team of four passionate developers has grown into a full-service software agency with expertise across multiple domains.
              </p>
              <p>
                We believe that technology should be accessible, intuitive, and impactful. Our approach combines technical excellence with creative thinking, allowing us to deliver solutions that not only meet but exceed our clients' expectations.
              </p>
              <p>
                Today, we specialize in AI solutions, Web3 development, web applications, and custom software development, serving clients from startups to enterprise organizations across various industries.
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-white">Our Values</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-[#404040] p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#a0a0a0]"><span className="text-white font-medium">Innovation:</span> We constantly explore new technologies and approaches to deliver cutting-edge solutions.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#404040] p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#a0a0a0]"><span className="text-white font-medium">Quality:</span> We're committed to excellence in everything we do, from code to client communication.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#404040] p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#a0a0a0]"><span className="text-white font-medium">Collaboration:</span> We work closely with our clients, treating their challenges as our own.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#404040] p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#a0a0a0]"><span className="text-white font-medium">Integrity:</span> We believe in transparency, honesty, and doing what's right for our clients.</span>
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
            <div className="relative h-[500px] rounded-xl overflow-hidden border border-[#333]">
              <Image
                src="/images/about/office.jpg"
                alt="Kodastra Office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl font-semibold text-white mb-2">Our Headquarters</h4>
                <p className="text-[#c0c0c0]">Located in the heart of Tech City, our modern office is designed to foster creativity and collaboration.</p>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#404040] rounded-full flex items-center justify-center z-10 border-4 border-black">
              <div className="text-center">
                <span className="block text-3xl font-bold text-white">5+</span>
                <span className="text-sm text-[#c0c0c0]">Years of Excellence</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-10 rounded-xl border border-[#333]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-center"
                >
                  <span 
                    ref={(el) => setStatRef(el, index)}
                    data-value={stat.value}
                    className="block text-5xl font-bold text-gradient mb-2"
                  >
                    0
                  </span>
                  <span className="text-[#a0a0a0]">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-semibold mb-10 text-white text-center">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-xl overflow-hidden border border-[#333] group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-1">{member.name}</h4>
                  <p className="text-[#c0c0c0] text-sm mb-4">{member.role}</p>
                  <p className="text-[#a0a0a0] text-sm">{member.bio}</p>
                  
                  <div className="mt-6 flex space-x-3">
                    <a href="#" className="text-[#c0c0c0] hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-[#c0c0c0] hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-[#c0c0c0] hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
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