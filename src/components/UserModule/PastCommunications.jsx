// PastCommunications.jsx

import React, { useState, useEffect } from 'react';
import './UserModule.css';

const PastCommunications = () => {
  const [communications, setCommunications] = useState([]);

  useEffect(() => {
    // Fetch past communications (mock data for now)
    const fetchCommunications = () => {
      const data = [
        { company: 'Company A', message: 'Meeting rescheduled to 2024-12-15', date: '2024-12-01' },
        { company: 'Company B', message: 'Response received on proposal', date: '2024-11-20' },
      ];
      setCommunications(data);
    };
    fetchCommunications();
  }, []);

  return (
    <div className="past-communications">
      <h3>Past Communications</h3>
      {communications.length === 0 ? (
        <p>No past communications to show.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {communications.map((com, index) => (
              <tr key={index}>
                <td>{com.company}</td>
                <td>{com.message}</td>
                <td>{com.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PastCommunications;
