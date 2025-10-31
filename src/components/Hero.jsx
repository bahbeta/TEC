import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Video/Image Background */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 z-0"
      >
        {/* Using image as placeholder - replace with video tag for production */}
        <img
          src="/src/assets/images/img-074.jpg"
          alt="Wellness journey"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay"></div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Main Tagline */}
          <h1 className="text-cloud-white mb-8 !leading-[1.1]">
            Strength of Mind & Body.
            <br />
            Built for Balance.
          </h1>

          {/* Floating CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12"
          >
            <motion.a
              href="#experiences"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-terracotta text-cloud-white font-medium text-base rounded-full apple-shadow-lg hover:apple-shadow-xl transition-all duration-300"
            >
              Explore Experiences
            </motion.a>
            <motion.a
              href="#join"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-cloud-white/10 backdrop-blur-md text-cloud-white border-2 border-cloud-white/30 font-medium text-base rounded-full hover:bg-cloud-white/20 transition-all duration-300"
            >
              Join the Collective
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-cloud-white/60 text-sm font-body tracking-wide">Scroll</span>
          <div className="w-6 h-10 border-2 border-cloud-white/30 rounded-full flex justify-center p-2">
            <motion.div
              className="w-1.5 h-2 bg-cloud-white/60 rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
