import './App.css'

import Navbar from './components/_layout/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CounterSection from './components/CounterSection';
import MoreAboutSection from './components/MoreAboutSection';
import SpeakersSection from './components/SpeakersSection';
import ScheduleSection from './components/ScheduleSection';
import TicketsSection from './components/TicketsSection';

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

    </>
  )
}

export default App
