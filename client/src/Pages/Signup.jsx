import React from 'react';
import "./Signup.css";
import { Link } from 'react-router-dom' ;
import Login from './Login'
import Header from "../Component/Header"

function Signup() {
  return (
    <div>
      <Header/>
      <div className="SignUp-page">
        <div className="SignUp-container">
          {/* Header */}
          <div className="SignUp-header">
            <h2>Create Account</h2>
            <div className="SignUp-underline"></div>
          </div>
          
          <form id="signupForm" onSubmit={(e) => {
            e.preventDefault();
            const firstName = document.getElementById('FirstName').value;
            const lastName = document.getElementById('LastName').value;
            const phoneNumber = document.getElementById('PhoneNumber').value;
            const email = document.getElementById('Email').value;
            const password = document.getElementById('password').value;
            const passwordConfirmation = document.getElementById('passwordConfirmation').value;
            const dob = document.getElementById('dob').value;
            const gender = document.querySelector('input[name="gender"]:checked');
            
            if(firstName && lastName && phoneNumber && email && password && 
               passwordConfirmation && dob && gender) {
              
              if(password !== passwordConfirmation) {
                alert('Passwords do not match');
                return;
              }
              
              window.location.href = '/home-page2';
            } else {
              alert('Please complete all information');
            }
          }}>
            <div className="SignUp-inputs">
              {/* Form Fields - Left and Right Sections */}
              <div className="SignUp-form">
                {/* Right Section (Personal Info) */}
                <div className="SignUp-right">
                  <label htmlFor="FirstName">
                    First Name <span className="required-indicator"></span>
                  </label>
                  <input
                    type="text"
                    id="FirstName"
                    name="FirstName"
                    placeholder="First Name"
                    required
                    aria-required="true"
                  />
                  <label htmlFor="LastName">
                    Last Name <span className="required-indicator"></span>
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    name="LastName"
                    placeholder="Last Name"
                    required
                    aria-required="true"
                  />
                  <label htmlFor="PhoneNumber">
                    Phone Number <span className="required-indicator"></span>
                  </label>
                  <input
                    type="tel"
                    id="PhoneNumber"
                    name="PhoneNumber"
                    placeholder="+213 "
                    required
                    aria-required="true"
                  />
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
                </div>
  
                {/* Left Section (Password, DOB, Gender) */}
                <div className="SignUp-left">
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
                  <label htmlFor="passwordConfirmation">
                    Password Confirmation <span className="required-indicator"></span>
                  </label>
                  <input
                    type="password"
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    placeholder="Confirm your password"
                    required
                    aria-required="true"
                  />
                  <label htmlFor="dob">
                    Date of Birth <span className="required-indicator"></span>
                  </label>
                  <input 
                    type="date" 
                    id="dob" 
                    name="dob" 
                    required
                    aria-required="true" 
                  />
                  {/* Gender Selection */}
                  <div className="gender-selection">
                    <label htmlFor="gender">
                      Gender <span className="required-indicator"></span>
                    </label>
                    <div className="radio-group">
                      <div className="radio-option">
                        <input 
                          type="radio" 
                          id="male" 
                          name="gender" 
                          value="Male" 
                          required
                          aria-required="true" 
                        />
                        <label htmlFor="male">Male</label>
                      </div>
                      <div className="radio-option">
                        <input 
                          type="radio" 
                          id="female" 
                          name="gender" 
                          value="Female" 
                        />
                        <label htmlFor="female">Female</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Submit Button */}
            <div className="SignUp-submit">
              <Link to="/home-page2" onClick={(e) => {
                const firstName = document.getElementById('FirstName').value;
                const lastName = document.getElementById('LastName').value;
                const phoneNumber = document.getElementById('PhoneNumber').value;
                const email = document.getElementById('Email').value;
                const password = document.getElementById('password').value;
                const passwordConfirmation = document.getElementById('passwordConfirmation').value;
                const dob = document.getElementById('dob').value;
                const gender = document.querySelector('input[name="gender"]:checked');
                
                if(!(firstName && lastName && phoneNumber && email && password && 
                   passwordConfirmation && dob && gender)) {
                  e.preventDefault();
                  alert('Please complete all information');
                  return;
                }
                
                if(password !== passwordConfirmation) {
                  e.preventDefault();
                  alert('Passwords do not match');
                  return;
                }
              }}>
                <button type="button">Sign Up</button>
              </Link>
            </div>
          </form>
          
          <p className="SignUp-footer">
            Already have an Account ? <Link to="/Login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
  }
  
  export default Signup