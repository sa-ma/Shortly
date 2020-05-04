import React from 'react';
import './Button.scss';

const Button = ({ title, prop }) => {
  return (
    <a href="#action" className={`btn ${prop ? prop : ''}`}>
      {title}
    </a>
  );
};

export default Button;
