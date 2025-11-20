import { motion } from 'framer-motion';

const Philosophy = () => {
  const pillars = [
    {
      title: 'Balance & Movement',
      description: 'Integrating purposeful physical training with mindful practices to build resilience and sustainable strength.',
    },
    {
      title: 'Connection & Growth',
      description: 'Fostering authentic relationships with self and community while pursuing personal evolution.',
    },
    {
      title: 'Purpose & Reflection',
      description: 'Creating space for intentional rest and deep reflection to clarify goals and renew energy.',
    },
    {
      title: 'Inclusivity & Healing',
      description: 'Building welcoming environments that honor diverse identities and support holistic healing.',
    }
  ];

  return (
    <section id="philosophy" className="relative bg-deep-calm py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-terracotta"></div>
            <span className="text-terracotta text-xs tracking-[0.3em] uppercase font-body">
              Our Mission
            </span>
            <div className="w-16 h-px bg-terracotta"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-cloud-white mb-12 leading-tight max-w-5xl mx-auto">
            Empowering high-performing individuals through purposeful, inclusive wellbeing experiences.
          </h2>

          <p className="text-xl md:text-2xl text-terracotta/90 leading-relaxed max-w-3xl mx-auto">
            Intention over urgency. Substance over trend. Depth over noise.
          </p>
        </motion.div>

        {/* Philosophy Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Decorative Line */}
              <div className="w-12 h-px bg-terracotta mb-6 group-hover:w-20 transition-all duration-300"></div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-display font-medium text-cloud-white mb-4 leading-tight">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-base text-cloud-white/60 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mantra */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-32"
        >
          <p className="text-5xl md:text-6xl lg:text-7xl font-display font-medium text-cloud-white mb-6">
            Mind in Motion.
          </p>
          <div className="w-32 h-1 bg-terracotta mx-auto"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
