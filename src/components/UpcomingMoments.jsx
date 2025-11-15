import Section from './Section';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const UpcomingMoments = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const experiences = [
    {
      title: 'The Elevate Retreat - Mykonos',
      description: 'Join us for our signature multi-day experience designed to reset your body, mind, and focus.',
      image: '/images/brand/luxury-pool.jpg',
      dateRange: 'Summer 2026',
      location: 'Mykonos, Greece',
      venue: 'Luxury Wellbeing Resort',
      href: '#join',
    },
    {
      title: 'Nia Morning - Dubai',
      description: 'One-day wellbeing immersion open to all members of The Elevate Collective.',
      image: '/images/brand/yoga-meditation.jpg',
      dateRange: 'Nov 29, 2024',
      location: 'Dubai, UAE',
      venue: 'Wellbeing Studio',
      href: '#join',
    },
    {
      title: 'Corporate Wellbeing Activation',
      description: 'Bring wellbeing to your workplace with on-site or virtual sessions tailored to your team.',
      image: '/images/brand/fitness-workout.jpg',
      dateRange: 'Year Round',
      location: 'Your Location',
      venue: 'On-site or Virtual',
      href: '#partners',
    },
    {
      title: 'Digital Wellbeing Programs',
      description: 'Access curated wellbeing content, guided sessions, and exclusive training programs.',
      image: '/images/brand/fitness-workout.jpg',
      dateRange: 'Ongoing',
      location: 'Online',
      venue: 'Digital Platform',
      href: '#join',
    },
  ];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left'
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Section id="upcoming" background="deep-calm" spacing="reduced">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="!mb-4 text-cloud-white !text-3xl md:!text-4xl lg:!text-5xl">Upcoming Experiences</h2>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-cloud-white/80 leading-relaxed max-w-3xl mx-auto">
            From corporate wellbeing activations to multi-day international retreats — our experiences are designed to challenge, restore, and inspire.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
              style={{ marginLeft: '-20px' }}
            >
              <svg
                className="w-6 h-6 text-deep-calm"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
              style={{ marginRight: '-20px' }}
            >
              <svg
                className="w-6 h-6 text-deep-calm"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Experience Cards Carousel */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-8 overflow-x-auto scroll-smooth pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory'
            }}
          >
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-2xl flex-shrink-0 overflow-hidden group apple-shadow-lg hover:apple-shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2"
                style={{
                  width: 'calc(33.333% - 22px)',
                  minWidth: '320px',
                  scrollSnapAlign: 'start'
                }}
              >
                {/* Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={`${experience.title} - ${experience.description} wellbeing experience in ${experience.location}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Title */}
                  <h3 className="font-cormorant text-2xl lg:text-3xl text-deep-calm mb-4 leading-tight">
                    {experience.title}
                  </h3>

                  {/* Description */}
                  <p className="text-deep-calm/70 leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-deep-calm/10 mb-6"></div>

                  {/* Time Section */}
                  <div className="mb-6">
                    <p className="text-xs tracking-[0.2em] uppercase text-deep-calm/50 mb-2 font-medium">
                      TIME
                    </p>
                    <p className="text-deep-calm font-medium mb-3">
                      {experience.dateRange}
                    </p>
                    <p className="text-deep-calm/70 text-sm">
                      {experience.venue}
                    </p>
                    <p className="text-deep-calm/70 text-sm">
                      {experience.location}
                    </p>
                  </div>

                  {/* View Location Link */}
                  <a
                    href={experience.href}
                    className="inline-flex items-center gap-2 text-deep-calm text-sm tracking-[0.15em] uppercase font-medium group/link hover:text-terracotta transition-colors"
                  >
                    <span>VIEW DETAILS</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default UpcomingMoments;
