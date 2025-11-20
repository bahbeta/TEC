import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const PolicyModal = ({ isOpen, onClose, title, children }) => {
  const contentRef = useRef(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
      // Also try to stop Lenis smooth scrolling
      const htmlElement = document.documentElement;
      htmlElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      const htmlElement = document.documentElement;
      htmlElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      const htmlElement = document.documentElement;
      htmlElement.style.overflow = '';
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
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-cloud-white rounded-2xl shadow-2xl w-full max-w-4xl my-8 pointer-events-auto flex flex-col max-h-[calc(100vh-4rem)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex-shrink-0 bg-cloud-white border-b border-deep-calm/10 px-6 md:px-8 py-6 flex items-center justify-between rounded-t-2xl">
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-deep-calm">
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-deep-calm/5 rounded-full transition-colors flex-shrink-0"
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

              {/* Content */}
              <div
                ref={contentRef}
                className="flex-1 overflow-y-scroll overscroll-contain px-6 md:px-8 py-6"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
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
