import { FiInstagram } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-charcoal-black text-soft-white py-16">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left: Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              The Elevate Collective
            </h3>
            <p className="text-soft-white/70 leading-relaxed">
              Strength of Mind & Body. Built for Balance.
            </p>
          </div>

          {/* Center: Links */}
          <div>
            <h4 className="font-accent text-sm uppercase tracking-wider mb-4 text-muted-gold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-soft-white/70 hover:text-muted-gold transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#experiences" className="text-soft-white/70 hover:text-muted-gold transition-colors duration-300">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#upcoming" className="text-soft-white/70 hover:text-muted-gold transition-colors duration-300">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a href="#join" className="text-soft-white/70 hover:text-muted-gold transition-colors duration-300">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Social & Legal */}
          <div>
            <h4 className="font-accent text-sm uppercase tracking-wider mb-4 text-muted-gold">
              Connect
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft-white hover:text-muted-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <FiInstagram className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft-white hover:text-muted-gold transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#privacy" className="text-soft-white/70 hover:text-muted-gold transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-soft-white/70 hover:text-muted-gold transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" className="text-soft-white/70 hover:text-muted-gold transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="border-t border-soft-white/20 pt-8 text-center text-soft-white/50 text-sm">
          <p>&copy; 2025 The Elevate Collective. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
