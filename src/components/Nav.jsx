import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true); // Start with white logo for hero section
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Hero section is dark, so show white logo/text at the top
      // After scrolling past hero, detect background dynamically
      if (window.scrollY < 100) {
        setIsDarkBackground(true);
        return;
      }

      // Detect background below nav bar
      const navHeight = 100; // Approximate nav height
      const elementBelow = document.elementFromPoint(window.innerWidth / 2, navHeight);

      if (elementBelow) {
        // Traverse up the DOM tree to find an element with a valid background color
        let currentElement = elementBelow;
        let maxDepth = 10; // Prevent infinite loops
        let foundBackground = false;

        while (currentElement && maxDepth > 0) {
          const computedStyle = window.getComputedStyle(currentElement);
          const bgColor = computedStyle.backgroundColor;

          // Parse RGB values from background color
          const rgbMatch = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)/);

          if (rgbMatch) {
            const r = parseInt(rgbMatch[1]);
            const g = parseInt(rgbMatch[2]);
            const b = parseInt(rgbMatch[3]);
            const a = rgbMatch[4] ? parseFloat(rgbMatch[4]) : 1;

            // Only use this background if it's not transparent
            if (a > 0.1 && !(r === 0 && g === 0 && b === 0)) {
              // Calculate relative luminance (perceived brightness)
              const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

              // If luminance is less than 0.5, it's a dark background
              setIsDarkBackground(luminance < 0.5);
              foundBackground = true;
              break;
            }
          }

          currentElement = currentElement.parentElement;
          maxDepth--;
        }

        // If no background found, default to light
        if (!foundBackground) {
          setIsDarkBackground(false);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About Us', href: '#about', type: 'anchor' },
    { label: 'Events', href: '#experiences', type: 'anchor' },
    { label: 'Corporate Partners', href: '#partners', type: 'anchor' },
    { label: 'Blogs', href: '/blog', type: 'link' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled ? 'glass-dark py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between relative">
          {/* Logo - Positioned to overlap (half above navbar, half inside) */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute transition-all duration-500 cursor-pointer"
              style={{
                top: scrolled ? '-47px' : '-63px',
                left: 0,
              }}
            >
              <img
                src="/images/tec-logo.png"
                alt="The Elevate Collective - Premium wellbeing retreats and corporate wellbeing programs in Dubai UAE"
                className="w-auto object-contain transition-all duration-500"
                style={{
                  height: scrolled
                    ? (window.innerWidth < 768 ? '100px' : '160px')
                    : (window.innerWidth < 768 ? '140px' : '240px'),
                  filter: isDarkBackground
                    ? 'brightness(0) invert(1)' // White logo for dark backgrounds
                    : 'brightness(0) saturate(100%) invert(13%) sepia(15%) saturate(1739%) hue-rotate(173deg) brightness(95%) contrast(92%)', // Dark brand color for light backgrounds
                  transition: 'all 0.5s ease-out'
                }}
                loading="eager"
              />
            </motion.div>
          </Link>

          {/* Spacer to prevent content overlap */}
          <div className={`transition-all duration-500 ${
            scrolled ? 'w-52 md:w-64' : 'w-64 md:w-80'
          }`}></div>

          {/* Nav Items - Centered */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item, index) => (
              item.type === 'link' ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-body font-medium transition-colors duration-200 ${
                    isDarkBackground ? 'text-cloud-white/80 hover:text-cloud-white' : 'text-[#1F2A3A]/80 hover:text-[#1F2A3A]'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`text-sm font-body font-medium apple-hover relative ${
                    isDarkBackground ? 'text-cloud-white/80 hover:text-cloud-white' : 'text-[#1F2A3A]/80 hover:text-[#1F2A3A]'
                  }`}
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-terracotta"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 z-50 relative"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                isDarkBackground ? 'bg-cloud-white' : 'bg-[#1F2A3A]'
              } ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                isDarkBackground ? 'bg-cloud-white' : 'bg-[#1F2A3A]'
              } ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                isDarkBackground ? 'bg-cloud-white' : 'bg-[#1F2A3A]'
              } ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          x: mobileMenuOpen ? 0 : '100%'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed inset-0 z-40 lg:hidden ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-deep-calm/95 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col h-full pt-32 px-8 pb-8">
            {/* Nav Items */}
            <div className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                item.type === 'link' ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-display font-medium text-cloud-white/90 hover:text-cloud-white transition-colors duration-200 py-2"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="text-2xl font-display font-medium text-cloud-white/90 hover:text-cloud-white transition-colors duration-200 py-2 relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terracotta group-hover:w-full transition-all duration-300" />
                  </motion.a>
                )
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Nav;
