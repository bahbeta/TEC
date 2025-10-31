import { motion } from 'framer-motion';
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
      <div className={`max-w-7xl mx-auto px-6 md:px-12 ${containerClassName}`}>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
