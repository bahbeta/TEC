import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const PolicyModal = ({ isOpen, onClose, title, children }) => {
  const contentRef = useRef(null);

  // Prevent body scroll and disable Lenis when modal is open
  useEffect(() => {
    if (isOpen) {
      // Lock body scroll
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
      const htmlElement = document.documentElement;
      htmlElement.style.overflow = 'hidden';

      // Disable Lenis by setting attribute
      document.documentElement.setAttribute('data-lenis-prevent', '');
    } else {
      // Unlock body scroll
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      const htmlElement = document.documentElement;
      htmlElement.style.overflow = '';

      // Re-enable Lenis
      document.documentElement.removeAttribute('data-lenis-prevent');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      const htmlElement = document.documentElement;
      htmlElement.style.overflow = '';
      document.documentElement.removeAttribute('data-lenis-prevent');
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

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
          <div className="fixed inset-0 z-[101] flex items-start justify-center p-0 md:p-4 md:pt-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative bg-cloud-white rounded-none md:rounded-2xl shadow-2xl w-full max-w-4xl h-screen md:h-auto md:max-h-[90vh] pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {/* Header */}
              <div className="bg-cloud-white border-b border-deep-calm/10 px-6 md:px-8 py-6 flex items-center justify-between md:rounded-t-2xl" style={{ flexShrink: 0 }}>
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-deep-calm">
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-deep-calm/5 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-6 h-6 text-deep-calm"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Content - Simplified with direct height and overflow */}
              <div
                ref={contentRef}
                className="px-6 md:px-8 py-6 bg-cloud-white md:rounded-b-2xl modal-scrollable-content"
                data-lenis-prevent
                style={{
                  flex: 1,
                  overflowY: 'scroll',
                  overflowX: 'hidden',
                  WebkitOverflowScrolling: 'touch',
                  minHeight: 0,
                  scrollbarWidth: 'auto', // Firefox
                  scrollbarColor: '#C4A57B #f5f5f5' // Firefox: thumb track
                }}
              >
                <style>{`
                  .modal-scrollable-content::-webkit-scrollbar {
                    width: 12px;
                    display: block !important;
                  }
                  .modal-scrollable-content::-webkit-scrollbar-track {
                    background: #f5f5f5;
                  }
                  .modal-scrollable-content::-webkit-scrollbar-thumb {
                    background: #C4A57B;
                    border-radius: 6px;
                  }
                  .modal-scrollable-content::-webkit-scrollbar-thumb:hover {
                    background: #B39568;
                  }
                `}</style>
                <div className="prose prose-lg max-w-none">
                  {children}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );

  // Render modal in a portal outside the main app structure
  return typeof document !== 'undefined'
    ? createPortal(modalContent, document.body)
    : null;
};

export default PolicyModal;
