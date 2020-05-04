import React from 'react';
import Button from '../Button';
import HeroImage from '../../assets/images/illustration-working.svg';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__image__container">
        <img src={HeroImage} className="hero__image" alt="Someone at work" />
      </div>
      <div className="hero__description">
        <h1 className="hero__description__header">
          More than just shorter links
        </h1>
        <p className="hero__description__subtitle">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button title="Get Started" prop="btn-hero" />
      </div>
    </div>
  );
};

export default Hero;
