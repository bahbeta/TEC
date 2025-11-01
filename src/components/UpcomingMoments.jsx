import Section from './Section';
import Button from './Button';

const UpcomingMoments = () => {
  const events = [
    {
      date: 'September 2025',
      title: 'Morning Clarity Journey',
      location: 'SEVA, Jumeirah',
    },
    {
      date: 'October 2025',
      title: 'Strength & Recovery Day',
      location: 'SIRO One Za\'abeel',
    },
    {
      date: 'November 2025',
      title: 'Desert Reset Overnight Retreat',
      location: 'UAE Desert',
    },
    {
      date: 'February 2026',
      title: 'Ultra Decompress Retreat',
      location: 'COMO Shambhala, Bali',
    },
  ];

  return (
    <Section id="upcoming" background="warm-sand">
      <div className="text-center mb-12">
        <h2 className="mb-4">Upcoming Moments</h2>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Timeline */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-muted-gold">
              <div className="absolute left-0 top-0 w-4 h-4 bg-muted-gold rounded-full transform -translate-x-[9px]"></div>
              <div className="pb-8">
                <span className="font-accent text-sm uppercase tracking-wider text-muted-gold">
                  {event.date}
                </span>
                <h3 className="text-2xl font-semibold mt-2 mb-1">{event.title}</h3>
                <p className="text-slate-gray">{event.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="primary" href="#join">
            Reserve Your Spot
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default UpcomingMoments;
