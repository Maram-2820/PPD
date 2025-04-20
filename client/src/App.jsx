import React from 'react';
//import { BrowserRouter, Routes , Route } from 'react-router-dom';
//import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import HomePage from './Pages/home-page';
import HomePage2 from './Pages/home-page2';
import MyAccount from './Pages/My-account';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home-page2" element={<HomePage2 />} />
        <Route path="/My-account" element={<MyAccount />} />
        <Route path="/Login" element={< Login />} />
        <Route path="/SignUp" element={< Signup />} />
      </Routes>
    </Router>
  );
}


export default App
