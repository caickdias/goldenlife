import './App.css'

import Navbar from './components/_layout/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CounterSection from './components/CounterSection';
import MoreAboutSection from './components/MoreAboutSection';
import ScheduleSection from './components/ScheduleSection';
import TicketsSection from './components/TicketsSection';
import SponsorsSection from './components/SponsorsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/_layout/Footer';

function App() {

  return (
    <>
      <Navbar />

      <HeroSection />

      <AboutSection />

      <CounterSection />

      <MoreAboutSection />

      <ScheduleSection />

      <TicketsSection />

      <SponsorsSection />

      <ContactSection />

      <Footer />

    </>
  )
}

export default App
