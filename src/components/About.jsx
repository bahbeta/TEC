import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 3D scroll effects - scale and depth
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.8, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.3, 1], [100, 0, -50]);
  const rotateX = useTransform(scrollYProgress, [0, 0.3], [15, 0]);

  const sections = [
    {
      number: "01",
      category: "Get Started",
      title: "What level of wellbeing are you seeking?",
      description: "Determining your wellbeing goals can be an important tool when planning your journey. The Elevate Collective helps you plan experiences according to your current state and desired outcomes. What type of experience are you seeking – mindful movement, strength training, recovery, or complete transformation?",
      image: "/src/assets/images/img-057.jpg",
      imagePosition: "right"
    },
    {
      number: "02",
      category: "Wellbeing Essentials",
      title: "Picking the right approach for you!",
      description: "The nice thing about beginning your wellbeing journey is finding what resonates with you. At TEC, we blend science-backed training with mindset coaching and restorative practices. Our approach combines purposeful challenge with intentional rest, helping you sustain your drive without compromising your wellbeing.",
      image: "/src/assets/images/img-058.jpg",
      imagePosition: "left"
    },
    {
      number: "03",
      category: "Where You Go Is The Key",
      title: "Understand your journey & timing",
      description: "To start, we'll assess your current state and goals. Through our curated experiences, you'll discover the right balance of movement, mindset, and connection. We'll guide you through each step, whether it's a morning clarity session, full-day intensive, or multi-day retreat designed for sustainable transformation.",
      image: "/src/assets/images/img-059.jpg",
      imagePosition: "right"
    }
  ];

  return (
    <motion.section
      ref={containerRef}
      id="about"
      className="relative bg-deep-calm py-24 md:py-32 overflow-hidden"
      style={{
        scale,
        opacity,
        y,
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12"
        style={{
          rotateX,
          transformStyle: "preserve-3d"
        }}
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative mb-32 md:mb-48 last:mb-0"
          >
            {/* Large Background Number */}
            <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none">
              <span className="section-number font-display text-cloud-white/5">
                {section.number}
              </span>
            </div>

            {/* Content Grid */}
            <div className={`relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              section.imagePosition === 'left' ? 'lg:grid-flow-dense' : ''
            }`}>
              {/* Text Content */}
              <div className={section.imagePosition === 'left' ? 'lg:col-start-2' : ''}>
                {/* Category Label */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-px bg-terracotta"></div>
                  <span className="text-terracotta text-xs tracking-[0.3em] uppercase font-body">
                    {section.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-cloud-white mb-6 leading-tight">
                  {section.title}
                </h2>

                {/* Description */}
                <p className="text-base md:text-lg text-cloud-white/70 leading-relaxed mb-8">
                  {section.description}
                </p>

                {/* Read More Link */}
                <motion.a
                  href="#experiences"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-terracotta font-medium text-sm tracking-wide uppercase group"
                >
                  read more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>

              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className={`relative h-[400px] md:h-[500px] lg:h-[600px] rounded-sm overflow-hidden ${
                  section.imagePosition === 'left' ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover opacity-60"
                  style={{
                    filter: 'sepia(0.6) saturate(0.4) hue-rotate(190deg) brightness(0.8) contrast(1.1)',
                    mixBlendMode: 'normal'
                  }}
                />
                <div className="absolute inset-0 bg-[#1F2A3A]/60"></div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default About;
