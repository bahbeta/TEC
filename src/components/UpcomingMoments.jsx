import Section from './Section';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const UpcomingMoments = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const experiences = [
    {
      title: 'Nia Morning',
      description: 'Mobility & body movement, strength & conditioning, networking with breakfast & coffee. You bring the energy, we bring the vibes!',
      image: '/images/nia-morning.jpg',
      dateRange: '29 Nov 2025',
      timing: '8.30am - 10.30am',
      location: 'Dubai, UAE',
      venue: 'Lana Functional Fitness',
      address: 'Warehouse 12, 4th St - Al Quoz Industrial Area 3',
      price: 'AED 375',
      href: 'https://luma.com/mcg54mle',
    },
    {
      title: 'The Elevate Vision Board with Malak',
      description: 'A serene, intimate experience designed to help you slow down before year-end and reconnect with what truly matters. Reflect, reset, and design a vision board with clarity and purpose.',
      image: '/images/malak-vision-board.jpg',
      dateRange: '14 Dec 2025',
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
                  minWidth: '280px',
                  scrollSnapAlign: 'start'
                }}
              >
                {/* Image */}
                <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={`${experience.title} - ${experience.description} wellbeing experience in ${experience.location}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
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

                  {/* Event Details Section */}
                  <div className="mb-6 space-y-4">
                    {/* Date & Time */}
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-deep-calm/50 mb-1 font-medium">
                        DATE & TIME
                      </p>
                      <p className="text-deep-calm font-medium">
                        {experience.dateRange}
                      </p>
                      {experience.timing && (
                        <p className="text-deep-calm/70 text-sm">
                          {experience.timing}
                        </p>
                      )}
                    </div>

                    {/* Location */}
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-deep-calm/50 mb-1 font-medium">
                        LOCATION
                      </p>
                      <p className="text-deep-calm font-medium">
                        {experience.venue}
                      </p>
                      <p className="text-deep-calm/70 text-sm">
                        {experience.address || experience.location}
                      </p>
                    </div>

                    {/* Price */}
                    {experience.price && (
                      <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-deep-calm/50 mb-1 font-medium">
                          PRICE
                        </p>
                        <p className="text-terracotta font-semibold">
                          {experience.price}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Register/View Details Link */}
                  <a
                    href={experience.href}
                    target={experience.href.startsWith('http') ? '_blank' : '_self'}
                    rel={experience.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-deep-calm text-sm tracking-[0.15em] uppercase font-medium group/link hover:text-terracotta transition-colors"
                  >
                    <span>{experience.href.startsWith('http') ? 'REGISTER NOW' : 'VIEW DETAILS'}</span>
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
