// UserDashboard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './UserModule.css';

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <h2>Welcome to Your Dashboard</h2>
      <p>Track your company communications and activities here.</p>
      <div className="user-dashboard-links">
        <Link to="/notifications">View Notifications</Link>
        <Link to="/reports">View Past Communications</Link>
        <Link to="/settings">Update Communication Form</Link>
      </div>
    </div>
  );
};

export default UserDashboard;
