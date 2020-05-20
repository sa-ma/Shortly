import React, { useContext } from 'react';
import { logoutUser } from '../../services';
import UserContext from '../../context/UserContext';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import LinkInput from '../../components/LinkInput';
import Blurb from '../../components/Blurb';
import Cta from '../../components/Cta';
import Footer from '../../components/Footer';

const Home = ({ setStatus }) => {
  const isLoggedIn = useContext(UserContext);
  const handleSignOut = async (event) => {
    event.preventDefault();
    await logoutUser(setStatus);
  };

  return (
    <React.Fragment>
      <Header status={isLoggedIn} handleSignOut={handleSignOut} />
      <Hero />
      <LinkInput status={isLoggedIn} />
      <Blurb />
      <Cta />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
