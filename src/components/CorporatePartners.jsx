import { motion } from 'framer-motion';

const CorporatePartners = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Employee Wellness Programs',
      description: 'Customized wellness initiatives to boost productivity and reduce stress in your workplace.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Flexible Packages',
      description: 'Choose from monthly workshops, quarterly retreats, or annual wellness programs.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Measurable Results',
      description: 'Track employee satisfaction, stress levels, and overall wellness improvements.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'On-Site & Virtual Options',
      description: 'We bring wellness to you - whether in-person at your location or through virtual sessions.'
    },
  ];

  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="font-cormorant text-5xl md:text-6xl text-deep-calm mb-6">
            Corporate Wellness Programs
          </h2>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            Invest in your team's well-being. Our corporate wellness programs help create
            a healthier, more productive, and more engaged workforce.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-20"
        >
          <img
            src="/images/brand/fitness-workout.jpg"
            alt="Corporate wellness training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-calm/60 to-transparent flex items-end justify-center pb-8">
            <p className="text-white text-xl md:text-2xl font-cormorant font-medium">
              Empowering teams through holistic wellness
            </p>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-sage-green/5 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-sage-green/10 rounded-full flex items-center justify-center text-sage-green mb-6">
                {benefit.icon}
              </div>
              <h3 className="font-cormorant text-2xl text-deep-calm mb-3">
                {benefit.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-sage-green to-deep-calm rounded-2xl p-12 text-center text-white"
        >
          <h3 className="font-cormorant text-4xl mb-4">
            Partner With Us
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
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
        <div className="grid md:grid-cols-3 gap-8 mt-16">
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
