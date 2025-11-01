import Nav from './components/Nav';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Experiences from './components/Experiences';
import Founders from './components/Founders';
import JoinCollective from './components/JoinCollective';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <div className="App bg-deep-calm">
        <Nav />
        <Hero />
        <AboutUs />
        <Experiences />
        <Founders />
        <JoinCollective />
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
