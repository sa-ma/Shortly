import React from 'react';
import { Link } from 'react-router-dom';
import './LinkButton.scss';

const LinkButton = ({ title, location, prop }) => {
  return (
    <Link to={location || '/signup'} className={`link-btn ${prop ? prop : ''}`}>
      {title}
    </Link>
  );
};

export default LinkButton;
