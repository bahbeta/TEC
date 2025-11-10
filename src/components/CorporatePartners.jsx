import { motion } from 'framer-motion';

const CorporatePartners = () => {
  const programs = [
    {
      title: 'Employee Wellness Programs',
      description: 'Customized wellness initiatives to boost productivity and reduce stress in your workplace.',
      image: '/images/brand/fitness-workout.jpg',
      details: ['Stress Management', 'Team Building', 'Health Assessments'],
      duration: 'Ongoing',
      format: 'Customized Programs'
    },
    {
      title: 'Flexible Packages',
      description: 'Choose from monthly workshops, quarterly retreats, or annual wellness programs.',
      image: '/images/brand/fitness-workout.jpg',
      details: ['Monthly Workshops', 'Quarterly Retreats', 'Annual Programs'],
      duration: 'Flexible Schedule',
      format: 'Multiple Options'
    },
    {
      title: 'Measurable Results',
      description: 'Track employee satisfaction, stress levels, and overall wellness improvements.',
      image: '/images/brand/fitness-workout.jpg',
      details: ['Analytics Dashboard', 'Progress Tracking', 'Impact Reports'],
      duration: 'Continuous Monitoring',
      format: 'Data-Driven Insights'
    },
    {
      title: 'On-Site & Virtual Options',
      description: 'We bring wellness to you - whether in-person at your location or through virtual sessions.',
      image: '/images/brand/fitness-workout.jpg',
      details: ['On-Site Sessions', 'Virtual Programs', 'Hybrid Solutions'],
      duration: 'Year Round',
      format: 'Flexible Delivery'
    },
  ];

  return (
    <section
      id="partners"
      className="py-24 bg-[#EDF0ED] relative"
    >
      {/* SVG Pattern Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <pattern id="jigsawPatternPartners" patternUnits="userSpaceOnUse" width="60" height="60">
            <path d="M 0 20 Q 5 15, 10 20 T 20 20 L 20 0 L 40 0 L 40 20 Q 45 15, 50 20 T 60 20 L 60 40 L 40 40 L 40 50 Q 35 45, 30 50 T 30 60 L 20 60 L 20 50 Q 15 45, 10 50 T 10 60 L 0 60 L 0 40 L 0 20 Z"
                  fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 25 0 Q 25 -5, 30 -5 Q 35 -5, 35 0" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 60 25 Q 65 25, 65 30 Q 65 35, 60 35" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 25 60 Q 25 55, 30 55 Q 35 55, 35 60" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
            <path d="M 0 25 Q -5 25, -5 30 Q -5 35, 0 35" fill="none" stroke="#8A987D" strokeWidth="0.5" strokeOpacity="0.3" />
          </pattern>
        </defs>
      </svg>

      {/* Jigsaw pattern overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="url(#jigsawPatternPartners)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-deep-calm mb-6 whitespace-nowrap">
            Corporate Wellbeing Programs
          </h2>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mb-6"></div>
          <p className="text-lg text-charcoal/70 leading-relaxed mb-4">
            Redefining Workplace Wellbeing Across the GCC and beyond
          </p>
          <p className="text-base md:text-lg text-charcoal/70 leading-relaxed">
            At The Elevate Collective, we help ambitious organisations sustain high performance without burnout. Our bespoke corporate wellbeing programs combine science-backed training, mindfulness, and modern wellbeing practices to create a measurable impact that lasts.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden group shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="font-cormorant text-xl lg:text-2xl text-deep-calm mb-3 leading-tight text-justify">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-deep-calm/70 leading-relaxed mb-4 text-sm">
                  {program.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-deep-calm/10 mb-4"></div>

                {/* Details Section */}
                <div className="mb-4">
                  <p className="text-xs tracking-[0.2em] uppercase text-deep-calm/50 mb-2 font-medium">
                    FEATURES
                  </p>
                  <ul className="space-y-1">
                    {program.details.map((detail, idx) => (
                      <li key={idx} className="text-deep-calm/70 text-sm flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-sage-green"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Format & Duration */}
                <div className="text-xs text-deep-calm/60 space-y-1">
                  <p><span className="font-medium">Duration:</span> {program.duration}</p>
                  <p><span className="font-medium">Format:</span> {program.format}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-sage-green to-deep-calm rounded-2xl p-12 text-center text-white mb-16"
        >
          <h3 className="font-cormorant text-3xl md:text-4xl mb-4">
            Partner With Us
          </h3>
          <p className="text-base md:text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join leading companies in prioritizing employee wellness.
            Schedule a consultation to discuss a custom program for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-sage-green rounded-lg font-medium hover:bg-soft-sand transition-colors"
            >
              Schedule Consultation
            </a>
            <a
              href="mailto:partnerships@elevatecollective.com"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              partnerships@elevatecollective.com
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { number: '50+', label: 'Corporate Partners' },
            { number: '10,000+', label: 'Employees Served' },
            { number: '95%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-cormorant text-5xl md:text-6xl text-sage-green mb-2">
                {stat.number}
              </div>
              <div className="text-charcoal/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporatePartners;
