import React, { useEffect, useState } from 'react';
import AddCompany from './AddCompany';
import CommunicationMethod from './CommunicationMethod';
import './AdminModule.css';

const AdminDashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [showAddCompany, setShowAddCompany] = useState(false);

  // Load companies from local storage on mount
  useEffect(() => {
    const storedCompanies = JSON.parse(localStorage.getItem('companies')) || [];
    setCompanies(storedCompanies);
  }, []);

  const toggleAddCompany = () => {
    setShowAddCompany(!showAddCompany);
  };

  // Function to handle adding a new company
  const handleAddCompany = (newCompany) => {
    const updatedCompanies = [...companies, newCompany];
    setCompanies(updatedCompanies);

    // Save updated companies to local storage
    localStorage.setItem('companies', JSON.stringify(updatedCompanies));
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <button onClick={toggleAddCompany}>Add Company</button>
      {showAddCompany && <AddCompany onAddCompany={handleAddCompany} />}

      <div className="company-list">
        <h3>Companies</h3>
        {companies.length === 0 ? (
          <p>No companies found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Industry</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, index) => (
                <tr key={index}>
                  <td>{company.name}</td>
                  <td>{company.industry}</td>
                  <td>{company.location}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <CommunicationMethod />
    </div>
  );
};

export default AdminDashboard;
