import { motion } from 'framer-motion';

const Nav = () => {
  const navItems = [
    { label: 'Equipment', href: '#philosophy' },
    { label: 'About us', href: '#about' },
    { label: 'Blog', href: '#experiences' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent py-6"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.2 }}
            className="text-3xl font-bold tracking-tight text-soft-white"
          >
            MNTN
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
                className="text-sm font-sans font-medium text-soft-white hover:text-golden-accent transition-colors duration-300"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Account Button */}
          <motion.a
            href="#join"
            whileHover={{ opacity: 0.8 }}
            className="hidden lg:flex items-center gap-2 text-sm font-sans font-medium text-soft-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Account
          </motion.a>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-soft-white"></span>
              <span className="w-full h-0.5 bg-soft-white"></span>
            </div>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
