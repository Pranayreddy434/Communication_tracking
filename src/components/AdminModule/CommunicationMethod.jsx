import React, { useState, useEffect } from 'react';
import './AdminModule.css';

const CommunicationMethod = () => {
  const [method, setMethod] = useState('');
  const [methodsList, setMethodsList] = useState([]);

  // Load methods from local storage when the component mounts
  useEffect(() => {
    const storedMethods = JSON.parse(localStorage.getItem('communicationMethods')) || [];
    setMethodsList(storedMethods);
  }, []);

  const handleChange = (e) => {
    setMethod(e.target.value);
  };

  const handleAddMethod = () => {
    if (method.trim() && !methodsList.includes(method)) {
      const updatedMethods = [...methodsList, method];

      // Update the state and local storage
      setMethodsList(updatedMethods);
      localStorage.setItem('communicationMethods', JSON.stringify(updatedMethods));

      // Clear the input
      setMethod('');
    }
  };

  const handleDeleteMethod = (methodToDelete) => {
    const updatedMethods = methodsList.filter((m) => m !== methodToDelete);

    // Update the state and local storage
    setMethodsList(updatedMethods);
    localStorage.setItem('communicationMethods', JSON.stringify(updatedMethods));
  };

  return (
    <div className="communication-method">
      <h3>Communication Methods</h3>
      <div className="add-method">
        <input
          type="text"
          value={method}
          onChange={handleChange}
          placeholder="Enter communication method"
        />
        <button onClick={handleAddMethod}>Add Method</button>
      </div>
      <div className="methods-list">
        {methodsList.length > 0 ? (
          <ul>
            {methodsList.map((method, index) => (
              <li key={index}>
                {method}{' '}
                <button onClick={() => handleDeleteMethod(method)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No communication methods added yet.</p>
        )}
      </div>
    </div>
  );
};

export default CommunicationMethod;
