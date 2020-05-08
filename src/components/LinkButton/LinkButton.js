import React from 'react';
import './LinkButton.scss';

const LinkButton = ({ title, prop }) => {
  return (
    <a href="#action" className={`link-btn ${prop ? prop : ''}`}>
      {title}
    </a>
  );
};

export default LinkButton;
