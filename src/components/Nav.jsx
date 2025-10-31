import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'The Collective', href: '#collective' },
    { label: 'Journal', href: '#journal' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'apple-blur apple-shadow py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
            className={`text-2xl font-display font-semibold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-deep-calm' : 'text-cloud-white'
            }`}
          >
            TEC
          </motion.a>

          {/* Nav Items - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`text-sm font-body font-medium transition-all duration-300 relative group ${
                  scrolled ? 'text-deep-calm hover:text-terracotta' : 'text-cloud-white hover:text-warm-sand'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  scrolled ? 'bg-terracotta' : 'bg-warm-sand'
                }`}></span>
              </motion.a>
            ))}
          </div>

          {/* Join Button */}
          <motion.a
            href="#join"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden lg:block text-sm font-body font-medium px-6 py-2.5 rounded-full transition-all duration-300 ${
              scrolled
                ? 'text-cloud-white bg-terracotta hover:bg-terracotta/90'
                : 'text-deep-calm bg-cloud-white hover:bg-cloud-white/90'
            }`}
          >
            Join Us
          </motion.a>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 transition-colors duration-300 ${
                scrolled ? 'bg-deep-calm' : 'bg-cloud-white'
              }`}></span>
              <span className={`w-full h-0.5 transition-colors duration-300 ${
                scrolled ? 'bg-deep-calm' : 'bg-cloud-white'
              }`}></span>
            </div>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
