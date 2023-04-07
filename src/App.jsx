import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CallToAction from './components/CallToAction';
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CallToAction />
      </main>
    </>
  );
};

export default App;
