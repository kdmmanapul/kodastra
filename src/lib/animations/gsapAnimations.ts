import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

/**
 * Initialize parallax effect on an element
 */
export const initParallax = (element: HTMLElement | null, speed: number = 0.5) => {
  if (!element) return;

  gsap.to(element, {
    yPercent: speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

/**
 * Text reveal animation
 */
export const textReveal = (element: HTMLElement | null, delay: number = 0) => {
  if (!element) return;

  return gsap.fromTo(
    element,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay,
      scrollTrigger: {
        trigger: element,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

/**
 * Staggered fade-in animation for multiple elements
 */
export const staggerFadeIn = (elements: NodeListOf<Element> | HTMLElement[] | null, staggerAmount: number = 0.1) => {
  if (!elements || elements.length === 0) return;

  return gsap.fromTo(
    elements,
    { y: 20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: staggerAmount,
      scrollTrigger: {
        trigger: elements[0],
        start: 'top bottom-=50',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

/**
 * Count up animation for statistics
 */
export const countUp = (element: HTMLElement | null, endValue: number, duration: number = 2) => {
  if (!element) return;

  return gsap.fromTo(
    element,
    { textContent: '0' },
    {
      textContent: endValue,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom-=100',
        toggleActions: 'play none none none',
      },
      onUpdate: function() {
        element.textContent = Math.ceil(parseFloat(this.targets()[0].textContent)).toString();
      },
    }
  );
};

/**
 * Smooth scroll to a section
 */
export const smoothScrollTo = (target: string, duration: number = 1) => {
  gsap.to(window, {
    duration,
    scrollTo: {
      y: target,
      offsetY: 80, // Offset for fixed header
    },
    ease: 'power3.inOut',
  });
};

/**
 * Create a timeline for sequenced animations
 */
export const createAnimationSequence = () => {
  return gsap.timeline({ defaults: { ease: 'power3.out' } });
};

/**
 * Animate elements on scroll
 */
export const animateOnScroll = (elements: NodeListOf<Element> | HTMLElement[] | null, animation: object) => {
  if (!elements || elements.length === 0) return;

  elements.forEach((element) => {
    ScrollTrigger.create({
      trigger: element,
      start: 'top bottom-=100',
      onEnter: () => gsap.to(element, { ...animation, duration: 0.5 }),
      onLeave: () => gsap.to(element, { opacity: 0, duration: 0.5 }),
      onEnterBack: () => gsap.to(element, { ...animation, duration: 0.5 }),
      onLeaveBack: () => gsap.to(element, { opacity: 0, duration: 0.5 }),
    });
  });
}; 