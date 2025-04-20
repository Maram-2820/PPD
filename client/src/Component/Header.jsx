import './Header.css';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header className="main-header">
        <div className="header-left">
          <img src={logo} alt="Tabibi Logo" className="logo" />
        </div>
        <nav className="header-center">
            <Link to="/">Home</Link>
            <a href="#">Doctors</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
        <div className="header-right">
        <Link to="/signup">
            <button className="create-account-btn">Create Account</button>
          </Link>
        </div>
      </header>
    );
  }
  
  export default Header;