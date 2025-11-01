import Section from './Section';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <Section id="about" background="warm-sand">
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
            THE ELEVATE COLLECTIVE SUPPORTS HIGH ACHIEVING INDIVIDUALS AND COMMUNITIES NAVIGATING FAST PACED, PERFORMANCE DRIVEN LIVES. OFFERING SPACE TO PAUSE, REALIGN, AND RECONNECT WITH WHAT MATTERS MOST: HEALTH AND WELL BEING.
          </h3>
        </motion.div>

        {/* Featured Images Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-64 rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="/images/brand/meditation-bowl.jpg"
              alt="Meditation and mindfulness"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-64 rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="/images/brand/juice-bottles.jpg"
              alt="Premium wellness products"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative h-64 rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="/images/brand/tropical-meditation.jpg"
              alt="Tropical retreat environment"
              className="w-full h-full object-cover"
            />
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
            By blending science backed fitness training with elevated mindset coaching, modern wellness practices, and intentional rest, TEC helps ambitious individuals sustain their drive without compromising their well being. Offering inclusive, accessible experiences that combine purposeful challenge, grounded reflection, and restorative energy in premium settings.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-6"
          >
            <div className="w-16 h-0.5 bg-terracotta mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-deep-calm/80 leading-relaxed text-center italic">
              The goal is simple: to challenge the mind and body in ways that expand the sense of self, leaving each participant inspired, grounded, and aligned with renewed clarity, energy, and purpose to carry into both personal goals and professional life.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
