import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

const BrochureModal = ({ isOpen, onClose, brochureUrl, title }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.setAttribute('data-lenis-prevent', '');
    } else {
      document.body.style.overflow = '';
      document.documentElement.removeAttribute('data-lenis-prevent');
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.removeAttribute('data-lenis-prevent');
    };
  }, [isOpen]);

  // Close on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'f992d788-670d-4619-9b5a-959909961f18',
          subject: `Brochure Download Request: ${title}`,
          email,
          message: `Brochure download requested for: ${title}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        // Trigger download
        const link = document.createElement('a');
        link.href = brochureUrl;
        link.download = '';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset and close after delay
        setTimeout(() => {
          setSubmitted(false);
          setEmail('');
          onClose();
        }, 2500);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error. Please try again or email us at reach@theelevatecollective.me');
    } finally {
      setIsSubmitting(false);
    }
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative bg-cloud-white rounded-2xl shadow-2xl w-full max-w-md pointer-events-auto p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-deep-calm/5 rounded-full transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5 text-deep-calm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {!submitted ? (
                <>
                  {/* Icon */}
                  <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-display font-semibold text-deep-calm mb-2">
                    Download Brochure
                  </h3>
                  <p className="text-deep-calm/60 text-sm mb-6 leading-relaxed">
                    Enter your email to receive the {title} brochure.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-5 py-3.5 bg-deep-calm/5 border border-deep-calm/15 rounded-full text-deep-calm placeholder:text-deep-calm/40 transition-all duration-300 focus:outline-none focus:border-terracotta/50 focus:ring-2 focus:ring-terracotta/20"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-terracotta text-cloud-white px-6 py-3.5 font-medium rounded-full hover:bg-terracotta/90 transition-all duration-300 uppercase tracking-wider text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Download Now'}
                    </motion.button>
                  </form>

                  <p className="text-[11px] text-deep-calm/40 mt-4 leading-relaxed text-center">
                    We respect your privacy and will never share your information.
                  </p>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  <div className="w-14 h-14 mx-auto mb-4 bg-terracotta rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-cloud-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-xl font-display font-medium text-deep-calm mb-2">
                    Your download is starting!
                  </p>
                  <p className="text-deep-calm/60 text-sm">
                    Thank you for your interest.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );

  return typeof document !== 'undefined'
    ? createPortal(modalContent, document.body)
    : null;
};

export default BrochureModal;
