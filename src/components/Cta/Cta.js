import React from 'react';
import LinkButton from '../LinkButton';
import './Cta.scss';

const Cta = () => {
  return (
    <div className="cta">
      <h2 className="cta__header">Boost your links today</h2>
      <LinkButton title="Get Started" prop="link-btn-cta" />
    </div>
  );
};

export default Cta;
