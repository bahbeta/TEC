import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Section = ({
  id,
  children,
  className = '',
  background = 'cloud-white',
  containerClassName = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform values for parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  const backgrounds = {
    'cloud-white': 'bg-cloud-white text-deep-calm',
    'warm-sand': 'bg-warm-sand text-deep-calm',
    'deep-calm': 'bg-deep-calm text-cloud-white',
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`section-spacing ${backgrounds[background]} ${className}`}
    >
      <motion.div
        style={{ y, opacity }}
        className={`max-w-7xl mx-auto px-6 md:px-12 ${containerClassName}`}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default Section;
