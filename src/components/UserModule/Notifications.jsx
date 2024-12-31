// Notifications.jsx
import React, { useState, useEffect } from 'react';
import './UserModule.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications (for now, we are simulating with static data)
    const fetchNotifications = () => {
      const notificationsData = [
        { message: 'Upcoming meeting with Company A', dueDate: '2024-12-15' },
        { message: 'Overdue communication with Company B', dueDate: '2024-12-10' },
      ];
      setNotifications(notificationsData);
    };
    fetchNotifications();
  }, []);

  return (
    <div className="notifications">
      <h3>Your Notifications</h3>
      {notifications.length === 0 ? (
        <p>No notifications at the moment.</p>
      ) : (
        <ul>
          {notifications.map((notif, index) => (
            <li key={index}>
              {notif.message} - <strong>Due by: {notif.dueDate}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
