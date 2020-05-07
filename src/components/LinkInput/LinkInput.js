import React, { useState } from 'react';
import './LinkInput.scss';

const LinkInput = () => {
  const [link, setLink] = useState('');
  const [error, setError] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!link) {
      setError('Please add a link');
      document.querySelector('.link__input').classList.add('link__input-error');
    } else {
      setError('');
      document
        .querySelector('.link__input')
        .classList.remove('link__input-error');
    }
  };
  return (
    <form className="link" onSubmit={handleSubmit}>
      <div className="link__group">
        <input
          type="text"
          value={link}
          onChange={(event) => setLink(event.target.value)}
          className="link__input"
          placeholder="Shorten a link here"
        />
        <p className="link__error">{error}</p>
      </div>
      <button type="submit" className="link__btn">
        Shorten it!
      </button>
    </form>
  );
};

export default LinkInput;
