import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
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
    const items = localStorage.getItem('links');
    if (items) {
      setData(JSON.parse(items));
    }
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
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      const { ok, result } = await response.json();
      if (!ok) {
        setError('Error shortening link. Please try again later.');
        return;
      }
      const shortlinks = [
        ...data,
        {
          hashid: result.code,
          short_link: result.full_short_link,
          url: result.original_link,
        },
      ];
      localStorage.setItem('links', JSON.stringify(shortlinks));
      setData(shortlinks);
      setLoading(false);
    } catch (error) {
      setError('Error shortening link. Try again later');
      setLoading(false);
    }
  };
  return (
    <div className="link-container">
      <div className="u-content-container">
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
        {data &&
          data.map((item, index) => (
            <LinkOutput
              key={index}
              shortlink={item.short_link}
              url={item.url}
            />
          ))}
      </div>
    </div>
  );
};

export default LinkInput;
