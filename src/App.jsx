import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-coastal-deep bg-coastal-light min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <VideoSection />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
