export const textReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.015,
    },
  },
};

export const letterVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const paragraphVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.3,
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};
