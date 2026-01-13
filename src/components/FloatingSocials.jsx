import { motion } from 'framer-motion';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const FloatingSocials = () => {
  const socials = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/theelevatecollective/',
      icon: FaLinkedinIn,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/theelevate.collective',
      icon: FaInstagram,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed left-4 md:left-6 lg:left-8 top-[35%] -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4 md:gap-6"
    >
      {/* Label */}
      <span className="text-white/70 text-[8px] md:text-[10px] font-body tracking-[0.25em] uppercase">
        Follow
      </span>

      {/* Vertical Line */}
      <div className="w-px h-8 md:h-12 bg-gradient-to-b from-white/30 to-transparent"></div>

      {/* Social Icons */}
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white/20 hover:bg-white/20 transition-colors shadow-lg"
          aria-label={`Follow us on ${social.name}`}
        >
          <social.icon className="w-5 h-5 md:w-6 md:h-6" />
        </motion.a>
      ))}

      {/* Bottom Vertical Line */}
      <div className="w-px h-8 md:h-12 bg-gradient-to-t from-white/30 to-transparent"></div>
    </motion.div>
  );
};

export default FloatingSocials;
