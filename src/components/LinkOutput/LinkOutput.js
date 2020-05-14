import React, { useState } from 'react';
import { copyToClipboard } from '../../util';
import Button from '../Button';
import './LinkOutput.scss';

const LinkOutput = ({ hashid, url }) => {
  const [copyState, setCopyState] = useState(false);
  const shortlink = `https://rel.ink/${hashid}`;

  const handleCopy = (event) => {
    event.preventDefault();
    copyToClipboard(shortlink, setCopyState);
    document.querySelector('.btn-copy').classList.add('btn-copied');
    setTimeout(() => {
      setCopyState(false);
      document.querySelector('.btn-copy').classList.remove('btn-copied');
    }, 3000);
  };

  return (
    <div className="link__output">
      <div className="link__output__address">
        {url.length > 30 ? `${url.substr(0, 30)}...` : url}
      </div>
      <a href={shortlink} className="link__output__result">
        {shortlink}
      </a>
      <Button
        title={copyState ? 'Copied!' : 'Copy'}
        variant="btn-copy"
        action={handleCopy}
      />
    </div>
  );
};

export default LinkOutput;
