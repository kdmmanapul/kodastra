import { Variants } from 'framer-motion';

/**
 * Fade in animation variants
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

/**
 * Fade in up animation variants
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

/**
 * Fade in down animation variants
 */
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

/**
 * Fade in left animation variants
 */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

/**
 * Fade in right animation variants
 */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

/**
 * Zoom in animation variants
 */
export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

/**
 * Stagger children animation variants
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

/**
 * Stagger item animation variants
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

/**
 * Bounce animation variants
 */
export const bounce: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: { 
    opacity: 1,
    y: [0, -10, 0],
    transition: { 
      duration: 1,
      repeat: Infinity,
      repeatType: 'loop',
      times: [0, 0.5, 1]
    }
  }
};

/**
 * Pulse animation variants
 */
export const pulse: Variants = {
  hidden: { opacity: 0, scale: 1 },
  visible: { 
    opacity: 1,
    scale: [1, 1.05, 1],
    transition: { 
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'loop',
      times: [0, 0.5, 1]
    }
  }
};

/**
 * Rotate animation variants
 */
export const rotate: Variants = {
  hidden: { opacity: 0, rotate: 0 },
  visible: { 
    opacity: 1,
    rotate: 360,
    transition: { 
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'linear'
    }
  }
};

/**
 * Path drawing animation variants
 */
export const drawPath: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { 
      pathLength: { duration: 1.5, ease: 'easeInOut' },
      opacity: { duration: 0.3 }
    }
  }
};

/**
 * Button hover animation variants
 */
export const buttonHover: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

/**
 * Card hover animation variants
 */
export const cardHover: Variants = {
  initial: { y: 0, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' },
  hover: { 
    y: -10, 
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.3 }
  }
}; 