import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Experiences = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const retreats = [
    {
      title: 'Journey-Style Retreat',
      theme: 'Morning Clarity Experience',
      duration: '3 hours',
      location: 'SEVA Experience, Jumeirah',
      focus: ['Movement', 'Breathwork', 'Reflection'],
      highlights: [
        'Guided breathwork session',
        'Mindful movement practice',
        'Group reflection circle',
        'Healthy breakfast & refreshments'
      ],
      price: 'AED 650',
      slots: '12 spots available',
      cta: 'Join the Next Reset',
      image: '/images/brand/yoga-meditation.jpg',
    },
    {
      title: 'Full-Day Event',
      theme: 'Strengthening Experience',
      duration: '6–8 hours',
      location: 'SIRO One Za\'abeel',
      focus: ['Conditioning', 'Recovery', 'Resilience'],
      highlights: [
        'Science-backed strength training',
        'Performance optimization workshop',
        'Recovery & mobility session',
        'Nutrition consultation',
        'Premium lunch & snacks'
      ],
      price: 'AED 1,400',
      slots: 'Limited to 16 participants',
      cta: 'Register Interest',
      image: '/images/brand/fitness-workout.jpg',
    },
    {
      title: 'UAE Overnight Retreat',
      theme: 'Desert Reset',
      duration: '1 night / 2 days',
      location: 'Luxury Desert Resort',
      focus: ['Training', 'Recovery', 'Connection'],
      highlights: [
        'Morning & evening training sessions',
        'Desert sunset meditation',
        'Community bonding activities',
        'Spa & recovery treatments',
        'Gourmet meals & accommodation'
      ],
      price: 'AED 2,800',
      slots: 'Only 10 spaces',
      cta: 'Reserve Your Space',
      image: '/images/brand/meditation-geometric.jpg',
    },
    {
      title: 'International Retreat',
      theme: 'Ultra Decompress',
      duration: '2–3 days',
      location: 'COMO Shambhala, Bali',
      focus: ['Transformation', 'Renewal', 'Deep Rest'],
      highlights: [
        'Daily training & yoga sessions',
        'Spa & holistic treatments',
        'Mindset coaching workshops',
        'Cultural immersion experiences',
        'Luxury accommodation & all meals',
        'Airport transfers included'
      ],
      price: 'AED 9,500',
      slots: 'Exclusive group of 8',
      cta: 'Apply to Join',
      image: '/images/brand/tropical-meditation.jpg',
    },
  ];

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return (prevIndex + 1) % retreats.length;
      } else {
        return (prevIndex - 1 + retreats.length) % retreats.length;
      }
    });
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <Section id="experiences" background="deep-calm">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="!mb-3 text-cloud-white !text-3xl md:!text-4xl lg:!text-5xl">Our Experiences</h2>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-cloud-white/70 max-w-2xl mx-auto leading-relaxed">
            Four signature journeys designed to balance strength, recovery, and authentic connection
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative min-h-[450px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="relative"
            >
              {(() => {
                const retreat = retreats[currentIndex];
                return (
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Image */}
                    <div className="relative lg:order-1">
                      <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden apple-shadow-xl">
                        <img
                          src={retreat.image}
                          alt={retreat.theme}
                          className="w-full h-full object-cover"
                        />
                        {/* Overlay with limited slots */}
                        <div className="absolute top-6 right-6">
                          <div className="bg-terracotta text-cloud-white px-4 py-2 rounded-full text-sm font-medium">
                            {retreat.slots}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:order-2">
                      {/* Duration Badge */}
                      <div className="inline-block mb-2">
                        <span className="text-xs font-medium text-terracotta bg-terracotta/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          {retreat.duration}
                        </span>
                      </div>

                      {/* Title & Theme */}
                      <h3 className="text-terracotta !text-2xl lg:!text-3xl !mb-2">
                        {retreat.title}
                      </h3>
                      <p className="text-xl lg:text-2xl font-display font-medium text-cloud-white mb-3 leading-tight">
                        {retreat.theme}
                      </p>

                      {/* Location */}
                      <p className="text-base text-cloud-white/70 mb-4">
                        {retreat.location}
                      </p>

                      {/* Focus Areas */}
                      <div className="mb-4">
                        <p className="text-xs font-medium text-cloud-white/60 uppercase tracking-wide mb-2">
                          Focus Areas
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {retreat.focus.map((item, idx) => (
                            <span
                              key={idx}
                              className="text-xs text-deep-calm bg-warm-sand px-2.5 py-1 rounded-full"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-5">
                        <p className="text-xs font-medium text-cloud-white/60 uppercase tracking-wide mb-2">
                          What's Included
                        </p>
                        <ul className="space-y-1.5">
                          {retreat.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-cloud-white/80">
                              <span className="text-terracotta mt-0.5">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Pricing & CTA */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <div>
                          <p className="text-xs text-cloud-white/60 mb-0.5">Starting from</p>
                          <p className="text-2xl font-display font-semibold text-cloud-white">
                            {retreat.price}
                          </p>
                        </div>
                        <motion.a
                          href="#join"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-6 py-2 bg-terracotta text-cloud-white text-sm font-medium rounded-full apple-shadow-lg hover:apple-shadow-xl transition-all duration-300"
                        >
                          {retreat.cta}
                        </motion.a>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </AnimatePresence>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2.5 mt-6">
            {retreats.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-terracotta w-7'
                    : 'bg-cloud-white/30 hover:bg-cloud-white/50'
                }`}
                aria-label={`Go to experience ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm md:text-base text-cloud-white/70 italic max-w-2xl mx-auto leading-relaxed">
            Each retreat combines science-backed training, mindset coaching, and intentional rest—designed for high performers who pause to grow.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default Experiences;
