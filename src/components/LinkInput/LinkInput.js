import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import { fetchFromStorage } from '../../util';
import LinkOutput from '../LinkOutput';
import Button from '../Button';
import './LinkInput.scss';

const LinkInput = () => {
  const isLoggedIn = useContext(UserContext);
  const [link, setLink] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const [...items] = fetchFromStorage();
    setData(items);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!link) {
      setError('Please add a link');
      document.querySelector('.link__input').classList.add('link__input-error');
      return;
    }
    if (data.length >= 3 && isLoggedIn === false) {
      setError('Please login to shorten more links');
      document.querySelector('.link__input').classList.add('link__input-error');
      return;
    }
    try {
      setError('');
      setLoading(true);
      const response = await fetch('https://rel.ink/api/links/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: link }),
      });
      const result = await response.json();
      if (!response.ok) {
        setError(result.url);
        return;
      }

      localStorage.setItem(result.hashid, JSON.stringify(result));
      setData([result, ...data]);
      setLoading(false);
    } catch (error) {
      setError('Error shortening link. Try again later');
      setLoading(false);
    }
  };

  return (
    <div className="link-container">
      <form className="link" onSubmit={handleSubmit}>
        <div className="link__group">
          <label htmlFor="link" aria-hidden="true">
            Shorten Link
          </label>
          <input
            id="link"
            aria-label="short link"
            type="text"
            value={link}
            onChange={(event) => setLink(event.target.value)}
            className="link__input"
            placeholder="Shorten a link here"
          />
          <p className="link__error">{error}</p>
        </div>
        <Button
          title={`${loading ? 'Loading...' : 'Shorten It!'}`}
          variant="btn-shorten"
        />
      </form>
      {data.map((item, index) => (
        <LinkOutput key={index} hashid={item.hashid} url={item.url} />
      ))}
    </div>
  );
};

export default LinkInput;
