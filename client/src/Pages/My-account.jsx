import React from "react";
import "./My-account.css";
import { Link } from 'react-router-dom';

function MyAccount() {
  return (
    <div className="account-container">
      <h2>My Account</h2>
    <div className="MyAcc-underline"></div>
      
      <div className="account-section">
        <h3>Personal Information</h3>
        <div className="info-row">
          <label>First Name:</label>
          <span>First Name</span>
        </div>
        <div className="info-row">
          <label>Last Name:</label>
          <span>Last Name</span>
        </div>
        <div className="info-row">
          <label>Phone Number:</label>
          <span>Phone Number</span>
        </div>
        <div className="info-row">
          <label>Email:</label>
          <span>Email Address</span>
        </div>
        <div className="info-row">
          <label>Date of Birth:</label>
          <span>Date of Birth</span>
        </div>
      </div>

      <div className="account-section">
        <h3>Security Details</h3>
        <div className="info-row">
          <label>Two-Factor Authentication:</label>
          <span>Two-Factor Authentication</span>
        </div>
        <div className="info-row">
          <label>Last Password Change:</label>
          <span>Last Password Change Date</span>
        </div>

        <div className="button-container">
        <Link to="/home-page2">
            <button className="action-button">Back to Home</button>
        </Link>
        <Link to="/SignUp">
            <button className="action-button">Create New Account</button>
        </Link>
        <Link to="/Login">
            <button className="action-button">Access Existing Account</button>
        </Link>
      </div>

      </div>
    </div>
  );
}

export default MyAccount;
