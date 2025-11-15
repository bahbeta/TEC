import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-deep-calm text-cloud-white border-t border-cloud-white/10 relative">
      {/* SVG Pattern Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <pattern id="jigsawPatternFooter" patternUnits="userSpaceOnUse" width="60" height="60">
            {/* Puzzle piece outline */}
            <path d="M 0 20 Q 5 15, 10 20 T 20 20 L 20 0 L 40 0 L 40 20 Q 45 15, 50 20 T 60 20 L 60 40 L 40 40 L 40 50 Q 35 45, 30 50 T 30 60 L 20 60 L 20 50 Q 15 45, 10 50 T 10 60 L 0 60 L 0 40 L 0 20 Z"
                  fill="none"
                  stroke="#8A987D"
                  strokeWidth="0.5"
                  strokeOpacity="0.3" />
            {/* Tab on top */}
            <path d="M 25 0 Q 25 -5, 30 -5 Q 35 -5, 35 0"
                  fill="none"
                  stroke="#8A987D"
                  strokeWidth="0.5"
                  strokeOpacity="0.3" />
            {/* Tab on right */}
            <path d="M 60 25 Q 65 25, 65 30 Q 65 35, 60 35"
                  fill="none"
                  stroke="#8A987D"
                  strokeWidth="0.5"
                  strokeOpacity="0.3" />
            {/* Indent on bottom */}
            <path d="M 25 60 Q 25 55, 30 55 Q 35 55, 35 60"
                  fill="none"
                  stroke="#8A987D"
                  strokeWidth="0.5"
                  strokeOpacity="0.3" />
            {/* Indent on left */}
            <path d="M 0 25 Q -5 25, -5 30 Q -5 35, 0 35"
                  fill="none"
                  stroke="#8A987D"
                  strokeWidth="0.5"
                  strokeOpacity="0.3" />
          </pattern>
        </defs>
      </svg>

      {/* Jigsaw pattern overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="url(#jigsawPatternFooter)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-block hover:opacity-80 transition-opacity duration-300">
              <img
                src="/images/tec-logo.png"
                alt="The Elevate Collective - Premium wellbeing retreats and corporate wellbeing programs in Dubai UAE"
                className="h-32 md:h-40 w-auto object-contain mb-6"
                style={{ filter: 'brightness(0) invert(1)' }}
                loading="lazy"
              />
            </Link>
            <p className="text-cloud-white/70 leading-relaxed mb-6 text-sm md:text-base">
              Get out there & discover your next wellbeing experience, retreat & destination!
            </p>
            <a
              href="mailto:hello@theelevate.co"
              className="text-terracotta hover:text-terracotta/80 transition-colors text-sm md:text-base"
            >
              hello@theelevate.co
            </a>
          </motion.div>

          {/* More on TEC */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-cloud-white uppercase tracking-wider mb-6">
              About
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-cloud-white/70 hover:text-terracotta transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#values" className="text-cloud-white/70 hover:text-terracotta transition-colors text-sm">
                  Our Values
                </a>
              </li>
              <li>
                <a href="#founders" className="text-cloud-white/70 hover:text-terracotta transition-colors text-sm">
                  The Founders
                </a>
              </li>
              <li>
                <Link to="/blog" className="text-cloud-white/70 hover:text-terracotta transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-cloud-white/70 hover:text-terracotta transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Experiences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-cloud-white uppercase tracking-wider mb-6">
              Experiences
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#experiences" className="text-cloud-white/70 hover:text-terracotta transition-colors text-sm">
                  Our Experiences
                </a>
              </li>
              <li>
                <a href="#upcoming" className="text-cloud-white/70 hover:text-terracotta transition-colors text-sm">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a href="#partners" className="text-cloud-white/70 hover:text-terracotta transition-colors text-sm">
                  Corporate Programs
                </a>
              </li>
              <li>
                <a href="#join" className="text-cloud-white/70 hover:text-terracotta transition-colors text-sm">
                  Join The Collective
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-cloud-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cloud-white/50 text-xs md:text-sm">
              © 2025 The Elevate Collective. All rights reserved.
            </p>
            <p className="text-cloud-white/50 text-xs md:text-sm italic">
              Designed with intention. Built for balance.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
