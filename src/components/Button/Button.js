import React from 'react';
import './Button.scss';

const Button = ({ title, action, variant }) => {
  return (
    <button
      onClick={action || null}
      type={`${action ? 'button' : 'submit'}`}
      className={`btn ${variant || ''}`}
    >
      {title}
    </button>
  );
};

export default Button;
