import { motion } from 'framer-motion';

const ValuesApproachSplit = () => {
  const values = [
    {
      title: 'Presence',
      description: 'Show up fully. Be here, now.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      )
    },
    {
      title: 'Strength',
      description: 'Physical, mental, and emotional resilience.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
        </svg>
      )
    },
    {
      title: 'Connection',
      description: 'To yourself, to others, to something greater.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/>
        </svg>
      )
    },
    {
      title: 'Balance',
      description: 'Purposeful challenge and mindful recovery.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 7.83c.85-.3 1.53-.98 1.83-1.83H18l-3 7c0 1.66 1.34 3 3 3s3-1.34 3-3l-3-7h2V4h-6.17C14.42 2.83 13.31 2 12 2s-2.42.83-2.83 2H3v2h2l-3 7c0 1.66 1.34 3 3 3s3-1.34 3-3l-3-7h3.17c.3.85.98 1.53 1.83 1.83V19H2v2h20v-2h-9V7.83z"/>
        </svg>
      )
    },
    {
      title: 'Purpose',
      description: 'Every experience has meaning. Every choice has intention.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      )
    },
  ];

  return (
    <section id="values" className="relative overflow-hidden">
      {/* SVG Pattern and Clip Path Definitions */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <pattern id="jigsawPatternValues" patternUnits="userSpaceOnUse" width="60" height="60">
            <path d="M 0 20 Q 5 15, 10 20 T 20 20 L 20 0 L 40 0 L 40 20 Q 45 15, 50 20 T 60 20 L 60 40 L 40 40 L 40 50 Q 35 45, 30 50 T 30 60 L 20 60 L 20 50 Q 15 45, 10 50 T 10 60 L 0 60 L 0 40 L 0 20 Z"
                  fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 25 0 Q 25 -5, 30 -5 Q 35 -5, 35 0" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 60 25 Q 65 25, 65 30 Q 65 35, 60 35" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 25 60 Q 25 55, 30 55 Q 35 55, 35 60" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 0 25 Q -5 25, -5 30 Q -5 35, 0 35" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
          </pattern>
          <pattern id="jigsawPatternApproach" patternUnits="userSpaceOnUse" width="60" height="60">
            <path d="M 0 20 Q 5 15, 10 20 T 20 20 L 20 0 L 40 0 L 40 20 Q 45 15, 50 20 T 60 20 L 60 40 L 40 40 L 40 50 Q 35 45, 30 50 T 30 60 L 20 60 L 20 50 Q 15 45, 10 50 T 10 60 L 0 60 L 0 40 L 0 20 Z"
                  fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 25 0 Q 25 -5, 30 -5 Q 35 -5, 35 0" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 60 25 Q 65 25, 65 30 Q 65 35, 60 35" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 25 60 Q 25 55, 30 55 Q 35 55, 35 60" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 0 25 Q -5 25, -5 30 Q -5 35, 0 35" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
          </pattern>
          {/* Rounded diagonal clip paths */}
          <clipPath id="roundedDiagonalLeft" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 0.54,0 Q 0.52,0.25 0.50,0.5 Q 0.48,0.75 0.46,1 L 0,1 Z" />
          </clipPath>
          <clipPath id="roundedDiagonalRight" clipPathUnits="objectBoundingBox">
            <path d="M 0.54,0 L 1,0 L 1,1 L 0.46,1 Q 0.48,0.75 0.50,0.5 Q 0.52,0.25 0.54,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Desktop Diagonal Split Layout - Hidden on Mobile */}
      <div className="hidden lg:block">
        {/* Left Side - Our Values (Deep Calm) */}
        <div
          className="absolute inset-0 bg-[#1E2A3A]"
          style={{
            clipPath: 'url(#roundedDiagonalLeft)'
          }}
        >
          {/* Jigsaw pattern overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(#jigsawPatternValues)',
              fill: 'url(#jigsawPatternValues)'
            }}
          >
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="url(#jigsawPatternValues)" />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 h-full flex items-center relative z-10">
            <div className="w-full pr-8 xl:pr-16" style={{ maxWidth: '55%' }}>
              {/* Header Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant text-cloud-white mb-3">
                  Our values
                </h2>
                <div className="w-16 h-0.5 bg-terracotta"></div>
              </motion.div>

              {/* Values List - Single Column */}
              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    {/* Icon Circle */}
                    <div
                      className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: 'rgba(250, 249, 246, 0.15)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <div className="text-terracotta">
                        <div style={{ transform: 'scale(0.75)' }}>{value.icon}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-cormorant text-xl md:text-2xl text-cloud-white mb-1.5 font-semibold">
                        {value.title}
                      </h3>
                      <p className="text-cloud-white/80 leading-relaxed text-sm md:text-base">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Our Approach (Founders Color Scheme) */}
        <div
          className="absolute inset-0 bg-[#E7D9C4]"
          style={{
            clipPath: 'url(#roundedDiagonalRight)'
          }}
        >
          {/* Jigsaw pattern overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(#jigsawPatternApproach)',
              fill: 'url(#jigsawPatternApproach)'
            }}
          >
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="url(#jigsawPatternApproach)" />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 h-full flex items-center justify-end relative z-10">
            <div className="w-full pl-24 xl:pl-32" style={{ maxWidth: '50%' }}>
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-10"
              >
                <h2 className="mb-3 text-deep-calm text-3xl md:text-4xl lg:text-5xl font-cormorant">Our Approach</h2>
                <div className="w-16 h-0.5 bg-terracotta"></div>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <h3 className="text-deep-calm text-2xl md:text-3xl lg:text-4xl font-display font-semibold leading-tight">
                  Strength of mind and body. Built for balance.
                </h3>
              </motion.div>

              {/* Body Content */}
              <div className="space-y-5">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-base md:text-lg text-deep-calm/80 leading-relaxed"
                >
                  At The Elevate Collective, we believe in the power of integration — of challenging the body and calming the mind, of building strength and embracing rest. Our experiences aren't just workouts or retreats. They're journeys designed to shift perspective, deepen awareness, and build resilience that lasts.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-base md:text-lg text-deep-calm/80 leading-relaxed"
                >
                  Every program combines evidence-based movement with mindfulness and intentional recovery. Whether you're preparing for a challenge, recovering from burnout, or simply looking to reconnect — our approach meets you where you are.
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer div to give the section proper height */}
        <div className="relative" style={{ minHeight: '750px' }}>
          {/* This empty div ensures the section has the right height */}
        </div>
      </div>

      {/* Mobile Stacked Layout - Visible only on Mobile */}
      <div className="block lg:hidden">
        {/* Our Values Section */}
        <div className="py-16 px-6 bg-[#1E2A3A] relative">
          {/* Jigsaw pattern overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(#jigsawPatternValues)',
              fill: 'url(#jigsawPatternValues)'
            }}
          >
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="url(#jigsawPatternValues)" />
            </svg>
          </div>
          <div className="max-w-2xl mx-auto relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-cormorant text-cloud-white mb-3">
                Our values
              </h2>
              <div className="w-16 h-0.5 bg-terracotta"></div>
            </motion.div>

            {/* Values List */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(250, 249, 246, 0.15)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <div className="text-terracotta">
                      <div style={{ transform: 'scale(0.7)' }}>{value.icon}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-cormorant text-xl text-cloud-white mb-1.5 font-semibold">
                      {value.title}
                    </h3>
                    <p className="text-cloud-white/80 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="py-16 px-6 bg-[#E7D9C4] relative">
          {/* Jigsaw pattern overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(#jigsawPatternApproach)',
              fill: 'url(#jigsawPatternApproach)'
            }}
          >
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="url(#jigsawPatternApproach)" />
            </svg>
          </div>
          <div className="max-w-2xl mx-auto relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="mb-3 text-deep-calm text-3xl md:text-4xl font-cormorant">Our Approach</h2>
              <div className="w-16 h-0.5 bg-terracotta"></div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <h3 className="text-deep-calm text-2xl md:text-3xl font-display font-semibold leading-tight">
                Strength of mind and body. Built for balance.
              </h3>
            </motion.div>

            {/* Body Content */}
            <div className="space-y-5">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base text-deep-calm/80 leading-relaxed"
              >
                At The Elevate Collective, we believe in the power of integration — of challenging the body and calming the mind, of building strength and embracing rest. Our experiences aren't just workouts or retreats. They're journeys designed to shift perspective, deepen awareness, and build resilience that lasts.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base text-deep-calm/80 leading-relaxed"
              >
                Every program combines evidence-based movement with mindfulness and intentional recovery. Whether you're preparing for a challenge, recovering from burnout, or simply looking to reconnect — our approach meets you where you are.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesApproachSplit;
