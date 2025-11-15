import Section from './Section';
import { motion } from 'framer-motion';

const Collective = () => {
  const testimonials = [
    {
      name: 'Sarah Al-Mansouri',
      role: 'Venture Founder',
      quote: 'TEC gave me permission to slow down without losing my edge. The balance I found here transformed how I lead.',
      image: '/src/assets/images/img-077.jpg',
    },
    {
      name: 'Karim Hassan',
      role: 'Creative Director',
      quote: 'This isn\'t just fitness—it\'s a complete reset for ambitious minds. The community here gets it.',
      image: '/src/assets/images/img-078.jpg',
    },
    {
      name: 'Layla Farooq',
      role: 'Tech Executive',
      quote: 'Finally, a wellbeing space that respects my time and challenges my body and mind in equal measure.',
      image: '/src/assets/images/img-079.jpg',
    },
  ];

  const partners = [
    {
      name: 'DIOS Dubai',
      handle: '@diosdubai',
      description: 'Premium training studio',
    },
    {
      name: 'Stir Coffee',
      handle: '@stircoffee.ae',
      description: 'Artisan coffee roasters',
    },
    {
      name: 'Brown Sugar',
      handle: '@brownsugar.dxb',
      description: 'Wellbeing cafe',
    },
  ];

  return (
    <Section id="collective" background="cloud-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="!mb-6">The Collective</h2>
          <div className="w-20 h-1 bg-terracotta mx-auto mb-8"></div>
          <p className="text-2xl md:text-3xl lg:text-4xl font-display text-deep-calm leading-tight max-w-4xl mx-auto">
            Built for High Performers Who Pause to Grow
          </p>
        </motion.div>

        {/* Member Testimonials */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-terracotta text-center !mb-12"
          >
            Community Voices
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                {/* Portrait - Monochrome Effect */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-[350px] rounded-2xl overflow-hidden mb-6 apple-shadow-lg"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-deep-calm/10 group-hover:bg-deep-calm/0 transition-all duration-500"></div>
                </motion.div>

                {/* Quote */}
                <blockquote className="mb-4">
                  <p className="text-lg text-deep-calm/80 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </blockquote>

                {/* Name & Role */}
                <div>
                  <p className="font-display font-semibold text-deep-calm text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-deep-calm/60">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partner Highlights */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-terracotta !mb-4">Trusted Partners</h3>
            <p className="text-lg text-deep-calm/70 max-w-2xl mx-auto">
              Collaborating with Dubai's finest wellbeing and lifestyle brands
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-cloud-white rounded-2xl p-8 text-center apple-shadow-lg hover:apple-shadow-xl transition-all duration-300"
              >
                <h4 className="text-xl font-display font-semibold text-deep-calm mb-2">
                  {partner.name}
                </h4>
                <p className="text-terracotta text-sm font-medium mb-3">
                  {partner.handle}
                </p>
                <p className="text-deep-calm/60 text-sm">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Become a Member CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden apple-shadow-xl"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/src/assets/images/img-080.jpg"
              alt="Join the collective"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-calm/90 to-deep-calm/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 py-20 px-8 md:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-cloud-white !text-3xl md:!text-4xl lg:!text-5xl !mb-6">
                Ready to Join the Collective?
              </h3>
              <p className="text-xl md:text-2xl text-warm-sand leading-relaxed mb-10 max-w-2xl mx-auto">
                Become part of a community that values strength, balance, and intentional growth.
              </p>

              <motion.a
                href="#join"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-12 py-4 bg-terracotta text-cloud-white font-medium text-lg rounded-full apple-shadow-xl hover:bg-terracotta/90 transition-all duration-300"
              >
                Become a Member
              </motion.a>

              <p className="text-cloud-white/70 text-sm mt-6">
                Join our waitlist for exclusive early access to upcoming retreats
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Collective;
