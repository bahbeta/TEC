import Section from './Section';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Press = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      title: 'The Retreat Redefining Balance in the Middle East',
      source: 'GQ Middle East',
      quote: 'The Elevate Collective brings a fresh perspective to wellbeing travel in the UAE.',
    },
    {
      title: 'From Strength to Stillness: The Evolution of Wellbeing Travel',
      source: 'Sandy Times',
      quote: 'A transformative experience that challenges both body and mind.',
    },
    {
      title: 'The New Cure for Burnout: Train, Breathe, Reset',
      source: 'Dubai Pike',
      quote: 'Premium wellbeing experiences designed for high-achieving professionals.',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <Section id="press" background="deep-calm">
      <div className="text-center mb-12">
        <h2 className="mb-8">Press & Stories</h2>
        <div className="flex justify-center gap-8 mb-12 flex-wrap">
          {['GQ Middle East', 'Sandy Times', 'Dubai Pike'].map((logo, index) => (
            <span key={index} className="text-muted-gold font-accent text-sm uppercase tracking-wider">
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <div className="text-6xl text-muted-gold mb-6">"</div>
            <p className="text-xl md:text-2xl text-soft-white mb-6 leading-relaxed">
              {stories[currentIndex].quote}
            </p>
            <h3 className="text-lg font-semibold text-soft-white mb-2">
              {stories[currentIndex].title}
            </h3>
            <p className="text-muted-gold font-accent text-sm uppercase tracking-wider">
              {stories[currentIndex].source}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="p-3 border border-soft-white hover:bg-soft-white hover:text-charcoal-black transition-all duration-300 rounded-full"
            aria-label="Previous story"
          >
            <FiChevronLeft className="text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 border border-soft-white hover:bg-soft-white hover:text-charcoal-black transition-all duration-300 rounded-full"
            aria-label="Next story"
          >
            <FiChevronRight className="text-xl" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-muted-gold w-8' : 'bg-soft-white/30'
              }`}
              aria-label={`Go to story ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Press;
