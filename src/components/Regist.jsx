import React from 'react';
import NavBar from './NavBar';
import Register from './register';


function Regist() {
  return (
    <div className="login-page">
      <NavBar />
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Register />
        </div>
      </div>
    </div>
  );
}

export default Regist