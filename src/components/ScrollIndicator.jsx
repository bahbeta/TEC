import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollIndicator = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Define all sections in order
  const sections = [
    { id: 'hero', element: null },
    { id: 'about', element: null },
    { id: 'values', element: null },
    { id: 'upcoming', element: null },
    { id: 'founders', element: null },
    { id: 'partners', element: null },
    { id: 'join', element: null },
    { id: 'contact', element: null }
  ];

  useEffect(() => {
    // Get all section elements
    sections.forEach((section) => {
      section.element = document.getElementById(section.id);
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Hide on last section (contact/footer)
      if (scrollPosition >= documentHeight - windowHeight - 100) {
        setIsVisible(false);
        return;
      } else {
        setIsVisible(true);
      }

      // Determine current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = sections[i].element;
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;

          if (scrollPosition >= elementTop) {
            setCurrentSection(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = (e) => {
    e.preventDefault();

    const nextIndex = currentSection + 1;
    if (nextIndex < sections.length) {
      const nextSection = sections[nextIndex];
      const element = document.getElementById(nextSection.id);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToPreviousSection = (e) => {
    e.preventDefault();

    const prevIndex = currentSection - 1;
    if (prevIndex >= 0) {
      const prevSection = sections[prevIndex];
      const element = document.getElementById(prevSection.id);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="hidden lg:flex fixed right-4 md:right-6 lg:right-8 top-[35%] -translate-y-1/2 z-50 flex-col items-center gap-4 md:gap-6"
        >
          {/* Upward Scroll Button */}
          {currentSection > 0 && (
            <motion.button
              onClick={scrollToPreviousSection}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 cursor-pointer group"
              aria-label="Scroll to previous section"
            >
              {/* Arrow Button - Upward */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </motion.div>

              {/* Vertical Line */}
              <div className="w-px h-8 md:h-12 bg-gradient-to-t from-white/30 to-transparent"></div>

              {/* Label */}
              <span className="text-white/70 text-[8px] md:text-[10px] font-body tracking-[0.25em] uppercase group-hover:text-white transition-colors duration-300">
                Up
              </span>
            </motion.button>
          )}

          {/* Downward Scroll Button */}
          <motion.button
            onClick={scrollToNextSection}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-2 cursor-pointer group"
            aria-label="Scroll to next section"
          >
            {/* Label */}
            <span className="text-white/70 text-[8px] md:text-[10px] font-body tracking-[0.25em] uppercase group-hover:text-white transition-colors duration-300">
              Down
            </span>

            {/* Vertical Line */}
            <div className="w-px h-8 md:h-12 bg-gradient-to-b from-white/30 to-transparent"></div>

            {/* Arrow Button - Downward */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollIndicator;
