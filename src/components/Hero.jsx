import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0.4]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.06, 0.12], [1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.12], [0, -100]);
  const contentScale = useTransform(scrollYProgress, [0, 0.12], [1, 0.85]);
  const contentRotateX = useTransform(scrollYProgress, [0, 0.12], [0, -15]);

  // 8-layer parallax system - progressive depth
  const layer1Y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const layer1Scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const layer2Y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const layer2Scale = useTransform(scrollYProgress, [0, 1], [1, 1.10]);

  const layer3Y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const layer3Scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const layer4Y = useTransform(scrollYProgress, [0, 1], [0, 280]);
  const layer4Scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const layer5Y = useTransform(scrollYProgress, [0, 1], [0, 350]);
  const layer5Scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

  const layer6Y = useTransform(scrollYProgress, [0, 1], [0, 450]);
  const layer6Scale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);

  const layer7Y = useTransform(scrollYProgress, [0, 1], [65, 615]); // Offset by 65px down
  const layer7Scale = useTransform(scrollYProgress, [0, 1], [1.03, 1.28]); // Slight scale increase for alignment

  const layer8Y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const layer8Scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  // About sections scroll transforms - smoother timing with 3D
  const aboutContainerOpacity = useTransform(scrollYProgress, [0.08, 0.12, 0.58, 0.62], [0, 1, 1, 0]);
  const aboutContainerScale = useTransform(scrollYProgress, [0.08, 0.16, 0.54, 0.62], [0.9, 1, 1, 0.9]);
  const aboutContainerRotateX = useTransform(scrollYProgress, [0.08, 0.16, 0.54, 0.62], [10, 0, 0, -10]);

  // Individual section transforms - extended fade ranges for smoother transitions
  const section1Opacity = useTransform(scrollYProgress, [0.08, 0.14, 0.24, 0.30], [0, 1, 1, 0]);
  const section1Scale = useTransform(scrollYProgress, [0.08, 0.14, 0.24, 0.30], [0.95, 1, 1, 0.95]);

  const section2Opacity = useTransform(scrollYProgress, [0.26, 0.32, 0.42, 0.48], [0, 1, 1, 0]);
  const section2Scale = useTransform(scrollYProgress, [0.26, 0.32, 0.42, 0.48], [0.95, 1, 1, 0.95]);

  const section3Opacity = useTransform(scrollYProgress, [0.44, 0.50, 0.58, 0.64], [0, 1, 1, 0]);
  const section3Scale = useTransform(scrollYProgress, [0.44, 0.50, 0.58, 0.64], [0.95, 1, 1, 0.95]);

  const philosophyContainerOpacity = useTransform(scrollYProgress, [0.60, 0.66, 0.92, 0.98], [0, 1, 1, 0]);
  const philosophyContainerScale = useTransform(scrollYProgress, [0.60, 0.68, 0.88, 0.98], [0.9, 1, 1, 0.9]);
  const philosophyContainerRotateX = useTransform(scrollYProgress, [0.60, 0.68, 0.88, 0.98], [10, 0, 0, -10]);

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
    <section ref={ref} className="relative h-[400vh] bg-white" style={{ perspective: '1200px' }}>
      {/* 8-Layer Parallax Background - Immersive Mountain Landscape */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white" style={{ transformStyle: 'preserve-3d' }}>
        <div className="absolute inset-0 z-0 bg-white">
        {/* Layer 1 - Sky & Sunlight (Furthest back) */}
        <motion.div
          style={{
            y: layer1Y,
            scale: layer1Scale,
            opacity
          }}
          className="absolute inset-0 z-[1]"
        >
          <img
            src="/src/assets/images/hero-layer-1.png"
            alt="Sky and Sunlight"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'saturate(0.7) contrast(1.1) brightness(1.02)' }}
          />
        </motion.div>

        {/* Layer 2 - Distant Mountain Peaks */}
        <motion.div
          style={{
            y: layer2Y,
            scale: layer2Scale,
            opacity
          }}
          className="absolute inset-0 z-[2]"
        >
          <img
            src="/src/assets/images/hero-layer-2.png"
            alt="Distant Mountain Peaks"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'saturate(0.65) contrast(1.05) brightness(1.08)' }}
          />
          {/* Atmospheric haze overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-transparent pointer-events-none"></div>
        </motion.div>

        {/* Layer 3 - Mid Hills */}
        <motion.div
          style={{
            y: layer3Y,
            scale: layer3Scale,
            opacity
          }}
          className="absolute inset-0 z-[3]"
        >
          <img
            src="/src/assets/images/hero-layer-3.png"
            alt="Mid Hills"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'saturate(0.68) contrast(1.08) brightness(1.04)' }}
          />
          {/* Atmospheric haze overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/12 to-transparent pointer-events-none"></div>
        </motion.div>

        {/* Layer 4 - Forested Ridges */}
        <motion.div
          style={{
            y: layer4Y,
            scale: layer4Scale,
            opacity
          }}
          className="absolute inset-0 z-[4]"
        >
          <img
            src="/src/assets/images/hero-layer-4.png"
            alt="Forested Ridges"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'saturate(0.7) contrast(1.1) brightness(1.0)' }}
          />
          {/* Atmospheric haze overlay - lighter than layer 3 */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-white/7 to-transparent pointer-events-none"></div>
        </motion.div>

        {/* Layer 5 - River Source */}
        <motion.div
          style={{
            y: layer5Y,
            scale: layer5Scale,
            opacity
          }}
          className="absolute inset-0 z-[5]"
        >
          <img
            src="/src/assets/images/hero-layer-5.png"
            alt="River Source"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'saturate(0.72) contrast(1.12) brightness(0.98)' }}
          />
        </motion.div>

        {/* Layer 8 - Mist & Light Rays Overlay (Mid-depth) */}
        <motion.div
          style={{
            y: layer8Y,
            scale: layer8Scale,
            opacity
          }}
          className="absolute inset-0 z-[5.5] opacity-40"
        >
          <img
            src="/src/assets/images/hero-layer-8.png"
            alt="Mist and Light Rays"
            className="w-full h-full object-cover object-center"
            style={{
              filter: 'saturate(0.7) contrast(1.1)',
              transform: 'rotate(-35deg) scale(1.5)',
              transformOrigin: 'top left'
            }}
          />
          {/* Gradient mask to reduce mist in upper areas where trees are */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent mix-blend-multiply pointer-events-none"></div>
        </motion.div>

        {/* Layer 6 - Foreground Trees */}
        <motion.div
          style={{
            y: layer6Y,
            scale: layer6Scale,
            opacity
          }}
          className="absolute inset-0 z-[6]"
        >
          <img
            src="/src/assets/images/hero-layer-6.png"
            alt="Foreground Trees"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'saturate(0.78) contrast(1.20) brightness(0.96) clarity(1.15)' }}
          />
        </motion.div>

        {/* Layer 7 - River Foreground */}
        <motion.div
          style={{
            y: layer7Y,
            scale: layer7Scale,
            opacity
          }}
          className="absolute inset-0 z-[7]"
        >
          <img
            src="/src/assets/images/hero-layer-7.png"
            alt="River Foreground"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'saturate(0.75) contrast(1.16) brightness(0.95)' }}
          />
        </motion.div>

        {/* Cool blue shadow overlay for depth */}
        <div className="absolute inset-0 z-[9] pointer-events-none bg-gradient-to-b from-blue-900/5 via-transparent to-blue-950/8"></div>

        {/* 20% transparency overlay */}
        <div className="absolute inset-0 z-[10] pointer-events-none bg-white opacity-20"></div>
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
          className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center h-screen flex flex-col items-center justify-center"
        >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Category Label with Line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-[#1F2A3A]"></div>
            <span className="text-[#1F2A3A] text-sm tracking-[0.3em] uppercase font-body" style={{ textShadow: '1px 1px 3px rgba(250, 249, 246, 0.5)' }}>
              A Wellness Collective
            </span>
          </div>

          {/* Main Headline - MNTN Style */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-medium text-[#1F2A3A] mb-8 leading-tight tracking-tight" style={{ textShadow: '2px 2px 4px rgba(250, 249, 246, 0.5)' }}>
            Be Prepared For The<br />
            Mind & Body Journey!
          </h1>

          {/* CTA Button */}
          <motion.a
            href="#about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block px-10 py-4 bg-terracotta text-cloud-white font-medium rounded-full hover:bg-terracotta/90 transition-all duration-300 uppercase tracking-wider text-sm"
          >
            Get Started
          </motion.a>
        </motion.div>
      </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
          style={{ opacity: contentOpacity }}
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <span className="text-[#1F2A3A]/70 text-sm font-body tracking-wide group-hover:text-[#1F2A3A] transition-colors">
              scroll down
            </span>
            <svg className="w-5 h-5 text-[#1F2A3A]/70 group-hover:text-[#1F2A3A] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.a>
        </motion.div>

        {/* About Sections - Scroll Reveal */}
        <motion.div
          style={{
            opacity: aboutContainerOpacity,
            scale: aboutContainerScale,
            rotateX: aboutContainerRotateX,
            transformPerspective: 1200
          }}
          className="absolute inset-0 z-30 flex items-center justify-center"
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
                  <span className="text-[#1F2A3A] text-xs tracking-[0.3em] uppercase font-body drop-shadow-lg">Get Started</span>
                  <div className="w-16 h-px bg-[#1F2A3A] shadow-lg"></div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-[#1F2A3A] mb-6 leading-tight drop-shadow-xl">
                  What level of wellness are you seeking?
                </h2>
                <p className="text-base md:text-lg text-[#1F2A3A] leading-relaxed mb-8 drop-shadow-lg">
                  Determining your wellness goals can be an important tool when planning your journey. The Elevate Collective helps you plan experiences according to your current state and desired outcomes. What type of experience are you seeking – mindful movement, strength training, recovery, or complete transformation?
                </p>
                <motion.a href="#experiences" whileHover={{ x: 5 }} className="inline-flex items-center gap-2 text-[#1F2A3A] font-medium text-sm tracking-wide uppercase group drop-shadow-lg">
                  read more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
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
                  <span className="text-[#1F2A3A] text-xs tracking-[0.3em] uppercase font-body drop-shadow-lg">Wellness Essentials</span>
                  <div className="w-16 h-px bg-[#1F2A3A] shadow-lg"></div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-[#1F2A3A] mb-6 leading-tight drop-shadow-xl">
                  Picking the right approach for you!
                </h2>
                <p className="text-base md:text-lg text-[#1F2A3A] leading-relaxed mb-8 drop-shadow-lg">
                  The nice thing about beginning your wellness journey is finding what resonates with you. At TEC, we blend science-backed training with mindset coaching and restorative practices. Our approach combines purposeful challenge with intentional rest, helping you sustain your drive without compromising your wellbeing.
                </p>
                <motion.a href="#experiences" whileHover={{ x: 5 }} className="inline-flex items-center gap-2 text-[#1F2A3A] font-medium text-sm tracking-wide uppercase group drop-shadow-lg">
                  read more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
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
                  <span className="text-[#1F2A3A] text-xs tracking-[0.3em] uppercase font-body drop-shadow-lg">Where You Go Is The Key</span>
                  <div className="w-16 h-px bg-[#1F2A3A] shadow-lg"></div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-[#1F2A3A] mb-6 leading-tight drop-shadow-xl">
                  Understand your journey & timing
                </h2>
                <p className="text-base md:text-lg text-[#1F2A3A] leading-relaxed mb-8 drop-shadow-lg">
                  To start, we'll assess your current state and goals. Through our curated experiences, you'll discover the right balance of movement, mindset, and connection. We'll guide you through each step, whether it's a morning clarity session, full-day intensive, or multi-day retreat designed for sustainable transformation.
                </p>
                <motion.a href="#experiences" whileHover={{ x: 5 }} className="inline-flex items-center gap-2 text-[#1F2A3A] font-medium text-sm tracking-wide uppercase group drop-shadow-lg">
                  read more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
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
          className="absolute inset-0 z-30 flex items-center justify-center"
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
                Empowering high-performing individuals through purposeful, inclusive wellness experiences.
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
