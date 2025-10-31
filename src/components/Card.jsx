import { motion } from 'framer-motion';

const Card = ({
  title,
  duration,
  description,
  price,
  image,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`bg-soft-white rounded-[2rem] overflow-hidden apple-shadow-lg hover:apple-shadow-xl transition-all duration-500 group ${className}`}
    >
      <div className="relative h-80 lg:h-96 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <div className="p-8 lg:p-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="!text-3xl lg:!text-4xl !mb-0">{title}</h3>
          <span className="text-sm font-medium text-slate-gray/70 mt-2">
            {duration}
          </span>
        </div>

        <p className="text-slate-gray text-base lg:text-lg leading-relaxed mb-8 mt-6">
          {description}
        </p>

        <div className="flex justify-between items-center pt-6 border-t border-charcoal-black/5">
          <span className="text-xl lg:text-2xl font-semibold text-charcoal-black">{price}</span>
          <motion.button
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm font-medium text-muted-gold hover:text-desert-taupe transition-colors duration-300 flex items-center gap-2"
          >
            Learn more
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
