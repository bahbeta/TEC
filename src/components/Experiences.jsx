import Section from './Section';
import Card from './Card';
import { motion } from 'framer-motion';

const Experiences = () => {
  const experiences = [
    {
      title: 'Journey-Style Retreat',
      duration: '3 hours',
      description: 'Guided breathwork and mindful movement in serene spaces.',
      price: 'From AED 600',
      image: '/src/assets/images/img-120.jpg',
    },
    {
      title: 'Full-Day Reset',
      duration: '6–8 hours',
      description: 'Strength, performance, and recovery in partnership with SIRO.',
      price: 'From AED 1,200',
      image: '/src/assets/images/img-058.jpg',
    },
    {
      title: 'Desert Overnight Retreat',
      duration: '1 night',
      description: 'Balance training and reflection under desert skies.',
      price: 'From AED 2,500',
      image: '/src/assets/images/img-121.jpg',
    },
    {
      title: 'Bali International Retreat',
      duration: '2–3 days',
      description: 'Elite transformation experience blending movement and renewal.',
      price: 'From AED 8,000',
      image: '/src/assets/images/img-134.jpg',
    },
  ];

  return (
    <Section id="experiences" background="warm-beige">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="!mb-8">Our Experiences</h2>
        <p className="text-xl md:text-2xl text-slate-gray max-w-3xl mx-auto leading-relaxed">
          Four signature journeys designed to balance strength, recovery, and reflection
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-12 mb-16">
        {experiences.map((experience, index) => (
          <Card key={index} {...experience} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center text-slate-gray/80 italic text-lg max-w-3xl mx-auto leading-relaxed"
      >
        Each retreat combines guided sessions, curated meals, and intentional stillness for deep restoration.
      </motion.p>
    </Section>
  );
};

export default Experiences;
