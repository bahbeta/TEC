import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ExperiencesHorizontal = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-75%"]);

  const experiences = [
    {
      title: 'Morning Clarity',
      subtitle: 'Journey-Style Retreat',
      duration: '3 hours',
      location: 'SEVA Experience, Jumeirah',
      price: 'AED 650',
      image: '/images/brand/yoga-meditation.jpg',
      gradient: 'from-terracotta/20 to-sage-green/20'
    },
    {
      title: 'Strengthening',
      subtitle: 'Full-Day Event',
      duration: '6–8 hours',
      location: 'SIRO One Za\'abeel',
      price: 'AED 1,400',
      image: '/images/brand/fitness-workout.jpg',
      gradient: 'from-deep-calm/20 to-terracotta/20'
    },
    {
      title: 'Desert Reset',
      subtitle: 'UAE Overnight Retreat',
      duration: '1 night / 2 days',
      location: 'Luxury Desert Resort',
      price: 'AED 2,800',
      image: '/images/brand/meditation-geometric.jpg',
      gradient: 'from-sage-green/20 to-warm-sand/20'
    },
    {
      title: 'Ultra Decompress',
      subtitle: 'International Retreat',
      duration: '2–3 days',
      location: 'COMO Shambhala, Bali',
      price: 'AED 9,500',
      image: '/images/brand/tropical-meditation.jpg',
      gradient: 'from-warm-sand/20 to-deep-calm/20'
    },
  ];

  return (
    <section id="experiences" className="relative bg-deep-calm py-32 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-semibold text-cloud-white mb-6 tracking-tight leading-[0.9]">
            Our Experiences
          </h2>
          <p className="text-xl text-cloud-white/60 max-w-2xl mx-auto">
            Four signature journeys designed to balance strength, recovery, and authentic connection
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div ref={containerRef} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-8 px-6 md:px-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[50vw] h-[70vh] rounded-3xl overflow-hidden cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} mix-blend-overlay`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-calm via-deep-calm/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
                  {/* Badge */}
                  <motion.div
                    className="mb-auto"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-cloud-white text-sm font-medium border border-white/20">
                      {exp.duration}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <div className="space-y-2 mb-6">
                    <h3 className="text-5xl md:text-6xl font-display font-bold text-cloud-white tracking-tight leading-none">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-cloud-white/80 font-light">
                      {exp.subtitle}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-cloud-white/60 text-sm mb-1">{exp.location}</p>
                      <p className="text-3xl font-display font-semibold text-cloud-white">
                        {exp.price}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-cloud-white hover:bg-white/20 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 text-cloud-white/40 text-sm">
        <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default ExperiencesHorizontal;
