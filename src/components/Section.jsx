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

  const backgroundClasses = {
    'cloud-white': 'text-deep-calm',
    'warm-sand': 'text-deep-calm',
    'deep-calm': 'text-cloud-white',
  };

  const backgroundStyles = {
    'cloud-white': {
      background: '#FAF9F6'
    },
    'warm-sand': {
      background: '#E7D9C4'
    },
    'deep-calm': {
      background: '#1E2A3A'
    },
  };

  // Determine which hatch pattern to use based on background
  const hatchPatternId = background === 'deep-calm' ? 'hatchPatternDark' : 'hatchPatternLight';

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      style={backgroundStyles[background]}
      className={`section-spacing ${backgroundClasses[background]} ${className} relative`}
    >
      {/* SVG Pattern Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <pattern id="jigsawPatternDark" patternUnits="userSpaceOnUse" width="60" height="60">
            <path d="M 0 20 Q 5 15, 10 20 T 20 20 L 20 0 L 40 0 L 40 20 Q 45 15, 50 20 T 60 20 L 60 40 L 40 40 L 40 50 Q 35 45, 30 50 T 30 60 L 20 60 L 20 50 Q 15 45, 10 50 T 10 60 L 0 60 L 0 40 L 0 20 Z"
                  fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.5" />
            <path d="M 25 0 Q 25 -5, 30 -5 Q 35 -5, 35 0" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.5" />
            <path d="M 60 25 Q 65 25, 65 30 Q 65 35, 60 35" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.5" />
            <path d="M 25 60 Q 25 55, 30 55 Q 35 55, 35 60" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.5" />
            <path d="M 0 25 Q -5 25, -5 30 Q -5 35, 0 35" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.5" />
          </pattern>
          <pattern id="jigsawPatternLight" patternUnits="userSpaceOnUse" width="60" height="60">
            <path d="M 0 20 Q 5 15, 10 20 T 20 20 L 20 0 L 40 0 L 40 20 Q 45 15, 50 20 T 60 20 L 60 40 L 40 40 L 40 50 Q 35 45, 30 50 T 30 60 L 20 60 L 20 50 Q 15 45, 10 50 T 10 60 L 0 60 L 0 40 L 0 20 Z"
                  fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 25 0 Q 25 -5, 30 -5 Q 35 -5, 35 0" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 60 25 Q 65 25, 65 30 Q 65 35, 60 35" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 25 60 Q 25 55, 30 55 Q 35 55, 35 60" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 0 25 Q -5 25, -5 30 Q -5 35, 0 35" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
          </pattern>
        </defs>
      </svg>

      {/* Jigsaw pattern overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill={`url(#${hatchPatternId.replace('hatch', 'jigsaw')})`} />
        </svg>
      </div>

      <motion.div
        style={{ y, opacity }}
        className={`max-w-7xl mx-auto px-6 md:px-12 ${containerClassName} relative z-10`}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default Section;
