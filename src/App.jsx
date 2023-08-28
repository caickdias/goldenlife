import './App.css'

import Navbar from './components/_layout/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CounterSection from './components/CounterSection';
import MoreAboutSection from './components/MoreAboutSection';

function App() {

  return (
    <>
      <Navbar />

      <HeroSection />

      <AboutSection />

      <CounterSection />

      <MoreAboutSection />
    </>
  )
}

export default App
