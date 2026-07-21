import './App.css';
import useReveal     from './hooks/useReveal';

import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import StatsBar      from './components/StatsBar';
import Gallery       from './components/Gallery';
import WhyJoin       from './components/WhyJoin';
import HowItWorks    from './components/HowItWorks';
import Testimonials  from './components/Testimonials';
import JoinCTA       from './components/JoinCTA';
import Disclaimer    from './components/Disclaimer';
import Footer        from './components/Footer';

export default function App() {
  useReveal(); // wires up scroll-reveal for all .reveal elements

  return (
    <div className="page">
      <Navbar />
      <Hero />
      <StatsBar />
      <Gallery />
      <WhyJoin />
      <HowItWorks />
      <Testimonials />
      <JoinCTA />
      <Disclaimer />
      <Footer />
    </div>
  );
}
