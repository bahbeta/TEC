import Section from './Section';
import { motion } from 'framer-motion';

const Values = () => {
  const values = [
    {
      title: 'Presence',
      description: 'Show up fully. Be here, now.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      )
    },
    {
      title: 'Strength',
      description: 'Physical, mental, and emotional resilience.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
        </svg>
      )
    },
    {
      title: 'Connection',
      description: 'To yourself, to others, to something greater.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/>
        </svg>
      )
    },
    {
      title: 'Balance',
      description: 'Purposeful challenge and mindful recovery.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 7.83c.85-.3 1.53-.98 1.83-1.83H18l-3 7c0 1.66 1.34 3 3 3s3-1.34 3-3l-3-7h2V4h-6.17C14.42 2.83 13.31 2 12 2s-2.42.83-2.83 2H3v2h2l-3 7c0 1.66 1.34 3 3 3s3-1.34 3-3l-3-7h3.17c.3.85.98 1.53 1.83 1.83V19H2v2h20v-2h-9V7.83z"/>
        </svg>
      )
    },
    {
      title: 'Purpose',
      description: 'Every experience has meaning. Every choice has intention.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      )
    },
  ];

  return (
    <Section id="values" background="deep-calm">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant text-cloud-white mb-4">
              Our values
            </h2>
          </motion.div>

          {/* Values Grid */}
          <div className="lg:col-span-9 grid md:grid-cols-2 gap-x-12 gap-y-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                {/* Icon Circle */}
                <div
                  className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: 'rgba(250, 249, 246, 0.15)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="text-terracotta">
                    {value.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="font-cormorant text-2xl md:text-3xl text-cloud-white mb-3 font-semibold">
                    {value.title}
                  </h3>
                  <p className="text-cloud-white/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Values;
