// App.js

import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Shared/Navbar';

import Notifications from './components/UserModule/Notifications';

import LoginPage from './components/Authentication/LoginPage';
import SignupPage from './components/Authentication/SignupPage';
import './styles/global.css';
import Calendar from 'react-calendar';
import AdminDashboard from './components/AdminModule/Dashboard';
import UserDashboard from './components/UserModule/Dashboard';
import PastCommunications from './components/UserModule/PastCommunications';
import SettingsPage from './Settings/Settings';
import Footer from './components/Shared/Footer';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/' && location.pathname !== '/signup' && <Navbar />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/reports" element={<PastCommunications/>} />
        <Route path="/settings" element={<SettingsPage/>} />
        
      </Routes>
      {location.pathname !== '/' && location.pathname !== '/signup' && <Footer />}

      
    </div>
  );
}

export default App;
