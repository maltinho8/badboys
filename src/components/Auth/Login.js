import React, { useState } from 'react';
import fire from '../../fire.js';
import { useUser } from '../hooks';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { handleLogin } = useUser();

  const handleSubmit = e => {
    e.preventDefault();
    handleLogin(email, password);
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={({ target }) => setEmail(target.value)}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          onChange={({ target }) => setPassword(target.value)}
          placeholder="Password"
        />
        <br />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};
export default Login;
