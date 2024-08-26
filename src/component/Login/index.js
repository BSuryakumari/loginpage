import React from 'react';
import { useGoogleLogin } from 'react-oauth/google';
import './index.css';

const Login = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
    },
    onError: () => {
      console.error('Google login failed');
    },
  });

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login Page</h1>
        <button className="login-btn" onClick={() => login()}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
