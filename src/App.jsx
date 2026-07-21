import './App.css';
import useReveal     from './hooks/useReveal';

import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import StatsBar      from './components/StatsBar';
import WhyJoin       from './components/WhyJoin';
import HowItWorks    from './components/HowItWorks';
import Testimonials  from './components/Testimonials';
import JoinCTA       from './components/JoinCTA';
import Disclaimer    from './components/Disclaimer';
import Footer        from './components/Footer';

export default function App() {
  useReveal();

  return (
    <div className="page">
      <Navbar />
      <Hero />
      <StatsBar />
      <WhyJoin />
      <HowItWorks />
      <Testimonials />
      <JoinCTA />
      <Disclaimer />
      <Footer />
    </div>
  );
}
