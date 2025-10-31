import Section from './Section';
import { motion } from 'framer-motion';

const About = () => {
  const sections = [
    {
      number: '01',
      label: 'GET STARTED',
      title: 'What level of high achiever are you?',
      description: 'THE ELEVATE COLLECTIVE SUPPORTS HIGH ACHIEVING INDIVIDUALS AND COMMUNITIES NAVIGATING FAST PACED, PERFORMANCE DRIVEN LIVES. OFFERING SPACE TO PAUSE, REALIGN, AND RECONNECT WITH WHAT MATTERS MOST: HEALTH AND WELL BEING.',
      body: 'By blending science backed fitness training with elevated mindset coaching, modern wellness practices, and intentional rest, TEC helps ambitious individuals sustain their drive without compromising their well being.',
      image: '/src/assets/images/img-057.jpg',
      imagePosition: 'right'
    },
    {
      number: '02',
      label: 'WELLNESS ESSENTIALS',
      title: 'Picking the right approach for you!',
      description: 'The goal is simple: to challenge the mind and body in ways that expand the sense of self, leaving each participant inspired, grounded, and aligned with renewed clarity, energy, and purpose.',
      body: 'Offering inclusive, accessible experiences that combine purposeful challenge, grounded reflection, and restorative energy in premium settings. Our approach focuses on sustainable transformation.',
      image: '/src/assets/images/img-058.jpg',
      imagePosition: 'left'
    },
    {
      number: '03',
      label: 'WHERE YOU GO IS THE KEY',
      title: 'Understand your path & timing',
      description: 'To start your journey, we help you map out your wellness goals and create a sustainable plan. Each retreat is designed to fit your unique needs and schedule.',
      body: 'Whether it\'s a 3-hour intensive or a multi-day international retreat, every experience is crafted to deliver maximum impact while respecting your time and commitments.',
      image: '/src/assets/images/img-059.jpg',
      imagePosition: 'right'
    }
  ];

  return (
    <Section id="about" background="dark-teal" className="!pt-0">
      {sections.map((section, index) => (
        <div key={index} className={`relative ${index < sections.length - 1 ? 'mb-40' : ''}`}>
          {/* Large Background Number */}
          <div className="absolute left-0 top-0 z-0 pointer-events-none">
            <span className="text-[200px] md:text-[250px] lg:text-[300px] font-bold text-soft-white/5 leading-none">
              {section.number}
            </span>
          </div>

          {/* Content */}
          <div className={`relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            section.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
          }`}>
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: section.imagePosition === 'right' ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={section.imagePosition === 'left' ? 'lg:col-start-2' : ''}
            >
              {/* Label */}
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-0.5 bg-golden-accent"></div>
                <span className="text-golden-accent text-xs font-sans tracking-[0.3em] uppercase">
                  {section.label}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-soft-white !mb-8 !text-4xl md:!text-5xl">
                {section.title}
              </h3>

              {/* Description */}
              <p className="text-soft-white/80 text-base leading-relaxed mb-6">
                {section.description}
              </p>

              <p className="text-soft-white/70 text-base leading-relaxed mb-8">
                {section.body}
              </p>

              {/* Read More Link */}
              <motion.a
                href="#"
                className="inline-flex items-center gap-3 text-golden-accent text-sm font-sans tracking-wide group"
                whileHover={{ x: 5 }}
              >
                read more
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: section.imagePosition === 'right' ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden ${
                section.imagePosition === 'left' ? 'lg:col-start-1 lg:row-start-1' : ''
              }`}
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default About;
