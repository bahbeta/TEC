import Section from './Section';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <Section id="about" background="warm-sand" spacing="reduced">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="!mb-3 text-deep-calm !text-3xl md:!text-4xl lg:!text-5xl">About Us</h2>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mb-4"></div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 lg:mb-20"
        >
          <h3 className="text-deep-calm !text-xl md:!text-2xl lg:!text-3xl font-display font-semibold !leading-tight tracking-tight text-center max-w-6xl mx-auto">
            We are The Elevate Collective. Redefining wellbeing for high-performers across the GCC and beyond.
          </h3>
        </motion.div>

        {/* Featured Images Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="group relative h-72 md:h-80 rounded-2xl overflow-hidden apple-shadow-lg hover:apple-shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <img
              src="/images/brand/meditation-bowl.jpg"
              alt="Meditation and mindfulness"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-calm/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="group relative h-72 md:h-80 rounded-2xl overflow-hidden apple-shadow-lg hover:apple-shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <img
              src="/images/brand/juice-bottles.jpg"
              alt="Premium wellness products"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-calm/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="group relative h-72 md:h-80 rounded-2xl overflow-hidden apple-shadow-lg hover:apple-shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <img
              src="/images/brand/tropical-meditation.jpg"
              alt="Tropical retreat environment"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-calm/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        </div>

        {/* Body Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-deep-calm/80 leading-relaxed text-center"
          >
            The Elevate Collective exists to help ambitious individuals sustain long-term performance without sacrificing their wellbeing. We create experiences that combine science-backed fitness, mindful coaching, and intentional recovery, designed to strengthen focus, resilience, and connection.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-deep-calm/80 leading-relaxed text-center"
          >
            Our approach blends cultural understanding with global expertise. Each program is thoughtfully curated to align with the fast-paced, high-performance environments of the corporate world, while maintaining the depth and quality of world-class wellbeing experiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-deep-calm/80 leading-relaxed text-center"
          >
            We believe wellbeing is not a benefit but a strategy — for individuals seeking balance, and for organisations striving to build cultures that are healthier, more engaged, and ready to lead.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="pt-6"
          >
            <div className="w-16 h-0.5 bg-terracotta mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-deep-calm/80 leading-relaxed text-center italic">
              Find your power. Discover your peace.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
