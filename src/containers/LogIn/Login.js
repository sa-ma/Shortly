import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../../services/index';
import Logo from '../../assets/images/logo.svg';
import Button from '../../components/Button';
import './Login.scss';

const Login = () => {
  const [loading, setLoading] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState();
  const history = useHistory();

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      await loginUser(email);
      history.replace('/');
    } catch (error) {
      setError('Error sending link. Please refresh the page.');
    }
  };
  return (
    <div className="login">
      <div className="login__logo">
        <Link to="/">
          <img src={Logo} alt="Shortly Logo" />
        </Link>
      </div>

      <form action="" onSubmit={handleSubmit} className="login__form">
        <label htmlFor="email" className="login__form__label">
          Email me a secure login
        </label>
        <input
          type="email"
          className="login__form__input"
          value={email}
          onChange={handleChange}
          required
          placeholder="Email"
        />
        <p className="login__form__error">{error}</p>
        <Button title={loading ? 'Sending...' : 'Send'} variant="btn-login" />
      </form>
    </div>
  );
};

export default Login;
