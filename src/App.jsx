import './App.css'

import Navbar from './components/_layout/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CounterSection from './components/CounterSection';
import MoreAboutSection from './components/MoreAboutSection';
import ScheduleSection from './components/ScheduleSection';
import TicketsSection from './components/TicketsSection';
import SponsorsSection from './components/SponsorsSection';
import SpeakersSection from './components/SpeakersSection';
import Footer from './components/_layout/Footer';
import TimerSection from './components/TimerSection';

function App() {

  return (
    <>
      <Navbar />

      <HeroSection />

      <SpeakersSection />

      <AboutSection />

      <CounterSection />

      <MoreAboutSection />

      <ScheduleSection />

      <TicketsSection />

      <SponsorsSection />

      <TimerSection />

      <Footer />

    </>
  )
}

export default App
