import Section from './Section';
import { motion } from 'framer-motion';

const OurApproach = () => {
  return (
    <Section id="approach" background="warm-sand">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="!mb-3 text-deep-calm !text-3xl md:!text-4xl lg:!text-5xl">Our Approach</h2>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mb-6"></div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-deep-calm !text-2xl md:!text-3xl lg:!text-4xl font-display font-semibold !leading-tight tracking-tight text-center max-w-5xl mx-auto">
            Strength of mind and body. Built for balance.
          </h3>
        </motion.div>

        {/* Body Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-deep-calm/80 leading-relaxed text-center"
          >
            At The Elevate Collective, we believe in the power of integration — of challenging the body and calming the mind, of building strength and embracing rest. Our experiences aren't just workouts or retreats. They're journeys designed to shift perspective, deepen awareness, and build resilience that lasts.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-deep-calm/80 leading-relaxed text-center"
          >
            Every program combines evidence-based movement with mindfulness and intentional recovery. Whether you're preparing for a challenge, recovering from burnout, or simply looking to reconnect — our approach meets you where you are.
          </motion.p>
        </div>
      </div>
    </Section>
  );
};

export default OurApproach;
