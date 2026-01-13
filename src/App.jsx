import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ValuesApproachSplit from './components/ValuesApproachSplit';
import Founders from './components/Founders';
import CorporatePartners from './components/CorporatePartners';
import UpcomingMoments from './components/UpcomingMoments';
import JoinCollective from './components/JoinCollective';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import BackgroundMusic from './components/BackgroundMusic';
import ScrollIndicator from './components/ScrollIndicator';
import FloatingSocials from './components/FloatingSocials';
import SEO from './components/SEO';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminPostEditor from './pages/AdminPostEditor';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import RefundPolicy from './pages/RefundPolicy';

// Homepage component
const HomePage = () => (
  <div className="App bg-deep-calm scroll-smooth">
    <SEO
      title="The Elevate Collective - Premium Wellbeing Retreats in Dubai & UAE"
      description="Experience transformative wellbeing retreats in Dubai and UAE. The Elevate Collective offers premium programs blending strength training, mindfulness, and recovery for high performers seeking clarity and renewal."
      keywords="wellbeing retreats UAE, Dubai wellbeing programs, mindfulness retreats, strength training Dubai, corporate wellbeing UAE, meditation retreats, fitness retreats Dubai, holistic wellbeing, mental health retreats, performance coaching"
      image="https://theelevatecolective.com/images/brand/og-image.jpg"
      type="website"
    />
    <Nav />
    <ScrollIndicator />
    <Hero />
    <AboutUs />
    <ValuesApproachSplit />
    <UpcomingMoments />
    <Founders />
    <CorporatePartners />
    <JoinCollective />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <div className="relative">
        <SmoothScroll>
          <BackgroundMusic />
          <FloatingSocials />
          <Routes>
            {/* Main website routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<><Nav /><Blog /><Footer /></>} />
            <Route path="/blog/:slug" element={<><Nav /><BlogPost /><Footer /></>} />

            {/* Legal policy routes */}
            <Route path="/privacy-policy" element={<><Nav /><PrivacyPolicy /><Footer /></>} />
            <Route path="/cookie-policy" element={<><Nav /><CookiePolicy /><Footer /></>} />
            <Route path="/refund-policy" element={<><Nav /><RefundPolicy /><Footer /></>} />

            {/* Admin routes */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/post/:id" element={<AdminPostEditor />} />
          </Routes>
        </SmoothScroll>
      </div>
    </Router>
  );
}

export default App;
