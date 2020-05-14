import React from 'react';
import Button from '../Button';
import './LinkOutput.scss';

const LinkOutput = ({ copyState, action, hashid, url }) => {
  return (
    <div className="link__output">
      <div className="link__output__address">
        {url.length > 30 ? `${url.substr(0, 30)}...` : url}
      </div>
      <a href={`https://rel.ink/${hashid}`} className="link__output__result">
        {`https://rel.ink/${hashid}`}
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
