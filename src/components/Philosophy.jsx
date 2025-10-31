import Section from './Section';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <Section id="philosophy" background="warm-beige">
      <div className="max-w-6xl mx-auto text-center">
        {/* Decorative Line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center mb-14"
        >
          <div className="h-0.5 w-20 bg-muted-gold/30"></div>
          <span className="px-10 text-sm font-medium tracking-[0.3em] uppercase text-muted-gold">
            Mind in Motion
          </span>
          <div className="h-0.5 w-20 bg-muted-gold/30"></div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="!mb-16"
        >
          Our Philosophy
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-10"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl text-slate-gray leading-relaxed font-light">
            Strength through balance. We believe growth comes from intentional movement, mental clarity, and authentic connection.
          </p>
          <div className="max-w-3xl mx-auto pt-6">
            <p className="text-lg md:text-xl text-charcoal-black/80 font-medium tracking-wide leading-loose">
              Intention over urgency. Substance over trend. Depth over noise.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Philosophy;
