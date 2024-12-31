// CommunicationForm.jsx

import React, { useState } from 'react';
import './UserModule.css';

const CommunicationForm = () => {
  const [formData, setFormData] = useState({
    company: '',
    communicationMethod: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, we would send formData to the API
    console.log('Form Data submitted:', formData);
  };

  return (
    <div className="communication-form">
      <h3>Update Communication Method</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Company:</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Communication Method:</label>
          <input
            type="text"
            name="communicationMethod"
            value={formData.communicationMethod}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommunicationForm;
