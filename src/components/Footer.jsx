import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="bg-deep-calm text-cloud-white border-t border-cloud-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold text-cloud-white mb-4">
              TEC
            </h3>
            <p className="text-cloud-white/70 leading-relaxed mb-6">
              Get out there & discover your next wellness experience, retreat & destination!
            </p>
            <a
              href="mailto:hello@theelevate.co"
              className="text-terracotta hover:text-terracotta/80 transition-colors text-sm"
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
              More on TEC
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-cloud-white/70 hover:text-terracotta transition-colors text-sm">
                  About TEC
                </a>
              </li>
              <li>
                <a href="#philosophy" className="text-cloud-white/70 hover:text-terracotta transition-colors text-sm">
                  Contributors & Writers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-cloud-white/70 hover:text-terracotta transition-colors text-sm">
                  Write For Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-cloud-white/70 hover:text-terracotta transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-cloud-white/70 hover:text-terracotta transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </motion.div>

          {/* More on Experiences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-cloud-white uppercase tracking-wider mb-6">
              More on Experiences
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#experiences" className="text-cloud-white/70 hover:text-terracotta transition-colors text-sm">
                  The Team
                </a>
              </li>
              <li>
                <a href="#collective" className="text-cloud-white/70 hover:text-terracotta transition-colors text-sm">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#about" className="text-cloud-white/70 hover:text-terracotta transition-colors text-sm">
                  Press
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
            <p className="text-cloud-white/50 text-xs">
              Copyright 2025 TEC Inc. Terms & Privacy
            </p>
            <p className="text-cloud-white/50 text-xs">
              Designed with intention. Built for balance.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
