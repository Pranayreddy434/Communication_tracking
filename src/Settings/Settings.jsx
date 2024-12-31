import React, { useState, useEffect } from 'react';
import './Settings.css';

const SettingsPage = () => {
  // State to store form values
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [notificationEnabled, setNotificationEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Load saved settings from localStorage when the component mounts
  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem('companySettings'));

    if (savedSettings) {
      setCompanyName(savedSettings.companyName || '');
      setCompanyEmail(savedSettings.companyEmail || '');
      setNotificationEnabled(savedSettings.notificationEnabled || true);
      setDarkMode(savedSettings.darkMode || false);
    }
  }, []);

  // Handle form submission and store the settings in localStorage
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the current settings
    const settings = {
      companyName,
      companyEmail,
      notificationEnabled,
      darkMode,
    };

    // Save the settings to localStorage
    localStorage.setItem('companySettings', JSON.stringify(settings));

    // Notify the user
    alert('Settings saved successfully!');
  };

  return (
    <div className={`settings-container ${darkMode ? 'dark' : ''}`}>
      <h2>Company Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter company name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="companyEmail">Company Email</label>
          <input
            type="email"
            id="companyEmail"
            value={companyEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
            placeholder="Enter company email"
          />
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={notificationEnabled}
              onChange={() => setNotificationEnabled(!notificationEnabled)}
            />
            Enable Notifications
          </label>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            Enable Dark Mode
          </label>
        </div>

        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default SettingsPage;
