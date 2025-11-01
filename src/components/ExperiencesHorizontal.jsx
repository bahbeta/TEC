import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ExperiencesHorizontal = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 40,
    restDelta: 0.001
  });

  const x = useTransform(smoothProgress, [0, 1], ["5%", "-75%"]);

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
    <section id="experiences" className="relative bg-deep-calm overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-cloud-white mb-6 tracking-tight leading-tight">
            Our Experiences
          </h2>
          <p className="text-lg md:text-xl text-cloud-white/70 max-w-2xl mx-auto leading-relaxed">
            Four signature journeys designed to balance strength, recovery, and authentic connection
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div ref={containerRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden py-20">
          <motion.div
            style={{ x }}
            className="flex gap-6 md:gap-8 px-6 md:px-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group relative flex-shrink-0 w-[90vw] md:w-[65vw] lg:w-[45vw] h-[65vh] rounded-3xl overflow-hidden apple-hover-lift cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-calm/95 via-deep-calm/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
                  {/* Badge */}
                  <div className="flex justify-between items-start">
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <span className="inline-block px-4 py-2 glass rounded-full text-cloud-white text-sm font-medium">
                        {exp.duration}
                      </span>
                    </motion.div>
                  </div>

                  {/* Bottom Content */}
                  <div className="space-y-6">
                    {/* Title */}
                    <div>
                      <h3 className="text-4xl md:text-5xl font-display font-bold text-cloud-white tracking-tight leading-tight mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-lg md:text-xl text-cloud-white/80">
                        {exp.subtitle}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-cloud-white/60 text-sm mb-2">{exp.location}</p>
                        <p className="text-3xl md:text-4xl font-display font-semibold text-cloud-white">
                          {exp.price}
                        </p>
                      </div>
                      <motion.a
                        href="#join"
                        whileHover={{ scale: 1.1, x: 3 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full glass flex items-center justify-center text-cloud-white hover:bg-white/20 transition-all duration-300"
                      >
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 text-cloud-white/50 text-sm animate-bounce">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        <span className="font-medium">Scroll to explore</span>
      </div>
    </section>
  );
};

export default ExperiencesHorizontal;
