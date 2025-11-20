import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CookiePolicy = () => {
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
            Cookie Policy
          </h1>
          <p className="text-deep-calm/60 mb-12">
            Last Updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">1. What Are Cookies?</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="text-deep-calm/80 leading-relaxed">
                Cookies allow us to recognize your device and remember your preferences, making your experience on our website smoother and more personalized.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">2. How We Use Cookies</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                The Elevate Collective uses cookies to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-deep-calm/80 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve your user experience</li>
                <li>Analyse website traffic and performance</li>
                <li>Provide personalized content</li>
                <li>Ensure the security of our website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">3. Types of Cookies We Use</h2>

              <h3 className="text-xl font-semibold text-deep-calm mb-3">3.1 Essential Cookies</h3>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submission. The website cannot function properly without these cookies.
              </p>

              <h3 className="text-xl font-semibold text-deep-calm mb-3">3.2 Performance Cookies</h3>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the way our website works, such as ensuring users can find what they need easily.
              </p>

              <h3 className="text-xl font-semibold text-deep-calm mb-3">3.3 Functionality Cookies</h3>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                These cookies allow our website to remember choices you make (such as your preferred language or region) and provide enhanced, more personalized features.
              </p>

              <h3 className="text-xl font-semibold text-deep-calm mb-3">3.4 Analytics Cookies</h3>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                We use analytics services to help us understand how our website is being used. These cookies collect information about:
              </p>
              <ul className="list-disc pl-6 mb-4 text-deep-calm/80 space-y-2">
                <li>Number of visitors to our website</li>
                <li>Pages visited and time spent on each page</li>
                <li>How visitors arrived at our website</li>
                <li>What content is most popular</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">4. Third-Party Cookies</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                Some cookies on our website are placed by third-party services. We use the following third-party services that may use cookies:
              </p>
              <ul className="list-disc pl-6 mb-4 text-deep-calm/80 space-y-2">
                <li><strong>Luma:</strong> For event registration and management</li>
                <li><strong>Supabase:</strong> For blog functionality and data storage</li>
                <li><strong>Analytics Tools:</strong> To understand website usage and improve our services</li>
              </ul>
              <p className="text-deep-calm/80 leading-relaxed">
                These third parties have their own privacy and cookie policies, and we have no control over their cookies. We recommend reviewing their policies for more information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">5. Cookie Duration</h2>

              <h3 className="text-xl font-semibold text-deep-calm mb-3">Session Cookies</h3>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                These are temporary cookies that expire when you close your browser. They help us maintain your session as you navigate through our website.
              </p>

              <h3 className="text-xl font-semibold text-deep-calm mb-3">Persistent Cookies</h3>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                These cookies remain on your device for a set period or until you delete them. They help us remember your preferences for future visits and provide a better user experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">6. Managing Cookies</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences through your browser settings:
              </p>

              <h3 className="text-xl font-semibold text-deep-calm mb-3">Browser Settings</h3>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 mb-4 text-deep-calm/80 space-y-2">
                <li>View what cookies are stored on your device</li>
                <li>Delete cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Block all cookies</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>

              <div className="bg-warm-sand/30 p-6 rounded-lg mb-4">
                <p className="text-deep-calm/80 mb-2"><strong>Browser-Specific Instructions:</strong></p>
                <ul className="text-deep-calm/80 space-y-1">
                  <li>Chrome: Settings → Privacy and Security → Cookies</li>
                  <li>Firefox: Settings → Privacy & Security → Cookies and Site Data</li>
                  <li>Safari: Preferences → Privacy → Cookies and Website Data</li>
                  <li>Edge: Settings → Privacy, Search, and Services → Cookies</li>
                </ul>
              </div>

              <p className="text-deep-calm/80 leading-relaxed">
                <strong>Please note:</strong> If you choose to block all cookies, some features of our website may not function properly, and your user experience may be limited.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">7. Do Not Track Signals</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want your online activities tracked. Currently, there is no industry standard for recognizing and implementing DNT signals. We do not respond to DNT browser signals at this time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">8. Changes to This Cookie Policy</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. We will notify you of any significant changes by posting the updated policy on our website with a new "Last Updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">9. More Information</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                For more information about how we handle your personal data, please see our <Link to="/privacy-policy" className="text-terracotta hover:underline">Privacy Policy</Link>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-deep-calm mb-4">10. Contact Us</h2>
              <p className="text-deep-calm/80 leading-relaxed mb-4">
                If you have any questions about our use of cookies, please contact us:
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

export default CookiePolicy;
