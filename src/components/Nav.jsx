import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    { label: 'About Us', href: '#about', type: 'anchor' },
    { label: 'Events', href: '#experiences', type: 'anchor' },
    { label: 'Corporate Partners', href: '#partners', type: 'anchor' },
    { label: 'Blogs', href: '/blog', type: 'link' },
    { label: 'Contact Us', href: '#contact', type: 'anchor' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-deep-calm/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className={`text-2xl md:text-3xl font-display font-bold tracking-tighter transition-colors duration-300 ${
              scrolled ? 'text-cloud-white' : 'text-[#1F2A3A]'
            }`}
          >
            TEC
          </motion.a>

          {/* Nav Items - Centered */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item, index) => (
              item.type === 'link' ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-body font-medium transition-colors duration-200 ${
                    scrolled ? 'text-cloud-white/80 hover:text-cloud-white' : 'text-[#1F2A3A]/80 hover:text-[#1F2A3A]'
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
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`text-sm font-body font-medium transition-colors duration-200 ${
                    scrolled ? 'text-cloud-white/80 hover:text-cloud-white' : 'text-[#1F2A3A]/80 hover:text-[#1F2A3A]'
                  }`}
                >
                  {item.label}
                </motion.a>
              )
            ))}
          </div>

          {/* Account Link */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className={`hidden lg:flex items-center gap-2 text-sm font-body font-medium transition-colors duration-200 ${
              scrolled ? 'text-cloud-white/80 hover:text-cloud-white' : 'text-[#1F2A3A]/80 hover:text-[#1F2A3A]'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Account
          </motion.a>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 rounded-full transition-colors duration-300 ${
                scrolled ? 'bg-cloud-white' : 'bg-[#1F2A3A]'
              }`}></span>
              <span className={`w-full h-0.5 rounded-full transition-colors duration-300 ${
                scrolled ? 'bg-cloud-white' : 'bg-[#1F2A3A]'
              }`}></span>
              <span className={`w-full h-0.5 rounded-full transition-colors duration-300 ${
                scrolled ? 'bg-cloud-white' : 'bg-[#1F2A3A]'
              }`}></span>
            </div>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
