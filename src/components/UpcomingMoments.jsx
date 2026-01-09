import Section from './Section';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const UpcomingMoments = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const experiences = [
    {
      title: 'The Elevate Vision Board with Malak',
      description: 'A serene, intimate experience designed to help you slow down and reconnect with what truly matters. Guided by Malak\'s mindful practices, reflect, reset, and design a vision board with clarity and purpose.',
      image: '/images/malak-vision-board.jpg',
      dateRange: '11 Jan 2026',
      timing: '4pm - 6pm',
      location: 'Dubai, UAE',
      venue: 'TBC',
      address: 'To be confirmed',
      price: 'AED 210',
      href: 'https://luma.com/gqsm1hcd',
    },
    {
      title: 'TEC Mykonos Retreat',
      description: '3 nights, 4 days of strength, stillness & connection. A powerful escape designed for the high achiever who\'s ready to reset with intention.',
      image: '/images/mykonos-retreat.jpg',
      dateRange: '11-14 June 2026',
      timing: '3 Nights / 4 Days',
      location: 'Mykonos, Greece',
      venue: 'Charisma Wellness Suites',
      address: 'Mykonos',
      price: 'Price on Enquiry',
      href: 'https://luma.com/t6134m7k',
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
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 md:-ml-5"
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
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 md:-mr-5"
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
            className="flex justify-center gap-5 md:gap-6 overflow-x-auto scroll-smooth pb-4"
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
                className="bg-white rounded-xl flex-shrink-0 overflow-hidden group apple-shadow-lg hover:apple-shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2"
                style={{
                  width: 'calc(33.333% - 16px)',
                  minWidth: '300px',
                  scrollSnapAlign: 'start'
                }}
              >
                {/* Image */}
                <div className="relative w-full h-44 md:h-48 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={`${experience.title} - ${experience.description} wellbeing experience in ${experience.location}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  {/* Title */}
                  <h3 className="font-cormorant text-xl md:text-2xl text-deep-calm mb-2 leading-tight">
                    {experience.title}
                  </h3>

                  {/* Description */}
                  <p className="text-deep-calm/70 text-sm leading-relaxed mb-4">
                    {experience.description}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-deep-calm/10 mb-4"></div>

                  {/* Event Details Grid */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-4">
                    {/* Date & Time */}
                    <div>
                      <p className="text-[10px] tracking-[0.15em] uppercase text-deep-calm/50 mb-0.5 font-medium">
                        DATE
                      </p>
                      <p className="text-deep-calm text-sm font-medium">
                        {experience.dateRange}
                      </p>
                      {experience.timing && (
                        <p className="text-deep-calm/60 text-xs">
                          {experience.timing}
                        </p>
                      )}
                    </div>

                    {/* Price */}
                    {experience.price && (
                      <div>
                        <p className="text-[10px] tracking-[0.15em] uppercase text-deep-calm/50 mb-0.5 font-medium">
                          PRICE
                        </p>
                        <p className="text-terracotta text-sm font-semibold">
                          {experience.price}
                        </p>
                      </div>
                    )}

                    {/* Location - Full Width */}
                    <div className="col-span-2">
                      <p className="text-[10px] tracking-[0.15em] uppercase text-deep-calm/50 mb-0.5 font-medium">
                        LOCATION
                      </p>
                      <p className="text-deep-calm text-sm font-medium">
                        {experience.venue}
                      </p>
                      <p className="text-deep-calm/60 text-xs">
                        {experience.address || experience.location}
                      </p>
                    </div>
                  </div>

                  {/* Register/View Details Link */}
                  <a
                    href={experience.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-deep-calm text-xs tracking-[0.12em] uppercase font-medium group/link hover:text-terracotta transition-colors"
                  >
                    <span>REGISTER NOW</span>
                    <svg
                      className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1"
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
