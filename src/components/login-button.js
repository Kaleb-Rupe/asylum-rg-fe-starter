import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import './login-button.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect();
  };

  return (
    <button onClick={handleLogin} className="button">
      Log In
    </button>
  );
};

export default LoginButton;
