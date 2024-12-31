// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/admin-dashboard">Admin Dashboard</Link>
      <Link to="/user-dashboard">User Dashboard</Link>
      <Link to="/calendar">Calendar</Link>
      <Link to="/notifications">Notifications</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/settings">Settings</Link>
      


      <button>      <Link to="/">Logout</Link>
      </button>
    </nav>
  );
};

export default Navbar;
