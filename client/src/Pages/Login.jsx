import React from 'react';
import'./Login.css';
import { Link } from 'react-router-dom';
import Header from "../Component/Header"

function Login() {
  return(
    <div>
      <Header/>
      <div className="login-page">
        <div className="login-container">
          <div className="login-header">
            <h2>Log In</h2>
            <div className="login-underline"></div>
          </div>
  
          <form id="loginForm" onSubmit={(e) => {
            e.preventDefault();
            const email = document.getElementById('Email').value;
            const password = document.getElementById('password').value;
            
            if(email && password) {
              window.location.href = '/home-page2';
            } else {
              alert('Please complete all information');
            }
          }}>
            <div className="login-inputs">
              <label htmlFor="Email">
                Email <span className="required-indicator"></span>
              </label>
              <input
                type="email"
                id="Email"
                name="Email"
                placeholder="Email@example.com"
                required
                aria-required="true"
              />
  
              <label htmlFor="password">
                Password <span className="required-indicator"></span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                aria-required="true"
              />
            </div>
            <div className="remember-forgot">
              <label htmlFor="remember-me">
                <input type="checkbox" id="remember-me" /> Remember Me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <div className="login-submit">
              <Link to="/home-page2" onClick={(e) => {
                const email = document.getElementById('Email').value;
                const password = document.getElementById('password').value;
                
                if(!email || !password) {
                  e.preventDefault();
                  alert('Please complete all information');
                }
              }}>
                <button type="button">Log In</button>
              </Link>
            </div>
          </form>
          <p className="login-footer">
            New Here? <Link to="/Signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login; 