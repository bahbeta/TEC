import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CookiePolicyContent from '../components/CookiePolicyContent';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-cloud-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="text-terracotta hover:text-terracotta/80 text-sm mb-8 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-display font-semibold text-deep-calm mb-4">
            Cookie Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <CookiePolicyContent />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;
