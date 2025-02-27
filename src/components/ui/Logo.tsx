"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link href="/">
      <motion.div 
        className={`flex items-center ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.div 
          className="relative w-10 h-10 mr-3 purple-glow rounded-full overflow-hidden"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image 
            src="/images/logo.png" 
            alt="Kodastra Logo" 
            width={40} 
            height={40} 
            className="object-contain mt-1"
          />
        </motion.div>
        <motion.span 
          className="text-2xl font-extrabold tracking-wider uppercase bg-gradient-to-r from-[#c0c0c0] via-white to-[#a0a0c0] bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          KODASTRA
        </motion.span>
      </motion.div>
    </Link>
  );
};

export default Logo; 