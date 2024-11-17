import React from 'react';
import NavBar from './NavBar';
import Login from './login';
import "../styles/components/index.css"

function Log() {
  return (
    <div className="login-page">
      <NavBar />
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Log