import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Experiences from './components/Experiences';
import Founders from './components/Founders';
import JoinCollective from './components/JoinCollective';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import BackgroundMusic from './components/BackgroundMusic';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminPostEditor from './pages/AdminPostEditor';

// Homepage component
const HomePage = () => (
  <div className="App bg-deep-calm">
    <Nav />
    <Hero />
    <AboutUs />
    <Experiences />
    <Founders />
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
          <Routes>
            {/* Main website routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<><Nav /><Blog /><Footer /></>} />
            <Route path="/blog/:slug" element={<><Nav /><BlogPost /><Footer /></>} />

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
