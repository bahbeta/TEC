import { motion } from 'framer-motion';

const Founders = () => {
  const founders = [
    {
      name: 'MALAK ALSAFFAR',
      image: '/images/malak.jpeg',
      bio: [
        'A former corporate strategist turned wellbeing guide, Malak specialises in helping leaders reconnect with clarity, purpose, and resilience. Her work focuses on mindfulness, emotional intelligence, and intentional living, offering a counterbalance to the demands of high-stakes environments.',
        'Malak\'s approach is grounded in empathy and insight, creating space for reflection, growth, and sustainable success. She believes that real leadership begins with self-awareness and the courage to lead from a place of alignment.'
      ]
    },
    {
      name: 'WESLEY DEPASS',
      image: '/images/wesley.jpeg',
      bio: [
        'With a background in strength and conditioning and years spent navigating the corporate world, Wesley brings a unique perspective to modern wellbeing. His work bridges the gap between elite performance and sustainable living, combining physical training, mindful practices, and strategic recovery to help individuals thrive under pressure.',
        'Having worked with high performers across industries, Wesley understands the cost of ambition and the value of balance. His approach is rooted in results, but never at the expense of long-term wellbeing.'
      ]
    }
  ];

  return (
    <section
      id="founders"
      className="py-24 bg-[#EDF0ED] relative"
    >
      {/* SVG Pattern Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <pattern id="jigsawPatternFounders" patternUnits="userSpaceOnUse" width="60" height="60">
            <path d="M 0 20 Q 5 15, 10 20 T 20 20 L 20 0 L 40 0 L 40 20 Q 45 15, 50 20 T 60 20 L 60 40 L 40 40 L 40 50 Q 35 45, 30 50 T 30 60 L 20 60 L 20 50 Q 15 45, 10 50 T 10 60 L 0 60 L 0 40 L 0 20 Z"
                  fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 25 0 Q 25 -5, 30 -5 Q 35 -5, 35 0" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 60 25 Q 65 25, 65 30 Q 65 35, 60 35" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 25 60 Q 25 55, 30 55 Q 35 55, 35 60" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 0 25 Q -5 25, -5 30 Q -5 35, 0 35" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
          </pattern>
        </defs>
      </svg>

      {/* Jigsaw pattern overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="url(#jigsawPatternFounders)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="!mb-3 text-deep-calm !text-3xl md:!text-4xl lg:!text-5xl">The Visionaries Behind The Elevate Collective</h2>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mb-4"></div>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              {/* Founder Card */}
              <div className="bg-white rounded-2xl overflow-hidden apple-shadow-lg hover:apple-shadow-2xl transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.01] h-[750px] flex flex-col">
                {/* Image */}
                <div className="relative h-[350px] flex-shrink-0 overflow-hidden">
                  <img
                    src={founder.image}
                    alt={`${founder.name} - Co-founder of The Elevate Collective wellbeing retreat Dubai UAE`}
                    className="w-full h-full object-cover object-top grayscale transition-all duration-1000 ease-out group-hover:scale-110 group-hover:grayscale-0"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-calm/60 to-transparent pointer-events-none"></div>

                  {/* Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-cloud-white !text-2xl lg:!text-3xl !mb-0 font-display font-semibold tracking-tight">
                      {founder.name}
                    </h3>
                  </div>
                </div>

                {/* Bio Content */}
                <div className="p-8 lg:p-10 flex-1 flex flex-col justify-center">
                  <div className="space-y-4">
                    {founder.bio.map((paragraph, idx) => (
                      <p key={idx} className="text-deep-calm/80 leading-relaxed text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center max-w-4xl mx-auto"
        >
          <div className="w-16 h-0.5 bg-terracotta mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-deep-calm/80 leading-relaxed">
            Together, Wesley Depass and Malak Alsaffar lead The Elevate Collective with a shared purpose: to redefine what wellbeing means for modern professionals and create spaces where clarity, performance, and peace can coexist.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;
