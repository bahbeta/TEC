import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
          <p className="text-deep-calm/60 mb-12">
            Last Updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">1. Introduction</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                Welcome to The Elevate Collective ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-deep-calm/80 leading-relaxed">
                By using our website and services, you consent to the practices described in this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-deep-calm mb-3">2.1 Personal Information</h3>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4 text-deep-calm/80 space-y-2">
                <li>Register for our events or retreats</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us through our website</li>
                <li>Participate in our wellbeing programmes</li>
                <li>Make a purchase or booking</li>
              </ul>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-deep-calm/80 space-y-2">
                <li>Name and contact details (email address, phone number)</li>
                <li>Demographic information</li>
                <li>Health and wellness information (when relevant to our services)</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-deep-calm mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                When you visit our website, we automatically collect certain information about your device and usage, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-deep-calm/80 space-y-2">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">3. How We Use Your Information</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-deep-calm/80 space-y-2">
                <li>Provide, operate, and maintain our services</li>
                <li>Process your bookings and registrations</li>
                <li>Send you updates about upcoming events and experiences</li>
                <li>Respond to your enquiries and provide customer support</li>
                <li>Improve our website and services</li>
                <li>Send marketing and promotional communications (with your consent)</li>
                <li>Detect, prevent, and address technical issues or fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">4. Sharing Your Information</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-4 text-deep-calm/80 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website and delivering our services (payment processors, email service providers, event management platforms)</li>
                <li><strong>Business Partners:</strong> Retreat venues, wellness instructors, and other partners involved in delivering our programmes</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">5. Data Security</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">6. Your Rights</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-deep-calm/80 space-y-2">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Objection:</strong> Object to the processing of your personal information</li>
                <li><strong>Restriction:</strong> Request restriction of processing your information</li>
                <li><strong>Portability:</strong> Request transfer of your information to another service</li>
                <li><strong>Withdraw Consent:</strong> Withdraw your consent at any time (where processing is based on consent)</li>
              </ul>
              <p className="text-deep-calm/80 leading-relaxed">
                To exercise these rights, please contact us at <a href="mailto:hello@theelevate.co" className="text-terracotta hover:underline">hello@theelevate.co</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. For detailed information about our use of cookies, please see our <Link to="/cookie-policy" className="text-terracotta hover:underline">Cookie Policy</Link>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">8. Third-Party Links</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                Our website may contain links to third-party websites (such as Luma for event registration). We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">9. Children's Privacy</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">10. International Data Transfers</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                Your information may be transferred to and maintained on servers located outside of your country of residence. By using our services, you consent to the transfer of your information to countries that may have different data protection laws than your country.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">12. Contact Us</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-warm-sand/30 p-6 rounded-lg">
                <p className="text-deep-calm/80 mb-2"><strong>The Elevate Collective</strong></p>
                <p className="text-deep-calm/80 mb-2">Email: <a href="mailto:hello@theelevate.co" className="text-terracotta hover:underline">hello@theelevate.co</a></p>
                <p className="text-deep-calm/80">Location: Dubai, United Arab Emirates</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
