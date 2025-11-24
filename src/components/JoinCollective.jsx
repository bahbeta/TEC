import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PolicyModal from './PolicyModal';
import PrivacyPolicyContent from './PrivacyPolicyContent';
import CookiePolicyContent from './CookiePolicyContent';

const JoinCollective = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', enquiry: '' });
  const [submitted, setSubmitted] = useState(false);
  const [activePolicy, setActivePolicy] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 1]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'f992d788-670d-4619-9b5a-959909961f18',
          subject: 'New Enquiry from The Elevate Collective Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\n\nEnquiry:\n${formData.enquiry || 'Newsletter subscription'}`
        })
      });

      const result = await response.json();

      if (result.success) {
        // Show success message
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', phone: '', enquiry: '' });
        }, 3000);
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again or email us directly at reach@theelevatecollective.me');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openModal = (policyType) => {
    setActivePolicy(policyType);
  };

  const closeModal = () => {
    setActivePolicy(null);
  };

  return (
    <section
      ref={ref}
      id="join"
      className="relative py-20 md:py-32 lg:py-40 overflow-hidden border-t border-cloud-white/10 bg-[#1E2A3A]"
    >
      {/* SVG Pattern Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <pattern id="jigsawPatternJoin" patternUnits="userSpaceOnUse" width="60" height="60">
            <path d="M 0 20 Q 5 15, 10 20 T 20 20 L 20 0 L 40 0 L 40 20 Q 45 15, 50 20 T 60 20 L 60 40 L 40 40 L 40 50 Q 35 45, 30 50 T 30 60 L 20 60 L 20 50 Q 15 45, 10 50 T 10 60 L 0 60 L 0 40 L 0 20 Z"
                  fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 25 0 Q 25 -5, 30 -5 Q 35 -5, 35 0" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 60 25 Q 65 25, 65 30 Q 65 35, 60 35" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 25 60 Q 25 55, 30 55 Q 35 55, 35 60" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 0 25 Q -5 25, -5 30 Q -5 35, 0 35" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
          </pattern>
        </defs>
      </svg>

      {/* Jigsaw pattern overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="url(#jigsawPatternJoin)" />
        </svg>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="max-w-6xl mx-auto px-6 md:px-12 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="text-left">
            {/* Category Label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-px bg-terracotta"></div>
              <span className="text-terracotta text-xs tracking-[0.3em] uppercase font-body">
                Join The Collective
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-cloud-white mb-6 leading-tight">
              Start Your Journey Today
            </h2>

            <p className="text-lg md:text-xl text-cloud-white/70 leading-relaxed">
              Be the first to know about upcoming retreats, exclusive insights, and transformative wellbeing experience
            </p>
          </div>

          {/* Form */}
          {!submitted ? (
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-cloud-white/5 backdrop-blur-xl border border-cloud-white/20 focus-apple rounded-full text-cloud-white placeholder:text-cloud-white/50 transition-all duration-300 hover:bg-cloud-white/10 hover:border-cloud-white/30"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-cloud-white/5 backdrop-blur-xl border border-cloud-white/20 focus-apple rounded-full text-cloud-white placeholder:text-cloud-white/50 transition-all duration-300 hover:bg-cloud-white/10 hover:border-cloud-white/30"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number (optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-cloud-white/5 backdrop-blur-xl border border-cloud-white/20 focus-apple rounded-full text-cloud-white placeholder:text-cloud-white/50 transition-all duration-300 hover:bg-cloud-white/10 hover:border-cloud-white/30"
                />
                <textarea
                  name="enquiry"
                  placeholder="Your enquiry (optional)"
                  value={formData.enquiry}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-6 py-4 bg-cloud-white/5 backdrop-blur-xl border border-cloud-white/20 focus-apple rounded-3xl text-cloud-white placeholder:text-cloud-white/50 transition-all duration-300 hover:bg-cloud-white/10 hover:border-cloud-white/30 resize-none"
                />

                {/* Email Subscription Disclaimer */}
                <p className="text-xs text-cloud-white/50 leading-relaxed px-2">
                  By subscribing, you consent to receive marketing emails from The Elevate Collective. We respect your privacy and will never share your information with third parties. You can unsubscribe at any time. View our{' '}
                  <button
                    type="button"
                    onClick={() => openModal('privacy')}
                    className="text-terracotta hover:text-terracotta/80 underline transition-colors"
                  >
                    Privacy Policy
                  </button>
                  {' '}and{' '}
                  <button
                    type="button"
                    onClick={() => openModal('cookie')}
                    className="text-terracotta hover:text-terracotta/80 underline transition-colors"
                  >
                    Cookie Policy
                  </button>
                  {' '}for more details.
                </p>

                <motion.button
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-terracotta text-cloud-white px-10 py-4 font-medium rounded-full hover:bg-terracotta/90 transition-all duration-400 ease-out uppercase tracking-wider text-sm apple-shadow-lg hover:apple-shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Get Started'}
                  </span>
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

      {/* Policy Modals */}
      <PolicyModal
        isOpen={activePolicy === 'privacy'}
        onClose={closeModal}
        title="Privacy Policy"
      >
        <PrivacyPolicyContent />
      </PolicyModal>

      <PolicyModal
        isOpen={activePolicy === 'cookie'}
        onClose={closeModal}
        title="Cookie Policy"
      >
        <CookiePolicyContent />
      </PolicyModal>
    </section>
  );
};

export default JoinCollective;
