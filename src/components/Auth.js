import React from 'react';

import './Auth.css';
import { useDispatch } from 'react-redux';
import { login } from '../store/auth-slice';

const Auth = () => {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login());
  }

  return (
    <div className="container">
      <h1>Login</h1>{' '}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
