import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import LinkInput from '../../components/LinkInput';
import Blurb from '../../components/Blurb';
import Cta from '../../components/Cta';
import Footer from '../../components/Footer';

const Home = () => {
  const user = useContext(UserContext);
  return (
    <React.Fragment>
      <Header status={user.isLoggedIn} />
      <Hero />
      <LinkInput status={user.isLoggedIn} />
      <Blurb />
      <Cta />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
