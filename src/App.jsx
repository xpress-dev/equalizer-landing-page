import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer/';
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default App;
