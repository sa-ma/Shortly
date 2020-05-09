import React from 'react';
import Button from '../Button';
import './LinkOutput.scss';

const LinkOutput = ({ copyState, action }) => {
  return (
    <div className="link__output">
      <a href="https://samailabala.com" className="link__output__address">
        https://samailabala.com
      </a>
      <a href="https://samailabala.com" className="link__output__result">
        rel.lnk/a3qk
      </a>
      <Button
        title={copyState ? 'Copied!' : 'Copy'}
        variant="btn-copy"
        action={action}
      />
    </div>
  );
};

export default LinkOutput;
