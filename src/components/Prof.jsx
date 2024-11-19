import React from 'react';
import NavBar from './NavBar';
import Profile from './profile';
import "../styles/components/index.css"

function Prof() {
  return (
    <div className="login-page">
      <NavBar />
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Prof