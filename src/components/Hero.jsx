import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.06, 0.12], [1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.12], [0, -100]);
  const contentScale = useTransform(scrollYProgress, [0, 0.12], [1, 0.85]);
  const contentRotateX = useTransform(scrollYProgress, [0, 0.12], [0, -15]);

  // About sections scroll transforms - smoother timing with 3D
  const aboutContainerOpacity = useTransform(scrollYProgress, [0.08, 0.12, 0.68, 0.72], [0, 1, 1, 0]);
  const aboutContainerScale = useTransform(scrollYProgress, [0.08, 0.16, 0.64, 0.72], [0.9, 1, 1, 0.9]);
  const aboutContainerRotateX = useTransform(scrollYProgress, [0.08, 0.16, 0.64, 0.72], [10, 0, 0, -10]);

  // Individual section transforms - extended fade ranges for smoother transitions
  const section1Opacity = useTransform(scrollYProgress, [0.08, 0.14, 0.20, 0.26], [0, 1, 1, 0]);
  const section1Scale = useTransform(scrollYProgress, [0.08, 0.14, 0.20, 0.26], [0.95, 1, 1, 0.95]);

  const section2Opacity = useTransform(scrollYProgress, [0.22, 0.28, 0.34, 0.40], [0, 1, 1, 0]);
  const section2Scale = useTransform(scrollYProgress, [0.22, 0.28, 0.34, 0.40], [0.95, 1, 1, 0.95]);

  const section3Opacity = useTransform(scrollYProgress, [0.36, 0.42, 0.48, 0.54], [0, 1, 1, 0]);
  const section3Scale = useTransform(scrollYProgress, [0.36, 0.42, 0.48, 0.54], [0.95, 1, 1, 0.95]);

  const section4Opacity = useTransform(scrollYProgress, [0.50, 0.56, 0.62, 0.68], [0, 1, 1, 0]);
  const section4Scale = useTransform(scrollYProgress, [0.50, 0.56, 0.62, 0.68], [0.95, 1, 1, 0.95]);

  const philosophyContainerOpacity = useTransform(scrollYProgress, [0.70, 0.76, 0.92, 0.98], [0, 1, 1, 0]);
  const philosophyContainerScale = useTransform(scrollYProgress, [0.70, 0.78, 0.88, 0.98], [0.9, 1, 1, 0.9]);
  const philosophyContainerRotateX = useTransform(scrollYProgress, [0.70, 0.78, 0.88, 0.98], [10, 0, 0, -10]);

  const pillars = [
    {
      title: "Balance & Movement",
      description: "Integrating purposeful physical training with mindful practices to build resilience and sustainable strength."
    },
    {
      title: "Connection & Growth",
      description: "Fostering authentic relationships with self and community while pursuing personal evolution."
    },
    {
      title: "Purpose & Reflection",
      description: "Creating space for intentional rest and deep reflection to clarify goals and renew energy."
    },
    {
      title: "Inclusivity & Healing",
      description: "Building welcoming environments that honor diverse identities and support holistic healing."
    }
  ];

  return (
    <section id="hero" ref={ref} className="relative h-[400vh] bg-white" style={{ perspective: '1200px' }}>
      {/* SVG Pattern Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <pattern id="hatchPatternHero" patternUnits="userSpaceOnUse" width="6" height="6">
            <path d="M 0 6 L 6 0" stroke="#1F2A3A" strokeWidth="0.2" strokeOpacity="0.15" />
          </pattern>
        </defs>
      </svg>

      {/* Hero Background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white" style={{ transformStyle: 'preserve-3d' }}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Luxury wellbeing retreat with infinity pool overlooking mountains and tropical landscape"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Subtle dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30"></div>

          {/* Hatch pattern overlay */}
          <div className="absolute inset-0 z-[100] pointer-events-none opacity-30">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="url(#hatchPatternHero)" />
            </svg>
          </div>
        </div>

        {/* Hero Content */}
        <motion.div
          style={{
            opacity: contentOpacity,
            y: contentY,
            scale: contentScale,
            rotateX: contentRotateX,
            transformPerspective: 1200
          }}
          className="relative z-40 max-w-5xl mx-auto px-6 md:px-12 text-center h-screen flex flex-col items-center justify-center"
        >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Main Headline - MNTN Style */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-medium text-white mb-6 leading-tight tracking-tight" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
            Step Into the Experience
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-body" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}>
            Your wellbeing journey begins here.
          </p>

          {/* CTA Button */}
          <motion.a
            href="#join"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-4 bg-terracotta text-cloud-white font-medium rounded-full hover:bg-terracotta/90 transition-all duration-400 ease-out uppercase tracking-wider text-sm apple-shadow-lg hover:apple-shadow-xl"
          >
            Get Started
          </motion.a>
        </motion.div>
      </motion.div>

        {/* About Sections - Scroll Reveal */}
        <motion.div
          style={{
            opacity: aboutContainerOpacity,
            scale: aboutContainerScale,
            rotateX: aboutContainerRotateX,
            transformPerspective: 1200
          }}
          className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
        >
          {/* Section 1 */}
          <motion.div
            style={{ opacity: section1Opacity, scale: section1Scale }}
            className="absolute inset-0 flex items-center justify-center px-6 md:px-12"
          >
            <div className="max-w-3xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <span className="text-[20rem] font-display font-bold leading-none" style={{ color: 'rgba(31, 42, 58, 0.1)' }}>01</span>
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-px bg-[#1F2A3A] shadow-lg"></div>
                  <span className="text-[#1F2A3A] text-xs tracking-[0.3em] uppercase font-body drop-shadow-lg">Pause. Breathe. Arrive.</span>
                  <div className="w-16 h-px bg-[#1F2A3A] shadow-lg"></div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-[#1F2A3A] mb-6 leading-tight drop-shadow-xl">
                  Reconnect with yourself - and with the world around you.
                </h2>
                <p className="text-base md:text-lg text-[#1F2A3A] leading-relaxed drop-shadow-lg">
                  At The Elevate Collective, we bring people together through movement, mindfulness, and shared culture. Every journey is unique, but every individual belongs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            style={{ opacity: section2Opacity, scale: section2Scale }}
            className="absolute inset-0 flex items-center justify-center px-6 md:px-12"
          >
            <div className="max-w-3xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <span className="text-[20rem] font-display font-bold leading-none" style={{ color: 'rgba(31, 42, 58, 0.1)' }}>02</span>
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-px bg-[#1F2A3A] shadow-lg"></div>
                  <span className="text-[#1F2A3A] text-xs tracking-[0.3em] uppercase font-body drop-shadow-lg">Set Your Intention</span>
                  <div className="w-16 h-px bg-[#1F2A3A] shadow-lg"></div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-[#1F2A3A] mb-6 leading-tight drop-shadow-xl">
                  Every journey starts with purpose.
                </h2>
                <p className="text-base md:text-lg text-[#1F2A3A] leading-relaxed drop-shadow-lg">
                  What does wellbeing mean to you - balance, clarity, strength, or renewal? We help you define what you need most right now. Inclusive wellbeing experiences designed to reflect who you are, where you've come from, and where you're ready to go next.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            style={{ opacity: section3Opacity, scale: section3Scale }}
            className="absolute inset-0 flex items-center justify-center px-6 md:px-12"
          >
            <div className="max-w-3xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <span className="text-[20rem] font-display font-bold leading-none" style={{ color: 'rgba(31, 42, 58, 0.1)' }}>03</span>
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-px bg-[#1F2A3A] shadow-lg"></div>
                  <span className="text-[#1F2A3A] text-xs tracking-[0.3em] uppercase font-body drop-shadow-lg">Discover Your Rhythm</span>
                  <div className="w-16 h-px bg-[#1F2A3A] shadow-lg"></div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-[#1F2A3A] mb-6 leading-tight drop-shadow-xl">
                  Wellbeing isn't one-size-fits-all.
                </h2>
                <p className="text-base md:text-lg text-[#1F2A3A] leading-relaxed drop-shadow-lg">
                  It's the rhythm between challenge and rest, discipline and flow. Our science-backed approach blends strength, mindset, and cultural practices from around the world. Each experience celebrates individuality - and the power of community.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 4 */}
          <motion.div
            style={{ opacity: section4Opacity, scale: section4Scale }}
            className="absolute inset-0 flex items-center justify-center px-6 md:px-12"
          >
            <div className="max-w-3xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <span className="text-[20rem] font-display font-bold leading-none" style={{ color: 'rgba(31, 42, 58, 0.1)' }}>04</span>
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-px bg-[#1F2A3A] shadow-lg"></div>
                  <span className="text-[#1F2A3A] text-xs tracking-[0.3em] uppercase font-body drop-shadow-lg">Evolve With Intention</span>
                  <div className="w-16 h-px bg-[#1F2A3A] shadow-lg"></div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-[#1F2A3A] mb-6 leading-tight drop-shadow-xl">
                  Wellbeing is not a destination.
                </h2>
                <p className="text-base md:text-lg text-[#1F2A3A] leading-relaxed drop-shadow-lg">
                  It's a rhythm you learn to live by. Through curated sessions and immersive retreats, we help you align mind, body, and connection. You leave grounded. Strong. Part of something bigger - The Elevate Collective.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Philosophy Section - Scroll Reveal */}
        <motion.div
          style={{
            opacity: philosophyContainerOpacity,
            scale: philosophyContainerScale,
            rotateX: philosophyContainerRotateX,
            transformPerspective: 1200
          }}
          className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
            {/* Mission Statement */}
            <div className="mb-16">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-px bg-[#1F2A3A] shadow-lg"></div>
                <span className="text-[#1F2A3A] text-xs tracking-[0.3em] uppercase font-body drop-shadow-lg">Our Mission</span>
                <div className="w-16 h-px bg-[#1F2A3A] shadow-lg"></div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[#1F2A3A] mb-6 leading-tight max-w-4xl mx-auto drop-shadow-xl">
                Empowering high-performing individuals through purposeful, inclusive wellbeing experiences.
              </h2>
              <p className="text-xl md:text-2xl text-[#1F2A3A] italic font-light drop-shadow-lg">
                Intention over urgency. Substance over trend. Depth over noise.
              </p>
            </div>

            {/* Philosophy Pillars */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="w-12 h-px bg-terracotta mb-6 group-hover:w-20 transition-all duration-300 shadow-lg"></div>
                  <h3 className="text-xl md:text-2xl font-display font-medium text-[#1F2A3A] mb-4 leading-tight drop-shadow-lg">
                    {pillar.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#1F2A3A] leading-relaxed drop-shadow-md">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16">
              <p className="text-2xl md:text-3xl font-display font-medium text-[#1F2A3A] italic drop-shadow-lg">
                Mind in Motion.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
