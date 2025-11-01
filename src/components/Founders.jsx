import Section from './Section';
import { motion } from 'framer-motion';

const Founders = () => {
  const founders = [
    {
      name: 'MALAK ALSAFFAR',
      image: '/images/malak.jpeg',
      bio: [
        'Malak empowers high performers with targeted mentorship for sustainable growth. She helps overcome mindset limitations while promoting well-being alongside outstanding achievements. Passionate about self-development, Malak facilitates lasting changes that establish foundations for ongoing professional success and personal fulfillment, guiding individuals towards excellence without encouraging unsustainable hustle.',
        'As a tech senior leader and entrepreneur, she walks the talk in her approach to success. She has mentored individuals globally to exceptional success and is passionate about bestowing that on TEC community.'
      ]
    },
    {
      name: 'WESLEY DEPASS',
      image: '/images/wesley.jpeg',
      bio: [
        'Known as Coach "WesDep," Wesley is a Strength and Conditioning expert and is co-founder of The Elevate Collective. With over a decade of experience coaching high achievers (the top 1%) he helps individuals reach their highest physical and mental potential.',
        'Wes\' background as a Big 4 senior consultant and serial entrepreneur equips him to understand the demands of fast-paced demanding roles and how to navigate them. He is also a qualified S&C Coach and certified MNU Nutritionist. His passion for helping people elevate themselves is evident in his work with over hundreds of clients.'
      ]
    }
  ];

  return (
    <Section id="founders" background="cloud-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="!mb-3 text-deep-calm !text-3xl md:!text-4xl lg:!text-5xl">The Founders</h2>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mb-4"></div>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              {/* Founder Card */}
              <div className="bg-cloud-white rounded-3xl overflow-hidden apple-shadow-lg hover:apple-shadow-xl transition-all duration-500 hover:-translate-y-1 h-[750px] flex flex-col">
                {/* Image */}
                <div className="relative h-[350px] flex-shrink-0 overflow-hidden bg-warm-sand">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-contain object-center grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-calm/60 to-transparent pointer-events-none"></div>

                  {/* Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-cloud-white !text-2xl lg:!text-3xl !mb-0 font-display font-semibold tracking-tight">
                      {founder.name}
                    </h3>
                  </div>
                </div>

                {/* Bio Content */}
                <div className="p-8 lg:p-10 flex-1 flex flex-col justify-center">
                  <div className="space-y-4">
                    {founder.bio.map((paragraph, idx) => (
                      <p key={idx} className="text-deep-calm/80 leading-relaxed text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Founders;
