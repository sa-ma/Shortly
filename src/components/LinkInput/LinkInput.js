import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchFromStorage } from '../../util';
import LinkOutput from '../LinkOutput';
import Button from '../Button';
import './LinkInput.scss';

const LinkInput = () => {
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
    try {
      setLoading(true);
      const { data: result } = await axios.post('https://rel.ink/api/links/', {
        url: link,
      });
      localStorage.setItem(result.hashid, JSON.stringify(result));
      setData([result, ...data]);
      setLoading(false);
    } catch (error) {
      setError('Error shortening link. Try again later');
      setLoading(false);
      document
        .querySelector('.link__input')
        .classList.remove('link__input-error');
    }
  };

  return (
    <section className="link-container">
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
        <Button title={`${loading ? 'Loading...' : 'Shorten It!'}`} />
      </form>
      {data.map((item, index) => (
        <LinkOutput key={index} hashid={item.hashid} url={item.url} />
      ))}
    </section>
  );
};

export default LinkInput;
