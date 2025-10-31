import Section from './Section';
import { FiInstagram } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Community = () => {
  const partners = [
    '@diosdubai',
    '@stircoffee.ae',
    '@chefhalawa',
    '@yp.club',
    '@matternutrition.xyz',
  ];

  return (
    <Section id="community" background="soft-white">
      <div className="text-center">
        <h2 className="mb-6">Community & Collaborations</h2>
        <p className="text-lg text-slate-gray max-w-3xl mx-auto mb-12">
          We grow through meaningful connection — collaborating with people, brands, and spaces shaping modern wellness culture.
        </p>

        {/* Featured Partners */}
        <div className="mb-12">
          <h3 className="text-xl font-accent uppercase tracking-wider mb-8 text-charcoal-black">
            Featured Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-warm-beige rounded-sm font-accent text-sm uppercase tracking-wider text-charcoal-black"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-lg font-semibold mb-4">Join our circle</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-gold hover:text-charcoal-black transition-colors duration-300"
            >
              <FiInstagram className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Community;
