import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='mainstyle'>
      <div className='emp'>Employee Management System</div>
      <nav className='navstyle'>
        <ul>
          <li><Link to="/" className='nav-style'>Home</Link></li>
          <li><Link to="/about" className='nav-style'>About</Link></li>
          <li><Link to="/adduser" className='nav-style'>AddUser</Link></li>
          <li><Link to="/alluser" className='nav-style'>AllUser</Link></li>
          <li><Link to="/contact" className='nav-style'>Contact</Link></li>
          <li><Link to="/login" className='nav-style'>Login</Link></li>
          <li><Link to="/signup" className='nav-style'>Signup</Link></li>

        </ul>
      </nav>
    </div>
  )
}

export default Navigation;
