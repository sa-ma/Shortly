import React from 'react';
import Grid1 from '../../assets/images/icon-brand-recognition.svg';
import Grid2 from '../../assets/images/icon-detailed-records.svg';
import Grid3 from '../../assets/images/icon-fully-customizable.svg';
import './Blurb.scss';

const Blurb = () => {
  return (
    <div className="blurb" id="features">
      <h2 className="blurb__title">Advanced Statistics</h2>
      <p className="blurb__subtitle">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <section className="blurb__grid">
        <div className="blurb__grid__item blurb__grid__item-1 ">
          <div className="u-circle-container">
            <img src={Grid1} alt="Brand Recognition Icon" />
          </div>
          <h3 className="blurb__grid__item__title">Brand Recognition</h3>
          <p className="blurb__grid__item__content">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div className="blurb__grid__item blurb__grid__item-2">
          <div className="u-circle-container">
            <img src={Grid2} alt="Icon for Detailed Records" />
          </div>
          <h3 className="blurb__grid__item__title">Detailed Records</h3>
          <p className="blurb__grid__item__content">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        <div className="blurb__grid__item blurb__grid__item-3">
          <div className="u-circle-container">
            <img src={Grid3} alt="Fully Customizable Icon" />
          </div>
          <h3 className="blurb__grid__item__title">Fully Customizable</h3>
          <p className="blurb__grid__item__content">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blurb;
