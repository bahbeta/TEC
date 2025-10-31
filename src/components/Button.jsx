import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  ...props
}) => {
  const baseStyles = 'px-8 py-3.5 font-medium text-base rounded-full transition-all duration-300 cursor-pointer inline-block';

  const variants = {
    primary: 'bg-muted-gold text-soft-white hover:bg-desert-taupe apple-shadow-lg hover:apple-shadow-xl',
    outline: 'border-2 border-charcoal-black text-charcoal-black hover:bg-charcoal-black hover:text-soft-white',
  };

  const ButtonContent = () => (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        <ButtonContent />
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      <ButtonContent />
    </button>
  );
};

export default Button;
