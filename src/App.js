import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LinkInput from './components/LinkInput';
import Blurb from './components/Blurb';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <LinkInput />
      <Blurb />
    </React.Fragment>
  );
}

export default App;
