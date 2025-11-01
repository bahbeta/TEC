import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const JoinCollective = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 1]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={ref}
      id="join"
      className="relative bg-deep-calm py-[146px] md:py-[194px] lg:py-[242px] overflow-hidden border-t border-cloud-white/10"
    >
      <motion.div
        style={{ y, opacity }}
        className="max-w-4xl mx-auto px-6 md:px-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Category Label */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-terracotta"></div>
            <span className="text-terracotta text-xs tracking-[0.3em] uppercase font-body">
              Join The Collective
            </span>
            <div className="w-16 h-px bg-terracotta"></div>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-cloud-white mb-8 leading-tight">
            Start Your Journey Today
          </h2>

          <p className="text-lg md:text-xl text-cloud-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Be the first to know about upcoming retreats, exclusive insights, and transformative wellness experiences.
          </p>

          {!submitted ? (
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-cloud-white/10 backdrop-blur-sm border border-cloud-white/20 focus:border-terracotta focus:outline-none transition-all duration-300 rounded-full text-cloud-white placeholder:text-cloud-white/40"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-cloud-white/10 backdrop-blur-sm border border-cloud-white/20 focus:border-terracotta focus:outline-none transition-all duration-300 rounded-full text-cloud-white placeholder:text-cloud-white/40"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-terracotta text-cloud-white px-10 py-4 font-medium rounded-full hover:bg-terracotta/90 transition-all duration-300 uppercase tracking-wider text-sm"
                >
                  Get Started
                </motion.button>
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 max-w-md mx-auto"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-terracotta rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-cloud-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-2xl font-display font-medium text-cloud-white mb-3">
                Welcome to The Collective!
              </p>
              <p className="text-cloud-white/70">
                Check your inbox—your journey begins now.
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default JoinCollective;
