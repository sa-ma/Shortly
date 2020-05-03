import React from 'react';
import './Button.scss';

const Button = ({ title }) => {
  return (
    <a href="#action" className="btn">
      {title}
    </a>
  );
};

export default Button;
