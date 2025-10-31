import Section from './Section';
import { useState } from 'react';
import { motion } from 'framer-motion';

const JoinCollective = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (integrate with your email service)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section id="join" background="soft-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="mb-4">Join the Collective</h2>
        <p className="text-lg text-slate-gray mb-12">
          Stay connected for upcoming retreats, insights, and events.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 border-2 border-gray-300 focus:border-muted-gold focus:outline-none transition-colors duration-300 rounded-xl"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 border-2 border-gray-300 focus:border-muted-gold focus:outline-none transition-colors duration-300 rounded-xl"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-muted-gold text-charcoal-black px-12 py-4 font-accent text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 rounded-xl"
            >
              Subscribe
            </motion.button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12"
          >
            <div className="text-6xl mb-4">✓</div>
            <p className="text-2xl font-semibold text-muted-gold">Thank you for joining!</p>
            <p className="text-slate-gray mt-2">We'll be in touch soon.</p>
          </motion.div>
        )}
      </div>
    </Section>
  );
};

export default JoinCollective;
