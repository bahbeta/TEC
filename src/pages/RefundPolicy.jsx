import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-cloud-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="text-terracotta hover:text-terracotta/80 text-sm mb-8 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-display font-semibold text-deep-calm mb-4">
            Refund & Cancellation Policy
          </h1>
          <p className="text-deep-calm/60 mb-12">
            Last Updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">1. Overview</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                At The Elevate Collective, we strive to provide exceptional wellbeing experiences. We understand that circumstances may change, and this policy outlines our approach to cancellations and refunds for our events, retreats, and programmes.
              </p>
              <p className="text-deep-calm/80 leading-relaxed">
                Please read this policy carefully before making a booking. By registering for any of our experiences, you acknowledge and agree to these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">2. Event Cancellations by Participants</h2>

              <h3 className="text-xl font-semibold text-deep-calm mb-3">2.1 Single-Day Events (Nia Morning, Vision Board Sessions, etc.)</h3>

              <div className="bg-warm-sand/30 p-6 rounded-lg mb-4">
                <p className="text-deep-calm/80 mb-4"><strong>Cancellation Timeline:</strong></p>
                <ul className="list-disc pl-6 text-deep-calm/80 space-y-2">
                  <li><strong>More than 7 days before event:</strong> Full refund minus 10% administrative fee</li>
                  <li><strong>3-7 days before event:</strong> 50% refund</li>
                  <li><strong>Less than 3 days before event:</strong> No refund</li>
                  <li><strong>No-show:</strong> No refund</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-deep-calm mb-3">2.2 Multi-Day Retreats (Mykonos Retreat, International Programmes)</h3>

              <div className="bg-warm-sand/30 p-6 rounded-lg mb-4">
                <p className="text-deep-calm/80 mb-4"><strong>Cancellation Timeline:</strong></p>
                <ul className="list-disc pl-6 text-deep-calm/80 space-y-2">
                  <li><strong>More than 90 days before retreat:</strong> Full refund minus 15% administrative fee</li>
                  <li><strong>60-90 days before retreat:</strong> 70% refund</li>
                  <li><strong>30-60 days before retreat:</strong> 50% refund</li>
                  <li><strong>Less than 30 days before retreat:</strong> No refund, but credit towards future retreat (valid for 12 months)</li>
                  <li><strong>No-show:</strong> No refund or credit</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-deep-calm mb-3">2.3 Corporate Programmes</h3>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                Corporate wellbeing programmes have customised cancellation terms based on the specific agreement. Please refer to your corporate contract or contact us at <a href="mailto:partnerships@elevatecollective.com" className="text-terracotta hover:underline">partnerships@elevatecollective.com</a> for details.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">3. How to Cancel Your Booking</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                To cancel your booking, please:
              </p>
              <ol className="list-decimal pl-6 mb-4 text-deep-calm/80 space-y-2">
                <li>Email us at <a href="mailto:hello@theelevate.co" className="text-terracotta hover:underline">hello@theelevate.co</a> with your booking reference and full name</li>
                <li>Include "CANCELLATION REQUEST" in the subject line</li>
                <li>Provide the reason for cancellation (optional but appreciated)</li>
                <li>Wait for confirmation from our team (usually within 48 hours)</li>
              </ol>
              <p className="text-deep-calm/80 leading-relaxed">
                Cancellations are effective from the date we receive your email, not the date you send it. We recommend requesting cancellation as early as possible to maximise your refund eligibility.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">4. Refund Processing</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                Once your cancellation is approved:
              </p>
              <ul className="list-disc pl-6 mb-4 text-deep-calm/80 space-y-2">
                <li>Refunds will be processed within 14 business days</li>
                <li>Refunds will be issued to the original payment method</li>
                <li>Depending on your bank or payment provider, it may take an additional 5-10 business days for the refund to appear in your account</li>
                <li>You will receive an email confirmation once the refund has been processed</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">5. Transferring Your Booking</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                If you cannot attend but don't want to cancel, you may:
              </p>

              <h3 className="text-xl font-semibold text-deep-calm mb-3">5.1 Transfer to Another Person</h3>
              <ul className="list-disc pl-6 mb-4 text-deep-calm/80 space-y-2">
                <li>Single-day events: Free transfer up to 48 hours before the event</li>
                <li>Multi-day retreats: Transfer allowed up to 30 days before, subject to AED 150 administrative fee</li>
                <li>The new participant must meet any eligibility requirements for the programme</li>
              </ul>

              <h3 className="text-xl font-semibold text-deep-calm mb-3">5.2 Transfer to Future Event</h3>
              <ul className="list-disc pl-6 mb-4 text-deep-calm/80 space-y-2">
                <li>Subject to availability and approval</li>
                <li>Credit valid for 12 months from original booking date</li>
                <li>Any price difference must be paid before the new event</li>
                <li>Transfer fee may apply (AED 100 for single-day events, AED 300 for retreats)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">6. Event Cancellation or Modification by The Elevate Collective</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                In the rare event that we need to cancel or significantly modify an experience due to circumstances beyond our control (e.g., natural disasters, venue issues, instructor illness, insufficient registrations), we will:
              </p>
              <ul className="list-disc pl-6 mb-4 text-deep-calm/80 space-y-2">
                <li>Notify you as soon as possible (at least 48 hours for single-day events, 14 days for retreats)</li>
                <li>Offer you a choice between:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Full refund (including all fees)</li>
                    <li>Credit for the full amount towards a future event</li>
                    <li>Transfer to an alternative date (if available)</li>
                  </ul>
                </li>
              </ul>
              <p className="text-deep-calm/80 leading-relaxed">
                <strong>Please note:</strong> We are not responsible for any additional costs you may have incurred (such as travel arrangements, accommodation, or time off work). We strongly recommend purchasing travel insurance for multi-day retreats.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">7. Medical Emergencies and Special Circumstances</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                We understand that unexpected situations arise. If you need to cancel due to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-deep-calm/80 space-y-2">
                <li>Serious illness or injury (yours or immediate family member)</li>
                <li>Death in the family</li>
                <li>Emergency circumstances beyond your control</li>
              </ul>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                Please contact us immediately at <a href="mailto:hello@theelevate.co" className="text-terracotta hover:underline">hello@theelevate.co</a>. We will review your situation on a case-by-case basis and may offer more flexible options. Medical documentation or other proof may be required.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">8. No-Show Policy</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                If you fail to attend an event without prior cancellation notice:
              </p>
              <ul className="list-disc pl-6 mb-4 text-deep-calm/80 space-y-2">
                <li>No refund will be provided</li>
                <li>No credit towards future events will be issued</li>
                <li>Your booking will be considered fulfilled</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">9. Travel Insurance</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                For multi-day retreats, especially international programmes, we strongly recommend purchasing comprehensive travel insurance that covers:
              </p>
              <ul className="list-disc pl-6 mb-4 text-deep-calm/80 space-y-2">
                <li>Trip cancellation and interruption</li>
                <li>Medical emergencies</li>
                <li>Travel delays</li>
                <li>Lost or delayed baggage</li>
              </ul>
              <p className="text-deep-calm/80 leading-relaxed">
                Travel insurance can provide protection for circumstances beyond the scope of our refund policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">10. Disputes and Resolution</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                If you have concerns about a cancellation or refund decision:
              </p>
              <ol className="list-decimal pl-6 mb-4 text-deep-calm/80 space-y-2">
                <li>Contact us at <a href="mailto:hello@theelevate.co" className="text-terracotta hover:underline">hello@theelevate.co</a> with details of your concern</li>
                <li>We will review your case and respond within 5 business days</li>
                <li>If you're not satisfied with our response, you may escalate to our senior management</li>
              </ol>
              <p className="text-deep-calm/80 leading-relaxed">
                We are committed to fair and transparent practices and will work with you to find a reasonable solution.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">11. Changes to This Policy</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                We reserve the right to modify this Refund & Cancellation Policy at any time. Changes will be posted on our website with an updated "Last Updated" date. The policy in effect at the time of your booking will apply to that booking.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">12. Contact Information</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                For questions about this policy or to request a cancellation:
              </p>
              <div className="bg-warm-sand/30 p-6 rounded-lg">
                <p className="text-deep-calm/80 mb-2"><strong>The Elevate Collective</strong></p>
                <p className="text-deep-calm/80 mb-2">General Enquiries: <a href="mailto:hello@theelevate.co" className="text-terracotta hover:underline">hello@theelevate.co</a></p>
                <p className="text-deep-calm/80 mb-2">Corporate Programmes: <a href="mailto:partnerships@elevatecollective.com" className="text-terracotta hover:underline">partnerships@elevatecollective.com</a></p>
                <p className="text-deep-calm/80">Location: Dubai, United Arab Emirates</p>
              </div>
            </section>

            <div className="bg-terracotta/10 p-6 rounded-lg mt-8">
              <p className="text-deep-calm/80 leading-relaxed">
                <strong>Important:</strong> This policy is designed to be fair to both our participants and our business. We commit significant resources to planning and delivering exceptional experiences, and early cancellations help us manage these effectively. We appreciate your understanding and cooperation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;
