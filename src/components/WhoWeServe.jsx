import Section from './Section';
import { FiCheck } from 'react-icons/fi';

const WhoWeServe = () => {
  const highlights = [
    'Age 35–45+',
    'UAE-based, culturally diverse',
    'Wellness-conscious professionals',
    'Seeking premium, purposeful experiences',
  ];

  return (
    <Section id="who-we-serve" background="soft-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="order-2 md:order-1">
          <div className="relative h-96 rounded-sm overflow-hidden shadow-lg">
            <img
              src="/src/assets/images/img-060.jpg"
              alt="Professional in meditation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="order-1 md:order-2">
          <h2 className="mb-8">Who We Serve</h2>
          <p className="text-lg text-slate-gray mb-8 leading-relaxed">
            High-achieving professionals navigating fast-paced lives — from entrepreneurs to executives — seeking sustainable wellness, connection, and clarity.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Audience Highlights</h3>
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <FiCheck className="text-muted-gold text-xl mt-1 flex-shrink-0" />
                <span className="text-slate-gray">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhoWeServe;
