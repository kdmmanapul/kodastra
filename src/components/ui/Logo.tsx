"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
      >
        <div className="relative w-10 h-10 mr-2">
          <motion.div 
            className="absolute inset-0 rounded-full border-2 border-[#c0c0c0]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.div 
            className="absolute inset-0 flex items-center justify-center text-[#c0c0c0] font-bold text-2xl"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            K
          </motion.div>
        </div>
        <motion.span 
          className="text-xl font-bold text-gradient"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          KODASTRA
        </motion.span>
      </motion.div>
    </Link>
  );
};

export default Logo; 