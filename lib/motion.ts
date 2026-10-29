import type { Transition, Variants } from "framer-motion";

export const easeCustom = [0.22, 1, 0.36, 1] as const;

export const transitionFast: Transition = {
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1],
};

export const transitionMedium: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

export const transitionSlow: Transition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitionMedium,
  },
};

export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionMedium,
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const cardHoverVariants: Variants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.01,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};
